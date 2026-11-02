# STRUCTURED DATA (JSON-LD) VALIDATION & SCHEMA SPECIFICATION
## SAM FABRICATION ENGINEERING WORK (https://samfabrication.in)

---

## 1. Schema Hierarchy by Template

| Template | Primary Schema | Linked Schemas | Key Properties Verified |
|---|---|---|---|
| **Homepage (`/`)** | `LocalBusiness`, `HomeAndConstructionBusiness` | `WebSite`, `Organization`, `AggregateOffer` | `name`, `telephone`, `address`, `geo`, `areaServed`, `openingHours`, `priceRange`, `sameAs` |
| **About Us (`/about-us/`)** | `AboutPage` | `Organization` | `mainEntity`, `description`, `foundingDate`, `knowsAbout` |
| **Service Pages (`/services/*`)** | `Service` | `LocalBusiness`, `BreadcrumbList`, `FAQPage` | `serviceType`, `provider`, `areaServed`, `hasOfferCatalog`, `description` |
| **Portfolio (`/our-work/`)** | `CollectionPage` | `ImageGallery`, `BreadcrumbList` | `hasPart`, `about` |
| **Blog Index (`/blog/`)** | `Blog`, `CollectionPage` | `BreadcrumbList` | `blogPost`, `headline`, `about` |
| **Blog Post (`/blog/*`)** | `BlogPosting` | `BreadcrumbList`, `Person` (Author), `Organization` (Publisher) | `headline`, `description`, `image`, `datePublished`, `dateModified`, `author`, `publisher` |
| **Regional Corridors (`/areas-we-serve/*`)** | `Service` | `AdministrativeArea`, `LocalBusiness`, `BreadcrumbList` | `serviceType`, `provider`, `areaServed` (localities list), `description` |
| **Project Case Studies (`/our-work/*`)** | `Article` | `LocalBusiness`, `BreadcrumbList`, `ImageObject` | `headline`, `description`, `image`, `author`, `publisher`, `mainEntityOfPage` |
| **Location Pages (`/locations/*`)** | `LocalBusiness` | `Service`, `BreadcrumbList` | `name`, `address`, `areaServed`, `serviceArea` |
| **Contact Us (`/contact-us/`)** | `ContactPage` | `LocalBusiness` | `contactPoint`, `telephone`, `email`, `hoursAvailable` |

---

## 2. Integrity & Compliance Verification
- **Anti-Hallucination Rule:** No synthetic aggregate ratings (`ratingValue`, `reviewCount`) are injected. Reviews are only marked up with genuine text and verifiable customer attribution.
- **Entity Linking:** Every page references the canonical `@id: https://samfabrication.in/#entity` to establish persistent entity co-reference across all URLs.
- **Google Rich Results Eligibility:** BreadcrumbList, Article, and LocalBusiness structures conform to Google Search Central developer documentation.

