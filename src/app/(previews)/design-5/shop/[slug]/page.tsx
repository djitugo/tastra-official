"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS, getProduct } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { useCart } from "@/lib/cart";

const INK = "#0a0a0a";
const BEIGE_SOFT = "#f7f2e8";
const EASE = [0.22, 1, 0.36, 1] as const;

type Params = Promise<{ slug: string }>;

export default function Design5ProductPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = getProduct(slug);
  if (!product) return notFound();

  const off = discountPercent(product.price, product.originalPrice);
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 4);

  return (
    <>
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 text-[10px] tracking-[0.3em] uppercase opacity-60">
          <Link href="/design-5#shop" className="hover:opacity-100">Shop</Link>
          <span className="mx-3">/</span>
          <span style={{ color: INK }}>{product.name}</span>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: EASE }}>
            <div className="relative aspect-[4/5]" style={{ background: BEIGE_SOFT }}>
              <Image src={product.images[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-12 md:p-20" />
              {off > 0 && (
                <span className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase opacity-60">
                  − {off}% Off
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <div key={i} className="relative aspect-square" style={{ background: BEIGE_SOFT }}>
                    <Image src={src} alt={`${product.name} ${i + 1}`} fill sizes="100px" className="object-contain p-2" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.15, ease: EASE }}>
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-8">
              N° {String(PRODUCTS.findIndex((p) => p.slug === product.slug) + 1).padStart(2, "0")} · {product.category} · {product.size}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">{product.name}</h1>
            <p className="mt-6 text-lg font-light leading-[1.7]" style={{ color: `${INK}B3` }}>
              {product.tagline}
            </p>

            <div className="mt-10 flex items-baseline gap-4">
              <span className="text-2xl font-light tracking-wider">{formatRupiah(product.price)}</span>
              {off > 0 && <span className="text-sm line-through opacity-40">{formatRupiah(product.originalPrice)}</span>}
            </div>

            <ActionButtons slug={product.slug} />

            <p className="mt-12 text-[15px] leading-[1.9] opacity-75">{product.description}</p>

            <div className="mt-12 space-y-8 border-t border-black/10 pt-8">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-3">Best for</p>
                <ul className="space-y-1.5 text-sm font-light leading-relaxed">
                  {product.bestFor.map((b) => <li key={b}>— {b}</li>)}
                </ul>
              </div>
              <div className="border-t border-black/10 pt-8">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-3">Hero ingredients</p>
                <ul className="space-y-1.5 text-sm font-light leading-relaxed">
                  {product.ingredients.map((b) => <li key={b}>— {b}</li>)}
                </ul>
              </div>
              <div className="border-t border-black/10 pt-8">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-3">How to apply</p>
                <ol className="space-y-2 text-sm font-light leading-relaxed list-decimal list-inside">
                  {product.howTo.map((h) => <li key={h}>{h}</li>)}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-4 text-center">From the same edit</p>
            <h2 className="text-2xl md:text-4xl font-light text-center mb-14">
              <span className="italic font-[family-name:var(--font-serif-alt)] font-light">Complements.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <Link key={p.slug} href={`/design-5/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden" style={{ background: BEIGE_SOFT }}>
                    <Image src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-8 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-1.5">N° 0{i + 1}</p>
                  <h3 className="text-base font-light">{p.name}</h3>
                  <p className="mt-1 text-sm opacity-70 tracking-wider">{formatRupiah(p.price)}</p>
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
        className="py-4 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50"
        style={{ background: INK, color: "#fff" }}
      >
        {done ? "✓ Added to bag" : "Add to bag"}
      </button>
      <Link
        href="/design-5/cart"
        className="py-4 text-[11px] tracking-[0.3em] uppercase text-center border transition-colors hover:bg-black hover:text-white"
        style={{ borderColor: INK, color: INK }}
      >
        View bag
      </Link>
    </div>
  );
}
