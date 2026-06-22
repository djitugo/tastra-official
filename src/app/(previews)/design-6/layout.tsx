"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader6 } from "@/components/preview/loader-6";
import { useCart } from "@/lib/cart";
import { SearchBox, type SearchTheme } from "@/components/shared/search-box";

const CREAM = "#f7f1e6";
const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

const NAV = [
  { href: "/design-6", label: "Home" },
  { href: "/design-6/about", label: "About" },
  { href: "/design-6/shop", label: "Shop" },
  { href: "/design-6/blog", label: "Blog" },
  { href: "/design-6/contact", label: "Contact" },
];

const SEARCH_THEME: SearchTheme = {
  fieldBg: CREAM,
  fieldFg: INK,
  panelBg: CREAM,
  panelFg: INK,
  muted: `${INK}99`,
  border: INK,
  accent: OCHRE,
  radius: 0,
  mono: true,
  thumbBg: CREAM_DEEP,
};

export default function Design6Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Loader6 />
      <div className="font-[family-name:var(--font-lora)] flex flex-col flex-1" style={{ background: CREAM, color: INK }}>
        {/* ANNOUNCEMENT BAR */}
        <div
          className="text-center py-2.5 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase border-b"
          style={{ borderColor: `${INK}1F`, color: `${INK}99` }}
        >
          Complimentary shipping nationwide ⸻ Of ingredient and restraint
        </div>

        {/* HEADER */}
        <header className="border-b sticky top-0 z-30" style={{ borderColor: `${INK}1F`, background: CREAM }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-5 flex items-center justify-between gap-6">
            <Link href="/design-6" className="font-[family-name:var(--font-lora)] text-2xl tracking-tight shrink-0" style={{ color: INK }}>
              Tastra<span className="italic" style={{ color: OCHRE }}>.</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-9 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase">
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden md:block w-52">
                <SearchBox design="design-6" theme={SEARCH_THEME} />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center w-11 h-11 hover:opacity-60"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <Link
                href="/design-6/login"
                className="hidden sm:inline-flex items-center min-h-11 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase hover:opacity-60"
                aria-label="Admin login"
              >
                Admin
              </Link>
              <Link
                href="/design-6/cart"
                className="inline-flex items-center min-h-11 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase hover:opacity-60"
                aria-label={`Cart, ${ready ? count : 0} items`}
              >
                Cart ({ready ? count : 0})
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden inline-flex flex-col items-center justify-center w-11 h-11"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className="block w-5 h-px mb-1.5" style={{ background: INK }} />
                <span className="block w-5 h-px mb-1.5" style={{ background: INK }} />
                <span className="block w-5 h-px" style={{ background: INK }} />
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {searchOpen && (
            <div className="md:hidden border-t px-6 py-4" style={{ borderColor: `${INK}1F` }}>
              <SearchBox design="design-6" theme={SEARCH_THEME} />
            </div>
          )}

          {/* MOBILE / TABLET MENU */}
          {menuOpen && (
            <nav className="lg:hidden border-t" style={{ borderColor: `${INK}1F`, background: CREAM }} aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV.map((l) => (
                  <li key={l.href} className="border-b" style={{ borderColor: `${INK}14` }}>
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-6 py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/design-6/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase opacity-60"
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer style={{ background: INK, color: CREAM }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="font-[family-name:var(--font-lora)] text-3xl tracking-tight">
                  Tastra<span className="italic" style={{ color: OCHRE }}>.</span>
                </p>
                <p className="mt-4 text-sm leading-[1.85] opacity-70 max-w-sm">
                  Of ingredient and restraint. Composed with patience in Indonesia,
                  intended to be worn simply, and for a long time.
                </p>
              </div>
              <div className="md:col-span-2 md:col-start-7">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Explore</p>
                <ul className="space-y-2 text-sm">
                  {NAV.map((l) => (
                    <li key={l.href}><Link href={l.href} className="hover:opacity-60">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Read</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-6/blog" className="hover:opacity-60">The Reading Room</Link></li>
                  <li><Link href="/design-6/about" className="hover:opacity-60">Our Philosophy</Link></li>
                </ul>
              </div>
              <div className="md:col-span-3">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Reach</p>
                <ul className="space-y-2 text-sm">
                  <li>halo@tastraofficial.com</li>
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50">
              <span>© {new Date().getFullYear()} Tastra Apothecary</span>
              <span style={{ color: OCHRE }}>⸻ Of Ingredient & Restraint ⸻</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
