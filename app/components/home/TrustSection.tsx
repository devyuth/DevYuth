
"use client";

import Image from "next/image";
import "../../styles/TrustSection.components.css";

const companies = [
    { name: "B.Overseas", logo: "/logos/trustlogobeaconoverseas.png" },
    { name: "D.Dupwork", logo: "/logos/DD.webp" },
    { name: "React", logo: "/logos/React.webp" },
    { name: "AI", logo: "/logos/aiuse.png" },
    { name: "express", logo: "/logos/expresjs.png" },
    { name: "AWS", logo: "/logos/aws.webp" },
    { name: "Database", logo: "/logos/SQL.png" },
    { name: "SEO", logo: "/logos/SEO.png" },
    { name: "Typescript", logo: "/logos/Ts.webp" },
    { name: "figma", logo: "/logos/figma.jpeg" },
];

export default function TrustSection() {
    return (
        <section className="trust-section w-full">
            <div className="trust-slider">
                <div className="trust-track">
                    {[...companies, ...companies].map((company, index) => (
                        <div
                            className="trust-company"
                            key={`${company.name}-${index}`}
                        >
                            <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                width={130}
                                height={50}
                                className="trust-logo"
                            />
                            <span>{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
