"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader3 } from "@/components/preview/loader-3";
import { useCart } from "@/lib/cart";
import { SearchBox, type SearchTheme } from "@/components/shared/search-box";

const PEACH = "#fff5ee";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";

const NAV = [
  { href: "/design-3", label: "Home" },
  { href: "/design-3/about", label: "About" },
  { href: "/design-3/shop", label: "Shop" },
  { href: "/design-3/blog", label: "Blog" },
  { href: "/design-3/contact", label: "Contact" },
];

const SEARCH_THEME: SearchTheme = {
  fieldBg: "#ffffff",
  fieldFg: INK,
  panelBg: "#ffffff",
  panelFg: INK,
  muted: `${INK}99`,
  border: "#ffd9c7",
  accent: ROSE_DEEP,
  radius: 16,
  mono: false,
  thumbBg: "#ffe0d0",
};

function Sparkle({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

function GlobeIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export default function Design3Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Loader3 />
      <div className="font-[family-name:var(--font-rounded)] flex flex-col flex-1" style={{ background: PEACH, color: INK }}>
        {/* ANNOUNCEMENT BAR */}
        <div className="text-center py-2.5 text-xs flex items-center justify-center gap-2 px-4" style={{ background: ROSE, color: "#fff" }}>
          <Sparkle size={12} />
          <span className="font-semibold">Free shipping nationwide plus up to 50% off launch sale. Treat your skin, ya!</span>
          <Sparkle size={12} />
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-40 backdrop-blur" style={{ background: `${PEACH}E6`, borderBottom: "1px solid #ffd9c7" }}>
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-4 flex items-center gap-3">
            <Link href="/design-3" className="text-2xl font-extrabold tracking-tight flex items-center gap-1.5 shrink-0" style={{ color: INK }} aria-label="Tastra home">
              <Logo height={22} />
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="inline-flex w-6 h-6 rounded-full items-center justify-center text-white"
                style={{ background: ROSE }}
              >
                <Sparkle size={12} />
              </motion.span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold ml-2" style={{ color: INK }} aria-label="Primary">
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 ml-auto shrink-0">
              <div className="hidden md:block w-56">
                <SearchBox design="design-3" theme={SEARCH_THEME} />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center min-w-11 min-h-11 rounded-full transition-colors hover:bg-white"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </button>

              <Link
                href="/design-3/login"
                className="hidden sm:inline-flex items-center min-h-11 px-3 rounded-full text-xs font-bold transition-colors hover:bg-white"
                aria-label="Admin login"
              >
                Admin
              </Link>

              <Link
                href="/design-3/cart"
                className="inline-flex items-center gap-2 rounded-full px-4 min-h-11 text-sm font-bold transition-transform hover:scale-105"
                style={{ background: INK, color: PEACH }}
                aria-label={`Bag, ${ready ? count : 0} items`}
              >
                Bag <span className="rounded-full px-1.5 text-[11px] leading-none py-0.5 min-w-[20px] text-center" style={{ background: ROSE, color: "#fff" }}>{ready ? count : 0}</span>
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden inline-flex flex-col items-center justify-center min-w-11 min-h-11 rounded-full transition-colors hover:bg-white"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className="block w-5 h-[2px] rounded-full mb-1.5" style={{ background: INK }} />
                <span className="block w-5 h-[2px] rounded-full mb-1.5" style={{ background: INK }} />
                <span className="block w-5 h-[2px] rounded-full" style={{ background: INK }} />
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden"
                style={{ borderTop: "1px solid #ffd9c7" }}
              >
                <div className="px-5 sm:px-6 py-4">
                  <SearchBox design="design-3" theme={SEARCH_THEME} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MOBILE / TABLET MENU */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden overflow-hidden"
                style={{ borderTop: "1px solid #ffd9c7", background: PEACH }}
                aria-label="Mobile"
              >
                <ul className="flex flex-col px-3 py-2">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-3 rounded-2xl text-base font-semibold transition-colors hover:bg-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/design-3/login"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-3 rounded-2xl text-base font-semibold opacity-70 transition-colors hover:bg-white"
                    >
                      Admin Login
                    </Link>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer style={{ background: INK, color: PEACH }}>
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20">
            <div className="grid gap-12 md:grid-cols-4">
              <div className="md:col-span-2">
                <p className="text-3xl font-extrabold flex items-center gap-2">
                  <Logo height={28} invert />
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="inline-flex w-7 h-7 rounded-full items-center justify-center text-white"
                    style={{ background: ROSE }}
                  >
                    <Sparkle size={14} />
                  </motion.span>
                </p>
                <p className="mt-4 text-sm opacity-70 max-w-sm leading-relaxed">
                  Local skincare that is kind to your skin. Natural ingredients, modern formulas, and prices that make sense. Start here.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4">Explore</p>
                <ul className="space-y-2 text-sm">
                  {NAV.map((l) => (
                    <li key={l.href}><Link href={l.href} className="hover:opacity-60">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4">Say hi</p>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                  <li><Link href="/design-3/contact" className="hover:opacity-60">Contact</Link></li>
                  <li className="opacity-50">halo@tastraofficial.com</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-50">
              <span>© {new Date().getFullYear()} Tastra. Made with love in Indonesia.</span>
              <span className="inline-flex items-center gap-1.5">Love your skin, love the planet <GlobeIcon size={13} /></span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
