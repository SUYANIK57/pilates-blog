import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simge Karahan Bayraktar | Pilates Stüdyo & Beden Farkındalığı",
  description:
    "Simge Karahan Bayraktar Pilates Stüdyosu blog rehberleri, omurga sağlığı ve kinetik beden farkındalığı.",
  keywords: ["simge karahan bayraktar", "pilates", "reformer", "mat pilates", "pilates stüdyo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0f12] text-neutral-100 selection:bg-orange-500 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
