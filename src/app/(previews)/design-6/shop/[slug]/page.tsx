"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS, getProduct } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { useCart } from "@/lib/cart";

const CREAM = "#f7f1e6";
const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";
const SAGE = "#6e7d5d";
const EASE = [0.22, 1, 0.36, 1] as const;

type Params = Promise<{ slug: string }>;

export default function Design6ProductPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = getProduct(slug);
  if (!product) return notFound();

  const off = discountPercent(product.price, product.originalPrice);
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 3);
  const number = String(PRODUCTS.findIndex((p) => p.slug === product.slug) + 1).padStart(2, "0");

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-4 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-60">
          <Link href="/design-6#range" className="hover:opacity-100">Range</Link>
          <span className="mx-3">⸻</span>
          <span style={{ color: INK }}>{product.name}</span>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[3/4]" style={{ background: CREAM_DEEP }}>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0">
                <Image src={product.images[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-12 md:p-16" />
              </motion.div>
              {off > 0 && (
                <span className="absolute top-6 left-6 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: OCHRE }}>
                  ⸻ {off}% Off
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <div key={i} className="relative aspect-square" style={{ background: CREAM_DEEP }}>
                    <Image src={src} alt={`${product.name} ${i + 1}`} fill sizes="100px" className="object-contain p-2" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
            className="lg:col-span-6"
          >
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: OCHRE }}>
              N° {number} · {product.category} · {product.size}
            </p>
            <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl lg:text-6xl leading-[1.1]">{product.name}</h1>
            <p className="font-[family-name:var(--font-lora)] italic text-xl mt-4" style={{ color: `${INK}B3` }}>{product.tagline}</p>

            <div className="mt-10 flex items-baseline gap-4">
              <span className="font-[family-name:var(--font-mono)] text-2xl tracking-wider">{formatRupiah(product.price)}</span>
              {off > 0 && <span className="font-[family-name:var(--font-mono)] text-sm line-through opacity-40">{formatRupiah(product.originalPrice)}</span>}
            </div>

            <ActionButtons slug={product.slug} />

            <p className="mt-12 text-[15px] leading-[1.9]" style={{ color: `${INK}CC` }}>{product.description}</p>

            <div className="mt-12 space-y-8 border-t pt-8" style={{ borderColor: `${INK}33` }}>
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: OCHRE }}>
                  ⸻ Best for
                </p>
                <ul className="space-y-1.5 text-sm leading-relaxed">
                  {product.bestFor.map((b) => <li key={b} className="italic" style={{ color: SAGE }}>— {b}</li>)}
                </ul>
              </div>
              <div className="border-t pt-8" style={{ borderColor: `${INK}33` }}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: OCHRE }}>
                  ⸻ Hero Ingredients
                </p>
                <ul className="space-y-1.5 text-sm leading-relaxed">
                  {product.ingredients.map((b) => <li key={b} className="italic" style={{ color: SAGE }}>— {b}</li>)}
                </ul>
              </div>
              <div className="border-t pt-8" style={{ borderColor: `${INK}33` }}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: OCHRE }}>
                  ⸻ How to Apply
                </p>
                <ol className="space-y-2 text-sm leading-relaxed list-decimal list-inside">
                  {product.howTo.map((h) => <li key={h}>{h}</li>)}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-4 text-center" style={{ color: OCHRE }}>
              ⸻ Of Companion ⸻
            </p>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl text-center mb-14">
              <span className="italic" style={{ color: OCHRE }}>Together</span> in the ritual.
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {related.map((p, i) => (
                <Link key={p.slug} href={`/design-6/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[3/4] mb-5 overflow-hidden" style={{ background: CREAM_DEEP }}>
                    <Image src={p.images[0]} alt={p.name} fill sizes="33vw" className="object-contain p-8 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-1.5" style={{ color: OCHRE }}>
                    N° 0{i + 1}
                  </p>
                  <h3 className="font-[family-name:var(--font-lora)] text-xl">{p.name}</h3>
                  <p className="mt-2 italic text-sm" style={{ color: `${INK}99` }}>{p.tagline}</p>
                  <p className="mt-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.15em]">{formatRupiah(p.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ActionButtons({ slug }: { slug: string }) {
  const { add } = useCart();
  const [adding, setAdding] = useState(false);
  const [done, setDone] = useState(false);

  const onAdd = () => {
    if (adding) return;
    setAdding(true);
    add(slug, 1);
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setAdding(false);
    }, 1200);
  };

  return (
    <div className="mt-10 grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={onAdd}
        disabled={adding}
        className="py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50"
        style={{ background: INK, color: CREAM }}
      >
        {done ? "✓ Added to Cart" : "Add to Cart"}
      </button>
      <Link
        href="/design-6/cart"
        className="py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase text-center border transition-colors hover:bg-[#2a1f17] hover:text-[#f7f1e6]"
        style={{ borderColor: INK, color: INK }}
      >
        View Cart
      </Link>
    </div>
  );
}
