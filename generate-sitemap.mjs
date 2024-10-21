import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import PagePaths from './src/PagePaths.js'; // Ensure correct path to PagePaths

// Define a function to exclude specific paths
function shouldExcludePath(path) {
  // Exclude all pages that start with /core/account and the /core/thank-you page
  return path.startsWith('/core/account') || path === '/core/thank-you';
}

async function generateSitemap() {
  // Create a stream to write the sitemap XML to
  const sitemapStream = new SitemapStream({
    hostname: 'https://urbisapp.com',  // Replace with your site's domain
  });

  // Filter out the excluded paths and add the rest to the sitemap
  Object.values(PagePaths)
    .filter((path) => !shouldExcludePath(path)) // Exclude restricted pages
    .forEach((path) => {
      sitemapStream.write({ url: path, changefreq: 'weekly', priority: 0.8 });
    });

  // End sitemap stream and convert it to a buffer
  sitemapStream.end();
  const sitemapOutput = await streamToPromise(sitemapStream).then((data) => data.toString());

  // Save the sitemap to the public directory (or wherever you serve your static assets)
  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(sitemapOutput);
  writeStream.end();

  console.log('Sitemap generated successfully!');
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
});
