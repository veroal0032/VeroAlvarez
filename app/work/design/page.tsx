import { DM_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
});

const PROJECTS = [
  {
    id: "compani",
    title: "Compani",
    tags: "Branding · Graphic Design",
    image: "/images/compani/banner.png",
    href: null,
  },
  {
    id: "palmira",
    title: "Palmira",
    tags: "Branding · Graphic Design",
    image: "/images/palmira/banner.png",
    href: "https://www.behance.net/gallery/230949423/Palmira-Boutique-Beach-Resort",
  },
  {
    id: "pastanostra",
    title: "Pasta Nostra",
    tags: "Branding · Graphic Design",
    image: "/images/pastanostra/banner.png",
    href: "https://www.behance.net/gallery/223834929/Pasta-Nostra-Domestika-Course",
  },
];

export default function DesignPage() {
  return (
    <main
      className={`${dmSans.variable} ${GeistSans.variable}`}
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        fontFamily: "var(--font-dm-sans), sans-serif",
      }}
    >
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
        <Link href="/" style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
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
            { label: "Contact", href: "mailto:veroexplores94@gmail.com" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
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

      {/* Header */}
      <header className="design-header" style={{
        padding: "48px 40px",
        borderBottom: "1px solid #E8E6DF",
      }}>
        <h1 style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 300,
          fontSize: "clamp(28px, 4vw, 40px)",
          color: "#333",
          margin: 0,
          lineHeight: 1.1,
        }}>
          Branding &amp; Graphic Design
        </h1>
      </header>

      {/* Projects row */}
      <section className="design-projects" style={{
        padding: "40px 56px 120px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
      }}>
        {PROJECTS.map((p) => {
          const card = (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{
                width: "100%",
                aspectRatio: "4/3",
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "#F0EEEA",
              }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "#B0AEA6",
                  margin: "0 0 4px",
                }}>
                  {p.tags}
                </p>
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#4D4D4D",
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  {p.title}
                </p>
                {p.href && (
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 11,
                    color: "#B0AEA6",
                    margin: "4px 0 0",
                    letterSpacing: "0.03em",
                  }}>
                    View on Behance â†’
                  </p>
                )}
              </div>
            </div>
          );

          return p.href ? (
            <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {card}
            </a>
          ) : (
            <div key={p.id}>{card}</div>
          );
        })}
      </section>

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
          href="/"
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
          Back to home â†’
        </Link>
      </footer>
    </main>
  );
}
