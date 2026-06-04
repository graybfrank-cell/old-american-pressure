// lib/content.ts — Commercial lot pivot v1.2
// Single source of truth for all page copy.
// PLACEHOLDER_* values are intentional; swap in the visual iteration pass.

export const site = {
  name: "Old American Pressure",
  domain: "oldamericanpressure.co",
  phone: "+12147014603",
  phoneDisplay: "214-701-4603",
  email: "jake@oldamerican.pro",
  city: "Austin",
  region: "TX",
};

export const meta = {
  title: "Old American Pressure — Commercial Lot Cleaning in Austin, TX",
  description:
    "Recurring exterior cleaning for car, RV, equipment, and truck dealerships in the Austin metro. Mobile service, predictable contracts, sell-ready lots.",
};

// ─── Header ──────────────────────────────────────────────────────────────────
export const header = {
  wordmark: "Old American Pressure",
  ctaLabel: "Free Lot Walk",
  ctaHref: "#quote",
};

// ─── Hero (contains the inline lead form) ────────────────────────────────────
export const hero = {
  eyebrow: "COMMERCIAL LOT CLEANING · AUSTIN, TX",
  h1: "Clean Lots Sell Faster.",
  subhead:
    "Recurring exterior cleaning for car, RV, equipment, and truck dealerships in the Austin metro. We come to your lot, wash the inventory, and keep it sell-ready — on a schedule you can count on.",
  // Form lives directly under the subhead on the hero.
  formHeading: "Get your free lot walk",
  formSub: "15 minutes on-site. No obligation. Jake will call you within one business day.",
  ctaLabel: "Get My Free Lot Walk",
  successMessage: "Thanks — Jake will call you within one business day.",
  secondaryLabel: "Or call",
};

// ─── Trust strip (under the hero/form block) ─────────────────────────────────
export const trustStrip = [
  "Mobile service",
  "Serving the Austin metro",
  "Weekly & bi-weekly contracts",
];

// ─── How It Works (short tail — 3 one-liners, no cards) ──────────────────────
export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  h2: "Three steps. No lot downtime.",
  steps: [
    {
      title: "We show up.",
      body: "Mobile service on your schedule. Early mornings, off-hours, whatever keeps your sales floor moving.",
    },
    {
      title: "We clean the exterior.",
      body: "Spray, wipe, and dress — unit after unit. Built for the surface area and turnover of a working lot.",
    },
    {
      title: "Your lot stays sell-ready.",
      body: "Inventory that photographs well and walks up well, on a recurring contract you set and forget.",
    },
  ],
};

// ─── Proof / About (short tail — one paragraph) ──────────────────────────────
export const proof = {
  eyebrow: "BUILT IN LUBBOCK",
  h2: "A trade business, run by people who've done it.",
  body: "Old American Pressure is run by Jake, alongside his brother Jason — who's worked in this industry for years. The model is already running with dealerships in Lubbock, TX, and Jake is bringing it to the Austin metro. No franchise gloss, no upsells. Just consistent, recurring exterior cleaning for the inventory on your lot.",
};

// ─── Final CTA (sits just above the footer for the scrollers) ────────────────
export const finalCta = {
  h2: "Ready to see it on your lot?",
  sub: "Free 15-minute lot walk. Jake will call within one business day.",
  ctaLabel: "Get My Free Lot Walk",
  ctaHref: "#quote",
  phoneLabel: "Or call",
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footer = {
  wordmark: "Old American Pressure",
  tagline: "Commercial lot cleaning · Austin Metro & surrounding markets",
  copyright: "© Old American Pressure 2026",
};

// ─── Lead form ───────────────────────────────────────────────────────────────
export const leadForm = {
  fields: {
    name: { label: "Name", placeholder: "Your name", required: true },
    phone: { label: "Phone", placeholder: "(512) 555-0100", required: true },
    dealership: { label: "Dealership", placeholder: "Dealership or company name (optional)", required: false },
    lotSize: {
      label: "Lot size",
      required: false,
      options: [
        { value: "", label: "Lot size (optional)" },
        { value: "10-25", label: "10–25 units" },
        { value: "25-50", label: "25–50 units" },
        { value: "50-100", label: "50–100 units" },
        { value: "100+", label: "100+ units" },
      ],
    },
  },
};