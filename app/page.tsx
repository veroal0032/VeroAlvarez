import { GeistSans } from "geist/font/sans";
import InfiniteCanvas from "@/components/InfiniteCanvas";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={GeistSans.className}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "22px 32px",
          borderBottom: "0.5px solid #D3D1C7",
          backgroundColor: "#ffffff",
        }}
      >
        {[
          { label: "Contact", href: "mailto:veroexplores94@gmail.com" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: 11,
              letterSpacing: "0.04em",
              color: "#4D4D4D",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Canvas */}
      <div style={{ flex: 1, marginTop: 61, position: "relative" }}>
        <InfiniteCanvas />
      </div>
    </main>
  );
}
