
"use client";

import Image from "next/image";
import "../../styles/why.components.css";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "E-Commerce",
        image: "/project2.png",
        // link: "https://your-ecommerce-website.com",
        size: "small",
    },
    {
        title: "Business Website (railway)",
        category: "Web Development",
        image: "/projectbeconoverseas.png",
        link: "https://beaconoverseas.com/",
        size: "small",
    },
    {
        title: "Custom Software",
        category: "Software Development",
        image: "/project3.png",
        // link: "https://your-software-website.com",
        size: "large",
    },
];

export default function Gallery() {
    return (
        <section className="w-full bg-[#ffffff] py-24 px-6 mt-20">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-medium text-[#0d5c8c]">
                        Our Gallery
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 Georgia">
                        Our Website Design & Development Portfolio
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm md:text-xs text-gray-500">
                        Explore our selected website development, e-commerce
                        and custom software projects. Each project reflects
                        our approach to thoughtful design, practical
                        functionality and reliable digital development.
                    </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`
                                group relative overflow-hidden rounded-2xl
                                bg-white shadow-sm
                                ${project.size === "large"
                                    ? "md:col-span-2 md:row-span-2"
                                    : "md:col-span-2"
                                }
                            `}
                        >

                            {/* Image */}
                            <div className="relative h-[260px] md:h-[300px]">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    "
                                />

                                {/* Overlay */}
                                <div
                                    className="
                                        absolute inset-0
                                        flex flex-col justify-end
                                        bg-gradient-to-t
                                        from-black/80
                                        via-black/20
                                        to-transparent
                                        p-6
                                        opacity-0
                                        transition-opacity
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                >

                                    <span className="mb-2 text-xs font-medium text-orange-300">
                                        {project.category}
                                    </span>

                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>

                                    {/* View Website Button */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            mt-4 w-fit rounded-full
                                            bg-[#ff8b2c]
                                            px-6 py-2.5
                                            text-xs font-semibold
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:bg-[#ff7620]
                                            hover:scale-105
                                        "
                                    >
                                        View Website →
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
