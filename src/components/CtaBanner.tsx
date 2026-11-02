import React from 'react';
import { FileText, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#D49B37] via-[#E5A83B] to-[#F5A623] text-gray-950 py-7 px-4 sm:px-8 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Icon + Heading */}
        <div className="flex items-center space-x-5 text-center lg:text-left">
          <div className="hidden sm:flex w-14 h-14 bg-black/10 rounded-xl items-center justify-center shrink-0 border border-black/10 shadow-inner">
            <FileText className="w-7 h-7 text-gray-950" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 leading-tight">
              Let's Build Your Project
            </h3>
            <p className="text-xs sm:text-sm text-gray-900 font-medium mt-0.5">
              Get a free consultation and quote for your fabrication work.
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button + Call Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto justify-end">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#0B0F15] hover:bg-[#161D26] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#D49B37]" />
          </button>

          {/* Angled Call Separator / Box */}
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="flex items-center space-x-3 bg-black/15 hover:bg-black/25 px-5 py-2.5 rounded-md border border-black/10 transition-colors w-full sm:w-auto justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-gray-950" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-800">Call Us Now</span>
              <span className="block text-sm font-bold text-gray-950">{siteConfig.phone}</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

