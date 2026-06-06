"use client";

import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function BreeeeeathPage() {
  return (
    <main style={{ background: "#FAFAF7", minHeight: "100vh" }}>
      <BackButton />
      {/* HERO */}
      <section style={{ background: "#ECEAF5", padding: "clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px) 0" }}>
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "end",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "clamp(48px, 8vw, 80px)" }}>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-darker-grotesque)",
                  fontWeight: 900,
                  fontSize: "clamp(56px, 8vw, 96px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                  color: "#13947A",
                  margin: 0,
                }}
              >
                Breeeeeath
              </h1>
            </div>

            <span style={{
              display: "inline-flex",
              width: "fit-content",
              alignItems: "center",
              border: "1.5px solid #13947A",
              borderRadius: "999px",
              padding: "5px 14px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#13947A",
            }}>
              Interaction · Vibe Coding · 2026
            </span>

            <p style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.2vw, 16px)",
              color: "#3A3060",
              lineHeight: 1.65,
              maxWidth: "400px",
              opacity: 0.8,
            }}>
              Una exploración. Una herramienta.
              Para cualquier persona, en cualquier momento.
            </p>

            <a
              href="https://veroal0032.github.io/Breeeeeath/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                width: "fit-content",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "#13947A",
                color: "#fff",
                borderRadius: "999px",
                fontFamily: "var(--font-darker-grotesque)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Respira ahora →
            </a>
          </div>

          {/* Right — imagen hero */}
          <div className="breeeeeath-img-wrap" style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", height: "480px", alignSelf: "end" }}>
            <Image
              src="/images/breeeeeath/hero.png"
              alt="Breeeeeath app"
              width={380}
              height={580}
              priority
              style={{ maxHeight: "480px", width: "auto", display: "block", objectFit: "contain", objectPosition: "center bottom" }}
            />
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
          href="/work/bitacora"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "3px" }}
          className="nav-link-breeeeeath"
        >
          <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", color: "#aaaaaa", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            ← Previous
          </span>
          <span className="nav-title-breeeeeath" style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: "22px", color: "#333333", lineHeight: 1.1 }}>
            Bitácora
          </span>
        </Link>
      </nav>

      {/* ── FOOTER MINI ── */}
      <div style={{ textAlign: "center", padding: "28px 24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Link href="/" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "12px", color: "#aaaaaa", textDecoration: "none" }}>
          ← Volver al portfolio
        </Link>
      </div>

      <style>{`
        .nav-link-breeeeeath:hover .nav-title-breeeeeath { color: #7EB8F7; transition: color 0.2s ease; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .breeeeeath-img-wrap { height: auto !important; }
          .breeeeeath-img-wrap img { max-height: 280px !important; }
        }
      `}</style>
    </main>
  );
}
