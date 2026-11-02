import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://samfabrication.in${item.href}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <ol className="flex items-center space-x-2 text-xs text-gray-400 overflow-x-auto whitespace-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={item.href || item.label || index} className="flex items-center">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-600 mx-1.5 shrink-0" />}
              {isLast ? (
                <span className="text-[#D49B37] font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-white transition-colors flex items-center"
                >
                  {isFirst && <Home className="w-3.5 h-3.5 mr-1 text-gray-400" />}
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

