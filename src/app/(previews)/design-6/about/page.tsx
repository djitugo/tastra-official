"use client";

import Link from "next/link";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";
const SAGE = "#6e7d5d";

export default function Design6About() {
  return (
    <>
      {/* HERO */}
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-32 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-10" style={{ color: OCHRE }}>
              ⸻ Of Origin and Intent
            </p>
            <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              A house of skincare,<br />
              <span className="italic" style={{ color: OCHRE }}>begun here.</span>
            </h1>
            <p className="mt-10 max-w-xl text-[15px] leading-[1.9]" style={{ color: `${INK}CC` }}>
              Tastra began with a small complaint. Why should the products sold
              to us be built on formulas that answer neither our climate nor our
              skin? So we set about composing ones that do.
            </p>
          </div>
        </div>
      </section>

      {/* PREMISE */}
      <section className="border-b" style={{ borderColor: `${INK}1F`, background: CREAM_DEEP }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5]" style={{ background: "#f7f1e6" }}>
              <SmartImage src="/products/banner-1.webp" alt="The Tastra collection" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: OCHRE }}>
                The Premise
              </p>
              <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl leading-[1.2]">
                Skin lives in <span className="italic" style={{ color: OCHRE }}>context.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-5 text-[15px] leading-[1.95]" style={{ color: `${INK}CC` }}>
                <p>
                  Indonesian skin meets a relentless sun, a high and steady
                  humidity, the pollution of a city, and the ordinary stresses
                  of a day. Skincare that works must answer that context, not a
                  European winter nor a dry Californian air.
                </p>
                <p>
                  Each Tastra formulation is proven in the field. On real skin,
                  in a real city, in real weather. What follows is a light
                  texture, no white cast, and nothing to fuss over.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-28">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: OCHRE }}>
                ⸻ Our Standards ⸻
              </p>
              <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.2] max-w-2xl mx-auto">
                Four things we hold to, <span className="italic" style={{ color: OCHRE }}>without exception.</span>
              </h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.12} className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {[
              { roman: "I.", h: "Verified ingredients", b: "Every active carries research behind it, never mere hype. We publish the hero ingredients on each page so nothing is left to guess." },
              { roman: "II.", h: "Tested on Indonesia", b: "Trialled on local skin in real climate, not the dry comfort of a distant lab. The weather here is the only test that counts." },
              { roman: "III.", h: "Cruelty free", b: "No animal testing. It has never been our way, and it never will be. A simple line we have no intention of crossing." },
              { roman: "IV.", h: "Honest pricing", b: "You pay for the formulation, not for packaging nor for influence. International quality at a sensible, local price." },
            ].map((x) => (
              <RevealItem key={x.roman}>
                <div className="border-t pt-6" style={{ borderColor: `${INK}33` }}>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: OCHRE }}>{x.roman}</p>
                  <h3 className="font-[family-name:var(--font-lora)] italic text-2xl" style={{ color: SAGE }}>{x.h}</h3>
                  <p className="mt-4 text-[14px] leading-[1.9]" style={{ color: `${INK}B3` }}>{x.b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CLOSE */}
      <section className="border-b" style={{ borderColor: `${INK}1F`, background: CREAM_DEEP }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.2]">
              Inclined to <span className="italic" style={{ color: OCHRE }}>try?</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.85] max-w-md mx-auto" style={{ color: `${INK}B3` }}>
              Begin with the Daily Essentials Pack, the most accessible of our
              pairings. A modest first step, kept simply.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <Link
                href="/design-6/shop"
                className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                Discover the Range →
              </Link>
              <Link href="/design-6/contact" className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100">
                Write to Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
