import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface MobileActionBarProps {
  currentPath?: string;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ currentPath = '/' }) => {
  const getContextualWhatsAppText = () => {
    if (currentPath.includes('gate')) {
      return encodeURIComponent('Hello SAM Fabrication, I am interested in gate fabrication. Please share details and quotation information.');
    }
    if (currentPath.includes('grill')) {
      return encodeURIComponent('Hello SAM Fabrication, I need custom window grills for my property. Please share catalog and pricing.');
    }
    if (currentPath.includes('railing')) {
      return encodeURIComponent('Hello SAM Fabrication, I am looking for SS/MS balcony and staircase railings. Please provide an estimate.');
    }
    if (currentPath.includes('shed')) {
      return encodeURIComponent('Hello SAM Fabrication, I need a car parking or metal shed fabrication in Bangalore. Please share quotation details.');
    }
    return encodeURIComponent('Hello SAM Fabrication Engineering Work, I would like to enquire about your fabrication services.');
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F15]/95 backdrop-blur-md border-t border-[#1E2735] px-4 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        
        {/* WhatsApp Button (Green) */}
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${getContextualWhatsAppText()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-full bg-[#1FAF38] hover:bg-[#1C9D32] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-95"
          aria-label="Chat on WhatsApp with SAM Fabrication"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Call Now Button (Gold) */}
        <a
          href={`tel:${siteConfig.phoneClean}`}
          className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-full bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-95"
          aria-label="Call SAM Fabrication Bangalore"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Now</span>
        </a>

      </div>
    </div>
  );
};

