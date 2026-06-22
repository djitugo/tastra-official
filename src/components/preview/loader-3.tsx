"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const SPRING = { type: "spring" as const, stiffness: 220, damping: 18 };
const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const INK = "#3a2a1f";

export function Loader3() {
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
          key="loader3"
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: PEACH, color: INK }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
          aria-hidden
        >
          <motion.div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
            style={{ background: ROSE, opacity: 0.5 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
            style={{ background: PEACH_DEEP }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="relative flex items-center gap-3">
            <motion.div
              className="rounded-full flex items-center justify-center text-white"
              style={{ background: ROSE, width: 64, height: 64 }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ ...SPRING, delay: 0.2 }}
            >
              <motion.svg
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="currentColor"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                aria-hidden
              >
                <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
              </motion.svg>
            </motion.div>

            <motion.span
              className="text-6xl sm:text-7xl font-extrabold tracking-tight"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...SPRING, delay: 0.45 }}
            >
              tastra
            </motion.span>
          </div>

          <motion.p
            className="absolute bottom-16 left-0 right-0 text-center text-sm font-bold"
            style={{ color: `${INK}99` }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            sayang kulit, sayang kamu
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
