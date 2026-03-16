import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { property } from "@/content/property";

const siteUrl = "https://cobertura-cascatinha.web.app";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID;

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: property.seo.title,
  description: property.seo.description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: property.seo.title,
    description: property.seo.description,
    images: [property.seo.ogImage],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: property.seo.title,
    description: property.seo.description,
    images: [property.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for real estate listing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: property.headline,
  description: property.description.slice(0, 300),
  url: siteUrl,
  image: property.seo.ogImage,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Juiz de Fora",
    addressRegion: "MG",
    addressCountry: "BR",
    neighborhood: "Cascatinha",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
      </body>
    </html>
  );
}
