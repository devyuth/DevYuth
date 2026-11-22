
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Menu as MenuIcon, X } from "lucide-react";
import { Menu } from "./Menu";

// Contact Details
const PHONE_NUMBER = "+917003996182";
const WHATSAPP_NUMBER = "917003996182";
const WHATSAPP_MESSAGE = "Hello! I would like to know more.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
)}`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMobileMenu = () => setIsOpen(false);

    // Lock background scrolling when mobile drawer is open
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        if (isOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    // Close mobile drawer with Escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            {/* Main Navbar */}
            <nav className="absolute inset-x-0 top-0 z-50 w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="flex h-24 items-center justify-between gap-4">

                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="Go to homepage"
                            className="flex shrink-0 items-center"
                        >
                            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={48}
                                    height={48}
                                    priority
                                    className="h-full w-full object-contain p-1"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden flex-1 justify-center md:flex">
                            <Menu variant="desktop" />
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden shrink-0 items-center gap-3 md:flex">

                            {/* Call Now */}
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="
                                    flex items-center gap-2
                                    rounded-full
                                    bg-[#36B5F5]
                                    px-5 py-3
                                    text-sm font-semibold text-white
                                    shadow-lg shadow-sky-500/25
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-sky-500
                                "
                            >
                                <FaPhoneAlt />
                                Call Now
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact us on WhatsApp"
                                className="
                                    flex h-12 w-12 items-center justify-center
                                    rounded-full bg-white
                                    text-2xl text-green-500
                                    shadow-lg
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-green-50
                                "
                            >
                                <FaWhatsapp />
                            </a>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex items-center gap-3 md:hidden">

                            {/* WhatsApp */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact us on WhatsApp"
                                className="
                                    flex h-10 w-10 items-center justify-center
                                    rounded-full bg-white
                                    text-2xl text-green-500
                                    shadow-md
                                "
                            >
                                <FaWhatsapp />
                            </a>

                            {/* Open Menu */}
                            <button
                                type="button"
                                onClick={() => setIsOpen(true)}
                                aria-label="Open navigation menu"
                                aria-expanded={isOpen}
                                aria-controls="mobile-navigation"
                                className="
                                    flex h-11 w-11 items-center justify-center
                                    rounded-full bg-white
                                    text-black shadow-xl backdrop-blur-md
                                    transition-colors
                                "
                            >
                                <MenuIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Backdrop */}
            <div
                onClick={closeMobileMenu}
                aria-hidden="true"
                className={`
                    fixed inset-0 z-[60]
                    bg-black/50 backdrop-blur-sm
                    transition-opacity duration-300 md:hidden
                    ${isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                `}
            />

            {/* Mobile Drawer */}
            <aside
                id="mobile-navigation"
                aria-label="Mobile Navigation"
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={`
                    fixed right-0 top-0 z-[70]
                    flex h-dvh w-[85%] max-w-sm flex-col
                    bg-white shadow-2xl
                    transition-transform duration-300 ease-in-out
                    md:hidden
                    ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-50">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="h-full w-full object-contain p-1"
                            />
                        </div>

                        <span className="text-lg font-bold text-gray-900">
                            Menu
                        </span>
                    </Link>

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={closeMobileMenu}
                        aria-label="Close navigation menu"
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-full bg-gray-100
                            text-gray-700
                            transition-colors hover:bg-gray-200
                        "
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 overflow-y-auto px-6 py-7">
                    <Menu
                        variant="mobile"
                        onItemClick={closeMobileMenu}
                    />
                </div>

                {/* Drawer Footer */}
                <div className="space-y-3 border-t border-gray-100 bg-gray-50/70 p-6">

                    {/* Call Now */}
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        onClick={closeMobileMenu}
                        className="
                            flex w-full items-center justify-center gap-2
                            rounded-full bg-[#36B5F5]
                            px-5 py-3.5
                            text-sm font-semibold text-white
                            shadow-md transition-all
                            hover:bg-sky-500
                        "
                    >
                        <FaPhoneAlt />
                        Call Now
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex w-full items-center justify-center gap-2
                            rounded-full border border-green-500
                            bg-white px-5 py-3.5
                            text-sm font-semibold text-green-600
                            transition-colors hover:bg-green-50
                        "
                    >
                        <FaWhatsapp className="text-xl" />
                        Chat on WhatsApp
                    </a>

                    <p className="pt-2 text-center text-xs text-gray-400">
                        We would love to hear from you.
                    </p>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
