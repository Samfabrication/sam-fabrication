import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface HeaderProps {
  currentPath: string;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us/' },
    { label: 'Services', href: '/services/', hasDropdown: true },
    { label: 'Our Work', href: '/our-work/' },
    { label: 'Why Us', href: '/why-choose-us/' },
    { label: 'Areas We Serve', href: '/areas-we-serve/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact-us/' },
  ];

  const serviceSublinks = [
    { label: 'Gate Fabrication', href: '/services/gate-fabrication/' },
    { label: 'Window Grills', href: '/services/window-grills/' },
    { label: 'MS Gates', href: '/services/ms-gates/' },
    { label: 'SS Railings', href: '/services/ss-railings/' },
    { label: 'MS Railings', href: '/services/ms-railings/' },
    { label: 'Staircase Fabrication', href: '/services/staircase-fabrication/' },
    { label: 'Car Parking Sheds', href: '/services/car-parking-sheds/' },
    { label: 'Metal Sheds', href: '/services/metal-sheds/' },
    { label: 'Structural Steel', href: '/services/structural-steel-fabrication/' },
    { label: 'Canopy Fabrication', href: '/services/canopy-fabrication/' },
    { label: 'Custom Welding', href: '/services/custom-welding-fabrication/' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F15]/95 backdrop-blur-md border-b border-[#1E2735] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 group"
            title="SAM Fabrication – Metal Fabrication Works in Bangalore"
            aria-label="SAM Fabrication – Metal Fabrication Works in Bangalore"
          >
            <img 
              src="/images/sam-logo.png" 
              alt="SAM Fabrication Engineering Work - Metal Fabrication Works in Bangalore" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              width="120"
              height="75"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <a
                      href={link.href}
                      className={`flex items-center px-3.5 py-2 text-sm font-medium transition-colors ${
                        active 
                          ? 'text-[#D49B37] font-semibold' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`ml-1 w-3.5 h-3.5 transition-transform ${servicesDropdown ? 'rotate-180 text-[#D49B37]' : ''}`} />
                    </a>
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D49B37]" />
                    )}

                    {/* Services Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-64 bg-[#121820] border border-[#222E3E] rounded-b-lg shadow-2xl py-2 z-50">
                        {serviceSublinks.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 text-xs font-medium text-gray-300 hover:bg-[#1A2432] hover:text-[#D49B37] transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={link.label} className="relative">
                  <a
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium transition-colors ${
                      active 
                        ? 'text-[#D49B37] font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D49B37]" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Button (Get a Quote) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenQuote}
              className="gold-shimmer-btn inline-flex items-center px-5 py-2.5 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider shadow-md hover:shadow-[#D49B37]/30 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 mr-2" />
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-gray-700 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E141D] border-b border-[#222E3E] px-4 pt-4 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  active 
                    ? 'bg-[#1E2735] text-[#D49B37] font-semibold pl-4 border-l-2 border-[#D49B37]' 
                    : 'text-gray-300 hover:bg-[#151D28] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full gold-shimmer-btn py-3 rounded-md text-sm font-bold text-gray-950 uppercase tracking-wider shadow-md flex items-center justify-center cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

