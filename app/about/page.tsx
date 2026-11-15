import React from "react";
import type { Metadata } from "next";

// Company details
const BRAND_NAME = "Devyuth";
const WEBSITE_URL = "https://devyuth.in";
const CONTACT_EMAIL = "contact@devyuth.in";

// 1. Next.js Metadata (SEO & OpenGraph)
export const metadata: Metadata = {
  title: `About ${BRAND_NAME} | Full-Stack Web Development & Software Solutions`,
  description:
    "Devyuth builds modern, scalable web applications, performant REST APIs, and custom digital software solutions. Learn about our mission and core principles.",
  keywords: [
    "Devyuth",
    "Devyuth web development",
    "devyuth.in",
    "software services India",
    "Next.js web applications",
    "full-stack software solutions",
    "custom web development",
  ],
  alternates: {
    canonical: `${WEBSITE_URL}/about`,
  },
  openGraph: {
    title: `About ${BRAND_NAME} | Web Development & Software Solutions`,
    description:
      "Engineering robust software and digital web solutions designed to solve real problems.",
    url: `${WEBSITE_URL}/about`,
    siteName: BRAND_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${BRAND_NAME} | Full-Stack Web Development`,
    description:
      "Modern web applications, custom APIs, and high-performance digital services by Devyuth.",
  },
};

// 2. Structured Data (JSON-LD Organization Schema for Google Knowledge Graph)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  url: WEBSITE_URL,
  logo: `${WEBSITE_URL}/logo.png`, // replace with actual logo path if available
  email: CONTACT_EMAIL,
  description:
    "Devyuth offers modern full-stack web application development, custom API architectures, and scalable software solutions.",
  sameAs: [
    // Add social links here if available (e.g., GitHub, Twitter, LinkedIn)
    // "https://github.com/your-username",
    // "https://twitter.com/your-handle",
  ],
};

export default function AboutUsPage() {
  return (
    <>
      {/* Inject Structured Data into Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white text-slate-900 font-sans antialiased pt-30">
        <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
          {/* Main Header */}
          <header className="border-b border-slate-200 pb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              About {BRAND_NAME}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Engineering robust software &amp; digital web solutions.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We build modern, scalable web applications and software systems
              designed to solve real problems for businesses and developers.
            </p>
          </header>

          {/* Content Body */}
          <div className="mt-12 space-y-12 text-base leading-relaxed text-slate-700">
            {/* Mission */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Our Mission
              </h2>
              <p>
                At <strong>{BRAND_NAME}</strong>, we believe in crafting
                software that balances performant code with clean, thoughtful
                design. Whether it&apos;s full-stack web platforms, custom APIs,
                or specialized software utilities, our focus is on building
                dependable, high-quality digital experiences.
              </p>
              <p>
                We prioritize developer ergonomics, scalable system
                architectures, and reliable performance to ensure every service
                hosted on{" "}
                <a
                  href={WEBSITE_URL}
                  className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-600"
                >
                  devyuth.in
                </a>{" "}
                delivers long-term value.
              </p>
            </section>

            {/* Core Principles Grid */}
            <section className="space-y-6 border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What Drives Us
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <article className="rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Quality &amp; Precision
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    We write clean, efficient, and maintainable code built to
                    scale seamlessly as demands grow.
                  </p>
                </article>
                <article className="rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Modern Technology Stack
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Leveraging modern frameworks like Next.js and Tailwind CSS
                    to build lightning-fast web services.
                  </p>
                </article>
                <article className="rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    User-Centric Design
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Focusing on clarity, intuitive layout flow, and accessible
                    user experiences across all screen sizes.
                  </p>
                </article>
                <article className="rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Security &amp; Privacy
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Adhering to modern security standards to safeguard user credentials
                    and data integrity.
                  </p>
                </article>
              </div>
            </section>

            {/* What We Offer */}
            <section className="space-y-4 border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What We Do
              </h2>
              <ul className="list-disc space-y-3 pl-6 text-slate-700">
                <li>
                  <strong>Web Application Development:</strong> Custom,
                  responsive web platforms engineered using Next.js, React, and
                  Tailwind CSS with robust backend integrations.
                </li>
                <li>
                  <strong>API &amp; Backend Infrastructure:</strong> Designing
                  performant REST endpoints and database schemas built for speed and security.
                </li>
                <li>
                  <strong>Software Solutions &amp; Automation:</strong>{" "}
                  Development of tailored digital tools and automated client workflows.
                </li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-2 text-slate-600">
                Have a question, a project inquiry, or need technical support?
                We&apos;d love to hear from you.
              </p>

              <div className="mt-6 inline-block rounded-md border border-slate-200 bg-slate-50 px-5 py-4 font-mono text-sm text-slate-900">
                <span className="text-slate-500">Contact Email: </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-bold underline underline-offset-2 hover:text-slate-600"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}