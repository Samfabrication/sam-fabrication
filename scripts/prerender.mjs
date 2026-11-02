import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function prerender() {
  console.log('🚀 Starting Static SEO Prerender Pipeline for SAM Fabrication...');

  // 1. Read SEO Content Registry
  const registryRaw = fs.readFileSync(path.join(rootDir, 'SEO_CONTENT_REGISTRY.json'), 'utf-8');
  const registry = JSON.parse(registryRaw);

  // 2. Read compiled index.html template from dist
  const templatePath = path.join(rootDir, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }
  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  // 3. Create Vite SSR Instance
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { App } = await vite.ssrLoadModule('/src/App.tsx');
  const { siteConfig, servicesData, projectsData, regionsData } = await vite.ssrLoadModule('/src/data/siteData.ts');

  const sitemapUrls = [];

  for (const page of registry.pages) {
    console.log(`Prerendering route: ${page.url} (${page.title})`);

    // Render React App with initialPath
    const appHtml = renderToString(React.createElement(App, { initialPath: page.url }));

    // Prepare JSON-LD Schema for this route
    let pageSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://samfabrication.in/#entity',
          name: siteConfig.name,
          url: 'https://samfabrication.in',
          telephone: siteConfig.phoneClean,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Dasarahalli Main Road, Near Sobha Moonstone',
            addressLocality: 'Bangalore',
            addressRegion: 'Karnataka',
            postalCode: '560024',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 13.0489,
            longitude: 77.6052
          }
        },
        {
          '@type': 'WebSite',
          '@id': 'https://samfabrication.in/#website',
          url: 'https://samfabrication.in',
          name: siteConfig.name,
          publisher: { '@id': 'https://samfabrication.in/#entity' }
        }
      ]
    };

    if (page.category === 'services' && page.url !== '/services/') {
      const slug = page.url.replace('/services/', '').replace('/', '');
      const s = servicesData.find(item => item.slug === slug);
      if (s) {
        pageSchema['@graph'].push({
          '@type': 'Service',
          serviceType: s.title,
          provider: { '@id': 'https://samfabrication.in/#entity' },
          areaServed: { '@type': 'City', name: 'Bangalore' },
          description: s.fullDescription
        });
      }
    }

    if (page.category === 'regions' && page.url !== '/areas-we-serve/') {
      const slug = page.url.replace('/areas-we-serve/', '').replace('/', '');
      const reg = regionsData.find(r => r.slug === slug);
      if (reg) {
        pageSchema['@graph'].push({
          '@type': 'Service',
          serviceType: `Metal Fabrication in ${reg.name}`,
          provider: { '@id': 'https://samfabrication.in/#entity' },
          areaServed: reg.localities.map(loc => ({
            '@type': 'AdministrativeArea',
            name: `${loc}, ${reg.name}, Bangalore`
          })),
          description: reg.metaDescription
        });
      }
    }

    if (page.category === 'projects') {
      const slug = page.url.replace('/our-work/', '').replace('/', '');
      const proj = projectsData.find(p => p.slug === slug);
      if (proj) {
        pageSchema['@graph'].push({
          '@type': 'Article',
          headline: proj.title,
          description: proj.description,
          image: `https://samfabrication.in${proj.image}`,
          author: { '@id': 'https://samfabrication.in/#entity' },
          publisher: { '@id': 'https://samfabrication.in/#entity' }
        });
      }
    }

    // Replace Head Elements
    let finalHtml = baseHtml;

    // Title
    finalHtml = finalHtml.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
    
    // Meta Description
    finalHtml = finalHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${page.description}" />`
    );

    // Canonical
    finalHtml = finalHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="https://samfabrication.in${page.url}" />`
    );

    // OpenGraph & Twitter Tags
    const ogTags = `
    <!-- OpenGraph Metadata -->
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="https://samfabrication.in${page.url}" />
    <meta property="og:type" content="${page.category === 'blog' && page.url !== '/blog/' ? 'article' : 'website'}" />
    <meta property="og:image" content="https://samfabrication.in/images/hero-home.jpg" />
    <meta property="og:site_name" content="${siteConfig.name}" />
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://samfabrication.in/images/hero-home.jpg" />
    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json">
      ${JSON.stringify(pageSchema)}
    </script>
    `;

    finalHtml = finalHtml.replace('</head>', `${ogTags}\n  </head>`);

    // Inject prerendered App DOM
    finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine output file path
    let outputPath;
    if (page.url === '/' || page.url === '') {
      outputPath = path.join(rootDir, 'dist/index.html');
    } else {
      const routeDir = path.join(rootDir, 'dist', page.url);
      fs.mkdirSync(routeDir, { recursive: true });
      outputPath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(outputPath, finalHtml, 'utf-8');

    // Add to sitemap list
    sitemapUrls.push({
      loc: `https://samfabrication.in${page.url}`,
      priority: page.url === '/' ? '1.0' : page.category === 'services' ? '0.9' : page.category === 'locations' ? '0.85' : '0.8',
      changefreq: page.url === '/' ? 'weekly' : page.category === 'blog' ? 'weekly' : 'monthly'
    });
  }

  // Also Prerender Custom 404 Page
  console.log('Prerendering route: 404.html');
  const notFoundHtml = renderToString(React.createElement(App, { initialPath: '/404' }));
  let final404 = baseHtml.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
  final404 = final404.replace(/<title>.*?<\/title>/, `<title>Page Not Found (404) | ${siteConfig.name}</title>`);
  fs.writeFileSync(path.join(rootDir, 'dist/404.html'), final404, 'utf-8');

  // Generate XML Sitemap
  console.log('Generating sitemap.xml...');
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(rootDir, 'dist/sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), sitemapXml, 'utf-8');

  await vite.close();
  console.log(`\n🎉 Prerendering Complete! ${sitemapUrls.length} pages generated with 100% pre-rendered HTML & sitemap.`);
}

prerender().catch((err) => {
  console.error('Prerender error:', err);
  process.exit(1);
});

