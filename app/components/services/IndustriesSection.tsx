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
            title: "Strategy Before Code",
            description:
                "We understand your business goals, identify the right opportunities, and create a clear roadmap before development begins.",
        },
        {
            icon: Layers3,
            title: "Seamless Integrations",
            description:
                "Connect your website, applications, APIs, and business tools into one efficient digital ecosystem.",
        },
        {
            icon: TrendingUp,
            title: "Built to Scale",
            description:
                "Scalable architecture and maintainable code help your digital products grow alongside your business.",
        },
        {
            icon: ShieldCheck,
            title: "Security & Reliability",
            description:
                "We prioritize secure development, reliable systems, and performance to build digital products you can depend on.",
        },
        {
            icon: Workflow,
            title: "Smarter Automation",
            description:
                "Reduce repetitive tasks, streamline workflows, and improve operational efficiency with intelligent automation.",
        },
        {
            icon: CheckCircle2,
            title: "Continuous Improvement",
            description:
                "From launch to future upgrades, we help your digital products evolve with changing customer needs and business goals.",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-black via-sky-900 to-green-950 text-zinc-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Sticky Side */}
                    <div className="lg:sticky lg:top-32 h-fit py-24">

                        <span className="uppercase tracking-[0.3em] text-zinc-200 text-sm">
                            Industries
                        </span>

                        <h2 className="mt-6 text-5xl md:text-7xl leading-[0.9] font-serif ">
                            More Than
                            <br />
                            Just Code.
                            <br />
                            Real Impact.
                        </h2>

                        <p className="mt-8 text-zinc-300 text-lg max-w-md font-serif">
                            From startups to enterprises, we create
                            digital products tailored for the unique
                            challenges of every industry.
                        </p>

                        <div className="mt-12 flex items-center gap-3">
                            <div className="w-16 h-[2px] bg-white" />
                            <span className="text-zinc-300">
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