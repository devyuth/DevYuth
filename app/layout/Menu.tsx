"use client";

type MenuProps = {
    onItemClick?: () => void;
};

export const Menu = ({ onItemClick }: MenuProps) => {
    const menuItems = [
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "Ready Websites",
            href: "/explore-ready-made-website",
        },
        {
            name: "Contact Us",
            href: "/contact",
        },
    ];

    return (
        <nav className="w-full bg-white/85 rounded-full px-10">
            <ul
                className="
                    flex flex-col
                    items-stretch
                    gap-1
                    md:flex-row
                    md:items-center
                    md:justify-center
                    md:gap-6
                ">
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            onClick={onItemClick}
                            className="
                                block py-3
                                rounded-md
                                px-3 md:py-2
                                text-base md:px-0
                                text-black 
                                transition-colors
                                hover:bg-gray-100
                                hover:text-pink-800
                                md:hover:bg-transparent 
                            ">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

