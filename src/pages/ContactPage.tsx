import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Gate Fabrication',
    location: '',
    materialPreference: 'Mild Steel (MS)',
    message: '',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Please accept the consent checkbox to submit.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello SAM Fabrication, I am reaching out from your Contact Page:%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A*Project:* ${encodeURIComponent(formData.projectType)}%0A*Location:* ${encodeURIComponent(formData.location || 'Bangalore')}%0A*Message:* ${encodeURIComponent(formData.message || 'Please contact me for fabrication quotation')}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact SAM Fabrication Engineering Work',
    url: 'https://samfabrication.in/contact-us/',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phoneClean,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hebbal / Outer Ring Road Corridor',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560024',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <>
      <SeoHead
        title="Contact Us | Get a Free Quote | SAM Fabrication Engineering Work"
        description="Contact SAM Fabrication Engineering Work in Bangalore. Call +91 98765 43210 or request a free consultation and quotation for your fabrication project."
        canonical="https://samfabrication.in/contact-us/"
        schema={contactSchema}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact-us/' }
        ]}
      />

      {/* HERO SECTION */}
      <section className="bg-[#0B0F15] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#1E2735]">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D49B37] uppercase">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading">
            Let's Build Your Project Together
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Contact SAM Fabrication Engineering Work for quotes, site measurements, and custom fabrication inquiries across Bangalore.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Contact Information Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-6">
                <h2 className="text-lg font-bold font-serif-heading text-gray-950 border-l-3 border-[#D49B37] pl-3">
                  Direct Contact Information
                </h2>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF0D7] flex items-center justify-center text-[#B77C26] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">Call Us Directly</span>
                      <a href={`tel:${siteConfig.phoneClean}`} className="text-sm font-bold text-gray-950 hover:text-[#B77C26]">
                        {siteConfig.phone}
                      </a>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Mon - Sat: 9:00 AM - 8:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF0D7] flex items-center justify-center text-[#B77C26] shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">WhatsApp Inquiries</span>
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20SAM%20Fabrication`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-gray-950 hover:text-green-600"
                      >
                        +91 98765 43210 (Instant Chat)
                      </a>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Quick drawings &amp; photo estimates</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF0D7] flex items-center justify-center text-[#B77C26] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">Email Address</span>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-gray-950 hover:text-[#B77C26]">
                        {siteConfig.email}
                      </a>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Commercial RFQs &amp; architectural drawings</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF0D7] flex items-center justify-center text-[#B77C26] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">Workshop &amp; Service Hub</span>
                      <p className="text-xs font-semibold text-gray-900 leading-snug">
                        {siteConfig.address}
                      </p>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Serving all North, South, East &amp; West Bangalore</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Working Hours & Service Footprint Card */}
              <div className="bg-[#0B0F15] text-white rounded-xl p-6 border border-[#222E3E] space-y-4">
                <div className="flex items-center space-x-2 text-[#D49B37]">
                  <Clock className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">Operational Hours</h3>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-semibold text-white">9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-[#D49B37]">Site visits by prior appointment</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-800 text-[11px] text-gray-400 space-y-1">
                  <p className="font-bold text-white mb-1">Active Site Visit Zones:</p>
                  <p>Hebbal, Yelahanka, Manyata, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, Sarjapur &amp; Peenya.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Quote Request Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B77C26]">
                ONLINE QUOTE INQUIRY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-gray-950 mt-1 mb-2">
                Request a Free Quotation &amp; Site Visit
              </h2>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Fill out the details below. Our engineering team will review your specifications and contact you with preliminary estimates and scheduling.
              </p>

              {submitted ? (
                <div className="text-center py-10 space-y-4 bg-[#FAF0D7]/40 rounded-xl p-6 border border-[#E5C36B]/60">
                  <div className="w-14 h-14 bg-[#D49B37] text-gray-950 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif-heading text-gray-950">
                    Quote Request Successfully Sent!
                  </h3>
                  <p className="text-xs text-gray-700 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-gray-950">{formData.name}</strong>. Our senior fabrication estimator will review your details and connect with you via phone shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 rounded-lg bg-[#1FAF38] hover:bg-[#1C9D32] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Follow Up on WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 font-semibold mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-semibold mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 font-semibold mb-1">
                        Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-semibold mb-1">
                        Fabrication Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                      >
                        <option value="Gate Fabrication">Gate Fabrication (Sliding / Swing)</option>
                        <option value="Window Grills">Window Grills &amp; Safety Grills</option>
                        <option value="MS Gates">Mild Steel (MS) Gates</option>
                        <option value="SS Railings">Stainless Steel (SS) Railings</option>
                        <option value="MS Railings">Mild Steel (MS) Railings</option>
                        <option value="Staircase Fabrication">Metal &amp; Floating Staircases</option>
                        <option value="Car Parking Sheds">Car Parking Shed / Carports</option>
                        <option value="Metal Sheds">Rooftop Metal Sheds</option>
                        <option value="Structural Steel">Structural Steel / PEB Warehouse</option>
                        <option value="Canopy Fabrication">Metal Canopies &amp; Pergolas</option>
                        <option value="Custom Welding">Custom Welding &amp; Fabrication</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 font-semibold mb-1">
                        Project Location in Bangalore
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hebbal, Yelahanka, Whitefield"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 font-semibold mb-1">
                        Material Preference
                      </label>
                      <select
                        value={formData.materialPreference}
                        onChange={(e) => setFormData({ ...formData, materialPreference: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                      >
                        <option value="Mild Steel (MS)">Mild Steel (MS) - Powder Coated</option>
                        <option value="Stainless Steel (SS 304)">Stainless Steel (Grade 304)</option>
                        <option value="Glass and Stainless Steel">Toughened Glass + SS Posts</option>
                        <option value="Structural Steel">Heavy Structural I-Beam/Channel</option>
                        <option value="Need Recommendation">Need Expert Recommendation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-800 font-semibold mb-1">
                      Project Description &amp; Dimensions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please specify dimensions, preferred design style, or any existing AutoCAD drawings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-[#D49B37]"
                    />
                  </div>

                  <div className="flex items-start space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#D49B37]"
                    />
                    <label htmlFor="contact-consent" className="text-[11px] text-gray-500 leading-tight">
                      I consent to SAM Fabrication contacting me regarding this fabrication inquiry. Your data will never be shared with third parties.
                    </label>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 gold-shimmer-btn py-3 rounded-md text-xs font-bold text-gray-950 uppercase tracking-wider flex items-center justify-center cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5 mr-2" />
                      {isSubmitting ? 'Sending Request...' : 'Send Quote Request'}
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-4 py-3 rounded-md bg-[#1FAF38] hover:bg-[#1C9D32] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

