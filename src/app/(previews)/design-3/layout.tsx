"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Loader3 } from "@/components/preview/loader-3";
import { useCart } from "@/lib/cart";

const PEACH = "#fff5ee";
const ROSE = "#f4a8a4";
const INK = "#3a2a1f";

function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

export default function Design3Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  return (
    <>
      <Loader3 />
      <div className="font-[family-name:var(--font-rounded)] flex flex-col flex-1" style={{ background: PEACH, color: INK }}>
        <div className="text-center py-2.5 text-xs flex items-center justify-center gap-2" style={{ background: ROSE, color: "#fff" }}>
          <Sparkle size={12} />
          <span className="font-semibold">Free ongkir + diskon hingga 50% — buruan, ya!</span>
          <Sparkle size={12} />
        </div>

        <header className="sticky top-0 z-40 backdrop-blur" style={{ background: `${PEACH}E6` }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/design-3" className="text-2xl font-extrabold tracking-tight flex items-center gap-1.5" style={{ color: INK }}>
              tastra
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="inline-flex w-6 h-6 rounded-full items-center justify-center text-white"
                style={{ background: ROSE }}
              >
                <Sparkle size={12} />
              </motion.span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: INK }}>
              <Link href="/design-3#shop" className="hover:opacity-60">Produk</Link>
              <Link href="/design-3#kenapa" className="hover:opacity-60">Kenapa Tastra</Link>
              <Link href="/design-3#kontak" className="hover:opacity-60">Sapa kami</Link>
            </nav>
            <Link
              href="/design-3/cart"
              className="rounded-full px-5 py-2.5 text-sm font-bold flex items-center gap-2 transition-transform hover:scale-105"
              style={{ background: INK, color: PEACH }}
            >
              Tas <span className="rounded-full px-1.5 text-[11px]" style={{ background: ROSE }}>{ready ? count : 0}</span>
            </Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer id="kontak" style={{ background: INK, color: PEACH }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <p className="text-3xl font-extrabold flex items-center gap-2">
                  tastra
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="inline-flex w-7 h-7 rounded-full items-center justify-center"
                    style={{ background: ROSE }}
                  >
                    <Sparkle size={14} />
                  </motion.span>
                </p>
                <p className="mt-3 text-sm opacity-70 max-w-xs leading-relaxed">
                  Skincare lokal yang ramah sama kulit kamu. Mulai dari sini.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4">Belanja</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-3#shop" className="hover:opacity-60">Semua produk</Link></li>
                  <li><Link href="/design-3/cart" className="hover:opacity-60">Keranjang</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4">Sapa kami</p>
                <ul className="space-y-2 text-sm">
                  <li>halo@tastraofficial.com</li>
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-50">
              <span>© {new Date().getFullYear()} Tastra · Made with love in Indonesia</span>
              <span>Sayang kulit, sayang bumi 🌎</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
