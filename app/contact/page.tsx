"use client";

import { FormEvent, useState, useEffect } from "react";
import {
    FiArrowUpRight,
    FiClock,
    FiGlobe,
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "917003996182";
const EMAIL = "devyuth1@gmail.com";
const WHATSAPP = `https://wa.me/${PHONE}`;

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    // Set page title and meta description dynamically on the client side
    useEffect(() => {
        document.title = "Contact us for Website and Software Development";

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.setAttribute("name", "description");
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute(
            "content",
            "Reach out to Dev Youth for custom web development, project discussions, and worldwide services. Call, email, or chat with us on WhatsApp."
        );
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const subject = String(data.get("subject") || "Website enquiry");
        const message = String(data.get("message") || "");

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            "",
            message,
        ].join("\n");

        const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#171717]">
            {/* Hero */}
            <section
                className="relative flex min-h-[340px] items-end overflow-hidden bg-[#282828] bg-cover bg-center md:min-h-[390px] lg:min-h-[430px]"
                style={{
                    backgroundImage:
                        "url('https://goodmockups.com/wp-content/uploads/2026/05/Free-MacBook-Pro-On-Edge-Mockup-PSD-File.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-end justify-between gap-5 px-5 pb-8 sm:px-8 md:pb-10 lg:px-12">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
                            Let&apos;s start a conversation
                        </p>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[84px]">
                            Contact Us
                        </h1>
                    </div>

                    <div className="mb-1 flex shrink-0 items-center gap-3">
                        <a
                            href={`tel:+${PHONE}`}
                            aria-label="Call us"
                            title="Call us"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-600"
                        >
                            <FiPhone size={22} />
                        </a>

                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with us on WhatsApp"
                            title="Chat on WhatsApp"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1db954]"
                        >
                            <FaWhatsapp size={25} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Worldwide support strip */}
            <section className="border-b border-black/5 bg-white">
                <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between lg:px-12">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                            <FiGlobe size={27} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                World Wide Services
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 self-start rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 md:self-center">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-sm font-medium text-emerald-800">
                            Available 24/7
                        </span>
                    </div>
                </div>
            </section>

            {/* Contact content */}
            <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    {/* Left column */}
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                            Get in touch
                        </p>

                        <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            Let&apos;s talk about your next big idea.
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600">
                            Whether you need a custom-built solution, want to discuss a
                            project, or simply have a question, reach out. We&apos;ll help
                            you find the right way forward.
                        </p>

                        <div className="mt-9 space-y-4">
                            <a
                                href={`tel:+${PHONE}`}
                                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-orange-300 hover:shadow-md sm:p-5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-100">
                                    <FiPhone size={22} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-neutral-500">Call us directly</p>
                                    <p className="mt-1 break-all font-semibold sm:text-lg">
                                        +{PHONE}
                                    </p>
                                </div>
                                <FiArrowUpRight className="shrink-0 text-neutral-400 transition group-hover:text-orange-600" size={21} />
                            </a>

                            <a
                                href={`mailto:${EMAIL}`}
                                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-orange-300 hover:shadow-md sm:p-5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-100">
                                    <FiMail size={22} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-neutral-500">Send us an email</p>
                                    <p className="mt-1 break-all font-semibold sm:text-lg">
                                        {EMAIL}
                                    </p>
                                </div>
                                <FiArrowUpRight className="shrink-0 text-neutral-400 transition group-hover:text-orange-600" size={21} />
                            </a>

                            <a
                                href={WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-md sm:p-5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100">
                                    <FaWhatsapp size={24} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm text-neutral-500">
                                        Prefer instant messaging?
                                    </p>
                                    <p className="mt-1 font-semibold sm:text-lg">
                                        Chat on WhatsApp
                                    </p>
                                </div>
                                <FiArrowUpRight className="shrink-0 text-neutral-400 transition group-hover:text-emerald-600" size={21} />
                            </a>
                        </div>

                        {/* Service information */}
                        <div className="mt-8 flex gap-3 rounded-2xl bg-[#202020] p-5 text-white sm:p-6">
                            <FiClock className="mt-1 shrink-0 text-orange-400" size={23} />
                            <div>
                                <h3 className="font-semibold">We&apos;re here to help</h3>
                                <p className="mt-2 text-sm leading-6 text-white/65">
                                    We welcome enquiries about custom builds, project
                                    requirements, and worldwide supply. Contact us through
                                    your preferred channel to discuss your needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right column: contact form */}
                    <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                Send us a message
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-neutral-500">
                                Fill in the details below and tell us how we can help.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Full name <span className="text-orange-600">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your full name"
                                        required
                                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Email address <span className="text-orange-600">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    What&apos;s this about?
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    defaultValue=""
                                    required
                                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                                >
                                    <option value="" disabled>
                                        Select an enquiry type
                                    </option>
                                    <option value="Custom Build Enquiry">Custom build</option>
                                    <option value="Project Discussion">Project discussion</option>
                                    <option value="Worldwide Supply Enquiry">
                                        Worldwide supply
                                    </option>
                                    <option value="Business Partnership">
                                        Business partnership
                                    </option>
                                    <option value="General Enquiry">General enquiry</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Your message <span className="text-orange-600">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us a little about your requirements..."
                                    required
                                    className="w-full resize-y rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500/25 active:scale-[0.99]"
                            >
                                <FiSend size={18} />
                                {submitted ? "Open email app again" : "Send your enquiry"}
                                <FiArrowUpRight size={18} />
                            </button>

                            <p className="text-center text-xs leading-5 text-neutral-500">
                                Your message will be prepared in your default email
                                application and addressed to {EMAIL}.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12">
                <div className="mx-auto flex max-w-[1312px] flex-col gap-5 rounded-3xl bg-[#202020] p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
                            Have a quick question?
                        </p>
                        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                            Let&apos;s make things happen.
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-white/60">
                            Connect with us directly on WhatsApp for a quick conversation.
                        </p>
                    </div>

                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:bg-[#1db954]"
                    >
                        <FaWhatsapp size={23} />
                        Chat with us
                        <FiArrowUpRight size={19} />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-200 bg-white px-5 py-6 sm:px-8 lg:px-12">
                <div className="mx-auto flex max-w-[1312px] flex-col gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} World Wide Supply. All rights reserved.
                    </p>
                    <a
                        href={`mailto:${EMAIL}`}
                        className="inline-flex items-center gap-2 transition hover:text-orange-600"
                    >
                        <FiMapPin size={15} />
                        Contact our team
                    </a>
                </div>
            </footer>
        </main>
    );
}