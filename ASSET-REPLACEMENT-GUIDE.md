# Elders Group website – asset replacement guide

The site intentionally uses CSS image placeholders. No company photographs or logo have been fabricated or embedded. Replace placeholders after the original assets are supplied.

## Logo
- Replace the text/lettermark in `components/Header.tsx` and `components/Footer.tsx` with the approved SVG/PNG logo.
- Keep the original logo proportions and do not redraw or alter its mark.

## Homepage and business images
- Hero placeholder: `.hero-art` in `app/page.tsx` / `app/globals.css`.
- Business cards: `.business-image` and `.placeholder-tone` in `app/page.tsx`.
- Leadership portraits: `.leader-placeholder` in `app/page.tsx` and `app/about/page.tsx`.
- General reusable image placeholder: `components/MediaPlaceholder.tsx`.

To add an image to a `MediaPlaceholder`, replace its rendered component with Next.js `<Image>` using a local file under `public/images/`. Keep descriptive `alt` text and responsive `sizes` attributes. For business detail pages, use the business-specific image fields in `lib/data.ts` when those fields are added.

## Recommended asset folders
- `public/images/brand/` – approved logos and brand marks.
- `public/images/hero/` – homepage and page banners.
- `public/images/businesses/` – one or more images per subsidiary.
- `public/images/projects/` – project photography.
- `public/images/team/` – approved leadership portraits.
- `public/images/foundation/` – Goodness Impact Foundation activities.

## Before launch
1. Confirm the official primary phone number; the supplied website lists two different numbers.
2. Confirm subsidiary legal names and approved descriptions.
3. Add real social profile URLs.
4. Add approved project titles, descriptions and dates; do not publish placeholder project claims.
5. Connect Supabase and replace the contact form's email handoff with a validated server-side submission flow.
6. Add a verified map embed and test all contact details.
