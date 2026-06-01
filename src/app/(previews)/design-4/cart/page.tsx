"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

export default function Design4Cart() {
  const { lines, setQty, remove, ready } = useCart();

  const items = lines
    .map((l) => {
      const p = PRODUCTS.find((x) => x.slug === l.slug);
      return p ? { line: l, product: p } : null;
    })
    .filter((x): x is { line: { slug: string; qty: number }; product: typeof PRODUCTS[number] } => !!x);

  const subtotal = items.reduce((s, { line, product }) => s + line.qty * product.price, 0);

  return (
    <>
      <section className="py-12 md:py-16" style={{ background: GREEN_LIGHT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Keranjang Belanja</p>
          <h1 className="text-3xl md:text-5xl font-extrabold" style={{ color: INK }}>Belanjaan kamu</h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!ready ? (
            <p className="text-sm font-semibold opacity-60">Memuat...</p>
          ) : items.length === 0 ? (
            <div className="rounded-2xl p-12 text-center" style={{ background: GREEN_SOFT }}>
              <div className="text-5xl mb-4" aria-hidden>🌿</div>
              <p className="text-2xl font-extrabold mb-3" style={{ color: INK }}>Keranjang masih kosong</p>
              <p className="text-base mb-6 max-w-md mx-auto" style={{ color: `${INK}99` }}>
                Yuk pilih produk yang halal dan alami buat kulitmu. Kami punya
                paket hemat hingga 50% off.
              </p>
              <Link
                href="/design-4#shop"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105"
                style={{ background: GREEN, color: CREAM }}
              >
                Mulai belanja →
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_360px] gap-6">
              <ul className="space-y-4">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="rounded-2xl p-4 flex gap-4 sm:gap-6 items-center" style={{ background: CREAM, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                    <Link
                      href={`/design-4/shop/${product.slug}`}
                      className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden"
                      style={{ background: GREEN_LIGHT }}
                    >
                      <Image src={product.images[0]} alt={product.name} fill sizes="112px" className="object-contain p-2" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: GREEN }}>
                        Halal · {product.category}
                      </p>
                      <Link href={`/design-4/shop/${product.slug}`} className="font-bold text-base sm:text-lg leading-tight hover:opacity-70" style={{ color: INK }}>
                        {product.name}
                      </Link>
                      <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                        <div className="inline-flex rounded-full p-1" style={{ background: GREEN_LIGHT }}>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-9 h-9 rounded-full flex items-center justify-center font-bold transition-colors hover:bg-white"
                            aria-label="Kurangi"
                          >
                            −
                          </button>
                          <span className="w-9 h-9 flex items-center justify-center font-bold">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="w-9 h-9 rounded-full flex items-center justify-center font-bold transition-colors hover:bg-white"
                            aria-label="Tambah"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-base" style={{ color: GREEN }}>
                            {formatRupiah(product.price * line.qty)}
                          </span>
                          <button
                            type="button"
                            onClick={() => remove(line.slug)}
                            className="text-xs font-semibold underline underline-offset-2 hover:opacity-60"
                            style={{ color: `${INK}99` }}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="rounded-2xl p-6 h-fit lg:sticky lg:top-24" style={{ background: GREEN_SOFT }}>
                <h2 className="text-lg font-extrabold mb-4" style={{ color: INK }}>Ringkasan Pesanan</h2>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt style={{ color: `${INK}99` }}>Subtotal</dt>
                    <dd className="font-bold">{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: `${INK}99` }}>Ongkir</dt>
                    <dd className="font-bold uppercase" style={{ color: GREEN }}>Gratis ✓</dd>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-baseline" style={{ borderColor: `${INK}1A` }}>
                    <dt className="font-extrabold text-base">Total</dt>
                    <dd className="font-extrabold text-2xl" style={{ color: GREEN }}>{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link
                  href="/checkout"
                  className="block w-full text-center mt-6 rounded-full px-7 py-3.5 font-bold text-sm transition-transform hover:scale-[1.02]"
                  style={{ background: GREEN, color: CREAM }}
                >
                  Checkout →
                </Link>
                <Link
                  href="/design-4#shop"
                  className="block w-full text-center mt-3 rounded-full px-7 py-3 font-bold text-sm border-2 transition-colors"
                  style={{ borderColor: GREEN, color: GREEN }}
                >
                  Lanjut Belanja
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
