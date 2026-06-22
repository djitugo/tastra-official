"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

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
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Shopping Cart</p>
          <h1 className="text-3xl md:text-5xl font-extrabold" style={{ color: INK }}>Your cart</h1>
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ background: CREAM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!ready ? (
            <p className="text-sm font-semibold opacity-60">Loading...</p>
          ) : items.length === 0 ? (
            <div className="rounded-2xl p-12 text-center" style={{ background: GREEN_SOFT }}>
              <p className="text-2xl font-extrabold mb-3" style={{ color: INK }}>Your cart is empty</p>
              <p className="text-base mb-6 max-w-md mx-auto" style={{ color: `${INK}99` }}>
                Pick a halal and natural product for your skin. We have value bundles with up to 50 percent off.
              </p>
              <Link
                href="/design-4/shop"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105"
                style={{ background: GREEN, color: CREAM }}
              >
                Start shopping →
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
                      <SmartImage src={product.images[0]} alt={product.name} fill sizes="112px" className="object-contain p-2" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: GREEN }}>
                        Halal · {product.category}
                      </p>
                      <Link href={`/design-4/shop/${product.slug}`} className="font-bold text-base sm:text-lg leading-tight hover:opacity-70" style={{ color: INK }}>
                        {product.name}
                      </Link>
                      <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                        <div className="inline-flex rounded-full p-1" style={{ background: GREEN_LIGHT }} role="group" aria-label="Quantity">
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-11 h-11 rounded-full flex items-center justify-center font-bold transition-colors hover:bg-white"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-11 h-11 flex items-center justify-center font-bold">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="w-11 h-11 rounded-full flex items-center justify-center font-bold transition-colors hover:bg-white"
                            aria-label="Increase quantity"
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
                            className="text-xs font-semibold underline underline-offset-2 hover:opacity-60 min-h-11 px-2"
                            style={{ color: `${INK}99` }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="rounded-2xl p-6 h-fit lg:sticky lg:top-24" style={{ background: GREEN_SOFT }}>
                <h2 className="text-lg font-extrabold mb-4" style={{ color: INK }}>Order Summary</h2>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt style={{ color: `${INK}99` }}>Subtotal</dt>
                    <dd className="font-bold">{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: `${INK}99` }}>Shipping</dt>
                    <dd className="font-bold uppercase" style={{ color: GREEN }}>Free ✓</dd>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-baseline" style={{ borderColor: `${INK}1A` }}>
                    <dt className="font-extrabold text-base">Total</dt>
                    <dd className="font-extrabold text-2xl" style={{ color: GREEN }}>{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link
                  href="/design-4/checkout"
                  className="block w-full text-center mt-6 rounded-full px-7 py-3.5 font-bold text-sm transition-transform hover:scale-[1.02]"
                  style={{ background: GREEN, color: CREAM }}
                >
                  Checkout →
                </Link>
                <Link
                  href="/design-4/shop"
                  className="block w-full text-center mt-3 rounded-full px-7 py-3 font-bold text-sm border-2 transition-colors hover:bg-white"
                  style={{ borderColor: GREEN, color: GREEN }}
                >
                  Keep shopping
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
