import { DM_Sans } from "next/font/google";
import Link from "next/link";
import WorkSplitLayout from "@/components/WorkSplitLayout";
import WorkContactLink from "@/components/WorkContactLink";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export default function WorkPage() {
  return (
    <main
      className={`${dmSans.variable} work-page`}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-geist-sans), sans-serif",
      }}
    >
      {/* Nav */}
      <nav
        className="work-nav"
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          height: 52,
          backgroundColor: "#f7f7f7",
          borderBottom: "1px solid #E8E6DF",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "#4D4D4D",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Verónica Alvarez
        </Link>

        <div className="work-nav-links" style={{ display: "flex", gap: 28 }}>
          <Link
            href="/ALVAREZ_V.pdf"
            target="_blank"
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: 11,
              letterSpacing: "0.04em",
              color: "#888",
              textDecoration: "none",
            }}
          >
            Resume
          </Link>
          <WorkContactLink fontFamily="var(--font-geist-sans), sans-serif" />
        </div>
      </nav>

      {/* Header */}
      <header className="work-header" style={{
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: "48px 40px",
        borderBottom: "1px solid #E8E6DF",
      }}>
        <div>
          <h1 style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 300,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#333",
            margin: 0,
            lineHeight: 1.1,
          }}>
            UX/UI Design
          </h1>
        </div>
      </header>

      {/* Split layout fills remaining height */}
      <div className="work-split-wrapper" style={{ flex: 1, overflow: "hidden" }}>
        <WorkSplitLayout activeId="petlink" />
      </div>
    </main>
  );
}
