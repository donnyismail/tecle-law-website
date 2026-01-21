import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: {
    default: "TECLE LAW, PLLC | Houston Personal Injury & Expungement Attorney",
    template: "%s | TECLE LAW",
  },
  description: "Houston's trusted personal injury and expungement attorney. No fees unless we win. Money-back guarantee on expungements. Call (713) 282-5871 for free consultation.",
  keywords: ['Houston attorney', 'personal injury lawyer', 'expungement Texas', 'criminal record', 'car accident lawyer'],
  authors: [{ name: 'TECLE LAW, PLLC' }],
  metadataBase: new URL('https://teclelaw.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TECLE LAW, PLLC',
    title: 'TECLE LAW, PLLC | Houston Personal Injury & Expungement Attorney',
    description: "Houston's trusted personal injury and expungement attorney. No fees unless we win.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TECLE LAW, PLLC | Houston Attorney',
    description: "Personal injury & expungement attorney. No fees unless we win.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerifDisplay.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
