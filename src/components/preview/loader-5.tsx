"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const INK = "#0a0a0a";

export function Loader5() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(t);
  }, [reduced]);

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
          <div className="flex items-baseline text-5xl sm:text-6xl tracking-[0.15em] font-light leading-none">
            {"TASTRA".split("").map((c, i) => (
              <span
                key={i}
                className="overflow-hidden inline-block"
                style={{ height: "1.1em", lineHeight: 1 }}
              >
                <motion.span
                  className="block"
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
