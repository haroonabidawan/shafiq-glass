import { Albert_Sans, Roboto_Condensed } from 'next/font/google'

const primary_font = Albert_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
  adjustFontFallback: false,
})

const secondary_font = Roboto_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
})

import "../public/css/plugins/bootstrap-grid.css";
import "./globals.css";

import "../public/css/plugins/swiper.min.css";

import "../public/fonts/css/font-awesome.min.css";

import "../public/css/plugins/magnific-popup.css";

import "../public/css/style.css";

export const metadata = {
  title: {
    default: "Shafiq Glass & Aluminium | Premium Architectural Solutions",
    template: "%s | Shafiq Glass & Aluminium",
  },
  description:
    "With over 15 years of experience, Shafiq Glass & Aluminium delivers high-quality glass and aluminium products and services for architectural, commercial, and residential projects across Bahrain and the region.",
  keywords: [
    "Shafiq Glass",
    "Aluminium Bahrain",
    "Glass Services",
    "Architectural Glass",
    "Custom Glass Bahrain",
    "Aluminium Windows",
    "Glass Partitions",
    "Bahrain Glass & Aluminium",
  ],
  metadataBase: new URL("https://shafiqglass.com"),
  openGraph: {
    title: "Shafiq Glass & Aluminium",
    description:
      "Trusted provider of architectural glass and aluminium services in Bahrain for over 15 years.",
    url: "https://shafiqglass.com",
    siteName: "Shafiq Glass & Aluminium",
    images: [
      {
        url: "https://shafiqglass.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Shafiq Glass & Aluminium OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${primary_font.variable} ${secondary_font.variable}`}>
      <body>{children}</body>
    </html>
  );
}
