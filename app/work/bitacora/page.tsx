"use client";

import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function BitacoraPage() {
  return (
    <main style={{ background: "#FAFAF7", minHeight: "100vh" }}>
      <BackButton />

      {/* HERO */}
      <section style={{ background: "#FDF8F3" }} className="py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1
            style={{
              fontFamily: "var(--font-darker-grotesque, 'DM Sans', sans-serif)",
              fontWeight: 900,
              fontSize: "96px",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "#333" }}>Bitácora</span>
            <br />
            <span style={{ color: "#8B7355" }}>Psicológica</span>
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
            Un espacio digital para conectar
            <br />
            con quien te puede ayudar.
          </p>

          <div className="mt-8">
            <a
              href="https://bitacorapsicologica.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#8B7355",
                color: "#fff",
                borderRadius: "100px",
                padding: "14px 32px",
                fontFamily: "var(--font-darker-grotesque, 'DM Sans', sans-serif)",
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
              Ver sitio →
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN ÚNICA */}
      <section style={{ background: "#FAFAF7" }} className="py-20">
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
            Bitácora Psicológica es el espacio digital de una psicóloga en
            Venezuela. El objetivo era simple: que quien llega buscando ayuda
            encuentre la información que necesita y dé el siguiente paso.
            <br />
            <br />
            El sitio fue diseñado en Canva Sites, priorizando claridad, calidez
            y una estructura que guíe al visitante hacia el contacto. Un
            proyecto pro bono, con intención real.
          </p>
        </div>
      </section>

      {/* NAVEGACIÓN FINAL */}
      <nav
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "clamp(32px, 5vw, 56px) clamp(24px, 8vw, 80px)",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link
          href="/work/cosechar"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "3px" }}
          className="nav-link-bitacora"
        >
          <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", color: "#aaaaaa", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            ← Previous
          </span>
          <span className="nav-title-bitacora" style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: "22px", color: "#333333", lineHeight: 1.1 }}>
            Cosechar
          </span>
        </Link>

        <Link
          href="/work/breeeeeath"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-end" }}
          className="nav-link-bitacora"
        >
          <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", color: "#aaaaaa", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Next →
          </span>
          <span className="nav-title-bitacora" style={{ fontFamily: "var(--font-darker-grotesque)", fontWeight: 700, fontSize: "22px", color: "#333333", lineHeight: 1.1, textAlign: "right" }}>
            Breeeeeath
          </span>
        </Link>
      </nav>

      {/* FOOTER MINI */}
      <div style={{ textAlign: "center", padding: "28px 24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <Link href="/" style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "12px", color: "#aaaaaa", textDecoration: "none" }}>
          ← Back to portfolio
        </Link>
      </div>

      <style>{`
        .nav-link-bitacora:hover .nav-title-bitacora { color: #8B7355; transition: color 0.2s ease; }
      `}</style>
    </main>
  );
}
