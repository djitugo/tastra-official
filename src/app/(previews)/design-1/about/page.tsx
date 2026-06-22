"use client";

import Link from "next/link";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

export default function Design1About() {
  return (
    <>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ About</p>
          <h1 className="font-[family-name:var(--font-display)] uppercase text-6xl md:text-8xl lg:text-9xl mt-3 tracking-tighter max-w-5xl">
            Skincare born right here.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-black/70 leading-relaxed">
            Tastra started with one simple complaint: why do the products sold here use formulas that do not match our climate or our skin? So we built ones that do.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] border-2 border-black bg-white">
              <SmartImage src="/products/banner-1.webp" alt="Tastra product lineup" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] uppercase text-4xl md:text-6xl tracking-tighter">Our premise.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base md:text-lg text-black/80 leading-relaxed">
                Indonesian skin faces relentless sun, high humidity, city pollution, and daily stress. Skincare that works has to respond to that context, not to a European winter or a dry California climate.
              </p>
              <p className="mt-4 text-base md:text-lg text-black/80 leading-relaxed">
                Every Tastra formula is field tested: on real skin, in a real city, in real weather. The result is lightweight texture, no white cast, no fuss.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black text-white border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-white/60 mb-6">★ Our standards</p>
            <h2 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-7xl tracking-tighter">Four things we never compromise.</h2>
          </Reveal>
          <RevealStagger stagger={0.1} className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", h: "Verified ingredients", b: "Every active has research behind it. Not hype." },
              { n: "02", h: "Tested on Indonesia", b: "Trialed on local skin in real climate, not a dry lab." },
              { n: "03", h: "Cruelty free", b: "No animal testing. Never has been, never will be." },
              { n: "04", h: "Honest pricing", b: "Pay for the formula. Not packaging or influencers." },
            ].map((x) => (
              <RevealItem key={x.n}>
                <div className="border-2 border-white p-6 h-full">
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-white/50">{x.n}</p>
                  <h3 className="font-[family-name:var(--font-display)] uppercase text-2xl mt-3 tracking-tight">{x.h}</h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">{x.b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] uppercase text-4xl md:text-6xl tracking-tighter max-w-3xl mx-auto">Want to try it?</h2>
          <p className="mt-4 text-black/70 max-w-xl mx-auto">Start with the Daily Essentials Pack, our most affordable two product set.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/design-1/shop" className="btn btn-invert">Shop now →</Link>
            <Link href="/design-1/contact" className="btn btn-ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
