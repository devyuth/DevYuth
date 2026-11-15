
"use client";

import { useState } from "react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Website Development" },
  { label: "Web Design" },
  { label: "E-commerce Development" },
  { label: "SEO Services" },
  { label: "Website Maintenance"},
  { label: "Custom Web Solutions"},
];

function ContactIcon({
  type,
}: {
  type: "phone" | "mail" | "location";
}) {
  const paths = {
    phone: (
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z"
      />
    ),
    mail: (
      <path
        fill="currentColor"
        d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8L4 7v10h16V7l-8 6Zm0-2 7-4H5l7 4Z"
      />
    ),
    location: (
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
    ),
  };

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        {paths[type]}
      </svg>
    </span>
  );
}

function SocialIcon({
  type,
}: {
  type: "instagram" | "facebook" | "linkedin" | "youtube" | "x";
}) {
  const icons = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </>
    ),
    facebook: (
      <path
        fill="currentColor"
        stroke="none"
        d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"
      />
    ),
    linkedin: (
      <>
        <path
          fill="currentColor"
          stroke="none"
          d="M4 8h3.5v12H4zM5.75 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 8h3.4v1.7h.1A3.7 3.7 0 0 1 16.8 8c3.5 0 4.2 2.3 4.2 5.2V20h-3.5v-6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20H10V8Z"
        />
      </>
    ),
    youtube: (
      <>
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="4"
          fill="currentColor"
          stroke="none"
        />
        <path
          d="m10 9 5 3-5 3V9Z"
          fill="#111111"
          stroke="none"
        />
      </>
    ),
    x: (
      <path d="m4 4 16 16M20 4 4 20M4 4h4l12 16h-4L4 4Z" />
    ),
  };

  const links = {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
    x: "https://x.com/",
  };

  return (
    <a
      href={links[type]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={type}
      className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icons[type]}
      </svg>
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Connect your newsletter API or email marketing service here.
    console.log("Newsletter email:", email);
  }

  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-[1600px] px-6 pb-7 pt-20 sm:px-10 lg:px-12 lg:pt-24">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.95fr_1fr_1.15fr] lg:gap-x-8 xl:gap-x-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Devyuth home"
              className="inline-block text-[42px] font-bold leading-none tracking-[-2px] sm:text-[46px]"
            >
              Dev<span className="text-red-600">yuth</span>
              <span className="text-white">.</span>
            </Link>

            <p className="mt-8 max-w-[360px] text-[16px] leading-[1.85] text-white/65 sm:text-[17px]">
              We build modern, high-performing websites and digital solutions
              that help businesses grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="linkedin" />
              <SocialIcon type="youtube" />
              <SocialIcon type="x" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[16px] text-white/65 transition-colors hover:text-red-500 sm:text-[17px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    className="text-[16px] leading-relaxed text-white/65 transition-colors hover:text-red-500 sm:text-[17px]"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-7 space-y-6">
              <a
                href="https://wa.me/917003996182"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <ContactIcon type="phone" />
                <div>
                  <p className="text-[16px] font-medium sm:text-[17px]">
                    +91 70039 96182
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Mon - Sat, 9 AM - 7 PM
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@devyuth.com"
                className="group flex items-start gap-4"
              >
                <ContactIcon type="mail" />
                <div className="min-w-0">
                  <p className="break-words text-[16px] font-medium sm:text-[17px]">
                    hello@devyuth.com
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    We reply within 24 hours
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <ContactIcon type="location" />
                <div>
                  <p className="text-[16px] font-medium sm:text-[17px]">
                    India
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Available for projects worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Stay Updated</h3>

            <p className="mt-7 text-[16px] leading-7 text-white/65 sm:text-[17px]">
              Get the latest insights, tips and updates about web development
              and digital growth.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/50">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/15 pt-7">
          <div className="flex flex-col gap-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <p>
              © {new Date().getFullYear()} Devyuth. All rights reserved.
            </p>

            <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <span aria-hidden="true" className="text-white/25">|</span>

              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>

              <span aria-hidden="true" className="text-white/25">|</span>

              <Link
                href="/sitemap"
                className="transition-colors hover:text-white"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
