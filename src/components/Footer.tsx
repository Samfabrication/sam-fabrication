import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A0E] text-gray-300 border-t border-[#1C2533] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1A2433]">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-1 space-y-4">
            <a href="/" className="inline-block">
              <img 
                src="/images/sam-logo.png" 
                alt="SAM Fabrication Engineering Work Logo" 
                className="h-16 w-auto object-contain"
                width="120"
                height="75"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-xs text-gray-400 leading-relaxed">
              Premium architectural welding, gate fabrication, safety grills, stainless steel railings, and structural steel works in Bangalore.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-[11px] font-semibold tracking-wider uppercase text-[#D49B37] bg-[#161D26] px-3 py-1 rounded border border-[#2B384A]">
                ISO Compliance Standards
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase border-l-2 border-[#D49B37] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/" className="hover:text-[#D49B37] transition-colors">Home</a></li>
              <li><a href="/about-us/" className="hover:text-[#D49B37] transition-colors">About Us</a></li>
              <li><a href="/services/" className="hover:text-[#D49B37] transition-colors">Services</a></li>
              <li><a href="/our-work/" className="hover:text-[#D49B37] transition-colors">Our Work</a></li>
              <li><a href="/why-choose-us/" className="hover:text-[#D49B37] transition-colors">Why Us</a></li>
              <li><a href="/areas-we-serve/" className="hover:text-[#D49B37] transition-colors">Areas We Serve</a></li>
              <li><a href="/blog/" className="hover:text-[#D49B37] transition-colors">Blog</a></li>
              <li><a href="/contact-us/" className="hover:text-[#D49B37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase border-l-2 border-[#D49B37] pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/services/gate-fabrication/" className="hover:text-[#D49B37] transition-colors">Gate Fabrication</a></li>
              <li><a href="/services/window-grills/" className="hover:text-[#D49B37] transition-colors">Window Grills</a></li>
              <li><a href="/services/ms-gates/" className="hover:text-[#D49B37] transition-colors">MS Gates</a></li>
              <li><a href="/services/ss-railings/" className="hover:text-[#D49B37] transition-colors">SS Railings</a></li>
              <li><a href="/services/ms-railings/" className="hover:text-[#D49B37] transition-colors">MS Railings</a></li>
              <li><a href="/services/staircase-fabrication/" className="hover:text-[#D49B37] transition-colors">Staircases</a></li>
              <li><a href="/services/car-parking-sheds/" className="hover:text-[#D49B37] transition-colors">Car Parking Sheds</a></li>
              <li><a href="/services/structural-steel-fabrication/" className="hover:text-[#D49B37] transition-colors">Structural Steel</a></li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs & Topics */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase border-l-2 border-[#D49B37] pl-2.5">
              Areas We Serve
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/areas-we-serve/north-bangalore/" className="hover:text-[#D49B37] transition-colors">North Bangalore Hub</a></li>
              <li><a href="/areas-we-serve/south-bangalore/" className="hover:text-[#D49B37] transition-colors">South Bangalore Hub</a></li>
              <li><a href="/areas-we-serve/east-bangalore/" className="hover:text-[#D49B37] transition-colors">East Bangalore Hub</a></li>
              <li><a href="/areas-we-serve/west-bangalore/" className="hover:text-[#D49B37] transition-colors">West Bangalore Hub</a></li>
              <li><a href="/locations/hebbal/" className="hover:text-[#D49B37] transition-colors">Hebbal & Kempapura</a></li>
              <li><a href="/locations/yelahanka/" className="hover:text-[#D49B37] transition-colors">Yelahanka New Town</a></li>
              <li><a href="/locations/whitefield/" className="hover:text-[#D49B37] transition-colors">Whitefield & ITPL</a></li>
              <li><a href="/locations/hsr-layout/" className="hover:text-[#D49B37] transition-colors">HSR Layout Sectors</a></li>
            </ul>
          </div>

          {/* Col 5: Get in Touch & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase border-l-2 border-[#D49B37] pl-2.5">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href={`tel:${siteConfig.phoneClean}`} 
                className="flex items-center text-gray-300 hover:text-[#D49B37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D49B37] mr-2.5 shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
              <a 
                href={`mailto:${siteConfig.email}`} 
                className="flex items-center text-gray-300 hover:text-[#D49B37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D49B37] mr-2.5 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 text-[#D49B37] mr-2.5 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-white uppercase mb-2">Follow Us</p>
              <div className="flex items-center space-x-3">
                <a 
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20SAM%20Fabrication`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#18222E] flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-[#1E2B3A] transition-all"
                  aria-label="WhatsApp"
                >
                  <span className="text-sm font-bold">WA</span>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#18222E] flex items-center justify-center text-gray-300 hover:text-pink-400 hover:bg-[#1E2B3A] transition-all"
                  aria-label="Instagram"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#18222E] flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-[#1E2B3A] transition-all"
                  aria-label="Facebook"
                >
                  <span className="text-sm font-bold">FB</span>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#18222E] flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-[#1E2B3A] transition-all"
                  aria-label="YouTube"
                >
                  <span className="text-sm font-bold">YT</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="/privacy-policy/" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions/" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
            <a href="/sitemap.xml" className="hover:text-gray-300 transition-colors">HTML / XML Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

