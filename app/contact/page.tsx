import type { Metadata } from "next";
import {
    FiArrowUpRight,
    FiClock,
    FiGlobe,
    FiMail,
    FiMapPin,
    FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "917003996182";
const EMAIL = "devyuth1@gmail.com";
const WHATSAPP = `https://wa.me/${PHONE}`;

export const metadata: Metadata = {
    title: "Contact us",
    description:
        "Reach out to Dev Youth for custom web development, project discussions, and worldwide services. Call, email, or chat with us on WhatsApp.",
};

export default function ContactPage() {
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
            {/* Worldwide support strip */}
            <section className="border-b border-neutral-200 bg-white">
                <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between lg:px-12">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-100 bg-sky-50 text-sky-600">
                            <FiGlobe size={26} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                                World Wide Services
                            </h2>
                            <p className="mt-0.5 text-sm text-neutral-500">
                                Remote-first web &amp; software engineering across time zones
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 self-start rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 md:self-center">
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
            <section className="bg-white">
                <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                        <div className="lg:col-span-7">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                                Get in touch
                            </p>

                            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                                Let&apos;s talk about your next big idea.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
                                Whether you need a custom-built solution, want to discuss a
                                project, or simply have a question, reach out. We&apos;ll help
                                you find the right way forward.
                            </p>

                            {/* Service information card on clean white */}
                            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-orange-600">
                                    <FiClock size={21} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900">
                                        We&apos;re here to help
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-6 text-neutral-600">
                                        We welcome enquiries about custom builds, project
                                        requirements, and worldwide supply. Contact us through
                                        your preferred channel to discuss your needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Clean studio / workspace image */}
                        <div className="lg:col-span-5">
                            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                                <img
                                    src="https://images.pexels.com/photos/6006082/pexels-photo-6006082.jpeg"
                                    alt="Minimalist white desk with laptop in a bright studio"
                                    className="h-72 w-full object-cover sm:h-80 lg:h-[360px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Direct Contact Channels Grid */}
                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        <a
                            href={`tel:+${PHONE}`}
                            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-orange-300 hover:shadow-md sm:p-6"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-100">
                                <FiPhone size={22} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm text-neutral-500">Call us directly</p>
                                <p className="mt-1 break-all font-semibold text-neutral-900 sm:text-lg">
                                    +{PHONE}
                                </p>
                            </div>
                            <FiArrowUpRight
                                className="shrink-0 text-neutral-400 transition group-hover:text-orange-600"
                                size={21}
                            />
                        </a>

                        <a
                            href={`mailto:${EMAIL}`}
                            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-orange-300 hover:shadow-md sm:p-6"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-100">
                                <FiMail size={22} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm text-neutral-500">Send us an email</p>
                                <p className="mt-1 break-all font-semibold text-neutral-900 sm:text-lg">
                                    {EMAIL}
                                </p>
                            </div>
                            <FiArrowUpRight
                                className="shrink-0 text-neutral-400 transition group-hover:text-orange-600"
                                size={21}
                            />
                        </a>

                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md sm:p-6"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100">
                                <FaWhatsapp size={24} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm text-neutral-500">
                                    Prefer instant messaging?
                                </p>
                                <p className="mt-1 font-semibold text-neutral-900 sm:text-lg">
                                    Chat on WhatsApp
                                </p>
                            </div>
                            <FiArrowUpRight
                                className="shrink-0 text-neutral-400 transition group-hover:text-emerald-600"
                                size={21}
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-white px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12">
                <div className="mx-auto flex max-w-[1312px] flex-col gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
                            Have a quick question?
                        </p>
                        <h2 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">
                            Let&apos;s make things happen.
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-neutral-600">
                            Connect with us directly on WhatsApp for a quick conversation.
                        </p>
                    </div>

                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-[#1db954]"
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