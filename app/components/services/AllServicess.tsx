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
    const WHATSAPP_NUMBER = "919876543210";

    const services: Service[] = [
        {
            id: "1",
            title: "Custom Website Development",
            category: "Development",
            description:
                "Custom-built websites tailored to your brand, business goals, and unique requirements using modern web technologies.",
            deliverable:
                "A custom, responsive website designed around your business needs.",
            image:
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Custom website design and development",
                "Responsive layouts for all devices",
                "Modern frontend and backend integration",
                "SEO-friendly structure",
                "Easy content management options",
            ],
        },
        {
            id: "2",
            title: "Instant Website Deployment",
            category: "Deployment",
            description:
                "Get your existing website online quickly with hosting configuration, domain connection, SSL setup, and production deployment.",
            deliverable:
                "A live website deployed to your hosting platform with domain and SSL configuration.",
            image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Fast deployment to Vercel or Netlify",
                "Custom domain connection",
                "SSL certificate configuration",
                "Production environment setup",
                "Deployment troubleshooting",
            ],
        },
        {
            id: "3",
            title: "SEO Optimization",
            category: "Marketing",
            description:
                "Improve website discoverability through technical SEO, on-page optimization, structured data, and search engine best practices.",
            deliverable:
                "An SEO-optimized website with technical improvements and search indexing setup.",
            image:
                "https://images.unsplash.com/photo-1432888622747-4eb9a8efec07?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Technical SEO audits",
                "Metadata and heading optimization",
                "XML sitemap and robots.txt setup",
                "Schema markup implementation",
                "Canonical URLs and indexing checks",
            ],
        },
        {
            id: "4",
            title: "Website & Software Bug Fixing",
            category: "Maintenance",
            description:
                "Diagnose and fix frontend, backend, API, database, and software errors to restore functionality and improve reliability.",
            deliverable:
                "A diagnosed and tested fix for agreed website or software issues.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "JavaScript and TypeScript error fixes",
                "React and Next.js debugging",
                "Backend and API troubleshooting",
                "Database query error resolution",
                "Regression testing after fixes",
            ],
        },
        {
            id: "5",
            title: "SaaS Product Development",
            category: "SaaS",
            description:
                "Build subscription-based software products with user accounts, dashboards, billing, permissions, and scalable application architecture.",
            deliverable:
                "A working SaaS application built around your product requirements.",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Multi-user application architecture",
                "Subscription and billing integration",
                "User and admin dashboards",
                "Authentication and access control",
                "Scalable database and API design",
            ],
        },
        {
            id: "6",
            title: "Landing Page Development",
            category: "Development",
            description:
                "Create high-converting landing pages for products, services, advertisements, launches, and lead generation campaigns.",
            deliverable:
                "A responsive landing page with clear calls to action and conversion tracking options.",
            image:
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Conversion-focused page layouts",
                "Responsive mobile-first design",
                "Lead capture form integration",
                "Fast loading and optimized assets",
                "Analytics and event tracking options",
            ],
        },
        {
            id: "7",
            title: "Static Website Development",
            category: "Development",
            description:
                "Build lightweight websites for portfolios, personal brands, small businesses, documentation, and informational websites.",
            deliverable:
                "A fast, responsive static website ready for hosting.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Clean HTML, CSS, and JavaScript",
                "Lightweight and fast-loading pages",
                "Responsive layouts",
                "Basic technical SEO",
                "Simple and affordable hosting setup",
            ],
        },
        {
            id: "8",
            title: "AI Integration & Chatbots",
            category: "Artificial Intelligence",
            description:
                "Integrate AI models into websites and applications for conversational support, content assistance, document search, and intelligent workflows.",
            deliverable:
                "An AI-powered feature or chatbot integrated into your application.",
            image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "OpenAI and Gemini API integration",
                "AI chatbot interfaces",
                "Knowledge-base and document search",
                "Secure server-side API handling",
                "Usage limits and error management",
            ],
        },
        {
            id: "9",
            title: "Business Workflow Automation",
            category: "Automation",
            description:
                "Automate repetitive business operations, notifications, data transfers, and task management with reliable integrations.",
            deliverable:
                "An automated workflow that reduces repetitive manual work.",
            image:
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Automated email notifications",
                "CRM and spreadsheet synchronization",
                "Scheduled jobs and background tasks",
                "Webhook-based integrations",
                "Workflow logging and error alerts",
            ],
        },
        {
            id: "10",
            title: "Database Management & Optimization",
            category: "Database",
            description:
                "Design, maintain, secure, and optimize application databases for reliable data storage, efficient queries, and future growth.",
            deliverable:
                "A well-structured, maintained, and performance-optimized database.",
            image:
                "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "PostgreSQL and MySQL management",
                "Schema design and migrations",
                "Slow query analysis and optimization",
                "Backup and recovery planning",
                "Database access and security controls",
            ],
        },
        {
            id: "11",
            title: "Website Hosting & Configuration",
            category: "Infrastructure",
            description:
                "Configure hosting environments, connect domains, set environment variables, and prepare websites for reliable production use.",
            deliverable:
                "A configured hosting environment with a deployed website.",
            image:
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Vercel, Netlify, and cloud hosting setup",
                "Domain and DNS configuration",
                "Environment variable management",
                "SSL and HTTPS configuration",
                "Production build troubleshooting",
            ],
        },
        {
            id: "12",
            title: "Website Redesign & Modernization",
            category: "Design",
            description:
                "Transform outdated websites into modern digital experiences with improved usability, accessibility, responsive layouts, and maintainable code.",
            deliverable:
                "A redesigned website with a modern interface and improved usability.",
            image:
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Modern UI and UX improvements",
                "Mobile and tablet optimization",
                "Improved navigation and page structure",
                "Accessibility improvements",
                "SEO-aware migration planning",
            ],
        },
        {
            id: "13",
            title: "Website Speed Optimization",
            category: "Performance",
            description:
                "Improve loading speed and responsiveness through code optimization, caching, image compression, and Core Web Vitals improvements.",
            deliverable:
                "A measured website performance improvement with before-and-after testing.",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Core Web Vitals analysis",
                "Image and asset optimization",
                "Code splitting and lazy loading",
                "Caching and CDN configuration",
                "Lighthouse performance testing",
            ],
        },
        {
            id: "14",
            title: "REST API Development",
            category: "Backend",
            description:
                "Develop secure, maintainable REST APIs that connect frontend applications, databases, external platforms, and business systems.",
            deliverable:
                "A documented REST API with validated endpoints and appropriate access controls.",
            image:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Node.js and Express API development",
                "Request validation and error handling",
                "Authentication and authorization",
                "API documentation",
                "Rate limiting and endpoint testing",
            ],
        },
        {
            id: "15",
            title: "Third-Party API Integration",
            category: "Integration",
            description:
                "Connect your website or application to external services for payments, messaging, maps, analytics, CRM, and business operations.",
            deliverable:
                "A tested integration connecting your application to the required external service.",
            image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Payment and email API integration",
                "CRM and marketing platform connections",
                "Webhook configuration",
                "API credential security",
                "Retry logic and error monitoring",
            ],
        },
        {
            id: "16",
            title: "Authentication & User Management",
            category: "Security",
            description:
                "Implement secure account creation, login, password recovery, email verification, social sign-in, and role-based permissions.",
            deliverable:
                "A tested authentication system with user management and access controls.",
            image:
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Secure registration and login",
                "Password reset and email verification",
                "Google and GitHub sign-in options",
                "Role-based access control",
                "Session and authentication security",
            ],
        },
        {
            id: "17",
            title: "E-commerce Website Development",
            category: "E-Commerce",
            description:
                "Create online stores with product catalogs, cart functionality, checkout, order management, and payment integrations.",
            deliverable:
                "A functional online store with product management and configured checkout.",
            image:
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Product and category management",
                "Shopping cart and checkout",
                "Payment gateway integration",
                "Order and inventory tracking",
                "Responsive storefront design",
            ],
        },
        {
            id: "18",
            title: "Admin Panel & Dashboard Development",
            category: "Dashboard",
            description:
                "Build custom administrative interfaces to manage users, content, orders, inventory, reports, and application settings.",
            deliverable:
                "A functional admin dashboard tailored to your application's workflows.",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "User and role management",
                "Data tables, filters, and search",
                "Charts and KPI summaries",
                "CRUD operations and form validation",
                "Export and reporting features",
            ],
        },
        {
            id: "19",
            title: "Website Maintenance & Technical Support",
            category: "Support",
            description:
                "Keep websites and applications reliable with regular updates, troubleshooting, dependency maintenance, backups, and technical support.",
            deliverable:
                "An agreed maintenance plan covering updates, monitoring, and technical fixes.",
            image:
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Bug fixes and troubleshooting",
                "Dependency and framework updates",
                "Backup verification",
                "Uptime and error monitoring",
                "Ongoing technical assistance",
            ],
        },
        {
            id: "20",
            title: "Website Migration & Framework Upgrades",
            category: "Infrastructure",
            description:
                "Move websites and applications between hosting providers or upgrade legacy projects to modern frameworks with careful testing.",
            deliverable:
                "A migrated or upgraded application with verified functionality and deployment.",
            image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
            bulletPoints: [
                "Hosting and domain migration",
                "Framework and dependency upgrades",
                "Database and asset transfer",
                "Redirect mapping and SEO checks",
                "Post-migration testing and verification",
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