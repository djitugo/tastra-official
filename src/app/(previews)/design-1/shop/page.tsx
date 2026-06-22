"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design1Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <section className="border-b-2 border-black">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Shop</p>
          <h1 className="font-[family-name:var(--font-display)] uppercase text-6xl md:text-8xl lg:text-9xl mt-3 tracking-tighter">
            All <span className="inline-block bg-black text-white px-2">products.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-black/70 text-base md:text-lg">
            Six core products, no bloat. Pick one, or grab a bundle. Everything is 45 to 50 percent off during launch.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-5 flex flex-wrap gap-2">
          <Chip on={active === "all"} onClick={() => setActive("all")}>All</Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c.slug} on={active === c.slug} onClick={() => setActive(c.slug)}>{c.label}</Chip>
          ))}
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <RevealStagger stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {items.map((p) => {
              const off = discountPercent(p.price, p.originalPrice);
              return (
                <RevealItem key={p.slug}>
                  <motion.div whileHover={{ y: -6, boxShadow: "6px 6px 0 0 #000" }} transition={{ duration: 0.2, ease: EASE }}>
                    <Link href={`/design-1/shop/${p.slug}`} className="group block border-2 border-black bg-white">
                      <div className="relative aspect-square border-b-2 border-black bg-white overflow-hidden">
                        <SmartImage src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-6 transition-transform duration-300 group-hover:scale-105" />
                        {off > 0 && <span className="absolute top-3 left-3 bg-black text-white font-[family-name:var(--font-mono)] uppercase text-[10px] font-bold tracking-widest px-2 py-1">-{off}%</span>}
                        <span className="absolute top-3 right-3 font-[family-name:var(--font-mono)] uppercase text-[10px] tracking-widest text-black/50">{p.category}</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-[family-name:var(--font-display)] uppercase text-xl tracking-tight">{p.name}</h3>
                        <p className="mt-2 text-xs text-black/70 line-clamp-2 min-h-[32px]">{p.tagline}</p>
                        <div className="mt-4 flex items-baseline gap-2">
                          <span className="font-[family-name:var(--font-mono)] font-bold">{formatRupiah(p.price)}</span>
                          {off > 0 && <span className="font-[family-name:var(--font-mono)] text-xs text-black/40 line-through">{formatRupiah(p.originalPrice)}</span>}
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
      className={`font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest px-4 py-2 border-2 border-black transition-colors ${on ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"}`}
    >
      {children}
    </button>
  );
}
