"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader4 } from "@/components/preview/loader-4";
import { useCart } from "@/lib/cart";
import { SearchBox, type SearchTheme } from "@/components/shared/search-box";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

const NAV = [
  { href: "/design-4", label: "Home" },
  { href: "/design-4/about", label: "About" },
  { href: "/design-4/shop", label: "Shop" },
  { href: "/design-4/blog", label: "Blog" },
  { href: "/design-4/contact", label: "Contact" },
];

const SEARCH_THEME: SearchTheme = {
  fieldBg: "#ffffff",
  fieldFg: INK,
  panelBg: "#ffffff",
  panelFg: INK,
  muted: "#6b7280",
  border: "#d6e0d6",
  accent: GREEN,
  radius: 12,
  mono: false,
  thumbBg: GREEN_LIGHT,
};

export default function Design4Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Loader4 />
      <div className="font-[family-name:var(--font-jakarta)] flex flex-col flex-1" style={{ background: CREAM, color: INK }}>
        {/* ANNOUNCEMENT BAR */}
        <div className="text-center py-3 text-[11px] font-medium tracking-wider" style={{ background: GREEN, color: CREAM }}>
          ✦ Free Shipping Nationwide · Halal Certified by MUI ✦
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b" style={{ background: CREAM, borderColor: `${INK}14` }}>
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 h-20 flex items-center justify-between gap-4">
            <Link href="/design-4" className="flex items-center gap-2 shrink-0">
              <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: GREEN, color: CREAM }}>
                <span className="text-lg font-extrabold">T</span>
              </span>
              <span className="text-xl font-extrabold tracking-wide" style={{ color: GREEN }}>TASTRA</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold" style={{ color: INK }}>
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden md:block w-52">
                <SearchBox design="design-4" theme={SEARCH_THEME} />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <Link
                href="/design-4/login"
                className="hidden sm:inline-flex items-center h-11 px-3 rounded-full text-sm font-semibold transition-colors hover:bg-black/5"
                style={{ color: INK }}
                aria-label="Admin login"
              >
                Admin
              </Link>
              <Link
                href="/design-4/cart"
                className="rounded-full px-4 sm:px-5 h-11 text-sm font-bold transition-opacity hover:opacity-90 flex items-center gap-2"
                style={{ background: GREEN, color: CREAM }}
                aria-label={`Cart, ${ready ? count : 0} items`}
              >
                Keranjang
                <span className="rounded-full min-w-[22px] h-[22px] px-1.5 text-[11px] flex items-center justify-center font-bold leading-none" style={{ background: CREAM, color: GREEN }}>
                  {ready ? count : 0}
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors hover:bg-black/5"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className="block w-5 h-[2px]" style={{ background: INK }} />
                <span className="block w-5 h-[2px]" style={{ background: INK }} />
                <span className="block w-5 h-[2px]" style={{ background: INK }} />
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {searchOpen && (
            <div className="md:hidden border-t p-4" style={{ borderColor: `${INK}14` }}>
              <SearchBox design="design-4" theme={SEARCH_THEME} />
            </div>
          )}

          {/* MOBILE / TABLET MENU */}
          {menuOpen && (
            <nav className="lg:hidden border-t" style={{ background: CREAM, borderColor: `${INK}14` }} aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV.map((l) => (
                  <li key={l.href} className="border-b" style={{ borderColor: `${INK}0D` }}>
                    <Link href={l.href} onClick={() => setMenuOpen(false)} className="block px-5 sm:px-8 py-4 text-sm font-semibold">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/design-4/login" onClick={() => setMenuOpen(false)} className="block px-5 sm:px-8 py-4 text-sm font-semibold opacity-70">
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
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-24">
            <div className="grid md:grid-cols-4 gap-10 lg:gap-16">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: GREEN }}>
                    <span className="text-lg font-extrabold">T</span>
                  </span>
                  <span className="text-xl font-extrabold tracking-wide">TASTRA</span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed max-w-xs">
                  Halal and natural skincare for Indonesian skin, made in Indonesia. Safe, tested, and affordable.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Explore</p>
                <ul className="space-y-2 text-sm">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:opacity-60">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Help</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-4/about" className="hover:opacity-60">About Tastra</Link></li>
                  <li><Link href="/design-4/contact" className="hover:opacity-60">Contact</Link></li>
                  <li><span className="opacity-50">Shipping (Free nationwide)</span></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Connect</p>
                <ul className="space-y-2 text-sm">
                  <li>halo@tastraofficial.com</li>
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-60">
              <span>© {new Date().getFullYear()} Tastra Beauty. All rights reserved.</span>
              <span>✦ Halal Green Beauty ✦ Made in Indonesia</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
