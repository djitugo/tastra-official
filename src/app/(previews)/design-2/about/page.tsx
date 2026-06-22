"use client";

import Link from "next/link";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

export default function Design2About() {
  return (
    <>
      {/* HERO */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-32">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-8" style={{ color: GOLD }}>
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight max-w-4xl">
            Skincare born <em className="font-[family-name:var(--font-serif-alt)] font-light">right here.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-base md:text-lg leading-[1.7]" style={{ color: `${INK}B3` }}>
            Tastra began with a single quiet complaint: why do the products sold here rely on formulas built for another climate and another skin. So we composed ones that belong to this one.
          </p>
        </div>
      </section>

      {/* PREMISE */}
      <section className="border-b" style={{ borderColor: `${INK}1A`, background: "#fff" }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5]" style={{ background: CREAM }}>
              <SmartImage src="/products/banner-1.webp" alt="The Tastra collection" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
                ⸻ The Premise
              </p>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl leading-[1.1]">
                Made for the climate you live in.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-[15px] md:text-base leading-[1.85]" style={{ color: `${INK}CC` }}>
                Indonesian skin faces relentless sun, high humidity, city pollution, and daily stress. Skincare that works has to answer that context, not a European winter or a dry California climate.
              </p>
              <p className="mt-5 text-[15px] md:text-base leading-[1.85]" style={{ color: `${INK}CC` }}>
                Every Tastra formula is field tested on real skin, in a real city, in real weather. The result is a light texture, no white cast, and nothing in excess.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-6 text-center" style={{ color: GOLD }}>
              Our Standards
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-center mb-16">
              Four things we never <em className="font-[family-name:var(--font-serif-alt)] font-light">compromise.</em>
            </h2>
          </Reveal>
          <RevealStagger stagger={0.15} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { roman: "I.", h: "Verified ingredients", b: "Every active has research behind it, never hype." },
              { roman: "II.", h: "Tested on Indonesia", b: "Trialed on local skin in real climate, not a dry lab." },
              { roman: "III.", h: "Cruelty free", b: "No animal testing. Never has been, never will be." },
              { roman: "IV.", h: "Honest pricing", b: "Pay for the formula, not the packaging or influencers." },
            ].map((x) => (
              <RevealItem key={x.h}>
                <div>
                  <p className="font-[family-name:var(--font-serif-alt)] italic text-2xl" style={{ color: GOLD }}>
                    {x.roman}
                  </p>
                  <h3 className="font-[family-name:var(--font-serif)] text-xl mt-3">{x.h}</h3>
                  <p className="mt-4 leading-[1.8] text-sm" style={{ color: `${INK}B3` }}>
                    {x.b}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: CREAM }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl">
              Care to <em className="font-[family-name:var(--font-serif-alt)] font-light">begin?</em>
            </h2>
            <p className="mt-6 leading-[1.8] max-w-xl mx-auto" style={{ color: `${INK}B3` }}>
              Start with a single product you trust. We believe in a collection that is deliberately small.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-6 items-center justify-center">
              <Link
                href="/design-2/shop"
                className="inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase"
                style={{ background: INK, color: CREAM }}
              >
                Explore the collection
              </Link>
              <Link
                href="/design-2/contact"
                className="inline-flex items-center min-h-[48px] text-[12px] tracking-[0.3em] uppercase border-b pb-1 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                Contact us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
