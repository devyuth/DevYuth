"use client";

import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

const services = [
  "Website Development",
  "Custom Software",
  "Web Applications",
  "UI/UX Design",
  "SEO-Friendly Websites",
  "Maintenance & Support",
];

const reasons = [
  {
    number: "01",
    title: "Built Around Your Goals",
    description:
      "Solutions designed around your business, audience, and objectives.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Quality Development",
    description:
      "Clean code, responsive layouts, and reliable functionality.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Performance First",
    description:
      "Fast-loading, accessible websites built with search visibility in mind.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Support That Continues",
    description:
      "Practical guidance, maintenance, and improvements after launch.",
    icon: ShieldCheck,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your needs and project goals.",
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the structure and user experience.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build and test your digital product.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We launch your product and provide support.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden 
      bg-white text-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-5 
      py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full 
          border border-neutral-200 px-4 py-2 text-xs font-semibold 
          uppercase tracking-[0.16em] text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-[#ffc313]" />
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-semibold 
            tracking-tight sm:text-4xl lg:text-5xl">
            Good ideas deserve
            <span className="text-[#0877bb]"> great execution.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm 
          leading-7 text-neutral-500 sm:text-base">
            We create websites, custom software, and digital experiences
            that help businesses work smarter and grow online.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-center 
        gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: INTRODUCTION */}
          <div>
            <div className="relative overflow-hidden rounded-3xl 
            border border-neutral-200 bg-neutral-50 p-7 sm:p-10">

              {/* Minimal decorative graphic */}
              <div className="mb-12 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center 
                justify-center rounded-2xl bg-[#ffc313] text-neutral-900">
                  <Code2 size={24} strokeWidth={1.8} />
                </div>

                <span className="text-xs font-medium text-neutral-400">
                  Ideas into reality
                </span>
              </div>

              <h3 className="max-w-lg text-3xl font-semibold 
              leading-tight tracking-tight sm:text-4xl">
                Technology that works for your business.
              </h3>

              <p className="mt-5 max-w-lg text-sm l
              eading-7 text-neutral-500 sm:text-base">
                From your first website to a custom digital platform,
                we combine thoughtful design and dependable development
                to create solutions that fit your business.
              </p>

              <a
                href="#services"
                className="mt-8 inline-flex items-center gap-2 
                text-sm font-semibold transition-colors hover:text-[#0877bb]"
              >
                Explore our services
                <ArrowRight size={17} />
              </a>

              {/* Abstract interface illustration */}
              <div
                aria-hidden="true"
                className="relative mt-12 rounded-2xl 
                border border-neutral-200 bg-white p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 border-b border-neutral-100 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ed2680]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffc313]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0877bb]" />
                  <span className="ml-auto text-[10px] font-medium text-neutral-400">
                    YOUR NEXT PROJECT
                  </span>
                </div>

                <div className="grid grid-cols-[1fr_0.7fr] gap-3 pt-5">
                  <div className="space-y-3">
                    <div className="h-3 w-4/5 rounded-full bg-neutral-200" />
                    <div className="h-3 w-full rounded-full bg-neutral-100" />
                    <div className="h-3 w-3/5 rounded-full bg-neutral-100" />
                    <div className="mt-5 h-9 w-28 rounded-lg bg-[#0877bb]" />
                  </div>

                  <div className="flex min-h-28 items-center 
                  justify-center rounded-xl bg-[#ffc313]/20">
                    <div className="flex h-14 w-14 items-center 
                    justify-center rounded-2xl bg-[#ffc313]">
                      <Rocket size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div id="services" className="mt-8">
              <p className="mb-4 text-xs font-semibold 
              uppercase tracking-[0.15em] text-neutral-400">
                What we do
              </p>

              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-neutral-200 
                    px-4 py-2.5 text-xs font-medium text-neutral-700 
                    transition-colors duration-200 hover:border-[#0877bb] 
                    hover:bg-blue-50 hover:text-[#0877bb] sm:text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: BENEFITS */}
          <div>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase 
              tracking-[0.15em] text-neutral-400">
                The difference
              </p>

              <h3 className="mt-3 text-2xl font-semibold 
              tracking-tight sm:text-3xl">
                A better way to build.
              </h3>
            </div>

            <div className="divide-y divide-neutral-200">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.number}
                    className="group flex gap-5 py-6 
                    transition-transform duration-300 
                    hover:translate-x-1"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center 
                    justify-center rounded-xl bg-neutral-100 
                    transition-colors duration-300 group-hover:bg-[#ffc313]">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className="text-neutral-800"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-base font-semibold sm:text-lg">
                          {reason.title}
                        </h4>
                        <span className="text-xs text-neutral-300">
                          {reason.number}
                        </span>
                      </div>

                      <p className="mt-2 max-w-md text-sm 
                      leading-6 text-neutral-500">
                        {reason.description}
                      </p>
                    </div>

                    <ArrowDownRight
                      size={18}
                      className="mt-1 shrink-0 text-neutral-300 
                      transition-colors group-hover:text-[#0877bb]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Compact feature row */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#f8f8f8] p-5">
                <Globe
                  size={22}
                  className="mb-4 text-[#0877bb]"
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold">
                  Responsive websites
                </p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  Designed for every screen.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8f8f8] p-5">
                <Smartphone
                  size={22}
                  className="mb-4 text-[#ed2680]"
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold">
                  Modern experiences
                </p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  Simple, intuitive interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DEVELOPMENT PROCESS */}
        <div className="mt-24 border-t border-neutral-200 pt-16 sm:mt-32 sm:pt-20">
          <div className="mb-12 flex flex-col justify-between 
          gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase 
              tracking-[0.15em] text-neutral-400">
                Our approach
              </p>

              <h3 className="mt-3 text-3xl font-semibold 
              tracking-tight sm:text-4xl">
                From idea to launch.
              </h3>
            </div>

            <p className="max-w-md text-sm 
            leading-6 text-neutral-500">
              A clear, collaborative process at every stage of development.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center 
                  rounded-full border border-neutral-200 text-xs font-semibold">
                    {step.number}
                  </span>

                  {index < process.length - 1 && (
                    <div className="hidden h-px flex-1 bg-neutral-200 lg:block" />
                  )}
                </div>

                <h4 className="text-lg font-semibold">{step.title}</h4>

                <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-24 flex flex-col gap-6 rounded-3xl 
        border border-neutral-200 bg-white p-7 sm:mt-28 
        sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a project in mind?
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
              Let&apos;s discuss your website, software, or next digital product.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex w-fit shrink-0 items-center 
            justify-center gap-3 rounded-full bg-[#111] px-6 
            py-3.5 text-sm font-medium text-white 
            transition-colors duration-300 hover:bg-[#0877bb]"
          >
            Let&apos;s talk
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
