"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ScrollCtx = {
  lock: () => void;
  unlock: () => void;
  scrollToTop: (immediate?: boolean) => void;
};

const Ctx = createContext<ScrollCtx | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [locks, setLocks] = useState(0);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let raf = 0;

    const start = () => {
      if (lenis || !desktop.matches || reduced.matches) return;
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenisRef.current = lenis;
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
      lenisRef.current = null;
    };

    start();
    const onChange = () => {
      stop();
      start();
    };
    desktop.addEventListener("change", onChange);
    reduced.addEventListener("change", onChange);
    return () => {
      desktop.removeEventListener("change", onChange);
      reduced.removeEventListener("change", onChange);
      stop();
    };
  }, []);

  // Pause Lenis whenever a popup is open so the popup can scroll natively.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (locks > 0) lenis.stop();
    else lenis.start();
  }, [locks]);

  const lock = useCallback(() => setLocks((n) => n + 1), []);
  const unlock = useCallback(() => setLocks((n) => Math.max(0, n - 1)), []);
  const scrollToTop = useCallback((immediate = true) => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate });
    else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }, []);

  const value = useMemo<ScrollCtx>(() => ({ lock, unlock, scrollToTop }), [lock, unlock, scrollToTop]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useScroll(): ScrollCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useScroll must be used within ScrollProvider");
  return v;
}

// Call inside any popup/modal/dropdown while it is open to pause smooth scroll.
export function useScrollLock(active: boolean) {
  const { lock, unlock } = useScroll();
  useEffect(() => {
    if (!active) return;
    lock();
    return () => unlock();
  }, [active, lock, unlock]);
}
