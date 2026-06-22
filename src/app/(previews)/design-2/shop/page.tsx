"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design2Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const items = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      {/* HEADER */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            The Collection
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl leading-[1.05]">
            Every <em className="font-[family-name:var(--font-serif-alt)] font-light">essential.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg leading-[1.7]" style={{ color: `${INK}B3` }}>
            A deliberately small range. Choose one product, or compose a ritual. Everything is offered at the Vol. I launch price.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-6 flex flex-wrap gap-3">
          <Chip on={active === "all"} onClick={() => setActive("all")}>
            All
          </Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c.slug} on={active === c.slug} onClick={() => setActive(c.slug)}>
              {c.label}
            </Chip>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <RevealStagger stagger={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14">
            {items.map((p, i) => {
              const off = discountPercent(p.price, p.originalPrice);
              return (
                <RevealItem key={p.slug} y={32}>
                  <Link href={`/design-2/shop/${p.slug}`} className="group block">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="relative aspect-[4/5] mb-6 overflow-hidden"
                      style={{ background: "#fff" }}
                    >
                      <SmartImage
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                      />
                      {off > 0 && (
                        <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
                          ⸻ {off}% Off
                        </span>
                      )}
                    </motion.div>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: GOLD }}>
                      N° {String(i + 1).padStart(2, "0")} · {p.category}
                    </p>
                    <h3 className="font-[family-name:var(--font-serif)] text-2xl">{p.name}</h3>
                    <p className="font-[family-name:var(--font-serif-alt)] italic mt-2" style={{ color: `${INK}99` }}>
                      {p.tagline}
                    </p>
                    <div className="mt-4 flex items-baseline gap-3">
                      <span className="text-sm tracking-wider">{formatRupiah(p.price)}</span>
                      {off > 0 && (
                        <span className="text-xs line-through opacity-40">{formatRupiah(p.originalPrice)}</span>
                      )}
                    </div>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealStagger>

          {items.length === 0 && (
            <Reveal>
              <p className="font-[family-name:var(--font-serif-alt)] italic text-xl text-center py-20" style={{ color: `${INK}99` }}>
                Nothing in this category, for now.
              </p>
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
      className="min-h-11 px-5 text-[11px] tracking-[0.25em] uppercase border transition-colors"
      style={
        on
          ? { background: INK, color: CREAM, borderColor: INK }
          : { background: "transparent", color: INK, borderColor: `${INK}33` }
      }
    >
      {children}
    </button>
  );
}
