"use client";

import Link from "next/link";
import { Loader4 } from "@/components/preview/loader-4";
import { useCart } from "@/lib/cart";
import { CATEGORIES } from "@/lib/products";

const GREEN = "#2d5a3d";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

export default function Design4Layout({ children }: { children: React.ReactNode }) {
  const { count, ready } = useCart();
  return (
    <>
      <Loader4 />
      <div className="font-[family-name:var(--font-jakarta)] flex flex-col flex-1" style={{ background: CREAM, color: INK }}>
        <div className="text-center py-2.5 text-xs font-medium" style={{ background: GREEN, color: CREAM }}>
          ✦ Gratis Ongkir Seluruh Indonesia · Sertifikasi Halal MUI ✦
        </div>

        <header className="sticky top-0 z-40 border-b" style={{ background: CREAM, borderColor: `${INK}1A` }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
            <Link href="/design-4" className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: GREEN, color: CREAM }}>
                <span className="text-lg font-extrabold">T</span>
              </span>
              <span className="text-xl font-extrabold tracking-wide" style={{ color: GREEN }}>TASTRA</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold" style={{ color: INK }}>
              <Link href="/design-4#shop" className="hover:opacity-60">Produk</Link>
              <Link href="/design-4#kategori" className="hover:opacity-60">Kategori</Link>
              <Link href="/design-4#kenapa" className="hover:opacity-60">Kenapa Tastra</Link>
              <Link href="/design-4#kontak" className="hover:opacity-60">Kontak</Link>
            </nav>
            <div className="flex items-center gap-2">
              <Link
                href="/design-4/cart"
                className="rounded-full px-5 py-2.5 text-sm font-bold transition-colors hover:opacity-90 flex items-center gap-2"
                style={{ background: GREEN, color: CREAM }}
              >
                Keranjang
                <span className="rounded-full px-2 text-[11px]" style={{ background: CREAM, color: GREEN }}>
                  {ready ? count : 0}
                </span>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer id="kontak" style={{ background: INK, color: CREAM }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-10">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: GREEN }}>
                    <span className="text-lg font-extrabold">T</span>
                  </span>
                  <span className="text-xl font-extrabold tracking-wide">TASTRA</span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed max-w-xs">
                  Skincare halal & alami untuk kulit Indonesia, dari Indonesia.
                  Aman, teruji, dan terjangkau.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Belanja</p>
                <ul className="space-y-2 text-sm">
                  {CATEGORIES.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/design-4#kategori`} className="hover:opacity-60">{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Bantuan</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/design-4#kenapa" className="hover:opacity-60">Tentang Tastra</Link></li>
                  <li><span className="opacity-50">Cara Pemesanan</span></li>
                  <li><span className="opacity-50">Pengiriman</span></li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Hubungi Kami</p>
                <ul className="space-y-2 text-sm">
                  <li>halo@tastraofficial.com</li>
                  <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                  <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-60">
              <span>© {new Date().getFullYear()} Tastra Beauty · Semua hak dilindungi</span>
              <span>✦ Halal Green Beauty ✦ Made in Indonesia</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
