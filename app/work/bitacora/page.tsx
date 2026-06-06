import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function BitacoraPage() {
  return (
    <main style={{ background: "#FAFAF7", minHeight: "100vh" }}>
      <BackButton />

      {/* HERO */}
      <section style={{ background: "#decbe5", padding: "clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px) clamp(32px, 5vw, 48px)" }}>
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
                  color: "#553d6e",
                  margin: 0,
                }}
              >
                Bitácora
              </h1>
              <p style={{
                fontFamily: "var(--font-darker-grotesque)",
                fontWeight: 900,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                lineHeight: 1,
                color: "#553d6e",
                letterSpacing: "-0.01em",
                margin: 0,
                opacity: 0.7,
              }}>
                Psicológica
              </p>
            </div>

            <span style={{
              display: "inline-flex",
              width: "fit-content",
              alignItems: "center",
              border: "1.5px solid #553d6e",
              borderRadius: "999px",
              padding: "5px 14px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#553d6e",
            }}>
              Web Design · Canva Sites · 2026
            </span>

            <p style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.2vw, 16px)",
              color: "#553d6e",
              lineHeight: 1.65,
              maxWidth: "400px",
              opacity: 0.8,
            }}>
              Sitio web para consultorio de psicología. Diseñado para convertir visitas en consultas.
            </p>

            <a
              href="https://bitacorapsicologica.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                width: "fit-content",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "#553d6e",
                color: "#fff",
                borderRadius: "999px",
                fontFamily: "var(--font-darker-grotesque)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Ver sitio →
            </a>
          </div>

          {/* Right — imagen hero */}
          <div className="bitacora-img-wrap" style={{
            position: "relative",
            width: "100%",
            height: "340px",
            borderRadius: "16px",
            overflow: "hidden",
          }}>
            <Image
              src="/images/bitacora/hero.png"
              alt="Bitácora Psicológica"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
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
          ← Volver al portfolio
        </Link>
      </div>

      <style>{`
        .nav-link-bitacora:hover .nav-title-bitacora { color: #8B7355; transition: color 0.2s ease; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .bitacora-img-wrap { height: 220px !important; border-radius: 12px !important; }
        }
      `}</style>
    </main>
  );
}
