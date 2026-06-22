"use client";

import Link from "next/link";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const BEIGE_SOFT = "#f7f2e8";

const STANDARDS = [
  { n: "01", h: "Verified ingredients", b: "Every active has research behind it, never hype." },
  { n: "02", h: "Tested on Indonesia", b: "Trialed on local skin in real climate, not a dry lab." },
  { n: "03", h: "Cruelty free", b: "No animal testing. Never has been, never will be." },
  { n: "04", h: "Honest pricing", b: "Pay for the formula, not packaging or influencers." },
];

export default function Design5About() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-black/5">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-32">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-8">Our story</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Skincare born <span className="italic font-[family-name:var(--font-serif-alt)]">right here.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg leading-[1.8] opacity-70">
            Tastra began with a simple complaint: why do the products sold here use
            formulas that do not match our climate or our skin. So we built ones
            that do.
          </p>
        </div>
      </section>

      {/* PREMISE */}
      <section className="border-b border-black/5">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5]">
              <PlaceholderGraphic bg="#f7f2e8" fg="#0a0a0a" label="In the Studio" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Our premise</p>
              <h2 className="text-3xl md:text-5xl leading-[1.15]">
                Made for the<br />
                <span className="italic font-[family-name:var(--font-serif-alt)]">climate we live in.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-6 text-base leading-[1.9] opacity-75">
                <p>Indonesian skin faces relentless sun, high humidity, city pollution, and daily stress. Skincare that works has to respond to that context, not to a European winter or a dry California climate.</p>
                <p>Every Tastra formula is field tested on real skin, in a real city, in real weather. The result is lightweight texture, no white cast, no fuss.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="border-b border-black/5" style={{ background: BEIGE_SOFT }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Our standards</p>
              <h2 className="text-3xl md:text-5xl leading-[1.15]">
                Four things we<br />
                <span className="italic font-[family-name:var(--font-serif-alt)]">never compromise.</span>
              </h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.12} className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {STANDARDS.map((x) => (
              <RevealItem key={x.n} className="bg-[#f7f2e8]">
                <div className="p-8 h-full" style={{ background: BEIGE_SOFT }}>
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">{x.n}</p>
                  <h3 className="text-lg mt-4">{x.h}</h3>
                  <p className="mt-3 text-sm leading-[1.8] opacity-70">{x.b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-black/5">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-5xl leading-[1.15]">
            Want to <span className="italic font-[family-name:var(--font-serif-alt)]">try it?</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto text-base leading-[1.8] opacity-70">
            Start with a complete ritual, our most considered set, or pick the
            single piece you trust.
          </p>
          <div className="mt-12 flex flex-wrap gap-8 justify-center">
            <Link href="/design-5/shop" className="text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
              Shop the edit
            </Link>
            <Link href="/design-5/contact" className="text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
