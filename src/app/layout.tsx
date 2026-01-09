import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "@/layouts/Headers";
import Footers from "@/layouts/Footers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tenis Komedi Serpong Lagoon - Official Website",
  description: "Menang itu Bonus, Keringetan itu Harus, Foto estetik itu Kudus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Headers />
        {children}
        <Footers />
      </body>
    </html>
  );
}
