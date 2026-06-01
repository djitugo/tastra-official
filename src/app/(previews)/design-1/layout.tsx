"use client";

import Link from "next/link";
import { Loader1 } from "@/components/preview/loader-1";
import { useCart } from "@/lib/cart";

const MARQUEE = [
  "FREE ONGKIR SE-INDONESIA",
  "DISKON HINGGA 50%",
  "BAYAR DI TEMPAT TERSEDIA",
  "BAHAN ALAMI · FORMULA MODERN",
  "★",
];

export default function Design1Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  return (
    <>
      <Loader1 />
      <div className="bg-white text-black font-[family-name:var(--font-sans)] flex flex-col flex-1">
        <div className="bg-black text-white border-b-2 border-black overflow-hidden">
          <div className="marquee-track py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="px-6 whitespace-nowrap">
                {t} <span className="px-3 opacity-50">/</span>
              </span>
            ))}
          </div>
        </div>

        <header className="bg-white border-b-2 border-black sticky top-0 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/design-1" className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-tighter">
              TASTRA<span className="inline-block ml-1 w-2 h-2 bg-black align-middle" />
            </Link>
            <nav className="hidden md:flex items-center gap-8 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest">
              <Link href="/design-1#shop" className="hover:underline underline-offset-4">Shop</Link>
              <Link href="/design-1#about" className="hover:underline underline-offset-4">About</Link>
              <Link href="/design-1#contact" className="hover:underline underline-offset-4">Contact</Link>
            </nav>
            <Link href="/design-1/cart" className="btn btn-ghost relative !min-h-11 !px-4 !py-2 !text-xs">
              CART
              <span className="ml-1 inline-flex items-center justify-center min-w-[22px] h-[22px] px-1 rounded-full bg-black text-white text-[11px] font-bold leading-none">
                {ready ? count : 0}
              </span>
            </Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer id="contact" className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <p className="font-[family-name:var(--font-display)] uppercase text-5xl tracking-tighter">TASTRA</p>
            <p className="mt-4 max-w-md text-white/70 text-sm">Skincare lokal yang ngerti kulit Indonesia. Bahan alami, formula modern.</p>
            <div className="mt-8 flex flex-wrap gap-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">
              <a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              <a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
              <span className="text-white/40">halo@tastraofficial.com</span>
            </div>
            <div className="mt-12 border-t border-white/20 pt-6 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/50">
              © {new Date().getFullYear()} TASTRA · Made in Indonesia ★
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
