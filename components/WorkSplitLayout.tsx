"use client";

import Link from "next/link";
import Image from "next/image";
import EdvanceSections from "@/components/edvance/EdvanceSections";
import MatchaSections from "@/components/matcha/MatchaSections";
import PetlinkSections from "@/components/petlink/PetlinkSections";
import CosecharSections from "@/components/cosechar/CosecharSections";
import BitacoraSections from "@/components/bitacora/BitacoraSections";
import BreeeeeathSections from "@/components/breeeeeath/BreeeeeathSections";

/* â”€â”€ Project list (right column) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const PROJECTS = [
  {
    id: "petlink",
    title: "Petlink",
    tags: "UX/UI · Mobile App",
    href: "/work/petlink",
    image: "/images/petlink/cover.png",
    thumbPosition: "top center",
  },
  {
    id: "edvance",
    title: "Edvance DS",
    tags: "Design Systems · Figma · 2026",
    href: "/work/edvance",
    image: "/images/edvance/landing-edvance.png",
  },
  {
    id: "matcha",
    title: "Matcha Chá",
    tags: "UX/UI · Vibe Coding · AI",
    href: "/work/matcha-cha",
    image: "/images/matcha/hero.png",
    thumbPosition: "center center",
    thumbBg: "transparent",
  },
  {
    id: "cosechar",
    title: "Cosechar",
    tags: "UX/UI · Vibe Coding · Dev",
    href: "/work/cosechar",
    image: "/images/cosechar/hero.png",
    thumbPosition: "center center",
    thumbBg: "transparent",
  },
  {
    id: "bitacora",
    title: "Bitácora Psicológica",
    tags: "Web Design · Canva Sites",
    href: "/work/bitacora",
    image: "/images/bitacora/hero.png",
    thumbPosition: "top center",
  },
  {
    id: "breeeeeath",
    title: "Breeeeeath",
    tags: "Interaction · Vibe Coding",
    href: "/work/breeeeeath",
    image: "/images/breeeeeath/hero.png",
    thumbPosition: "center center",
    thumbBg: "transparent",
    thumbContain: true,
  },
];

/* â”€â”€ Per-project config â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
type ProjectId = "edvance" | "matcha" | "petlink" | "cosechar" | "bitacora" | "breeeeeath";

interface ProjectConfig {
  accent: string;
  heroBg: string;
  heroImage: string;
  heroHeight?: number;
  heroObjectPosition?: string;
  heroFadeStart?: number;
  heroPadding?: string;
  thumbImage: string;
  thumbObjectPosition?: string;
  thumbBg?: string;
  thumbContain?: boolean;
  titleNode: React.ReactNode;
  pill: string;
  description: string;
  meta: [string, string][];
  sections: React.ReactNode;
}

const PROJECT_CONFIG: Record<ProjectId, ProjectConfig> = {
  edvance: {
    accent: "#7B5CF6",
    heroBg: "#E8E4FF",
    heroImage: "/images/edvance/landing-edvance.png",
    thumbImage: "/images/edvance/landing-edvance.png",
    titleNode: (
      <>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 900, fontSize: 26, color: "#4D4D4D", lineHeight: 1, marginBottom: 2 }}>
          <span style={{ color: "#7B5CF6" }}>Ed</span>vance
        </div>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: 15, color: "#7B5CF6" }}>
          Design System
        </div>
      </>
    ),
    pill: "Design Systems · Figma · 2026",
    description: "Multibrand design system for an EdTech ecosystem. 4 brands, 14 component sets, 94 variants.",
    meta: [
      ["Year", "2026"],
      ["Role", "UX/UI Designer · Team Lead"],
      ["Work simulation", "No Country"],
      ["Team", "Verónica Alvarez · Vanessa Gamarra · Javiana Altuve"],
    ],
    sections: <EdvanceSections />,
  },
  matcha: {
    accent: "#155020",
    heroBg: "#e8f0e8",
    heroImage: "/images/matcha/hero.png",
    heroHeight: 500,
    heroObjectPosition: "center center",
    heroPadding: "20px 40px",
    thumbImage: "/images/matcha/hero.png",
    thumbObjectPosition: "center center",
    thumbBg: "transparent",
    titleNode: (
      <>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 900, fontSize: 26, color: "#4D4D4D", lineHeight: 1, marginBottom: 2 }}>
          Matcha <span style={{ color: "#155020" }}>Chá</span>
        </div>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: 15, color: "#155020" }}>
          Self-ordering kiosk
        </div>
      </>
    ),
    pill: "UX/UI · Vibe Coding · AI · 2025",
    description: "Self-ordering kiosk for a matcha café. Designed in Figma Make, connected to Supabase, with PostHog analytics.",
    meta: [
      ["Year", "2025"],
      ["Role", "UX/UI Designer"],
      ["Stack", "Figma Make · Supabase · PostHog"],
      ["Type", "Vibe Coding · AI"],
    ],
    sections: <MatchaSections />,
  },
  petlink: {
    accent: "#1C9674",
    heroBg: "#e6f5ef",
    heroImage: "/images/petlink/hero.png",
    heroHeight: 580,
    heroObjectPosition: "top center",
    heroFadeStart: 72,
    heroPadding: "0px 0px",
    thumbImage: "/images/petlink/cover.png",
    titleNode: (
      <>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 900, fontSize: 26, color: "#4D4D4D", lineHeight: 1, marginBottom: 2 }}>
          Pet<span style={{ color: "#1C9674" }}>link</span>
        </div>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: 15, color: "#1C9674" }}>
          Mobile App
        </div>
      </>
    ),
    pill: "UX/UI · Mobile App · 2024",
    description: "Mobile app connecting pet owners with vets, walkers, shops and pet-friendly places.",
    meta: [
      ["Year", "2024"],
      ["Role", "UX/UI Designer"],
      ["Context", "Coderhouse final project"],
      ["Tools", "Figma"],
    ],
    sections: <PetlinkSections />,
  },
  cosechar: {
    accent: "#1a6a8a",
    heroBg: "#EBF8FF",
    heroImage: "/images/cosechar/hero.png",
    heroHeight: 540,
    heroObjectPosition: "center center",
    heroFadeStart: 78,
    heroPadding: "20px 60px",
    thumbImage: "/images/cosechar/hero.png",
    thumbObjectPosition: "center center",
    thumbBg: "transparent",
    titleNode: (
      <>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 900, fontSize: 26, color: "#4D4D4D", lineHeight: 1, marginBottom: 2 }}>
          Cosech<span style={{ color: "#92DFFE" }}>ar</span>
        </div>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: 15, color: "#1a6a8a" }}>
          Web App
        </div>
      </>
    ),
    pill: "UX/UI · Vibe Coding · 2026",
    description: "Web app that tells you which fruits and vegetables are in season in Argentina right now.",
    meta: [
      ["Year", "2026"],
      ["Role", "UX/UI Designer · Vibe Coder"],
      ["Stack", "React · Vercel · Claude"],
      ["Type", "Personal project"],
    ],
    sections: <CosecharSections />,
  },
  bitacora: {
    accent: "#553d6e",
    heroBg: "#decbe5",
    heroImage: "/images/bitacora/moodboard.png",
    heroHeight: 580,
    heroObjectPosition: "center center",
    heroFadeStart: 80,
    heroPadding: "0px 0px",
    thumbImage: "/images/bitacora/hero.png",
    thumbObjectPosition: "top center",
    titleNode: (
      <>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 900, fontSize: 26, color: "#4D4D4D", lineHeight: 1, marginBottom: 2 }}>
          Bitácora <span style={{ color: "#b09cc8" }}>Psicológica</span>
        </div>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: 15, color: "#553d6e" }}>
          Web Design
        </div>
      </>
    ),
    pill: "Web Design · Canva Sites · 2026",
    description: "Website for a psychology practice. Designed to convert visits into consultations.",
    meta: [
      ["Year", "2026"],
      ["Role", "Web Designer"],
      ["Tool", "Canva Sites"],
      ["Type", "Client project"],
    ],
    sections: <BitacoraSections />,
  },
  breeeeeath: {
    accent: "#13947A",
    heroBg: "#ECEAF5",
    heroImage: "/images/breeeeeath/hero.png",
    heroHeight: 580,
    heroObjectPosition: "center bottom",
    heroFadeStart: 80,
    heroPadding: "0px 0px",
    thumbImage: "/images/breeeeeath/hero.png",
    thumbObjectPosition: "center center",
    thumbBg: "transparent",
    thumbContain: true,
    titleNode: (
      <>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 900, fontSize: 26, color: "#13947A", lineHeight: 1, marginBottom: 2 }}>
          Breeeeeath
        </div>
        <div style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: 15, color: "#13947A" }}>
          Interaction · Vibe Coding
        </div>
      </>
    ),
    pill: "Interaction · Vibe Coding · 2026",
    description: "A breathing tool. An exploration. For anyone, at any moment. No frameworks, no dependencies.",
    meta: [
      ["Year", "2026"],
      ["Role", "Designer · Vibe Coder"],
      ["Stack", "HTML · CSS · JavaScript"],
      ["Type", "Personal project"],
    ],
    sections: <BreeeeeathSections />,
  },
};

/* â”€â”€ Layout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function WorkSplitLayout({ activeId }: { activeId: ProjectId }) {
  const cfg = PROJECT_CONFIG[activeId];

  return (
    <div
      className="work-split-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr 260px",
        height: "100%",
        overflow: "hidden",
        gap: 0,
      }}
    >
      {/* â”€â”€ LEFT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        className="work-split-left"
        style={{
          padding: "40px 30px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: 8,
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
            backgroundColor: cfg.thumbBg ?? cfg.heroBg,
          }}
        >
          <Image
            src={cfg.thumbImage}
            alt={activeId}
            fill
            style={{ objectFit: cfg.thumbContain ? "contain" : "cover", objectPosition: cfg.thumbObjectPosition ?? "top center" }}
          />
        </div>

        <div>{cfg.titleNode}</div>

        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            alignItems: "center",
            border: `1.5px solid ${cfg.accent}`,
            borderRadius: 999,
            padding: "4px 12px",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: cfg.accent,
            whiteSpace: "nowrap",
          }}
        >
          {cfg.pill}
        </span>

        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 400,
            fontSize: 13,
            color: "#555",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {cfg.description}
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {cfg.meta.map(([label, val]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px 0",
                borderTop: "0.5px solid #EBEBEB",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  marginBottom: 2,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 11,
                  color: "#555",
                  lineHeight: 1.5,
                }}
              >
                {val}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingTop: 16 }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#ccc",
              textDecoration: "none",
            }}
          >
            â† Portfolio
          </Link>
        </div>
      </div>

      {/* â”€â”€ CENTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        className="work-split-center"
        style={{
          overflowY: "auto",
          scrollbarWidth: "none",
          display: "flex",
          flexDirection: "column",
          maxWidth: 1100,
          width: "100%",
          justifySelf: "center",
        }}
      >
        <div className="work-hero-top" style={{ paddingTop: 40, flexShrink: 0 }}>
          <div className="work-hero-img" style={{ position: "relative", height: cfg.heroHeight ?? 700, padding: cfg.heroPadding ?? 0, boxSizing: "border-box" }}>
            <Image
              src={cfg.heroImage}
              alt={activeId}
              fill
              style={{ objectFit: cfg.heroPadding ? "contain" : "cover", objectPosition: cfg.heroObjectPosition ?? "top center" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to bottom, transparent ${cfg.heroFadeStart ?? 86}%, #ffffff 100%)`,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        <div className="work-split-sections" style={{ padding: "0 24px 60px" }}>
          {cfg.sections}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #E8E6DF",
            padding: "48px 24px 64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: "clamp(22px, 3vw, 30px)",
                color: "#333",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Let&apos;s work together
            </p>
            <a
              href="mailto:veroexplores94@gmail.com"
              style={{
                alignSelf: "flex-start",
                fontFamily: "var(--font-dm-sans)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#4D4D4D",
                textDecoration: "none",
                padding: "10px 24px",
                borderRadius: 24,
              }}
            >
              Get in touch
            </a>
          </div>

          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#B0AEA6",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Back to home â†’
          </Link>
        </div>
      </div>

      {/* â”€â”€ RIGHT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        className="work-split-right"
        style={{
          overflowY: "auto",
          scrollbarWidth: "none",
          padding: "40px 56px 40px 30px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 9,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#ccc",
            marginBottom: 2,
            display: "block",
          }}
        >
          Projects
        </span>

        {PROJECTS.filter((p) => p.id !== activeId).map((p) => {
          return (
            <Link
              key={p.id}
              href={p.href}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                textDecoration: "none",
                opacity: 0.3,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.3")}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  backgroundColor: (p as any).thumbBg ?? "#E0DDD6",
                  borderRadius: 5,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: (p as any).thumbContain ? "contain" : "cover", objectPosition: (p as any).thumbPosition ?? "top center" }}
                  />
                )}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#4D4D4D", lineHeight: 1.3 }}>
                  {p.title}
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: 9, color: "#aaa", letterSpacing: "0.04em", marginTop: 1 }}>
                  {p.tags}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
