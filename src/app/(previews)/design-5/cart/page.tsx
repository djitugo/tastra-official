"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const INK = "#0a0a0a";
const BEIGE_SOFT = "#f7f2e8";

export default function Design5Cart() {
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
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Your bag</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05]">
            The <span className="italic font-[family-name:var(--font-serif-alt)]">edit.</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          {!ready ? (
            <p className="text-sm tracking-wider opacity-60">Loading...</p>
          ) : items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-3xl mb-4">
                Your bag is <span className="italic font-[family-name:var(--font-serif-alt)]">empty.</span>
              </p>
              <p className="text-sm leading-[1.9] opacity-60 max-w-md mx-auto mb-10">
                Start with one piece you trust. We believe in a collection that is
                intentionally small.
              </p>
              <Link
                href="/design-5/shop"
                className="inline-block text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity"
              >
                Shop the edit
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_360px] gap-16">
              <ul className="border-t border-black/10">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="py-10 border-b border-black/10 flex gap-6">
                    <Link
                      href={`/design-5/shop/${product.slug}`}
                      className="relative w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0"
                      style={{ background: BEIGE_SOFT }}
                    >
                      <SmartImage src={product.images[0]} alt={product.name} fill sizes="160px" className="object-contain p-3" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">
                        {product.category} · {product.size}
                      </p>
                      <Link href={`/design-5/shop/${product.slug}`} className="text-xl hover:opacity-60 transition-opacity">
                        {product.name}
                      </Link>
                      <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
                        <div className="inline-flex items-center gap-1 border-b border-black/40 pb-0.5">
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-11 h-11 flex items-center justify-center text-sm hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
                            aria-label={`Decrease quantity of ${product.name}`}
                          >
                            −
                          </button>
                          <span className="text-sm min-w-[24px] text-center" aria-live="polite">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="w-11 h-11 flex items-center justify-center text-sm hover:opacity-60 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
                            aria-label={`Increase quantity of ${product.name}`}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-base tracking-wider">{formatRupiah(product.price * line.qty)}</span>
                          <button
                            type="button"
                            onClick={() => remove(line.slug)}
                            className="min-h-11 text-[10px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="lg:sticky lg:top-28 h-fit">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Summary</p>
                <dl className="space-y-3 text-sm border-t border-black/10 pt-6">
                  <div className="flex justify-between">
                    <dt className="opacity-60">Subtotal</dt>
                    <dd>{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="opacity-60">Shipping</dt>
                    <dd className="italic font-[family-name:var(--font-serif-alt)] opacity-60">Complimentary</dd>
                  </div>
                  <div className="border-t border-black/10 pt-4 flex justify-between items-baseline">
                    <dt className="text-base">Total</dt>
                    <dd className="text-2xl">{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link
                  href="/design-5/checkout"
                  className="block w-full text-center mt-10 min-h-11 py-4 text-[11px] tracking-[0.3em] uppercase transition-opacity hover:opacity-90"
                  style={{ background: INK, color: "#fff" }}
                >
                  Checkout
                </Link>
                <Link
                  href="/design-5/shop"
                  className="block w-full text-center mt-4 min-h-11 py-2 text-[11px] tracking-[0.3em] uppercase border-b border-black/30 hover:opacity-60 transition-opacity"
                >
                  Continue browsing
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
