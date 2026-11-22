"use client";

import '../../styles/why.components.css'
import { useState } from "react";


const faqs = [
    {
        question: "What website and software development services does DevYuth offer?",
        answer:
            "DevYuth provides professional website design and development, custom software development, web application development, e-commerce development, UI/UX design, and website maintenance services. We build digital solutions tailored to your business goals and requirements.",
    },
    {
        question: "What technologies do you use for website development?",
        answer:
            "We use modern web development technologies such as Next.js, React, TypeScript, Tailwind CSS, Node.js, and reliable database systems. We select the right technology stack based on your project's performance, functionality, security, and scalability requirements.",
    },
    {
        question: "How much does it cost to develop a website?",
        answer:
            "Website development costs depend on your design requirements, number of pages, features, integrations, and project complexity. Contact DevYuth with your requirements to receive a customized website development quote that suits your business needs and budget.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "A standard business website typically takes 1–3 weeks, depending on its size, functionality, and content readiness. E-commerce websites, custom web applications, and complex software projects may require additional development time.",
    },
    {
        question: "Will my website be mobile-friendly and SEO-friendly?",
        answer:
            "Yes. We build responsive, SEO-friendly websites with mobile-optimized layouts, semantic HTML, optimized metadata, clean URL structures, and performance-focused development. These practices help search engines understand your website and provide visitors with a better browsing experience.",
    },
    {
        question: "Can DevYuth redesign or improve my existing website?",
        answer:
            "Yes. We provide website redesign and improvement services to modernize your existing website, improve its user experience, optimize loading performance, enhance mobile responsiveness, and update its overall design and functionality.",
    },
    {
        question: "Do you provide website maintenance and ongoing support?",
        answer:
            "Yes. DevYuth provides website maintenance and technical support, including bug fixes, software updates, security improvements, performance optimization, and ongoing assistance to help keep your website running smoothly.",
    },
    {
        question: "Does DevYuth work with international clients, and how can I start a project?",
        answer:
            "Yes. Based in India, DevYuth works with businesses, startups, and entrepreneurs worldwide. To start a website or software development project, contact us through our website or WhatsApp and share your requirements. We'll discuss your goals, project scope, estimated timeline, and the right development approach.",
    },
];


export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                    {/* Left Content */}
                    <div className="lg:sticky lg:top-28 lg:h-fit">
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                            <span className="h-2 w-2 rounded-full bg-blue-600" />
                            Got Questions?
                        </span>

                        <h2 className="mt-7 text-4xl font-bold leading-[1.15] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl Georgia">
                            Everything you need to{" "}
                            <span className="text-blue-600">
                                know.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-8 text-gray-500">
                            From website development to custom software solutions,
                            find answers to questions about our services and process.
                        </p>

                        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                            <p className="text-lg font-semibold text-gray-900">
                                Still have questions?
                            </p>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Can&apos;t find the answer you&apos;re looking for? Let&apos;s talk
                                about your project.
                            </p>

                            <a
                                href="/contact"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3"
                            >
                                Get in touch
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Right FAQ */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`group rounded-2xl border transition-all duration-300 ${isOpen
                                        ? "border-blue-200 bg-blue-50/40 shadow-sm"
                                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                        className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`hidden text-sm font-medium sm:block ${isOpen ? "text-blue-600" : "text-gray-400"
                                                    }`}
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <h3
                                                className={`text-base font-semibold leading-7 transition-colors sm:text-lg ${isOpen
                                                    ? "text-blue-700"
                                                    : "text-gray-900 group-hover:text-blue-600"
                                                    }`}
                                            >
                                                {faq.question}
                                            </h3>
                                        </div>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                                                ? "rotate-45 bg-blue-600 text-white"
                                                : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                                                }`}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M12 5v14M5 12h14"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    <div
                                        id={`faq-answer-${index}`}
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        aria-hidden={!isOpen}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="border-t border-blue-100/70 px-5 pb-6 pt-4 text-sm leading-7 text-gray-600 sm:px-6 sm:pl-[4.25rem] sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
