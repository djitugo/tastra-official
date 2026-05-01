"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const KEY = "tastra-loader-6-seen";
const EASE = [0.22, 1, 0.36, 1] as const;
const CREAM = "#f7f1e6";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

export function Loader6() {
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
          key="loader6"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: CREAM, color: INK }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          aria-hidden
        >
          <motion.p
            className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.5em] uppercase mb-10"
            style={{ color: OCHRE }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Of Ingredient
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              className="font-[family-name:var(--font-lora)] text-6xl sm:text-7xl md:text-8xl leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
            >
              Tastra
            </motion.h1>
          </div>

          <motion.div
            className="mt-10"
            initial={{ scaleX: 0, width: "200px" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
            style={{ height: "1px", background: INK, originX: 0.5 }}
          />

          <motion.p
            className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.5em] uppercase mt-6"
            style={{ color: OCHRE }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            And Restraint
          </motion.p>

          <motion.p
            className="absolute bottom-12 font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] uppercase opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Est. Indonesia
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
