import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enfield Medical and Dental - Premium Dental Care in Enfield, NSW",
  description: "Trusted family dentists with over 30 years of experience. Chinese-speaking dentists offering Invisalign, laser dentistry, and advanced dental care in Enfield, NSW.",
  keywords: ["dental", "dentist", "Enfield", "NSW", "Invisalign", "laser dentistry", "family dentist", "Chinese speaking"],
  openGraph: {
    title: "Enfield Medical and Dental",
    description: "Premium dental care with over 30 years of experience",
    type: "website",
    locale: "en_AU",
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
