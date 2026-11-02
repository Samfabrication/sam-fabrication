# CLOUDFLARE ENVIRONMENT VARIABLES & SECRETS REGISTER
## SAM FABRICATION ENGINEERING WORK (https://samfabrication.in)

---

## 1. Environment Variables Overview

| Variable Name | Environment | Description | Sensitivity | Current Default / Placeholder |
|---|---|---|---|---|
| `SITE_URL` | Production / Preview | Canonical public site origin | Public | `https://samfabrication.in` |
| `ENVIRONMENT` | Production / Staging | Deployment environment identifier | Public | `production` |
| `PUBLIC_PHONE` | All | Direct customer phone line | Public | `+91 98765 43210` *(Pending verified number)* |
| `PUBLIC_WHATSAPP` | All | WhatsApp inquiry destination number | Public | `919876543210` *(Pending verified number)* |
| `PUBLIC_EMAIL` | All | Official business inquiry email | Public | `info@samfabrication.in` |
| `CF_TURNSTILE_SITE_KEY` | Production | Cloudflare Turnstile anti-bot public key | Public | Optional / Configurable |
| `CF_TURNSTILE_SECRET_KEY` | Production | Cloudflare Turnstile server validation secret | Secret | Do NOT expose in frontend |
| `LEAD_NOTIFICATION_EMAIL` | Production | Admin email address receiving quote forms | Secret | `quotes@samfabrication.in` |

---

## 2. Secrets Management Guidelines
1. **Zero Frontend Leaks:** Never commit or hardcode private API keys, SMTP credentials, or Cloudflare API tokens in client bundles.
2. **Cloudflare Dashboard Management:** Store sensitive tokens directly in the Cloudflare Pages Dashboard under **Settings > Environment variables** (Encrypt type: Secret).

