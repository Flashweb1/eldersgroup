# Deploying the Elders Group Website

The production build passes (`npm run build` — all routes prerendered).
The repository is already connected at **https://github.com/Flashweb1/eldersgroup**.

---

## Option A — Vercel (recommended, free, ~10 minutes)

1. Go to https://vercel.com → sign in → **Add New… → Project** → import
   `Flashweb1/eldersgroup`.
2. Framework preset is auto-detected (Next.js). Leave build settings as defaults.
3. Add environment variables (Project → Settings → Environment Variables):

   | Variable | Value | Required? |
   |---|---|---|
   | `OPENROUTER_API_KEY` | Free API key from https://openrouter.ai/keys | For live AI chat |
   | `OPENROUTER_MODEL` | `openrouter/free` (default; leave blank to use default) | Optional |
   | `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-XXXXXXXXXX`) | Optional |

   Never add `OPENROUTER_API_KEY` as a `NEXT_PUBLIC_*` variable — it must stay
   server-only. If a key is ever shared publicly, revoke it and create a new one.
4. Click **Deploy**. You'll get `https://<project>.vercel.app` immediately.
5. **Custom domain:** Vercel → Project → Settings → Domains → add
   `eldersgroup.com.ng` (and `www.`). At your domain registrar, point DNS to Vercel:
   - A record `@` → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`
6. The sitemap (`/sitemap.xml`) and robots.txt go live automatically.
   Submit `https://eldersgroup.com.ng/sitemap.xml` in Google Search Console.

### AI support chatbot

The floating assistant calls `/api/chat`, a server route that keeps the
OpenRouter key private and grounds answers in the site's own data. The default
model `openrouter/free` routes across OpenRouter's free models, so no billing
card is needed.

- With `OPENROUTER_API_KEY` set: visitors get real AI answers, with follow-up links.
- Without the key: the widget automatically uses its local knowledge base, so
  the site never shows an error.
- Rate limited to 20 messages/minute per IP. Conversation history is kept in
  the visitor's browser (last 8 turns) and is never stored in our database.

For local testing, create `.env.local` in the project root (it is gitignored):

```powershell
OPENROUTER_API_KEY=your_key_here
```

Then restart `npm run dev`. Changes to env files require a restart.

---

## Option B — Self-hosted / cPanel Node hosting

1. Build locally:
   ```powershell
   npm ci
   npm run build
   npm start -- -p 3000
   ```
2. Set the same environment variables in the host's dashboard or a `.env.local`
   file before starting the server.
3. Run behind a reverse proxy (Nginx/IIS) with HTTPS, keep the Node process alive
   with `pm2 start "npm start" --name elders-web`.

---

## Before going live — content checklist

- [ ] Replace the placeholder social URLs in `lib/data.ts` (`SOCIAL`) with the real Facebook/Instagram/LinkedIn pages.
- [ ] Add real client testimonials to `testimonials` in `lib/data.ts` (the homepage band appears automatically).
- [ ] Confirm the WhatsApp number in `WHATSAPP` (`lib/data.ts`) is the business line you want public.
- [ ] Set `OPENROUTER_API_KEY` to enable the AI chatbot (recommended).
- [ ] Set `NEXT_PUBLIC_GA_ID` if analytics are wanted.

## Ongoing deploys

Every push to `main` on `Flashweb1/eldersgroup` redeploys automatically on Vercel.
