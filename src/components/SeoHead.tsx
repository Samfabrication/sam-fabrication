import React, { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  canonicalUrl?: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonical,
  canonicalUrl,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  ogType = 'website',
  ogImage = 'https://samfabrication.in/images/hero-home.jpg',
  breadcrumbs,
  schema
}) => {
  const resolvedCanonical = canonical || canonicalUrl || 'https://samfabrication.in/';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;

      const updateMeta = (selector: string, attr: string, value: string) => {
        let el = document.querySelector(selector);
        if (!el) {
          el = document.createElement('meta');
          if (selector.startsWith('meta[name')) {
            const name = selector.match(/name="([^"]+)"/)?.[1];
            if (name) el.setAttribute('name', name);
          } else if (selector.startsWith('meta[property')) {
            const prop = selector.match(/property="([^"]+)"/)?.[1];
            if (prop) el.setAttribute('property', prop);
          }
          document.head.appendChild(el);
        }
        el.setAttribute(attr, value);
      };

      updateMeta('meta[name="description"]', 'content', description);
      updateMeta('meta[name="robots"]', 'content', robots);
      updateMeta('meta[property="og:title"]', 'content', title);
      updateMeta('meta[property="og:description"]', 'content', description);
      updateMeta('meta[property="og:url"]', 'content', resolvedCanonical);
      updateMeta('meta[property="og:type"]', 'content', ogType);
      updateMeta('meta[property="og:image"]', 'content', ogImage);
      updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
      updateMeta('meta[name="twitter:title"]', 'content', title);
      updateMeta('meta[name="twitter:description"]', 'content', description);
      updateMeta('meta[name="twitter:image"]', 'content', ogImage);

      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', resolvedCanonical);
    }
  }, [title, description, resolvedCanonical, robots, ogType, ogImage]);

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.label,
          ...(b.href ? { item: `https://samfabrication.in${b.href}` } : {})
        }))
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
};
