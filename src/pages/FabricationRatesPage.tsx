import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Layers,
  Clock,
  Plus,
  Minus
} from 'lucide-react';
import { fabricationRatesData, siteConfig } from '../data/siteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';
import { CtaBanner } from '../components/CtaBanner';

interface FabricationRatesPageProps {
  onOpenQuote: (defaultService?: string) => void;
}

interface EstimatorPreset {
  id: string;
  label: string;
  unitLabel: string;
  defaultUnits: number;
  minPerUnit: number;
  maxPerUnit: number;
  note: string;
}

const estimatorPresets: EstimatorPreset[] = [
  {
    id: 'window-grills',
    label: 'MS Safety Window Grills',
    unitLabel: 'Area (Sq. Ft.)',
    defaultUnits: 80,
    minPerUnit: 180,
    maxPerUnit: 320,
    note: '10mm/12mm solid square bars with red-oxide & enamel coat'
  },
  {
    id: 'ms-gates',
    label: 'MS Sliding / Swing Main Gate',
    unitLabel: 'Area (Sq. Ft.)',
    defaultUnits: 70,
    minPerUnit: 350,
    maxPerUnit: 680,
    note: '14/16G TATA/Jindal RHS pipes, heavy track/hinges & PU paint'
  },
  {
    id: 'ss-railings',
    label: 'SS 304 Balcony / Stair Railing',
    unitLabel: 'Length (Running Ft.)',
    defaultUnits: 45,
    minPerUnit: 750,
    maxPerUnit: 1450,
    note: 'Genuine Jindal 304 grade with argon TIG welds & mirror/satin polish'
  },
  {
    id: 'ms-railings',
    label: 'MS Balcony / Staircase Railing',
    unitLabel: 'Length (Running Ft.)',
    defaultUnits: 45,
    minPerUnit: 420,
    maxPerUnit: 780,
    note: 'MS tubular sections with anti-rust epoxy primer & top coat'
  },
  {
    id: 'car-parking-sheds',
    label: 'Car Parking / Roofing Shed',
    unitLabel: 'Roof Area (Sq. Ft.)',
    defaultUnits: 250,
    minPerUnit: 220,
    maxPerUnit: 480,
    note: 'Structural truss + Tata Bluescope / polycarbonate sheet + grouting'
  },
  {
    id: 'structural-steel',
    label: 'Heavy Structural Steel (Supply + Fab)',
    unitLabel: 'Estimated Weight (Kg)',
    defaultUnits: 1000,
    minPerUnit: 95,
    maxPerUnit: 135,
    note: 'ISMB beams, channels & base plates (labour-only job work: ₹28–₹42/kg)'
  },
  {
    id: 'home-welding',
    label: 'On-Site Home Welding Repair',
    unitLabel: 'Job Complexity (1 = Minor, 3 = Multi-Point)',
    defaultUnits: 1,
    minPerUnit: 600,
    maxPerUnit: 1800,
    note: 'Same-day 16 km dispatch from Dasarahalli Main Road workshop'
  }
];

const rateFaqs = [
  {
    question: 'What is the current steel fabrication work rate per sq. ft. or per kg in Bangalore?',
    answer:
      'In Bangalore, standard Mild Steel (MS) window grill fabrication starts around ₹180 to ₹320 per sq. ft. (or ₹110–₹145/kg), MS main gates range from ₹350 to ₹680 per sq. ft., car parking & terrace roofing sheds range from ₹220 to ₹480 per sq. ft., SS 304 railings start around ₹750 per running ft., and heavy structural steel ranges between ₹95 and ₹135 per kg (with ₹28–₹42/kg for labour-only job work).'
  },
  {
    question: 'Why does fabrication rate vary between two Bangalore contractors?',
    answer:
      'Quotes vary based on raw steel thickness (18G thin commercial vs genuine 14/16G TATA or Jindal pipes), stainless steel grade (AISI 202 vs authentic rust-proof 304), CNC laser sheet thickness, welding consumables (arc vs argon TIG/MIG), surface coating (single enamel vs zinc epoxy primer + PU coat), and whether wall core-cutting, transport, and installation are included.'
  },
  {
    question: 'Do you charge extra for on-site measurement in Bangalore?',
    answer:
      'No. On-site measurement and engineering inspection across Bangalore are completely free for gates, window grills, balcony railings, sheds, and structural projects. You receive a clear written rate breakup before fabrication begins.'
  },
  {
    question: 'Do you undertake labour-only fabrication job work if I supply the steel?',
    answer:
      'Yes. For commercial PEB sheds, industrial trusses, and bulk apartment railings, we offer transparent per-kg labour-only job work starting at ₹28–₹42/kg depending on tonnage, welding specification, and erection height.'
  },
  {
    question: 'What is the minimum charge for home welding repair near Dasarahalli & Hebbal?',
    answer:
      'On-site residential welding visits within 16 km of our Dasarahalli Main Road workshop typically start from ₹600 to ₹1,500 depending on hinge/track hardware replacement and welding time.'
  }
];

export const FabricationRatesPage: React.FC<FabricationRatesPageProps> = ({ onOpenQuote }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(estimatorPresets[0].id);
  const [quantity, setQuantity] = useState<number>(estimatorPresets[0].defaultUnits);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activePreset = estimatorPresets.find((p) => p.id === selectedPresetId) || estimatorPresets[0];
  const safeQuantity = Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
  const estMin = Math.round(safeQuantity * activePreset.minPerUnit);
  const estMax = Math.round(safeQuantity * activePreset.maxPerUnit);

  const handlePresetChange = (id: string) => {
    setSelectedPresetId(id);
    const next = estimatorPresets.find((p) => p.id === id);
    if (next) setQuantity(next.defaultUnits);
  };

  return (
    <>
      <SeoHead
        title="Fabrication Work Rate in Bangalore (2026 Per Sq.Ft & Per Kg Price List) | SAM Fabrication"
        description="Check updated 2026 fabrication work rate in Bangalore for MS gates, window grills, SS 304 railings, car parking sheds, heavy structural steel (per kg/sq.ft) & home welding. Free site measurement."
        canonical="https://samfabrication.in/fabrication-rates-bangalore/"
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services/' },
          { label: 'Fabrication Work Rate in Bangalore', href: '/fabrication-rates-bangalore/' }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-[#0B0F15] text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1E2735]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#D49B37]/15 border border-[#D49B37]/40 text-[11px] font-bold tracking-[0.18em] text-[#D49B37] uppercase">
            TRANSPARENT BANGALORE PRICING GUIDE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading leading-tight">
            Fabrication Work Rate in Bangalore
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Compare itemized per sq. ft., per running ft., and per kg steel &amp; metalwork rates in Bangalore across genuine TATA, Jindal, and Apollo steel sections—complete with TIG/MIG welding, zinc epoxy primer, and installation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenQuote('Fabrication Rate Estimate')}
              className="px-6 py-3 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider flex items-center cursor-pointer transition-colors"
            >
              <span>Get Exact Itemized Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="px-6 py-3 rounded-md border border-gray-700 hover:border-[#D49B37] text-white text-xs font-bold uppercase tracking-wider flex items-center transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#D49B37]" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. COMPLETE RATE CARD TABLE (White Section) */}
      <section className="bg-white text-gray-900 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                BANGALORE RATE MATRIX
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-gray-950 mt-1">
                Indicative Steel &amp; Metal Fabrication Rates
              </h2>
            </div>
            <p className="text-xs text-gray-500 max-w-md">
              Rates reflect complete turnkey supply, shop fabrication, primer finish &amp; Bangalore site installation (subject to steel grade &amp; design complexity).
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-[#0B0F15] text-white text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold">Fabrication Work Category</th>
                  <th className="py-3.5 px-4 font-bold">Billing Unit</th>
                  <th className="py-3.5 px-4 font-bold text-[#D49B37]">Indicative Rate (INR)</th>
                  <th className="py-3.5 px-4 font-bold">Standard Material Grade</th>
                  <th className="py-3.5 px-4 font-bold">Scope Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs">
                {fabricationRatesData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                    <td className="py-4 px-4 font-bold text-gray-950">
                      <a
                        href={`/services/${row.serviceSlug}/`}
                        className="hover:text-[#B77C26] underline decoration-[#D49B37]/40 underline-offset-2"
                      >
                        {row.category}
                      </a>
                    </td>
                    <td className="py-4 px-4 text-gray-600 font-medium">{row.unitBasis}</td>
                    <td className="py-4 px-4 font-bold text-[#8E5B1C]">{row.indicativeRate}</td>
                    <td className="py-4 px-4 text-gray-700">{row.materialGrade}</td>
                    <td className="py-4 px-4 text-gray-600">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE COST ESTIMATOR & PRICING FACTORS (Light Gray Section) */}
      <section className="bg-[#F8FAFC] text-gray-900 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Interactive Estimator */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-md space-y-5">
            <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF3E0] text-[#B77C26] flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-serif-heading text-gray-950">
                  Instant Bangalore Fabrication Cost Estimator
                </h2>
                <p className="text-xs text-gray-500">Calculate an indicative budget range before your site visit</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="rate-category" className="block text-xs font-bold text-gray-800 mb-1.5">
                  Select Fabrication Category
                </label>
                <select
                  id="rate-category"
                  value={selectedPresetId}
                  onChange={(e) => handlePresetChange(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#D49B37] focus:outline-none"
                >
                  {estimatorPresets.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.label} (₹{preset.minPerUnit}–₹{preset.maxPerUnit})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rate-quantity" className="block text-xs font-bold text-gray-800 mb-1.5">
                  {activePreset.unitLabel}
                </label>
                <input
                  id="rate-quantity"
                  type="number"
                  min={1}
                  max={50000}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#D49B37] focus:outline-none"
                />
              </div>

              <div className="rounded-lg bg-[#0B0F15] text-white p-5 space-y-2 border border-[#1E2735]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B37]">
                  Estimated Turnkey Budget Range
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-white">
                  ₹{estMin.toLocaleString('en-IN')} – ₹{estMax.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">{activePreset.note}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => onOpenQuote(`${activePreset.label} (~${safeQuantity} units)`)}
                  className="py-3 px-4 rounded-md bg-[#D49B37] hover:bg-[#C28B2B] text-gray-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center cursor-pointer transition-colors"
                >
                  <span>Lock Rate via Free Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Hello SAM Fabrication, I used your Bangalore Rate Calculator for ${activePreset.label} (${safeQuantity} units, est. ₹${estMin.toLocaleString('en-IN')}-₹${estMax.toLocaleString('en-IN')}). Please share an exact quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  <span>Send Estimate on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: What Determines Final Rate */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
                SPECIFICATION GUIDE
              </span>
              <h2 className="text-2xl font-bold font-serif-heading text-gray-950 mt-1">
                What Affects Steel Fabrication Rates in Bangalore?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
                <Layers className="w-5 h-5 text-[#B77C26]" />
                <h3 className="text-sm font-bold text-gray-950 font-serif-heading">Pipe Gauge &amp; Steel Brand</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  14/16 gauge TATA Structura, Jindal, or Apollo hollow sections cost slightly more per kg than light 18G scrap tubes, delivering 3x weld integrity and zero sagging.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#B77C26]" />
                <h3 className="text-sm font-bold text-gray-950 font-serif-heading">Primer &amp; Coating System</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Two-coat zinc chromate epoxy primer + automotive PU spray coat protects MS gates &amp; grills against Bangalore monsoon rust better than single-coat oil paint.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#B77C26]" />
                <h3 className="text-sm font-bold text-gray-950 font-serif-heading">SS 304 vs SS 202 Grade</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  True AISI 304 stainless steel resists rust permanently on open balconies &amp; staircases, whereas cheaper 202 grades show surface pitting after one rainy season.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
                <Clock className="w-5 h-5 text-[#B77C26]" />
                <h3 className="text-sm font-bold text-gray-950 font-serif-heading">Site Elevation &amp; Job Work</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Multi-floor scaffolding, core-drilling in granite steps, or motor/track automation affect erection labour. Material-supplied job work is billed purely per kg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING FAQS (White Section) */}
      <section className="bg-white text-gray-900 py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#B77C26] uppercase">
              PRICING FAQS
            </span>
            <h2 className="text-2xl font-bold font-serif-heading text-gray-950 mt-1">
              Common Questions About Bangalore Fabrication Costs
            </h2>
          </div>

          <div className="space-y-3">
            {rateFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#F8FAFC] rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#B77C26] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#D49B37] ml-3 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-200/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner onOpenQuote={() => onOpenQuote('Bangalore Fabrication Quote')} />
    </>
  );
};

