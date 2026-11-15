"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Rahul Sharma",
        role: "Founder, Nova Studio",
        initials: "RS",
        review:
            "The team understood our vision and delivered a clean, professional website that represents our brand perfectly.",
    },
    {
        name: "Priya Mehta",
        role: "Business Owner",
        initials: "PM",
        review:
            "A smooth experience from start to finish. Communication was clear, and the final result matched our expectations.",
    },
    {
        name: "Arjun Das",
        role: "Director, Northline",
        initials: "AD",
        review:
            "Professional work, thoughtful design, and attention to detail. The entire process was straightforward.",
    },
];

// Duplicate for continuous marquee loop
const marqueeItems = [...reviews, ...reviews, ...reviews];

export default function InfiniteTestimonials() {
    return (
        <section className="bg-white py-20 md:py-28 overflow-hidden">
            {/* Infinite Marquee Wrapper */}
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                    className="flex shrink-0 gap-6 pr-6 
                    hover:[animation-play-state:paused]"
                >
                    {marqueeItems.map((review, index) => (
                        <div
                            key={index}
                            className="w-[320px] md:w-[380px] shrink-0 
                            flex flex-col justify-between rounded-2xl 
                            border border-neutral-200 bg-white p-6 
                            shadow-sm transition hover:shadow-lg"
                        >
                            <div>
                                <div className="mb-5 flex items-center justify-between">
                                    <div className="flex gap-1 text-amber-500">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" strokeWidth={1.5} />
                                        ))}
                                    </div>
                                    <Quote size={20} strokeWidth={1.5} className="text-neutral-300" />
                                </div>
                                <p className="text-sm leading-6 text-neutral-600 mb-6">
                                    “{review.review}”
                                </p>
                            </div>

                            <div className="flex items-center gap-3 
                            pt-4 border-t border-neutral-100">
                                <div className="flex h-9 w-9 shrink-0 items-center 
                                justify-center rounded-full bg-neutral-100 
                                text-xs font-semibold text-neutral-800">
                                    {review.initials}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold 
                                    text-neutral-950">
                                        {review.name}
                                    </h3>
                                    <p className="text-xs text-neutral-500">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}