import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MA Transform Lab - Transform Your Life Across Every Dimension",
  description: "Unlock your full potential through our integrated transformation system combining mental wellness, physical health, business growth, and AI-powered optimization. Serving clients across 5 continents.",
  keywords: ["MA Transform Lab", "transformation", "wellness", "business growth", "AI optimization", "personal development", "executive coaching", "metabolic health", "AI integration"],
  authors: [{ name: "MA Transform Lab Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "MA Transform Lab - Transform Your Life Across Every Dimension",
    description: "Integrated transformation system combining mental wellness, physical health, business growth, and AI-powered optimization",
    url: "https://matransformlab.vercel.app",
    siteName: "MA Transform Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MA Transform Lab",
    description: "Transform your life across every dimension with our integrated system",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
