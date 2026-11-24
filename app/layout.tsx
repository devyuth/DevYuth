import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Manrope, Caveat } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.devyuth.in"),

  title: {
    default: "Devyuth | Website Design & Development Agency",
    template: "%s | Devyuth",
  },

  description:
    "Professional website design, custom web development, and ready-made website solutions by Devyuth.",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Devyuth",
    title: "Devyuth | Website Design & Development Agency",
    description:
      "Professional website design and development solutions for businesses.",
    url: "https://www.devyuth.in",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Devyuth Website Design and Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Devyuth | Website Design & Development Agency",
    description:
      "Professional website design and development solutions.",
    images: ["/project2.png"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-amber-50">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}