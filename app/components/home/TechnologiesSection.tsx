
"use client";

import { useEffect, useRef, useState } from "react";

import {
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiFigma,
  SiSqlite,
} from "react-icons/si";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { CgMicrosoft } from "react-icons/cg";
import { IoIosMore } from "react-icons/io";
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

import "../../styles/TechnologiesSection.components.css";

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "#e34f26", category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6", category: "Frontend" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "#c9a900", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "Frontend" },
  { name: "React", icon: FaReact, color: "#61dafb", category: "Frontend" },
  { name: "React Native", icon: TbBrandReactNative, color: "#087ea4", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111827", category: "Frontend" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42b883", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", category: "Frontend" },

  { name: "Node.js", icon: SiNodedotjs, color: "#43853d", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#374151", category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776ab", category: "Backend" },
  { name: "Django", icon: SiDjango, color: "#092e20", category: "Backend" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", category: "Backend" },
  { name: "Flutter", icon: SiFlutter, color: "#02569b", category: "Backend" },

  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", category: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", category: "Database" },
  { name: "SQLite", icon: SiSqlite, color: "#003b57", category: "Database" },

  { name: "Docker", icon: SiDocker, color: "#2496ed", category: "Cloud & DevOps" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5", category: "Cloud & DevOps" },
  { name: "Vercel", icon: SiVercel, color: "#111827", category: "Cloud & DevOps" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285f4", category: "Cloud & DevOps" },

  { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00", category: "AI & Data" },
  { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c", category: "AI & Data" },
  { name: "Pandas", icon: SiPandas, color: "#150458", category: "AI & Data" },
  { name: "NumPy", icon: SiNumpy, color: "#4dabcf", category: "AI & Data" },

  { name: "Figma", icon: SiFigma, color: "#f24e1e", category: "Design & Office" },
  { name: "Microsoft Excel", icon: PiMicrosoftExcelLogoFill, color: "#217346", category: "Design & Office" },
  { name: "Microsoft Word", icon: PiMicrosoftWordLogoFill, color: "#185abd", category: "Design & Office" },
  { name: "Microsoft PowerPoint", icon: PiMicrosoftPowerpointLogoFill, color: "#c43e1c", category: "Design & Office" },
  { name: "Power BI", icon: CgMicrosoft, color: "#d9a300", category: "Design & Office" },
  { name: "More...", icon: IoIosMore, color: "#8b5cf6", category: "Design & Office" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "AI & Data",
  "Design & Office",
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const duration = 1000;
    let start: number | undefined;

    const animate = (timestamp: number) => {
      if (start === undefined) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, active]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="tech-stat">
      <span className="tech-stat-number">
        {count}{suffix}
      </span>
      <span className="tech-stat-label">{label}</span>
    </div>
  );
}

export default function TechnologiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = statsRef.current;

    if (!element || !("IntersectionObserver" in window)) {
      setStatsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const filteredTechnologies = technologies.filter(
    (tech) =>
      selectedCategory === "All" ||
      tech.category === selectedCategory
  );

  return (
    <section className="technologies-section">
      <div className="tech-decoration tech-decoration-one" aria-hidden="true" />
      <div className="tech-decoration tech-decoration-two" aria-hidden="true" />

      <div className="tech-container">
        <header className="tech-header">       

          <h2 className="tech-heading">
            Modern Technologies We Use to Build Digital Products
            <span>&amp; Tools</span>
          </h2>
        </header>

        <div
          className="tech-filters"
          aria-label="Filter technologies by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`tech-filter ${
                selectedCategory === category ? "active" : ""
              }`}
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tech-grid" aria-live="polite">
          {filteredTechnologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <article
                key={tech.name}
                className="tech-card"
                style={
                  {
                    "--icon-color": tech.color,
                    "--card-index": index,
                  } as React.CSSProperties
                }
              >
                <div className="tech-card-top">
                  <span className="tech-category">
                    {tech.category}
                  </span>
                  <span className="tech-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="tech-icon-wrap">
                  <Icon
                    className="tech-icon"
                    size={38}
                    aria-hidden="true"
                  />
                </div>

                <h3>{tech.name}</h3>

                <div className="tech-card-accent" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
