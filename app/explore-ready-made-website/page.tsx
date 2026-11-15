import type { Metadata } from "next";
import TemplateGallery from "../components/websites/TemplateGallery";

export const metadata: Metadata = {
  title: "Buy Ready-Made Websites Online | Affordable Websites Devyuth",

  description:
    "Explore and buy professionally designed ready-made websites from Devyuth. Get modern, responsive, customizable websites for your business, startup, portfolio, or online store.",

  keywords: [
    "buy ready made website",
    "ready made websites",
    "pre built websites",
    "website templates for sale",
    "affordable websites",
    "business website templates",
    "responsive website templates",
    "ready to use websites",
    "buy website online",
    "Devyuth websites",
  ],

  alternates: {
    canonical: "https://devyuth.in/explore-ready-made-website",
  },

  openGraph: {
    title: "Buy Ready-Made Websites Online | Devyuth",
    description:
      "Find professionally designed, responsive, and affordable ready-made websites for your business. Explore website templates and get started with Devyuth.",
    url: "https://devyuth.in/explore-ready-made-website",
    siteName: "Devyuth",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Buy Ready-Made Websites Online | Devyuth",
    description:
      "Explore and purchase professionally designed ready-made websites for your business with Devyuth.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ReadyWebsite = () => {
  return (
    <div>
      <TemplateGallery />
    </div>
  );
};

export default ReadyWebsite;