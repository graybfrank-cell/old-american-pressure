# Old American Pressure — v1

Scaffolded landing page per the locked spec. One page, one PR.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Motion (Framer Motion) · React Hook Form + Zod · `next/font` (Fraunces + Mona Sans) · Vercel Analytics.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## File map

```
/app
  layout.tsx          fonts, metadata, JSON-LD, Header, Footer, Analytics
  page.tsx            composes sections in order
  globals.css         CSS variable tokens, base resets, .eyebrow, container
  /api/lead/route.ts  Zod validate → console.log → { ok: true }
/components
  Header.tsx          sticky; wordmark + tap-to-call + accent CTA
  Hero.tsx            staggered load reveal; --ink 16:9 placeholder block
  TrustStrip.tsx
  Problem.tsx
  HowItWorks.tsx      ink section; CTA repetition #2
  Services.tsx        Included list + 3 tier cards (Recurring is "Most popular")
  Proof.tsx           About + placeholder testimonial
  LeadForm.tsx        RHF + Zod, 3 required-ish fields + lot size, success state
  Footer.tsx          --ink background, --paper text
  ui/Button.tsx       accent + ghost variants; renders <Link>, <a>, or <button>
  ui/Section.tsx      vertical rhythm + scroll-in reveal
/lib
  content.ts          SINGLE SOURCE OF TRUTH — all copy + pricing
  schema.ts           Zod lead schema
  motion.ts           shared reveal + stagger variants
/public/media         empty; populate later
```

## What's intentionally placeholder

These strings remain in source and are greppable. Swap them in the visual iteration pass.

- `PLACEHOLDER_HERO_VISUAL` — solid `--ink` 16:9 block in the hero. Do not source stock; swap to real footage later.
- `PLACEHOLDER_TESTIMONIAL` — Mike R. quote in `Proof.tsx`.
- `PLACEHOLDER_OG_IMAGE` — `metadata.openGraph.images` points at `/og.png`. Drop a real OG image at `public/og.png` (or generate one as a solid `--ink` block with the wordmark in Fraunces).

## Iteration rule (important)

**Every string, price, and label originates from `lib/content.ts`.** No hardcoded copy in components. To change a price or rewrite a headline, edit `content.ts` only.

## Lead handling (v1)

`POST /api/lead` validates with Zod, `console.log`s the payload (`[lead] { ... }`), and returns `{ ok: true }`. No Resend, no Sendgrid, no Sheets — that's a later pass. To inspect leads in production, check Vercel deployment logs.

## Definition of done

- Deploys to Vercel.
- Tap-to-call works on mobile (`tel:+12147014603`).
- Form submission shows the success state; payload appears in Vercel logs.
- Lighthouse ≥ 95 performance, ≥ 95 accessibility.
- Looks right on a real phone.

## Design tokens

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#13233A` | Headlines, dark sections, footer |
| `--paper` | `#F7F4EC` | Page background |
| `--accent` | `#A8312A` | CTAs and key emphasis ONLY |
| `--steel` | `#5C6B7A` | Secondary text, borders, captions |
| `--line` | `#E4DDCD` | Hairline dividers on paper |
| `--white` | `#FFFFFF` | Cards, form fields |

Rule: accent red only appears on things you want clicked.
