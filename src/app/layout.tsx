import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

// ─── Fonts ───
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// ─── Metadata ───
export const metadata: Metadata = {
  title: siteConfig.ogTitle,
  description: siteConfig.ogDescription,
  openGraph: {
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    type: "website",
    // TODO: replace with your deployed domain once live (e.g. "https://hanksze.dev")
    url: "https://hanksze-dev.vercel.app",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmMono.variable} ${outfit.variable}`}
    >
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
