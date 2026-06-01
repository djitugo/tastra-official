"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS, getProduct } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { useCart } from "@/lib/cart";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";
const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 200, damping: 20 };

function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

type Params = Promise<{ slug: string }>;

export default function Design3ProductPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = getProduct(slug);
  if (!product) return notFound();

  const off = discountPercent(product.price, product.originalPrice);
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 4);

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-4 text-xs font-semibold" style={{ color: `${INK}99` }}>
          <Link href="/design-3#shop" className="hover:opacity-60">Produk</Link>
          <span className="mx-2">·</span>
          <span style={{ color: INK }}>{product.name}</span>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8 md:py-16 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="relative aspect-square rounded-[36px] overflow-hidden" style={{ background: PEACH_DEEP }}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src={product.images[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-12" />
              </motion.div>
              {off > 0 && (
                <motion.span
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, ...SPRING }}
                  className="absolute top-6 left-6 rounded-full px-4 py-2 text-xs font-bold text-white"
                  style={{ background: ROSE }}
                >
                  Hemat {off}% 🎉
                </motion.span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-2xl overflow-hidden" style={{ background: PEACH_DEEP }}>
                    <Image src={src} alt={`${product.name} ${i + 1}`} fill sizes="100px" className="object-contain p-2" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ROSE_DEEP }}>
              {product.category} · {product.size}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mt-3">
              {product.name}
            </h1>
            <p className="mt-4 text-lg" style={{ color: `${INK}99` }}>
              {product.tagline}
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-extrabold">{formatRupiah(product.price)}</span>
              {off > 0 && (
                <span className="text-base line-through" style={{ color: `${INK}66` }}>
                  {formatRupiah(product.originalPrice)}
                </span>
              )}
            </div>

            <ActionButtons slug={product.slug} />

            <p className="mt-8 text-sm leading-relaxed" style={{ color: `${INK}CC` }}>
              {product.description}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="rounded-3xl p-5" style={{ background: "#fff" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: ROSE_DEEP }}>
                  <Sparkle size={12} /> Cocok untuk
                </p>
                <ul className="space-y-1.5 text-sm">
                  {product.bestFor.map((b) => (
                    <li key={b} className="flex gap-2"><span aria-hidden>💕</span>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl p-5" style={{ background: "#fff" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: ROSE_DEEP }}>
                  <Sparkle size={12} /> Bahan utama
                </p>
                <ul className="space-y-1.5 text-sm">
                  {product.ingredients.map((b) => (
                    <li key={b} className="flex gap-2"><span aria-hidden>🌿</span>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 rounded-3xl p-5" style={{ background: "#fff" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: ROSE_DEEP }}>
                <Sparkle size={12} /> Cara pakai
              </p>
              <ol className="space-y-2 text-sm list-decimal list-inside marker:font-extrabold">
                {product.howTo.map((h) => <li key={h}>{h}</li>)}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: "#fff" }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              Mungkin <em className="italic" style={{ color: ROSE_DEEP }}>cocok juga</em>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/design-3/shop/${p.slug}`} className="group rounded-3xl p-3 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ background: PEACH }}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-3" style={{ background: PEACH_DEEP }}>
                    <Image src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-4 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="px-2 pb-2">
                    <h3 className="font-extrabold text-base">{p.name}</h3>
                    <p className="mt-1 text-sm font-extrabold">{formatRupiah(p.price)}</p>
                  </div>
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
    <div className="mt-8 grid grid-cols-2 gap-3">
      <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        type="button"
        onClick={onAdd}
        disabled={adding}
        className="rounded-full px-7 py-4 font-bold text-sm disabled:opacity-50"
        style={{ background: INK, color: PEACH }}
      >
        {done ? "✓ Masuk tas" : "Masukin ke tas 💕"}
      </motion.button>
      <Link
        href="/design-3/cart"
        className="rounded-full px-7 py-4 font-bold text-sm border-2 text-center transition-colors hover:bg-white"
        style={{ borderColor: INK, color: INK }}
      >
        Lihat tas
      </Link>
    </div>
  );
}
