import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#072a44",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://travelwithrushmile.com"),
  title: "Travel with Rushmile | Northern Pakistan Tours",
  description:
    "Curated luxury journeys through Khunjerab Pass, Baosar Top, Skardu, Hunza Valley, Fairy Meadows, and Gilgit-Baltistan. Experience Northern Pakistan with premium hospitality and expert guides.",
  keywords: [
    "Northern Pakistan Tours",
    "Travel with Rushmile",
    "Hunza Valley Tour",
    "Skardu Tour Package",
    "Khunjerab Pass China Border",
    "Fairy Meadows Nanga Parbat",
    "Gilgit Baltistan Luxury Travel",
  ],
  authors: [{ name: "Travel with Rushmile" }],
  openGraph: {
    title: "Travel with Rushmile | Northern Pakistan Tours",
    description:
      "Curated journeys through Khunjerab, Baosar Top, Skardu and Gilgit-Baltistan with luxury hospitality and local expertise.",
    url: "https://travelwithrushmile.com",
    siteName: "Travel with Rushmile",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Travel with Rushmile - Northern Pakistan Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-[#0b3a5c] antialiased selection:bg-sky-200 selection:text-sky-900">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
