import React from 'react';
import { Home, ArrowRight, Phone } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteData';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Page Not Found (404) | SAM Fabrication Engineering Work"
        description="The page you requested could not be found. Return to SAM Fabrication Engineering Work Bangalore homepage or browse our services."
        canonical="https://samfabrication.in/404.html"
      />

      <section className="bg-[#0B0F15] text-white py-24 px-4 sm:px-6 lg:px-8 text-center min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto space-y-5">
          <div className="text-7xl font-extrabold text-[#D49B37] font-serif-heading">404</div>
          <h1 className="text-2xl font-bold font-serif-heading text-white">Page Not Found</h1>
          <p className="text-xs text-gray-400 leading-relaxed">
            The page you are looking for might have been moved or does not exist. Explore our fabrication services or contact us directly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-md gold-shimmer-btn text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center justify-center shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </a>
            <a
              href="/services/"
              className="w-full sm:w-auto px-6 py-3 rounded-md border border-gray-700 hover:border-gray-400 text-xs font-semibold text-white uppercase tracking-wider flex items-center justify-center transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#D49B37]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

