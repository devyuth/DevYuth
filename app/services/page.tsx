import AllServicess from "../components/services/AllServicess";
import DeliveryProcess from "../components/services/DeliveryProcess";
import HeroSection from "../components/services/Herosection";
import IndustriesSection from "../components/services/IndustriesSection";
import PricingAndDelivery from "../components/services/Pricing";
import ServicesHero from "../components/services/ServicesHero";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Website & Software Development Services | DevYuth",

  description:
    "Explore professional website development, custom software, web applications, e-commerce, SaaS, UI/UX design, and automation services. Build your digital presence with DevYuth.",

  keywords: [
    // Core service keywords
    "website development services",
    "web development services",
    "website design and development",
    "website development company",
    "web development company",
    "software development services",
    "custom software development",

    // Website development
    "custom website development",
    "business website development",
    "professional website design",
    "responsive web design services",
    "landing page development",
    "static website development",
    "website redesign services",
    "website maintenance services",

    // Application development
    "web application development",
    "custom web application development",
    "SaaS application development",
    "SaaS product development",
    "admin dashboard development",

    // E-commerce
    "ecommerce website development",
    "online store development",
    "ecommerce development services",

    // Backend and integrations
    "REST API development",
    "API integration services",
    "backend development services",
    "database design and optimization",
    "authentication development",

    // AI and automation
    "AI integration services",
    "AI chatbot development",
    "business process automation",
    "workflow automation services",

    // Optimization and support
    "technical SEO services",
    "website speed optimization",
    "website performance optimization",
    "website migration services",
    "website deployment services",

    // Technology-specific
    "Next.js development services",
    "React development services",
    "TypeScript development",
  ],

  alternates: {
    canonical: "https://www.devyuth.in/services",
  },

  openGraph: {
    title: "Website & Software Development Services | DevYuth",
    description:
      "Professional website development, custom software, e-commerce, SaaS and web application development services for businesses worldwide.",
    url: "https://www.devyuth.in/services",
    siteName: "DevYuth",
    type: "website",
    images: [
      {
        url: "https://www.devyuth.in/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "DevYuth Website and Software Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website & Software Development Services | DevYuth",
    description:
      "Build professional websites, custom software and web applications with DevYuth.",
    images: ["https://www.devyuth.in/og/services.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const Services = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AllServicess />
      <ServicesHero />
      <IndustriesSection />
      <PricingAndDelivery />
      <DeliveryProcess />
    </div>
  )
}

export default Services;