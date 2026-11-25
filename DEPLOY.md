# Deploying the Elders Group Website

The production build passes (`npm run build` — all routes prerendered, homepage 166 kB first load).
Everything below assumes this repository root.

---

## Option A — Vercel (recommended, free, ~10 minutes)

1. Push this project to a GitHub repository (the folder is not yet a git repo):
   ```powershell
   git init
   git add .
   git commit -m "Elders Group website"
   git remote add origin https://github.com/<your-username>/elders-group-nextjs.git
   git push -u origin main
   ```
2. Go to https://vercel.com → sign in → **Add New… → Project** → import the repo.
3. Framework preset is auto-detected (Next.js). Leave build settings as defaults.
4. (Optional analytics) Add an environment variable:
   - `NEXT_PUBLIC_GA_ID` = your GA4 measurement ID (`G-XXXXXXXXXX`)
   - Leave it out to ship without analytics — the site renders identically.
5. Click **Deploy**. You'll get `https://<project>.vercel.app` immediately.
6. **Custom domain:** Vercel → Project → Settings → Domains → add
   `eldersgroup.com.ng` (and `www.`). At your domain registrar, point DNS to Vercel:
   - A record `@` → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`
7. The site's sitemap (`/sitemap.xml`) and robots.txt will then be live automatically.
   Submit `https://eldersgroup.com.ng/sitemap.xml` in Google Search Console.

---

## Option B — Self-hosted / cPanel Node hosting

1. Build locally:
   ```powershell
   npm ci
   npm run build
   npm start -- -p 3000
   ```
2. Run behind a reverse proxy (Nginx/IIS) with HTTPS, keep the Node process alive
   with `pm2 start "npm start" --name elders-web`.

---

## Before going live — content checklist

- [ ] Replace the placeholder social URLs in `lib/data.ts` (`SOCIAL`) with the real Facebook/Instagram/LinkedIn pages.
- [ ] Add real client testimonials to `testimonials` in `lib/data.ts` (the homepage band appears automatically).
- [ ] Confirm the WhatsApp number in `WHATSAPP` (`lib/data.ts`) is the business line you want public.
- [ ] Set `NEXT_PUBLIC_GA_ID` if analytics are wanted (see Option A step 4).

## Ongoing deploys

Every push to the connected GitHub branch redeploys automatically on Vercel.
