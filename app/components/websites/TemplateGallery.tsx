"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { templates, Template } from "@/app/data/templates";
import Image from "next/image";

const filters = [
  "All designs",
  "Fashion",
  "Beauty",
  "Business",
  "Portfolio",
] as const;

type Filter = (typeof filters)[number];

export default function TemplateGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All designs");
  const [search, setSearch] = useState("");

  const filteredTemplates = useMemo(() => {
    const query = search.trim().toLowerCase();

    return templates.filter((template) => {
      const matchesCategory =
        activeFilter === "All designs" || template.category === activeFilter;

      const matchesSearch =
        template.name.toLowerCase().includes(query) ||
        template.category.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section
      id="templates"
      className="bg-[#fbfaf7] px-5 py-16 
      text-[#27251f] sm:px-8 sm:py-40 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Editorial Heading */}

        <div 
          className="mb-10 flex flex-col justify-between 
          gap-6 md:mb-12 md:flex-row md:items-end">
          <h2 
            className="font-serif text-[clamp(42px,6vw,76px)] 
            leading-[1.04] tracking-[-0.055em]">
            Find your next
            <br />
            <span className="italic text-[#bb7257]">
              online look.
            </span>
          </h2>

          <p 
            className="max-w-sm text-sm 
            leading-7 text-[#827d73]">
            Explore our collection of thoughtfully designed websites. Click any design to preview media and details.
          </p>
        </div>

        {/* Filters and Search */}
        <div 
          className="mb-8 flex flex-col gap-5 border-y 
          border-[#e9e5dd] py-5 lg:flex-row 
          lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full border px-4 py-2.5 text-xs transition-colors ${activeFilter === filter
                  ? "border-[#27251f] bg-[#27251f] text-white"
                  : "border-transparent text-[#777268] hover:border-[#e5dfd5] hover:bg-white hover:text-[#27251f]"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="flex w-full items-center gap-3 
            border border-[#e9e5dd] bg-white px-4 py-3 
            transition-colors focus-within:border-[#bb7257] 
            lg:max-w-[280px]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 shrink-0 text-[#827d73]"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m16 16 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search collections..."
              className="w-full bg-transparent text-xs 
              outline-none placeholder:text-[#a49e94]"
            />
          </label>
        </div>

        {/* Template Cards */}
        <div
          className="grid grid-cols-1 gap-x-6 gap-y-10 
          sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
          {filteredTemplates.map((template) => (
            <article key={template.id} className="group min-w-0">
              <Link
                href={`/explore-ready-made-website/${template.id}`}
                className="relative block w-full 
                overflow-hidden bg-[#eee9e0] text-left"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={template.image}
                    alt={`${template.name} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                </div>

                <span
                  className="absolute inset-x-3 bottom-3 flex translate-y-2 
                  items-center justify-between bg-white/95 px-4 py-4 text-xs 
                  transition-all duration-300 sm:translate-y-2 sm:opacity-0 
                  sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <span>Explore showcase & details</span>
                  <span className="text-lg text-[#bb7257]">↗</span>
                </span>
              </Link>

              <div className="pt-5">
                <div
                  className="mb-2 flex items-center 
                  justify-between gap-3"
                >
                  <span
                    className="text-[10px] uppercase 
                    tracking-[0.16em] text-[#827d73]"
                  >
                    {template.category}
                  </span>
                  <span className="text-[10px] text-[#aaa49a]">
                    {template.id} / 0{templates.length}
                  </span>
                </div>

                <h3
                  className="font-serif text-2xl 
                  font-normal tracking-tight"
                >
                  {template.name}
                </h3>

                <div
                  className="mt-4 flex flex-wrap 
                  items-center justify-between gap-3">
                  <p className="text-[11px] text-[#827d73]">
                    {template.description}
                  </p>
                  <Link
                    href={`/explore-ready-made-website/${template.id}`}
                    className="border-b border-[#c9b9a8] pb-1 
                    text-[11px] transition-colors hover:border-[#bb7257] 
                    hover:text-[#bb7257]"
                  >
                    View details ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}