"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";
const EASE = [0.22, 1, 0.36, 1] as const;

function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

export default function Design3Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
            <Sparkle size={14} /> Shop <Sparkle size={14} />
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Everything for <em className="italic" style={{ color: ROSE_DEEP }}>happy skin</em>
          </h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: `${INK}99` }}>
            Six core products, no clutter. Pick one or grab a bundle. Everything is 45 to 50 percent off during launch.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
          <Chip on={active === "all"} onClick={() => setActive("all")}>All</Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c.slug} on={active === c.slug} onClick={() => setActive(c.slug)}>{c.label}</Chip>
          ))}
        </div>
      </section>

      <section className="pb-20 pt-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <RevealStagger stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((p) => {
              const off = discountPercent(p.price, p.originalPrice);
              return (
                <RevealItem key={p.slug}>
                  <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25, ease: EASE }}>
                    <Link
                      href={`/design-3/shop/${p.slug}`}
                      className="group block rounded-3xl p-3 hover:shadow-xl transition-shadow"
                      style={{ background: "#fff" }}
                    >
                      <div className="relative aspect-square rounded-2xl overflow-hidden mb-3" style={{ background: PEACH_DEEP }}>
                        <SmartImage src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-4 transition-transform duration-300 group-hover:scale-110" />
                        {off > 0 && (
                          <span className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white" style={{ background: ROSE }}>
                            -{off}%
                          </span>
                        )}
                      </div>
                      <div className="px-2 pb-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: `${INK}80` }}>{p.category}</p>
                        <h3 className="font-extrabold text-lg mt-0.5">{p.name}</h3>
                        <p className="text-xs mt-1.5 line-clamp-2 min-h-[32px]" style={{ color: `${INK}99` }}>{p.tagline}</p>
                        <div className="mt-3 flex items-baseline gap-2">
                          <span className="font-extrabold">{formatRupiah(p.price)}</span>
                          {off > 0 && (
                            <span className="text-xs line-through" style={{ color: `${INK}66` }}>{formatRupiah(p.originalPrice)}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>

          {items.length === 0 && (
            <div className="rounded-3xl p-12 text-center" style={{ background: "#fff" }}>
              <div className="text-4xl mb-3" aria-hidden>🌸</div>
              <p className="text-xl font-extrabold">Nothing here yet</p>
              <p className="mt-2 text-sm" style={{ color: `${INK}99` }}>Try another category.</p>
            </div>
          )}
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
      className="rounded-full px-5 min-h-11 text-sm font-bold transition-all"
      style={
        on
          ? { background: INK, color: PEACH }
          : { background: "#fff", color: INK, border: `2px solid ${PEACH_DEEP}` }
      }
    >
      {children}
    </button>
  );
}
