import { DM_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import Image from "next/image";
import WorkContactLink from "@/components/WorkContactLink";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

type Polaroid = {
  id: string;
  caption: string;
  location: string;
  rotation: number;
  image: string | null;
};

type GridPhoto = {
  id: string;
  caption: string;
  image: string | null;
};

const POLAROIDS: Polaroid[] = [
  { id: "p-01", caption: "Buenos Aires, dawn", location: "Argentina", rotation: -3, image: null },
  { id: "p-02", caption: "Mercado del Puerto", location: "Montevideo", rotation: 2, image: null },
  { id: "p-03", caption: "Rooftop, Palermo", location: "Argentina", rotation: -1.5, image: null },
  { id: "p-04", caption: "Coastal road", location: "Venezuela", rotation: 3, image: null },
  { id: "p-05", caption: "Studio still life", location: "Argentina", rotation: -2, image: null },
];

const GRID_PHOTOS: GridPhoto[] = [
  { id: "g-01", caption: "Street, San Telmo", image: null },
  { id: "g-02", caption: "Morning light", image: null },
  { id: "g-03", caption: "Florería, CABA", image: null },
  { id: "g-04", caption: "Cafetería", image: null },
  { id: "g-05", caption: "Playa Macuto", image: null },
  { id: "g-06", caption: "Studio, detail", image: null },
  { id: "g-07", caption: "Palermo rooftop", image: null },
  { id: "g-08", caption: "Sunset, Costanera", image: null },
];

function PlaceholderSvg({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="26" height="26" rx="3" stroke="#D6D3CB" strokeWidth="1.5" />
      <path d="M1 19 L8 13 L14 18 L19 12 L27 19" stroke="#D6D3CB" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="9" cy="9" r="2.5" stroke="#D6D3CB" strokeWidth="1.5" />
    </svg>
  );
}

const isComingSoon = true;

export default function PhotographyPage() {
  return (
    <main
      className={`${dmSans.variable} ${GeistSans.variable}`}
      style={{ width: "100vw", minHeight: "100vh", backgroundColor: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", height: 52, backgroundColor: "#f7f7f7", borderBottom: "1px solid #E8E6DF" }}>
        <Link href="/" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontWeight: 500, color: "#4D4D4D", textDecoration: "none", letterSpacing: "0.01em" }}>
          Verónica Alvarez
        </Link>
        <div style={{ display: "flex", gap: 28 }}>
          <WorkContactLink fontFamily="var(--font-dm-sans), sans-serif" />
        </div>
      </nav>

      {/* Header */}
      <header style={{ padding: "48px 40px", borderBottom: "1px solid #E8E6DF" }}>
        <h1 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 300, fontSize: "clamp(28px, 4vw, 40px)", color: "#333", margin: "0 0 10px", lineHeight: 1.1 }}>
          Photography
        </h1>
        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "#B0AEA6", margin: 0, letterSpacing: "0.02em" }}>
          Film &amp; digital · Argentina · Venezuela
        </p>
      </header>

      {/* Polaroid strip + grid */}
      <div style={{ position: "relative" }}>
        <div className={isComingSoon ? "opacity-35 grayscale-[0.3] pointer-events-none select-none" : undefined}>
          <section style={{ padding: "56px 0 40px", borderBottom: "1px solid #E8E6DF", overflowX: "auto", overflowY: "visible" }}>
            <div style={{ display: "flex", gap: 28, paddingLeft: 40, paddingRight: 40, paddingBottom: 16, width: "max-content" }}>
              {POLAROIDS.map((p) => (
                <div
                  key={p.id}
                  style={{
                    flexShrink: 0,
                    width: 200,
                    transform: `rotate(${p.rotation}deg)`,
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
                    padding: "12px 12px 36px",
                    borderRadius: 2,
                  }}
                >
                  <div style={{ width: "100%", aspectRatio: "1 / 1", position: "relative", overflow: "hidden", backgroundColor: "#F0EEEA" }}>
                    {p.image ? (
                      <Image src={p.image} alt={p.caption} fill sizes="200px" style={{ objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <PlaceholderSvg size={24} />
                      </div>
                    )}
                  </div>
                  <div style={{ marginTop: 10, textAlign: "center" }}>
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, fontWeight: 500, color: "#4D4D4D", margin: "0 0 2px", lineHeight: 1.3 }}>
                      {p.caption}
                    </p>
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 10, color: "#B0AEA6", margin: 0, letterSpacing: "0.04em" }}>
                      {p.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4-col square grid */}
          <section style={{ padding: "48px 40px 96px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {GRID_PHOTOS.map((photo) => (
              <div key={photo.id} style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden", borderRadius: 4, backgroundColor: "#F5F3EF" }}>
                {photo.image ? (
                  <Image src={photo.image} alt={photo.caption} fill sizes="25vw" style={{ objectFit: "cover" }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <PlaceholderSvg size={20} />
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 10, color: "#C8C5BC", margin: 0, letterSpacing: "0.03em", textAlign: "center", padding: "0 8px" }}>
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
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
                Contact me &rarr;
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Back to home */}
      <div style={{ borderTop: "1px solid #E8E6DF", padding: "32px 40px", display: "flex", justifyContent: "flex-end" }}>
        <Link href="/" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "#B0AEA6", textDecoration: "none", whiteSpace: "nowrap" }}>
          Back to home &rarr;
        </Link>
      </div>
    </main>
  );
}
