import React from 'react';
import { siteConfig } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070A0E] text-gray-300 border-t border-[#1C2533] pt-16 pb-28 lg:pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 5-Column Comprehensive Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8 pb-12">
          
          {/* Col 1: Architectural Metalwork */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base tracking-tight">
              Architectural Works
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/services/gate-fabrication/" className="text-gray-400 hover:text-white transition-colors">
                  Gate Fabrication
                </a>
              </li>
              <li>
                <a href="/services/ms-gates/" className="text-gray-400 hover:text-white transition-colors">
                  MS Main &amp; Sliding Gates
                </a>
              </li>
              <li>
                <a href="/services/window-grills/" className="text-gray-400 hover:text-white transition-colors">
                  Window Safety Grills
                </a>
              </li>
              <li>
                <a href="/services/ss-railings/" className="text-gray-400 hover:text-white transition-colors">
                  SS 304 Balcony Railings
                </a>
              </li>
              <li>
                <a href="/services/ms-railings/" className="text-gray-400 hover:text-white transition-colors">
                  MS Balcony &amp; Stair Railings
                </a>
              </li>
              <li>
                <a href="/services/staircase-fabrication/" className="text-gray-400 hover:text-white transition-colors">
                  Staircase Fabrication
                </a>
              </li>
              <li className="pt-1">
                <a href="/services/" className="text-[#D49B37] hover:text-[#E5B55D] font-medium transition-colors inline-flex items-center gap-1">
                  All Fabrication Services &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Sheds, Steel & Welding */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base tracking-tight">
              Sheds &amp; Welding
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/services/car-parking-sheds/" className="text-gray-400 hover:text-white transition-colors">
                  Car Parking Sheds
                </a>
              </li>
              <li>
                <a href="/services/metal-sheds/" className="text-gray-400 hover:text-white transition-colors">
                  Metal Sheds &amp; Roofing
                </a>
              </li>
              <li>
                <a href="/services/structural-steel-fabrication/" className="text-gray-400 hover:text-white transition-colors">
                  Heavy Structural Steel
                </a>
              </li>
              <li>
                <a href="/services/custom-welding-fabrication/" className="text-gray-400 hover:text-white transition-colors">
                  Welding &amp; Home Service
                </a>
              </li>
              <li>
                <a href="/services/canopy-fabrication/" className="text-gray-400 hover:text-white transition-colors">
                  Entrance &amp; Window Canopies
                </a>
              </li>
              <li>
                <a href="/services/event-fabrication/" className="text-gray-400 hover:text-white transition-colors">
                  Event Metal Fabrication
                </a>
              </li>
              <li className="pt-1">
                <a href="/fabrication-rates-bangalore/" className="text-[#D49B37] hover:text-[#E5B55D] font-medium transition-colors inline-flex items-center gap-1">
                  Fabrication Rates &amp; Price List &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Bangalore Locations */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base tracking-tight">
              Bangalore Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/locations/hebbal/" className="text-gray-400 hover:text-white transition-colors">
                  Hebbal &amp; Dasarahalli
                </a>
              </li>
              <li>
                <a href="/locations/yelahanka/" className="text-gray-400 hover:text-white transition-colors">
                  Yelahanka &amp; Kogilu
                </a>
              </li>
              <li>
                <a href="/locations/manyata-tech-park/" className="text-gray-400 hover:text-white transition-colors">
                  Manyata Tech Park &amp; Nagavara
                </a>
              </li>
              <li>
                <a href="/locations/whitefield/" className="text-gray-400 hover:text-white transition-colors">
                  Whitefield &amp; IT Corridor
                </a>
              </li>
              <li>
                <a href="/locations/electronic-city/" className="text-gray-400 hover:text-white transition-colors">
                  Electronic City &amp; Hosur Rd
                </a>
              </li>
              <li>
                <a href="/locations/hsr-layout/" className="text-gray-400 hover:text-white transition-colors">
                  HSR Layout &amp; South
                </a>
              </li>
              <li className="pt-1 border-t border-white/5">
                <a href="/areas-we-serve/" className="text-[#D49B37] hover:text-[#E5B55D] font-medium transition-colors inline-flex items-center gap-1">
                  All Bangalore Service Zones &rarr;
                </a>
              </li>
              <li className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-gray-500 pt-0.5">
                <a href="/areas-we-serve/north-bangalore/" className="hover:text-gray-300">North</a>
                <span>&bull;</span>
                <a href="/areas-we-serve/south-bangalore/" className="hover:text-gray-300">South</a>
                <span>&bull;</span>
                <a href="/areas-we-serve/east-bangalore/" className="hover:text-gray-300">East</a>
                <span>&bull;</span>
                <a href="/areas-we-serve/west-bangalore/" className="hover:text-gray-300">West</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Guides */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base tracking-tight">
              Company &amp; Guides
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/about-us/" className="text-gray-400 hover:text-white transition-colors">
                  About SAM Fabrication
                </a>
              </li>
              <li>
                <a href="/why-choose-us/" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/our-work/" className="text-gray-400 hover:text-white transition-colors">
                  Project Portfolio
                </a>
              </li>
              <li>
                <a href="/blog/" className="text-gray-400 hover:text-white transition-colors">
                  Technical Blog
                </a>
              </li>
              <li>
                <a href="/blog/how-to-choose-the-right-gate-for-your-home/" className="text-gray-400 hover:text-white transition-colors">
                  Gate Selection Guide
                </a>
              </li>
              <li>
                <a href="/blog/stainless-steel-vs-ms-railings/" className="text-gray-400 hover:text-white transition-colors">
                  SS vs MS Comparison
                </a>
              </li>
              <li>
                <a href="/why-choose-us/#faqs" className="text-gray-400 hover:text-white transition-colors">
                  Customer FAQs
                </a>
              </li>
              <li className="pt-1">
                <a href="/contact-us/" className="text-[#D49B37] hover:text-[#E5B55D] font-medium transition-colors inline-flex items-center gap-1">
                  Request a Quote &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Workshop */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base tracking-tight">
              Contact &amp; Workshop
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${siteConfig.phoneClean}`} 
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20SAM%20Fabrication`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors font-medium"
                >
                  WhatsApp: +91 94533 44824
                </a>
              </li>
              <li className="text-gray-500 text-[11px] pt-1">
                Workshop: Mon - Sat: 9:00 AM - 8:00 PM
              </li>
              <li className="pt-2 border-t border-white/5 space-y-1.5 text-xs">
                <div>
                  <a href="/privacy-policy/" className="text-gray-500 hover:text-gray-300 transition-colors">
                    Privacy Policy
                  </a>
                  <span className="text-gray-600 mx-1.5">&bull;</span>
                  <a href="/terms-and-conditions/" className="text-gray-500 hover:text-gray-300 transition-colors">
                    Terms
                  </a>
                  <span className="text-gray-600 mx-1.5">&bull;</span>
                  <a href="/sitemap.xml" className="text-gray-500 hover:text-gray-300 transition-colors">
                    Sitemap
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider Rule */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Info & Social Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8">
          
          {/* Address & Copyright */}
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              SAM Fabrication HQ, Dasarahalli Main Road Near Sobha Moonstone, Bangalore, Karnataka 560024.
            </p>
            <p className="text-xs text-gray-400 font-normal">
              &copy; {new Date().getFullYear()} SAM Fabrication Engineering Work. All rights reserved.
            </p>
          </div>

          {/* Rounded Social Icons */}
          <div className="flex items-center space-x-2.5 shrink-0">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D49B37] hover:text-gray-950 flex items-center justify-center text-white text-xs font-bold transition-all"
              aria-label="LinkedIn"
            >
              in
            </a>
            
            {/* X / Twitter */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D49B37] hover:text-gray-950 flex items-center justify-center text-white text-xs font-bold transition-all"
              aria-label="X (Twitter)"
            >
              &#120143;
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D49B37] hover:text-gray-950 flex items-center justify-center text-white text-xs font-bold transition-all"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D49B37] hover:text-gray-950 flex items-center justify-center text-white text-xs font-bold transition-all"
              aria-label="Facebook"
            >
              f
            </a>

            {/* WhatsApp */}
            <a 
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20SAM%20Fabrication`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-white text-xs font-bold transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>

      {/* Giant Bottom Brand Name Watermark */}
      <div className="w-full relative select-none pointer-events-none overflow-hidden mt-2 -mb-4 lg:-mb-10 text-center">
        <span 
          className="font-black tracking-tight text-[15vw] sm:text-[16vw] lg:text-[17vw] leading-none whitespace-nowrap bg-gradient-to-b from-white/[0.18] via-white/[0.06] to-transparent bg-clip-text text-transparent block select-none uppercase font-sans transform scale-y-90"
          style={{ letterSpacing: '-0.04em' }}
        >
          SAM Fabrication
        </span>
      </div>

    </footer>
  );
};
