"use client";

import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function BreeeeeathPage() {
  return (
    <main style={{ background: "#FAFAF7", minHeight: "100vh" }}>
      <BackButton />
      {/* HERO */}
      <section
        style={{ background: "#F0F4FF" }}
        className="py-32"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1
            style={{
              fontFamily: "var(--font-display, 'DM Sans', sans-serif)",
              fontWeight: 900,
              fontSize: "96px",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "#333" }}>Bree</span>
            <span style={{ color: "#7EB8F7" }}>eeath</span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#888",
              lineHeight: 1.6,
            }}
            className="mt-4"
          >
            Una exploración. Una herramienta.
            <br />
            Para cualquier persona, en cualquier momento.
          </p>

          <div className="mt-8">
            <a
              href="https://veroal0032.github.io/Breeeeeath/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#7EB8F7",
                color: "#fff",
                borderRadius: "100px",
                padding: "14px 32px",
                fontFamily: "var(--font-display, 'DM Sans', sans-serif)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "filter 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.filter = "brightness(110%)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.filter = "brightness(100%)";
                el.style.transform = "translateY(0)";
              }}
            >
              Respira ahora →
            </a>
          </div>
        </div>
      </section>

      {/* POR QUÉ EXISTE */}
      <section
        style={{ background: "#FAFAF7" }}
        className="py-20"
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              color: "#555",
              lineHeight: 1.8,
            }}
          >
            La respiración es una herramienta que cualquier persona puede usar
            en cualquier momento, no solo en situaciones de estrés o ansiedad.
            Quería construir algo sencillo que lo recordara.
            <br />
            <br />
            Empecé con un dibujo. Luego lo construí vibecodeando con HTML, CSS
            y JavaScript. Sin frameworks, sin dependencias.
          </p>
        </div>
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <nav
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "clamp(32px, 5vw, 56px) clamp(24px, 8vw, 80px)",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Link
          href="/work/cosechar"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "3px" }}
          className="nav-link-breeeeeath"
        >
          <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", color: "#aaaaaa", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            ← Previous
          </span>
          <span className="nav-title-breeeeeath" style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: "22px", color: "#333333", lineHeight: 1.1 }}>
            Cosechar
          </span>
        </Link>
      </nav>

      {/* ── FOOTER MINI ── */}
      <div style={{ textAlign: "center", padding: "28px 24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Link href="/" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "12px", color: "#aaaaaa", textDecoration: "none" }}>
          ← Back to portfolio
        </Link>
      </div>

      <style>{`
        .nav-link-breeeeeath:hover .nav-title-breeeeeath { color: #7EB8F7; transition: color 0.2s ease; }
      `}</style>
    </main>
  );
}
