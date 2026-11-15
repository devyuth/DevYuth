
"use client";

import Image from "next/image";
import "../../styles/Features.components.css";

const features = [
  {
    title: "SEO",
    icon: "https://alreadysetup.com/wp-content/uploads/SEO-image1.jpg",
    description:
      "We build SEO-friendly websites that help your business rank higher and attract more organic traffic.",
    color: "#55a9f5",
    position: "top",
    direction: "left",
  },
  {
    title: "Affordable",
    icon: "https://png.pngtree.com/png-vector/20250808/ourmid/pngtree-money-pouch-isolated-on-transparent-background-png-image_16750668.webp",
    description:
      "Get a professional, high-quality website at a budget-friendly price without compromising quality.",
    color: "#ffb52e",
    position: "bottom",
    direction: "right",
  },
  {
    title: "Responsive",
    icon: "https://www.pngkey.com/png/detail/47-478912_transparent-mobile-phone-icon-mobile-icon-color-png.png",
    description:
      "Your website adapts beautifully to mobile phones, tablets, laptops, and desktop screens.",
    color: "#54c98a",
    position: "top",
    direction: "left",
  },
  {
    title: "Automation",
    icon: "https://penneo.com/wp-content/uploads/2021/02/benefits-business-process-automation.png",
    description:
      "Automate repetitive business tasks, save time, and improve efficiency with smart solutions.",
    color: "#b68aff",
    position: "bottom",
    direction: "right",
  },
  {
    title: "24/7 Support",
    icon: "https://betinasia.zendesk.com/hc/article_attachments/22178895521170",
    description:
      "Get support when you need it, with help for website issues and questions after launch.",
    color: "#ff7777",
    position: "top",
    direction: "right",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-heading">
        Features We Provide
        <span className="heading-scribble" aria-hidden="true" />
      </h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={`feature-item feature-${index + 1} ${feature.position}`}
            style={{ "--feature-color": feature.color } as React.CSSProperties}
          >
            <div
              className="feature-card"
              tabIndex={0}
              aria-describedby={`feature-description-${index}`}
            >
              <div className="feature-icon">
                <Image
                  src={feature.icon}
                  alt=""
                  width={64}
                  height={64}
                  unoptimized
                  loading="lazy"
                  className="feature-image"
                />
              </div>

              <h3>{feature.title}</h3>

              <svg
                className={`comic-arrow arrow-${feature.direction}`}
                viewBox="0 0 120 110"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 12 8 C 95 8, 12 78, 82 88"
                  stroke="var(--feature-color)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M 67 73 L 84 89 L 65 99"
                  stroke="var(--feature-color)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div
                id={`feature-description-${index}`}
                className="comic-bubble"
                role="note"
              >
                <span className="comic-label">{feature.title}</span>
                <p>{feature.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="features-hint">
        Hover over a feature to discover more
      </p>
    </section>
  );
}
