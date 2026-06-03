import type { Metadata, Viewport } from "next";
import { Fraunces, Mona_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { meta, site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",

});

const siteUrl = `https://${site.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: meta.title,
    description: meta.description,
    siteName: site.name,
    locale: "en_US",
    // PLACEHOLDER_OG_IMAGE — Grayson will swap in the real OG image.
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EC",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#business`,
      name: site.name,
      url: siteUrl,
      telephone: site.phoneDisplay,
      email: site.email,
      areaServed: {
        "@type": "City",
        name: site.city,
        containedInPlace: { "@type": "State", name: "Texas" },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: "US",
      },
      priceRange: "$$",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#service`,
      serviceType: "Exterior lot cleaning",
      provider: { "@id": `${siteUrl}#business` },
      areaServed: { "@type": "City", name: site.city },
      description: meta.description,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${monaSans.variable}`}>
      <body>
        <a
          href="#main"
          className="
            sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3
            focus:z-50 focus:bg-[var(--ink)] focus:text-[var(--paper)]
            focus:px-3 focus:py-2 focus:rounded-sm
          "
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
