"use client";

import { useState } from "react";
import { GeistSans } from "geist/font/sans";
import InfiniteCanvas from "@/components/InfiniteCanvas";
import ContactSheet from "@/components/ContactSheet";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main
      className={`${GeistSans.className} home-main`}
      style={{
        width: "100vw",
        backgroundColor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        .home-main {
          height: 100vh;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .home-main {
            height: auto;
            min-height: 100vh;
            overflow: visible;
          }
        }
      `}</style>

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
          justifyContent: "space-between",
          padding: "22px 32px",
          borderBottom: "0.5px solid #D3D1C7",
          backgroundColor: "#f7f7f7",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.01em",
            color: "#4D4D4D",
          }}
        >
          Verónica Alvarez
        </span>

        <button
          onClick={() => setContactOpen(true)}
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: 11,
            letterSpacing: "0.04em",
            color: "#4D4D4D",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          Contact
        </button>
      </nav>

      {/* Canvas */}
      <div style={{ flex: 1, marginTop: 61, position: "relative" }}>
        <InfiniteCanvas />
      </div>

      <ContactSheet isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
