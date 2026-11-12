import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface GoogleMapEmbedProps {
  variant?: 'dark' | 'light';
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  variant = 'light',
  compact = false,
  title = 'Find Our Bangalore Fabrication Workshop',
  subtitle = 'Visit our workshop or book a mobile measurement & home welding van within 16–25 km across Bangalore.'
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-xl overflow-hidden border shadow-sm ${
        isDark
          ? 'bg-[#0B0F15] border-[#222E3E] text-white'
          : 'bg-white border-gray-200 text-gray-900'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Semantic NAP & Directions Column */}
        <div
          className={`lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-5 ${
            isDark ? 'border-b lg:border-b-0 lg:border-r border-[#1E2735]' : 'border-b lg:border-b-0 lg:border-r border-gray-200'
          }`}
        >
          <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase block">
              VERIFIED WORKSHOP LOCATION
            </span>
            <h3
              className={`text-xl font-bold font-serif-heading leading-snug ${
                isDark ? 'text-white' : 'text-gray-950'
              }`}
            >
              {title}
            </h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          </div>

          <address className="not-italic space-y-3 text-xs pt-2 border-t border-gray-200/20">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-[#D49B37] shrink-0 mt-0.5" />
              <div>
                <strong className={`block font-semibold ${isDark ? 'text-white' : 'text-gray-950'}`}>
                  {siteConfig.name}
                </strong>
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {siteConfig.address}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-[#D49B37] shrink-0" />
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className={`font-semibold hover:text-[#D49B37] transition-colors ${
                  isDark ? 'text-white' : 'text-gray-950'
                }`}
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-[#D49B37] shrink-0" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {siteConfig.workingHours} (Open Now for Workshop &amp; Site Visits)
              </span>
            </div>
          </address>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider inline-flex items-center transition-colors shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 mr-1.5" />
              <span>Get Directions</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className={`px-4 py-2.5 rounded-md border text-xs font-bold uppercase tracking-wider inline-flex items-center transition-colors ${
                isDark
                  ? 'border-gray-700 hover:border-[#D49B37] text-white'
                  : 'border-gray-300 hover:border-[#D49B37] text-gray-900'
              }`}
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#D49B37]" />
              <span>Call Workshop</span>
            </a>
          </div>
        </div>

        {/* Right Responsive Lazy-Loaded Google Map */}
        <div
          className={`lg:col-span-7 w-full bg-gray-100 ${
            compact ? 'h-[300px] sm:h-[340px]' : 'h-[340px] sm:h-[420px]'
          }`}
        >
          <iframe
            src={siteConfig.googleMapsEmbedUrl}
            title="Sam Fabrication & Engineering Works - Dasarahalli Main Road, Bangalore Map"
            width="600"
            height="450"
            className="w-full h-full border-0 block"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
};
