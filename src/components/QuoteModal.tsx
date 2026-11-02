import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = 'Gate Fabrication' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: defaultService,
    location: 'Hebbal, Bangalore',
    materialPreference: 'Mild Steel (MS)',
    dimensions: '',
    description: '',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please accept the consent checkbox to proceed.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate lead dispatch / tracking
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello SAM Fabrication, I would like to request a quote:%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A*Project:* ${encodeURIComponent(formData.projectType)}%0A*Location:* ${encodeURIComponent(formData.location)}%0A*Material:* ${encodeURIComponent(formData.materialPreference)}%0A*Dimensions:* ${encodeURIComponent(formData.dimensions || 'To be measured on-site')}%0A*Requirements:* ${encodeURIComponent(formData.description || 'Please contact me for site measurement')}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#121820] border border-[#222E3E] rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B0F15] border-b border-[#1E2735]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B37]">Free Consultation & Site Visit</span>
            <h3 className="text-lg font-bold text-white font-serif-heading">Get a Fabrication Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-gray-200">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#D49B37]/20 text-[#D49B37] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-serif-heading">Quotation Request Received!</h4>
              <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior engineering team will review your fabrication requirements and contact you within 2 business hours.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#1FAF38] hover:bg-[#1C9D32] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Directly on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {errorMsg && (
                <div className="p-3 bg-red-950/50 border border-red-800 rounded-lg text-red-200 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Your Name <span className="text-[#D49B37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#D49B37]"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Phone Number <span className="text-[#D49B37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#D49B37]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Email Address <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#D49B37]"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Project Type <span className="text-[#D49B37]">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white focus:outline-none focus:border-[#D49B37]"
                  >
                    <option value="Gate Fabrication">Gate Fabrication (Sliding / Swing)</option>
                    <option value="Window Grills">Window Grills & Safety Grills</option>
                    <option value="MS Gates">Mild Steel (MS) Gates</option>
                    <option value="SS Railings">Stainless Steel (SS) Railings</option>
                    <option value="MS Railings">Mild Steel (MS) Railings</option>
                    <option value="Staircase Fabrication">Metal / Floating Staircase</option>
                    <option value="Car Parking Sheds">Car Parking Shed / Carport</option>
                    <option value="Metal Sheds">Rooftop Metal Sheds</option>
                    <option value="Structural Steel">Structural Steel / PEB Warehouse</option>
                    <option value="Canopy Fabrication">Metal Canopy / Pergola</option>
                    <option value="Custom Welding">Custom Metalwork & Welding</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Location & Material Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Project Location in Bangalore
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hebbal, Yelahanka, Whitefield"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#D49B37]"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Material Preference
                  </label>
                  <select
                    value={formData.materialPreference}
                    onChange={(e) => setFormData({ ...formData, materialPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white focus:outline-none focus:border-[#D49B37]"
                  >
                    <option value="Mild Steel (MS)">Mild Steel (MS) - Powder Coated</option>
                    <option value="Stainless Steel (SS 304)">Stainless Steel (Grade 304 - Rustproof)</option>
                    <option value="Glass and Stainless Steel">Toughened Glass + SS Posts</option>
                    <option value="Heavy Structural Steel">Heavy Structural I-Beam Channel</option>
                    <option value="Need Recommendation">Need Expert Recommendation</option>
                  </select>
                </div>
              </div>

              {/* Dimensions */}
              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Approximate Dimensions <span className="text-gray-500 font-normal">(Optional, e.g. 12ft width x 6ft height)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 14ft x 6ft gate, or 45 linear feet railing"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#D49B37]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Project Details / Special Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your design style, timeline, or site specific needs..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#0B0F15] border border-[#222E3E] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#D49B37]"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded border-gray-700 bg-gray-900 text-[#D49B37] focus:ring-0"
                />
                <label htmlFor="consent" className="text-[11px] text-gray-400 leading-tight">
                  I agree to receive a free consultation and fabrication quote from SAM Fabrication Engineering Work. We respect your privacy.
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 gold-shimmer-btn py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center justify-center cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-3 rounded-md bg-[#1FAF38] hover:bg-[#1C9D32] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  Instant WhatsApp
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Modal Footer Trust Bar */}
        <div className="px-6 py-3 bg-[#0B0F15] border-t border-[#1E2735] flex items-center justify-between text-[11px] text-gray-400">
          <span className="flex items-center text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D49B37] mr-1.5" />
            100% Free Consultation • No Obligation
          </span>
          <span className="text-[#D49B37] font-semibold">
            Bangalore Turnkey Service
          </span>
        </div>

      </div>
    </div>
  );
};

