"use client";

import { useState } from "react";
import ContactSheet from "@/components/ContactSheet";

export default function WorkContactLink({
  fontFamily = "var(--font-dm-sans), sans-serif",
}: {
  fontFamily?: string;
}) {
  const [open, setOpen] = useState(false);

  const style = {
    fontFamily,
    fontSize: 11,
    letterSpacing: "0.04em",
    color: "#888",
    textDecoration: "none",
  };

  return (
    <>
      <a
        href="mailto:veroexplores94@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-contact-desktop"
        style={style}
      >
        Contact
      </a>
      <button
        onClick={() => setOpen(true)}
        className="work-contact-mobile"
        style={{
          ...style,
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        Contact
      </button>
      <ContactSheet isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
