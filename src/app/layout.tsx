import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yoshio Urakami — Architect",
  description:
    "Architecture portfolio of Yoshio Urakami. Luxury residential projects across Los Cabos, Baja California Sur.",
  metadataBase: new URL("https://example.com"), // replace later
  openGraph: {
    title: "Yoshio Urakami — Architect",
    description:
      "A curated gallery of luxury residential architecture across Los Cabos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
