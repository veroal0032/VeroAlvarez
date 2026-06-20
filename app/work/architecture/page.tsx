"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

/* ── Types ──────────────────────────────────────────────────── */
interface ProjectImage {
  src: string;
  tag: string;
}

interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
  description: string;
  software: string[];
  layout: "featured" | "triple" | "duo";
  images: ProjectImage[];
  extraImages?: ProjectImage[];
}

interface LightboxState {
  src: string;
  tag: string;
  projectTitle: string;
  projectImages: ProjectImage[];
  index: number;
}

/* ── Data ───────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: "01",
    title: "CIMER — Centro de Rehabilitación y Medicina Regenerativa",
    location: "Las Mercedes, Caracas · VE",
    year: "2024",
    type: "Comercial",
    description:
      "Full renovation of an abandoned commercial space into a rehabilitation and regenerative medicine center. Construction plans, 3D visualization and on-site supervision.",
    software: ["SketchUp", "AutoCAD", "Lumion"],
    layout: "featured",
    images: [
      { src: "/arch/cimer/exterior-02.jpg", tag: "Exterior rendering" },
      { src: "/arch/cimer/interior-elevation-01.jpg", tag: "Interior elevation" },
      { src: "/arch/cimer/floorplan.png", tag: "Floor plan" },
    ],
    extraImages: [
      { src: "/arch/cimer/exterior-01.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-03.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-04.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-05.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-06.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-07.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-08.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-09.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-10.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-11.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-12.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-13.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-14.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-15.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-17.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/exterior-18.jpg", tag: "Interior rendering" },
      { src: "/arch/cimer/interior-elevation-01b.png", tag: "Interior elevation" },
      { src: "/arch/cimer/interior-elevation-02.jpg", tag: "Interior elevation" },
    ],
  },
  {
    id: "02",
    title: "Kitchen Remodeling — Florida",
    location: "Florida · USA",
    year: "2024",
    type: "Residencial",
    description:
      "3D design and visualization for a residential kitchen remodel. Multiple material and finish proposals presented according to client requirements.",
    software: ["SketchUp", "Layout", "Lumion"],
    layout: "triple",
    images: [
      { src: "/arch/kitchen/interior-01.jpg", tag: "Interior rendering 1" },
      { src: "/arch/kitchen/interior-02.jpg", tag: "Interior rendering 2" },
      { src: "/arch/kitchen/layout-01.jpg", tag: "Layout 1" },
    ],
    extraImages: [
      { src: "/arch/kitchen/interior-03.jpg", tag: "Interior rendering 3" },
      { src: "/arch/kitchen/interior-04.jpg", tag: "Interior rendering 4" },
      { src: "/arch/kitchen/interior-05.jpg", tag: "Interior rendering 5" },
      { src: "/arch/kitchen/layout-02.jpg", tag: "Layout 2" },
      { src: "/arch/kitchen/layout-03.jpg", tag: "Layout 3" },
      { src: "/arch/kitchen/layout-04.jpg", tag: "Layout 4" },
      { src: "/arch/kitchen/layout-05.jpg", tag: "Layout 5" },
      { src: "/arch/kitchen/layout-06.jpg", tag: "Layout 6" },
    ],
  },
  {
    id: "03",
    title: "Hector's Bedroom — Diseño Residencial",
    location: "Caracas · VE",
    year: "2023",
    type: "Residencial",
    description:
      "Interior design direction, planning and rendering of a bedroom and bathroom. Storage optimization and full finish renovation of the bathroom.",
    software: ["AutoCAD", "SketchUp", "Lumion"],
    layout: "triple",
    images: [
      { src: "/arch/hectors/render-01.jpg", tag: "Bedroom rendering 1" },
      { src: "/arch/hectors/render-02.jpg", tag: "Bedroom rendering 2" },
      { src: "/arch/hectors/render-03.jpg", tag: "Bedroom rendering 3" },
    ],
    extraImages: [
      { src: "/arch/hectors/render-04.jpg", tag: "Rendering 4" },
      { src: "/arch/hectors/render-04.jpg", tag: "Rendering 4" },
      { src: "/arch/hectors/render-05.jpg", tag: "Rendering 5" },
      { src: "/arch/hectors/final-view.jpg", tag: "Final view" },
      { src: "/arch/hectors/plan-01.jpg", tag: "Plan 1" },
      { src: "/arch/hectors/plan-02.jpg", tag: "Plan 2" },
      { src: "/arch/hectors/plan-03.jpg", tag: "Plan 3" },
      { src: "/arch/hectors/plan-04.jpg", tag: "Plan 4" },
      { src: "/arch/hectors/plan-05.jpg", tag: "Plan 5" },
      { src: "/arch/hectors/plan-06.jpg", tag: "Plan 6" },
      { src: "/arch/hectors/plan-07.jpg", tag: "Plan 7" },
      { src: "/arch/hectors/plan-08.jpg", tag: "Plan 8" },
      { src: "/arch/hectors/plan-09.jpg", tag: "Plan 9" },
    ],
  },
  {
    id: "04",
    title: "Parley Office — Espacio Corporativo",
    location: "Chacao, Caracas · VE",
    year: "2023",
    type: "Comercial",
    description:
      "Full design of corporate offices: open work areas, private offices, recording room, meeting rooms and lounge areas aligned with the company's visual identity.",
    software: ["SketchUp", "Lumion", "AutoCAD"],
    layout: "triple",
    images: [
      { src: "/arch/parley/render-01.jpg", tag: "Interior rendering 1" },
      { src: "/arch/parley/office.jpg", tag: "Office" },
      { src: "/arch/parley/conference-room.jpg", tag: "Conference room" },
    ],
    extraImages: [
      { src: "/arch/parley/render-02.jpg", tag: "Interior rendering 2" },
      { src: "/arch/parley/render-03.jpg", tag: "Interior rendering 3" },
      { src: "/arch/parley/render-04.jpg", tag: "Interior rendering 4" },
      { src: "/arch/parley/render-05.jpg", tag: "Interior rendering 5" },
      { src: "/arch/parley/render-06.jpg", tag: "Interior rendering 6" },
      { src: "/arch/parley/render-07.jpg", tag: "Interior rendering 7" },
      { src: "/arch/parley/render-08.jpg", tag: "Interior rendering 8" },
      { src: "/arch/parley/render-09.jpg", tag: "Interior rendering 9" },
      { src: "/arch/parley/bathroom.jpg", tag: "Bathroom" },
      { src: "/arch/parley/outside-zone.jpg", tag: "Outside zone" },
    ],
  },
];

/* ── Thumbnail ──────────────────────────────────────────────── */
function Thumbnail({
  image,
  projectTitle,
  projectImages,
  index,
  height,
  onOpen,
}: {
  image: ProjectImage;
  projectTitle: string;
  projectImages: ProjectImage[];
  index: number;
  height: string;
  onOpen: (state: LightboxState) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() =>
        onOpen({
          src: image.src,
          tag: image.tag,
          projectTitle,
          projectImages,
          index,
        })
      }
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#E2E0DA",
      }}
      className="group"
    >
      {!imgError ? (
        <Image
          src={image.src}
          alt={image.tag}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#D8D6D0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.1em" }}>
            {image.tag.toUpperCase()}
          </span>
        </div>
      )}
      <span
        style={{
          position: "absolute",
          bottom: 8,
          left: 8,
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          fontSize: 10,
          padding: "2px 8px",
          backdropFilter: "blur(4px)",
          letterSpacing: "0.04em",
        }}
      >
        {image.tag}
      </span>
    </div>
  );
}

/* ── Image Grid ─────────────────────────────────────────────── */
function ImageGrid({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (state: LightboxState) => void;
}) {
  const allImages = [...project.images, ...(project.extraImages ?? [])];

  if (project.layout === "featured") {
    return (
      <div className="arch-grid-featured" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 4 }}>
        <Thumbnail
          image={project.images[0]}
          projectTitle={project.title}
          projectImages={allImages}
          index={0}
          height="288px"
          onOpen={onOpen}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {project.images.slice(1).map((img, i) => (
            <Thumbnail
              key={img.src}
              image={img}
              projectTitle={project.title}
              projectImages={allImages}
              index={i + 1}
              height="140px"
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.layout === "triple") {
    return (
      <div className="arch-grid-triple" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
        {project.images.map((img, i) => (
          <Thumbnail
            key={img.src}
            image={img}
            projectTitle={project.title}
            projectImages={allImages}
            index={i}
            height="208px"
            onOpen={onOpen}
          />
        ))}
      </div>
    );
  }

  // duo
  return (
    <div className="arch-grid-duo" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
      {project.images.map((img, i) => (
        <Thumbnail
          key={img.src}
          image={img}
          projectTitle={project.title}
          projectImages={allImages}
          index={i}
          height="240px"
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

/* ── Lightbox ───────────────────────────────────────────────── */
function Lightbox({
  state,
  onClose,
  onNav,
}: {
  state: LightboxState;
  onClose: () => void;
  onNav: (direction: 1 | -1) => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNav]);

  const hasPrev = state.index > 0;
  const hasNext = state.index < state.projectImages.length - 1;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(4px)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 24,
          cursor: "pointer",
          lineHeight: 1,
          padding: "4px 8px",
        }}
      >
        ✕
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(-1); }}
          style={{
            position: "absolute",
            left: 24,
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 28,
            cursor: "pointer",
            padding: "8px 16px",
            opacity: 0.7,
          }}
        >
          ←
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(1); }}
          style={{
            position: "absolute",
            right: 24,
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 28,
            cursor: "pointer",
            padding: "8px 16px",
            opacity: 0.7,
          }}
        >
          →
        </button>
      )}

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          maxWidth: "min(896px, 90vw)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={state.src}
          alt={state.tag}
          style={{
            maxWidth: "100%",
            maxHeight: "85vh",
            objectFit: "contain",
            display: "block",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: 12, margin: 0 }}>{state.tag}</p>
          <p style={{ color: "#aaa", fontSize: 10, margin: "2px 0 0", letterSpacing: "0.05em" }}>
            {state.projectTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function ArchitecturePage() {
  const [filter, setFilter] = useState<"All" | "Comercial" | "Residencial">("All");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  const handleNav = useCallback(
    (direction: 1 | -1) => {
      if (!lightbox) return;
      const newIndex = lightbox.index + direction;
      if (newIndex < 0 || newIndex >= lightbox.projectImages.length) return;
      setLightbox({
        ...lightbox,
        index: newIndex,
        src: lightbox.projectImages[newIndex].src,
        tag: lightbox.projectImages[newIndex].tag,
      });
    },
    [lightbox]
  );

  const counts = {
    All: projects.length,
    Comercial: projects.filter((p) => p.type === "Comercial").length,
    Residencial: projects.filter((p) => p.type === "Residencial").length,
  };

  const filterLabels: Record<"All" | "Comercial" | "Residencial", string> = {
    All: `All (${projects.length})`,
    Comercial: `Commercial (${counts.Comercial})`,
    Residencial: `Residential (${counts.Residencial})`,
  };

  return (
    <div className={`${dmSans.variable} ${GeistSans.variable}`} style={{ background: "#ffffff", minHeight: "100vh", color: "#333333" }}>
      {/* Nav */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        height: 52,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E8E6DF",
      }}>
        <Link href="/explore" style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: 13,
          fontWeight: 500,
          color: "#4D4D4D",
          textDecoration: "none",
          letterSpacing: "0.01em",
        }}>
          Verónica Alvarez
        </Link>
        <div style={{ display: "flex", gap: 28 }}>
          {[
            { label: "Resume", href: "/ALVAREZ%20VER%C3%B3NICA%20%20EN-AR.pdf", target: "_blank" },
            { label: "Contact", href: "mailto:veroexplores94@gmail.com", target: "_blank" },
          ].map(({ label, href, target }: { label: string; href: string; target?: string }) => (
            <Link key={label} href={href} target={target} style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: 11,
              letterSpacing: "0.04em",
              color: "#888",
              textDecoration: "none",
            }}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
      {lightbox && (
        <Lightbox
          state={lightbox}
          onClose={() => setLightbox(null)}
          onNav={handleNav}
        />
      )}

      {/* Header */}
      <header
        className="arch-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "48px 40px",
          borderBottom: "1px solid #E8E6DF",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#333",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Architecture & Interior Design
          </h1>
        </div>
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              color: "#aaa",
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            2017 — 2024
            <br />
            Venezuela · USA
            <br />
            4 projects
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="arch-body" style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside
          className="arch-sidebar"
          style={{
            width: 224,
            flexShrink: 0,
            borderRight: "1px solid #E8E6DF",
            padding: "32px 24px",
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 12,
              color: "#777",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Architect based in Buenos Aires. 7 years of practice in Venezuela and the USA — residential, commercial and corporate interiors.
          </p>

          {/* Filters */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {(["All", "Comercial", "Residencial"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 11,
                  textAlign: "left",
                  padding: "7px 12px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 4,
                  background: filter === cat ? "#333333" : "transparent",
                  color: filter === cat ? "#FAFAF7" : "#888",
                  transition: "background 0.15s ease, color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (filter !== cat) (e.currentTarget as HTMLButtonElement).style.background = "#F0EEE6";
                }}
                onMouseLeave={(e) => {
                  if (filter !== cat) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {filterLabels[cat]}
              </button>
            ))}
          </div>

        </aside>

        {/* Projects */}
        <main className="arch-main" style={{ flex: 1, padding: "40px 48px 80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {filtered.map((project) => (
              <article key={project.id}>
                {/* Project header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    paddingBottom: 12,
                    borderBottom: "1px solid #E8E6DF",
                    marginBottom: 16,
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 11,
                        color: "#aaa",
                        flexShrink: 0,
                      }}
                    >
                      {project.id}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 300,
                        fontSize: 18,
                        color: "#1a1a1a",
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 11,
                      color: "#bbb",
                      flexShrink: 0,
                      textAlign: "right",
                    }}
                  >
                    {project.location} / {project.year}
                  </span>
                </div>

                {/* Image grid */}
                <ImageGrid project={project} onOpen={setLightbox} />

                {/* Description + software */}
                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 32,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 12,
                      color: "#888",
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: 560,
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", flexShrink: 0 }}>
                    {project.software.map((sw) => (
                      <span
                        key={sw}
                        style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: 10,
                          color: "#666",
                          background: "#EEECEA",
                          padding: "3px 8px",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #E8E6DF",
          padding: "48px 40px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
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
              fontFamily: "var(--font-dm-sans), sans-serif",
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
          href="/explore"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 11,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#B0AEA6",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Back to home →
        </Link>
      </footer>
    </div>
  );
}
