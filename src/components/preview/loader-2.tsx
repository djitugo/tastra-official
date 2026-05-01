"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const KEY = "tastra-loader-2-seen";
const EASE = [0.22, 1, 0.36, 1] as const;
const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

export function Loader2() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return;
    }
    if (sessionStorage.getItem(KEY)) {
      setShow(false);
      return;
    }
    setShow(true);
    const t = setTimeout(() => {
      sessionStorage.setItem(KEY, "1");
      setShow(false);
    }, 2200);
    return () => clearTimeout(t);
  }, [reduced]);

  if (show === null) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader2"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: CREAM, color: INK }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          aria-hidden
        >
          <motion.p
            className="text-[10px] tracking-[0.5em] uppercase mb-10"
            style={{ color: GOLD }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            Vol. I
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl md:text-8xl leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
            >
              Tastra
            </motion.h1>
          </div>

          <div className="overflow-hidden mt-2">
            <motion.p
              className="font-[family-name:var(--font-serif-alt)] italic text-2xl"
              style={{ color: GOLD }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.6, ease: EASE }}
            >
              Atelier
            </motion.p>
          </div>

          <motion.div
            className="mt-10 h-px"
            style={{ background: INK, originX: 0.5 }}
            initial={{ scaleX: 0, width: "240px" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
          />

          <motion.p
            className="mt-6 text-[10px] tracking-[0.4em] uppercase"
            style={{ color: `${INK}80` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            ⸻ Made with patience ⸻
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
