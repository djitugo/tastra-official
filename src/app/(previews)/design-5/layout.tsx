"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader5 } from "@/components/preview/loader-5";
import { useCart } from "@/lib/cart";
import { SearchBox, type SearchTheme } from "@/components/shared/search-box";

const INK = "#0a0a0a";
const BEIGE_SOFT = "#f7f2e8";

const NAV = [
  { href: "/design-5", label: "Home" },
  { href: "/design-5/about", label: "About" },
  { href: "/design-5/shop", label: "Shop" },
  { href: "/design-5/blog", label: "Blog" },
  { href: "/design-5/contact", label: "Contact" },
];

const SEARCH_THEME: SearchTheme = {
  fieldBg: "#ffffff",
  fieldFg: "#0a0a0a",
  panelBg: "#ffffff",
  panelFg: "#0a0a0a",
  muted: "#8a8a8a",
  border: "rgba(10,10,10,0.15)",
  accent: "#0a0a0a",
  radius: 0,
  mono: false,
  thumbBg: "#f7f2e8",
};

export default function Design5Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Loader5 />
      <div className="bg-white font-[family-name:var(--font-sans)] font-light flex flex-col flex-1" style={{ color: INK }}>
        {/* ANNOUNCEMENT */}
        <div className="text-center py-3 text-[10px] tracking-[0.4em] uppercase border-b border-black/5">
          Complimentary shipping nationwide · Made in Indonesia
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-white border-b border-black/5">
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 h-20 flex items-center justify-between gap-6">
            {/* Left: nav (desktop) + hamburger (tablet/mobile) */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden min-w-11 min-h-11 -ml-2 flex items-center justify-center hover:opacity-50 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className="block">
                  <span className="block w-5 h-px bg-current mb-1.5" />
                  <span className="block w-5 h-px bg-current mb-1.5" />
                  <span className="block w-5 h-px bg-current" />
                </span>
              </button>
              <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.3em] uppercase">
                {NAV.map((l) => (
                  <Link key={l.href} href={l.href} className="hover:opacity-50 transition-opacity">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: logo */}
            <Link href="/design-5" className="text-2xl tracking-[0.25em] shrink-0">
              TASTRA
            </Link>

            {/* Right: search + admin + bag */}
            <div className="flex items-center gap-5 flex-1 justify-end min-w-0">
              <div className="hidden md:block w-48 xl:w-56">
                <SearchBox design="design-5" theme={SEARCH_THEME} />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden min-w-11 min-h-11 flex items-center justify-center hover:opacity-50 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <Link href="/design-5/login" className="hidden sm:inline-block text-[11px] tracking-[0.3em] uppercase hover:opacity-50 transition-opacity">
                Admin
              </Link>
              <Link href="/design-5/cart" className="text-[11px] tracking-[0.3em] uppercase hover:opacity-50 transition-opacity whitespace-nowrap">
                Bag ({ready ? count : 0})
              </Link>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {searchOpen && (
            <div className="md:hidden border-t border-black/5 p-4">
              <SearchBox design="design-5" theme={SEARCH_THEME} />
            </div>
          )}

          {/* MOBILE / TABLET MENU */}
          {menuOpen && (
            <nav className="lg:hidden border-t border-black/5 bg-white" aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV.map((l) => (
                  <li key={l.href} className="border-b border-black/5">
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-6 py-4 text-[11px] tracking-[0.3em] uppercase"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-black/5">
                  <Link
                    href="/design-5/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-[11px] tracking-[0.3em] uppercase opacity-60"
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
        <footer style={{ background: BEIGE_SOFT, color: INK }}>
          <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <p className="text-2xl tracking-[0.25em]">TASTRA</p>
                <p className="mt-4 text-sm leading-[1.9] opacity-70 max-w-sm">
                  A studio of small, considered skincare made for the rhythm of
                  modern Indonesian women.
                </p>
                <div className="mt-10 flex border-b border-black max-w-sm">
                  <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    className="flex-1 bg-transparent py-3 text-sm tracking-wider outline-none placeholder:opacity-40"
                  />
                  <button type="button" className="text-[11px] tracking-[0.3em] uppercase px-4 min-h-11 hover:opacity-60 transition-opacity">
                    Join
                  </button>
                </div>
              </div>
              <div className="md:col-span-2 md:col-start-7">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Explore</p>
                <ul className="space-y-2 text-sm">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:opacity-60 transition-opacity">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Studio</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-5/shop" className="hover:opacity-60 transition-opacity">Shop</Link></li>
                  <li><Link href="/design-5/blog" className="hover:opacity-60 transition-opacity">Journal</Link></li>
                  <li><Link href="/design-5/cart" className="hover:opacity-60 transition-opacity">Bag</Link></li>
                </ul>
              </div>
              <div className="md:col-span-3">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Reach</p>
                <ul className="space-y-2 text-sm">
                  <li>halo@tastraofficial.com</li>
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">TikTok</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] tracking-[0.3em] uppercase opacity-50">
              <span>© {new Date().getFullYear()} Tastra Studio. All rights reserved.</span>
              <span>Proudly made in Indonesia</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
