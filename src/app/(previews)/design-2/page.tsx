"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design2Home() {
  const featured = PRODUCTS.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 pt-24 pb-28 md:pt-32 md:pb-40 grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
              className="text-[11px] tracking-[0.4em] uppercase mb-8"
              style={{ color: GOLD }}
            >
              Vol. I, A New Indonesian Standard
            </motion.p>
            <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              <LineRise delay={0.4} duration={1.0}>
                <span>
                  The art of <em className="font-[family-name:var(--font-serif-alt)] font-light">caring</em>
                </span>
              </LineRise>
              <LineRise delay={0.55} duration={1.0}>for skin you</LineRise>
              <LineRise delay={0.7} duration={1.0}>live in.</LineRise>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
              className="mt-10 max-w-md text-base md:text-lg leading-[1.7]"
              style={{ color: `${INK}B3` }}
            >
              Tastra composes formulas that honor the complexity of Indonesian skin. Tested in real climate, designed for a ritual you can keep.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease: EASE }}
              className="mt-10 flex flex-wrap gap-6 items-center"
            >
              <Link
                href="/design-2/shop"
                className="inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase transition-colors"
                style={{ background: INK, color: CREAM }}
              >
                Explore the collection
              </Link>
              <Link
                href="/design-2/about"
                className="inline-flex items-center gap-2 min-h-[48px] text-[12px] tracking-[0.3em] uppercase border-b pb-1 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                Read our philosophy
                <Arrow />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: EASE }}
            className="lg:col-span-5 relative aspect-[4/5]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <SmartImage
                src="/products/uv-protector.webp"
                alt="The UV Protector"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-0 left-0 right-0 text-center"
            >
              <p className="font-[family-name:var(--font-serif-alt)] italic text-lg" style={{ color: GOLD }}>
                ⸻ The UV Protector ⸻
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase mt-1" style={{ color: `${INK}80` }}>
                SPF 50+ · PA++++ · 30ml
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-28 md:py-36">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
              <div>
                <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
                  The Collection
                </p>
                <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl leading-[1.05]">
                  Three essentials.
                  <br />
                  <em className="font-[family-name:var(--font-serif-alt)] font-light">Nothing in excess.</em>
                </h2>
              </div>
              <p className="text-base leading-[1.8]" style={{ color: `${INK}B3` }}>
                Every formula is chosen for a reason we can stand behind. Not trends, not a full shelf, only what your skin truly needs.
              </p>
            </div>
          </Reveal>

          <RevealStagger stagger={0.15} className="grid md:grid-cols-3 gap-12">
            {featured.map((p, i) => (
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: GOLD }}>
                    N° 0{i + 1} · {p.category}
                  </p>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl">{p.name}</h3>
                  <p className="font-[family-name:var(--font-serif-alt)] italic mt-2" style={{ color: `${INK}99` }}>
                    {p.tagline}
                  </p>
                  <p className="mt-4 text-sm tracking-wider">{formatRupiah(p.price)}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <Link
                href="/design-2/shop"
                className="inline-flex items-center gap-2 min-h-[48px] text-[12px] tracking-[0.3em] uppercase border-b pb-1 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                View all products
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b" style={{ borderColor: `${INK}1A`, background: "#fff" }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-28 md:py-40 text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-8" style={{ color: GOLD }}>
              ⸻ Philosophy ⸻
            </p>
          </Reveal>
          <Reveal delay={0.15} y={20}>
            <blockquote className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl leading-[1.25]">
              &ldquo;Indonesian skin does not ask for more products. It asks for the{" "}
              <em className="font-[family-name:var(--font-serif-alt)] font-light">more precise.</em>&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-12 max-w-2xl mx-auto leading-[1.8]" style={{ color: `${INK}B3` }}>
              Every Tastra formula begins from a simple premise: respect the complexity of skin, use ingredients that are proven, and present them in a texture you want to wear every day. No shortcuts, no miracle promises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <RevealStagger stagger={0.18} className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-28 md:py-32 grid md:grid-cols-3 gap-12 lg:gap-20">
          {[
            { roman: "I.", title: "Sourced", body: "Active ingredients traced to their origin, chosen not for a name but for proven efficacy." },
            { roman: "II.", title: "Tested", body: "Trialed on real Indonesian skin, in real climate, not a dry lab." },
            { roman: "III.", title: "Refined", body: "A light texture you want to reach for again. A ritual only works when it is kept." },
          ].map((x) => (
            <RevealItem key={x.title}>
              <div>
                <p className="font-[family-name:var(--font-serif-alt)] italic text-2xl" style={{ color: GOLD }}>
                  {x.roman}
                </p>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl mt-3">{x.title}</h3>
                <p className="mt-4 leading-[1.8] text-sm" style={{ color: `${INK}B3` }}>
                  {x.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* JOURNAL CTA */}
      <section style={{ borderColor: `${INK}1A`, background: CREAM }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-28 md:py-32 text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
              The Journal
            </p>
            <h3 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl">
              Quiet letters. No noisy promotions.
            </h3>
            <p className="mt-6 leading-[1.8] max-w-xl mx-auto" style={{ color: `${INK}B3` }}>
              Short essays on ritual, ingredients, and skin. Read more in our journal.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-6 items-center justify-center">
              <Link
                href="/design-2/blog"
                className="inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase"
                style={{ background: INK, color: CREAM }}
              >
                Read the journal
              </Link>
              <Link
                href="/design-2/contact"
                className="inline-flex items-center gap-2 min-h-[48px] text-[12px] tracking-[0.3em] uppercase border-b pb-1 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                Get in touch
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden>
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
