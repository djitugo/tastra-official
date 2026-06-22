"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const GREEN = "#2d5a3d";
const GREEN_DEEP = "#1f4029";
const CREAM = "#fafaf6";

export function Loader4() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader4"
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: GREEN }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full"
              style={{ background: GREEN_DEEP, opacity: 0.5 }}
            />
          </motion.div>

          <div className="relative flex flex-col items-center" style={{ color: CREAM }}>
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-6"
              style={{ borderColor: CREAM }}
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6" />
              </svg>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="font-[family-name:var(--font-jakarta)] text-5xl sm:text-6xl font-extrabold tracking-tight"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                TASTRA
              </motion.h1>
            </div>

            <motion.p
              className="text-xs uppercase tracking-[0.4em] mt-3 opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              Halal · Natural · Modern
            </motion.p>

            <motion.div
              className="mt-10 flex gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block w-2 h-2 rounded-full"
                  style={{ background: CREAM }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
