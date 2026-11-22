"use client";

import React from 'react';
import { HiSparkles } from 'react-icons/hi';
import { ContactNowButtonOurImpact } from '../ui/WhatsappBtn';

interface ImageData {
    src: string;
    offsetY: string;
}

// Top wave images with varying vertical offsets (y-translation) for the natural wave effect & more items for seamless looping
const topImages: ImageData[] = [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-6' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-2' },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-3' },
    { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-6' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-2' },
    { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-4' },
    { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-8' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-4' },
    { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-2' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-6' },
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-3' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-4' },
];

// Bottom wave images with inverted offsets for the opposite curve & more items for seamless looping
const bottomImages: ImageData[] = [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-6' },
    { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-2' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-3' },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-6' },
    { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-2' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-4' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-8' },
    { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-4' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-2' },
    { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-6' },
    { src: 'https://images.unsplash.com/photo-1531548714889-671fccad9c06?w=300&auto=format&fit=crop&q=80', offsetY: '-translate-y-3' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&auto=format&fit=crop&q=80', offsetY: 'translate-y-5' },
];

export default function ServicesHero(): React.JSX.Element {
    return (
        <div className="relative min-h-[100dvh] bg-slate-50 text-[#0F382C] flex flex-col justify-between overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            
            {/* Custom CSS for seamless infinite marquee animation */}
            <style>{`
                @keyframes marqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marqueeRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    display: flex;
                    width: max-content;
                    animation: marqueeLeft 35s linear infinite;
                }
                .animate-marquee-right {
                    display: flex;
                    width: max-content;
                    animation: marqueeRight 35s linear infinite;
                }
                .animate-marquee-left:hover,
                .animate-marquee-right:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Top Image Wave (Marquee Left) */}
            <div className="w-full overflow-hidden pt-6 pb-12 relative">
                <div className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
                
                <div className="animate-marquee-left">
                    {[...topImages, ...topImages].map((img, idx) => (
                        <div
                            key={`top-${idx}`}
                            className={`relative mx-2 sm:mx-3 transition-all duration-300 transform ${img.offsetY} hover:-translate-y-2 hover:scale-105 flex-shrink-0`}
                        >
                            <img
                                src={img.src}
                                alt={`Gallery photo ${idx + 1}`}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80';
                                }}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-2xl shadow-sm border border-[#0F382C]/10"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Center Content Section */}
            <div className="flex flex-col items-center justify-center text-center my-auto z-10 max-w-4xl mx-auto px-4">

                {/* Category Pill / Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAEAD7] border border-[#0F382C]/15 text-[#0F382C] text-xs sm:text-sm font-medium mb-6 shadow-xs">
                    <HiSparkles className="text-base text-[#000000]" />
                    <span>BUILT FOR BUSINESS GROWTH</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight tracking-tight text-[#000000]">
                    Our Services: Digital Solutions That Make a Difference
                </h1>

                {/* Contact CTA Button */}
                <ContactNowButtonOurImpact />

            </div>

            {/* Bottom Image Wave (Marquee Right) */}
            <div className="w-full overflow-hidden pt-12 pb-6 relative">
                <div className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee-right">
                    {[...bottomImages, ...bottomImages].map((img, idx) => (
                        <div
                            key={`bottom-${idx}`}
                            className={`relative mx-2 sm:mx-3 transition-all duration-300 transform ${img.offsetY} hover:-translate-y-2 hover:scale-105 flex-shrink-0`}
                        >
                            <img
                                src={img.src}
                                alt={`Gallery photo bottom ${idx + 1}`}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80';
                                }}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-2xl shadow-sm border border-[#0F382C]/10"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}