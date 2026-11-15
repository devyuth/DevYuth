import type { StaticImageData } from "next/image";
import eventIndian1 from "./image/eventIndian-1.png";
import eventIndian1Fullpage from './image/eventIndian-1-full-page.png'
import dentalclinic from './image/dentalclinic.png'

export type MediaItem = {
  type: "image" | "video";
  url: string | StaticImageData;
};

export type Template = {
  id: string;
  name: string;
  category: "Clinic" | "Events" | "Local Business" | "Portfolio";
  description: string;
  price: string;
  image: string | StaticImageData;
  gallery: MediaItem[];
  demoUrl: string;
  features: string[];
};

export const WHATSAPP_NUMBER = "917003996182";

export const templates: Template[] = [
  {
    id: "01",
    name: "Dental Clinics for Doctors",
    category: "Clinic",
    description: "Basic website with WhatsApp integration",
    price: "₹ 1,999",

    image: dentalclinic,

    gallery: [
      {
        type: "image",
        url: dentalclinic,
      },
    ],

    demoUrl: "/demo/dental-clinic",

    features: [
      "Responsive layout across all devices",
      "Fast page loading speed",
      "SEO and mobile optimized",
      "Easy customization",
      "Setup support",
    ],
  },

  {
    id: "02",
    name: "Indian Style Event Planners",
    category: "Events",
    description: "Soft · Elegant · Refined",
    price: "₹ 2,299",

    image: eventIndian1,

    gallery: [
      {
        type: "image",
        url: eventIndian1Fullpage,
      },
    ],

    demoUrl: "/demo/events-planner",

    features: ["Smooth animations", "E-commerce ready", "Clean aesthetic"],
  },
];
