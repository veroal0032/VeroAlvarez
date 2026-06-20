"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CANVAS_W = 1600;
const CANVAS_H = 1000;

const ABOUT_TEXT =
  "Architect turned multi-medium creator. I work with ceramics, photography, graphic design, interior design — and more recently, UX/UI. Because for me, digital design is simply another way of building spaces where people feel at home.\n\nThis space is where all of it lives together.";

const BASE_ITEMS = [
  { id: "uxui",         category: "UX/UI",        w: 155, h: 115, x: 360, y: 265, bg: "#E0DDD6", href: "/work/petlink", image: "/images/petlink/icon.png" },
  { id: "architecture", category: "Architecture",  w: 215, h: 195, x: 880, y: 195, bg: "#DEDAD2", href: "/work/architecture", image: "/arch/cimer/exterior-02.jpg" },
  { id: "art",          category: "Art",           w: 205, h: 165, x: 620, y: 420, bg: "#E8E6E0", href: "/work/art" },
  { id: "design",       category: "Design",        w: 150, h: 110, x: 840, y: 640, bg: "#E0DDD6", href: "/work/design", image: "/images/compani/banner.png" },
  { id: "photos",       category: "Photos",        w: 110, h: 100, x: 960, y: 485, bg: "#DEDAD2", href: "/work/photography" },
  { id: "pottery",      category: "Pottery",       w: 130, h: 145, x: 380, y: 590, bg: "#E8E6E0", href: "/work/pottery" },
];

const CONNECTIONS: [string, string][] = [
  ["uxui", "architecture"],
  ["uxui", "art"],
  ["architecture", "art"],
  ["art", "photos"],
  ["art", "pottery"],
  ["uxui", "pottery"],
  ["art", "design"],
  ["design", "photos"],
];

function withCenters<T extends { x: number; y: number; w: number; h: number }>(items: T[]) {
  return items.map((i) => ({ ...i, cx: i.x + i.w / 2, cy: i.y + i.h / 2 }));
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function scatterNonOverlapping(
  items: typeof BASE_ITEMS,
  canvasW: number,
  canvasH: number
) {
  const PAD = 30;
  const placed: (typeof BASE_ITEMS[0] & { cx: number; cy: number })[] = [];

  for (const item of items) {
    let x = 0, y = 0, attempts = 0;
    do {
      x = randomBetween(40, canvasW - item.w - 40);
      y = randomBetween(80, canvasH - item.h - 80);
      attempts++;
    } while (
      attempts < 300 &&
      placed.some(
        (p) =>
          x < p.x + p.w + PAD &&
          x + item.w + PAD > p.x &&
          y < p.y + p.h + PAD &&
          y + item.h + PAD > p.y
      )
    );
    placed.push({ ...item, x, y, cx: x + item.w / 2, cy: y + item.h / 2 });
  }
  return placed;
}

type Item = (typeof BASE_ITEMS)[0] & { cx: number; cy: number };

export default function InfiniteCanvas() {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const universeRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const dragMoved = useRef(false); // true if pointer moved enough to count as drag
  const startPos = useRef({ x: 0, y: 0 });
  const offsetBase = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });

  const [items, setItems] = useState<Item[]>(() => withCenters(BASE_ITEMS));
  const [showHint, setShowHint] = useState(true);
  const [scattering, setScattering] = useState(false);

  const applyTransform = useCallback((x: number, y: number, animate = false) => {
    const el = universeRef.current;
    if (!el) return;
    el.style.transition = animate
      ? "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      : "none";
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  // Center the scene on mount based on viewport
  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight - 61; // minus nav

    // Bounding box of all items + text block
    const minX = 30, maxX = 1080, minY = 195, maxY = 735;
    const sceneW = maxX - minX;
    const sceneH = maxY - minY;

    const ox = Math.round((vw - sceneW) / 2 - minX);
    const oy = Math.round((vh - sceneH) / 2 - minY);

    currentOffset.current = { x: ox, y: oy };
    offsetBase.current = { x: ox, y: oy };
    applyTransform(ox, oy);

    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, [applyTransform]);

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragMoved.current = false;
    startPos.current = { x: e.clientX, y: e.clientY };
    offsetBase.current = { ...currentOffset.current };
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragMoved.current = true;
      currentOffset.current = {
        x: offsetBase.current.x + dx,
        y: offsetBase.current.y + dy,
      };
      applyTransform(currentOffset.current.x, currentOffset.current.y);
    },
    [applyTransform]
  );

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grab";
  }, []);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    offsetBase.current = { ...currentOffset.current };
  };

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - startPos.current.x;
      const dy = e.touches[0].clientY - startPos.current.y;
      currentOffset.current = {
        x: offsetBase.current.x + dx,
        y: offsetBase.current.y + dy,
      };
      applyTransform(currentOffset.current.x, currentOffset.current.y);
    },
    [applyTransform]
  );

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("touchmove", onTouchMove, { passive: false });
      wrapper.addEventListener("touchend", onTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (wrapper) {
        wrapper.removeEventListener("touchmove", onTouchMove);
        wrapper.removeEventListener("touchend", onTouchEnd);
      }
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  const handleReset = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight - 61;
    const minX = 30, maxX = 1080, minY = 195, maxY = 735;
    const ox = Math.round((vw - (maxX - minX)) / 2 - minX);
    const oy = Math.round((vh - (maxY - minY)) / 2 - minY);
    currentOffset.current = { x: ox, y: oy };
    setItems(withCenters(BASE_ITEMS));
    applyTransform(ox, oy, true);
  };

  const handleScatter = () => {
    setScattering(true);
    const next = scatterNonOverlapping(BASE_ITEMS, CANVAS_W, CANVAS_H);
    setItems(next);
    setTimeout(() => setScattering(false), 500);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={wrapperRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          cursor: "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        <div
          ref={universeRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: CANVAS_W,
            height: CANVAS_H,
            willChange: "transform",
          }}
        >
          {/* Dotted lines */}
          <svg
            style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
            width={CANVAS_W}
            height={CANVAS_H}
          >
            {CONNECTIONS.map(([aId, bId]) => {
              const a = items.find((i) => i.id === aId)!;
              const b = items.find((i) => i.id === bId)!;
              if (!a || !b) return null;
              return (
                <line
                  key={`${aId}-${bId}`}
                  x1={a.cx} y1={a.cy}
                  x2={b.cx} y2={b.cy}
                  stroke="#D3D1C7"
                  strokeWidth={0.5}
                  strokeDasharray="3 6"
                />
              );
            })}
          </svg>

          {/* About text */}
          <div
            style={{
              position: "absolute",
              left: 30,
              top: 240,
              width: 200,
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              lineHeight: 1.8,
              color: "#4D4D4D",
              whiteSpace: "pre-line",
            }}
          >
            {ABOUT_TEXT}
          </div>

          {/* Images */}
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                position: "absolute",
                left: item.x,
                top: item.y,
                transition: scattering ? "left 0.5s ease, top 0.5s ease" : "none",
              }}
            >
              <div
                style={{
                  marginBottom: 7,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "#4D4D4D",
                }}
              >
                {item.category}
              </div>
              <div
                onClick={() => {
                  if (!dragMoved.current && item.href) router.push(item.href);
                }}
                style={{
                  position: "relative",
                  width: item.w,
                  height: item.h,
                  backgroundColor: item.bg,
                  border: "0.5px solid #D3D1C7",
                  cursor: item.href ? "pointer" : "inherit",
                  overflow: "hidden",
                }}
              >
                {"image" in item && item.image && (
                  <Image
                    src={item.image as string}
                    alt={item.category}
                    fill
                    sizes={`${item.w}px`}
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hint */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 9,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#B0AEA6",
          pointerEvents: "none",
          transition: "opacity 0.9s ease",
          opacity: showHint ? 1 : 0,
          whiteSpace: "nowrap",
        }}
      >
        hold &amp; drag to explore
      </div>

      {/* Controls */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 28,
          display: "flex",
          gap: 8,
        }}
      >
        {[
          { label: "Reset", onClick: handleReset },
          { label: "Scatter", onClick: handleScatter },
        ].map(({ label, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 9,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#4D4D4D",
              background: "transparent",
              border: "0.5px solid #D3D1C7",
              padding: "6px 14px",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
