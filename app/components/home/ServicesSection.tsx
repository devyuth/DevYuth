"use client";
import '../../styles/services.components.css'
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
    ArrowDownRight,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    Code2,
    Monitor,
    Palette,
    ShoppingBag,
    Workflow,
    Wrench,
    type LucideIcon,
} from "lucide-react";

type Service = {
    id: string;
    number: string;
    title: string;
    short: string;
    description: string;
    features: string[];
    technologies: string[];
    timeline: string;
    pricing: string;
    bestFor: string;
    deliverables: string;
    icon: LucideIcon;
    image: string;
    imageAlt: string;
};

const services: Service[] = [
    {
        id: "web-development",
        number: "01",
        title: "Website Development",
        short: "High-performance websites engineered to communicate clearly and drive conversions.",
        description:
            "We design and develop fast, responsive websites that communicate your brand clearly, build trust, and turn visitors into long-term clients.",
        features: [
            "Custom responsive interface design",
            "SEO-optimized architecture & metadata",
            "CMS & headless API integrations",
            "Core Web Vitals & speed optimization",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        timeline: "2–4 weeks",
        pricing: "Fixed-price packages",
        bestFor: "Startups and growing businesses",
        deliverables: "Production-ready website, source code, and deployment setup",
        icon: Monitor,
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Website analytics dashboard interface",
    },
    {
        id: "software-development",
        number: "02",
        title: "Software Development",
        short: "Custom software architecture designed specifically around your operational workflow.",
        description:
            "From internal business tools to complex digital platforms, we build dependable software around your workflows, requirements, and long-term goals.",
        features: [
            "Bespoke backend & enterprise logic",
            "Scalable database & schema design",
            "Third-party REST & GraphQL integrations",
            "Role-based access control & security",
        ],
        technologies: ["TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
        timeline: "4–10 weeks",
        pricing: "Milestone-based billing",
        bestFor: "Businesses with custom workflow needs",
        deliverables: "Full-stack application, API infrastructure, and documentation",
        icon: Code2,
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Software development code interface",
    },
    {
        id: "ui-ux-design",
        number: "03",
        title: "UI/UX Design",
        short: "Intuitive user interfaces and design systems built for seamless digital experiences.",
        description:
            "We turn ideas into clear, considered interfaces through thoughtful layouts, intuitive interactions, and a consistent visual design system.",
        features: [
            "Wireframing & interactive prototyping",
            "Design systems & component libraries",
            "User journey mapping & research",
            "Responsive layout engineering",
        ],
        technologies: ["Figma", "Design Systems", "Prototyping"],
        timeline: "1–3 weeks",
        pricing: "Project-based pricing",
        bestFor: "New product launches & UI redesigns",
        deliverables: "Complete Figma source files, interactive prototype, design kit",
        icon: Palette,
        image:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Interface design and visual prototyping",
    },
    {
        id: "ecommerce",
        number: "04",
        title: "E-Commerce Solutions",
        short: "Conversion-optimized storefronts that turn visitors into repeat buyers.",
        description:
            "We create straightforward shopping experiences that help customers discover products, check out with confidence, and return to buy again.",
        features: [
            "Custom catalog & product pages",
            "Seamless checkout & payment gateways",
            "Inventory & order management sync",
            "Performance & mobile checkout optimization",
        ],
        technologies: ["Next.js", "Shopify", "Stripe API"],
        timeline: "3–5 weeks",
        pricing: "Fixed-price packages",
        bestFor: "Retail brands and online merchants",
        deliverables: "Fully configured storefront, gateway setup, admin onboarding",
        icon: ShoppingBag,
        image:
            "https://images.unsplash.com/photo-1556742049-0a67dd35e729?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Online shopping experience dashboard",
    },
    {
        id: "web-applications",
        number: "05",
        title: "Web Applications",
        short: "Powerful dashboards, client portals, and web platforms built for reliability.",
        description:
            "We build interactive web applications, dashboards, customer portals, and digital platforms that make everyday operations smooth and efficient.",
        features: [
            "Interactive data visualization",
            "Secure auth & session management",
            "Real-time update architectures",
            "Custom analytics & reporting",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
        timeline: "4–8 weeks",
        pricing: "Milestone-based billing",
        bestFor: "SaaS platforms & enterprise tools",
        deliverables: "Production web application with connected backend",
        icon: Workflow,
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Web application dashboard visualization",
    },
    {
        id: "maintenance",
        number: "06",
        title: "Maintenance & Support",
        short: "Proactive care to keep your software fast, updated, and secure around the clock.",
        description:
            "We keep websites and applications secure, updated, and performing optimally through continuous monitoring, updates, and fast issue resolution.",
        features: [
            "Security patches & dependency updates",
            "Speed audits & performance tuning",
            "24/7 uptime & health monitoring",
            "Priority bug resolution & support",
        ],
        technologies: ["CI/CD Pipelines", "Monitoring", "Vercel / AWS"],
        timeline: "Ongoing monthly basis",
        pricing: "Monthly retainer",
        bestFor: "Existing app & website owners",
        deliverables: "Monthly maintenance reports, regular updates, and instant fixes",
        icon: Wrench,
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Website performance and security monitor",
    },
];

const WHATSAPP_NUMBER = "917003996182";
const FEATURED_COUNT = 3;
const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesSection() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const reduceMotion = useReducedMotion();

    const selectedService =
        services.find((service) => service.id === selectedId) ?? null;

    const featuredServices = services.slice(0, FEATURED_COUNT);
    const duration = reduceMotion ? 0 : 0.55;

    function getWhatsAppUrl(service: Service) {
        const message = [
            "Hi! I'm interested in your services.",
            "",
            `Service: ${service.title}`,
            `Timeline: ${service.timeline}`,
            `Pricing: ${service.pricing}`,
            "",
            "I'd like to discuss my project.",
        ].join("\n");

        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    return (
        <section id="services" className="bg-white py-24 text-slate-900 sm:py-32">
            <div className="mx-auto w-[90%] max-w-[1400px]">
                {/* Editorial Header */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease }}
                    className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_340px] md:items-end"
                >
                    <div>
                        <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Capabilities
                        </span>
                        <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.98] tracking-tight services-home-title">
                            Digital products,
                            <br />
                            <span className="text-slate-400">built properly.</span>
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-500">
                        Select any capability below to inspect deliverables, tech stack, and typical timelines.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait" initial={false}>
                    {!selectedService ? (
                        /* EDITORIAL INDEX ROWS */
                        <motion.div
                            key="service-list"
                            initial={reduceMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: duration * 0.65 }}
                        >
                            <div className="border-t border-slate-200">
                                {featuredServices.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.35, delay: index * 0.05, ease }}
                                        onClick={() => setSelectedId(service.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault();
                                                setSelectedId(service.id);
                                            }
                                        }}
                                        className="group relative grid cursor-pointer grid-cols-1 gap-4 border-b border-slate-200 py-8 transition-colors duration-300 hover:bg-slate-50/70 sm:px-4 md:grid-cols-[72px_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:py-10"
                                    >
                                        {/* Index Number */}
                                        <span className="font-mono text-xs font-medium tracking-wider text-slate-400 transition-colors group-hover:text-slate-900">
                                            /{service.number}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.75rem]">
                                            {service.title}
                                        </h3>

                                        {/* Concise Description */}
                                        <p className="max-w-md text-sm leading-relaxed text-slate-500 transition-colors group-hover:text-slate-700">
                                            {service.short}
                                        </p>

                                        {/* Timeline + Minimal Action */}
                                        <div className="mt-2 flex items-center justify-between gap-6 md:mt-0 md:justify-end">
                                            <span className="text-xs font-medium text-slate-400">
                                                {service.timeline}
                                            </span>
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                                                <ArrowUpRight
                                                    size={16}
                                                    strokeWidth={1.75}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* View More Link -> /services */}
                            <div className="mt-10 flex items-center justify-between">
                                <span className="text-xs text-slate-400">
                                    Core capabilities — 01 to 0{FEATURED_COUNT}
                                </span>

                                <Link
                                    href="/services"
                                    className="group inline-flex items-center gap-2 border-b border-slate-900 pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900 transition-opacity hover:opacity-70"
                                >
                                    <span>View all services</span>
                                    <ArrowRight
                                        size={14}
                                        strokeWidth={2}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    ) : (
                        /* SERVICE DETAIL SPLIT VIEW */
                        <motion.div
                            key="service-detail"
                            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: duration * 0.7, ease }}
                            className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
                        >
                            {/* Left Column: Story & Specs */}
                            <div className="flex flex-col">
                                <button
                                    type="button"
                                    onClick={() => setSelectedId(null)}
                                    className="mb-12 flex w-fit items-center gap-2 text-xs font-semibold text-slate-600 transition-colors hover:text-slate-900 sm:mb-16"
                                >
                                    <ArrowLeft size={15} />
                                    Back to services
                                </button>

                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={selectedService.id}
                                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: duration * 0.6, ease }}
                                    >
                                        <div className="mb-4 flex items-center gap-3">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                                                <selectedService.icon size={18} strokeWidth={1.75} />
                                            </span>
                                            <span className="text-xs font-semibold tabular-nums tracking-wider text-slate-400">
                                                SERVICE / {selectedService.number}
                                            </span>
                                        </div>

                                        <h3 className="max-w-xl text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[1.02] tracking-tight">
                                            {selectedService.title}
                                            <span className="text-slate-400">.</span>
                                        </h3>

                                        <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                                            {selectedService.description}
                                        </p>

                                        <div className="mt-10 border-t border-slate-200">
                                            {[
                                                {
                                                    label: "Typical timeline",
                                                    value: selectedService.timeline,
                                                },
                                                {
                                                    label: "Pricing model",
                                                    value: selectedService.pricing,
                                                },
                                                {
                                                    label: "Best suited for",
                                                    value: selectedService.bestFor,
                                                },
                                            ].map((item) => (
                                                <div
                                                    key={item.label}
                                                    className="grid grid-cols-[120px_1fr] gap-4 border-b border-slate-200 py-4 sm:grid-cols-[140px_1fr]"
                                                >
                                                    <span className="text-xs text-slate-400">
                                                        {item.label}
                                                    </span>
                                                    <span className="text-sm font-medium leading-6 text-slate-900">
                                                        {item.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Right Column: Visual, Scope & Deliverables */}
                            <motion.div
                                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration,
                                    delay: reduceMotion ? 0 : 0.08,
                                    ease,
                                }}
                                className="flex min-w-0 flex-col rounded-3xl bg-slate-50/80 p-6 sm:p-8"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={selectedService.id}
                                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: duration * 0.6, ease }}
                                        className="flex h-full flex-col"
                                    >
                                        <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200">
                                            <motion.img
                                                initial={reduceMotion ? false : { scale: 1.035 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.8, ease }}
                                                src={selectedService.image}
                                                alt={selectedService.imageAlt}
                                                className="h-full w-full object-cover"
                                            />

                                            <div className="absolute inset-0 bg-slate-900/[0.03]" />

                                            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] shadow-sm">
                                                <selectedService.icon size={14} strokeWidth={1.75} />
                                                {selectedService.number} / 06
                                            </div>
                                        </div>

                                        <div className="border-b border-slate-200/80 pb-6">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                                The scope
                                            </span>

                                            <h4 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                                                What we deliver.
                                            </h4>

                                            <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-600">
                                                {selectedService.deliverables}
                                            </p>
                                        </div>

                                        <div className="grid gap-8 py-6 sm:grid-cols-2">
                                            <div>
                                                <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900">
                                                    Included features
                                                </h5>

                                                <ul className="space-y-3">
                                                    {selectedService.features.map((feature) => (
                                                        <li
                                                            key={feature}
                                                            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                                                        >
                                                            <Check
                                                                size={16}
                                                                strokeWidth={1.75}
                                                                className="mt-0.5 shrink-0 text-emerald-600"
                                                            />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900">
                                                    Tools & tech stack
                                                </h5>

                                                <ul className="space-y-2.5">
                                                    {selectedService.technologies.map((tech) => (
                                                        <li
                                                            key={tech}
                                                            className="border-b border-slate-200/60 pb-2.5 text-sm font-medium text-slate-700"
                                                        >
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-6 border-t border-slate-200/80 pt-6">
                                            <a
                                                href={getWhatsAppUrl(selectedService)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex min-h-14 items-center justify-between gap-4 rounded-xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-emerald-700 sm:px-6"
                                            >
                                                <span>Discuss your project on WhatsApp</span>
                                                <span className="flex items-center gap-3">
                                                    <span className="hidden text-xs text-white/80 sm:inline">
                                                        {selectedService.title}
                                                    </span>
                                                    <ArrowRight
                                                        size={17}
                                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                                    />
                                                </span>
                                            </a>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const currentIndex = featuredServices.findIndex(
                                                        (service) => service.id === selectedService.id
                                                    );
                                                    const nextService =
                                                        featuredServices[
                                                            (currentIndex + 1) % featuredServices.length
                                                        ];

                                                    setSelectedId(nextService.id);
                                                }}
                                                className="mt-6 flex w-full items-center justify-between border-t border-slate-200/60 pt-4 text-left text-xs font-medium text-slate-500 transition-colors hover:text-slate-900"
                                            >
                                                <span>Next service</span>
                                                <span className="flex items-center gap-2">
                                                    {
                                                        featuredServices[
                                                            (featuredServices.findIndex(
                                                                (service) =>
                                                                    service.id === selectedService.id
                                                            ) +
                                                                1) %
                                                            featuredServices.length
                                                        ].title
                                                    }
                                                    <ArrowDownRight size={15} />
                                                </span>
                                            </button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Closing Callout Statement */}
                <div className="mt-20 border-t border-slate-200 pt-8 sm:mt-28 sm:pt-10">
                    <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                        <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Have a project in mind?
                            </span>
                            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ctaWhatsapp">
                                Let&apos;s make it useful.
                            </p>
                        </div>

                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                "Hi! I'd like to discuss a project with your team."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex w-fit items-center gap-4 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                        >
                            Start a conversation on WhatsApp
                            <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}