"use client";

import Link from "next/link";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const GREEN = "#2d5a3d";
const GREEN_DEEP = "#1f4029";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

const ICON_BADGES = [
  { label: "Halal", path: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Natural", path: "M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6" },
  { label: "Alcohol Free", path: "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" },
  { label: "Cruelty Free", path: "M11 5C5 5 2 9 2 13c0 2 1 4 4 4s5-2 5-2 2 2 5 2 4-2 4-4c0-4-3-8-9-8zM7 10v.01M15 10v.01" },
];

function Icon({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function Design4About() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 md:py-28 border-b" style={{ background: GREEN_LIGHT, borderColor: `${INK}14` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ About</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-4xl" style={{ color: INK }}>
            Skincare made right here, for skin like yours.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: `${INK}99` }}>
            Tastra started with a simple belief. Halal, natural skincare should
            be trustworthy, gentle, and affordable. So we built a lineup that is
            certified, tested, and made for everyday Indonesian skin.
          </p>
        </div>
      </section>

      {/* PREMISE */}
      <section className="py-20 md:py-28 border-b" style={{ background: CREAM, borderColor: `${INK}14` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <PlaceholderGraphic bg={GREEN_LIGHT} fg={GREEN} label="Tastra Studio" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: INK }}>Our premise</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
                Indonesian skin faces relentless sun, high humidity, city
                pollution, and daily stress. Skincare that works has to respond
                to that context, with formulas that are both effective and safe
                to use.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
                Every Tastra formula is halal certified and field tested on real
                skin in real weather. The result is lightweight texture, no
                white cast, and ingredients you can trust.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-24 md:py-32" style={{ background: GREEN, color: CREAM }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 opacity-70">✦ Our commitment</p>
              <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-[1.1]">Four things we never compromise</h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Halal certified", body: "Certified Halal by the MUI. Safe and permissible for everyone." },
              { label: "Tested ingredients", body: "Every active has research behind it. Trialed on real Indonesian skin." },
              { label: "Cruelty free", body: "No animal testing. Never has been, never will be." },
              { label: "Honest pricing", body: "Pay for the formula, not for packaging or influencers." },
            ].map((x, i) => (
              <RevealItem key={x.label}>
                <div className="text-center p-7 rounded-2xl h-full" style={{ background: GREEN_DEEP }}>
                  <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center border-2" style={{ borderColor: CREAM }}>
                    <Icon d={ICON_BADGES[i].path} />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2">{x.label}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{x.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center" style={{ background: GREEN_SOFT }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: INK }}>Want to try it?</h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: `${INK}99` }}>Start with the Daily Essentials Pack, our most affordable two product set.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/design-4/shop" className="rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105" style={{ background: GREEN, color: CREAM }}>Shop now</Link>
            <Link href="/design-4/contact" className="rounded-full px-7 py-3.5 text-sm font-bold border-2 transition-colors hover:bg-white" style={{ borderColor: GREEN, color: GREEN }}>Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
