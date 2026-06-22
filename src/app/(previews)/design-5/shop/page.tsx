"use client";

import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const BEIGE_SOFT = "#f7f2e8";

export default function Design5Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      {/* HEADER */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Shop</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            The <span className="italic font-[family-name:var(--font-serif-alt)]">collection.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.8] opacity-70">
            A small, intentional lineup. Pick a single piece or a complete ritual.
            Everything is considered, nothing is filler.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap gap-x-8 gap-y-3">
          <Chip on={active === "all"} onClick={() => setActive("all")}>All</Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c.slug} on={active === c.slug} onClick={() => setActive(c.slug)}>{c.label}</Chip>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
          <RevealStagger stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((p, i) => (
              <RevealItem key={p.slug}>
                <Link href={`/design-5/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden" style={{ background: BEIGE_SOFT }}>
                    <SmartImage src={p.images[0]} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-contain p-8 transition-opacity duration-500 group-hover:opacity-0" />
                    <SmartImage src={p.images[1] || p.images[0]} alt={`${p.name} alternate angle`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-contain p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-3 opacity-0">
                      <span className="block w-full text-center py-2.5 text-[10px] tracking-[0.3em] uppercase bg-white">Quick view</span>
                    </div>
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-1.5">N° {String(i + 1).padStart(2, "0")} · {p.category}</p>
                  <h3 className="text-base tracking-wide">{p.name}</h3>
                  <p className="mt-1.5 text-sm tracking-wider opacity-70">{formatRupiah(p.price)}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          {items.length === 0 && (
            <Reveal>
              <p className="text-center py-24 text-sm tracking-wider opacity-60">No products in this category yet.</p>
            </Reveal>
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
      className={`min-h-11 text-[11px] tracking-[0.3em] uppercase pb-1.5 border-b transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black ${
        on ? "border-black opacity-100" : "border-transparent opacity-50 hover:opacity-100"
      }`}
      aria-pressed={on}
    >
      {children}
    </button>
  );
}
