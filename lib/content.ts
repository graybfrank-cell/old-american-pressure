/**
 * Single source of truth for all copy & pricing on the page.
 * Strings prefixed `PLACEHOLDER_` are intentional — Grayson will swap them
 * in the visual iteration pass. Leave them as-is.
 */

export const site = {
  name: "Old American Pressure",
  phoneDisplay: "214-701-4603",
  phoneHref: "tel:+12147014603",
  email: "jake@oldamericanpressure.co",
  emailHref: "mailto:jake@oldamericanpressure.co",
  domain: "oldamericanpressure.co",
  serviceArea: "Austin Metro, TX",
  city: "Austin",
  region: "TX",
} as const;

export const header = {
  wordmark: site.name,
  ctaLabel: "Free Lot Walk",
  ctaHref: "#quote",
} as const;

export const hero = {
  eyebrow: "EXTERIOR LOT CLEANING · AUSTIN, TX",
  h1: "Keep Your Lot Showroom-Ready.",
  subhead:
    "Fast, recurring exterior cleaning for dealership inventory — so every vehicle on your lot looks ready to sell. Mobile service, predictable contracts.",
  primaryCtaLabel: "Get My Free Lot Walk",
  primaryCtaHref: "#quote",
  secondaryCtaLabel: "Or call 214-701-4603",
  secondaryCtaHref: site.phoneHref,
  visualPlaceholder: "PLACEHOLDER_HERO_VISUAL",
} as const;

export const trustStrip = [
  "Mobile service",
  "Serving the Austin metro",
  "Weekly & bi-weekly contracts",
] as const;

export const problem = {
  eyebrow: "THE PROBLEM",
  heading: "Why your lot looks tired by Tuesday.",
  cards: [
    {
      title: "Dusty inventory sits longer.",
      body:
        "Clean cars photograph better and sell faster. Weather, pollen, and dust work against your lot every day.",
    },
    {
      title: "Full detailing is too slow and too costly for a whole lot.",
      body:
        "You don't need a ceramic coat on inventory — you need it consistently clean.",
    },
    {
      title: "One-off washes don't hold.",
      body:
        "Your lot is dirty again within days. You need a service that shows up on a schedule.",
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  heading: "Three steps. Recurring results.",
  steps: [
    {
      number: "01",
      title: "We show up.",
      body: "Mobile service on your schedule. No lot downtime.",
    },
    {
      number: "02",
      title: "We clean the exterior, fast.",
      body:
        "Spray, wipe, and dress — vehicle after vehicle, consistent every time.",
    },
    {
      number: "03",
      title: "Your lot stays sell-ready.",
      body:
        "Fresh inventory, professional first impression, on a recurring contract you can count on.",
    },
  ],
  ctaLabel: "Get My Free Lot Walk",
  ctaHref: "#quote",
} as const;

export const services = {
  eyebrow: "SERVICES & PRICING",
  heading: "Straightforward. Recurring. Built for lots.",
  included: [
    "Exterior wash",
    "Spray-and-wipe dry",
    "Tire dressing (optional)",
    "Weekly or bi-weekly scheduling",
    "Fully mobile (we come to you)",
    "Flexible terms",
  ],
  tiers: [
    {
      name: "Per-vehicle",
      price: "$12 / vehicle",
      description: "For smaller or occasional lots.",
      mostPopular: false,
    },
    {
      name: "Recurring contract",
      price: "Custom quote per lot",
      description: "For high-volume lots.",
      mostPopular: true,
    },
    {
      name: "Launch partner (limited)",
      price: "Intro pricing",
      description:
        "For the first few Austin dealerships. Priority scheduling.",
      mostPopular: false,
    },
  ],
} as const;

export const proof = {
  eyebrow: "ABOUT",
  heading: "Built in Lubbock. Bringing it to Austin.",
  body:
    "Old American Pressure is run by Jake, alongside his brother Jason — who's been doing this work professionally for years. The model is already running in Lubbock, TX, and Jake is bringing it to the Austin metro. No franchise gloss, no upsells. Just consistent, recurring exterior cleaning that keeps your lot looking ready to sell.",
  testimonial: {
    quote: "Jake's crew turned our lot around — cars move faster now.",
    attribution: "Mike R., Lubbock Auto",
    placeholderKey: "PLACEHOLDER_TESTIMONIAL",
  },
} as const;

export const lotSizeOptions = [
  "10–25 vehicles",
  "25–50 vehicles",
  "50–100 vehicles",
  "100+ vehicles",
] as const;

export const leadForm = {
  eyebrow: "GET A QUOTE",
  heading: "Ready to see it on your lot?",
  sub: "Free 15-minute lot walk. No obligation.",
  fields: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "(512) 555-0123",
    dealershipLabel: "Dealership",
    dealershipPlaceholder: "Optional",
    lotSizeLabel: "Lot size",
    lotSizePlaceholder: "Optional",
  },
  submitLabel: "Get My Free Lot Walk",
  successMessage: "Thanks — Jake will call you within one business day.",
  errorMessage: "Something went wrong. Please call 214-701-4603 instead.",
} as const;

export const footer = {
  wordmark: site.name,
  contact: `${site.phoneDisplay} · ${site.email}`,
  legal: `Serving the Austin Metro & surrounding markets · © Old American Pressure 2026`,
} as const;

export const meta = {
  title: "Old American Pressure — Exterior Lot Cleaning, Austin TX",
  description:
    "Recurring exterior cleaning for dealership lots in the Austin metro. Mobile service, weekly & bi-weekly contracts. Free lot walk.",
  ogImagePlaceholder: "PLACEHOLDER_OG_IMAGE",
} as const;
