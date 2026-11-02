# CLOUDFLARE DEPLOYMENT ARCHITECTURE & OPERATIONS MANUAL
## SAM FABRICATION ENGINEERING WORK (https://samfabrication.in)

---

## 1. Hosting Architecture Overview
The application is architected for zero-maintenance, globally distributed serverless edge deployment on **Cloudflare Pages / Workers**.

```
[ Git Repository / Antigravity Build ]
                  │
                  ▼
         [ npm run build ]
    (Compiles TSX + Prerenders HTML)
                  │
                  ▼
              [ /dist ]
  ├── 34 x Static Pre-rendered .html Pages
  ├── /assets (Vite hashed JS & CSS bundles)
  ├── /images (Optimized WebP, PNG, JPG assets)
  ├── sitemap.xml & robots.txt
  └── _headers & _routes.json
                  │
                  ▼
       [ Cloudflare Edge CDN ]
  ├── Global Anycast DNS (< 10ms TTFB in Bangalore)
  ├── Automatic TLS 1.3 Encryption
  ├── Brotli & Gzip Compression
  └── HTTP/3 Support
```

---

## 2. Wrangler Configuration File: `wrangler.jsonc`

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "sam-fabrication",
  "compatibility_date": "2026-10-30",
  "pages_build_output_dir": "./dist",
  "vars": {
    "SITE_URL": "https://samfabrication.in",
    "ENVIRONMENT": "production"
  }
}
```

---

## 3. Edge Headers: `public/_headers`
Provides optimal caching, strict security headers, and MIME type enforcement:

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

---

## 4. Production Deployment Step-by-Step Instructions

> **Note:** As instructed by the user, DO NOT deploy automatically. Deployment to the live domain `samfabrication.in` requires explicit user confirmation and supplied Cloudflare API credentials.

When approved:
1. **Local Build Verification:**
   ```bash
   npm run build
   ```
   Ensure `/dist` contains all 34 pre-rendered `.html` files, `sitemap.xml`, and assets.

2. **Cloudflare Authentication:**
   ```bash
   npx wrangler login
   ```
   Or set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

3. **Deploy to Cloudflare Pages:**
   ```bash
   npx wrangler pages deploy dist --project-name=sam-fabrication
   ```

4. **Custom Domain Attachment:**
   - In Cloudflare Dashboard > Pages > sam-fabrication > Custom Domains:
   - Add `samfabrication.in` and `www.samfabrication.in`.
   - Cloudflare automatically manages DNS records and SSL certification.

