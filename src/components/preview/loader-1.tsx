"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.85, 0, 0.15, 1] as const;

export function Loader1() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, [reduced]);

  const letters = "TASTRA".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader1"
          className="fixed inset-0 z-[200] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.9, ease: EASE_IN_OUT }}
          aria-hidden
        >
          <div className="font-[family-name:var(--font-display)] uppercase text-[18vw] sm:text-[14vw] tracking-tighter leading-none">
            {letters.map((c, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom"
                style={{ height: "1em", lineHeight: 1 }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.07, ease: EASE_OUT }}
                >
                  {c}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.div
            className="mt-8 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.4em] text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.span
              className="block w-12 h-px bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: EASE_OUT }}
              style={{ originX: 0 }}
            />
            Skincare lokal
            <motion.span
              className="block w-12 h-px bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: EASE_OUT }}
              style={{ originX: 1 }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 mx-auto w-40 h-[2px] bg-white/20 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
