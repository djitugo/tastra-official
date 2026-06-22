"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS, getProduct } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { useCart } from "@/lib/cart";
import { SmartImage } from "@/components/shared/smart-image";

const EASE = [0.22, 1, 0.36, 1] as const;
type Params = Promise<{ slug: string }>;

export default function Design1ProductPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = getProduct(slug);
  if (!product) return notFound();

  const off = discountPercent(product.price, product.originalPrice);
  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  return (
    <>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">
          <Link href="/design-1/shop" className="hover:underline">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="relative aspect-square border-2 border-black bg-white">
              <SmartImage src={product.images[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-8 md:p-12" />
              {off > 0 && (
                <span style={{ transform: "rotate(-10deg)" }} className="absolute top-4 left-4 inline-block bg-black text-white font-[family-name:var(--font-mono)] uppercase text-[11px] font-bold tracking-widest px-3 py-1 border-2 border-black">-{off}% OFF</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <div key={i} className="relative aspect-square border-2 border-black bg-white">
                    <SmartImage src={src} alt={`${product.name} ${i + 1}`} fill sizes="(max-width: 768px) 25vw, 150px" className="object-contain p-2" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: EASE }}>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">{product.category} · {product.size}</p>
            <h1 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-6xl lg:text-7xl mt-3 tracking-tighter">{product.name}</h1>
            <p className="mt-4 text-lg text-black/80">{product.tagline}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-display)] uppercase text-4xl md:text-5xl tracking-tight">{formatRupiah(product.price)}</span>
              {off > 0 && (
                <>
                  <span className="font-[family-name:var(--font-mono)] text-base text-black/40 line-through">{formatRupiah(product.originalPrice)}</span>
                  <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest bg-black text-white px-2 py-1">-{off}%</span>
                </>
              )}
            </div>

            <ActionButtons slug={product.slug} />

            <p className="mt-8 text-sm leading-relaxed text-black/80">{product.description}</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="border-2 border-black p-4">
                <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-3 text-black/60">Best for</h3>
                <ul className="space-y-1 text-sm">{product.bestFor.map((b) => <li key={b} className="flex gap-2"><span aria-hidden>★</span>{b}</li>)}</ul>
              </div>
              <div className="border-2 border-black p-4">
                <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-3 text-black/60">Hero ingredients</h3>
                <ul className="space-y-1 text-sm">{product.ingredients.map((b) => <li key={b} className="flex gap-2"><span aria-hidden>★</span>{b}</li>)}</ul>
              </div>
            </div>

            <div className="mt-6 border-2 border-black p-4">
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-3 text-black/60">How to use</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside marker:font-[family-name:var(--font-mono)] marker:font-bold">{product.howTo.map((h) => <li key={h}>{h}</li>)}</ol>
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h2 className="font-[family-name:var(--font-display)] uppercase text-4xl md:text-5xl mb-8 tracking-tighter">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => {
                const o = discountPercent(p.price, p.originalPrice);
                return (
                  <Link key={p.slug} href={`/design-1/shop/${p.slug}`} className="group block border-2 border-black bg-white transition-transform hover:-translate-y-1 hover:[box-shadow:6px_6px_0_0_#000]">
                    <div className="relative aspect-square border-b-2 border-black bg-white overflow-hidden">
                      <SmartImage src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-6" />
                      {o > 0 && <span className="absolute top-3 left-3 bg-black text-white font-[family-name:var(--font-mono)] uppercase text-[10px] font-bold tracking-widest px-2 py-1">-{o}%</span>}
                    </div>
                    <div className="p-4">
                      <h3 className="font-[family-name:var(--font-display)] uppercase text-xl tracking-tight">{p.name}</h3>
                      <p className="mt-4 font-[family-name:var(--font-mono)] font-bold">{formatRupiah(p.price)}</p>
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
      <button type="button" onClick={onAdd} disabled={adding} className="btn btn-invert w-full">{done ? "✓ Added" : "Add to cart"}</button>
      <Link href="/design-1/cart" className="btn w-full">View cart</Link>
    </div>
  );
}
