"use client";


import {
    Target,
    Layers3,
    TrendingUp,
    ShieldCheck,
    Workflow,
    CheckCircle2,
} from "lucide-react";

export default function IndustriesSection() {

    const industries = [
        {
            icon: Target,
            title: "Business-First Development",
            description:
                "We understand your business goals, target audience, and project requirements to build digital solutions that solve real problems and deliver practical value.",
        },
        {
            icon: Layers3,
            title: "Seamless API & System Integration",
            description:
                "Connect websites, web applications, APIs, payment gateways, and third-party tools to create a connected and efficient digital ecosystem.",
        },
        {
            icon: TrendingUp,
            title: "Scalable Website & Software Solutions",
            description:
                "We build responsive websites and scalable software with maintainable architecture, making it easier to expand features as your business grows.",
        },
        {
            icon: ShieldCheck,
            title: "Secure & Reliable Development",
            description:
                "We follow security-conscious development practices, reliable coding standards, and thorough testing to build dependable digital products.",
        },
        {
            icon: Workflow,
            title: "Business Process Automation",
            description:
                "Automate repetitive tasks, connect business tools, and streamline everyday workflows with custom software and intelligent integrations.",
        },
        {
            icon: CheckCircle2,
            title: "Ongoing Website & Software Support",
            description:
                "Keep your digital products updated and running smoothly with technical support, bug fixes, maintenance, and continuous improvements.",
        },
    ];


    return (
        <section className="bg-gradient-to-br from-black via-sky-900 to-green-950 text-zinc-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Sticky Side */}
                    <div className="lg:sticky lg:top-32 h-fit py-24">

                        <h2 className="mt-6 text-4xl md:text-5xl leading-[0.9] font-serif ">
                            Digital Solutions
                            <br />
                            for Different Industries.
                        </h2>

                        <p className="mt-8 text-zinc-400 text-md max-w-md font-serif">
                            From startups to enterprises, we create
                            digital products tailored for the unique
                            challenges of every industry.
                        </p>

                        <div className="mt-12 flex items-center gap-3">
                            <div className="w-16 h-[2px] bg-white" />
                            <span className="text-zinc-200">
                                Scroll to explore
                            </span>
                        </div>

                    </div>

                    {/* Right Cards */}
                    <div className="py-24 space-y-8">

                        {industries.map((industry, index) => {
                            const Icon = industry.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[32px]
                                    shadow-md
                                    p-8
                                    lg:p-10
                                    bg-white/5
                                    transition-all
                                    duration-500
                                "
                                >
                                    {/* Background Number */}
                                    <span className="
                                        absolute
                                        right-6
                                        top-2
                                        text-[120px]
                                        font-bold
                                        text-white/[0.03]
                                        select-none
                                    ">
                                        0{index + 1}
                                    </span>

                                    <div className="flex items-start gap-6">

                                        <div
                                            className="
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-white/5
                                            group-hover:bg-white
                                            group-hover:text-black
                                            transition-all
                                            duration-500
                                        "
                                        >
                                            <Icon size={30} />
                                        </div>

                                        <div>
                                            <b className="text-2xl">
                                                {industry.title}
                                            </b>

                                            <p className="mt-4 text-zinc-3 text-sm leading-relaxed max-w-xl">
                                                {industry.description}
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