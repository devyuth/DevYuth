"use client";

import { ArrowDown, Clock3, Phone } from "lucide-react";
import { ServiceHeroLetsdicuss } from "../ui/WhatsappBtn";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden">

            {/* Background Image */}
            <Image
                src="/serviceHero.jpeg"
                alt="Professional software development services"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-16">

                <div className="h-full flex flex-col justify-center">

                    <div className="max-w-4xl">

                        <h2 className="text-white font-black leading-[1.1] tracking-tight text-3xl md:text-5xl lg:text-6xl">
                            Website & Software Development Services for Growing Businesses
                        </h2>

                        <p className="mt-10 text-gray-300 text-sm max-w-xl leading-relaxed">
                            From professional business websites and e-commerce stores to custom software and web applications, 
                            DevYuth provides digital development services designed around your business needs. 
                        </p>

                        
                        <ServiceHeroLetsdicuss />
                    </div>

                </div>

                {/* Scroll Text */}
                <div 
                    className="hidden lg:block absolute 
                    right-8 top-1/2 -translate-y-1/2">
                    <span
                        className="
                        text-white/70
                        tracking-[0.3em]
                        text-sm
                        [writing-mode:vertical-rl]
                    "
                    >
                        Let&apos;s Get Started
                    </span>
                </div>

                {/* Bottom Bar */}
                <div 
                    className="absolute left-8 right-8 
                    bottom-10 flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <div className="w-24 h-1 bg-white rounded-full" />
                    </div>

                    <div className="hidden lg:flex items-center gap-16 text-white">

                        <div className="flex items-center gap-4">
                            <Phone size={20} />
                            <a href="tel:+91 7384727167">+91 70039 96182</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <Clock3 size={20} />
                            <span>MON - FRI | 9AM - 6PM</span>
                        </div>

                    </div>

                    <a href="#cta">
                        <button className="text-white">
                            <ArrowDown size={60} strokeWidth={1.5} />
                        </button>
                    </a>

                </div>

            </div>

        </section>
    );
}