"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design4Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <section className="py-12 md:py-16" style={{ background: GREEN_LIGHT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Shop</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: INK }}>All products</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: `${INK}99` }}>
            A focused lineup of halal and natural essentials. Pick one, or grab a bundle. Everything is 45 to 50 percent off during launch.
          </p>
        </div>
      </section>

      <section className="pt-8" style={{ background: CREAM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2.5">
          <Chip on={active === "all"} onClick={() => setActive("all")}>All</Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c.slug} on={active === c.slug} onClick={() => setActive(c.slug)}>{c.label}</Chip>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14" style={{ background: CREAM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealStagger stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((p) => {
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
                        <p className="mt-2 text-xs leading-relaxed line-clamp-2 min-h-[32px]" style={{ color: `${INK}99` }}>{p.tagline}</p>
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
    </>
  );
}

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-5 h-11 text-sm font-bold border-2 transition-colors"
      style={
        on
          ? { background: GREEN, color: CREAM, borderColor: GREEN }
          : { background: GREEN_SOFT, color: INK, borderColor: "transparent" }
      }
    >
      {children}
    </button>
  );
}
