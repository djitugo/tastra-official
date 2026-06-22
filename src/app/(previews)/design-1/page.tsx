"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design1Home() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="border-b-2 border-black overflow-hidden">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
              className="inline-block bg-black text-white font-[family-name:var(--font-mono)] uppercase text-[11px] font-bold tracking-widest px-3 py-1 border-2 border-black mb-4"
            >
              ★ New Era ★
            </motion.span>
            <h1 className="font-[family-name:var(--font-display)] uppercase text-[14vw] leading-[0.85] sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter">
              <LineRise delay={0.1}>Local</LineRise>
              <LineRise delay={0.2}>Skincare,</LineRise>
              <LineRise delay={0.3}>
                <span className="inline-block bg-black text-white px-2">Real</span>
              </LineRise>
              <LineRise delay={0.4}>Results.</LineRise>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
              className="mt-6 max-w-md text-base md:text-lg text-black/70 leading-relaxed"
            >
              Natural ingredients, modern formulas. Reformulated for tropical weather and Indonesian skin.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/design-1/shop" className="btn btn-invert">Shop now →</Link>
              <Link href="/design-1/about" className="btn btn-ghost">Our story</Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: EASE }}
            className="relative aspect-square max-w-xl mx-auto w-full"
          >
            <div className="absolute inset-0 border-2 border-black bg-white grain" />
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0">
              <SmartImage src="/products/uv-protector.webp" alt="Tastra UV Protector" fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-8" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
              className="absolute -bottom-4 -right-4 bg-white border-2 border-black px-4 py-3 [box-shadow:6px_6px_0_0_#000]"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl leading-none uppercase">SPF 50+</p>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest mt-1">PA++++</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              className="absolute -top-4 -left-4 hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-black text-white spin-slow"
            >
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest leading-tight text-center">Tropic<br />Ready</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-b-2 border-black">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Best sellers</p>
                <h2 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-7xl mt-2 tracking-tighter">Top picks.</h2>
              </div>
              <Link href="/design-1/shop" className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest underline underline-offset-4">View all →</Link>
            </div>
          </Reveal>
          <RevealStagger stagger={0.1} className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {featured.map((p) => {
              const off = discountPercent(p.price, p.originalPrice);
              return (
                <RevealItem key={p.slug}>
                  <motion.div whileHover={{ y: -6, boxShadow: "6px 6px 0 0 #000" }} transition={{ duration: 0.2, ease: EASE }}>
                    <Link href={`/design-1/shop/${p.slug}`} className="group block border-2 border-black bg-white">
                      <div className="relative aspect-square border-b-2 border-black bg-white overflow-hidden">
                        <SmartImage src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-6 transition-transform duration-300 group-hover:scale-105" />
                        {off > 0 && <span className="absolute top-3 left-3 bg-black text-white font-[family-name:var(--font-mono)] uppercase text-[10px] font-bold tracking-widest px-2 py-1">-{off}%</span>}
                      </div>
                      <div className="p-4">
                        <h3 className="font-[family-name:var(--font-display)] uppercase text-xl tracking-tight">{p.name}</h3>
                        <p className="mt-2 text-xs text-black/70 line-clamp-2 min-h-[32px]">{p.tagline}</p>
                        <p className="mt-4 font-[family-name:var(--font-mono)] font-bold">{formatRupiah(p.price)}</p>
                      </div>
                    </Link>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-black text-white border-b-2 border-black">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-28 md:py-40">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-white/60 mb-6">★ Manifesto</p>
            <h2 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-7xl lg:text-8xl tracking-tighter max-w-5xl">
              Indonesian skin deserves skincare that is not a translation.
            </h2>
          </Reveal>
          <RevealStagger stagger={0.12} delay={0.2} className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { n: "01", h: "Natural ingredients.", b: "Niacinamide, ceramide, centella, and a lineup of actives proven to work." },
              { n: "02", h: "Modern formulas.", b: "Lightweight texture, no white cast, low pH. High performance without the drama." },
              { n: "03", h: "Honest pricing.", b: "International quality at local prices. No absurd markup for fancy packaging." },
            ].map((x) => (
              <RevealItem key={x.n}>
                <div className="border-2 border-white p-6 h-full">
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-white/50">{x.n}</p>
                  <h3 className="font-[family-name:var(--font-display)] uppercase text-2xl mt-3 tracking-tight">{x.h}</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">{x.b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-2 border-black">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 grid md:grid-cols-2 gap-8 items-center">
          <p className="font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tighter">Start with a bundle. Save 50%.</p>
          <div className="flex md:justify-end">
            <Link href="/design-1/shop" className="btn btn-invert">See bundles →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
