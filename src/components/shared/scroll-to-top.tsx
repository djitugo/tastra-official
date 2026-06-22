"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useScroll } from "./scroll-context";

// Scrolls to the top on every route change so navigation never lands mid-page.
export function ScrollToTop() {
  const pathname = usePathname();
  const { scrollToTop } = useScroll();
  useEffect(() => {
    scrollToTop(true);
  }, [pathname, scrollToTop]);
  return null;
}
