"use client";

import Link from "next/link";
import { Loader6 } from "@/components/preview/loader-6";
import { useCart } from "@/lib/cart";

const CREAM = "#f7f1e6";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

export default function Design6Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  return (
    <>
      <Loader6 />
      <div className="font-[family-name:var(--font-lora)] flex flex-col flex-1" style={{ background: CREAM, color: INK }}>
        <div
          className="text-center py-2.5 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase border-b"
          style={{ borderColor: `${INK}1F`, color: `${INK}99` }}
        >
          Of Ingredient & Restraint · Indonesia
        </div>

        <header className="border-b sticky top-0 z-30" style={{ borderColor: `${INK}1F`, background: CREAM }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 flex items-center justify-between gap-8">
            <Link href="/design-6" className="font-[family-name:var(--font-lora)] text-2xl tracking-tight" style={{ color: INK }}>
              Tastra<span className="italic" style={{ color: OCHRE }}>.</span>
            </Link>
            <nav className="hidden md:flex items-center gap-10 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase">
              <Link href="/design-6#range" className="hover:opacity-60">Range</Link>
              <Link href="/design-6#read" className="hover:opacity-60">Read</Link>
              <Link href="/design-6#philosophy" className="hover:opacity-60">Philosophy</Link>
              <Link href="/design-6#contact" className="hover:opacity-60">Contact</Link>
            </nav>
            <Link href="/design-6/cart" className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase hover:opacity-60">
              Cart ({ready ? count : 0})
            </Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer id="contact" style={{ background: INK, color: CREAM }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="font-[family-name:var(--font-lora)] text-3xl tracking-tight">
                  Tastra<span className="italic" style={{ color: OCHRE }}>.</span>
                </p>
                <p className="mt-4 text-sm leading-[1.85] opacity-70 max-w-sm">
                  Of ingredient and restraint. Diracik dengan kesabaran di
                  Indonesia, dirancang untuk dipakai dengan sederhana.
                </p>
              </div>
              <div className="md:col-span-2 md:col-start-7">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Range</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-6#range" className="hover:opacity-60">All</Link></li>
                  <li><Link href="/design-6/cart" className="hover:opacity-60">Cart</Link></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Read</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-6#philosophy" className="hover:opacity-60">Philosophy</Link></li>
                  <li><Link href="/design-6#read" className="hover:opacity-60">Journal</Link></li>
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
