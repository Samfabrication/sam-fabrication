import { ServiceItem, ProjectItem, BlogPostItem, LocationItem, RegionItem } from '../types';

export const siteConfig = {
  name: 'SAM Fabrication Engineering Work',
  shortName: 'SAM Fabrication',
  tagline: 'Stronger Spaces Built with Precision',
  domain: 'https://samfabrication.in',
  phone: '+91 94533 44824',
  phoneClean: '+919453344824',
  whatsapp: '+91 94533 44824',
  whatsappNumber: '919453344824',
  email: 'info@samfabrication.in',
  address: 'Dasarahalli Main Road, Near Sobha Moonstone, Bangalore, Karnataka 560024',
  workingHours: 'Mon - Sat: 9:00 AM - 8:00 PM',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53699.516277903305!2d77.54575414863284!3d12.987976999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42558abc340b42ad%3A0x94475de137f4ec35!2sSam%20Fabrication%20%26%20Engineering%20Works!5e1!3m2!1sen!2sin!4v1794494133638!5m2!2sen!2sin',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Sam+Fabrication+%26+Engineering+Works,+Dasarahalli+Main+Road,+Near+Sobha+Moonstone,+Bangalore+560024',
  stats: {
    projectsCompleted: '100+',
    yearsExperience: '5+',
    happyClients: '80+',
    qualityCommitment: '100%'
  }
};

export const servicesData: ServiceItem[] = [
  {
    id: 'gate-fabrication',
    slug: 'gate-fabrication',
    title: 'Gate Fabrication',
    shortDescription: "Custom gate fabrication in Bangalore: automated sliding gates, folding gates, CNC laser-cut main gates & heavy MS/SS entrance security systems.",
    fullDescription: "Looking for the best fabrication works in Bangalore for custom entrance gates? At SAM Fabrication Engineering Work, we design, fabricate, and install modern sliding gates, telescopic gates, folding gates, and designer CNC laser-cut main gates across Bangalore. Whether you need a motorized sliding gate for an industrial compound or an architectural steel gate with brass accents for your villa, our steel fabricators ensure precision alignment, heavy bearing tracks, and durable anti-rust coatings with free doorstep site measurement across Bangalore.",
    category: 'gates',
    image: '/images/project-main-gate.webp',
    imageAlt: 'Custom gate fabrication in Bangalore with CNC laser-cut geometric gold inlay pattern',
    features: [
      'Heavy-duty bearing hinges and smooth nylon roller tracks',
      'Dual-layer anti-rust primer with electrostatic powder coating',
      'Custom CNC sheet metal laser cutting with geometric & floral motifs',
      'Seamless automation readiness for hydraulic and mechanical gate motors',
      'Built-in pedestrian wicket gate options for compact driveway entries'
    ],
    materials: ['Mild Steel (IS 2062 Grade)', 'Grade 304 Stainless Steel', 'Wrought Iron Elements', 'Brass/Gold Inlays'],
    specs: [
      { label: 'Standard Gate Heights', value: '5 ft to 10 ft custom' },
      { label: 'Hollow Section Thickness', value: '14 gauge to 16 gauge (2mm)' },
      { label: 'Track Wheel Mechanism', value: 'Heavy-duty steel bearing rollers' },
      { label: 'Warranty & Protection', value: 'Anti-corrosive primer + PU finish' }
    ],
    faqs: [
      {
        question: 'Which is better for my driveway: sliding gate or swing gate?',
        answer: 'Sliding gates are optimal when your driveway slopes upwards or when vehicle parking space inside the compound is limited. Swing gates work best for flat driveways with ample clearance.'
      },
      {
        question: 'Can you motorize the gate for remote control operation?',
        answer: 'Yes, all our gates can be pre-engineered with reinforced mounting brackets and track systems designed for top gate automation brands (Came, Centurion, Somfy).'
      },
      {
        question: 'How long does a custom main gate take to fabricate and install?',
        answer: 'Typically 7 to 12 working days from final site measurement and 3D design approval.'
      },
      {
        question: "What is the gate fabrication works in Bangalore price list and cost per sq. ft?",
        answer: "Gate fabrication prices in Bangalore depend on design complexity and steel specifications. Standard heavy MS sliding and swing gates range from ₹350 to ₹680 per sq. ft. (or ₹115 to ₹155 per kg), while modern CNC laser-cut designer steel gates with 3mm CRCA sheet inserts range from ₹650 to ₹1,250 per sq. ft. Motorized gate automation kits and European PU finishes are estimated separately after site inspection."
      },
      {
        question: "What is the contact number and workshop address for gate fabrication near me in Bangalore?",
        answer: "You can contact SAM Fabrication directly at our Bangalore fabrication works contact number +91 94533 44824 (call or WhatsApp). Our workshop is located on Dasarahalli Main Road near Sobha Moonstone, Bengaluru 560024. We dispatch technicians for free site surveys across Hebbal, Yelahanka, Manyata, Indiranagar, Whitefield, and surrounding Bangalore localities."
      }
    
    ]
  },
  {
    id: 'window-grills',
    slug: 'window-grills',
    title: 'Window Grills',
    shortDescription: "MS safety window grills, balcony box grills & French window security grills in Bangalore. Anti-rust primer, apartment-compliant designs & quick installation.",
    fullDescription: "Protect your home without sacrificing ventilation or natural light. Recognized for dependable metal fabrication works in Bangalore, SAM Fabrication designs and manufactures modern window security grills, balcony box grills with planter shelves, and custom French window safety frames. Our window grill fabricators engineer each unit to meet Bangalore apartment society bylaws while ensuring child safety, intrusion deterrence, and long-lasting rust protection.",
    category: 'grills',
    image: '/images/project-window-grill.webp',
    imageAlt: 'Modern safety window grill with minimalist horizontal steel bars in Hebbal residential project',
    features: [
      'Child-safe bar spacing (maximum 4-inch gap)',
      'High-tensile solid bright square rods and hollow steel tubes',
      'Concealed anchor bolt fasteners tamper-proof from exterior',
      'Matte black, charcoal grey, and metallic powder-coated finishes',
      'Box grill extensions for plant pots and AC outdoor unit security'
    ],
    materials: ['Mild Steel (MS)', 'Stainless Steel (SS 304)', 'Cast Iron Ornamental Brackets'],
    specs: [
      { label: 'Bar Thickness', value: '10mm, 12mm, 16mm solid/hollow' },
      { label: 'Frame Structure', value: '25mm x 25mm angle/box frame' },
      { label: 'Coating', value: 'Epoxy primer + 2 coats enamel / powder coat' }
    ],
    faqs: [
      {
        question: 'Do your window grills comply with Bangalore apartment security guidelines?',
        answer: 'Yes, we customize dimensions, bar orientations (horizontal or vertical), and anchor depths to comply with all major RWA and apartment association bylaws.'
      },
      {
        question: 'Will mild steel window grills rust during Bangalore rains?',
        answer: 'We treat every MS grill with chemical rust-inhibitors, zinc phosphate primer, and durable outdoor polyurethane or powder-coated finishes to prevent corrosion.'
      },
      {
        question: "What is the window grill fabrication work rate per sq. ft. and per kg in Bangalore?",
        answer: "Window grill fabrication works in Bangalore typically cost ₹180 to ₹320 per sq. ft., or ₹110 to ₹145 per kg for standard 10mm or 12mm solid square MS bars (IS 2062 grade). The rate includes material supply, precision welding, dual-coat red oxide or zinc chromate primer, enamel or powder-coated finish, and on-site wall grouting."
      },
      {
        question: "How do I book a site measurement, and what is your Bangalore contact number for window grills?",
        answer: "To book a free site visit anywhere in Bangalore, call or WhatsApp our contact number +91 94533 44824. Our technicians visit villas, independent houses, and apartments with design catalogues, measure window openings precisely, and provide an instant transparent quote."
      }
    
    ]
  },
  {
    id: 'ms-gates',
    slug: 'ms-gates',
    title: 'MS Gates',
    shortDescription: "Heavy-duty mild steel (MS) gates in Bangalore: sliding, swing & double-leaf gates. High-tensile Tata/Jindal steel, anti-rust primers & custom fabrication.",
    fullDescription: "Mild Steel (MS) is the premier choice for homeowners, developers, and commercial establishments seeking high-impact resistance, versatile design customization, and cost-effective steel fabrication works in Bangalore. If you are searching for experienced MS gate fabricators near me or reliable metal fabrication works in Bangalore, SAM Fabrication delivers heavy-duty sliding, swing, cantilever, and double-leaf gates engineered from branded Tata and Jindal steel sections with industrial-grade anti-corrosive primers.",
    category: 'gates',
    image: '/images/project-sliding-gate.webp',
    imageAlt: 'Heavy-duty horizontal slat sliding gate installed at private residence in Devanahalli',
    features: [
      'High strength-to-weight structural steel hollow sections',
      'Custom laser-cut decorative infill sheet options',
      'Economical pricing without sacrificing structural rigidity',
      'Smooth bearing hinges engineered for heavy gate swing loads'
    ],
    materials: ['High Tensile Carbon Mild Steel', 'Zinc Rich Primer', 'Polyurethane Topcoat'],
    specs: [
      { label: 'Tubular Section', value: 'IS 4923 Grade RHS/SHS' },
      { label: 'Coating Thickness', value: '60-80 microns powder coating' }
    ],
    faqs: [
      {
        question: 'How do MS gates compare to Stainless Steel gates?',
        answer: 'MS gates are approximately 40% to 50% more affordable than SS gates and offer greater structural rigidity for very large spans, though they require high-quality paint or powder coating to prevent rust.'
      },
      {
        question: "What is the MS fabrication rate per kg in Bangalore for gates and steel frames?",
        answer: "The standard MS fabrication rate per kg in Bangalore for gates and structural frames ranges from ₹115 to ₹155 per kg (or ₹350 to ₹680 per sq. ft. installed). Pricing depends on hollow section wall thickness (14 or 16 gauge), CNC cut sheet inserts, bearing wheel mechanisms, and surface finish (zinc epoxy primer with PU paint or powder coating)."
      },
      {
        question: "Do you provide on-site inspection and site measurements for MS gates near me in Bangalore?",
        answer: "Yes, our steel fabricators travel across Bangalore—including Hebbal, Yelahanka, Manyata, Indiranagar, Whitefield, and Jayanagar—for laser measurements, driveway slope assessments, and foundation checks prior to shop fabrication."
      },
      {
        question: "What is your workshop address and contact number for MS gate fabrication in Bangalore?",
        answer: "Reach SAM Fabrication directly via call or WhatsApp at +91 94533 44824. Our central fabrication workshop is located on Dasarahalli Main Road near Sobha Moonstone, Bengaluru 560024, open Monday to Saturday from 9:00 AM to 8:00 PM."
      }
    
    ]
  },
  {
    id: 'ss-railings',
    slug: 'ss-railings',
    title: 'SS Railings',
    shortDescription: "AISI 304 Grade stainless steel railings in Bangalore for balconies, stairs & terraces. Glass-steel railings, TIG welding & mirror or brushed satin finish.",
    fullDescription: "Add modern luxury and lifetime rust immunity to your property with Bangalore's trusted stainless steel fabricators. At SAM Fabrication Engineering Work, we rank among the top steel fabrication works in Bangalore for architectural Grade 304 Stainless Steel railings. We provide precision Argon TIG welded joints, seamless handrail bends, invisible fastenings, and modern combinations with 10mm/12mm toughened safety glass for balconies, internal staircases, and rooftop terrace parapets.",
    category: 'railings',
    image: '/images/project-ss-railing.webp',
    imageAlt: 'Grade 304 stainless steel balcony railing installed at Manyata Tech Park residential complex',
    features: [
      'Guaranteed AISI 304 / 316 Grade Stainless Steel (100% rustproof)',
      'Satin hairline brushed finish or radiant mirror chrome polish',
      'Seamless TIG welding with argon gas shielding for clean joints',
      'Toughened architectural glass panels with stainless steel spigots'
    ],
    materials: ['AISI Grade 304 Stainless Steel', 'AISI Grade 316 (Coastal / Poolside)', 'Toughened Safety Glass'],
    specs: [
      { label: 'Handrail Diameter', value: '50mm (2 inch) round or 50x25mm rect' },
      { label: 'Baluster Spacing', value: '4 inch centers for child safety' }
    ],
    faqs: [
      {
        question: 'How can I verify that genuine 304 Grade Stainless Steel is used?',
        answer: 'We provide chemical test confirmation and offer on-site acid-test verification upon client request to guarantee 100% genuine non-magnetic AISI 304 SS.'
      },
      {
        question: "What is the SS railing fabrication work rate per running foot in Bangalore?",
        answer: "In Bangalore, SS 304 railing fabrication rates typically range from ₹750 to ₹1,450 per running foot (RFT) for standard 3-pipe or 4-pipe baluster designs. Designer stainless steel railings combined with 10mm or 12mm toughened safety glass range from ₹1,650 to ₹2,800+ per RFT, including precision core cutting, Jindal 304 grade steel, argon welding, and mirror buff or brushed satin polish."
      },
      {
        question: "How do I contact your stainless steel fabrication team for a quote in Bangalore?",
        answer: "You can contact our Bangalore steel fabrication desk directly at +91 94533 44824 (call or WhatsApp). We provide free on-site staircase and balcony measurements across Bangalore and share detailed, itemized estimates within 24 hours."
      }
    
    ]
  },
  {
    id: 'ms-railings',
    slug: 'ms-railings',
    title: 'MS Railings',
    shortDescription: "Modern mild steel (MS) railings in Bangalore: geometric balusters, laser-cut panels & matte powder coating for balconies, terraces and stairways.",
    fullDescription: "Achieve the trending contemporary industrial aesthetic with custom mild steel (MS) railing systems from SAM Fabrication. As one of the dedicated metal fabrication works in Bangalore for modern villas, duplex apartments, and commercial spaces, we fabricate clean horizontal geometric slats, slender vertical balusters, CNC laser-cut sheets, and durable thermoset powder-coated railings that deliver robust structural protection with refined architectural lines.",
    category: 'railings',
    image: '/images/project-balcony-railing.webp',
    imageAlt: 'Architectural mild steel balcony railing with black powder coated finish in HSR Layout',
    features: [
      'Matte charcoal, graphite black, and textured bronze powder coats',
      'Sturdy floor-mount core drill installation with anchor grout',
      'Seamless corner returns and ergonomic flat-top handrails',
      'Cost-effective modern architectural styling'
    ],
    materials: ['Mild Steel Flat Bars', 'Square Hollow Sections', 'Electrostatic Powder Coat'],
    specs: [
      { label: 'Railing Height', value: '3 ft (36 in) to 3.5 ft (42 in)' },
      { label: 'Post Anchor Depth', value: '75mm to 100mm into concrete slab' }
    ],
    faqs: [
      {
        question: 'Are MS railings safe for external balconies in Bangalore?',
        answer: 'Yes, when properly primed with zinc phosphate and oven-baked powder coating, MS railings endure outdoor rain and sun exposure for many years.'
      },
      {
        question: "What is the cost of MS railing fabrication per running foot in Bangalore?",
        answer: "MS railing fabrication work in Bangalore typically ranges from ₹420 to ₹780 per running foot (RFT). Rates vary based on hollow section dimensions, solid flat bar thickness, decorative laser-cut motifs, and surface finish (zinc phosphate primer with matte black synthetic enamel or thermoset electrostatic powder coating)."
      },
      {
        question: "Can you fabricate custom designer metal railings to match architectural drawings?",
        answer: "Yes. Our Bangalore steel fabricators collaborate regularly with architects, interior designers, and homeowners to execute custom designs from CAD drawings or reference images. Reach our engineering team at +91 94533 44824 for design consultation and site measurements."
      }
    
    ]
  },
  {
    id: 'staircase-fabrication',
    slug: 'staircase-fabrication',
    title: 'Staircase Fabrication',
    shortDescription: "Metal staircase fabrication in Bangalore: spiral staircases, modern floating mono-stringer stairs, external fire escapes & industrial metal steps.",
    fullDescription: "From sculptural indoor floating metal stairs with integrated step lighting brackets to heavy-duty industrial external emergency fire escapes, SAM Fabrication engineers stairs that maximize square footage while adhering to rigorous structural load-bearing standards. If you are searching for dependable steel fabricators near me in Bangalore for duplex residences, commercial offices, or factory mezzanine access, our fabrication team delivers exceptional stability, clean weld seams, and ergonomic step geometry.",
    category: 'structural',
    image: '/images/project-ms-staircase.webp',
    imageAlt: 'Custom MS internal staircase with floating metal steps in Yelahanka Bangalore',
    features: [
      'Mono-stringer central spine and double-stringer steel stair designs',
      'Compact spiral staircases for tight terrace and mezzanine access',
      'Tread brackets ready for granite, hardwood, or steel chequered plates',
      'Integrated handrail and balustrade structural safety anchoring'
    ],
    materials: ['Structural Heavy Channels (ISMC)', 'Rectangular Tubes (RHS)', 'Chequered Steel Treads'],
    specs: [
      { label: 'Load Rating', value: '4.0 kN/m² uniform live load rating' },
      { label: 'Riser Height', value: '150mm to 175mm ergonomic standard' }
    ],
    faqs: [
      {
        question: 'Can you build a staircase inside a tight 5ft x 5ft space?',
        answer: 'Yes, our custom-engineered spiral staircases fit comfortably within compact footprints starting from 4.5 ft diameter.'
      },
      {
        question: "How much does metal staircase fabrication cost in Bangalore?",
        answer: "Metal staircase fabrication prices in Bangalore depend on design: compact circular spiral staircases typically cost ₹35,000 to ₹75,000 complete; standard straight-flight or L-turn MS channel staircases cost ₹600 to ₹1,200 per step (or ₹450 to ₹900 per sq. ft. of tread area); while custom floating mono-stringer staircases with heavy center beams are estimated based on engineering span and tread material."
      },
      {
        question: "Do you provide on-site structural assessment and installation across Bangalore?",
        answer: "Yes, our senior fabrication engineers perform on-site structural inspections, slab anchor testing, and ergonomic rise-and-run calculations across Bangalore. Call +91 94533 44824 or visit our workshop on Dasarahalli Main Road (560024) to schedule a site consultation."
      }
    
    ]
  },
  {
    id: 'car-parking-sheds',
    slug: 'car-parking-sheds',
    title: 'Car Parking Sheds',
    shortDescription: "Car parking shed fabrication in Bangalore: cantilever carports, tensile fabric structures, polycarbonate & metal roofing for homes and offices.",
    fullDescription: "Protect your vehicles from Bangalore's blistering afternoon heat, seasonal hail, and heavy monsoon downpours. SAM Fabrication is a premier provider of metal and steel fabrication works in Bangalore for residential carports, multi-vehicle apartment parking shelters, and commercial office parking sheds. We build custom cantilever and multi-pillar structures featuring UV-resistant multi-wall polycarbonate sheets, architectural tensile fabrics, or insulated color-coated metal roofing with reinforced structural steel frameworks.",
    category: 'sheds',
    image: '/images/project-car-shed.webp',
    imageAlt: 'Commercial car parking shed with heavy-duty steel pillars and weather-resistant roofing',
    features: [
      'Cantilever designs eliminating front pillars for effortless vehicle maneuvering',
      'UV-coated multiwall or solid polycarbonate roofing reducing vehicle heat build-up',
      'Integrated concealed rainwater gutters and downspout pipes',
      'Heavy-gauge tubular steel framework bolted securely into RCC foundations'
    ],
    materials: ['Bayer Polycarbonate Sheets', 'PVC Tensile Membrane', 'Structural Steel Columns (SHS)'],
    specs: [
      { label: 'Roof Slope', value: 'Minimum 5 degrees for rapid rain runoff' },
      { label: 'Wind Resistance', value: 'Tested for gust speeds up to 120 km/h' }
    ],
    faqs: [
      {
        question: 'Which roofing material is best for a residential car shed?',
        answer: 'Polycarbonate sheets are the most popular because they allow natural diffused daylight while blocking 99% of damaging UV rays and vehicle interior heat.'
      },
      {
        question: "What is the car parking shed fabrication price per sq. ft. in Bangalore?",
        answer: "Car parking shed fabrication in Bangalore typically costs ₹220 to ₹480 per sq. ft. Standard color-coated GI/metal sheet carports cost ₹220 to ₹350 per sq. ft., multi-wall UV-coated polycarbonate sheds cost ₹280 to ₹450 per sq. ft., and cantilever or tensile fabric structures cost ₹380 to ₹550+ per sq. ft., including steel columns, trusses, anti-rust primer, paint, and foundation grouting."
      },
      {
        question: "How do I book a site survey and what is your contact number for car parking sheds in Bangalore?",
        answer: "Contact SAM Fabrication directly at +91 94533 44824 (call or WhatsApp). Our technicians inspect your parking area anywhere in Bangalore within 24 to 48 hours to evaluate turning radius, column positioning, and rainwater drainage before providing a detailed estimate."
      }
    
    ]
  },
  {
    id: 'metal-sheds',
    slug: 'metal-sheds',
    title: 'Metal Sheds',
    shortDescription: "Rooftop metal sheds, terrace steel framing, warehouse storage sheds & industrial utility enclosures across Bangalore. 100% waterproof installation.",
    fullDescription: "Transform rooftop terraces, industrial compounds, and commercial premises into shaded, functional spaces. As one of the established steel fabrication works in Bangalore, SAM Fabrication designs and constructs heavy-duty rooftop metal sheds, warehouse storage sheds, factory lean-to extensions, and weatherproof utility enclosures. Our steel sheds reduce top-floor building heat by shielding concrete slabs from direct solar radiation while ensuring 100% leak-proof reliability during Bangalore monsoons.",
    category: 'sheds',
    image: '/images/commitment-carport.webp',
    imageAlt: 'Heavy-duty structural metal car parking shed with dark steel frame',
    features: [
      'Thermal insulation options to keep interior spaces cool',
      'Clear-span trusses without obstructing internal support pillars',
      'Corrugated color-coated zinc-aluminium alloy roofing sheets',
      'High wind load anchoring with chemical fasteners into RCC slabs'
    ],
    materials: ['Tata Bluescope / Jindal Steel Sheets', 'Heavy C-Channels', 'RHS Hollow Sections'],
    specs: [
      { label: 'Sheet Thickness', value: '0.45mm to 0.60mm PPGI/PPGL' },
      { label: 'Span Capacity', value: 'Up to 30 feet clear span without middle pillars' }
    ],
    faqs: [
      {
        question: 'Will a rooftop metal shed damage my terrace waterproofing?',
        answer: 'No, we anchor steel base plates into RCC pedestals or use non-penetrative weighted footing techniques combined with PU elastomeric sealants to safeguard waterproofing.'
      },
      {
        question: "What is the metal shed fabrication works in Bangalore price list per sq. ft?",
        answer: "Metal shed fabrication works in Bangalore generally cost ₹220 to ₹450 per sq. ft. Standard rooftop sheds with Tata Bluescope color-coated sheets and MS tubular trusses range from ₹240 to ₹380 per sq. ft. Commercial warehouse storage sheds and heavy industrial utility enclosures with heavier gauge steel framing and insulated PUF panels range from ₹320 to ₹650 per sq. ft."
      },
      {
        question: "Who can I contact in Bangalore for rooftop shed estimation and site survey?",
        answer: "You can reach SAM Fabrication directly at +91 94533 44824 or visit our workshop on Dasarahalli Main Road (Bengaluru 560024). We provide complimentary site surveys and structural load checks across North, East, South, and West Bangalore."
      }
    
    ]
  },
  {
    id: 'structural-steel-fabrication',
    slug: 'structural-steel-fabrication',
    title: 'Heavy Structural Steel Fabrication',
    shortDescription: "Heavy structural steel fabrication in Bangalore: PEB warehouse framing, industrial mezzanine floors, crane girders, I-beams & factory structures.",
    fullDescription: "As one of the leading heavy fabrication companies in Bangalore, SAM Fabrication Engineering Work serves industrial corridors across Peenya, Bidadi, Bommasandra, Whitefield, Nelamangala, and Hoskote. If you need trusted steel fabrication works in Bangalore for warehouses, pre-engineered steel buildings (PEB), industrial mezzanine storage floors, crane gantries, or machinery skids, our workshop fabricates heavy I-beam columns and portal frames engineered strictly to IS 800 and IS 2062 standards with ultrasonic weld inspection.",
    category: 'structural',
    image: '/images/project-ms-structure.webp',
    imageAlt: 'Heavy structural steel fabrication and industrial warehouse trusses in Bidadi Bangalore',
    features: [
      'Heavy steel structural fabrication adhering to IS 800 & AWS D1.1 welding standards',
      'Complete pre-engineered building (PEB) detailing, truss assembly, and crane erection',
      'Heavy-duty industrial mezzanine floors to double warehouse storage capacity',
      'Machinery bases, heavy plate bending, gusseted columns & dye-penetrant weld testing'
    ],
    materials: ['IS 2062 Grade E250 / E350 Heavy Steel', 'Heavy I-Beams (ISMB / NPB)', 'MS Plates (8mm to 25mm)', 'Channel & Angle Trusses'],
    specs: [
      { label: 'Welding Standards', value: 'SMAW, GMAW / MIG & Flux-Core heavy structural welding' },
      { label: 'Load & Safety', value: 'Engineered for heavy industrial crane loads & Seismic Zone II' },
      { label: 'Indicative Rate Basis', value: 'Quoted per kg / per metric ton based on tonnage & complexity' }
    ],
    faqs: [
      {
        question: 'Do you handle heavy structural fabrication for warehouses and factories in Bangalore?',
        answer: 'Yes. We undertake heavy steel structural fabrication, PEB sheds, crane girders, and industrial mezzanine floors across Peenya, Bidadi, Nelamangala, Bommasandra, and Hoskote.'
      },
      {
        question: 'How are heavy structural steel fabrication rates calculated in Bangalore?',
        answer: 'Heavy fabrication pricing is typically quoted per kg or per metric ton depending on section sizes (ISMB/ISA/plate thickness), erection height, and epoxy primer specifications.'
      },
      {
        question: "What is the structural steel fabrication works in Bangalore price list per kg and per ton?",
        answer: "Structural steel fabrication works in Bangalore range between ₹95 and ₹135 per kg for full material supply, shop cutting, MIG structural welding, anti-corrosive epoxy primer, and crane erection. For client-supplied steel (labour and job work only), rates range from ₹28 to ₹42 per kg depending on plate thickness, joint complexity, and height of erection."
      },
      {
        question: "What is the address and contact number for heavy steel fabricators near me in Bangalore?",
        answer: "SAM Fabrication Engineering Work operates from Dasarahalli Main Road, near Sobha Moonstone, Bengaluru, Karnataka 560024. Reach our industrial fabrication desk at +91 94533 44824 (call or WhatsApp) or email info@samfabrication.in for tender drawings, structural calculations, and BOQ reviews."
      }
    
    ]
  },
  {
    id: 'canopy-fabrication',
    slug: 'canopy-fabrication',
    title: 'Canopy Fabrication',
    shortDescription: "Architectural metal entrance canopies in Bangalore: cantilever glass canopies, ACP sunshades, terrace pergolas & MS/SS porticos.",
    fullDescription: "Enhance your building entrance facade with architectural metal canopies from SAM Fabrication Engineering Work. Recognized among premier metal fabrication works in Bangalore for bespoke architectural steelwork, we combine slender cantilever beams with laminated safety glass, ACP sheets, or laser-cut louvers to create striking architectural statements that protect building entrances from Bangalore monsoon rains and harsh afternoon glare.",
    category: 'sheds',
    image: '/images/project-canopy.webp',
    imageAlt: 'Modern residential metal entrance canopy structure with wooden slatted pergola roof in Sarjapur',
    features: [
      'Cantilever glass and steel porticos with stainless steel spider fittings',
      'Outdoor patio pergolas with powder-coated steel rafters',
      'Seamless integration with facade lighting and downlights',
      'Concealed slope and drainage design'
    ],
    materials: ['Laminated Safety Glass', 'Structural Mild Steel', 'Stainless Steel Spider Brackets'],
    specs: [
      { label: 'Glass Thickness', value: '11.52mm / 13.52mm laminated toughened' },
      { label: 'Finish', value: 'Architectural grade matte powder coat' }
    ],
    faqs: [
      {
        question: 'Are cantilever glass canopies safe during Bangalore windstorms?',
        answer: 'Yes, our cantilever canopies are engineered with structural gusset plates and high-tensile anchor bolts calculated for high wind uplift.'
      },
      {
        question: "What is the indicative price for entrance canopy fabrication in Bangalore?",
        answer: "Entrance metal canopy fabrication in Bangalore typically ranges from ₹380 to ₹850 per sq. ft. Polycarbonate or ACP sheet canopies cost ₹380 to ₹550 per sq. ft., whereas architectural cantilever steel canopies with 10mm/12mm toughened laminated glass and stainless steel spider fittings range from ₹750 to ₹1,400+ per sq. ft."
      },
      {
        question: "Can your team fabricate custom metal canopies matching architect drawings and 3D elevations?",
        answer: "Yes, our steel fabricators collaborate closely with architects, builders, and homeowners across Bangalore to execute custom canopies from CAD drawings or 3D renderings. Call our Bangalore workshop at +91 94533 44824 to discuss your entrance specifications."
      }
    
    ]
  },
  {
    id: 'custom-welding-fabrication',
    slug: 'custom-welding-fabrication',
    title: 'Best Welding Shop & Welding Services',
    shortDescription: 'Top-rated welding shop & doorstep home welding service across Bangalore. Precision TIG/MIG, Aluminium welding, Gas brazing, and emergency MS/SS repairs open Mon–Sat.',
    fullDescription: 'Looking for the best welding shop in Bangalore or professional welding services near you? Located on Dasarahalli Main Road (Bengaluru 560024) and open Monday through Saturday (9:00 AM – 8:00 PM), SAM Fabrication delivers industrial workshop welding and rapid doorstep welding services within a 16 km to 25 km radius across Bangalore. Whether you require aluminium TIG welding, gas brazing, fiber laser seams, or urgent structural repairs, our experienced welders provide durable, code-compliant joins.',
    category: 'custom',
    image: '/images/project-custom-fab.webp',
    imageAlt: 'Precision welding shop and custom metal fabrication in Bangalore for SS, MS, aluminium and laser-cut panels',
    features: [
      'Welding Home Service: Portable inverter welding vans dispatched across Bangalore (16 km+ radius)',
      'Aluminium Welding (AC/DC TIG): Clean fabrication & repair for aluminium frames, ladders, castings & doors',
      'Gas Welding & Brazing: Oxy-acetylene welding for brass, copper, cast iron, thin sheets & flame cutting',
      'Fiber Laser & Precision TIG Welding: Low-distortion, burr-free seams on SS 304/316 & architectural panels'
    ],
    materials: ['Mild Steel (MS)', 'Stainless Steel 304 / 316', 'Aluminium Alloys', 'Brass, Copper & Cast Iron'],
    specs: [
      { label: 'Welding Processes', value: 'Fiber Laser / Precision TIG, MIG, Stick (Arc), Aluminium TIG & Gas Welding' },
      { label: 'Service Radius', value: 'Dasarahalli HQ + 16 km to 25 km mobile home welding coverage across Bangalore' },
      { label: 'Open Hours & Contact', value: 'Mon – Sat: 9:00 AM – 8:00 PM | Direct Call: +91 94533 44824' }
    ],
    faqs: [
      {
        question: 'What makes SAM Fabrication one of the best welding shops in Bangalore?',
        answer: 'Our workshop features industrial TIG (AC/DC for aluminium), MIG/MAG, Oxy-Acetylene gas brazing, and portable inverter welding units. We offer walk-in workshop repairs on Dasarahalli Main Road and rapid mobile welding dispatch across Bengaluru.'
      },
      {
        question: 'Do you provide welding home service near me in Bangalore?',
        answer: 'Yes! Our mobile welding technicians travel with portable inverter welding machines across North, East, South, and West Bangalore (16 km+ from Dasarahalli Main Road / Hebbal) for on-site gate hinge repairs, grill fixes, lock welding, and balcony railing reinforcement. Call +91 94533 44824 for same-day slot availability.'
      },
      {
        question: 'Do you offer aluminium welding and gas welding at your Bangalore shop?',
        answer: 'Yes, we are equipped for AC/DC TIG aluminium welding (for aluminium doors, ladders, automotive parts, and lightweight frames) as well as oxy-acetylene gas welding and brazing for copper, brass, cast iron, and precision repairs.'
      },
      {
        question: 'Do you perform fiber laser welding and CNC laser fabrication?',
        answer: 'Yes, we offer ultra-clean fiber laser and precision micro-TIG welding alongside 0.1mm CNC fiber laser cutting for sleek stainless steel railings, designer main gates, and commercial steel branding.'
      },
      {
        question: 'What are your welding shop opening hours and contact number?',
        answer: 'Our workshop on Dasarahalli Main Road (near Sobha Moonstone, 560024) is open Monday to Saturday from 9:00 AM to 8:00 PM. Reach our welding services in Bangalore contact number directly at +91 94533 44824 via call or WhatsApp.'
      },
      {
        question: 'What is the welding services in Bangalore price list for workshop and home repairs?',
        answer: 'When evaluating welding services in Bangalore price factors, scope and weld type are key. Minor workshop welding repairs typically range from ₹300 to ₹1,200. For on-site welding services at home within 16 km, mobile technician visiting charges start from ₹350–₹500, with clear pricing for materials and weld joints before any work begins. Call +91 94533 44824 for a quick phone estimate.'
      },
      {
        question: 'Are there Bangalore welding company vacancy openings at your workshop?',
        answer: 'Yes, for candidates searching for a Bangalore welding company vacancy, SAM Fabrication periodically hires for skilled TIG/MIG arc welders, structural fabricators, and workshop helpers. Candidates with experience in MS and SS fabrication can call +91 94533 44824 or visit our Dasarahalli Main Road workshop to inquire about current welder vacancies.'
      }
    ]
  },
  {
    id: 'event-fabrication',
    slug: 'event-fabrication',
    title: 'Event Fabrication',
    shortDescription: "Event fabrication vendors in Bangalore: custom stage trusses, exhibition stalls, corporate backdrop frames, entry arches & modular steel rigs.",
    fullDescription: "Looking for dependable, fast-turnaround event fabrication vendors in Bangalore? SAM Fabrication Engineering Work partners with event management companies, exhibition designers, experiential marketing agencies, and corporate venues across Manyata Tech Park, Whitefield KTPO, Palace Grounds, and BIEC. We deliver robust modular stage trusses, custom steel entry arches, LED screen rigging frames, trade show booths, and heavy-duty temporary canopies with precision welding and strict on-time venue delivery.",
    category: 'custom',
    image: '/images/project-terrace-pergola.webp',
    imageAlt: 'Custom event steel truss, corporate backdrop framework and canopy fabrication in Bangalore',
    features: [
      'Modular box-truss stage structures & heavy LED wall support frames',
      'Custom corporate event entry arches, branding totems & photo-booth metal rigs',
      'Exhibition booth steel subframes with bolt-together quick assembly',
      'Outdoor monsoon-safe canopy frames & weighted ballast bases (no floor drilling)'
    ],
    materials: ['MS Square & RHS Box Sections', 'Lightweight Aluminium Truss Elements', 'GI Pipes', 'Powder-Coated Steel Channels'],
    specs: [
      { label: 'Assembly System', value: 'Bolt-together modular sections for fast venue load-in / tear-down' },
      { label: 'Turnaround', value: 'Express 48-hour to 7-day fabrication for Bangalore events' },
      { label: 'Venues Served', value: 'BIEC, Palace Grounds, KTPO Whitefield, Manyata & Hotel Ballrooms' }
    ],
    faqs: [
      {
        question: 'Do you build custom exhibition stall frames and stage structures for events in Bangalore?',
        answer: 'Yes, we fabricate custom steel arches, modular exhibition stall frameworks, LED screen rigging stands, and canopy frames tailored to agency 3D renders and strict venue load-in timelines.'
      },
      {
        question: 'Are your event metal structures portable for non-destructive hotel or indoor installation?',
        answer: 'Yes, we design bolted knock-down joints with rubber-padded weighted base plates so installations require zero floor drilling in hotel ballrooms and convention centers.'
      },
      {
        question: "What is the typical pricing and turnaround time for event fabrication in Bangalore?",
        answer: "Pricing for event fabrication depends on structural specifications, rental versus custom build requirements, and metal finish (primer, paint, or high-gloss powder coat). We support express 48-hour to 7-day turnaround times for urgent Bangalore events, expos, and product launches with transparent itemized quotes."
      },
      {
        question: "How do event agencies contact SAM Fabrication for urgent stage and truss fabrication in Bangalore?",
        answer: "Event organizers and production managers can reach our event fabrication team 24/7 via WhatsApp or direct call at +91 94533 44824, or visit our central fabrication unit on Dasarahalli Main Road (near Sobha Moonstone, 560024) for rapid prototype reviews and load testing."
      }
    
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'main-gate-laser-cut-bangalore',
    title: 'Main Gate Fabrication',
    category: 'gates',
    categoryLabel: 'Gates',
    location: 'Bangalore',
    projectType: 'Residential Project',
    image: '/images/project-main-gate.webp',
    imageAlt: 'Custom main gate fabrication in Bangalore with CNC laser-cut geometric gold inlay pattern',
    description: 'Modern black steel main entrance gate featuring gold laser-cut CNC decorative inlay panels and heavy-duty sliding tracks.',
    clientRequirement: 'The property owner needed a secure, automated main entrance gate for a newly completed duplex villa. The design required complete privacy from street view while incorporating custom CNC laser-cut geometric patterns with metallic champagne gold accents.',
    materialsUsed: [
      'IS 2062 Grade Mild Steel heavy hollow rectangular sections (80x40mm & 50x50mm)',
      '3.0mm CRCA CNC precision laser-cut sheet for decorative inlays',
      'High-grade nylon roller guide wheels and heat-treated ground track',
      'Two-coat epoxy zinc phosphate anti-rust primer and architectural matte black polyurethane topcoat'
    ],
    fabricationSolution: 'Engineered an internal structural frame to prevent sagging across an 18-foot opening. The CNC gold panels were modularly fastened with countersunk stainless steel hardware to facilitate future maintenance without disturbing the gate structure.',
    installationDetails: 'Anchored directly into RCC pillars using M12 chemical studs. Levelled with laser transit across the driveway to ensure frictionless sliding, ready for automation integration.',
    specs: [
      { label: 'Opening Span', value: '18 ft wide x 7.5 ft height' },
      { label: 'Gate Mechanism', value: 'Bottom-roller sliding with top nylon guide' },
      { label: 'Steel Grade', value: 'IS 2062 Structural Mild Steel' },
      { label: 'Finish', value: 'Matte Charcoal PU + Champagne Gold Inlay' },
      { label: 'Turnaround Time', value: '9 business days from measurement to handover' }
    ]
  },
  {
    id: 'proj-2',
    slug: 'window-grills-hebbal-villa',
    title: 'Window Grills',
    category: 'grills',
    categoryLabel: 'Grills',
    location: 'Hebbal',
    projectType: 'Residential Project',
    image: '/images/project-window-grill.webp',
    imageAlt: 'Modern safety window grill with minimalist horizontal steel bars in Hebbal residential project',
    description: 'Minimalist horizontal steel security window grills installed for a luxury independent villa in Hebbal.',
    clientRequirement: 'The client desired unobtrusive window security grills that complied with villa association aesthetics without creating a cage-like atmosphere inside living and master bedrooms.',
    materialsUsed: [
      '20x20mm square cold-rolled solid steel bars',
      '40x5mm flat steel peripheral mounting framing',
      'Anti-corrosion red oxide base coat and dual-layer satin black enamel'
    ],
    fabricationSolution: 'Fabricated clean horizontal bar patterns with calibrated 4.5-inch spacing, meeting international child safety standards while maintaining optical transparency from interior rooms.',
    installationDetails: 'Flush mounted into the window reveal masonry with 75mm anchor fasteners, welded flush and ground seamless for a clean monolithic aesthetic.',
    specs: [
      { label: 'Quantity Fabricated', value: '14 window openings across 3 floors' },
      { label: 'Material', value: 'Solid Cold-Rolled Steel Bars (IS 2062)' },
      { label: 'Bar Spacing', value: '4.5 inches on-centre' },
      { label: 'Installation Type', value: 'In-reveal flush masonry anchor' },
      { label: 'Corrosion Protection', value: 'Zinc phosphate + satin enamel' }
    ]
  },
  {
    id: 'proj-3',
    slug: 'ss-balcony-railing-manyata',
    title: 'SS Railing',
    category: 'railings',
    categoryLabel: 'Railings',
    location: 'Manyata Tech Park',
    projectType: 'Residential Project',
    image: '/images/project-ss-railing.webp',
    imageAlt: 'Grade 304 stainless steel balcony railing installed at Manyata Tech Park residential complex',
    description: 'AISI 304 Grade stainless steel balcony railings with satin hairline finish and multi-tier horizontal safety bars.',
    clientRequirement: 'An apartment residential community near Manyata Tech Park needed weather-resistant, zero-maintenance exterior balcony railings capable of withstanding monsoon exposure without tea-staining.',
    materialsUsed: [
      'AISI 304 Grade Stainless Steel 50mm circular top handrail (1.6mm wall thickness)',
      '40x40mm SS square vertical balusters with precision CNC base flanges',
      '19mm horizontal intermediate infill SS safety tubes',
      '316 Grade stainless steel expansion anchors and dome nuts'
    ],
    fabricationSolution: 'Employed high-purity TIG welding with argon gas shielding to prevent weld carbon contamination. Hand-polished all joint welds with non-woven abrasive pads to match the factory 320-grit hairline satin finish.',
    installationDetails: 'Core-drilled 65mm holes into RCC balcony parapets, anchored with high-strength non-shrink epoxy grout, and sealed with decorative stainless steel base cover escutcheons.',
    specs: [
      { label: 'Total Run', value: '145 running feet across 6 balconies' },
      { label: 'Material Grade', value: 'Authentic AISI 304 Stainless Steel' },
      { label: 'Height', value: '1050mm (complies with NBC residential standards)' },
      { label: 'Surface Texture', value: '320-grit satin hairline finish' },
      { label: 'Weld Quality', value: 'Full-penetration purge TIG welding' }
    ]
  },
  {
    id: 'proj-4',
    slug: 'ms-staircase-yelahanka-duplex',
    title: 'MS Staircase',
    category: 'staircases',
    categoryLabel: 'Staircases',
    location: 'Yelahanka',
    projectType: 'Residential Project',
    image: '/images/project-ms-staircase.webp',
    imageAlt: 'Custom MS internal staircase with floating metal steps in Yelahanka Bangalore',
    description: 'Modern floating mono-stringer metal staircase with integrated step lighting channels and sleek steel handrails.',
    clientRequirement: 'A contemporary duplex residence in Yelahanka required an internal feature staircase that opened up floor space and allowed natural light from skylights to reach the ground floor.',
    materialsUsed: [
      '200x100mm heavy structural rectangular hollow section (RHS) central stringer (6.0mm thickness)',
      '10mm laser-cut MS tread support cantilevers',
      'Solid teakwood step wraps over heavy-gauge steel tread pans',
      'Continuous 40mm steel minimalist handrail with satin graphite powder coat'
    ],
    fabricationSolution: 'Engineered a central mono-stringer beam anchored between ground slab and first-floor landing beam. Concealed internal wiring raceways within the hollow stringer for warm LED step lighting.',
    installationDetails: 'Fabricated in two primary transportable sections, crane-lifted through upper terrace, and joined on-site with full-penetration butt welds inspected with ultrasonic testing.',
    specs: [
      { label: 'Flight Height', value: '11.5 ft floor-to-floor' },
      { label: 'Structural Stringer', value: '200x100x6mm Structural MS Hollow Beam' },
      { label: 'Tread Construction', value: 'Steel support box with wood cap' },
      { label: 'Load Capacity', value: 'Tested for 4.5 kN/m² dynamic load' },
      { label: 'Features', value: 'Concealed LED light channels' }
    ]
  },
  {
    id: 'proj-5',
    slug: 'car-parking-shed-bangalore-campus',
    title: 'Car Parking Shed',
    category: 'car-parking-sheds',
    categoryLabel: 'Car Parking Sheds',
    location: 'Bangalore',
    projectType: 'Commercial Project',
    image: '/images/project-car-shed.webp',
    imageAlt: 'Commercial car parking shed with heavy-duty steel pillars and weather-resistant roofing',
    description: 'Multi-bay commercial car parking shed featuring heavy-gauge tubular steel columns and UV-resistant roofing.',
    clientRequirement: 'A corporate facility in Outer Ring Road needed shaded parking for 12 executive vehicles without middle support columns that could impede vehicle turning radiuses.',
    materialsUsed: [
      '150x150mm heavy structural MS column posts (IS 2062 Grade)',
      '100x50mm curved cantilever steel rafters',
      'Multi-wall polycarbonate roofing sheets with UV-resistant co-extrusion layer',
      'Hot-dip galvanized fasteners and zinc chromate primer'
    ],
    fabricationSolution: 'Adopted a cantilever curved structural arch design that grounds support columns strictly along the rear perimeter, leaving the entire parking forecourt unobstructed.',
    installationDetails: 'Cast 1200mm deep RCC isolated footings with high-tensile anchor bolt cages. Erected columns with crane assistance and secured roofing with neoprene-gasketed self-drilling fasteners.',
    specs: [
      { label: 'Capacity', value: '12 Car Parking Bays (65 ft length)' },
      { label: 'Design Type', value: 'Rear-column cantilever curved canopy' },
      { label: 'Roofing Material', value: '6mm multi-wall polycarbonate (UV coated)' },
      { label: 'Wind Load Rating', value: 'Designed for 150 km/h Bangalore wind zone' },
      { label: 'Drainage', value: 'Integrated rear gutter and downspout channel' }
    ]
  },
  {
    id: 'proj-6',
    slug: 'ms-structure-bidadi-industrial',
    title: 'MS Structure',
    category: 'ss-ms-structures',
    categoryLabel: 'SS & MS Structures',
    location: 'Bidadi',
    projectType: 'Industrial Project',
    image: '/images/project-ms-structure.webp',
    imageAlt: 'Industrial MS structural steel framework for commercial warehouse in Bidadi Bangalore',
    description: 'Heavy structural steel warehouse framing, open-span trusses, and purlins for an industrial logistics hub.',
    clientRequirement: 'An industrial manufacturing plant in Bidadi required a 6,000 sq ft clear-span steel warehouse extension with crane rail gantry beams and high roof clearance.',
    materialsUsed: [
      'ISMB 350 and ISMB 250 structural I-beams for primary portal columns',
      'Tubular and angle steel Warren trusses (IS 4923 Grade)',
      'Z and C-purlins with continuous overlap bracing',
      'Heavy-duty industrial grey epoxy primer and polyurethane coating'
    ],
    fabricationSolution: 'Prefabricated modular truss spans in SAM Fabrication workshop to minimize on-site downtime. Conducted full shop-fit assembly verification prior to dispatch.',
    installationDetails: 'Erected columns on heavy anchor bolt foundations within 5 working days using 20-ton mobile hydra crane. Installed all safety purlins, cross-bracings, and roof sheeting on schedule.',
    specs: [
      { label: 'Total Covered Area', value: '6,200 sq ft clear span' },
      { label: 'Clear Height', value: '7.5 meters eave height' },
      { label: 'Truss Type', value: 'Pitched Warren Open-Web Steel Truss' },
      { label: 'Steel Weight', value: '28.5 metric tons certified steel' },
      { label: 'Safety Standards', value: 'Compliant with IS 800:2007 structural code' }
    ]
  },
  {
    id: 'proj-7',
    slug: 'custom-fabrication-screen-whitefield',
    title: 'Custom Fabrication',
    category: 'other',
    categoryLabel: 'Other Works',
    location: 'Whitefield',
    projectType: 'Commercial Project',
    image: '/images/project-custom-fab.webp',
    imageAlt: 'Bespoke architectural laser-cut metal partition screen in Whitefield commercial office',
    description: 'Intricate CNC laser-cut decorative metal privacy screens and illuminated room dividers for a corporate office.',
    clientRequirement: 'A tech enterprise in Whitefield wanted an iconic acoustic and visual divider between the executive boardroom lobby and open workspace that highlighted Indian geometric motifs.',
    materialsUsed: [
      '3.0mm cold-rolled steel panels precision laser-cut on fiber laser',
      '50x25mm structural perimeter framing with concealed ceiling mounts',
      'Warm LED ribbon diffusers integrated inside the frame profile',
      'Architectural bronze metallic textured powder coating'
    ],
    fabricationSolution: 'Utilized CNC fiber laser cutting with 0.1mm tolerance to achieve smooth burr-free edges on complex tessellated patterns. Assembled with hidden interlocking brackets.',
    installationDetails: 'Secured between structural ceiling slabs and floor without visible surface fasteners. All electrical wiring was concealed within the metal frame extrusion.',
    specs: [
      { label: 'Dimensions', value: '22 ft length x 10 ft height' },
      { label: 'Cut Precision', value: '0.1mm CNC Fiber Laser accuracy' },
      { label: 'Finish', value: 'Architectural Bronze metallic powder coat' },
      { label: 'Lighting', value: 'Concealed 3000K warm architectural LED strip' },
      { label: 'Application', value: 'Corporate Lobby Partition & Acoustic Screen' }
    ]
  },
  {
    id: 'proj-8',
    slug: 'canopy-structure-sarjapur-villa',
    title: 'Canopy Structure',
    category: 'ss-ms-structures',
    categoryLabel: 'SS & MS Structures',
    location: 'Sarjapur',
    projectType: 'Residential Project',
    image: '/images/project-canopy.webp',
    imageAlt: 'Modern residential metal entrance canopy structure with wooden slatted pergola roof in Sarjapur',
    description: 'Architectural metal portico entrance canopy with weather-treated wooden louvers and downlighting.',
    clientRequirement: 'A villa owner on Sarjapur Road wanted a modern portico canopy over the main entry that protected guests from rain while providing an architectural focal point.',
    materialsUsed: [
      '120x60mm heavy rectangular steel hollow sections',
      'Treated composite timber louvers for organic warmth',
      '10mm toughened laminated safety glass canopy top',
      'Concealed aluminium rainwater gutter with integrated downpipe'
    ],
    fabricationSolution: 'Designed a cantilever steel frame anchored into the main concrete tie beam. The glass canopy was supported on spider fittings with custom sloped drainage to prevent pooling.',
    installationDetails: 'Installed without disrupting finished granite steps below. Sealed with structural silicone glazing compound guaranteed against leaks.',
    specs: [
      { label: 'Covered Area', value: '14 ft projection x 10 ft width' },
      { label: 'Glazing', value: '10.52mm clear toughened laminated glass' },
      { label: 'Frame Metal', value: 'Heavy MS RHS with matte dark charcoal finish' },
      { label: 'Waterproofing', value: 'Hidden peripheral gutter with downpipe' },
      { label: 'Design Style', value: 'Contemporary architectural portico' }
    ]
  },
  {
    id: 'proj-9',
    slug: 'sliding-gate-devanahalli-estate',
    title: 'Sliding Gate',
    category: 'gates',
    categoryLabel: 'Gates',
    location: 'Devanahalli',
    projectType: 'Residential Project',
    image: '/images/project-sliding-gate.webp',
    imageAlt: 'Heavy-duty horizontal slat sliding gate installed at private residence in Devanahalli',
    description: 'Full-privacy horizontal steel slat motorized sliding gate with charcoal grey epoxy coating.',
    clientRequirement: 'An expansive estate near Devanahalli Airport required a heavy motorized gate that provided 100% boundary privacy while resisting high-velocity wind loads from open countryside.',
    materialsUsed: [
      '75x25mm horizontal rectangular steel louvers with 10mm overlap for zero visibility',
      '100x50mm structural perimeter framework with reinforced diagonal truss',
      'Heavy-duty hardened steel double bearing v-groove wheels',
      'Marine-grade polyurethane two-pack dark graphite finish'
    ],
    fabricationSolution: 'Reinforced the internal framework to prevent bowing under open-terrain crosswinds. Configured a dual-motor rack mount for rapid, whisper-quiet operation.',
    installationDetails: 'Poured an engineered RCC continuous grade beam foundation for the ground track to prevent settling. Tested for 500 consecutive open/close cycles before sign-off.',
    specs: [
      { label: 'Clear Span', value: '20 ft driveway opening' },
      { label: 'Gate Weight', value: '380 kg balanced gate assembly' },
      { label: 'Privacy Factor', value: '100% optical privacy louvers' },
      { label: 'Operating System', value: 'Compatible with automated remote operator' },
      { label: 'Durability', value: 'Marine-grade anti-corrosive coating' }
    ]
  },
  {
    id: 'proj-10',
    slug: 'balcony-railing-hsr-residence',
    title: 'Balcony Railing',
    category: 'railings',
    categoryLabel: 'Railings',
    location: 'HSR Layout',
    projectType: 'Residential Project',
    image: '/images/project-balcony-railing.webp',
    imageAlt: 'Architectural mild steel balcony railing with black powder coated finish in HSR Layout',
    description: 'Modern black mild steel balcony railing installed on a 3-storey contemporary villa in HSR Layout.',
    clientRequirement: 'The client wanted a clean, geometric horizontal railing system with ultra-slim sightlines that matched the dark metallic window frames and facade features of their home.',
    materialsUsed: [
      '50x25mm flat rectangular steel top rail',
      '25x25mm square intermediate posts',
      '12x12mm solid square steel horizontal safety bars',
      'High-durability architectural matte black powder coating (70 microns)'
    ],
    fabricationSolution: 'Designed custom side-mounted fascia brackets that anchor to the exterior face of the concrete slab, maximizing usable floor space on the balcony.',
    installationDetails: 'Fascia anchored using M10 stainless steel drop-in anchors with silicone isolators to prevent electrolytic reaction between dissimilar metals.',
    specs: [
      { label: 'Total Balcony Span', value: '88 running feet across 3 floors' },
      { label: 'Mounting Style', value: 'Fascia side-mounted (space-saving)' },
      { label: 'Finish', value: '70-micron architectural matte black powder coat' },
      { label: 'Safety Code', value: 'Zero climbable foothold design' },
      { label: 'Warranty', value: '3-year coating & 10-year structural warranty' }
    ]
  },
  {
    id: 'proj-11',
    slug: 'industrial-fabrication-nelamangala-plant',
    title: 'Industrial Fabrication',
    category: 'ss-ms-structures',
    categoryLabel: 'SS & MS Structures',
    location: 'Nelamangala',
    projectType: 'Industrial Project',
    image: '/images/project-industrial-fab.webp',
    imageAlt: 'Industrial steel fabrication and clear-span roof truss structure in Nelamangala',
    description: 'Heavy industrial roof truss fabrication and steel column erection for a manufacturing plant.',
    clientRequirement: 'A heavy engineering manufacturing firm in Nelamangala required custom structural roof trusses for a workshop expansion accommodating overhead cranes and ductwork.',
    materialsUsed: [
      'Heavy structural steel angles (ISA 75x75x6 & 65x65x6mm)',
      '10mm thick gusset plates cut by CNC plasma cutter',
      'Grade 8.8 structural high-tensile connecting bolts',
      'Corrosion-inhibiting epoxy zinc phosphate red primer'
    ],
    fabricationSolution: 'Calculated and fabricated triangular Pratt trusses with cambering to counter live deflection under heavy roof sheeting and solar panel arrays.',
    installationDetails: 'Assembled on the factory floor, hoisted using dual cranes for tandem rigging, and secured onto concrete corbels with heavy anchor bolt sets.',
    specs: [
      { label: 'Truss Span', value: '18 meters (60 ft) clear span' },
      { label: 'Truss Type', value: 'Pratt Steel Industrial Roof Truss' },
      { label: 'Jointing', value: 'Welded gusset plates + High-strength bolting' },
      { label: 'Capacity', value: 'Designed for solar panel dead load + 1.2 kPa wind load' },
      { label: 'Industry', value: 'Manufacturing and Industrial Facility' }
    ]
  },
  {
    id: 'proj-12',
    slug: 'terrace-pergola-indiranagar-penthouse',
    title: 'Pergola',
    category: 'other',
    categoryLabel: 'Other Works',
    location: 'Indiranagar',
    projectType: 'Residential Project',
    image: '/images/project-pergola.webp',
    imageAlt: 'Outdoor steel pergola with dark powder coat and wooden beams in Indiranagar residential terrace',
    description: 'Rooftop terrace steel pergola with integrated glass shelter and hanging planter trellis.',
    clientRequirement: 'A penthouse owner in Indiranagar wanted to convert an exposed terrace into an all-weather entertainment lounge with protection from afternoon sun and rain.',
    materialsUsed: [
      '100x100mm heavy hollow steel column uprights (4.0mm wall thickness)',
      '150x50mm primary steel crossbeams',
      'Weather-resistant thermal treated wood rafters',
      '8mm toughened tinted glass canopy roof'
    ],
    fabricationSolution: 'Engineered a wind-anchored pergola frame bolted directly to structural columns below the terrace slab with chemical anchors to withstand extreme terrace gusting.',
    installationDetails: 'Crane-lifted steel members to the 4th floor penthouse terrace. Welded and ground joints smooth on-site, followed by precision glass installation with weather-proof seals.',
    specs: [
      { label: 'Terrace Footprint', value: '20 ft x 14 ft covered area' },
      { label: 'Roof Shelter', value: 'Toughened tinted glass + wooden louvers' },
      { label: 'Frame Finish', value: 'Satin graphite powder coat' },
      { label: 'Wind Safety', value: 'Anchored to building structural frame' },
      { label: 'Ambience', value: 'Integrated hanging planter tracks and pendant points' }
    ]
  }
];

export const blogPostsData: BlogPostItem[] = [
  {
    id: 'blog-1',
    slug: 'how-to-choose-the-right-gate-for-your-home',
    title: 'How to Choose the Right Gate for Your Home',
    excerpt: 'A complete guide to selecting the right main gate for your home, including design options, materials, safety tips and cost considerations.',
    content: `Choosing the right main gate for your property is one of the most critical decisions when building or renovating a home in Bangalore. Your entrance gate is the first architectural element guests and passersby observe, providing both a physical security perimeter and an aesthetic statement that sets the tone for your entire residence.

### 1. Sliding Gates vs. Swing Gates: Which Fits Your Driveway?
Before deciding on gate aesthetics, evaluate your property's topography and vehicle clearance:
- **Sliding Gates:** The optimal choice for driveways with an incline or properties where compound parking space is limited. A sliding gate slides horizontally along a ground track or cantilever beam, never encroaching on parking space.
- **Swing Gates:** Ideal for flat, level driveways with ample internal depth. Swing gates operate smoothly on heavy-duty bearing hinges and offer classic architectural elegance.
- **Telescopic & Bi-folding Gates:** For narrow driveways where there is insufficient lateral wall space for a single long sliding gate, multi-panel telescopic gates overlap during retraction to save up to 50% wall space.

### 2. Material Metallurgy: Mild Steel (MS) vs. Stainless Steel (SS)
- **Mild Steel (MS):** Highly versatile, structurally rigid, and capable of holding intricate CNC laser-cut patterns. With dual-coat zinc phosphate anti-rust primers and electrostatic powder coating, MS gates offer 15+ years of robust durability at attractive price points.
- **Stainless Steel (Grade 304):** Superior natural corrosion resistance against Bangalore heavy monsoon rains. SS gates maintain their bright metallic lustre with zero risk of rust without needing regular repaint cycles.

### 3. Space Constraints and Clearance Calculations
Accurate site measurement is non-negotiable. Ensure at least 150mm ground clearance below the bottom frame to avoid contact with road debris and water pooling during Bangalore monsoon downpours.

### 4. Gate Automation Readiness
If you plan to install motorized remote control or smart RFID access in the future, inform your fabricator beforehand so heavy-duty reinforcement plates and motor base plates are welded directly into the gate structure.`,
    category: 'Gates',
    categorySlug: 'gates',
    date: 'May 10, 2024',
    readTime: '5 min read',
    image: '/images/blog-featured-gate.webp',
    imageAlt: 'Architectural modern main gate with decorative gold laser-cut panel on luxury home',
    isFeatured: true,
    author: {
      name: 'SAM Fabrication Engineering Team',
      role: 'Senior Fabrication Architects'
    }
  },
  {
    id: 'blog-2',
    slug: 'top-10-modern-grill-designs-for-windows',
    title: 'Top 10 Modern Grill Designs for Windows',
    excerpt: 'Explore the latest window grill designs that combine safety, durability and modern aesthetics.',
    content: `Window grills have evolved from heavy, ornate iron cages into sleek, contemporary architectural features that complement modern Bangalore home facades.

### 1. Minimalist Horizontal Bar Grills
Clean horizontal square bars with equidistant spacing (typically 75mm to 90mm) create an illusion of wider window openings while providing uncompromised security. Finished in matte charcoal or graphite black, these grills seamlessly fit contemporary villas.

### 2. Geometric & Asymmetric Box Grills
Modern architecture embraces bold geometric forms. By varying the spacing and combining vertical rectangles with horizontal accents, geometric grills transform plain window openings into modern art.

### 3. Laser-Cut Sheet Metal Jali Grills
CNC laser technology allows fabricators to create custom privacy screens with botanical or Islamic jali patterns that filter intense sunlight while maintaining air circulation.

### 4. Window Box Grills with Planter Shelves
Extended 6 to 9 inches outside the window frame, box grills provide a secure platform for potted balcony plants and succulents, creating vibrant green window gardens.

### 5. Apartment Society Safety Compliance
Most Bangalore apartment associations mandate uniform external facade appearances. We engineer safety grills that install inside the window reveal without altering external building profiles.`,
    category: 'Grills',
    categorySlug: 'grills',
    date: 'Apr 28, 2024',
    readTime: '4 min read',
    image: '/images/blog-post-1.webp',
    imageAlt: 'Top 10 modern grill designs for windows combining security and aesthetics',
    author: {
      name: 'SAM Fabrication Design Studio',
      role: 'Architectural Metalwork Specialist'
    }
  },
  {
    id: 'blog-3',
    slug: 'stainless-steel-vs-ms-railings',
    title: 'Stainless Steel vs MS Railings: Which is Better?',
    excerpt: 'Compare stainless steel and mild steel railings in terms of strength, cost, maintenance and design.',
    content: `When selecting railing systems for your balcony, staircase, or terrace in Bangalore, the debate almost always centers around Stainless Steel (SS) versus Mild Steel (MS).

| Feature | Mild Steel (MS) Railings | Stainless Steel (SS 304) Railings |
|---|---|---|
| **Upfront Cost** | ₹350 – ₹650 per linear foot | ₹850 – ₹1,800+ per linear foot |
| **Corrosion Resistance** | Requires anti-rust primer & paint | Lifetime corrosion resistance |
| **Aesthetic Finishes** | Matte black, gold, textured powder coat | Satin hairline, mirror polish, PVD gold |
| **Structural Rigidity** | Exceptionally high tensile strength | High strength, lightweight |
| **Maintenance Cycle** | Repaint/touch-up every 4–6 years | Wash with mild soap and water |

### The Verdict:
- Choose **Stainless Steel (SS 304)** for open outdoor balconies and terraces exposed directly to Bangalore driving monsoon rains.
- Choose **Mild Steel (MS)** for internal staircases or covered balconies where you want dramatic matte black architectural styling at an economical cost.`,
    category: 'Railings',
    categorySlug: 'railings',
    date: 'Apr 20, 2024',
    readTime: '6 min read',
    image: '/images/blog-post-2.webp',
    imageAlt: 'Stainless steel vs mild steel railings side-by-side comparison',
    author: {
      name: 'SAM Fabrication Materials Lab',
      role: 'Metallurgical & Quality Engineer'
    }
  },
  {
    id: 'blog-4',
    slug: 'car-parking-shed-design-ideas',
    title: 'Car Parking Shed Design Ideas for Homes & Offices',
    excerpt: 'Discover stylish and durable car parking shed designs for residential and commercial spaces.',
    content: `A well-designed car parking shed protects your vehicle investments from UV paint oxidation, falling tree debris, bird droppings, and intense seasonal downpours.

### Cantilever Carports: Maximum Parking Freedom
Traditional carports require four support pillars, which frequently obstruct car door opening and make tight parallel parking difficult. Cantilever sheds use heavy-gauge structural steel columns anchored exclusively on one side, leaving the entire parking bay completely open.

### Roofing Material Breakdown:
1. **Multiwall Polycarbonate Sheets:** Lightweight, highly impact resistant, blocks 99% UV rays, and allows pleasant diffused natural daylight.
2. **Tensile PVC Membrane:** Architectural curved fabric roofs popular for commercial office parks and modern villas.
3. **Color-Coated Metal Sheets:** Maximum thermal shade and lowest cost per square foot.`,
    category: 'Car Parking Sheds',
    categorySlug: 'car-parking-sheds',
    date: 'Apr 15, 2024',
    readTime: '5 min read',
    image: '/images/blog-post-3.webp',
    imageAlt: 'Car parking shed design ideas for residential villas and corporate campuses',
    author: {
      name: 'SAM Fabrication Engineering Team',
      role: 'Structural Shed Fabricator'
    }
  },
  {
    id: 'blog-5',
    slug: 'latest-main-gate-designs-for-modern-homes',
    title: 'Latest Main Gate Designs for Modern Homes',
    excerpt: 'Explore trending main gate designs that enhance the beauty, safety and value of your property.',
    content: `Modern architecture emphasizes sleek lines, minimalist proportions, and contrasting material palettes. Discover the top main gate design trends sweeping Bangalore residential layouts in 2026.

### 1. Matte Charcoal with Metallic Gold Inlays
Pairing dark architectural charcoal steel frames with geometric gold or brass CNC laser-cut accents creates an instantly luxurious curb presence.

### 2. Horizontal Louvered Metal Privacy Gates
Louvered metal slats angled at 45 degrees permit cross-ventilation while providing complete visual privacy from street passersby.

### 3. Integrated Wicket Gates
For residential compounds with frequent pedestrian traffic, fabricating a discrete walk-in wicket gate inside the main driveway sliding gate eliminates the hassle of opening the entire heavy gate for a person.`,
    category: 'Design Ideas',
    categorySlug: 'design-ideas',
    date: 'Apr 05, 2024',
    readTime: '7 min read',
    image: '/images/blog-post-4.webp',
    imageAlt: 'Latest modern main gate designs with CNC laser cutting and gold accents',
    author: {
      name: 'SAM Fabrication Design Team',
      role: 'Lead Architectural Designer'
    }
  },
  {
    id: 'blog-6',
    slug: 'space-saving-staircase-design-ideas',
    title: 'Space-Saving Staircase Design Ideas',
    excerpt: 'Creative staircase designs for homes and commercial spaces with a focus on space efficiency.',
    content: `In urban Bangalore homes where floor area is at a premium, standard concrete staircases consume excessive space. Engineered metal staircases provide structural integrity in less than half the floor footprint.

### 1. Central Mono-Stringer Floating Staircases
A single central heavy-duty steel I-beam spine supports cantilevered step brackets. With open risers, natural daylight flows freely across levels, making compact rooms feel spacious.

### 2. Compact Metal Spiral Stairs
With a minimum diameter requirement of just 4.5 feet, custom spiral staircases provide access to rooftop gardens, mezzanine libraries, or duplex attics without sacrificing ground-floor living area.`,
    category: 'Staircases',
    categorySlug: 'staircases',
    date: 'Apr 28, 2024',
    readTime: '5 min read',
    image: '/images/blog-post-5.webp',
    imageAlt: 'Space saving staircase design ideas for compact duplex houses',
    author: {
      name: 'SAM Fabrication Structural Team',
      role: 'Structural Staircase Engineer'
    }
  },
  {
    id: 'blog-7',
    slug: 'ms-structural-fabrication-commercial-projects',
    title: 'MS Structural Fabrication for Commercial Projects',
    excerpt: 'Learn about MS structural fabrication uses, benefits and key considerations for large projects.',
    content: `From commercial warehouse roofs to multi-tier retail mezzanine floors, mild steel structural engineering forms the backbone of commercial construction in Bangalore industrial corridors.

### Engineering & Safety Standards
Large-span commercial fabrication requires strict adherence to IS 800 standards for structural steelwork. All weld preparations, fit-ups, and torque specifications on high-tensile connection bolts are calculated to withstand heavy operational live loads and seismic activity.`,
    category: 'MS Structures',
    categorySlug: 'ms-structures',
    date: 'Mar 20, 2024',
    readTime: '6 min read',
    image: '/images/blog-post-6.webp',
    imageAlt: 'MS structural fabrication for commercial warehouses and PEB structures',
    author: {
      name: 'SAM Fabrication Industrial Division',
      role: 'Commercial Project Manager'
    }
  },
  {
    id: 'blog-8',
    slug: 'how-to-maintain-gates-and-railings',
    title: 'How to Maintain Your Gates and Railings',
    excerpt: 'Essential maintenance practices to preserve the beauty, smooth movement, and rust protection of exterior metalwork.',
    content: `Bangalore pleasant climate features long monsoon periods with high atmospheric humidity. Routine preventive maintenance protects your metal gates, grills, and railings for decades.

### 1. Semi-Annual Track & Roller Lubrication
Wipe dirt and gravel from sliding gate ground tracks. Apply high-viscosity lithium grease to roller bearings and hinges twice a year for silent, frictionless movement.

### 2. Stainless Steel Satin Restoration
Avoid chlorine-based bleach or acidic tile cleaners near SS railings. Clean surfaces with mild detergent and microfibre cloth along the grain to maintain showroom shine.

### 3. Mild Steel Rust Spot Inspection
Inspect weld seams annually. If surface scratches occur, immediately touch up with zinc phosphate anti-rust primer and matching topcoat to seal the steel.`,
    category: 'Maintenance Tips',
    categorySlug: 'maintenance-tips',
    date: 'Apr 08, 2024',
    readTime: '4 min read',
    image: '/images/feedback-balcony.webp',
    imageAlt: 'Maintenance tips for steel gates, window grills and balcony railings',
    author: {
      name: 'SAM Fabrication Maintenance Division',
      role: 'Customer Care Specialist'
    }
  }
];

export const locationsData: LocationItem[] = [
  {
    slug: 'hebbal',
    name: 'Hebbal',
    subRegion: 'North Bangalore',
    description: 'Hebbal is one of North Bangalore’s premier residential and commercial gateways. We provide fast on-site measurement, custom gate fabrication, window grills, and balcony railings across Hebbal, Kempapura, and Bellary Road.',
    highlights: ['Rapid same-day site visits in Hebbal & surrounding layouts', 'Residential villa main gates and terrace metal sheds', 'Compliance with local RWA security grill specifications'],
    commonProjects: ['Custom black & gold main gates', 'Stainless steel balcony safety railings', 'Cantilever residential car sheds'],
    nearbyLandmarks: ['Hebbal Flyover', 'Hebbal Lake', 'Kempapura Layout'],
    featuredProjectSlug: 'window-grills-hebbal-villa'
  },
  {
    slug: 'yelahanka',
    name: 'Yelahanka',
    subRegion: 'North-East Bangalore',
    description: 'Serving independent villa communities and new residential layouts across Yelahanka New Town, Kogilu, and Doddaballapur Road with heavy-duty gates and modern architectural steel fabrication.',
    highlights: ['Specialized in wide-driveway sliding gates', 'Compact duplex spiral staircases', 'Polycarbonate carports for villa driveways'],
    commonProjects: ['Mild steel laser-cut boundary gates', 'Terrace roofing & laundry utility sheds', 'Decorative balcony safety grills'],
    nearbyLandmarks: ['Yelahanka Old Town', 'Kogilu Cross', 'Doddaballapur Road'],
    featuredProjectSlug: 'ms-staircase-yelahanka-duplex'
  },
  {
    slug: 'manyata-tech-park',
    name: 'Manyata Tech Park',
    subRegion: 'North Bangalore Tech Hub',
    description: 'Providing commercial office metal fabrication, canopy installations, and high-spec residential metalwork for residential apartments and commercial properties along Thanisandra Main Road and Nagavara.',
    highlights: ['Heavy-duty commercial glass and metal canopies', 'High-security parking barriers and compound gates', 'Stainless steel handrails for corporate and residential stairways'],
    commonProjects: ['Office entrance drop-off canopies', 'SS 304 grade architectural railings', 'Perimeter security boundary fencing'],
    nearbyLandmarks: ['Manyata Embassy Business Park', 'Nagavara Junction', 'Thanisandra Main Road'],
    featuredProjectSlug: 'ss-balcony-railing-manyata'
  },
  {
    slug: 'whitefield',
    name: 'Whitefield',
    subRegion: 'East Bangalore IT Hub',
    description: 'Specializing in contemporary residential metalwork for villas, gated communities, and tech campuses across Whitefield, ITPL Main Road, Hope Farm, and Brookefield.',
    highlights: ['Architectural mild steel and brass accent work', 'Tensile and polycarbonate designer carports', 'Sound-dampening metal compound fencing'],
    commonProjects: ['Designer main gates with wooden/WPC inlays', 'Modern vertical-slat balcony privacy railings', 'Rooftop pergola and glass skylight frames'],
    nearbyLandmarks: ['ITPL', 'Hope Farm Junction', 'Prestige Shantiniketan'],
    featuredProjectSlug: 'custom-fabrication-screen-whitefield'
  },
  {
    slug: 'electronic-city',
    name: 'Electronic City',
    subRegion: 'South Bangalore Industrial & IT Belt',
    description: 'Executing structural steel frameworks, industrial warehouse canopies, and apartment complex gate fabrication across Electronic City Phase 1 & 2, Neeladri Road, and Doddathogur.',
    highlights: ['Industrial-grade structural welding and fabrication', 'Large-span commercial parking sheds', 'Automated sliding gates for residential societies'],
    commonProjects: ['I-beam structural warehouse frames', 'Commercial cafeteria pergolas', 'Multi-car parking canopy structures'],
    nearbyLandmarks: ['Phase 1 Toll Plaza', 'Neeladri Road', 'Wipro Gate'],
    featuredProjectSlug: 'main-gate-laser-cut-bangalore'
  },
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    subRegion: 'South Bangalore Residential & Startup Hub',
    description: 'Delivering precision architectural fabrication for upscale residences, commercial startup offices, and residential layouts across all sectors of HSR Layout.',
    highlights: ['Modern minimalist safety grills compliant with building codes', 'Space-saving spiral staircases for compact urban plots', 'Laser-cut designer window and balcony safety screens'],
    commonProjects: ['Matte-black powder-coated window grills', 'Internal floating metal staircases with wooden treads', 'Custom rooftop sit-out sheds'],
    nearbyLandmarks: ['BDA Complex HSR', '27th Main Road', 'Agara Lake Road'],
    featuredProjectSlug: 'balcony-railing-hsr-residence'
  },
  {
    slug: 'sarjapur-road',
    name: 'Sarjapur Road',
    subRegion: 'South-East Bangalore Villa Corridor',
    description: 'Connecting Koramangala and Bellandur to expansive residential villa layouts, Sarjapur Road is a prime corridor for architectural metalwork. We engineer custom entrance gates, weather-resistant cantilever carports, glass & SS balcony railings, and terrace canopies for villas and gated communities.',
    highlights: ['Specialized in modern cantilever villa canopies & car parking sheds', 'Custom SS 304 toughened glass balcony safety railings', 'Fast on-site measurement across Carmelaram, Doddakannelli & Sompura'],
    commonProjects: ['Architectural villa entrance canopies', 'Toughened glass & SS 304 balcony railings', 'Polycarbonate curved residential car parking sheds'],
    nearbyLandmarks: ['Carmelaram', 'Doddakannelli', 'Rainbow Drive', 'Decathlon Sarjapur'],
    featuredProjectSlug: 'canopy-structure-sarjapur-villa',
    faqs: [
      {
        question: 'What fabrication works are most requested for villas and gated communities along Sarjapur Road?',
        answer: 'Along Sarjapur Road, Carmelaram, and Doddakannelli, villa owners frequently request custom cantilever car parking sheds that maximize driveway space, toughened glass balcony railings with AISI 304 stainless steel fittings, modern automated sliding entrance gates, and terrace metal pergolas designed for outdoor living.'
      },
      {
        question: 'Can you design cantilever car parking sheds that fit narrow villa driveways without support pillars?',
        answer: 'Yes. Our cantilever car shed frames utilize heavy-gauge mild steel structural tubes and reinforced wall-bracket or single-side ground foundations. This eliminates outer pillars, ensuring unobstructed car door opening and easy maneuvering in compact villa driveways.'
      },
      {
        question: 'Do you fabricate SS 304 and toughened glass balcony railings for duplexes in Sarjapur Road?',
        answer: 'Yes. We fabricate premium architectural railings combining marine-grade AISI 304 stainless steel balusters or spigots with 10mm to 12mm laminated or toughened safety glass. All handrails and corner joints are TIG-welded and satin-brushed for long-lasting weather durability.'
      },
      {
        question: 'How do you handle site inspections and measurements in gated communities across Sarjapur Road?',
        answer: 'Our fabrication supervisors conduct scheduled on-site inspections across Sarjapur Road, Sompura, and Hadosiddapura. We coordinate with community association guidelines, measure site dimensions with precision laser equipment, check structural anchoring points, and supply detailed CAD layout drawings and quotations.'
      },
      {
        question: 'What weather-protective coatings do you apply to outdoor villa pergolas and entrance gates?',
        answer: 'All external mild steel structures undergo manual descaling, seam grinding, and two coats of anti-corrosive zinc phosphate epoxy primer. Exterior surfaces are finished with UV-resistant polyurethane (PU) enamel paint or high-durability powder coating to withstand heavy monsoon rainfall and intense sunlight.'
      }
    ]
  },
  {
    slug: 'indiranagar',
    name: 'Indiranagar',
    subRegion: 'Central-East Bangalore',
    description: 'Indiranagar is one of Bangalore’s premier residential and lifestyle hubs, known for luxury independent bungalows, rooftop penthouses, and commercial boutique spaces. We deliver bespoke rooftop pergolas, modern spiral and floating metal staircases, designer security window grills, and precision architectural steelwork.',
    highlights: ['Custom steel & aluminium rooftop terrace pergolas with shade louvers', 'Architectural space-saving spiral & floating staircases for duplexes', 'Minimalist laser-cut privacy screens and window safety grills'],
    commonProjects: ['Rooftop terrace metal pergolas with glass or polycarbonate roofing', 'Modern internal and external MS spiral staircases', 'Architectural decorative metal facade screens & gates'],
    nearbyLandmarks: ['100 Feet Road', '12th Main', 'CMH Road', 'Defence Colony'],
    featuredProjectSlug: 'terrace-pergola-indiranagar-penthouse',
    faqs: [
      {
        question: 'What metal fabrication solutions do you deliver for rooftop penthouses and bungalows in Indiranagar?',
        answer: 'In Indiranagar, Defence Colony, and surrounding residential blocks, we regularly fabricate architectural rooftop terrace pergolas with shade louvers, space-saving metal staircases for duplexes, minimalist laser-cut safety window grills, and bespoke stainless steel or brass-accented entrance gates.'
      },
      {
        question: 'Can you fabricate custom spiral or floating metal staircases for duplex residences in Indiranagar?',
        answer: 'Yes. We engineer space-efficient internal and external spiral staircases as well as modern floating mono-stringer staircases. Built with heavy-duty structural steel central columns and anti-skid wooden or metal-tread supports, they offer rigid structural stability while enhancing interior aesthetics.'
      },
      {
        question: 'Do you build rooftop terrace pergolas with waterproof glass or polycarbonate roofing?',
        answer: 'Yes. We design custom terrace sit-out pergolas using hollow steel rafters finished in matte black or charcoal grey, integrated with multi-wall UV-coated polycarbonate sheets or laminated toughened glass to provide 100% rain protection while admitting natural light.'
      },
      {
        question: 'How do you manage fabrication and installation in residential areas like Defence Colony without causing disturbance?',
        answer: 'To minimize noise and disruption in quiet residential zones, our team fabricates, cuts, and pre-assembles structural components off-site in our workshop. On-site work in Indiranagar is limited to alignment, bolting, and minimal precision welding during permitted daytime working hours.'
      },
      {
        question: 'Can you manufacture designer laser-cut window grills and privacy partitions for modern Indiranagar homes?',
        answer: 'Yes. We fabricate custom CNC laser-cut decorative metal panels in mild steel or aluminium with geometric and contemporary patterns. These panels serve as secure burglar-resistant window grills, balcony privacy screens, or room dividers, finished with smooth thermoset powder coating.'
      }
    ]
  },
  {
    slug: 'devanahalli',
    name: 'Devanahalli',
    subRegion: 'North Bangalore Airport Corridor',
    description: 'Anchoring the high-growth international airport belt and expansive plotted developments, Devanahalli features farm estates, gated luxury villas, and logistics facilities. We fabricate heavy-duty motorized sliding main gates, perimeter compound fencing, agricultural storage sheds, and structural steel warehouse roofing.',
    highlights: ['Heavy-duty wide sliding estate gates with automation readiness', 'Industrial & agricultural metal storage sheds and roofing', 'On-site welding and fabrication across airport road villa enclaves'],
    commonProjects: ['Automated heavy mild steel sliding main gates for large properties', 'Galvanized compound security fencing and boundary grills', 'Steel truss storage sheds and car parking structures'],
    nearbyLandmarks: ['KIA Airport Corridor', 'Devanahalli Fort', 'Aerospace Park', 'Nandi Upachar Junction'],
    featuredProjectSlug: 'sliding-gate-devanahalli-estate',
    faqs: [
      {
        question: 'What types of fabrication are suited for large farmhouses and gated estates in Devanahalli?',
        answer: 'Properties in Devanahalli, Aerospace Park, and the Airport Road corridor typically require heavy-duty wide sliding estate entrance gates, perimeter security fencing with anti-climb spikes, large-span structural steel storage and utility sheds, and cantilever vehicle parking structures.'
      },
      {
        question: 'Can you fabricate extra-wide motorized sliding main gates for estate properties near the Airport Road?',
        answer: 'Yes. We manufacture heavy-gauge mild steel sliding gates spanning widths from 15 to 30 feet. Equipped with ground-recessed inverted angle tracks, heavy-duty sealed bearing rollers, and reinforced guide gantries, they can be manually rolled with ease or fitted with heavy-duty automatic sliding gate motors.'
      },
      {
        question: 'Do you construct structural steel sheds and car parking canopies for plotted layouts in Devanahalli?',
        answer: 'Yes. We build custom multi-vehicle parking sheds, garden tool storage sheds, and agricultural equipment shelters using structural steel trusses, C-purlins, and corrosion-resistant Galvalume or polycarbonate profile sheets engineered to withstand high wind loads in open northern terrains.'
      },
      {
        question: 'How do you protect exterior gates and boundary fencing in open Devanahalli terrains from rust?',
        answer: 'Open estate environments around Devanahalli experience high dust and seasonal monsoon weathering. We treat all steel components with industrial de-rusting, followed by dual-coat zinc chromate or zinc phosphate anti-corrosion primer and heavy-duty polyurethane exterior enamel for extended lifespan.'
      },
      {
        question: 'Do you undertake on-site fabrication and installation for remote sites in the Devanahalli and Aerospace Park belt?',
        answer: 'Yes. Our mobile fabrication teams are equipped for on-site anchoring, welding, and structural assembly across Devanahalli, Nandi Upachar corridor, and nearby industrial layouts. For projects requiring independent power, we deploy portable generator-backed welding rigs.'
      }
    ]
  },
  {
    slug: 'peenya',
    name: 'Peenya',
    subRegion: 'West Bangalore Industrial Zone',
    description: 'Located immediately adjacent to our Dasarahalli workshop, Peenya is South Asia’s largest industrial hub. We provide heavy structural steel fabrication, industrial PEB roofing sheds, factory mezzanine floors, safety catwalks, machine enclosures, and heavy sliding factory gates for manufacturing units and warehouses.',
    highlights: ['Immediate same-day site visits from our nearby Dasarahalli workshop', 'Heavy IS 2062 I-beam structural steel & PEB industrial shed fabrication', 'Factory mezzanine storage platforms and OSHA-compliant safety railings'],
    commonProjects: ['Industrial PEB factory roofing sheds and warehouse structures', 'Heavy-load steel mezzanine floors and industrial staircases', 'Factory main entrance heavy sliding gates & safety barricades'],
    nearbyLandmarks: ['Peenya Industrial Area 1st & 2nd Stage', 'Tumkur Road', 'Dasarahalli Metro', 'Jalahalli Cross'],
    featuredProjectSlug: 'industrial-fabrication-nelamangala-plant',
    faqs: [
      {
        question: 'What industrial fabrication services do you provide for manufacturing units and warehouses in Peenya?',
        answer: 'For industrial units across Peenya 1st, 2nd, and 3rd Stages, we fabricate heavy structural steel frameworks, pre-engineered building (PEB) factory roofing sheds, structural mezzanine storage platforms, heavy sliding factory gates, and OSHA-compliant safety railings and machine guards.'
      },
      {
        question: 'Can you engineer heavy-duty industrial mezzanine floors for storage expansion in Peenya factories?',
        answer: 'Yes. We design and fabricate structural steel mezzanine floors using IS 2062 standard universal beams (UB), heavy square hollow sections, and chequered plate or grating decking. Every mezzanine is engineered to specified load ratings (such as 300 to 1,000 kg/m²) for equipment or warehouse racking.'
      },
      {
        question: 'Do you fabricate heavy sliding factory gates and industrial perimeter safety barricades?',
        answer: 'Yes. We manufacture robust industrial sliding gates capable of handling continuous commercial vehicle movement, utilizing reinforced structural box channels, heavy cast iron or forged steel guide wheels, and high-tensile safety latch mechanisms built for 24/7 industrial duty cycles.'
      },
      {
        question: 'How quickly can your team conduct on-site inspections for industrial units in Peenya 1st and 2nd Stages?',
        answer: 'Because our primary workshop is located in nearby Dasarahalli along Tumkur Road, we can arrange same-day or next-day on-site technical inspections in Peenya Industrial Area to take measurements, inspect structural anchor points, and discuss fabrication timelines.'
      },
      {
        question: 'What structural steel standards and welding quality controls do you adhere to for industrial projects?',
        answer: 'We utilize certified structural steel grades (such as IS 2062 / IS 4923 / IS 1239) from reputed Indian primary producers. All structural joints are welded by experienced welders using full-penetration MIG/SMAW welding, with weld slag removal, surface preparation, and quality checks before anti-corrosive priming.'
      }
    ]
  },
  {
    slug: 'jayanagar',
    name: 'Jayanagar',
    subRegion: 'South Bangalore Heritage & Residential Hub',
    description: 'One of Bangalore’s most established residential and commercial enclaves, Jayanagar features tree-lined avenues, independent heritage bungalows, modern multi-level residences, and bustling commercial blocks. We provide custom-fabricated mild steel entrance gates, brass-accented balcony railings, safety window grills, and rooftop terrace sit-out sheds tailored to both traditional architecture and contemporary renovations.',
    highlights: ['Custom architectural main gates for independent houses and duplexes', 'High-tensile MS safety window grills and balcony enclosures', 'On-site welding and custom metalwork across Jayanagar 1st to 9th Blocks'],
    commonProjects: ['Heritage-style and modern minimalist MS sliding main gates', 'SS 304 balcony railings with toughened glass panels', 'Covered terrace sit-out pergolas and utility sheds'],
    nearbyLandmarks: ['Jayanagar 4th Block Complex', 'South End Circle', 'Ashoka Pillar', 'Madhavan Park'],
    featuredProjectSlug: 'main-gate-laser-cut-bangalore',
    faqs: [
      {
        question: 'What metal fabrication services are most requested for residences in Jayanagar?',
        answer: 'In Jayanagar 1st to 9th Blocks, homeowners frequently request custom mild steel entrance gates combining traditional or laser-cut styling, SS 304 balcony railings with toughened glass panels, ornate or modern safety window grills, and covered terrace sit-out pergolas for independent bungalows and renovated duplexes.'
      },
      {
        question: 'Can you design custom main entrance gates that match traditional bungalow architecture in Jayanagar?',
        answer: 'Yes. We fabricate bespoke swing and sliding gates featuring CNC laser-cut metal accents, classic wrought iron scrollwork, or clean contemporary horizontal louvers. All gates are built with heavy-gauge structural box sections and treated with dual-coat anti-rust primer for lasting durability.'
      },
      {
        question: 'Do you fabricate stainless steel and glass balcony railings for duplex homes in Jayanagar?',
        answer: 'Yes. We engineer AISI 304 marine-grade stainless steel railing systems paired with 10mm or 12mm toughened safety glass panels. All joints are precision TIG-welded, grind-finished, and buffed to satin or mirror polish to ensure both safety compliance and sleek aesthetics.'
      },
      {
        question: 'Do you offer on-site measurement and consultation across all blocks of Jayanagar?',
        answer: 'Yes. Our fabrication team conducts site visits across Jayanagar 3rd, 4th, 5th, 7th, 8th, and 9th Blocks, as well as nearby Tilaknagar and South End Circle. We take accurate laser measurements, check masonry and RCC anchor points, and provide itemized estimates.'
      },
      {
        question: 'How do you build rooftop terrace sit-out sheds for Jayanagar houses?',
        answer: 'We fabricate sturdy structural steel terrace canopies and pergolas using hollow box sections and purlins, topped with multi-wall UV-coated polycarbonate sheets or insulated Galvalume roofing tiles. These protect terrace gardens and seating areas from intense sun and monsoon rains.'
      }
    ]
  },
  {
    slug: 'jp-nagar',
    name: 'JP Nagar',
    subRegion: 'South Bangalore Residential Corridor',
    description: 'Spanning eight planned phases across South Bangalore, JP Nagar is a vibrant residential corridor of independent villas, modern duplexes, and premium apartment communities. We fabricate custom space-saving metal staircases, decorative balcony safety railings, weather-resistant cantilever car parking sheds, and automated sliding entrance gates designed for residential layouts.',
    highlights: ['Space-saving internal and external MS metal staircases', 'Cantilever residential car parking sheds with UV polycarbonate roofing', 'On-site fabrication and mobile welding across JP Nagar 1st to 8th Phase'],
    commonProjects: ['Modern MS stringer staircases with timber or check plate treads', 'Heavy-gauge balcony safety grills for multi-storey residences', 'Motorized residential main gates and compact bi-fold gates'],
    nearbyLandmarks: ['Brigade Millennium', 'Sarakki Lake', 'Ranga Shankara', 'Delmia Circle'],
    featuredProjectSlug: 'ms-staircase-yelahanka-duplex',
    faqs: [
      {
        question: 'What fabrication solutions do you deliver for villas and apartments in JP Nagar?',
        answer: 'Across JP Nagar 1st to 8th Phases, we regularly fabricate space-saving internal and external metal staircases, cantilever car parking sheds, high-gauge balcony safety grills for multi-storey homes, and automated sliding or bi-fold compound gates.'
      },
      {
        question: 'Can you fabricate space-saving spiral or floating metal staircases for duplexes in JP Nagar?',
        answer: 'Yes. We build custom spiral staircases with central heavy-wall structural pipes and laser-cut steps, as well as modern floating mono-stringer metal stairs. Treads can be fitted with anti-skid chequered steel plate or prepared for solid wood and stone overlay.'
      },
      {
        question: 'Which car parking shed designs work best for independent house plots in JP Nagar?',
        answer: 'Cantilever car parking sheds are especially popular in JP Nagar residential layouts because they use one-sided structural column supports, keeping the driveway entrance completely open for smooth vehicle turning and passenger exit.'
      },
      {
        question: 'Do you fabricate child-safe balcony safety grills and window enclosures in JP Nagar?',
        answer: 'Yes. We fabricate heavy-duty mild steel balcony grill cages and window safety frames using square bars or hollow tubular sections anchored into RCC beams with high-tensile anchor fasteners, finished with corrosion-resistant primer and polyurethane paint.'
      },
      {
        question: 'How do you schedule on-site fabrication and welding across JP Nagar 1st to 8th Phase?',
        answer: 'Our mobile fabrication supervisors and welding crews provide on-site inspection and installation from Sarakki, Delmia Circle, and Brigade Millennium to 7th and 8th Phase layouts. We manage structural pre-assembly off-site to minimize on-site noise and duration.'
      }
    ]
  },
  {
    slug: 'marathahalli',
    name: 'Marathahalli',
    subRegion: 'East Bangalore IT & Residential Corridor',
    description: 'Positioned along the Outer Ring Road connecting key IT tech parks with dense residential townships, Marathahalli demands robust, space-efficient metalwork. We deliver precision-engineered balcony safety grills, child-safe window grills, commercial entrance canopies, and architectural partition screens for high-rise apartments, independent buildings, and commercial offices.',
    highlights: ['High-strength apartment balcony safety grills and utility window enclosures', 'Commercial entrance drop-off canopies and structural steel porticos', 'Prompt site measurement and welding service across Marathahalli & ORR'],
    commonProjects: ['Apartment balcony safety grill cages and bird-protection metal frames', 'Polycarbonate and metal sheet entrance canopies for commercial hubs', 'Architectural laser-cut privacy screens and corridor safety railings'],
    nearbyLandmarks: ['Marathahalli Bridge', 'Kalamandir Junction', 'Kundalahalli Gate', 'Outer Ring Road IT Belt'],
    featuredProjectSlug: 'custom-fabrication-screen-whitefield',
    faqs: [
      {
        question: 'What metal fabrication works are most common for apartments and commercial spaces in Marathahalli?',
        answer: 'Along Marathahalli, Kundalahalli, and Outer Ring Road, high demand centers on apartment balcony safety grill cages, pigeon-protection window metal frames, commercial building entrance porticos, cantilever drop-off canopies, and architectural partition screens.'
      },
      {
        question: 'Can you install full-height balcony safety grill cages for high-rise apartments in Marathahalli?',
        answer: 'Yes. We engineer custom full-height balcony safety enclosures fabricated from solid square bars or hollow structural sections. Designed to meet high-rise safety standards, they provide child protection and bird deterrence without obstructing ventilation or views.'
      },
      {
        question: 'Do you manufacture commercial entrance canopies and car parking sheds in Marathahalli?',
        answer: 'Yes. We fabricate heavy structural steel entrance canopies, drop-off porticos, and multi-car parking sheds using curved or pitched truss frames with multi-wall polycarbonate or insulated metal roofing sheets suited for IT offices, clinics, and commercial complexes.'
      },
      {
        question: 'How do you ensure balcony grills and gates survive weather and pollution along the Outer Ring Road?',
        answer: 'Because Marathahalli experiences heavy traffic emissions and seasonal monsoon exposure, all mild steel fabrication receives thorough mechanical cleaning, dual coats of red oxide / zinc phosphate primer, and two coats of weather-grade polyurethane (PU) enamel paint.'
      },
      {
        question: 'Do you handle on-site measurements and fast installation in gated communities across Marathahalli?',
        answer: 'Yes. We coordinate site visits across Marathahalli, Munnekollal, spice garden layout, and Kundalahalli Gate. Our supervisors review society guidelines, take laser measurements, and coordinate silent installation during permitted society work hours.'
      }
    ]
  },
  {
    slug: 'rajajinagar',
    name: 'Rajajinagar',
    subRegion: 'West Bangalore Commercial & Residential Belt',
    description: 'A major commercial and residential landmark in West Bangalore, Rajajinagar comprises well-planned residential blocks, commercial thoroughfares, and light industrial units. We fabricate heavy-duty compound boundary gates, security window grills, metal rooftop utility sheds, staircase railings, and commercial display structural frames built to withstand rigorous daily use.',
    highlights: ['Heavy-duty mild steel sliding and swing boundary gates', 'Commercial security grills, rolling shutter safety frames, and partitions', 'Durable rooftop terrace sheds and solar panel support structures'],
    commonProjects: ['Modern MS boundary gates with corrosion-resistant polyurethane coating', 'Burglar-resistant residential and commercial safety window grills', 'Terrace utility sheds and metal staircase railings'],
    nearbyLandmarks: ['Rajajinagar 1st Block', 'Navrang Circle', 'West of Chord Road', 'Mahakavi Kuvempu Road'],
    featuredProjectSlug: 'window-grills-hebbal-villa',
    faqs: [
      {
        question: 'What types of fabrication services do you provide for properties in Rajajinagar?',
        answer: 'In Rajajinagar, we fabricate heavy-duty compound boundary gates, burglar-resistant safety window grills, rooftop terrace laundry and utility sheds, rolling shutter safety frames, internal staircase railings, and commercial display structural frames.'
      },
      {
        question: 'Can you fabricate heavy-duty mild steel sliding and bi-fold boundary gates for Rajajinagar residences?',
        answer: 'Yes. We manufacture robust sliding and folding main gates using structural hollow sections and heavy-gauge sheet cladding or laser-cut decorative inserts. Equipped with precision ball-bearing bottom rollers and anti-lift top guides, they operate smoothly in tight urban frontages.'
      },
      {
        question: 'How do you construct burglar-resistant safety window grills for homes and shops in Rajajinagar?',
        answer: 'We fabricate high-security window grills using solid 10mm to 12mm square or round steel bars, welded into solid perimeter frames and embedded into masonry openings with deep anchor dowels, preventing tampering while allowing easy cleaning and ventilation.'
      },
      {
        question: 'Do you build metal rooftop terrace sheds and solar panel support frames in Rajajinagar?',
        answer: 'Yes. We construct heavy-gauge structural steel terrace sheds and elevated solar panel mounting frames designed to withstand high monsoon wind loads, using galvanized purlins and anti-rust coated steel trusses anchored directly to RCC columns.'
      },
      {
        question: 'How quickly can your team visit Rajajinagar for measurements and quote estimates?',
        answer: 'Our workshop in Dasarahalli is just minutes away from Rajajinagar via West of Chord Road and Tumkur Road. We can easily arrange same-day or next-day on-site measurement visits across all Rajajinagar blocks, Navrang Circle, and Mahakavi Kuvempu Road.'
      }
    ]
  },
  {
    slug: 'btm-layout',
    name: 'BTM Layout',
    subRegion: 'South Bangalore Residential & Commercial Corridor',
    description: 'A densely developed residential and commercial hub in South Bangalore connecting Bannerghatta Road with Hosur Road, BTM Layout features multi-storey residential apartments, rental housing, and bustling commercial blocks. We fabricate space-efficient external metal staircases for upper-floor access, security window grills, robust compound gates, and protective terrace utility sheds tailored to compact urban properties.',
    highlights: ['External and internal mild steel fire-escape & access staircases', 'High-security burglar-resistant window grills and balcony enclosures', 'Prompt site measurement and repair welding across BTM 1st & 2nd Stages'],
    commonProjects: ['External iron staircases with anti-skid check plate treads', 'Modern bi-fold and sliding MS compound entrance gates', 'Rooftop terrace utility rooms and metal laundry sheds'],
    nearbyLandmarks: ['Udupi Garden Circle', 'Silk Board Junction', 'Madiwala Lake Ring Road', 'BTM 2nd Stage Water Tank'],
    featuredProjectSlug: 'car-parking-shed-bangalore-campus',
    faqs: [
      {
        question: 'What types of fabrication works are most in-demand across BTM Layout?',
        answer: 'Due to high-density residential apartments, PG accommodations, and commercial buildings in BTM 1st and 2nd Stages, the most frequent requirements are space-saving external mild steel staircases for rental and terrace access, burglar-resistant balcony grill cages, compact bi-fold or sliding compound gates for narrow road frontages, and protective rooftop utility sheds.'
      },
      {
        question: 'Can you fabricate external iron staircases for properties with narrow setbacks in BTM Layout?',
        answer: 'Yes. We design and fabricate custom external spiral staircases, straight-flight metal stairs, and compact mid-landing L-shaped staircases using structural MS hollow pipes and anti-skid chequered plate treads. Each staircase is custom-measured to fit tight municipal setbacks while providing safe, rigid upper-floor access.'
      },
      {
        question: 'Do you provide on-site measurement and quotation visits in BTM 1st & 2nd Stages?',
        answer: 'Yes. Our fabrication supervisors visit sites throughout BTM Layout, Tavarekere, Madiwala, and surrounding South Bangalore layouts. We inspect site alignment, assess load-bearing walls or RCC columns for secure anchor placement, take laser measurements, and provide detailed itemized quotations.'
      },
      {
        question: 'How do you ensure balcony safety grills in BTM rental properties are secure and weather-resistant?',
        answer: 'Balcony safety cages and grill panels are fabricated with heavy-gauge square bars or hollow pipes, anchored into RCC slab edges using high-tensile expansion fasteners. All steel elements receive double-coat zinc phosphate anti-rust primer and weather-resistant polyurethane enamel paint to resist corrosion from urban rain and moisture.'
      },
      {
        question: 'What is the typical turnaround time for fabrication and installation in BTM Layout?',
        answer: 'Standard residential gates, window grills, and safety doors are typically fabricated in our workshop within 4 to 7 working days. On-site structural positioning, alignment welding, and final touch-up painting are generally completed in 1 to 2 days, minimizing disruption to residents and tenants.'
      }
    ]
  },
  {
    slug: 'kr-puram',
    name: 'KR Puram',
    subRegion: 'East Bangalore Major Transit & Residential Corridor',
    description: 'Positioned along Old Madras Road and the Outer Ring Road connecting into the Whitefield IT belt, KR Puram is a fast-growing residential zone of independent houses, newly developed layouts, and gated communities. We engineer heavy-duty mild steel sliding gates, cantilever car parking sheds with UV-coated roofing, balcony safety grills, and stainless steel railings built for long-term weather durability.',
    highlights: ['Custom motorized and manual sliding main entrance gates', 'Cantilever residential car parking sheds with polycarbonate roofing', 'Complete on-site fabrication and mobile welding across KR Puram & Battarahalli'],
    commonProjects: ['Heavy-gauge MS boundary gates with anti-rust polyurethane coating', 'Single and dual-car parking sheds with galvanized steel frames', 'AISI 304 stainless steel balcony railings with toughened safety glass'],
    nearbyLandmarks: ['KR Puram Cable-Stayed Bridge', 'KR Puram Railway Station', 'Battarahalli Junction', 'ITPL Main Road Junction'],
    featuredProjectSlug: 'main-gate-laser-cut-bangalore',
    faqs: [
      {
        question: 'What metal fabrication services do you offer in KR Puram and Battarahalli?',
        answer: 'In KR Puram, Old Madras Road, and Battarahalli, we regularly fabricate cantilever and dual-post car parking sheds with polycarbonate or colour-coated roofing, motorized and manual mild steel sliding compound gates, AISI 304 grade stainless steel balcony railings, and structural rooftop utility sheds for independent houses and villa communities.'
      },
      {
        question: 'Which car parking shed design is recommended for independent villas in KR Puram?',
        answer: 'Cantilever car parking sheds are popular for villas with compact driveways because they eliminate outer support pillars, maximizing vehicle turning clearance. We fabricate robust structural frames using heavy-gauge tubular steel and top them with multiwall UV-stabilized polycarbonate sheets or insulated Galvalume roofing for heat and rain protection.'
      },
      {
        question: 'Can automated sliding main gates be installed in residential layouts in KR Puram?',
        answer: 'Yes. We manufacture heavy-duty sliding gates fitted with precision ground guide tracks, double-sealed ball bearing bottom rollers, and anti-jump top brackets. These gates can be operated manually with minimal effort or paired with standard automated gate motor kits for remote control access.'
      },
      {
        question: 'How do you prevent rusting on gates and railings along busy transit corridors like Old Madras Road?',
        answer: 'To withstand vehicle exhaust, road dust, and seasonal monsoon dampness, all mild steel fabrication is thoroughly de-slagged and wire-brushed before receiving a two-coat epoxy/zinc phosphate primer and heavy-duty polyurethane finish paint. For high-corrosion environments or decorative railings, we recommend AISI 304 stainless steel.'
      },
      {
        question: 'Do you provide on-site structural welding and modification in KR Puram?',
        answer: 'Yes. Our mobile fabrication teams carry portable inverter welding units, cutting equipment, and safety gear to handle on-site assembly, gate hinge reinforcement, frame modifications, and prompt structural repairs across KR Puram, TC Palya, and Devasandra.'
      }
    ]
  },
  {
    slug: 'thanisandra',
    name: 'Thanisandra',
    subRegion: 'North Bangalore Airport Link & Tech Corridor',
    description: 'A thriving growth corridor extending from Manyata Tech Park toward the International Airport road along Thanisandra Main Road and Hennur, this area features high-rise luxury apartment complexes, premium villa gated communities, and retail frontage. We deliver custom CNC laser-cut entrance gates, high-rise balcony safety grill cages, modern floating staircases, and terrace sit-out pergolas designed for contemporary architecture.',
    highlights: ['High-rise apartment balcony safety grills and child-safe window enclosures', 'Contemporary CNC laser-cut mild steel gates with champagne gold accents', 'Rapid site inspections and precision installation along Thanisandra Main Road'],
    commonProjects: ['Full-height balcony safety grill cages complying with apartment society norms', 'Designer laser-cut MS main gates with automated sliding tracks', 'Terrace sit-out pergolas and solar inverter support structures'],
    nearbyLandmarks: ['Bhartiya City', 'Thanisandra Main Road', 'Nagawara Junction', 'Hegde Nagar Circle'],
    featuredProjectSlug: 'main-gate-laser-cut-bangalore',
    faqs: [
      {
        question: 'What fabrication solutions do you deliver for apartment complexes near Manyata and Bhartiya City in Thanisandra?',
        answer: 'For high-rise residential towers and gated communities along Thanisandra Main Road, we specialize in society-compliant balcony safety grill cages, child-safe window safety bars, invisible grill perimeter framing, utility balcony louvers, and drying-yard privacy screens fabricated to match builder and RWA aesthetic guidelines.'
      },
      {
        question: 'Can designer CNC laser-cut entrance gates be customized for Thanisandra villas?',
        answer: 'Yes. We create bespoke modern entrance gates featuring precision CNC laser-cut mild steel panels in geometric, floral, or parametric designs. These can be integrated with warm metallic accents, powder-coated finishes, automated sliding or swing hinges, and composite exterior wood planks.'
      },
      {
        question: 'What safety standards are maintained when installing balcony grills on upper floors in Thanisandra?',
        answer: 'High-rise balcony grill installations strictly follow safety protocols. Our technicians use fall-arrest safety harnesses and internal drop nets. Frames are securely anchored into solid concrete lintels and floor slabs using heavy-duty chemical or mechanical anchor bolts calculated to withstand high-velocity wind loads at elevated floors.'
      },
      {
        question: 'Do you fabricate modern terrace pergolas and sit-out canopies in Thanisandra?',
        answer: 'Yes. We design and build architectural steel terrace pergolas with clean rectangular hollow sections, finished in matte black or charcoal grey polyurethane coatings. Roofs can be fitted with frosted toughened glass, polycarbonate sheets, or adjustable louvers to create elegant weather-protected rooftop sit-outs.'
      },
      {
        question: 'How can I book a site inspection along Thanisandra Main Road or Hennur?',
        answer: 'You can request a visit via our quote form or WhatsApp. Our fabrication supervisor visits your villa or apartment with design catalogues and measurement tools to inspect fixing surfaces, understand your design requirements, and provide a clear, itemized cost estimate.'
      }
    ]
  },
  {
    slug: 'yeshwanthpur',
    name: 'Yeshwanthpur',
    subRegion: 'West Bangalore Industrial & Commercial Gateway',
    description: 'Serving as West Bangalore’s primary commercial trade and light-industrial nexus adjacent to Peenya and Malleshwaram, Yeshwanthpur requires heavy-duty structural steelwork. We fabricate structural warehouse roofing sheds, industrial mezzanine storage floors, motorized factory compound gates, heavy machinery security cages, and loading dock canopies engineered to withstand heavy operational use.',
    highlights: ['Heavy structural steel warehouse framing, PEB sheds, and mezzanine floors', 'Heavy-duty motorized compound sliding gates and industrial barriers', 'Fast mobile welding and structural repairs across Yeshwanthpur & Tumkur Road'],
    commonProjects: ['I-beam structural warehouse roofing and mezzanine storage platforms', 'Heavy industrial sliding compound gates with industrial guide rollers', 'Safety handrails, caged vertical cat ladders, and rolling shutter frames'],
    nearbyLandmarks: ['Yeshwanthpur Railway Station', 'APMC Yard / Gordhandas Market', 'Goraguntepalya Flyover', 'Tumkur Road Industrial Junction'],
    featuredProjectSlug: 'industrial-fabrication-nelamangala-plant',
    faqs: [
      {
        question: 'What industrial and commercial steel fabrication works do you undertake in Yeshwanthpur?',
        answer: 'In the Yeshwanthpur commercial and light-industrial belt near APMC Yard and Tumkur Road, we engineer heavy structural steel warehouse sheds, industrial mezzanine storage floors, motorized heavy-duty compound sliding gates, loading dock canopies, safety catwalks, and vertical caged cat ladders for commercial godowns.'
      },
      {
        question: 'Can you construct structural mezzanine storage floors for warehouses in Yeshwanthpur?',
        answer: 'Yes. We engineer heavy-duty mezzanine floors using certified ISMB beams, ISMC channel sections, and heavy tubular columns with chequered steel plate or deck slab flooring. Every mezzanine is structurally calculated to accommodate your specific dead and live storage load requirements, maximizing vertical cubic space.'
      },
      {
        question: 'What specifications do you use for heavy industrial compound sliding gates in Yeshwanthpur?',
        answer: 'Our industrial gates feature rigid perimeter frames of heavy box sections or structural channels, high-load cast iron or machined steel track rollers, heavy-duty floor tracks anchored into RCC foundation beams, and robust overhead guide rollers designed to endure continuous heavy truck and forklift traffic.'
      },
      {
        question: 'Do you offer urgent mobile welding and repair services in Yeshwanthpur?',
        answer: 'Yes. Our mobile welding crews handle emergency on-site structural repairs, including damaged warehouse column reinforcement, rolling shutter guide channel welding, loading dock bumper frame repairs, and gate track realignments across Yeshwanthpur, Goraguntepalya, and adjacent Tumkur Road corridors.'
      },
      {
        question: 'What is the typical execution schedule for structural sheds and mezzanine platforms in Yeshwanthpur?',
        answer: 'Depending on tonnage and site accessibility, structural steel components are pre-cut, drilled, and primed in our workshop within 7 to 12 working days. On-site bolted and welded erection is then executed systematically to minimize downtime for warehouse and commercial operations.'
      }
    ]
  }
];

export const regionsData: RegionItem[] = [
  {
    slug: 'north-bangalore',
    name: 'North Bangalore',
    direction: 'north',
    tagline: 'Precision Metal Fabrication, Gates & Architectural Steel across North Bangalore',
    metaDescription: 'Specialized fabrication services across North Bangalore including Hebbal, Yelahanka, Jakkur, Thanisandra, Hennur, and RT Nagar. Custom gates, SS railings, sheds & grills.',
    overview: 'North Bangalore represents the city’s foremost growth corridor, stretching from the iconic Hebbal flyover to the International Airport belt. Characterized by expansive gated villa enclaves, luxury high-rises, and major IT tech parks like Manyata, residential and commercial properties in this region demand high-end architectural aesthetics paired with superior structural durability. SAM Fabrication provides complete design, workshop fabrication, and on-site certified installation across North Bangalore with same-day site visits and customized engineering.',
    localities: ['Hebbal', 'Yelahanka', 'Jakkur', 'Thanisandra', 'Hennur', 'RT Nagar'],
    prominentProjects: [
      'Luxury CNC laser-cut entrance gates for Bellary Road and Hebbal independent villas',
      'Grade 304 stainless steel and toughened glass balcony railings in Manyata Tech Park and Jakkur residences',
      'Cantilever polycarbonate car parking sheds for Yelahanka multi-car driveways',
      'Modern open-riser floating metal staircases for Hennur and Thanisandra duplex homes'
    ],
    fabricationDemands: [
      'Architectural harmony with modern villa elevations (matte charcoal and champagne gold accents)',
      'High wind load resistance for rooftop terrace sheds and solar canopies in open northern terrain',
      'Low-maintenance AISI 304 and 316 stainless steel railings that resist monsoon oxidation',
      'Automated motorized sliding and telescoping gates suited for wide suburban villa driveways'
    ],
    localFaqs: [
      {
        question: 'How quickly can your engineering team visit our site in North Bangalore?',
        answer: 'Our central workshop and mobile measurement units are stationed strategically along the Hebbal / Bellary Road corridor. We typically arrange same-day or next-day on-site consultations and measurements across Hebbal, Yelahanka, Thanisandra, and Hennur.'
      },
      {
        question: 'Do you fabricate gates and railings compliant with North Bangalore villa association bylaws?',
        answer: 'Yes. We routinely fabricate for premium gated communities in Jakkur and Yelahanka. We ensure all gate heights, open-area ratios, and balcony railing safety clearances strictly comply with local RWA architectural guidelines and National Building Code standards.'
      },
      {
        question: 'Can you install automated sliding gates on sloping driveways common in North Bangalore?',
        answer: 'Yes. For properties with uneven driveways, we design specialized cantilever trackless sliding gates or inverted-rail guided systems equipped with heavy-duty safety stoppers and Italian automation drives.'
      }
    ]
  },
  {
    slug: 'south-bangalore',
    name: 'South Bangalore',
    direction: 'south',
    tagline: 'Bespoke Residential Metalwork & Structural Fabrication for South Bangalore',
    metaDescription: 'Professional metal fabrication, railings, gates, staircases and sheds in South Bangalore: HSR Layout, Sarjapur Road, Electronic City, JP Nagar, Jayanagar & BTM Layout.',
    overview: 'South Bangalore is celebrated for its lush tree-lined residential avenues, vibrant commercial thoroughfares, and global IT campuses in Electronic City. From heritage independent bungalows in Jayanagar and JP Nagar to modern vertical multi-dwelling apartments in HSR Layout and expansive tech hubs along Sarjapur Road, fabrication requirements in this corridor range from bespoke matte black balcony railings to heavy commercial warehouse steel frameworks. SAM Fabrication delivers precision-crafted solutions engineered for urban longevity.',
    localities: ['HSR Layout', 'Sarjapur Road', 'Electronic City', 'JP Nagar', 'Jayanagar', 'BTM Layout'],
    prominentProjects: [
      'Matte black mild steel minimalist balcony railings across HSR Layout residential sectors',
      'Custom glass-roof terrace pergolas and barbecue gazebos in Jayanagar and JP Nagar penthouses',
      'Heavy structural steel PEB warehouse frameworks and crane gantries in Electronic City industrial zones',
      'Space-saving spiral and zigzag steel staircases for compact South Bangalore urban plots'
    ],
    fabricationDemands: [
      'Fascia-mounted balcony railings that preserve 100% of usable floor space on compact balconies',
      'Anti-corrosion powder coating suited for sheltered garden microclimates and heavy rain runoff',
      'Certified commercial fire escape towers and industrial emergency egress staircases',
      'CNC decorative acoustic screens and room dividers for contemporary South Bangalore work-from-home spaces'
    ],
    localFaqs: [
      {
        question: 'Do you handle both residential railings and industrial steel structures in South Bangalore?',
        answer: 'Yes. Our fabrication division has dedicated residential crews for high-finish balcony railings and gates in HSR and Jayanagar, as well as heavy structural crews handling PEB sheds, industrial mezzanines, and factory frameworks in Electronic City.'
      },
      {
        question: 'Can you fabricate space-saving gates for narrow road plots in BTM or JP Nagar?',
        answer: 'Absolutely. For properties where swing gates would obstruct the driveway or public street, we build bi-folding accordion gates, telescopic multi-leaf sliding gates, and vertical lift gates.'
      },
      {
        question: 'What anti-rust warranty do you offer on exterior metalwork in South Bangalore?',
        answer: 'All our mild steel exterior fabrication undergoes multi-stage surface preparation, zinc phosphate anti-corrosion primer application, and high-build polyurethane or architectural powder coating, backed by our 3-year finish and 10-year structural warranty.'
      }
    ]
  },
  {
    slug: 'east-bangalore',
    name: 'East Bangalore',
    direction: 'east',
    tagline: 'High-End CNC Gates, SS Glass Railings & Canopies in East Bangalore',
    metaDescription: 'East Bangalore fabrication specialists serving Whitefield, KR Puram, Marathahalli, Brookefield, and Mahadevapura. Luxury gates, designer railings, pergolas & steel sheds.',
    overview: 'East Bangalore is the technological epicenter and premier villa destination of Bangalore, home to international tech parks, sprawling gated townships, and corporate headquarters across Whitefield, KR Puram, Marathahalli, Brookefield, and Mahadevapura. Architecture in this corridor demands modern minimalism, seamless glass and steel integration, and CNC precision detailing. SAM Fabrication specializes in executing architect-grade fabrication projects with tight tolerances, exceptional finishing, and turn-key reliability.',
    localities: ['Whitefield', 'KR Puram', 'Marathahalli', 'Brookefield', 'Mahadevapura'],
    prominentProjects: [
      'Luxury CNC laser-cut entrance gates with wood-look metal inserts in Whitefield gated communities',
      'AISI 316 Grade stainless steel and 12mm toughened glass balustrades for Brookefield villas',
      'Corporate drop-off entrance canopies with spider-glazing fittings near ITPL and Marathahalli',
      'Multi-vehicle cantilever carports with rainwater management for luxury residences'
    ],
    fabricationDemands: [
      'Zero-weld-blemish satin finishes on high-visibility interior and exterior handrails',
      'High-speed automated sliding gates integrated with smart home access systems',
      'Weather-resistant steel pergolas combining timber slats and laminated solar-control glass',
      'Precision architectural privacy screens that mask service ducts while enhancing facade geometry'
    ],
    localFaqs: [
      {
        question: 'Do you work directly with architects and interior designers in East Bangalore?',
        answer: 'Yes, we frequently partner with leading Bangalore architects and design studios in Whitefield and Indiranagar. We translate CAD drawings into workshop fabrication details and provide material mockups for client approval.'
      },
      {
        question: 'What stainless steel grade do you recommend for exterior balconies in Whitefield?',
        answer: 'We exclusively recommend authentic AISI 304 Grade for standard sheltered balconies and AISI 316 Marine Grade for exposed rooftop or poolside areas to guarantee zero corrosion and pristine appearance.'
      },
      {
        question: 'How do you prevent laser-cut gate panels from vibrating or rattling in strong winds?',
        answer: 'All our CNC laser-cut decorative panels are cut from heavy 3mm or 4mm sheet, welded to continuous structural perimeter frames with intermediate stiffeners and isolated with vibration-dampening EPDM gaskets.'
      }
    ]
  },
  {
    slug: 'west-bangalore',
    name: 'West Bangalore',
    direction: 'west',
    tagline: 'Heavy Structural Steel, Industrial Sheds & Fabrication for West Bangalore',
    metaDescription: 'Heavy-duty fabrication, PEB warehouse sheds, industrial structures, gates and grills in West Bangalore: Peenya Industrial Area, Yeshwanthpur & Rajajinagar.',
    overview: 'West Bangalore is the industrial and trading heart of Karnataka, anchored by Peenya Industrial Area—one of South Asia’s largest engineering hubs—alongside Yeshwanthpur logistics terminals and established commercial centers in Rajajinagar. Fabrication requirements in this sector demand robust load-bearing structural steel framing, heavy industrial sheds, mezzanine platforms, and secure perimeter protection. SAM Fabrication provides certified welding, heavy steel girder erection, and turnkey fabrication built for rigorous continuous operation.',
    localities: ['Peenya', 'Yeshwanthpur', 'Rajajinagar'],
    prominentProjects: [
      'Heavy structural steel PEB warehouse and factory sheds in Peenya Industrial Area Phases 1-4',
      'Heavy-capacity industrial mezzanine storage platforms and structural racking frameworks in Yeshwanthpur',
      'Robust security window grills and heavy sliding gates for Rajajinagar residential layouts',
      'Commercial fire escape staircases and external maintenance platforms compliant with safety norms'
    ],
    fabricationDemands: [
      'Heavy structural steel sections (ISMB, ISMC, ISA) adhering to IS 2062 Grade A and B standards',
      'High-gauge galvanized and zinc-rich epoxy coatings resistant to chemical and industrial atmospheric wear',
      'Clear-span open web steel roof trusses with integrated gantry crane girder support',
      'Heavy-duty industrial rolling and sliding gates designed for frequent heavy-vehicle traffic'
    ],
    localFaqs: [
      {
        question: 'Can you handle large-span industrial shed fabrication and erection in Peenya?',
        answer: 'Yes. We fabricate heavy structural steel trusses and portal frames up to 30-meter clear spans with crane rails. We coordinate mobile crane rigging and certified structural welding for fast, compliant execution.'
      },
      {
        question: 'Do you provide structural calculation certificates and mill test reports for industrial jobs?',
        answer: 'Yes. For all commercial and industrial structural projects in West Bangalore, we provide certified Mill Test Certificates (MTC) for all steel batches and can coordinate third-party non-destructive weld testing (NDT).'
      },
      {
        question: 'Can you perform live factory retrofitting without halting our manufacturing line in Yeshwanthpur?',
        answer: 'Yes. We pre-fabricate all structural elements in our off-site workshop, conducting hot welding off-site and performing rapid bolt-up assembly during scheduled night shifts or weekend plant shutdowns.'
      }
    ]
  }
];

export const advantagesData = [
  {
    id: 'mat',
    title: 'High Quality Materials',
    description: 'We use premium MS and stainless steel for long-lasting strength and durability.',
    icon: 'ShieldCheck'
  },
  {
    id: 'team',
    title: 'Skilled & Experienced Team',
    description: 'Our team has years of experience in welding, fabrication and installation.',
    icon: 'Wrench'
  },
  {
    id: 'custom',
    title: 'Customized Solutions',
    description: 'Every project is designed as per your space, style and functional requirements.',
    icon: 'Ruler'
  },
  {
    id: 'time',
    title: 'Timely Delivery',
    description: 'We plan and execute projects within the committed timeline without compromising quality.',
    icon: 'Clock'
  },
  {
    id: 'safe',
    title: 'Strong & Safe Structures',
    description: 'Our fabrication ensures safety, stability and compliance with industry standards.',
    icon: 'Layers'
  },
  {
    id: 'modern',
    title: 'Modern Designs',
    description: 'We combine functionality with modern and elegant designs to match your property.',
    icon: 'Lightbulb'
  },
  {
    id: 'price',
    title: 'Competitive Pricing',
    description: 'High-quality work at fair and transparent pricing with no hidden costs.',
    icon: 'Tag'
  },
  {
    id: 'support',
    title: 'End-to-End Support',
    description: 'From design to installation, we provide complete support even after project completion.',
    icon: 'Headphones'
  }
];

export const processStepsData = [
  {
    step: '1',
    title: '1. Consultation',
    description: 'Understand your needs and space requirements.',
    icon: 'MessageSquare'
  },
  {
    step: '2',
    title: '2. Design & Planning',
    description: 'Create customized design with material suggestions.',
    icon: 'FileText'
  },
  {
    step: '3',
    title: '3. Fabrication',
    description: 'High-precision fabrication using premium materials.',
    icon: 'Cog'
  },
  {
    step: '4',
    title: '4. Installation',
    description: 'Professional and safe installation at your site.',
    icon: 'Wrench'
  },
  {
    step: '5',
    title: '5. Project Handover',
    description: 'Final inspection and delivery with complete satisfaction.',
    icon: 'CheckCircle'
  }
];

export const faqsData = [
  {
    question: 'What types of projects do you handle?',
    answer: 'We handle residential, commercial, and industrial fabrication projects including main gates, window grills, stainless steel and mild steel railings, metal staircases, car parking sheds, and structural steel works across Bangalore.'
  },
  {
    question: 'Do you provide custom designs?',
    answer: 'Yes! Every project is custom engineered to match your property dimensions, architectural style, and functional preferences. We also collaborate directly with architects and interior designers.'
  },
  {
    question: 'What materials do you use?',
    answer: 'We utilize certified structural Mild Steel (IS 2062 Grade), genuine AISI 304 and 316 Grade Stainless Steel, toughened safety glass, and heavy-duty industrial coatings.'
  },
  {
    question: 'How long does a project take?',
    answer: 'Project durations range between 5 to 14 working days depending on complexity, size, and custom laser-cut detailing. We provide an exact project milestone schedule before commencing work.'
  },
  {
    question: 'Do you provide installation service?',
    answer: 'Yes, full turnkey service is included: on-site measurements, workshop precision fabrication, transportation, and on-site welding installation by our skilled technicians.'
  }
];

export const clientReviewsData = [
  {
    id: 'rev-1',
    name: 'Rohit Sharma',
    role: 'Home Owner, Hebbal, Bangalore',
    rating: 5,
    text: 'SAM Fabrication did an excellent job with our main gate and balcony railings. The quality, finishing and professionalism were outstanding. Highly recommended!',
    image: '/images/feedback-balcony.webp'
  },
  {
    id: 'rev-2',
    name: 'Anand Kulkarni',
    role: 'Architect & Builder, Whitefield',
    rating: 5,
    text: 'We partner with SAM Fabrication for our residential villa projects. Their attention to detail on CNC laser cut gates and SS glass railings is top notch. Delivery is always on time.',
    image: '/images/project-custom-fab.webp'
  },
  {
    id: 'rev-3',
    name: 'Praveen Gowda',
    role: 'Commercial Property Manager, Manyata',
    rating: 5,
    text: 'Outstanding cantilever car parking shed built for our office campus. Clean welding, sturdy design, and prompt completion within 10 days.',
    image: '/images/project-car-shed.webp'
  },
  {
    id: 'rev-4',
    name: 'Kiran Deshmukh',
    role: 'Villa Owner, Dasarahalli Main Road',
    rating: 5,
    text: 'Needed urgent on-site home welding repair for a heavy sliding gate roller and window safety grills. Their technician arrived from Dasarahalli within 2 hours and finished the weld neatly.',
    image: '/images/project-sliding-gate.webp'
  },
  {
    id: 'rev-5',
    name: 'Deepak Nair',
    role: 'Factory Operations Head, Peenya Industrial Area',
    rating: 5,
    text: 'Reliable heavy structural fabrication partner. Supplied ISMB mezzanine trusses and loading bay canopies per drawing with solid weld integrity and transparent per-kg billing.',
    image: '/images/project-ms-structure.webp'
  }
];

export interface FabricationRateItem {
  category: string;
  serviceSlug: string;
  unitBasis: string;
  indicativeRate: string;
  materialGrade: string;
  includes: string;
}

export const fabricationRatesData: FabricationRateItem[] = [
  {
    category: 'MS Safety Window Grills',
    serviceSlug: 'window-grills',
    unitBasis: 'Per Sq. Ft. / Per Kg',
    indicativeRate: '₹180 – ₹320 / sq. ft. (or ₹110 – ₹145 / kg)',
    materialGrade: '10mm / 12mm Solid Square Bar (IS 2062)',
    includes: 'Fabrication, red-oxide / zinc primer, enamel paint & wall grouting'
  },
  {
    category: 'MS Main Gate & Sliding Gates',
    serviceSlug: 'ms-gates',
    unitBasis: 'Per Sq. Ft. / Per Kg',
    indicativeRate: '₹350 – ₹680 / sq. ft. (or ₹115 – ₹155 / kg)',
    materialGrade: 'Heavy 14/16 Gauge TATA / Jindal RHS Pipes',
    includes: 'Heavy bearings/track rollers, epoxy zinc primer, PU coat & site erection'
  },
  {
    category: 'CNC Laser-Cut Designer Gate',
    serviceSlug: 'gate-fabrication',
    unitBasis: 'Per Sq. Ft.',
    indicativeRate: '₹650 – ₹1,250 / sq. ft.',
    materialGrade: '3.0mm CRCA Laser Sheet + Heavy MS Frame',
    includes: 'Custom AutoCAD pattern cutting, brass/gold accents & powder/PU finish'
  },
  {
    category: 'SS 304 Balcony & Stair Railings',
    serviceSlug: 'ss-railings',
    unitBasis: 'Per Running Ft.',
    indicativeRate: '₹750 – ₹1,450 / rft (₹1,650+ with Toughened Glass)',
    materialGrade: 'Genuine AISI 304 Jindal Stainless Steel',
    includes: 'Argon TIG welding, buff mirror/brushed satin polish & core cutting'
  },
  {
    category: 'MS Balcony & Staircase Railings',
    serviceSlug: 'ms-railings',
    unitBasis: 'Per Running Ft.',
    indicativeRate: '₹420 – ₹780 / rft',
    materialGrade: 'IS 2062 Hollow Sections + Flat Bars',
    includes: 'Anti-rust epoxy primer, matte black finish & anchor bolt fixing'
  },
  {
    category: 'Car Parking & Roofing Sheds',
    serviceSlug: 'car-parking-sheds',
    unitBasis: 'Per Sq. Ft.',
    indicativeRate: '₹220 – ₹480 / sq. ft.',
    materialGrade: 'Tata Bluescope Sheet / UV Polycarbonate + MS Truss',
    includes: 'Column foundation grouting, gutters & high-wind fastener sealing'
  },
  {
    category: 'Heavy Structural Steel & PEB Works',
    serviceSlug: 'structural-steel-fabrication',
    unitBasis: 'Per Kg / Per Ton',
    indicativeRate: '₹95 – ₹135 / kg (Labour + Supply) | ₹28 – ₹42 / kg (Job Work)',
    materialGrade: 'ISMB Beams, Channels, E250 / E350 Plates',
    includes: 'Shop cutting, MIG structural welding, epoxy coating & crane erection'
  },
  {
    category: 'On-Site Home Welding Visit',
    serviceSlug: 'custom-welding-fabrication',
    unitBasis: 'Per Visit / Job Quote',
    indicativeRate: 'Starts ₹600 – ₹1,500+ (Inspection & Small Repairs)',
    materialGrade: 'Portable Inverter Arc, TIG, Aluminium & Gas Setup',
    includes: 'Gate hinge repairs, grill fixes, lock welding within 16 km Bangalore zone'
  }
];

export const weldingCapabilitiesData = [
  {
    title: 'Welding Home Service (16+ km Van Dispatch)',
    badge: 'Same-Day Doorstep Service',
    description: 'On-site residential and commercial welding across Bangalore. Broken gate hinges, sliding track alignment, window grill reinforcement, shutter latches, and balcony railing repairs right at your doorstep.',
    highlights: ['Dasarahalli & Hebbal dispatch in 60–90 mins', 'Portable generator-ready inverter units', 'Clean site sweep & touch-up primer included']
  },
  {
    title: 'Aluminium Welding (AC/DC TIG & MIG)',
    badge: 'Specialized Non-Ferrous Shop',
    description: 'Precision aluminium fabrication and crack repair without burn-through or porosity. Ideal for aluminium door frames, industrial ladders, architectural louvers, castings, and light trusses.',
    highlights: ['Pure argon shielded AC-TIG welding', '100% crack-free structural beads', 'Cast aluminium & 6061/6063 extrusion repairs']
  },
  {
    title: 'Gas Welding & Oxy-Acetylene Brazing',
    badge: 'Workshop & Field Ready',
    description: 'High-precision oxy-acetylene gas welding, bronze/brass brazing, copper jointing, cast iron pre-heating repairs, and heavy steel flame cutting for parts incompatible with electric arc.',
    highlights: ['Copper, brass & galvanized pipe brazing', 'Zero electrical shock hazard on damp sites', 'Controlled flame straightening for bent frames']
  },
  {
    title: 'Fiber Laser & Micro-TIG Welding',
    badge: 'Architectural Finish',
    description: 'Ultra-narrow heat-affected zone joining for stainless steel 304/316 railings, thin architectural sheet panels, gold/brass logo inlays, and mirror-finish furniture frames.',
    highlights: ['Minimal grinding required post-weld', '0.1mm CNC fiber laser sheet compatibility', 'Zero warping on thin-gauge SS sheets']
  }
];

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export const homeFaqsData: HomeFaqItem[] = [
  {
    question: 'What makes SAM Fabrication one of the best fabrication works in Bangalore?',
    answer: 'SAM Fabrication combines over 12+ years of fabrication experience, certified welders, certified steel materials (APL Apollo, Jindal, Tata Steel), transparent per-kg and per-sq.ft rate cards, and on-time site installation across North, East, South, and Central Bengaluru.'
  },
  {
    question: 'What metal fabrication services can I enquire about in Bangalore?',
    answer: 'SAM Fabrication lists services for gates, window grills, railings, staircases, sheds, structural steel fabrication, and welding. Contact the business with your project details to confirm the suitable service, materials, scope, and quote.'
  },
  {
    question: 'How can I enquire about welding or fabrication work in Bangalore?',
    answer: 'Review the relevant service page and contact SAM Fabrication with your location, measurements, preferred materials, and a description or drawing of the work. The business can confirm availability, project specifications, and pricing for your requirements.'
  },
  {
    question: 'What is the fabrication work rate per kg and per sq.ft in Bangalore?',
    answer: 'In Bangalore, MS (Mild Steel) structural fabrication generally ranges between ₹95 to ₹135 per kg for supply, fabrication, and basic primer. For architectural metalwork measured per square foot, MS window safety grills typically cost ₹180 to ₹320/sq.ft, custom MS gates cost ₹350 to ₹680/sq.ft, SS 304 railings range between ₹750 to ₹1,450/running ft, and car parking sheds cost ₹220 to ₹480/sq.ft depending on design complexity, material gauge, and surface finish.'
  },
  {
    question: 'Do you provide on-site mobile welding and doorstep fabrication repairs across Bangalore?',
    answer: 'Yes, SAM Fabrication provides prompt on-site mobile welding and repairs across Bangalore. Operating from our Dasarahalli Main Road workshop near Hebbal, our mobile welding van is equipped with portable inverter arc welding, TIG welding, and gas torches for gate hinge repairs, sliding track alignment, grill reinforcement, and emergency metal fixes within a 16–25 km radius.'
  },
  {
    question: 'What steel brands and material grades do you use for fabrication?',
    answer: 'We exclusively fabricate with certified structural steel from leading Indian mills including Tata Steel, JSW Steel, Jindal, and APL Apollo hollow rectangular and square pipes (IS 2062). For stainless steel railings and architectural fixtures, we use verified AISI 304 and 316 grade rustproof stainless steel.'
  },
  {
    question: 'How do I get a free site measurement and quote for my fabrication project?',
    answer: 'You can call us directly at +91 94533 44824 or submit your project details through our online quote form. Our fabrication engineer visits your site in Bangalore, takes accurate laser measurements, discusses design preferences, and provides a transparent, itemized quotation with zero hidden charges.'
  },
  {
    question: 'What is the typical completion and installation timeline for fabrication works?',
    answer: 'Standard residential metalworks like window safety grills, balcony railings, and single entrance gates typically take 3 to 7 working days from measurement to on-site installation. Custom laser-cut CNC gates, complex staircases, and terrace car parking sheds take 7 to 14 working days.'
  },
  {
    question: 'How do you protect fabricated metal and steel from rusting in Bangalore weather?',
    answer: 'All our mild steel products undergo thorough mechanical slag and rust removal, followed by an industrial dual-coat anti-corrosive zinc-chromate or red-oxide primer. We then apply either architectural electrostatic powder coating or dual coats of high-gloss polyurethane (PU) / synthetic enamel paint to protect against Bangalore monsoon humidity.'
  }
];


export interface RelatedServiceClusterItem {
  slug: string;
  tag: string;
  relationship: string;
}

export const relatedServiceClusters: Record<string, RelatedServiceClusterItem[]> = {
  'gate-fabrication': [
    {
      slug: 'ms-gates',
      tag: 'Material Alternative',
      relationship: 'Heavy mild steel swing and sliding gates designed for high durability and cost optimization.'
    },
    {
      slug: 'window-grills',
      tag: 'Perimeter Security Pairing',
      relationship: 'Coordinate gate metalwork with matching residential window safety grills for consistent home exterior styling.'
    },
    {
      slug: 'canopy-fabrication',
      tag: 'Entryway Weather Protection',
      relationship: 'Cover entrance doorways and gate access points with custom metal and polycarbonate weather canopies.'
    },
    {
      slug: 'custom-welding-fabrication',
      tag: 'On-Site Installation & Welds',
      relationship: 'Doorstep mobile welding vans for precision hinge alignment, sliding track embedding, and bracket welding.'
    }
  ],
  'window-grills': [
    {
      slug: 'ms-railings',
      tag: 'Balcony & Parapet Match',
      relationship: 'Match window grill patterns with matching mild steel safety railings on balconies, terraces, and parapets.'
    },
    {
      slug: 'ss-railings',
      tag: 'Corrosion-Proof Balconies',
      relationship: 'Marine-grade SS 304 railings with toughened glass for exposed balconies while using MS grills for windows.'
    },
    {
      slug: 'gate-fabrication',
      tag: 'Full Residential Security',
      relationship: 'Combine window safety grills with bespoke entrance gates for comprehensive home perimeter security.'
    },
    {
      slug: 'custom-welding-fabrication',
      tag: 'Doorstep Fixing & Repair',
      relationship: 'On-site mobile welding service for grill anchoring, modification, and security bracket reinforcement.'
    }
  ],
  'ms-gates': [
    {
      slug: 'gate-fabrication',
      tag: 'Designer Gate Alternative',
      relationship: 'Explore CNC laser-cut sheet designs, modern wood-grain composite inserts, and motorized sliding gates.'
    },
    {
      slug: 'ms-railings',
      tag: 'Matching Compound Railings',
      relationship: 'Extend matching MS section bars and powder-coated geometric patterns across perimeter boundary walls.'
    },
    {
      slug: 'window-grills',
      tag: 'Residential Security Cluster',
      relationship: 'Complete residential property protection with heavy-duty mild steel window grills and safety bars.'
    },
    {
      slug: 'custom-welding-fabrication',
      tag: 'On-Site Track Welding',
      relationship: 'Heavy MS sliding gates require on-site bottom channel embedding, stop-block welding, and precision roller alignment.'
    }
  ],
  'ss-railings': [
    {
      slug: 'ms-railings',
      tag: 'Budget-Friendly Alternative',
      relationship: 'Compare powder-coated mild steel railings for cost-effective internal stairs and shaded balconies.'
    },
    {
      slug: 'staircase-fabrication',
      tag: 'Staircase Handrail Pairing',
      relationship: 'Fit continuous SS 304 handrails and toughened glass balustrades directly onto metal spiral and floating stairs.'
    },
    {
      slug: 'canopy-fabrication',
      tag: 'Terrace & Balcony Shelter',
      relationship: 'Complement upper-floor glass railings with cantilevered glass or polycarbonate terrace rain canopies.'
    },
    {
      slug: 'window-grills',
      tag: 'High-Rise Balcony Safety',
      relationship: 'Combine lower SS glass railings with upper child-safety window grills for comprehensive balcony enclosure.'
    }
  ],
  'ms-railings': [
    {
      slug: 'ss-railings',
      tag: 'Stainless Steel Alternative',
      relationship: 'Evaluate rust-resistant Grade 304 stainless steel with toughened glass for open terrace and coastal exposures.'
    },
    {
      slug: 'staircase-fabrication',
      tag: 'Stairway Balustrades',
      relationship: 'Fabricate bespoke MS balusters, laser-cut side panels, and handrails tailored to internal metal staircases.'
    },
    {
      slug: 'window-grills',
      tag: 'Matching Safety Grills',
      relationship: 'Maintain unified exterior aesthetics by pairing MS balcony railings with matching window grill profiles.'
    },
    {
      slug: 'ms-gates',
      tag: 'Boundary Wall Continuity',
      relationship: 'Connect compound wall railings with matching MS driveway gates for a continuous architectural perimeter.'
    }
  ],
  'staircase-fabrication': [
    {
      slug: 'ss-railings',
      tag: 'Essential Safety Handrails',
      relationship: 'Ensure building code safety compliance with continuous SS 304 handrails and toughened glass balustrades.'
    },
    {
      slug: 'ms-railings',
      tag: 'Architectural MS Railings',
      relationship: 'Incorporate modern vertical slat or geometric laser-cut mild steel safety panels along staircase risers.'
    },
    {
      slug: 'structural-steel-fabrication',
      tag: 'Heavy Stringer Framework',
      relationship: 'Heavy industrial stairs and mezzanine access require IS 2062 I-beam and C-channel structural frameworks.'
    },
    {
      slug: 'metal-sheds',
      tag: 'Terrace Headroom Enclosure',
      relationship: 'Protect rooftop staircase cutouts and headroom with custom weatherproof terrace metal sheds and doors.'
    }
  ],
  'car-parking-sheds': [
    {
      slug: 'metal-sheds',
      tag: 'Heavy Roofing Alternative',
      relationship: 'Compare corrugated metal sheet or insulated sandwich PUF panel roofing for larger multi-vehicle yards.'
    },
    {
      slug: 'canopy-fabrication',
      tag: 'Pedestrian Walkway Canopies',
      relationship: 'Extend vehicle shelter protection with matching cantilevered entrance and walkway rain canopies.'
    },
    {
      slug: 'gate-fabrication',
      tag: 'Driveway Clearance Match',
      relationship: 'Coordinate parking shed post positions and clearance heights with automated driveway sliding gates.'
    },
    {
      slug: 'custom-welding-fabrication',
      tag: 'On-Site Frame Welding',
      relationship: 'Our mobile welders execute foundation base plate anchoring, truss welding, and gutter fitting on site.'
    }
  ],
  'metal-sheds': [
    {
      slug: 'car-parking-sheds',
      tag: 'Cantilever Vehicle Carports',
      relationship: 'Opt for sleek cantilever curved carports with UV polycarbonate sheets for tight residential parking zones.'
    },
    {
      slug: 'structural-steel-fabrication',
      tag: 'Heavy Industrial Framing',
      relationship: 'Large warehouse sheds utilize engineered PEB portal frames, heavy steel columns, and roof purlins.'
    },
    {
      slug: 'canopy-fabrication',
      tag: 'Architectural Terrace Pergolas',
      relationship: 'For recreational terrace areas, explore modern aesthetic pergolas with tempered glass or louvers.'
    },
    {
      slug: 'staircase-fabrication',
      tag: 'Rooftop Shed Access',
      relationship: 'Add external spiral or straight-flight steel staircases for convenient, safe maintenance access to rooftop sheds.'
    }
  ],
  'structural-steel-fabrication': [
    {
      slug: 'metal-sheds',
      tag: 'Industrial Shed Enclosures',
      relationship: 'Heavy I-beam columns and rafters form the primary skeleton for industrial factory sheds and warehouse roofs.'
    },
    {
      slug: 'staircase-fabrication',
      tag: 'Mezzanine & Fire Exit Stairs',
      relationship: 'Fabricate heavy-duty industrial stairs, checkered plate treads, and emergency fire escapes for steel structures.'
    },
    {
      slug: 'custom-welding-fabrication',
      tag: 'Certified Field Welding',
      relationship: 'High-strength structural connections require certified multi-pass MIG/SMAW welding and on-site fit-up inspections.'
    },
    {
      slug: 'event-fabrication',
      tag: 'Heavy Truss & Stage Rigging',
      relationship: 'Custom structural box trusses and modular frames for temporary venues, commercial exhibition halls, and stages.'
    }
  ],
  'canopy-fabrication': [
    {
      slug: 'car-parking-sheds',
      tag: 'Vehicle Shelter Synergy',
      relationship: 'Pair front entrance canopies with matching driveway car parking sheds for cohesive building exteriors.'
    },
    {
      slug: 'ss-railings',
      tag: 'Terrace & Balcony Pairings',
      relationship: 'Install glass terrace canopies overhead with matching SS 304 frameless glass balustrades below.'
    },
    {
      slug: 'metal-sheds',
      tag: 'Full Weather Enclosure',
      relationship: 'When complete weather enclosure is needed, consider full metal terrace sheds with rainwater drainage gutters.'
    },
    {
      slug: 'gate-fabrication',
      tag: 'Front Entryway Framing',
      relationship: 'Crown residential main gates and security cabins with weather-resistant steel and polycarbonate canopies.'
    }
  ],
  'custom-welding-fabrication': [
    {
      slug: 'gate-fabrication',
      tag: 'Gate Repairs & Track Welds',
      relationship: 'Mobile welding vans repair cracked gate hinges, misaligned tracks, latch plates, and automation brackets on site.'
    },
    {
      slug: 'window-grills',
      tag: 'Grill Modification & Anchoring',
      relationship: 'On-site welding for window grill modifications, security bracket strengthening, and AC outdoor unit cages.'
    },
    {
      slug: 'structural-steel-fabrication',
      tag: 'On-Site Steel Erection',
      relationship: 'Qualified field welders provide certified SMAW and MIG welding for structural columns, beams, and gusset plates.'
    },
    {
      slug: 'staircase-fabrication',
      tag: 'Staircase Assembly & Repair',
      relationship: 'Doorstep welding service for fixing wobbly staircase handrails, replacing corroded steps, and stringer reinforcement.'
    }
  ],
  'event-fabrication': [
    {
      slug: 'structural-steel-fabrication',
      tag: 'Heavy Truss Rigging',
      relationship: 'Utilize engineered structural steel tubing and box trusses for high-capacity lighting rigs and festival stages.'
    },
    {
      slug: 'custom-welding-fabrication',
      tag: 'Rapid On-Site Welding',
      relationship: 'Fast on-demand welding teams for venue modifications, emergency truss repairs, and quick-turnaround setups.'
    },
    {
      slug: 'ms-railings',
      tag: 'Crowd Barriers & Stage Rails',
      relationship: 'Fabricate modular queue management barricades, VIP enclosure railings, and stage safety handrails.'
    },
    {
      slug: 'canopy-fabrication',
      tag: 'Weatherproof Event Canopies',
      relationship: 'Temporary and semi-permanent weatherproof entrance canopies, registration arches, and sponsor booths.'
    }
  ]
};
