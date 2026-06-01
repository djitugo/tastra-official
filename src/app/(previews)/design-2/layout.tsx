"use client";

import Link from "next/link";
import { Loader2 } from "@/components/preview/loader-2";
import { useCart } from "@/lib/cart";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

export default function Design2Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  return (
    <>
      <Loader2 />
      <div className="font-[family-name:var(--font-sans)] flex flex-col flex-1" style={{ background: CREAM, color: INK }}>
        <div
          className="text-center py-3 text-[11px] tracking-[0.3em] uppercase border-b"
          style={{ borderColor: `${INK}1A`, color: `${INK}99` }}
        >
          Dirumuskan untuk kulit Indonesia · Pengiriman gratis
        </div>

        <header className="border-b sticky top-0 z-30" style={{ borderColor: `${INK}1A`, background: CREAM }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 flex items-center justify-between gap-6">
            <Link href="/design-2" className="font-[family-name:var(--font-serif)] text-3xl tracking-[0.15em]" style={{ color: INK }}>
              TASTRA
            </Link>
            <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.2em] uppercase">
              <Link href="/design-2#collection" className="hover:opacity-60 transition-opacity">Collection</Link>
              <Link href="/design-2#philosophy" className="hover:opacity-60 transition-opacity">Philosophy</Link>
              <Link href="/design-2#journal" className="hover:opacity-60 transition-opacity">Journal</Link>
              <Link href="/design-2#contact" className="hover:opacity-60 transition-opacity">Contact</Link>
            </nav>
            <Link href="/design-2/cart" className="text-[13px] tracking-[0.2em] uppercase hover:opacity-60">
              Bag ({ready ? count : 0})
            </Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer id="contact" style={{ background: INK, color: CREAM }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="font-[family-name:var(--font-serif)] text-3xl tracking-[0.15em]">TASTRA</p>
                <p className="mt-4 text-sm leading-[1.8] opacity-70 max-w-xs">
                  Skincare yang menghormati kompleksitas kulit Indonesia. Diracik
                  dengan kesabaran, disajikan tanpa berlebihan.
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-4">Atelier</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-2#collection" className="hover:opacity-60">Collection</Link></li>
                  <li><Link href="/design-2#philosophy" className="hover:opacity-60">Philosophy</Link></li>
                  <li><Link href="/design-2#journal" className="hover:opacity-60">Journal</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-4">Reach us</p>
                <ul className="space-y-2 text-sm">
                  <li>halo@tastraofficial.com</li>
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
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
