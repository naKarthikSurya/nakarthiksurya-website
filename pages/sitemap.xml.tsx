import { GetServerSideProps } from 'next';
import { siteConfig } from '@/config/seo';
import { projects } from '@/config/projects';

/**
 * Generates the XML sitemap based on the site configuration and defined routes.
 * 
 * @returns {string} The generated XML sitemap as a string.
 */
const generateSiteMap = () => {
  const baseUrl = siteConfig.siteUrl.endsWith('/') 
    ? siteConfig.siteUrl.slice(0, -1) 
    : siteConfig.siteUrl;

  const dynamicProjectPages = projects.map(project => `/projects/${project.id}`);

  const pages = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/contact",
    "/resume",
    "/publications",
    "/certifications",
    "/education",
    ...dynamicProjectPages,
  ];

  const lastMod = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${`${baseUrl}${page}`}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>
`;
};

/**
 * SiteMap component (null as it only serves the XML response).
 */
function SiteMap() {
  return null;
}

/**
 * Server-side props to handle the sitemap request.
 */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
