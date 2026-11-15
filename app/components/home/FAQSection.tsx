
"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We offer custom website development, software development, web applications, UI/UX design, and SEO-friendly digital solutions to help businesses grow online.",
    },
    {
        question: "What technologies do you use?",
        answer:
            "We work with modern technologies like Next.js, React.js, Tailwind CSS, TypeScript, and other powerful tools to build fast, secure, and scalable digital products.",
    },
    {
        question: "How much does a website cost?",
        answer:
            "The cost depends on your project requirements, design complexity, and functionality. Contact us with your ideas, and we'll provide a tailored quote that fits your budget.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "A standard business website generally takes 1–3 weeks. More complex websites and custom software applications may require additional development time.",
    },
    {
        question: "Will my website be SEO-friendly?",
        answer:
            "Yes! We follow modern SEO practices, including optimized metadata, semantic HTML, fast loading speeds, mobile responsiveness, structured data, and clean website architecture.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Absolutely. We can transform your existing website with a fresh design, improved performance, modern technologies, and a better user experience.",
    },
    {
        question: "Do you provide ongoing maintenance?",
        answer:
            "Yes. We provide ongoing support, bug fixes, security updates, performance improvements, and website maintenance to keep your digital products running smoothly.",
    },
    {
        question: "How do I start a project with you?",
        answer:
            "Simply reach out through our contact page and share your project idea. We'll discuss your goals, requirements, timeline, and the best approach to bring your vision to life.",
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

                        <h2 className="mt-7 text-4xl font-bold leading-[1.15] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
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
