import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteData';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms and Conditions';
  const canonical = isPrivacy ? 'https://samfabrication.in/privacy-policy/' : 'https://samfabrication.in/terms-and-conditions/';

  return (
    <>
      <SeoHead
        title={`${title} | SAM Fabrication Engineering Work`}
        description={`${title} for SAM Fabrication Engineering Work, Bangalore, India.`}
        canonical={canonical}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: title, href: isPrivacy ? '/privacy-policy/' : '/terms-and-conditions/' }
        ]}
      />

      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold font-serif-heading text-gray-950 border-b border-gray-200 pb-4">
            {title}
          </h1>

          <div className="text-xs text-gray-500">
            Last Updated: October 30, 2026 • SAM Fabrication Engineering Work, Bangalore, Karnataka
          </div>

          {isPrivacy ? (
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <h2 className="text-base font-bold text-gray-900 font-serif-heading">1. Introduction</h2>
              <p>
                SAM Fabrication Engineering Work ("we", "our", or "us") operates the website https://samfabrication.in. We respect the privacy of our visitors and customers. This Privacy Policy outlines how your personal information is collected, used, and safeguarded when you request quotations, submit measurements, or contact us.
              </p>

              <h2 className="text-base font-bold text-gray-900 font-serif-heading">2. Information We Collect</h2>
              <p>
                When you submit an inquiry through our quotation request forms, WhatsApp links, or direct phone calls, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name and contact phone number</li>
                <li>Email address (optional)</li>
                <li>Project location and property address for site measurements</li>
                <li>Architectural drawings, dimensions, and material preferences</li>
              </ul>

              <h2 className="text-base font-bold text-gray-900 font-serif-heading">3. How We Use Your Data</h2>
              <p>
                Your information is used solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Prepare and deliver custom fabrication quotations</li>
                <li>Schedule on-site measurement and engineering consultations</li>
                <li>Communicate project progress and installation timelines</li>
              </ul>
              <p>
                We do not sell, rent, or distribute your personal data to third-party telemarketers or advertisers.
              </p>

              <h2 className="text-base font-bold text-gray-900 font-serif-heading">4. Contacting Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, please email us at <strong>info@samfabrication.in</strong> or call <strong>+91 98765 43210</strong>.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <h2 className="text-base font-bold text-gray-900 font-serif-heading">1. General Terms</h2>
              <p>
                By using https://samfabrication.in and commissioning fabrication services from SAM Fabrication Engineering Work, you agree to these Terms and Conditions.
              </p>

              <h2 className="text-base font-bold text-gray-900 font-serif-heading">2. Quotations and Pricing</h2>
              <p>
                All verbal and initial online quotations are preliminary estimates subject to physical site measurement and structural verification. Formal quotations will specify gauge thicknesses, steel alloy grades (MS IS 2062, SS 304/316), coating specifications, and payment milestones.
              </p>

              <h2 className="text-base font-bold text-gray-900 font-serif-heading">3. Custom Fabrication &amp; Changes</h2>
              <p>
                Custom steel gates, window grills, staircases, and sheds are built according to approved drawings. Any alterations requested by the client after metal cutting or welding has commenced may incur additional material and labor costs.
              </p>

              <h2 className="text-base font-bold text-gray-900 font-serif-heading">4. Site Readiness and Handover</h2>
              <p>
                Clients must provide adequate site access and a 230V power supply for on-site welding equipment during installation. Completed structures must be inspected upon handover, and final payment is due upon successful completion.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

