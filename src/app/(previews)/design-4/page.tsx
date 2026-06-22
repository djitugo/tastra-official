"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const GREEN = "#2d5a3d";
const GREEN_DEEP = "#1f4029";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";
const EASE = [0.22, 1, 0.36, 1] as const;

const ICON_BADGES = [
  { label: "Halal", path: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Natural", path: "M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6" },
  { label: "Alcohol Free", path: "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" },
  { label: "Cruelty Free", path: "M11 5C5 5 2 9 2 13c0 2 1 4 4 4s5-2 5-2 2 2 5 2 4-2 4-4c0-4-3-8-9-8zM7 10v.01M15 10v.01" },
];

function Icon({ d, size = 20, className = "" }: { d: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function Design4Home() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: GREEN_LIGHT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: GREEN, color: CREAM }}
            >
              ✦ Halal Green Beauty
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight" style={{ color: INK }}>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: EASE }} className="block">
                Halal, natural,
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8, ease: EASE }} className="block" style={{ color: GREEN }}>
                and dependable.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-6 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: `${INK}B3` }}
            >
              Skincare for Indonesian skin, made in Indonesia. Formulated with
              carefully chosen halal ingredients that are safe, gentle, and
              tested for everyday use.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/design-4/shop" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105" style={{ background: GREEN, color: CREAM }}>
                Shop now
              </Link>
              <Link href="/design-4/about" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold border-2 transition-colors hover:bg-white" style={{ borderColor: GREEN, color: GREEN }}>
                Learn more
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {ICON_BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.08, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ background: CREAM, color: GREEN }}>
                    <Icon d={b.path} size={22} />
                  </div>
                  <p className="text-[11px] font-semibold leading-tight" style={{ color: `${INK}B3` }}>{b.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.0, ease: EASE }}
            className="relative aspect-square max-w-lg mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-full" style={{ background: `linear-gradient(135deg, ${CREAM} 0%, #ffffff 100%)`, boxShadow: "0 20px 60px rgba(45, 90, 61, 0.15)" }} />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0">
              <SmartImage src="/products/uv-protector.webp" alt="Tastra UV Protector" fill priority sizes="(max-width: 1024px) 100vw, 512px" className="object-contain p-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 220, damping: 20 }}
              className="absolute top-8 right-2 sm:right-4 rounded-full px-4 py-2 text-xs font-bold flex items-center gap-2"
              style={{ background: CREAM, color: GREEN, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: GREEN }} />
              MUI Certified
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="absolute bottom-4 left-2 sm:left-4 rounded-2xl px-4 py-3"
              style={{ background: GREEN, color: CREAM, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
            >
              <p className="text-[10px] uppercase tracking-wider opacity-70 font-semibold">Best Seller</p>
              <p className="text-base font-bold">SPF 50+ PA++++</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 md:py-20" style={{ background: CREAM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Categories</p>
              <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: INK }}>Find what fits you</h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((c, i) => {
              const sample = PRODUCTS.find((p) => p.category === c.slug);
              return (
                <RevealItem key={c.slug}>
                  <Link href="/design-4/shop" className="group block text-center">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="aspect-square rounded-full mb-4 relative overflow-hidden"
                      style={{ background: i % 2 === 0 ? GREEN_LIGHT : GREEN_SOFT }}
                    >
                      {sample && <SmartImage src={sample.images[0]} alt={c.label} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-contain p-8" />}
                    </motion.div>
                    <p className="text-base font-bold" style={{ color: INK }}>{c.label}</p>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 md:py-20" style={{ background: GREEN_SOFT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GREEN }}>✦ Best Sellers</p>
                <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: INK }}>Customer favorites</h2>
              </div>
              <Link href="/design-4/shop" className="text-sm font-bold underline underline-offset-4" style={{ color: GREEN }}>View all →</Link>
            </div>
          </Reveal>
          <RevealStagger stagger={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => {
              const off = discountPercent(p.price, p.originalPrice);
              return (
                <RevealItem key={p.slug}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: EASE }}>
                    <Link
                      href={`/design-4/shop/${p.slug}`}
                      className="block rounded-2xl overflow-hidden group"
                      style={{ background: CREAM, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                    >
                      <div className="relative aspect-square overflow-hidden" style={{ background: GREEN_LIGHT }}>
                        <SmartImage src={p.images[0]} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-contain p-6 transition-transform duration-300 group-hover:scale-105" />
                        {off > 0 && <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ background: GREEN, color: CREAM }}>-{off}%</span>}
                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider" style={{ background: CREAM, color: GREEN }}>Halal</span>
                      </div>
                      <div className="p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: `${INK}80` }}>{p.category}</p>
                        <h3 className="font-bold text-base leading-tight" style={{ color: INK }}>{p.name}</h3>
                        <div className="mt-3 flex items-baseline gap-2">
                          <span className="text-base font-extrabold" style={{ color: GREEN }}>{formatRupiah(p.price)}</span>
                          {off > 0 && <span className="text-xs line-through" style={{ color: `${INK}66` }}>{formatRupiah(p.originalPrice)}</span>}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-24" style={{ background: GREEN, color: CREAM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 opacity-70">✦ Why Tastra</p>
              <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-[1.1]">Our commitment to your skin</h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.12} className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Halal MUI", body: "Certified Halal by the Indonesian Council of Ulama (MUI)." },
              { label: "Natural", body: "Niacinamide, Centella, and Ceramide. Active ingredients that are proven to work." },
              { label: "Alcohol Free", body: "Safe for sensitive skin. Never leaves your skin dry." },
              { label: "Cruelty Free", body: "Never tested on animals. Committed to ethical production." },
            ].map((x, i) => (
              <RevealItem key={x.label}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="text-center p-7 rounded-2xl h-full" style={{ background: GREEN_DEEP }}>
                  <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center border-2" style={{ borderColor: CREAM }}>
                    <Icon d={ICON_BADGES[i].path} size={22} />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2">{x.label}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{x.body}</p>
                </motion.div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 md:py-20" style={{ background: CREAM }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Newsletter</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: INK }}>Get the latest news and offers</h2>
            <p className="text-base mb-8" style={{ color: `${INK}99` }}>Subscribe for product updates, skincare tips, and special deals.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" aria-label="Email" className="flex-1 px-5 py-3.5 rounded-full text-sm border-2 focus:outline-none focus:ring-2 focus:ring-offset-2" style={{ borderColor: `${GREEN}33`, background: "#fff" }} />
              <button type="submit" className="rounded-full px-7 py-3.5 text-sm font-bold whitespace-nowrap" style={{ background: GREEN, color: CREAM }}>Subscribe</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
