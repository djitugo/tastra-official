"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

export default function Design2Cart() {
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
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            Your Bag
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl leading-[1.05]">
            The <em className="font-[family-name:var(--font-serif-alt)] font-light">selection.</em>
          </h1>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20">
          {!ready ? (
            <p className="text-sm tracking-wider opacity-60">Loading...</p>
          ) : items.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-[family-name:var(--font-serif)] text-3xl mb-4">
                <em className="font-[family-name:var(--font-serif-alt)] font-light">Empty,</em> for now.
              </p>
              <p className="text-base mb-10 max-w-md mx-auto leading-relaxed" style={{ color: `${INK}99` }}>
                Begin with one product you trust. We believe in a collection that is deliberately small.
              </p>
              <Link
                href="/design-2/shop"
                className="inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase"
                style={{ background: INK, color: CREAM }}
              >
                Explore the collection
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24">
              <ul className="border-t" style={{ borderColor: `${INK}1A` }}>
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="py-8 border-b flex gap-6" style={{ borderColor: `${INK}1A` }}>
                    <Link
                      href={`/design-2/shop/${product.slug}`}
                      className="relative w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0"
                      style={{ background: "#fff" }}
                    >
                      <SmartImage src={product.images[0]} alt={product.name} fill sizes="160px" className="object-contain p-3" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: GOLD }}>
                        {product.category} · {product.size}
                      </p>
                      <Link href={`/design-2/shop/${product.slug}`} className="font-[family-name:var(--font-serif)] text-2xl hover:opacity-60">
                        {product.name}
                      </Link>
                      <p className="font-[family-name:var(--font-serif-alt)] italic mt-1 text-sm" style={{ color: `${INK}99` }}>
                        {product.tagline}
                      </p>
                      <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
                        <div className="inline-flex items-center gap-2 border-b pb-1" style={{ borderColor: INK }}>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-11 h-11 flex items-center justify-center text-base hover:opacity-60"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="font-[family-name:var(--font-serif)] text-base min-w-[24px] text-center">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="w-11 h-11 flex items-center justify-center text-base hover:opacity-60"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="font-[family-name:var(--font-serif)] text-lg">{formatRupiah(product.price * line.qty)}</span>
                          <button
                            type="button"
                            onClick={() => remove(line.slug)}
                            className="min-h-11 text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="lg:sticky lg:top-32 h-fit">
                <h2 className="font-[family-name:var(--font-serif)] text-2xl mb-6">Summary</h2>
                <dl className="space-y-3 text-sm border-t pt-6" style={{ borderColor: `${INK}1A` }}>
                  <div className="flex justify-between">
                    <dt className="opacity-60">Subtotal</dt>
                    <dd>{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="opacity-60">Shipping</dt>
                    <dd className="italic font-[family-name:var(--font-serif-alt)]">Complimentary</dd>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-baseline" style={{ borderColor: `${INK}1A` }}>
                    <dt className="font-[family-name:var(--font-serif)] text-lg">Total</dt>
                    <dd className="font-[family-name:var(--font-serif)] text-2xl">{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link
                  href="/design-2/checkout"
                  className="flex items-center justify-center w-full text-center mt-8 min-h-[48px] py-4 text-[12px] tracking-[0.3em] uppercase"
                  style={{ background: INK, color: CREAM }}
                >
                  Proceed to checkout
                </Link>
                <Link
                  href="/design-2/shop"
                  className="flex items-center justify-center w-full text-center mt-3 min-h-11 py-3 text-[11px] tracking-[0.3em] uppercase border-b"
                  style={{ borderColor: INK }}
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
