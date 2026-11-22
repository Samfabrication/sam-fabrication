import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
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
    <div className={`bg-[#0D121B] border-b border-[#1E2735]/80 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="py-2.5 w-full">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
          />
          <ol className="flex items-center space-x-2 text-xs sm:text-[13px] text-gray-400 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const isFirst = index === 0;

              return (
                <li key={item.href || item.label || index} className="flex items-center shrink-0">
                  {index > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500 mx-1.5 shrink-0" aria-hidden="true" />
                  )}
                  {isLast ? (
                    <span
                      className="text-[#D49B37] font-semibold tracking-wide"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-white text-gray-300 font-medium transition-colors flex items-center group"
                    >
                      {isFirst && (
                        <Home
                          className="w-3.5 h-3.5 mr-1.5 text-gray-400 group-hover:text-white transition-colors shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};
