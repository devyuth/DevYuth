import AllServicess from "../components/services/AllServicess";
import DeliveryProcess from "../components/services/DeliveryProcess";
import HeroSection from "../components/services/Herosection";
import IndustriesSection from "../components/services/IndustriesSection";
import PricingAndDelivery from "../components/services/Pricing";
import ServicesHero from "../components/services/ServicesHero";


export const metadata = {
  title: "Web Development Services | DevYuth",

  description:
    "Explore professional web development, mobile app development, UI/UX design, AI automation, cloud infrastructure, and data analytics services. Build scalable digital solutions with our expert team.",

  keywords: [
    "web development services",
    "website development company",
    "custom web development",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "UI UX design services",
    "AI automation services",
    "business process automation",
    "cloud infrastructure services",
    "DevOps services",
    "data analytics services",
    "SaaS development",
    "enterprise software development",
    "software development company",
    "custom software solutions",
    "digital transformation services",
  ],

  alternates: {
    canonical: "https://devyuth.in/services",
  },

  openGraph: {
    title: "Professional Web, App Development & AI Services",
    description:
      "Transform your business with custom web development, mobile applications, AI automation, UI/UX design, and scalable cloud solutions.",
    url: "https://devyuth.in/services",
    siteName: "DevYuth",
    type: "website",
    images: [
      {
        url: "https://devyuth.in/services",
        width: 1200,
        height: 630,
        alt: "Professional Software Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development, App Development & AI Services",
    description:
      "Discover professional software development, AI automation, mobile apps, and cloud infrastructure services.",
    images: ["https://devyuth.in/serviceHero.jpeg"],
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