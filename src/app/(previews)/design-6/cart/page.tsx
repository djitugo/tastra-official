"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const CREAM = "#f7f1e6";
const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

export default function Design6Cart() {
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
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
            ⸻ Of Your Selection
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl leading-[1.05]">
            <span className="italic" style={{ color: OCHRE }}>The</span> Cart.
          </h1>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-24">
          {!ready ? (
            <p className="font-[family-name:var(--font-mono)] text-sm tracking-wider opacity-60">Loading...</p>
          ) : items.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-[family-name:var(--font-lora)] text-3xl mb-4">
                <span className="italic" style={{ color: OCHRE }}>Empty,</span> for now.
              </p>
              <p className="text-[15px] leading-[1.85] max-w-md mx-auto mb-12" style={{ color: `${INK}B3` }}>
                Begin with a single product you trust. We believe in a small
                collection, chosen with care.
              </p>
              <Link
                href="/design-6/shop"
                className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                Discover the Range →
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_340px] gap-16">
              <ul className="border-t" style={{ borderColor: `${INK}33` }}>
                {items.map(({ line, product }, idx) => (
                  <li key={line.slug} className="py-10 border-b flex gap-6" style={{ borderColor: `${INK}33` }}>
                    <Link
                      href={`/design-6/shop/${product.slug}`}
                      className="relative w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0"
                      style={{ background: CREAM_DEEP }}
                    >
                      <SmartImage src={product.images[0]} alt={product.name} fill sizes="160px" className="object-contain p-3" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: OCHRE }}>
                        N° {String(idx + 1).padStart(2, "0")} · {product.category} · {product.size}
                      </p>
                      <Link href={`/design-6/shop/${product.slug}`} className="font-[family-name:var(--font-lora)] text-2xl hover:opacity-60">
                        {product.name}
                      </Link>
                      <p className="mt-1 italic text-sm" style={{ color: `${INK}99` }}>{product.tagline}</p>
                      <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
                        <div className="inline-flex items-center gap-2 border-b pb-0.5" style={{ borderColor: INK }}>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-11 h-11 flex items-center justify-center hover:opacity-60"
                            aria-label={`Reduce quantity of ${product.name}`}
                          >
                            −
                          </button>
                          <span className="font-[family-name:var(--font-mono)] text-sm min-w-[24px] text-center">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="w-11 h-11 flex items-center justify-center hover:opacity-60"
                            aria-label={`Increase quantity of ${product.name}`}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="font-[family-name:var(--font-mono)] text-base tracking-wider">{formatRupiah(product.price * line.qty)}</span>
                          <button
                            type="button"
                            onClick={() => remove(line.slug)}
                            className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100"
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
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6" style={{ color: OCHRE }}>Summary</p>
                <dl className="space-y-3 text-sm border-t pt-6" style={{ borderColor: `${INK}33` }}>
                  <div className="flex justify-between">
                    <dt className="opacity-60">Subtotal</dt>
                    <dd className="font-[family-name:var(--font-mono)]">{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="opacity-60">Shipping</dt>
                    <dd className="italic" style={{ color: OCHRE }}>Complimentary</dd>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-baseline" style={{ borderColor: `${INK}33` }}>
                    <dt className="font-[family-name:var(--font-lora)] text-base">Total</dt>
                    <dd className="font-[family-name:var(--font-lora)] text-2xl">{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link
                  href="/design-6/checkout"
                  className="block w-full text-center mt-10 py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase"
                  style={{ background: INK, color: CREAM }}
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/design-6/shop"
                  className="block w-full text-center mt-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-2 hover:opacity-60"
                  style={{ borderColor: INK }}
                >
                  Continue Browsing
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
