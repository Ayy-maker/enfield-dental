import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d9488",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ayy-maker.github.io/enfield-dental/"),
  title: "Enfield Medical and Dental - Premium Dental Care in Enfield, NSW | 30+ Years Experience",
  description: "Trusted family dentists with over 30 years of experience in Enfield, NSW. Chinese-speaking dentists offering Invisalign, laser dentistry (Fotona Lightwalker), cosmetic dentistry, and emergency dental care. Advanced 3D digital scanning with iTero technology.",
  keywords: ["dental", "dentist", "Enfield NSW", "Sydney dentist", "Invisalign", "laser dentistry", "family dentist", "Chinese speaking dentist", "cosmetic dentistry", "emergency dental", "iTero scanner", "Fotona Lightwalker", "teeth whitening", "dental implants"],
  authors: [{ name: "Enfield Medical and Dental" }],
  robots: "index, follow",
  openGraph: {
    title: "Enfield Medical and Dental - Your Trusted Family Dentists",
    description: "Premium dental care with over 30 years of experience. Chinese-speaking dentists, advanced technology, and compassionate care in Enfield, Sydney.",
    type: "website",
    locale: "en_AU",
    url: "https://ayy-maker.github.io/enfield-dental/",
    siteName: "Enfield Medical and Dental",
    images: [
      {
        url: "/enfield-dental/images/team-photo-full.jpg",
        width: 1200,
        height: 630,
        alt: "Enfield Medical and Dental Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enfield Medical and Dental",
    description: "Premium dental care with over 30 years of experience",
    images: ["/enfield-dental/images/team-photo-full.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
