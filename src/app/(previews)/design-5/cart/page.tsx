"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";

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
          <h1 className="text-4xl md:text-6xl font-light leading-[1.05]">
            The <span className="italic font-[family-name:var(--font-serif-alt)] font-light">edit.</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          {!ready ? (
            <p className="text-sm font-light tracking-wider opacity-60">Loading...</p>
          ) : items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-3xl font-light mb-4">
                Your bag is <span className="italic font-[family-name:var(--font-serif-alt)]">empty.</span>
              </p>
              <p className="text-sm leading-[1.9] opacity-60 max-w-md mx-auto mb-10">
                Start with one piece you trust. We believe in a collection that
                is intentionally small.
              </p>
              <Link
                href="/design-5#shop"
                className="text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60"
              >
                Shop the edit →
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
                      <Image src={product.images[0]} alt={product.name} fill sizes="160px" className="object-contain p-3" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">
                        {product.category} · {product.size}
                      </p>
                      <Link href={`/design-5/shop/${product.slug}`} className="text-xl font-light hover:opacity-60">
                        {product.name}
                      </Link>
                      <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
                        <div className="inline-flex items-center gap-1 border-b border-black/40 pb-0.5">
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center text-sm hover:opacity-60"
                            aria-label="Kurangi"
                          >
                            −
                          </button>
                          <span className="font-light text-sm min-w-[24px] text-center">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center text-sm hover:opacity-60"
                            aria-label="Tambah"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-base tracking-wider">{formatRupiah(product.price * line.qty)}</span>
                          <button
                            type="button"
                            onClick={() => remove(line.slug)}
                            className="text-[10px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100"
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
                    <dt className="opacity-60 font-light">Subtotal</dt>
                    <dd className="font-light">{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="opacity-60 font-light">Shipping</dt>
                    <dd className="italic font-[family-name:var(--font-serif-alt)] opacity-60">Complimentary</dd>
                  </div>
                  <div className="border-t border-black/10 pt-4 flex justify-between items-baseline">
                    <dt className="text-base font-light">Total</dt>
                    <dd className="text-2xl font-light">{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link
                  href="/checkout"
                  className="block w-full text-center mt-10 py-4 text-[11px] tracking-[0.3em] uppercase transition-opacity"
                  style={{ background: INK, color: "#fff" }}
                >
                  Checkout
                </Link>
                <Link
                  href="/design-5#shop"
                  className="block w-full text-center mt-4 text-[11px] tracking-[0.3em] uppercase border-b border-black/30 pb-2 hover:opacity-60"
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
