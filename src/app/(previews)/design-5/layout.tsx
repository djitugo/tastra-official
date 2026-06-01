"use client";

import Link from "next/link";
import { Loader5 } from "@/components/preview/loader-5";
import { useCart } from "@/lib/cart";

const INK = "#0a0a0a";
const BEIGE_SOFT = "#f7f2e8";

export default function Design5Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  return (
    <>
      <Loader5 />
      <div className="bg-white font-[family-name:var(--font-sans)] flex flex-col flex-1" style={{ color: INK }}>
        <div className="text-center py-3 text-[10px] tracking-[0.4em] uppercase border-b border-black/5">
          Free shipping on all orders · Made in Indonesia
        </div>

        <header className="sticky top-0 z-40 bg-white border-b border-black/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.2em] uppercase font-light">
              <Link href="/design-5#new" className="hover:opacity-50 transition-opacity">New Arrivals</Link>
              <Link href="/design-5#shop" className="hover:opacity-50 transition-opacity">Shop</Link>
              <Link href="/design-5#about" className="hover:opacity-50 transition-opacity">About</Link>
            </nav>
            <Link href="/design-5" className="text-2xl tracking-[0.25em] font-light">
              TASTRA
            </Link>
            <div className="flex items-center gap-5">
              <button aria-label="Search" className="hover:opacity-50 transition-opacity">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <Link href="/design-5/cart" className="text-[12px] tracking-[0.2em] uppercase font-light hover:opacity-50 transition-opacity">
                Bag ({ready ? count : 0})
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer style={{ background: BEIGE_SOFT, color: INK }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <p className="text-2xl tracking-[0.25em] font-light">TASTRA</p>
                <p className="mt-4 text-sm leading-[1.9] opacity-70 max-w-sm">
                  A studio of small, considered skincare made for the rhythm
                  of modern Indonesian women.
                </p>
                <div className="mt-10 flex border-b border-black max-w-sm">
                  <input type="email" placeholder="Email address" aria-label="Email" className="flex-1 bg-transparent py-3 text-sm tracking-wider outline-none placeholder:opacity-40" />
                  <button className="text-[11px] tracking-[0.3em] uppercase px-4 hover:opacity-60">Join →</button>
                </div>
              </div>
              <div className="md:col-span-2 md:col-start-7">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Shop</p>
                <ul className="space-y-2 text-sm font-light">
                  <li><Link href="/design-5#shop" className="hover:opacity-60">All</Link></li>
                  <li><Link href="/design-5#new" className="hover:opacity-60">New Arrivals</Link></li>
                  <li><Link href="/design-5/cart" className="hover:opacity-60">Bag</Link></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Studio</p>
                <ul className="space-y-2 text-sm font-light">
                  <li><Link href="/design-5#about" className="hover:opacity-60">About</Link></li>
                  <li><span className="opacity-60">Journal</span></li>
                </ul>
              </div>
              <div className="md:col-span-3">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Reach</p>
                <ul className="space-y-2 text-sm font-light">
                  <li>halo@tastraofficial.com</li>
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] tracking-[0.3em] uppercase opacity-50">
              <span>© {new Date().getFullYear()} Tastra Studio</span>
              <span>Proudly Made in Indonesia</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
