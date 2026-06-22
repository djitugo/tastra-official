"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Theme = { bg: string; fg: string; label: string };

const THEMES: Record<string, Theme> = {
  "design-1": { bg: "#000000", fg: "#ffffff", label: "TASTRA" },
  "design-2": { bg: "#1a1a1a", fg: "#f5f1ea", label: "Tastra" },
  "design-3": { bg: "#f4a8a4", fg: "#ffffff", label: "tastra" },
  "design-4": { bg: "#2d5a3d", fg: "#fafaf6", label: "TASTRA" },
  "design-5": { bg: "#0a0a0a", fg: "#ffffff", label: "TASTRA" },
  "design-6": { bg: "#2a1f17", fg: "#f7f1e6", label: "Tastra" },
};

function designOf(pathname: string): string | null {
  const m = pathname.match(/^\/(design-[1-6])/);
  return m ? m[1] : null;
}

// A quick branded wipe between pages. The big first visit loader is handled
// separately by each design (Loader1..6, gated per session).
export function PageTransition() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const firstMount = useRef(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    if (reduced) return;
    setActive(true);
    const t = setTimeout(() => setActive(false), 620);
    return () => clearTimeout(t);
  }, [pathname, reduced]);

  const design = designOf(pathname);
  if (!design) return null;
  const theme = THEMES[design] ?? THEMES["design-1"];

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="page-transition"
          className="fixed inset-0 z-[150] flex items-center justify-center pointer-events-none"
          style={{ background: theme.bg, color: theme.fg }}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
          aria-hidden
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.12 }}
            className="text-2xl tracking-[0.3em] uppercase"
          >
            {theme.label}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
