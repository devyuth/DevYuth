"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuProps = {
    onItemClick?: () => void;
    variant?: "desktop" | "mobile";
};

export const Menu = ({
    onItemClick,
    variant = "desktop",
}: MenuProps) => {
    const pathname = usePathname();

    const menuItems = [
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "Buy website",
            href: "/explore-ready-made-website",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    const isMobile = variant === "mobile";

    return (
        <nav
            aria-label="Main navigation"
            className={
                isMobile
                    ? "w-full"
                    : `
                        w-fit max-w-full
                        overflow-hidden
                        rounded-full
                        bg-white
                        p-0
                        shadow-[0_12px_25px_rgba(0,0,0,0.22)]
                    `
            }
        >
            <ul
                className={`
                    flex
                    ${isMobile
                        ? "flex-col items-stretch gap-2"
                        : "h-full flex-row items-stretch justify-center gap-0"
                    }
                `}
            >
                {menuItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                    return (
                        <li
                            key={item.name}
                            className={isMobile ? "w-full" : "flex"}
                        >
                            <Link
                                href={item.href}
                                onClick={onItemClick}
                                aria-current={isActive ? "page" : undefined}
                                className={`
                                    flex items-center justify-center
                                    whitespace-nowrap
                                    rounded-full
                                    font-medium
                                    leading-none
                                    transition-all duration-300

                                    ${isMobile
                                        ? `
                                            w-full px-5 py-3
                                            text-sm sm:text-base
                                            ${isActive
                                                ? "bg-[#36B5F5] text-white shadow-md"
                                                : "bg-gray-50 text-gray-800 hover:bg-sky-50 hover:text-sky-500"
                                            }
                                        `
                                        : `
                                            h-full
                                            px-4 py-2
                                            sm:px-5 sm:py-2.5
                                            md:px-6 md:py-4
                                            text-sm sm:text-[15px]
                                            ${isActive
                                                ? "bg-[#36B5F5] text-white shadow-[0_4px_12px_rgba(54,181,245,0.25)]"
                                                : "bg-transparent text-black hover:text-[#36B5F5]"
                                            }
                                        `
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};