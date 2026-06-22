"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const CREAM = "#f7f1e6";
const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design6Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
            ⸻ The Complete Catalogue
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl leading-[1.05]">
            <span className="italic" style={{ color: OCHRE }}>The</span> Range.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.9]" style={{ color: `${INK}B3` }}>
            Six core formulations and a handful of considered sets. No bloat,
            nothing for its own sake. Choose a single bottle, or take a pairing
            that suits your morning.
          </p>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-5 flex flex-wrap gap-3">
          <Chip on={active === "all"} onClick={() => setActive("all")}>All</Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c.slug} on={active === c.slug} onClick={() => setActive(c.slug)}>{c.label}</Chip>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24">
          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {items.map((p) => {
              const n = String(PRODUCTS.findIndex((x) => x.slug === p.slug) + 1).padStart(2, "0");
              return (
                <RevealItem key={p.slug}>
                  <Link href={`/design-6/shop/${p.slug}`} className="group block">
                    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE }} className="relative aspect-[3/4] mb-5 overflow-hidden" style={{ background: CREAM_DEEP }}>
                      <SmartImage src={p.images[0]} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-contain p-8 md:p-10 transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute top-5 left-5 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: OCHRE }}>N° {n}</span>
                    </motion.div>
                    <div className="flex items-baseline justify-between gap-3">
                      <h2 className="font-[family-name:var(--font-lora)] text-xl leading-tight">{p.name}</h2>
                      <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] uppercase opacity-50 shrink-0">{p.category}</span>
                    </div>
                    <p className="mt-2 italic text-sm leading-relaxed" style={{ color: `${INK}99` }}>{p.tagline}</p>
                    <p className="mt-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.15em]" style={{ color: INK }}>{formatRupiah(p.price)}</p>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>
    </>
  );

  function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="min-h-11 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase px-5 border transition-colors"
        style={on ? { background: INK, color: CREAM, borderColor: INK } : { background: "transparent", color: INK, borderColor: `${INK}33` }}
      >
        {children}
      </button>
    );
  }
}
