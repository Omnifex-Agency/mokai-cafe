import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mokai Cafe | Bandra's Art & Coffee Hub",
  description: "Experience the vibe of Tokyo in Bandra West. Specialty coffee, matcha, asian-fusion sandos, and art. The most instagrammable cafe in Mumbai.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} ${playfair.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
