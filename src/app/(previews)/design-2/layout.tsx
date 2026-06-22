"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "@/components/preview/loader-2";
import { useCart } from "@/lib/cart";
import { SearchBox, type SearchTheme } from "@/components/shared/search-box";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

const NAV = [
  { href: "/design-2", label: "Home" },
  { href: "/design-2/about", label: "About" },
  { href: "/design-2/shop", label: "Shop" },
  { href: "/design-2/blog", label: "Blog" },
  { href: "/design-2/contact", label: "Contact" },
];

const SEARCH_THEME: SearchTheme = {
  fieldBg: "#ffffff",
  fieldFg: INK,
  panelBg: CREAM,
  panelFg: INK,
  muted: `${INK}80`,
  border: INK,
  accent: GOLD,
  radius: 0,
  mono: false,
  thumbBg: "#ffffff",
};

export default function Design2Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Loader2 />
      <div className="font-[family-name:var(--font-sans)] flex flex-col flex-1" style={{ background: CREAM, color: INK }}>
        {/* ANNOUNCEMENT BAR */}
        <div
          className="text-center py-3 text-[11px] tracking-[0.3em] uppercase border-b"
          style={{ borderColor: `${INK}1A`, color: `${INK}99` }}
        >
          Complimentary shipping nationwide
          <span className="mx-3" style={{ color: GOLD }}>
            ⸻
          </span>
          Vol. I launch offer, up to 50% off
        </div>

        {/* HEADER */}
        <header className="border-b sticky top-0 z-30" style={{ borderColor: `${INK}1A`, background: CREAM }}>
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-6 flex items-center justify-between gap-6">
            <Link
              href="/design-2"
              className="font-[family-name:var(--font-serif)] text-3xl tracking-[0.15em] shrink-0"
              style={{ color: INK }}
            >
              TASTRA
            </Link>

            {/* PRIMARY NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-[13px] tracking-[0.2em] uppercase">
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* RIGHT CLUSTER */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden md:block w-56">
                <SearchBox design="design-2" theme={SEARCH_THEME} />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 hover:opacity-60"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <Link
                href="/design-2/login"
                className="hidden sm:inline-flex items-center min-h-11 px-2 text-[11px] tracking-[0.25em] uppercase hover:opacity-60"
                aria-label="Admin sign in"
              >
                Admin
              </Link>
              <Link
                href="/design-2/cart"
                className="inline-flex items-center min-h-11 px-2 text-[12px] tracking-[0.2em] uppercase hover:opacity-60"
                aria-label={`Bag, ${ready ? count : 0} items`}
              >
                Bag ({ready ? count : 0})
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden inline-flex flex-col items-center justify-center min-h-11 min-w-11 gap-[5px]"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className="block w-5 h-px" style={{ background: INK }} />
                <span className="block w-5 h-px" style={{ background: INK }} />
                <span className="block w-5 h-px" style={{ background: INK }} />
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {searchOpen && (
            <div className="md:hidden border-t px-5 sm:px-8 py-4" style={{ borderColor: `${INK}1A` }}>
              <SearchBox design="design-2" theme={SEARCH_THEME} />
            </div>
          )}

          {/* MOBILE / TABLET MENU */}
          {menuOpen && (
            <nav className="lg:hidden border-t" style={{ borderColor: `${INK}1A`, background: CREAM }} aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV.map((l) => (
                  <li key={l.href} className="border-b" style={{ borderColor: `${INK}14` }}>
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 sm:px-8 py-4 text-[13px] tracking-[0.25em] uppercase"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b" style={{ borderColor: `${INK}14` }}>
                  <Link
                    href="/design-2/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 sm:px-8 py-4 text-[13px] tracking-[0.25em] uppercase opacity-60"
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer style={{ background: INK, color: CREAM }}>
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <p className="font-[family-name:var(--font-serif)] text-3xl tracking-[0.15em]">TASTRA</p>
                <p className="mt-5 text-sm leading-[1.9] opacity-70 max-w-sm">
                  Skincare that honors the complexity of Indonesian skin. Composed with patience, presented without excess.
                </p>
              </div>
              <div className="md:col-span-3 md:col-start-7">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-5">Atelier</p>
                <ul className="space-y-2.5 text-sm">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:opacity-60">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-5">Reach us</p>
                <ul className="space-y-2.5 text-sm">
                  <li>halo@tastraofficial.com</li>
                  <li>
                    <a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-[0.3em] uppercase opacity-50">
              <span>© {new Date().getFullYear()} Tastra Atelier</span>
              <span style={{ color: GOLD }}>⸻ Made with patience in Indonesia ⸻</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
