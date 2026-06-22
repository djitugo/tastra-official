"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS, getProduct } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { useCart } from "@/lib/cart";
import { SmartImage } from "@/components/shared/smart-image";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";
const EASE = [0.22, 1, 0.36, 1] as const;

type Params = Promise<{ slug: string }>;

export default function Design4ProductPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = getProduct(slug);
  if (!product) return notFound();

  const off = discountPercent(product.price, product.originalPrice);
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 4);

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs font-semibold" style={{ color: `${INK}99` }}>
          <Link href="/design-4/shop" className="hover:opacity-60">Shop</Link>
          <span className="mx-2">·</span>
          <span style={{ color: INK }}>{product.name}</span>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden" style={{ background: GREEN_LIGHT }}>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0">
                <SmartImage src={product.images[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-12" />
              </motion.div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ background: CREAM, color: GREEN }}>
                ✓ Halal MUI
              </span>
              {off > 0 && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold" style={{ background: GREEN, color: CREAM }}>
                  Save {off}%
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden" style={{ background: GREEN_LIGHT }}>
                    <SmartImage src={src} alt={`${product.name} ${i + 1}`} fill sizes="100px" className="object-contain p-2" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: EASE }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>
              {product.category} · {product.size}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight" style={{ color: INK }}>{product.name}</h1>
            <p className="mt-4 text-lg" style={{ color: `${INK}99` }}>{product.tagline}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-extrabold" style={{ color: GREEN }}>{formatRupiah(product.price)}</span>
              {off > 0 && <span className="text-base line-through" style={{ color: `${INK}66` }}>{formatRupiah(product.originalPrice)}</span>}
            </div>

            <ActionButtons slug={product.slug} />

            <div className="mt-10 flex flex-wrap gap-3">
              {["Halal MUI", "Alcohol Free", "Natural", "Cruelty Free"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: GREEN_LIGHT, color: GREEN }}>
                  ✓ {b}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed" style={{ color: `${INK}CC` }}>{product.description}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl p-5" style={{ background: GREEN_SOFT }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: GREEN }}>Best for</p>
                <ul className="space-y-1.5 text-sm">
                  {product.bestFor.map((b) => <li key={b} className="flex gap-2"><span aria-hidden style={{ color: GREEN }}>✓</span>{b}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl p-5" style={{ background: GREEN_SOFT }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: GREEN }}>Hero ingredients</p>
                <ul className="space-y-1.5 text-sm">
                  {product.ingredients.map((b) => <li key={b} className="flex gap-2"><span aria-hidden style={{ color: GREEN }}>•</span>{b}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-3 rounded-2xl p-5" style={{ background: GREEN_SOFT }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: GREEN }}>How to use</p>
              <ol className="space-y-2 text-sm list-decimal list-inside marker:font-bold marker:text-current">
                {product.howTo.map((h) => <li key={h}>{h}</li>)}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16" style={{ background: GREEN_SOFT }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: INK }}>You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => {
                const o = discountPercent(p.price, p.originalPrice);
                return (
                  <Link key={p.slug} href={`/design-4/shop/${p.slug}`} className="group block rounded-2xl overflow-hidden transition-transform hover:-translate-y-1" style={{ background: CREAM, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                    <div className="relative aspect-square" style={{ background: GREEN_LIGHT }}>
                      <SmartImage src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-6 transition-transform group-hover:scale-105" />
                      {o > 0 && <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ background: GREEN, color: CREAM }}>-{o}%</span>}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-base" style={{ color: INK }}>{p.name}</h3>
                      <p className="mt-2 font-extrabold" style={{ color: GREEN }}>{formatRupiah(p.price)}</p>
                    </div>
                  </Link>
                );
              })}
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
    <div className="mt-8 grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={onAdd}
        disabled={adding}
        className="rounded-full px-7 py-3.5 font-bold text-sm transition-transform hover:scale-[1.02] disabled:opacity-50"
        style={{ background: GREEN, color: CREAM }}
      >
        {done ? "✓ Added" : "Add to cart"}
      </button>
      <Link
        href="/design-4/cart"
        className="rounded-full px-7 py-3.5 font-bold text-sm border-2 text-center transition-colors hover:bg-white"
        style={{ borderColor: GREEN, color: GREEN }}
      >
        View cart
      </Link>
    </div>
  );
}
