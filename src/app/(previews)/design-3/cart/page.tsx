"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";

function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

export default function Design3Cart() {
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
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
            <Sparkle size={14} /> Your bag <Sparkle size={14} />
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            What is <em className="italic" style={{ color: ROSE_DEEP }}>in the bag</em>
          </h1>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {!ready ? (
            <p className="text-center text-sm font-semibold opacity-60">Loading...</p>
          ) : items.length === 0 ? (
            <div className="rounded-3xl p-12 text-center" style={{ background: "#fff" }}>
              <div className="text-5xl mb-4" aria-hidden>🌸</div>
              <p className="text-2xl font-extrabold mb-3">Your bag is empty</p>
              <p className="text-base mb-6 max-w-md mx-auto" style={{ color: `${INK}99` }}>
                Pick something that suits your skin. There are budget friendly bundles for anyone just starting out.
              </p>
              <Link
                href="/design-3/shop"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm transition-transform hover:scale-105"
                style={{ background: INK, color: PEACH }}
              >
                Start shopping <span aria-hidden>→</span>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_360px] gap-6">
              <ul className="space-y-4">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="rounded-3xl p-4 flex gap-4 sm:gap-6 items-center" style={{ background: "#fff" }}>
                    <Link
                      href={`/design-3/shop/${product.slug}`}
                      className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden"
                      style={{ background: PEACH_DEEP }}
                    >
                      <SmartImage src={product.images[0]} alt={product.name} fill sizes="112px" className="object-contain p-2" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: `${INK}80` }}>
                        {product.category}
                      </p>
                      <Link href={`/design-3/shop/${product.slug}`} className="font-extrabold text-base sm:text-lg leading-tight hover:opacity-70">
                        {product.name}
                      </Link>
                      <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
                        <div className="inline-flex rounded-full p-1" style={{ background: PEACH }} role="group" aria-label="Quantity">
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-9 h-9 rounded-full flex items-center justify-center font-bold transition-colors hover:bg-white"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="w-9 h-9 flex items-center justify-center font-extrabold">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="w-9 h-9 rounded-full flex items-center justify-center font-bold transition-colors hover:bg-white"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-base">{formatRupiah(product.price * line.qty)}</span>
                          <button
                            type="button"
                            onClick={() => remove(line.slug)}
                            className="rounded-full w-9 h-9 flex items-center justify-center text-white text-xs font-bold transition-transform hover:scale-110"
                            style={{ background: ROSE }}
                            aria-label={`Remove ${product.name}`}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="rounded-3xl p-6 h-fit lg:sticky lg:top-24" style={{ background: "#fff" }}>
                <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2">
                  <Sparkle size={18} /> Summary
                </h2>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt style={{ color: `${INK}99` }}>Subtotal</dt>
                    <dd className="font-bold">{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: `${INK}99` }}>Shipping</dt>
                    <dd className="font-bold uppercase" style={{ color: ROSE_DEEP }}>Free 🎉</dd>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-baseline" style={{ borderColor: `${INK}1A` }}>
                    <dt className="font-extrabold text-base">Total</dt>
                    <dd className="font-extrabold text-2xl">{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link
                  href="/design-3/checkout"
                  className="block w-full text-center mt-6 rounded-full px-7 py-4 font-bold text-sm transition-transform hover:scale-[1.02]"
                  style={{ background: INK, color: PEACH }}
                >
                  Checkout <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/design-3/shop"
                  className="block w-full text-center mt-3 rounded-full px-7 py-3 font-bold text-sm border-2 transition-colors hover:bg-white"
                  style={{ borderColor: INK, color: INK }}
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
