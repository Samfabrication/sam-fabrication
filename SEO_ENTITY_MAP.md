# SEO ENTITY MAP & KNOWLEDGE GRAPH SPECIFICATION
## SAM FABRICATION ENGINEERING WORK (https://samfabrication.in)

---

## 1. Entity Definition

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://samfabrication.in/#entity",
      "name": "SAM Fabrication Engineering Work",
      "alternateName": "SAM Fabrication",
      "url": "https://samfabrication.in",
      "logo": "https://samfabrication.in/images/sam-logo.png",
      "image": "https://samfabrication.in/images/hero-home.jpg",
      "description": "SAM Fabrication Engineering Work provides high-precision architectural welding, metal fabrication, custom steel gates, window grills, stainless steel railings, car parking sheds, and structural steel works in Bangalore.",
      "telephone": "+919453344824",
      "email": "info@samfabrication.in",
      "priceRange": "$$",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dasarahalli Main Road Near Sobha Moonstone",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560024",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0358,
        "longitude": 77.5970
      },
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "AdministrativeArea", "name": "Karnataka" },
        { "@type": "Place", "name": "Hebbal" },
        { "@type": "Place", "name": "Yelahanka" },
        { "@type": "Place", "name": "Manyata Tech Park" },
        { "@type": "Place", "name": "Whitefield" },
        { "@type": "Place", "name": "Electronic City" },
        { "@type": "Place", "name": "HSR Layout" },
        { "@type": "Place", "name": "Indiranagar" },
        { "@type": "Place", "name": "Devanahalli" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "knowsAbout": [
        "Metal Fabrication",
        "Steel Fabrication",
        "Mild Steel (MS) Fabrication",
        "Stainless Steel (SS) Fabrication Grade 304",
        "Gate Fabrication",
        "Window Grill Fabrication",
        "Staircase Fabrication",
        "Car Parking Shed Fabrication",
        "Structural Steel Framing",
        "TIG and MIG Welding"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fabrication Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Gate Fabrication" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window Grill Fabrication" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SS and MS Railings" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Parking Sheds" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Steel Fabrication" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Staircase Fabrication" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://samfabrication.in/#website",
      "url": "https://samfabrication.in",
      "name": "SAM Fabrication Engineering Work",
      "publisher": { "@id": "https://samfabrication.in/#entity" }
    }
  ]
}
```

---

## 2. Real-World Entity Relationships (Knowledge Graph Anchors)

- **Subject Entity:** `SAM Fabrication Engineering Work`
- **IsA:** `Metal Fabrication Contractor` / `Welding Workshop`
- **Location Entity:** `Bangalore (Q1355 on Wikidata)`
- **Material Entities:**
  - `Stainless Steel (Q172587)`
  - `Mild Steel (Carbon Steel) (Q211786)`
  - `Structural Steel (Q1412586)`
- **Manufacturing Process Entities:**
  - `Welding (Q131172)`
  - `MIG/MAG Welding (Q689033)`
  - `TIG Welding (Q371536)`
  - `Laser Cutting (Q757134)`
  - `Powder Coating (Q899120)`
- **Product Entities:**
  - `Gate (Q214545)`
  - `Guard Rail / Balcony Railing (Q1140927)`
  - `Carport / Parking Shed (Q1044738)`
  - `Stairs / Staircase (Q12511)`

