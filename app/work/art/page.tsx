"use client";

import { DM_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

type ArtPiece = {
  id: string;
  title: string;
  medium: string;
  year: string;
  tall?: boolean;
  image: string | null;
};

const PIECES: ArtPiece[] = [
  {
    id: "piece-01",
    title: "Soft Study I",
    medium: "Gouache on paper",
    year: "2024",
    tall: true,
    image: null,
  },
  {
    id: "piece-02",
    title: "Figura en reposo",
    medium: "Digital illustration",
    year: "2024",
    tall: false,
    image: null,
  },
  {
    id: "piece-03",
    title: "Bloom Series No. 3",
    medium: "Watercolor",
    year: "2023",
    tall: false,
    image: null,
  },
  {
    id: "piece-04",
    title: "Self Portrait, June",
    medium: "Ink & pencil",
    year: "2024",
    tall: true,
    image: null,
  },
  {
    id: "piece-05",
    title: "Still Life with Cup",
    medium: "Gouache on paper",
    year: "2023",
    tall: false,
    image: null,
  },
  {
    id: "piece-06",
    title: "Landscape Study",
    medium: "Digital illustration",
    year: "2025",
    tall: false,
    image: null,
  },
  {
    id: "piece-07",
    title: "Untitled No. 7",
    medium: "Watercolor & ink",
    year: "2025",
    tall: true,
    image: null,
  },
  {
    id: "piece-08",
    title: "Character Sheet",
    medium: "Digital illustration",
    year: "2025",
    tall: false,
    image: null,
  },
];

const NAV_LINKS = [
  { label: "Contact", href: "mailto:veroexplores94@gmail.com" },
];

function ArtCard({ piece }: { piece: ArtPiece }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        gridRow: piece.tall ? "span 2" : "span 1",
        borderRadius: 6,
        overflow: "hidden",
        backgroundColor: "#F5F3EF",
        cursor: "default",
      }}
    >
      {/* Image or placeholder */}
      {piece.image ? (
        <Image
          src={piece.image}
          alt={piece.title}
          fill
          sizes="25vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: piece.tall ? 480 : 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="26"
              height="26"
              rx="3"
              stroke="#D6D3CB"
              strokeWidth="1.5"
            />
            <path
              d="M1 19 L8 13 L14 18 L19 12 L27 19"
              stroke="#D6D3CB"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle cx="9" cy="9" r="2.5" stroke="#D6D3CB" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(40, 38, 35, 0.72)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "20px 18px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.22s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: 15,
            color: "#ffffff",
            margin: "0 0 4px",
            lineHeight: 1.2,
          }}
        >
          {piece.title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            letterSpacing: "0.03em",
          }}
        >
          {piece.medium} · {piece.year}
        </p>
      </div>
    </div>
  );
}

const isComingSoon = true;

export default function ArtPage() {
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
          href="/"
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
          Art &amp; Illustration
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
          Personal work · Gouache, watercolor &amp; digital
        </p>
      </header>

      {/* Masonry grid */}
      <div style={{ position: "relative" }}>
        <div className={isComingSoon ? "opacity-35 grayscale-[0.3] pointer-events-none select-none" : undefined}>
          <section
            style={{
              padding: "48px 40px 80px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "220px",
              gap: 16,
            }}
          >
            {PIECES.map((piece) => (
              <ArtCard key={piece.id} piece={piece} />
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
                I&apos;m photographing pieces as I finish them â€” check back soon, or reach out if you&apos;d like to see what&apos;s available right now.
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
                Contact me â†’
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
          Want to work together?
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
          Open to illustration commissions, editorial projects, and collaborations.
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
