"use client";
import React, { useState, useMemo } from "react";
import { ArrowUpRight, Search, Code, Check } from "lucide-react";

interface Service {
    id: string;
    title: string;
    category: string;
    description: string;
    deliverable: string;
    image: string;
    bulletPoints: string[];
}

const AllServices = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [modalService, setModalService] = useState<Service | null>(null);

    // Replace with your actual WhatsApp phone number (with country code, no + or spaces, e.g., "919876543210")
    const WHATSAPP_NUMBER = "917003996182";

    
const services: Service[] = [
    {
        id: "1",
        title: "Custom Website Development",
        category: "Web Development",
        description:
            "Build professional, responsive websites tailored to your business goals, brand identity, and customer requirements using modern web technologies.",
        deliverable:
            "A custom-built, responsive business website ready for production.",
        image:
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Custom website design and development",
            "Responsive mobile-first layouts",
            "Modern frontend and backend integration",
            "SEO-friendly website architecture",
            "CMS and content management integration",
        ],
    },
    {
        id: "2",
        title: "E-commerce Website Development",
        category: "E-Commerce",
        description:
            "Create powerful online stores that help businesses sell products and services with seamless shopping experiences, secure payments, and efficient order management.",
        deliverable:
            "A fully functional online store with product management, checkout, and payment integration.",
        image:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Custom online store development",
            "Product catalog and category management",
            "Shopping cart and checkout functionality",
            "Payment gateway integration",
            "Order and inventory management",
        ],
    },
    {
        id: "3",
        title: "Custom Web Application Development",
        category: "Software Development",
        description:
            "Develop custom web applications, business portals, management systems, and interactive platforms designed to solve specific business problems and improve operational efficiency.",
        deliverable:
            "A custom web application built around your business workflows and functional requirements.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Custom business application development",
            "Admin panels and management dashboards",
            "Database architecture and integration",
            "Authentication and user management",
            "Scalable backend and API development",
        ],
    },
    {
        id: "4",
        title: "SaaS Product Development",
        category: "SaaS Development",
        description:
            "Build subscription-based software products with secure user accounts, interactive dashboards, billing systems, and scalable application architecture.",
        deliverable:
            "A functional SaaS application built around your product requirements and business model.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "SaaS application architecture and development",
            "Subscription and payment integration",
            "User and admin dashboards",
            "Authentication and role-based access control",
            "Scalable database and API architecture",
        ],
    },
    {
        id: "5",
        title: "AI Integration & Chatbot Development",
        category: "Artificial Intelligence",
        description:
            "Integrate artificial intelligence into business websites and applications through intelligent chatbots, AI assistants, document search, and automated customer support solutions.",
        deliverable:
            "An AI-powered feature or chatbot integrated into your website or application.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "AI chatbot development and integration",
            "OpenAI and Gemini API integration",
            "AI-powered customer support assistants",
            "Document search and knowledge-base integration",
            "Secure AI API and usage management",
        ],
    },
    {
        id: "6",
        title: "Business Workflow Automation",
        category: "Business Automation",
        description:
            "Automate repetitive business operations, connect different software platforms, and streamline daily workflows using custom integrations and automation solutions.",
        deliverable:
            "A tested business automation workflow that reduces repetitive manual tasks.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Business process automation",
            "CRM and spreadsheet integrations",
            "Automated email and notification workflows",
            "Webhook and third-party integrations",
            "Scheduled tasks and background automation",
        ],
    },
    {
        id: "7",
        title: "Landing Page Design & Development",
        category: "Web Development",
        description:
            "Create attractive, responsive, and conversion-focused landing pages for business promotions, product launches, advertising campaigns, and lead generation.",
        deliverable:
            "A responsive landing page designed to communicate your offer and generate customer enquiries.",
        image:
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Conversion-focused landing page design",
            "Responsive mobile-first layouts",
            "Lead capture form integration",
            "Clear calls-to-action and page structure",
            "Analytics and conversion tracking integration",
        ],
    },
    {
        id: "8",
        title: "API Development & Integration",
        category: "Backend Development",
        description:
            "Develop secure REST APIs and connect websites, applications, databases, payment gateways, CRM platforms, and external business systems.",
        deliverable:
            "A documented and tested API or third-party integration tailored to your application.",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Custom REST API development",
            "Third-party API integration",
            "Payment gateway and email integrations",
            "API authentication and access control",
            "Request validation and error handling",
        ],
    },
    {
        id: "9",
        title: "Website Redesign & Modernization",
        category: "Website Design",
        description:
            "Transform outdated websites into modern digital experiences with improved user interfaces, responsive layouts, better navigation, and maintainable code.",
        deliverable:
            "A redesigned and modernized website with improved usability and responsive functionality.",
        image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Modern UI and UX redesign",
            "Mobile and tablet optimization",
            "Improved navigation and page structure",
            "Website migration and modernization",
            "SEO-aware redesign and redirect planning",
        ],
    },
    {
        id: "10",
        title: "Website Speed & Performance Optimization",
        category: "Performance Optimization",
        description:
            "Improve website loading speed, responsiveness, and user experience through performance analysis, asset optimization, caching, and Core Web Vitals improvements.",
        deliverable:
            "A performance-optimized website with before-and-after testing and measurable improvements.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Website performance and speed audits",
            "Core Web Vitals analysis and optimization",
            "Image and asset compression",
            "Caching and CDN configuration",
            "Code splitting and lazy loading",
        ],
    },
    {
        id: "11",
        title: "Technical SEO & Website Optimization",
        category: "Search Engine Optimization",
        description:
            "Improve website search engine accessibility and technical health through on-page SEO, indexing configuration, structured data, and technical optimization.",
        deliverable:
            "A technically optimized website with improved search engine accessibility and indexing configuration.",
        image:
            "https://images.unsplash.com/photo-1432888622747-4eb9a8efec07?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Technical SEO audits and recommendations",
            "Title, meta description, and heading optimization",
            "XML sitemap and robots.txt configuration",
            "Schema markup and structured data implementation",
            "Canonical URLs and indexing checks",
        ],
    },
    {
        id: "12",
        title: "Website Maintenance & Technical Support",
        category: "Maintenance & Support",
        description:
            "Keep your website and applications secure, updated, and reliable with ongoing maintenance, bug fixing, performance monitoring, backups, and technical assistance.",
        deliverable:
            "An agreed website maintenance plan covering updates, monitoring, troubleshooting, and technical support.",
        image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
            "Website and application bug fixing",
            "Framework and dependency updates",
            "Hosting and deployment support",
            "Website backups and uptime monitoring",
            "Ongoing technical troubleshooting",
        ],
    },
];


    const categories = useMemo(() => {
        const set = new Set(services.map((s) => s.category));
        return ["All", ...Array.from(set)];
    }, [services]);

    const filteredServices = useMemo(() => {
        return services.filter((service) => {
            const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
            const matchesSearch =
                service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [services, selectedCategory, searchQuery]);

    const handleWhatsAppInquiry = (serviceTitle: string) => {
        const message = encodeURIComponent(`Hi, I would like to request the service: "${serviceTitle}". Please let me know the next steps.`);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        window.open(whatsappUrl, "_blank");
        setModalService(null);
    };

    return (
        <section className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <div className="max-w-[88rem] mx-auto px-6 lg:px-16 py-20">
                <div className="mb-24">
                    <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                        Services
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mt-6">
                        Explore Our Website & Software Services
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row max-w-full my-10 gap-6 md:gap-10">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder={`Search ${services.length} services...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-sm 
                            text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition"
                        />
                    </div>

                    <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 flex items-center gap-2 scrollbar-none">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                                    selectedCategory === cat
                                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                                        : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-transparent"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services List Layout */}
                <div className="space-y-6">
                    {filteredServices.length === 0 ? (
                        <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 shadow-sm">
                            <Code className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-800">No services found</h3>
                            <p className="text-sm text-slate-500 mt-2">Try adjusting your search query or category filter.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xl transition shadow"
                            >
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        filteredServices.map((service) => (
                            <article
                                key={service.id}
                                onClick={() => setModalService(service)}
                                className="group relative overflow-hidden rounded-[32px]
                                bg-white p-8 lg:p-12 cursor-pointer transition-all duration-500 
                                hover:border-indigo-600/50 shadow-sm hover:shadow-indigo-600/10 border border-slate-200/80"
                            >
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-300/20 to-white/75 z-10 transition-opacity duration-700 group-hover:opacity-90" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                            const target = e.currentTarget;
                                            target.onerror = null;
                                            target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80";
                                        }}
                                        className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out opacity-10 group-hover:opacity-50"
                                    />
                                </div>

                                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[140px] font-black tracking-tighter text-slate-900/[0.03] select-none pointer-events-none group-hover:text-indigo-600/[0.06] transition-colors duration-500 z-0">
                                    {service.id}
                                </div>

                                <div className="relative z-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                                    <div className="space-y-3 lg:w-1/3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-slate-600 font-semibold px-2.5 py-1 rounded-md bg-slate-100 shadow-sm">
                                                {service.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                                            {service.title}
                                        </h2>
                                    </div>

                                    <div className="lg:w-1/3 space-y-3">
                                        <p className="text-slate-800 text-sm lg:text-base leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-end lg:w-auto">
                                        <div className="w-16 h-16 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-45 transition-all duration-500 shadow-sm">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    )}
                </div>

                {/* Modern Product Display Modal on Click */}
                {modalService && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300">
                        <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-2xl transform transition-all duration-300 animate-in fade-in zoom-in-95">

                            {/* Image & Title Header */}
                            <div className="relative h-64 overflow-hidden bg-slate-900">
                                <img
                                    src={modalService.image}
                                    alt={modalService.title}
                                    className="w-full h-full object-cover opacity-85"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setModalService(null)}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/60 text-white border border-white/20 flex items-center justify-center hover:bg-slate-900 transition shadow-md text-sm font-bold backdrop-blur-sm z-30"
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>

                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-indigo-300 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/60 mb-2">
                                        {modalService.category}
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                                        {modalService.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Product Bullet Points Display */}
                            <div className="p-6 md:p-8 space-y-6">
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
                                        Key Features & Deliverables
                                    </h4>
                                    <ul className="space-y-3">
                                        {modalService.bulletPoints.map((point, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-800 text-sm font-medium">
                                                <div className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-indigo-600">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <span className="capitalize">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                                    <button
                                        onClick={() => setModalService(null)}
                                        className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={() => handleWhatsAppInquiry(modalService.title)}
                                        className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition shadow-md shadow-indigo-600/20"
                                    >
                                        Request Service
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllServices;