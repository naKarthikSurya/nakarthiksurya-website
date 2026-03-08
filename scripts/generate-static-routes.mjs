import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  buildPageTitle,
  getCanonicalUrl,
  routeSeo,
  siteConfig,
} from "../src/config/seo-data.js";

const distDir = path.resolve(process.cwd(), "dist");
const baseHtmlPath = path.join(distDir, "index.html");

const toAbsoluteUrl = (url) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const normalizedPath = url.startsWith("/") ? url : `/${url}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
};

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const replaceOrInsert = (html, pattern, replacement) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace("</head>", `  ${replacement}\n  </head>`);
};

const replaceMeta = (html, attribute, name, content) => {
  const escapedContent = escapeHtml(content);
  const pattern = new RegExp(
    `<meta\\s+${attribute}=["']${name}["'][^>]*content=["'][^"']*["'][^>]*>`,
    "i",
  );

  return replaceOrInsert(
    html,
    pattern,
    `<meta ${attribute}="${name}" content="${escapedContent}" />`,
  );
};

const buildBreadcrumbSchema = (pathname) => {
  const segments = pathname.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteConfig.siteUrl}/`,
    },
  ];

  segments.forEach((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join("/")}`;
    const routeMeta = routeSeo[url];
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name:
        routeMeta?.title ??
        segment
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" "),
      item: getCanonicalUrl(url),
    });
  });

  return {
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

const buildStaticSchemas = (pathname, pageTitle, pageDescription, pageMeta) => {
  const canonicalUrl = getCanonicalUrl(pathname);
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      name: siteConfig.siteName,
      url: `${siteConfig.siteUrl}/`,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": `${siteConfig.siteUrl}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.siteName,
      jobTitle: siteConfig.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.employer,
      },
      url: `${siteConfig.siteUrl}/`,
      image: toAbsoluteUrl(siteConfig.defaultProfileImage),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: siteConfig.sameAs,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        addressCountry: siteConfig.addressCountry,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        "@id": `${siteConfig.siteUrl}/#website`,
      },
      about: {
        "@id": `${siteConfig.siteUrl}/#person`,
      },
      inLanguage: siteConfig.language,
      dateModified: siteConfig.lastUpdated,
    },
    buildBreadcrumbSchema(pathname),
  ];

  if (pageMeta?.schemaType === "ProfilePage") {
    graph.push({
      "@type": "ProfilePage",
      "@id": `${canonicalUrl}#profilepage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      mainEntity: {
        "@id": `${siteConfig.siteUrl}/#person`,
      },
      isPartOf: {
        "@id": `${siteConfig.siteUrl}/#website`,
      },
    });
  }

  if (pageMeta?.schemaType === "CollectionPage") {
    graph.push({
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#collectionpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      mainEntity:
        pageMeta.itemList?.length > 0
          ? {
              "@type": "ItemList",
              itemListElement: pageMeta.itemList.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item,
              })),
            }
          : undefined,
    });
  }

  if (pageMeta?.schemaType === "ContactPage") {
    graph.push({
      "@type": "ContactPage",
      "@id": `${canonicalUrl}#contactpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      about: {
        "@id": `${siteConfig.siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteConfig.siteUrl}/#person`,
      },
    });
  }

  if (pathname === "/resume") {
    graph.push({
      "@type": "DigitalDocument",
      "@id": `${canonicalUrl}#resume`,
      name: "Karthik Surya Resume",
      url: toAbsoluteUrl(siteConfig.resumePath),
      encodingFormat: "application/pdf",
      creator: {
        "@id": `${siteConfig.siteUrl}/#person`,
      },
    });
  }

  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": graph.filter(Boolean),
    },
    null,
    2,
  );
};

const buildHtml = async (pathname, pageMeta = {}) => {
  const pageTitle = buildPageTitle(pageMeta.title);
  const pageDescription = pageMeta.description ?? siteConfig.defaultDescription;
  const pageKeywords = pageMeta.keywords ?? siteConfig.defaultKeywords;
  const canonicalUrl = getCanonicalUrl(pathname);
  const robots = pageMeta.noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const ogType = pageMeta.ogType ?? "website";
  const pageImage = toAbsoluteUrl(siteConfig.defaultOgImage);
  const schemaJson = buildStaticSchemas(pathname, pageTitle, pageDescription, pageMeta);

  let html = await readFile(baseHtmlPath, "utf8");
  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(pageTitle)}</title>`,
  );
  html = replaceMeta(html, "name", "description", pageDescription);
  html = replaceMeta(html, "name", "keywords", pageKeywords);
  html = replaceMeta(html, "name", "author", siteConfig.author);
  html = replaceMeta(html, "name", "robots", robots);
  html = replaceMeta(html, "name", "googlebot", robots);
  html = replaceMeta(html, "name", "theme-color", siteConfig.themeColor);
  html = replaceMeta(html, "property", "og:type", ogType);
  html = replaceMeta(html, "property", "og:title", pageTitle);
  html = replaceMeta(html, "property", "og:description", pageDescription);
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "property", "og:site_name", siteConfig.siteName);
  html = replaceMeta(html, "property", "og:image", pageImage);
  html = replaceMeta(
    html,
    "property",
    "og:image:alt",
    siteConfig.defaultOgImageAlt,
  );
  html = replaceMeta(
    html,
    "property",
    "og:image:width",
    String(siteConfig.ogImageWidth),
  );
  html = replaceMeta(
    html,
    "property",
    "og:image:height",
    String(siteConfig.ogImageHeight),
  );
  html = replaceMeta(html, "property", "og:locale", siteConfig.locale);
  html = replaceMeta(html, "name", "twitter:card", "summary_large_image");
  html = replaceMeta(html, "name", "twitter:title", pageTitle);
  html = replaceMeta(html, "name", "twitter:description", pageDescription);
  html = replaceMeta(html, "name", "twitter:image", pageImage);
  html = replaceMeta(html, "name", "twitter:creator", siteConfig.twitterHandle);
  html = replaceMeta(html, "name", "twitter:site", siteConfig.twitterHandle);
  html = replaceMeta(
    html,
    "property",
    "article:modified_time",
    siteConfig.lastUpdated,
  );
  html = replaceOrInsert(
    html,
    /<link\s+rel=["']canonical["'][^>]*href=["'][^"']*["'][^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  html = replaceOrInsert(
    html,
    /<link\s+rel=["']alternate["'][^>]*hrefLang=["']en-IN["'][^>]*href=["'][^"']*["'][^>]*>/i,
    `<link rel="alternate" hrefLang="en-IN" href="${canonicalUrl}" />`,
  );
  html = html.replace(
    /<!-- STATIC_SEO:START -->[\s\S]*?<!-- STATIC_SEO:END -->/i,
    `<!-- STATIC_SEO:START -->\n    <script type="application/ld+json">\n${schemaJson}\n    </script>\n    <!-- STATIC_SEO:END -->`,
  );

  return html;
};

const writeRoute = async (pathname, pageMeta) => {
  const html = await buildHtml(pathname, pageMeta);
  const outputPath =
    pathname === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, pathname.slice(1), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
};

await Promise.all(
  Object.entries(routeSeo).map(([pathname, pageMeta]) => writeRoute(pathname, pageMeta)),
);

await writeFile(
  path.join(distDir, "404.html"),
  await buildHtml("/404", {
    title: "Page Not Found",
    description: "The page you requested could not be found.",
    keywords: "404, page not found",
    ogType: "website",
    noIndex: true,
  }),
  "utf8",
);

console.log("Generated static SEO entry points for portfolio routes.");