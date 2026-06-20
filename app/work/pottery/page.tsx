import { DM_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

type Piece = {
  id: string;
  name: string;
  material: string;
  size: string;
  year: string;
  status: "Available" | "Sold";
  price: string;
  image: string | null;
};

const PIECES: Piece[] = [
  {
    id: "bowl-01",
    name: "Organic Bowl No. 1",
    material: "Stoneware",
    size: "14 × 8 cm",
    year: "2024",
    status: "Available",
    price: "USD 65",
    image: null,
  },
  {
    id: "vase-01",
    name: "Bud Vase",
    material: "Earthenware · Matte glaze",
    size: "6 × 18 cm",
    year: "2024",
    status: "Sold",
    price: "USD 80",
    image: null,
  },
  {
    id: "cup-01",
    name: "Handbuilt Cup",
    material: "Stoneware · Soda-fired",
    size: "8 × 10 cm",
    year: "2025",
    status: "Available",
    price: "USD 45",
    image: null,
  },
  {
    id: "plate-01",
    name: "Textured Plate",
    material: "Porcelain",
    size: "22 × 2 cm",
    year: "2025",
    status: "Available",
    price: "USD 90",
    image: null,
  },
  {
    id: "bowl-02",
    name: "Deep Bowl No. 2",
    material: "Stoneware · Iron oxide",
    size: "16 × 10 cm",
    year: "2025",
    status: "Available",
    price: "USD 70",
    image: null,
  },
  {
    id: "vase-02",
    name: "Tall Vessel",
    material: "Earthenware",
    size: "9 × 26 cm",
    year: "2025",
    status: "Sold",
    price: "USD 110",
    image: null,
  },
];

const NAV_LINKS = [
  { label: "Contact", href: "mailto:veroexplores94@gmail.com" },
];

const isComingSoon = true;

export default function PotteryPage() {
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
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          height: 52,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #E8E6DF",
        }}
      >
        <Link
          href="/explore"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "#4D4D4D",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Verónica Alvarez
        </Link>
        <div style={{ display: "flex", gap: 28 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 11,
                letterSpacing: "0.04em",
                color: "#888",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Header */}
      <header
        style={{
          padding: "48px 40px",
          borderBottom: "1px solid #E8E6DF",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 300,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#333",
            margin: "0 0 10px",
            lineHeight: 1.1,
          }}
        >
          Pottery
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: "#B0AEA6",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Hand-built & wheel-thrown ceramics · Buenos Aires
        </p>
      </header>

      {/* Grid */}
      <div style={{ position: "relative" }}>
      <div className={isComingSoon ? "opacity-35 grayscale-[0.3] pointer-events-none select-none" : undefined}>
      <section
        style={{
          padding: "48px 40px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
        }}
      >
        {PIECES.map((piece) => (
          <article
            key={piece.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
                backgroundColor: "#F5F3EF",
                marginBottom: 16,
              }}
            >
              {piece.image ? (
                <Image
                  src={piece.image}
                  alt={piece.name}
                  fill
                  sizes="33vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="14" stroke="#D6D3CB" strokeWidth="1.5" />
                    <path
                      d="M10 22 C10 14 22 14 22 22"
                      stroke="#D6D3CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {/* Name + badge row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#4D4D4D",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {piece.name}
                </p>
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: 9,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color: piece.status === "Available" ? "#5A7A5A" : "#999",
                    backgroundColor:
                      piece.status === "Available" ? "#EAF2EA" : "#F0EEEA",
                    padding: "3px 8px",
                    borderRadius: 20,
                  }}
                >
                  {piece.status}
                </span>
              </div>

              {/* Material · Size */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 11,
                  color: "#B0AEA6",
                  margin: 0,
                  letterSpacing: "0.03em",
                }}
              >
                {piece.material} · {piece.size} · {piece.year}
              </p>

              {/* Price + CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#333",
                    margin: 0,
                  }}
                >
                  {piece.price}
                </p>
                {piece.status === "Available" && (
                  <a
                    href="mailto:veronicacalvarezl2008@gmail.com"
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "#4D4D4D",
                      textDecoration: "none",
                      border: "1px solid #D6D3CB",
                      padding: "6px 14px",
                      borderRadius: 20,
                      transition: "background 0.15s",
                    }}
                  >
                    Inquire
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
      </div>

      {isComingSoon && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: 60,
            zIndex: 10,
          }}
        >
          <div
            className="bg-[#FAFAF7] border border-[#E8E6DF]"
            style={{ padding: "40px 48px", textAlign: "center", maxWidth: 480, width: "100%" }}
          >
            <p
              className="text-lg font-normal text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", margin: "0 0 10px" }}
            >
              This section is still being put together
            </p>
            <p
              className="text-sm text-[#888] max-w-sm mx-auto"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", margin: "0 0 20px" }}
            >
              I&apos;m photographing pieces as I finish them — check back soon, or reach out if you&apos;d like to see what&apos;s available right now.
            </p>
            <a
              href="mailto:veroexplores94@gmail.com"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#4D4D4D",
                textDecoration: "none",
                border: "1px solid #4D4D4D",
                padding: "10px 24px",
                borderRadius: 24,
              }}
            >
              Contact me →
            </a>
          </div>
        </div>
      )}
      </div>

      {/* Footer contact block */}
      <footer
        style={{
          borderTop: "1px solid #E8E6DF",
          padding: "56px 40px 64px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 300,
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "#333",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Interested in a piece?
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: "#B0AEA6",
            margin: 0,
            maxWidth: 400,
          }}
        >
          Each piece is one-of-a-kind. Custom commissions available upon request.
        </p>
        <a
          href="mailto:veronicacalvarezl2008@gmail.com"
          style={{
            marginTop: 8,
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#ffffff",
            backgroundColor: "#4D4D4D",
            textDecoration: "none",
            padding: "12px 28px",
            borderRadius: 24,
          }}
        >
          Get in touch
        </a>
      </footer>
    </main>
  );
}
