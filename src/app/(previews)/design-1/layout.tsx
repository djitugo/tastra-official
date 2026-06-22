"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader1 } from "@/components/preview/loader-1";
import { useCart } from "@/lib/cart";
import { SearchBox, type SearchTheme } from "@/components/shared/search-box";

const ANNOUNCE = [
  "FREE SHIPPING NATIONWIDE",
  "UP TO 50% OFF LAUNCH SALE",
  "CASH ON DELIVERY AVAILABLE",
  "NATURAL INGREDIENTS, MODERN FORMULAS",
  "★",
];

const NAV = [
  { href: "/design-1", label: "Home" },
  { href: "/design-1/about", label: "About" },
  { href: "/design-1/shop", label: "Shop" },
  { href: "/design-1/blog", label: "Blog" },
  { href: "/design-1/contact", label: "Contact" },
];

const SEARCH_THEME: SearchTheme = {
  fieldBg: "#ffffff",
  fieldFg: "#000000",
  panelBg: "#ffffff",
  panelFg: "#000000",
  muted: "#6b6b6b",
  border: "#000000",
  accent: "#000000",
  radius: 0,
  mono: true,
  thumbBg: "#f4f4f4",
};

export default function Design1Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Loader1 />
      <div className="bg-white text-black font-[family-name:var(--font-sans)] flex flex-col flex-1">
        {/* ANNOUNCEMENT MARQUEE */}
        <div className="bg-black text-white border-b-2 border-black overflow-hidden">
          <div className="marquee-track py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">
            {[...ANNOUNCE, ...ANNOUNCE, ...ANNOUNCE, ...ANNOUNCE].map((t, i) => (
              <span key={i} className="px-6 whitespace-nowrap">
                {t} <span className="px-3 opacity-50">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* NAV */}
        <header className="bg-white border-b-2 border-black sticky top-0 z-30">
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 h-16 flex items-center justify-between gap-4">
            <Link href="/design-1" className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-tighter shrink-0">
              TASTRA<span className="inline-block ml-1 w-2 h-2 bg-black align-middle" />
            </Link>

            <nav className="hidden lg:flex items-center gap-7 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest">
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} className="hover:underline underline-offset-4">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden md:block w-56">
                <SearchBox design="design-1" theme={SEARCH_THEME} />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden btn btn-ghost !min-h-11 !px-3 !py-2"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <Link href="/design-1/login" className="hidden sm:inline-flex btn btn-ghost !min-h-11 !px-3 !py-2 !text-xs" aria-label="Admin login">
                ADMIN
              </Link>
              <Link href="/design-1/cart" className="btn btn-ghost relative !min-h-11 !px-4 !py-2 !text-xs" aria-label={`Cart, ${ready ? count : 0} items`}>
                CART
                <span className="ml-1 inline-flex items-center justify-center min-w-[22px] h-[22px] px-1 rounded-full bg-black text-white text-[11px] font-bold leading-none">
                  {ready ? count : 0}
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden btn btn-ghost !min-h-11 !px-3 !py-2"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className="block w-5 h-[2px] bg-black mb-1.5" />
                <span className="block w-5 h-[2px] bg-black mb-1.5" />
                <span className="block w-5 h-[2px] bg-black" />
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {searchOpen && (
            <div className="md:hidden border-t-2 border-black p-4">
              <SearchBox design="design-1" theme={SEARCH_THEME} />
            </div>
          )}

          {/* MOBILE / TABLET MENU */}
          {menuOpen && (
            <nav className="lg:hidden border-t-2 border-black bg-white" aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV.map((l) => (
                  <li key={l.href} className="border-b border-black/20">
                    <Link href={l.href} onClick={() => setMenuOpen(false)} className="block px-6 py-4 font-[family-name:var(--font-mono)] uppercase tracking-widest text-sm">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-black/20">
                  <Link href="/design-1/login" onClick={() => setMenuOpen(false)} className="block px-6 py-4 font-[family-name:var(--font-mono)] uppercase tracking-widest text-sm opacity-70">
                    Admin Login
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-black text-white">
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="font-[family-name:var(--font-display)] uppercase text-5xl tracking-tighter">TASTRA</p>
              <p className="mt-4 max-w-md text-white/70 text-sm leading-relaxed">
                Local skincare formulated for Indonesian skin. Natural ingredients, modern performance. Stay consistent for 28 days and see the difference.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-4 text-white/50">Explore</h3>
              <ul className="space-y-2 text-sm">
                {NAV.map((l) => (
                  <li key={l.href}><Link href={l.href} className="hover:underline">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-4 text-white/50">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a></li>
                <li><Link href="/design-1/contact" className="hover:underline">Contact</Link></li>
                <li className="text-white/40">halo@tastraofficial.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20">
            <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/50">
              <span>© {new Date().getFullYear()} TASTRA. All rights reserved.</span>
              <span>Made in Indonesia ★</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
