
"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { templates, WHATSAPP_NUMBER } from "@/app/data/templates";
import Image, { type StaticImageData } from "next/image";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function TemplateShowcasePage({ params }: PageProps) {
    const { id } = use(params);

    const [selectedImage, setSelectedImage] = useState<
        string | StaticImageData | null
    >(null);

    const template = templates.find((t) => t.id === id) ?? notFound();
    
    useEffect(() => {
        if (!template) return;

        const SITE_URL = "https://devyuth.in";

        // Dynamic SEO title
        const title = `Buy ${template.name} Website | Ready-Made Website - Devyuth`;

        // Dynamic meta description
        const description = (
            `Buy ${template.name}, a professionally designed ${template.category} ready-made website. ${template.description} Explore and purchase your website from Devyuth.`
        )
            .replace(/\s+/g, " ")
            .slice(0, 160);

        // Dynamic canonical URL
        const canonicalURL =
            `${SITE_URL}/explore-ready-made-website/${template.id}`;

        // Helper function to create/update meta tags
        const setMeta = (
            attribute: string,
            key: string,
            content: string
        ) => {
            let element = document.querySelector(
                `meta[${attribute}="${key}"]`
            ) as HTMLMetaElement | null;

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attribute, key);
                document.head.appendChild(element);
            }

            element.content = content;
        };

        // 1. Page title
        document.title = title;

        // 2. Basic SEO metadata
        setMeta("name", "description", description);

        setMeta(
            "name",
            "keywords",
            [
                `buy ${template.name} website`,
                `${template.name} website template`,
                `${template.category} website`,
                `ready made ${template.category} website`,
                "buy ready made website",
                "ready made websites",
                "pre built websites",
                "website templates for sale",
                "affordable website templates",
                "professional website design",
                "buy website online",
                "Devyuth"
            ].join(", ")
        );

        setMeta("name", "robots", "index, follow");

        // 3. Canonical URL
        let canonical = document.querySelector(
            'link[rel="canonical"]'
        ) as HTMLLinkElement | null;

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }

        canonical.href = canonicalURL;

        // 4. Open Graph metadata
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("property", "og:url", canonicalURL);
        setMeta("property", "og:type", "product");
        setMeta("property", "og:site_name", "Devyuth");

        // 5. Twitter metadata
        setMeta("name", "twitter:card", "summary");
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);

        // 6. Product structured data
        const numericPrice = Number(
            String(template.price).replace(/[^0-9.]/g, "")
        );

        const productSchema = {
            "@context": "https://schema.org",
            "@type": "Product",

            name: template.name,
            description: template.description,
            category: template.category,

            brand: {
                "@type": "Brand",
                name: "Devyuth"
            },

            url: canonicalURL,

            ...(Number.isFinite(numericPrice) && numericPrice > 0
                ? {
                    offers: {
                        "@type": "Offer",
                        price: numericPrice.toFixed(2),
                        priceCurrency: "INR",
                        availability: "https://schema.org/InStock",
                        url: canonicalURL,
                        seller: {
                            "@type": "Organization",
                            name: "Devyuth"
                        }
                    }
                }
                : {})
        };

        // Add or update JSON-LD
        let schema = document.getElementById(
            "template-product-schema"
        ) as HTMLScriptElement | null;

        if (!schema) {
            schema = document.createElement("script");
            schema.id = "template-product-schema";
            schema.type = "application/ld+json";
            document.head.appendChild(schema);
        }

        schema.textContent = JSON.stringify(productSchema);

    }, [template]);

    // ==========================================
    // TEMPLATE VALIDATION
    // ==========================================

    if (!template) {
        notFound();
    }

    // ==========================================
    // WHATSAPP PURCHASE
    // ==========================================

    function handleBuyNow() {
        const message = [
            "Hi! I would like to buy this website template.",
            "",
            `Template Name: ${template.name}`,
            `Template ID: ${template.id}`,
            `Category: ${template.category}`,
            `Price: ${template.price}`,
            `Live Demo: ${template.demoUrl}`,
            "",
            "Please guide me with the purchase and customization details.",
        ].join("\n");

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;

        window.open(url, "_blank", "noopener,noreferrer");
    }

    return (
        <main
            className="min-h-screen bg-[#fbfaf7] px-5 py-27 text-[#27251f] sm:px-8 lg:px-16"
        >
            <div className="mx-auto max-w-[1440px]">
                <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">

                    {/* Left: Showcase Images and Videos */}
                    <div className="space-y-8 lg:col-span-7">
                        {template.gallery.map((media, idx) => (
                            <div
                                key={idx}
                                className="relative w-full overflow-hidden bg-[#eee9e0]"
                            >
                                {media.type === "image" ? (
                                    <button
                                        type="button"
                                        onClick={() => setSelectedImage(media.url)}
                                        className="block w-full cursor-zoom-in"
                                        aria-label={`View full-size ${template.name} image ${idx + 1}`}
                                    >
                                        <p className="font-lighter font-[cursive] font-stretch-75%">
                                            Preview - {idx + 1}
                                        </p>

                                        <Image
                                            src={media.url}
                                            alt={`${template.name} showcase detail ${idx + 1}`}
                                            width={1200}
                                            height={1600}
                                            sizes="(max-width: 1024px) 100vw, 58vw"
                                            className="block h-auto w-full object-contain border-2"
                                        />
                                    </button>
                                ) : (
                                    <video
                                        src={
                                            typeof media.url === "string"
                                                ? media.url
                                                : undefined
                                        }
                                        controls
                                        muted
                                        loop
                                        playsInline
                                        className="h-auto w-full"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Template Details and Purchase */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-10 space-y-6 border border-[#e9e5dd] bg-white p-8">

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#827d73]">
                                    {template.category}
                                </span>

                                <span className="font-mono text-[10px] text-[#aaa49a]">
                                    DESIGN {template.id}
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl">
                                {template.name}
                            </h1>

                            <p className="text-2xl font-light text-[#bb7257]">
                                {template.price}
                            </p>

                            <p className="text-sm leading-relaxed text-[#827d73]">
                                {template.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-3 border-y border-[#e9e5dd] py-6">
                                <h2 className="text-[11px] font-semibold uppercase tracking-wider text-[#27251f]">
                                    What&apos;s included:
                                </h2>

                                <ul className="space-y-2 text-xs text-[#827d73]">
                                    {template.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-[#bb7257]">
                                                ✓
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={handleBuyNow}
                                    className="w-full bg-[#bb7257] py-4 text-center text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#a56249]"
                                >
                                    Buy via WhatsApp ↗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Screen Image Viewer */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-black/95"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="fixed right-5 top-5 z-[101] flex h-11 w-11 items-center justify-center bg-white text-3xl text-black transition-colors hover:bg-gray-200"
                        aria-label="Close full-screen image"
                    >
                        &times;
                    </button>

                    {/* Full Image */}
                    <div className="flex min-h-full justify-center px-3 pb-6 pt-20 sm:px-6">
                        <Image
                            src={selectedImage}
                            alt={`${template.name} full-size showcase`}
                            width={1600}
                            height={2400}
                            sizes="100vw"
                            className="h-auto w-auto max-w-full object-contain"
                            onClick={(event) => event.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
