"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS, getProduct } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { useCart } from "@/lib/cart";
import { SmartImage } from "@/components/shared/smart-image";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";
const EASE = [0.22, 1, 0.36, 1] as const;

type Params = Promise<{ slug: string }>;

export default function Design2ProductPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = getProduct(slug);
  if (!product) return notFound();

  const off = discountPercent(product.price, product.originalPrice);
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 3);

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-60">
          <Link href="/design-2/shop" className="hover:opacity-100">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: INK }}>{product.name}</span>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/5]" style={{ background: "#fff" }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <SmartImage src={product.images[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-12 md:p-16" />
              </motion.div>
              {off > 0 && (
                <span className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                  ⸻ {off}% Off ⸻
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <div key={i} className="relative aspect-square" style={{ background: "#fff" }}>
                    <SmartImage src={src} alt={`${product.name} view ${i + 1}`} fill sizes="100px" className="object-contain p-2" />
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
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
              N° {String(PRODUCTS.findIndex((p) => p.slug === product.slug) + 1).padStart(2, "0")} · {product.category} · {product.size}
            </p>
            <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl leading-[1.1]">{product.name}</h1>
            <p className="font-[family-name:var(--font-serif-alt)] italic text-xl mt-4" style={{ color: `${INK}B3` }}>
              {product.tagline}
            </p>

            <div className="mt-10 flex items-baseline gap-4">
              <span className="font-[family-name:var(--font-serif)] text-3xl">{formatRupiah(product.price)}</span>
              {off > 0 && <span className="text-base line-through opacity-40">{formatRupiah(product.originalPrice)}</span>}
            </div>

            <ActionButtons slug={product.slug} />

            <p className="mt-12 text-[15px] leading-[1.85]" style={{ color: `${INK}CC` }}>
              {product.description}
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>
                  ⸻ Best for
                </p>
                <ul className="space-y-1.5 text-sm leading-relaxed">
                  {product.bestFor.map((b) => (
                    <li key={b} className="font-[family-name:var(--font-serif-alt)] italic">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>
                  ⸻ Hero ingredients
                </p>
                <ul className="space-y-1.5 text-sm leading-relaxed">
                  {product.ingredients.map((b) => (
                    <li key={b} className="font-[family-name:var(--font-serif-alt)] italic">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>
                  ⸻ How to apply
                </p>
                <ol className="space-y-2 text-sm leading-relaxed list-decimal list-inside">
                  {product.howTo.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-center" style={{ color: GOLD }}>
              You might also consider
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-center mb-12">
              <em className="font-[family-name:var(--font-serif-alt)] font-light">Companions</em> in the ritual.
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {related.map((p, i) => (
                <Link key={p.slug} href={`/design-2/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] mb-5 overflow-hidden" style={{ background: "#fff" }}>
                    <SmartImage src={p.images[0]} alt={p.name} fill sizes="33vw" className="object-contain p-8 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: GOLD }}>
                    N° 0{i + 1}
                  </p>
                  <h3 className="font-[family-name:var(--font-serif)] text-xl">{p.name}</h3>
                  <p className="text-sm tracking-wider mt-2 opacity-70">{formatRupiah(p.price)}</p>
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
        className="min-h-[48px] text-[12px] tracking-[0.3em] uppercase py-4 transition-colors disabled:opacity-50"
        style={{ background: INK, color: CREAM }}
      >
        {done ? "✓ Added to bag" : "Add to bag"}
      </button>
      <Link
        href="/design-2/cart"
        className="min-h-[48px] text-[12px] tracking-[0.3em] uppercase py-4 text-center border-2 transition-colors hover:bg-[#1a1a1a] hover:text-[#f5f1ea] flex items-center justify-center"
        style={{ borderColor: INK, color: INK }}
      >
        View bag
      </Link>
    </div>
  );
}
