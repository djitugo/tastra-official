"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const BEIGE_SOFT = "#f7f2e8";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design5Home() {
  const featured = PRODUCTS.slice(0, 4);
  const packages = PRODUCTS.filter((p) => p.category === "package").slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-10"
              >
                Spring Edition · 2026
              </motion.p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                <LineRise delay={0.35} duration={1.0}>Made for</LineRise>
                <LineRise delay={0.5} duration={1.0}>
                  <span className="italic font-[family-name:var(--font-serif-alt)]">women</span>
                </LineRise>
                <LineRise delay={0.65} duration={1.0}>who lead.</LineRise>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="mt-12 max-w-md text-base leading-[1.8] opacity-70"
              >
                Skincare for women who know what they put on their skin. Functional
                formulas, designed for a modern rhythm, with nothing to hide and
                nothing in excess.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7 }}
                className="mt-12 flex flex-wrap items-center gap-8"
              >
                <Link href="/design-5/shop" className="text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
                  Shop the edit
                </Link>
                <Link href="/design-5/about" className="text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity">
                  Our story
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: EASE }}
              className="md:col-span-7 relative aspect-[4/5] md:aspect-[5/6]"
              style={{ background: BEIGE_SOFT }}
            >
              <SmartImage src="/products/uv-protector.webp" alt="Tastra Spring Edition" fill priority sizes="(max-width: 768px) 100vw, 60vw" className="object-contain p-12 md:p-20" />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="absolute bottom-6 right-6 text-[10px] tracking-[0.3em] uppercase opacity-60">
                N° 01 · The UV Protector
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SHOP THE EDIT (DUAL ANGLE GRID) */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
              <div className="md:col-span-5">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-4">Shop the edit</p>
                <h2 className="text-4xl md:text-5xl leading-[1.1]">
                  The essentials,<br />
                  <span className="italic font-[family-name:var(--font-serif-alt)]">refined.</span>
                </h2>
              </div>
              <p className="md:col-span-5 md:col-start-8 text-sm leading-[1.9] opacity-70">
                Four products we trust for daily use. Chosen for real skin, not for
                a display shelf.
              </p>
            </div>
          </Reveal>

          <RevealStagger stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p, i) => (
              <RevealItem key={p.slug}>
                <Link href={`/design-5/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden" style={{ background: BEIGE_SOFT }}>
                    <SmartImage src={p.images[0]} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-contain p-8 transition-opacity duration-500 group-hover:opacity-0" />
                    <SmartImage src={p.images[1] || p.images[0]} alt={`${p.name} alternate angle`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-contain p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-3 opacity-0">
                      <span className="block w-full text-center py-2.5 text-[10px] tracking-[0.3em] uppercase bg-white">Quick view</span>
                    </div>
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-1.5">N° 0{i + 1} · {p.category}</p>
                  <h3 className="text-base tracking-wide">{p.name}</h3>
                  <p className="mt-1.5 text-sm tracking-wider opacity-70">{formatRupiah(p.price)}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.1}>
            <div className="mt-16 text-center">
              <Link href="/design-5/shop" className="inline-block text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
                View all products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL ABOUT */}
      <section className="border-b border-black/5" style={{ background: BEIGE_SOFT }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] bg-white">
                <SmartImage src="/products/banner-1.webp" alt="Tastra products" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.15}>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Our story</p>
                <h2 className="text-3xl md:text-5xl leading-[1.15]">
                  A studio approach<br />
                  to <span className="italic font-[family-name:var(--font-serif-alt)]">everyday skincare.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 space-y-6 text-base leading-[1.9] opacity-75">
                  <p>Tastra is built like a small studio, focused on a short, carefully chosen lineup. No SKU count to chase, no seasonal launches forced on schedule.</p>
                  <p>Every product begins with a real need of Indonesian skin, not a trend. If an ingredient is not proven, it does not make it into our bottle.</p>
                </div>
              </Reveal>
              <Reveal delay={0.45}>
                <Link href="/design-5/about" className="inline-block mt-12 text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
                  Read more
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-10">Loved by women across Indonesia</p>
            <blockquote className="text-2xl md:text-4xl leading-[1.4] max-w-3xl mx-auto">
              <span className="italic font-[family-name:var(--font-serif-alt)]">&ldquo;I finally found a ritual I can actually keep consistent, even on the busiest days.&rdquo;</span>
            </blockquote>
            <p className="mt-10 text-[11px] tracking-[0.3em] uppercase opacity-50">Sarah W. · Verified Customer</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center items-center gap-8 opacity-40">
              {[1, 2, 3, 4, 5].map((i) => (<span key={i} className="text-base">★</span>))}
              <span className="text-[11px] tracking-[0.3em] uppercase ml-2">2,847 reviews</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RITUAL / PACKAGES */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-4">Featured this season</p>
              <h2 className="text-3xl md:text-5xl">
                The <span className="italic font-[family-name:var(--font-serif-alt)]">complete</span> ritual.
              </h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.15} className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <RevealItem key={p.slug}>
                <Link href={`/design-5/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[3/4] mb-5 overflow-hidden" style={{ background: BEIGE_SOFT }}>
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.7, ease: EASE }} className="absolute inset-0">
                      <SmartImage src={p.images[0]} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-12" />
                    </motion.div>
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-1.5">Edit N° 0{i + 1}</p>
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-1 text-sm opacity-70">{formatRupiah(p.price)}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-black/5" style={{ background: BEIGE_SOFT }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-8 items-center">
          <p className="text-2xl md:text-4xl leading-[1.2]">
            Begin with a single piece you <span className="italic font-[family-name:var(--font-serif-alt)]">trust.</span>
          </p>
          <div className="flex md:justify-end">
            <Link href="/design-5/shop" className="text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
              Explore the edit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
