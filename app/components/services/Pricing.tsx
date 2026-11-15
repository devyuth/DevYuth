"use client";


import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Zap,
  Rocket,
  Crown,
  Gem,
  ShieldCheck,
  Headphones,
  Code2,
  CircleDollarSign,
} from "lucide-react";

type Currency = "INR" | "USD";

interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  priceINR: string;
  priceUSD: string;
  features: string[];
  icon: React.ElementType;
  popular?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    subtitle: "Perfect for startups",
    description:
      "Everything you need to establish a professional online presence.",
    priceINR: "3,999+",
    priceUSD: "50+",
    icon: Rocket,
    buttonText: "Get Started",
    features: [
      "Up to 3–5 static pages",
      "Responsive, mobile-first design",
      "Modern UI with Tailwind CSS",
      "Basic contact form integration",
      "On-page SEO setup",
      "SSL configuration assistance",
      "Source code handover",
      "1 week of post-launch support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    subtitle: "For growing businesses",
    description:
      "Powerful, interactive websites designed to grow with your business.",
    priceINR: "12,000+",
    priceUSD: "145+",
    icon: Crown,
    popular: true,
    buttonText: "Choose Standard",
    features: [
      "Up to 8–10 pages",
      "Custom UI/UX design system",
      "CMS or admin integration",
      "GSAP animations and motion UI",
      "Database integration as required",
      "Dynamic forms and email routing",
      "Performance optimization",
      "GitHub repository handover",
      "2 weeks of post-launch support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "For ambitious projects",
    description:
      "Custom full-stack solutions built around your business requirements.",
    priceINR: "38,000+",
    priceUSD: "450+",
    icon: Gem,
    buttonText: "Discuss Your Project",
    features: [
      "Fully custom design and branding",
      "Advanced GSAP animations",
      "React, Next.js and Node.js",
      "Custom database architecture",
      "REST API or GraphQL integration",
      "Authentication and role permissions",
      "Custom admin dashboard",
      "Deployment pipeline setup",
      "Technical SEO and performance",
      "30 days of post-launch support",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Full Code Ownership",
    description: "Your code, your project",
  },
  {
    icon: CircleDollarSign,
    title: "Transparent Pricing",
    description: "No hidden development fees",
  },
  {
    icon: Headphones,
    title: "Launch Support",
    description: "Help after delivery",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description: "Built for future growth",
  },
];

interface PricingSectionProps {
  onSelectPlan?: (plan: PricingPlan) => void;
}

export default function PricingSection({
  onSelectPlan,
}: PricingSectionProps) {
  const [currency, setCurrency] = useState<Currency>("INR");

  const handleSelectPlan = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan);
      return;
    }

    const subject = encodeURIComponent(
      `Project inquiry: ${plan.name} Plan`
    );

    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in the ${plan.name} plan.\nStarting price: ${currency === "INR" ? "₹" : "$"
      }${currency === "INR" ? plan.priceINR : plan.priceUSD}\n\nPlease share the next steps.`
    );

    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white px-4 py-20 font-sans text-slate-900 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs uppercase tracking-wider text-violet-700">
            <Zap size={15} fill="currentColor" />
            Simple, transparent pricing
          </span>

          <h2 className="mt-6 text-3xl leading-tight tracking-normal sm:text-5xl lg:text-6xl font-[Georgia]">
            The right plan for{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              your business
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Professional websites, modern technology, and complete
            code ownership. Choose a plan that fits your goals.
          </p>

          {/* Currency switch */}
          <div
            className="mt-8 inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1.5 shadow-sm"
            aria-label="Choose currency"
          >
            {(["INR", "USD"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setCurrency(value)}
                aria-pressed={currency === value}
                className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-200 ${currency === value
                    ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                    : "text-slate-600 hover:text-slate-950"
                  }`}
              >
                {value === "INR" ? "INR (₹)" : "USD ($)"}
              </button>
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Starting prices · One-time development cost · Final quote
            depends on project scope
          </p>
        </header>

        {/* Pricing cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price =
              currency === "INR" ? plan.priceINR : plan.priceUSD;
            const symbol = currency === "INR" ? "₹" : "$";

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${plan.popular
                    ? "border-violet-500 bg-white shadow-xl shadow-violet-100/80 ring-1 ring-violet-500 lg:-translate-y-2"
                    : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-200/50"
                  }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-violet-200">
                    <span className="inline-flex items-center gap-1.5">
                      <Zap size={13} fill="currentColor" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan information */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${plan.popular
                        ? "bg-violet-100 text-violet-700"
                        : plan.id === "premium"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-indigo-50 text-indigo-600"
                      }`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-bold tracking-tight font-[verdana]">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-violet-600">
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-5 min-h-[48px] text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 border-b border-slate-100 pb-6">
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-2xl font-bold text-slate-400">
                      {symbol}
                    </span>
                    <span className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                      {price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    Starting price · One-time payment
                  </p>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan)}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200 ${plan.popular
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700"
                      : "border border-slate-200 bg-white text-slate-800 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                    }`}
                >
                  {plan.buttonText}
                  <ArrowRight size={17} />
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  {plan.id === "premium"
                    ? "Custom scope · Personalized quote"
                    : "No recurring development fee"}
                </p>

                {/* Features */}
                <div className="mt-7">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                    What&apos;s included
                  </p>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-5 text-slate-600"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.popular
                              ? "bg-violet-100 text-violet-700"
                              : "bg-emerald-50 text-emerald-600"
                            }`}
                        >
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-1 gap-7 border-t border-slate-100 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center justify-center gap-3 sm:justify-start lg:justify-center"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {benefit.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-slate-500">
          Need something specific?{" "}
          <a
            href="mailto:hello@example.com?subject=Custom%20Website%20Project"
            className="font-bold text-violet-600 underline-offset-4 hover:underline"
          >
            Let&apos;s discuss your custom project.
          </a>
        </p>
      </div>
    </section>
  );
}
