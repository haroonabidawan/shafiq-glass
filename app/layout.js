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

import "@css/plugins/bootstrap-grid.css";
import "./globals.css";

import "@css/plugins/swiper.min.css";

import "@fonts/css/font-awesome.min.css";

import "@css/plugins/magnific-popup.css";

import "@css/style.css";

export const metadata = {
  title: "Shafiq Glass & Aluminium | Premium Architectural Solutions",
  description:
    "With over 15 years of experience, Shafiq Glass & Aluminium delivers high-quality glass and aluminium products and services for architectural, commercial, and residential projects across Bahrain and the region.",
  keywords:
    "Shafiq Glass, Aluminium Bahrain, Architectural Glass, Glass Doors, Aluminium Windows, Custom Glass Solutions, Bahrain Glass and Aluminium",
  openGraph: {
    title: "Shafiq Glass & Aluminium",
    description:
      "Trusted provider of architectural glass and aluminium services in Bahrain for over 15 years.",
    url: "",
    siteName: "Shafiq Glass & Aluminium",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Shafiq Glass & Aluminium",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${primary_font.variable} ${secondary_font.variable}`}>
      <body>{children}</body>
    </html>
  );
}
