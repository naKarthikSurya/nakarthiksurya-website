import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { buildPageTitle, getCanonicalUrl, routeSeo, siteConfig } from "@/config/seo";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "profile" | "article";
  noIndex?: boolean;
  canonical?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  faqs?: Array<{ question: string; answer: string }>;
  isProject?: boolean;
  projectData?: {
    name: string;
    description: string;
    url?: string;
    image?: string;
    applicationCategory?: string;
    operatingSystem?: string;
  };
};

const toAbsoluteUrl = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const normalizedPath = url.startsWith("/") ? url : `/${url}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
};

const Seo = ({
  title,
  description,
  keywords,
  image,
  type,
  noIndex = false,
  canonical,
  structuredData,
  faqs,
  isProject = false,
  projectData,
}: SeoProps) => {
  const { pathname } = useLocation();
  const routeDefaults = routeSeo[pathname] ?? {};
  const canonicalUrl = canonical ?? getCanonicalUrl(pathname);
  const pageTitle = buildPageTitle(title ?? routeDefaults.title);
  const pageDescription = description ?? routeDefaults.description ?? siteConfig.defaultDescription;
  const pageKeywords = keywords ?? routeDefaults.keywords ?? siteConfig.defaultKeywords;
  const pageImage = toAbsoluteUrl(image ?? siteConfig.defaultOgImage);
  const pageType = type ?? routeDefaults.ogType ?? "website";
  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: pathname
      .split("/")
      .filter(Boolean)
      .reduce(
        (acc: Array<Record<string, unknown>>, curr, idx, arr) => {
          const url = `/${arr.slice(0, idx + 1).join("/")}`;
          const routeMeta = routeSeo[url];
          acc.push({
            "@type": "ListItem",
            position: idx + 2,
            name: routeMeta?.title ?? curr.charAt(0).toUpperCase() + curr.slice(1),
            item: `${siteConfig.siteUrl}${url}`,
          });
          return acc;
        },
        [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteConfig.siteUrl}/`,
          },
        ],
      ),
  };

  const defaultSchema: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
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
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.siteName,
      jobTitle: siteConfig.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.employer,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Panimalar Institute of Technology",
      },
      url: `${siteConfig.siteUrl}/`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      image: toAbsoluteUrl(siteConfig.defaultProfileImage),
      description: siteConfig.defaultDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        addressCountry: siteConfig.addressCountry,
      },
      sameAs: Array.from(new Set(siteConfig.sameAs)),
      knowsAbout: [
        "Artificial Intelligence",
        "Software Engineering",
        "Generative AI",
        "Multi-Agent Systems",
        "Retrieval-Augmented Generation (RAG)",
        "Natural Language Processing",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
      about: { "@id": `${siteConfig.siteUrl}/#person` },
      primaryImageOfPage: pageImage,
      inLanguage: siteConfig.language,
      dateModified: siteConfig.lastUpdated,
    },
    breadcrumbsSchema,
  ];

  if (routeDefaults.schemaType === "ProfilePage") {
    defaultSchema.push({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${canonicalUrl}#profilepage`,
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      mainEntity: { "@id": `${siteConfig.siteUrl}/#person` },
    });
  }

  if (routeDefaults.schemaType === "CollectionPage") {
    defaultSchema.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#collectionpage`,
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      mainEntity:
        routeDefaults.itemList?.length > 0
          ? {
              "@type": "ItemList",
              itemListElement: routeDefaults.itemList.map((name: string, index: number) => ({
                "@type": "ListItem",
                position: index + 1,
                name,
              })),
            }
          : undefined,
    });
  }

  if (routeDefaults.schemaType === "ContactPage") {
    defaultSchema.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${canonicalUrl}#contactpage`,
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      mainEntity: { "@id": `${siteConfig.siteUrl}/#person` },
    });
  }

  if (pathname === "/resume") {
    defaultSchema.push({
      "@context": "https://schema.org",
      "@type": "DigitalDocument",
      "@id": `${canonicalUrl}#resume`,
      name: "Karthik Surya Resume",
      url: toAbsoluteUrl(siteConfig.resumePath),
      encodingFormat: "application/pdf",
      creator: { "@id": `${siteConfig.siteUrl}/#person` },
    });
  }

  if (isProject && projectData) {
    defaultSchema.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: projectData.name,
      description: projectData.description,
      url: projectData.url ?? canonicalUrl,
      image: toAbsoluteUrl(projectData.image ?? siteConfig.defaultOgImage),
      applicationCategory: projectData.applicationCategory ?? "DeveloperApplication",
      operatingSystem: projectData.operatingSystem ?? "Any",
      author: {
        "@type": "Person",
        name: siteConfig.siteName,
      },
    });
  }

  if (faqs && faqs.length > 0) {
    defaultSchema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const customSchema = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];
  const schemas = [...defaultSchema, ...customSchema];

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />

      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="theme-color" content={siteConfig.themeColor} />

      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content={String(siteConfig.ogImageWidth)} />
      <meta property="og:image:height" content={String(siteConfig.ogImageHeight)} />
      <meta property="og:image:alt" content={siteConfig.defaultOgImageAlt} />
      <meta property="og:locale" content={siteConfig.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta property="article:modified_time" content={siteConfig.lastUpdated} />

      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;