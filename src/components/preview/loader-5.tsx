"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const KEY = "tastra-loader-5-seen";
const EASE = [0.22, 1, 0.36, 1] as const;
const INK = "#0a0a0a";

export function Loader5() {
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
    }, 2400);
    return () => clearTimeout(t);
  }, [reduced]);

  if (show === null) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader5"
          className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          aria-hidden
          style={{ color: INK }}
        >
          <div className="flex items-baseline gap-1 overflow-hidden">
            {"TASTRA".split("").map((c, i) => (
              <span key={i} className="overflow-hidden inline-block" style={{ height: "1em", lineHeight: 1 }}>
                <motion.span
                  className="block text-5xl sm:text-6xl tracking-[0.15em] font-light"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.06, ease: EASE }}
                >
                  {c}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.div
            className="mt-8 h-px"
            initial={{ scaleX: 0, width: "120px" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.0, ease: EASE }}
            style={{ background: INK, originX: 0.5 }}
          />

          <motion.p
            className="mt-6 text-[10px] tracking-[0.5em] uppercase opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Skincare. Refined.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
