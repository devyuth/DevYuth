
"use client";

import Image from "next/image";
import { useState } from "react";

const schedule = [
    { days: "Monday - Tuesday", hours: "9:00 AM – 7:00 PM" },
    { days: "Wednesday - Thursday", hours: "9:00 AM – 7:00 PM" },
    { days: "Friday - Saturday", hours: "0:00 AM – 2:00 PM" },
];

const themes = [
    {
        name: "Ruby Red",
        background: "#790d0f",
        gradient:
            "radial-gradient(ellipse at 50% 48%, #c51b22 0%, #941014 45%, #680b0d 100%)",
        accent: "#c51b22",
    },
    {
        name: "Burgundy",
        background: "#430b19",
        gradient:
            "radial-gradient(ellipse at 50% 48%, #92223b 0%, #641328 48%, #350813 100%)",
        accent: "#92223b",
    },
    {
        name: "Dark Cherry",
        background: "#321015",
        gradient:
            "radial-gradient(ellipse at 50% 48%, #76202b 0%, #50121b 48%, #28080d 100%)",
        accent: "#76202b",
    },
    {
        name: "Crimson",
        background: "#780b20",
        gradient:
            "radial-gradient(ellipse at 50% 48%, #d7193f 0%, #970f2b 48%, #600819 100%)",
        accent: "#d7193f",
    },
];

export default function CTASection() {
    const [themeIndex, setThemeIndex] = useState(0);
    const theme = themes[themeIndex];

    return (
        <section
            className="relative isolate h-[80dvh] min-h-[560px] w-full overflow-hidden border border-black/20 text-white"
            style={{ backgroundColor: theme.background }}
        >
            {/* Dynamic red background */}
            <div
                className="absolute inset-0 -z-20 transition-colors duration-500"
                style={{ background: theme.gradient }}
            />

            {/* Oversized headline */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[12%] z-0 -translate-x-1/2 whitespace-nowrap"
            >
                <h2 className="text-[clamp(4.5rem,13vw,11.5rem)] font-semibold leading-none tracking-[-0.055em]">
                    We Open We Are
                </h2>
            </div>

            {/* Centered hero image */}
            <div className="pointer-events-none absolute inset-x-0 top-[4%] z-10 mx-auto h-[96%] w-full max-w-[510px]">
                <Image
                    src="/cta.png"
                    alt="Smiling woman in a red turtleneck"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 510px"
                    className="object-contain object-bottom"
                />
            </div>

            {/* WhatsApp CTA */}
            <a
                href="https://wa.me/917003996182?text=Hi%2C%20I%20want%20to%20discuss%20my%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 top-[58%] z-30 inline-flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/40 bg-white/15 px-6 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/25 sm:top-[62%] sm:px-7 sm:text-base"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.48 0 .12 5.36.12 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.9 11.9 0 0 0 5.83 1.49h.01c6.59 0 11.95-5.36 11.95-11.95a11.87 11.87 0 0 0-3.51-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.7.97.99-3.61-.23-.37a9.87 9.87 0 0 1-1.52-5.24c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.89 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.88 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                Let&apos;s Talk on WhatsApp
                <span aria-hidden="true">↗</span>
            </a>

            {/* Opening hours cards */}
            <div className="absolute inset-x-0 bottom-4 z-20 mx-auto grid w-[89.5%] max-w-[1024px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
                {schedule.map((item, index) => (
                    <div
                        key={item.days}
                        className={`flex min-h-[100px] flex-col items-center justify-center rounded-[22px] border border-white/45 px-3 py-4 text-center backdrop-blur-xl sm:min-h-[110px] lg:min-h-[120px] ${index === 1
                                ? "bg-white/[0.20] shadow-[0_0_35px_rgba(255,255,255,0.12)]"
                                : "bg-black/[0.07]"
                            }`}
                    >
                        <h3 className="text-base font-semibold leading-tight sm:text-lg lg:text-xl">
                            {item.days}
                        </h3>
                        <p className="mt-2 text-xs font-medium sm:text-sm">
                            {item.hours}
                        </p>
                    </div>
                ))}
            </div>

            {/* Square theme switcher */}
            <button
                type="button"
                onClick={() =>
                    setThemeIndex((current) => (current + 1) % themes.length)
                }
                aria-label={`Change background color. Current theme: ${theme.name}`}
                title={`Theme: ${theme.name}`}
                className="absolute right-5 top-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:rotate-6 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8 sm:top-8"
            >
                <span
                    className="h-5 w-5 rounded-md border border-white/60 shadow-inner"
                    style={{ backgroundColor: theme.accent }}
                />
            </button>
        </section>
    );
}
