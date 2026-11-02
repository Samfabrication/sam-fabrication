import { ServiceItem, ProjectItem, BlogPostItem, LocationItem, RegionItem } from '../types';

export const siteConfig = {
  name: 'SAM Fabrication Engineering Work',
  shortName: 'SAM Fabrication',
  tagline: 'Stronger Spaces Built with Precision',
  domain: 'https://samfabrication.in',
  phone: '+91 98765 43210',
  phoneClean: '+919876543210',
  whatsapp: '+91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'info@samfabrication.in',
  address: 'Hebbal / Outer Ring Road Corridor, Bangalore, Karnataka 560024',
  workingHours: 'Mon - Sat: 9:00 AM - 8:00 PM',
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
    shortDescription: 'Sliding gates, folding gates, and modern laser-cut designer steel gates built for security and architectural beauty.',
    fullDescription: 'At SAM Fabrication Engineering Work, we design, fabricate, and install custom entrance gates across Bangalore. Whether you need a heavy-duty motorized sliding gate for a commercial premises or a contemporary laser-cut CNC residential main gate with brass accents, our engineering team ensures precision alignment, smooth track movement, and multi-year rust protection.',
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
      }
    ]
  },
  {
    id: 'window-grills',
    slug: 'window-grills',
    title: 'Window Grills',
    shortDescription: 'Safety window grills, designer balcony grills, and custom security solutions combining robust protection with sleek aesthetics.',
    fullDescription: 'Protect your home without sacrificing ventilation or natural light. We fabricate modern window security grills, box grills with integrated planter shelves, and French window grills engineered to meet Bangalore apartment society guidelines while ensuring child safety and intrusion deterrence.',
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
      }
    ]
  },
  {
    id: 'ms-gates',
    slug: 'ms-gates',
    title: 'MS Gates',
    shortDescription: 'Heavy-duty mild steel (MS) gates offering unbeatable structural strength, custom aesthetic patterns, and maximum value.',
    fullDescription: 'Mild Steel (MS) is the premier choice for homeowners and commercial establishments seeking high-impact resistance, versatile design customization, and budget-friendly fabrication. We fabricate high-tensile MS sliding, swing, and double-leaf gates treated with industrial-grade anti-rust primers.',
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
      }
    ]
  },
  {
    id: 'ss-railings',
    slug: 'ss-railings',
    title: 'SS Railings',
    shortDescription: 'AISI 304 Grade stainless steel railings for balconies, stairs, and terraces with mirror or satin finish and glass combinations.',
    fullDescription: 'Add modern luxury and lifetime rust immunity to your property. SAM Fabrication specializes in architectural Grade 304 Stainless Steel railings, featuring precision TIG welded joints, invisible fastenings, and combinations with 10mm/12mm toughened safety glass for balconies, staircases, and terrace parapets.',
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
      }
    ]
  },
  {
    id: 'ms-railings',
    slug: 'ms-railings',
    title: 'MS Railings',
    shortDescription: 'Modern minimalist mild steel railings with architectural matte black powder coating and geometric laser-cut patterns.',
    fullDescription: 'Achieve the trending contemporary industrial aesthetic with our custom mild steel (MS) railing systems. Ideal for modern villas, duplex apartments, and commercial offices, our MS railings feature clean horizontal geometric slats, slender vertical balusters, and durable thermoset powder coatings.',
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
      }
    ]
  },
  {
    id: 'staircase-fabrication',
    slug: 'staircase-fabrication',
    title: 'Staircase Fabrication',
    shortDescription: 'Space-saving spiral stairs, modern floating mono-stringer staircases, and heavy-duty external fire escapes.',
    fullDescription: 'From sculptural indoor floating metal stairs with integrated step lighting brackets to heavy-duty industrial external emergency stairs, SAM Fabrication engineers stairs that maximize square footage while adhering to rigorous structural load-bearing standards.',
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
      }
    ]
  },
  {
    id: 'car-parking-sheds',
    slug: 'car-parking-sheds',
    title: 'Car Parking Sheds',
    shortDescription: 'Weatherproof polycarbonate, tensile fabric, and metal carports for residential villas, apartments, and corporate complexes.',
    fullDescription: 'Protect your vehicles from Bangalore blistering afternoon heat, seasonal hail, and heavy monsoon downpours. We build custom cantilever and multi-pillar car parking sheds featuring UV-resistant polycarbonate sheets, architectural tensile fabrics, or insulated metal roofing.',
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
      }
    ]
  },
  {
    id: 'metal-sheds',
    slug: 'metal-sheds',
    title: 'Metal Sheds',
    shortDescription: 'Heavy-duty steel rooftop sheds, weatherproof garden storage sheds, and industrial equipment shelters.',
    fullDescription: 'Transform rooftop terraces into shaded, functional living or storage areas. Our metal sheds reduce top-floor building temperatures by shielding the slab from direct solar radiation, while providing waterproof utility spaces for gymnasiums, solar panel mounts, or storage.',
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
      }
    ]
  },
  {
    id: 'structural-steel-fabrication',
    slug: 'structural-steel-fabrication',
    title: 'Structural Steel Fabrication',
    shortDescription: 'Heavy industrial warehouse framing, pre-engineered steel buildings (PEB), factory trusses, and mezzanine floors.',
    fullDescription: 'For industrial and commercial builders across Bangalore, Peenya, Bidadi, and Nelamangala, SAM Fabrication delivers heavy structural steel fabrication. We manufacture I-beam columns, portal frames, mezzanine storage floors, and heavy equipment skids certified for high load capacity.',
    category: 'structural',
    image: '/images/project-ms-structure.webp',
    imageAlt: 'Industrial MS structural steel framework for commercial warehouse in Bidadi Bangalore',
    features: [
      'Certified structural welding adhering to IS 800 fabrication codes',
      'Complete pre-engineered building (PEB) detailing and on-site erection',
      'Industrial mezzanine floor fabrication to double warehouse storage space',
      'Ultrasonic weld testing and rigorous quality inspection protocols'
    ],
    materials: ['IS 2062 Grade E250 / E350 Steel', 'Heavy I-Beams (ISMB)', 'Angle & Channel Trusses'],
    specs: [
      { label: 'Welding Standards', value: 'SMAW & GMAW / MIG certified procedures' },
      { label: 'Structural Safety', value: 'Engineered for seismic Zone II & wind loads' }
    ],
    faqs: [
      {
        question: 'Do you undertake turnkey industrial PEB warehouse construction?',
        answer: 'Yes, we provide end-to-end structural steel fabrication from shop drawings and column fabrication to crane girder installation and roof cladding.'
      }
    ]
  },
  {
    id: 'canopy-fabrication',
    slug: 'canopy-fabrication',
    title: 'Canopy Fabrication',
    shortDescription: 'Architectural metal entrance canopies, cantilever glass porticos, and designer terrace pergolas.',
    fullDescription: 'Enhance your building entrance facade with architectural metal canopies. Combining slender steel cantilever beams with laminated glass, wooden rafters, or metal louvers, our canopies create striking architectural statements while shielding entrances from rain and glare.',
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
      }
    ]
  },
  {
    id: 'custom-welding-fabrication',
    slug: 'custom-welding-fabrication',
    title: 'Custom Welding & Fabrication',
    shortDescription: 'Precision TIG/MIG welding, bespoke architectural metal furniture, structural modifications, and on-site repairs.',
    fullDescription: 'Have a unique architectural design or custom engineering requirement? Our team specializes in precision bespoke metal fabrication. From customized metal planters, divider screens, and metal furniture frames to on-site emergency structural welding, we bring drawings to life with millimeter precision.',
    category: 'custom',
    image: '/images/project-custom-fab.webp',
    imageAlt: 'Bespoke architectural laser-cut metal partition screen in Whitefield commercial office',
    features: [
      'TIG (Gas Tungsten Arc) and MIG (Gas Metal Arc) welding capabilities',
      'Custom laser-cut decorative divider panels and architectural screens',
      'Bespoke steel furniture bases, tables, and display fixtures',
      'Mobile on-site welding equipment for rapid structural modifications'
    ],
    materials: ['Mild Steel', 'Stainless Steel 304/316', 'Aluminium', 'Brass Elements'],
    specs: [
      { label: 'Welding Tolerances', value: 'Within ±1.0mm precision engineering' },
      { label: 'On-Site Readiness', value: 'Portable inverter welding machines & generator backup' }
    ],
    faqs: [
      {
        question: 'Can you fabricate custom designs provided by our interior designer or architect?',
        answer: 'Yes, we frequently collaborate with Bangalore architects and interior designers, translating AutoCAD drawings, 3D SketchUp files, and sketches into finished metalwork.'
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
    nearbyLandmarks: ['Hebbal Flyover', 'Hebbal Lake', 'Kempapura Layout']
  },
  {
    slug: 'yelahanka',
    name: 'Yelahanka',
    subRegion: 'North-East Bangalore',
    description: 'Serving independent villa communities and new residential layouts across Yelahanka New Town, Kogilu, and Doddaballapur Road with heavy-duty gates and modern architectural steel fabrication.',
    highlights: ['Specialized in wide-driveway sliding gates', 'Compact duplex spiral staircases', 'Polycarbonate carports for villa driveways'],
    commonProjects: ['Motorized sliding gates', 'Rooftop metal sheds', 'Floating mono-stringer metal stairs'],
    nearbyLandmarks: ['Yelahanka New Town', 'Yelahanka Air Force Station', 'Kogilu Cross']
  },
  {
    slug: 'manyata-tech-park',
    name: 'Manyata Tech Park',
    subRegion: 'Outer Ring Road North',
    description: 'Supporting commercial IT hubs, cafeteria facilities, and residential apartment enclaves bordering Manyata Tech Park and Nagavara with commercial steel pergolas, railings, and security grills.',
    highlights: ['Commercial glass & steel canopies', 'High-traffic staircase handrails', 'Rapid corporate fabrication turnaround'],
    commonProjects: ['Office entrance drop-off canopies', 'Commercial mezzanine floor framing', 'Toughened glass balcony railings'],
    nearbyLandmarks: ['Manyata Embassy Business Park', 'Nagavara Junction', 'Thanisandra Main Road']
  },
  {
    slug: 'whitefield',
    name: 'Whitefield',
    subRegion: 'East Bangalore',
    description: 'Providing luxury gated communities, tech parks, and commercial spaces across Whitefield, ITPL, and Kadugodi with CNC laser-cut luxury gates, designer pergolas, and stainless steel railings.',
    highlights: ['High-end CNC laser cut gate designs', 'Modern minimalist matte black MS railings', 'Designer carports for luxury vehicles'],
    commonProjects: ['Laser cut entrance gates', 'Terrace glass pergolas', 'Stainless steel glass railing systems'],
    nearbyLandmarks: ['ITPB (International Tech Park Bangalore)', 'Hope Farm Junction', 'Kadugodi']
  },
  {
    slug: 'electronic-city',
    name: 'Electronic City',
    subRegion: 'South Bangalore',
    description: 'Fabricating industrial warehouse sheds, PEB factory framing, commercial fire escapes, and apartment window safety grills across Electronic City Phase 1, Phase 2, and Bommasandra.',
    highlights: ['Heavy industrial steel PEB fabrication', 'Certified fire escape staircase engineering', 'Apartment window grill bulk fabrication'],
    commonProjects: ['Industrial warehouse sheds', 'External fire escape towers', 'Heavy boundary security gates'],
    nearbyLandmarks: ['Electronic City Phase 1 & 2', 'Hosur Road Expressway', 'Bommasandra Industrial Area']
  },
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    subRegion: 'South-East Bangalore',
    description: 'Delivering bespoke architectural metalwork, modern matte black balcony railings, and motorized sliding gates for high-end multi-level residences across all sectors of HSR Layout.',
    highlights: ['Architectural matte black mild steel railings', 'Space-saving floating metal staircases', 'Minimalist sliding gates for tight plots'],
    commonProjects: ['Matte black horizontal slat railings', 'Terrace gazebo structures', 'Laser cut privacy screens'],
    nearbyLandmarks: ['HSR BDA Complex', '27th Main Commercial Corridor', 'Agara Lake']
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
  }
];

