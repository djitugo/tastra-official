"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";
const MINT = "#cfe6db";
const EASE = [0.22, 1, 0.36, 1] as const;

function Sparkle({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M52.7,-58.6C66.2,-46.2,73.5,-27.7,74.8,-9.4C76.1,8.9,71.5,27.1,60.6,40.5C49.7,53.9,32.5,62.6,14.2,67.8C-4.1,72.9,-23.5,74.6,-37.6,66.1C-51.6,57.6,-60.4,38.9,-65.4,19.4C-70.4,-0.1,-71.7,-20.5,-63.9,-35.1C-56.1,-49.7,-39.2,-58.5,-22.4,-65.4C-5.5,-72.4,11.3,-77.6,26.7,-74.4C42.1,-71.2,56.2,-59.5,52.7,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

const ICON_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": "true" as const,
};

function BeakerIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...ICON_PROPS}>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9.5V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

function PalmIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...ICON_PROPS}>
      <path d="M12 21c0-5 0-8 .5-10" />
      <path d="M12 11c-1.6-2.4-4-3.6-7-3.5 1.4 2.6 3.8 4 7 3.5Z" />
      <path d="M12 11c1.6-2.4 4-3.6 7-3.5-1.4 2.6-3.8 4-7 3.5Z" />
      <path d="M12 11c0-2.9 1.2-5.3 3.5-7-2.3.4-3.5 2.4-3.5 7Z" />
      <path d="M9.5 21h5" />
    </svg>
  );
}

function RabbitIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...ICON_PROPS}>
      <path d="M9 11c-1.5-2.5-2-5-1-8 2 1.5 3 4 3 7" />
      <path d="M14 10c0-3 1-5.5 3-7 1 3 .5 5.5-1 8" />
      <path d="M7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-1.6-.9-3-2.3-3.7" />
      <path d="M7 13c-1.4.6-2.3 2-2.3 3.7A2.3 2.3 0 0 0 7 19" />
      <circle cx="14.5" cy="14" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HeartIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...ICON_PROPS}>
      <path d="M12 20s-7-4.6-7-9.5A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5C19 15.4 12 20 12 20Z" />
    </svg>
  );
}

export default function Design3About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-[420px] h-[420px] opacity-40 -z-0"
          style={{ color: ROSE }}
          aria-hidden
        >
          <Blob className="w-full h-full" />
        </motion.div>
        <div className="relative w-full max-w-3xl mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-32 text-center">
          <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
            <Sparkle size={14} /> Our story <Sparkle size={14} />
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Skincare born <em className="italic" style={{ color: ROSE_DEEP }}>right here</em>.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
            Tastra started with one simple complaint: why do the products sold here use formulas
            that do not match our climate or our skin? So we built ones that do.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden">
              <PlaceholderGraphic bg={PEACH_DEEP} fg={INK} label="Our studio" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Our <em className="italic" style={{ color: ROSE_DEEP }}>promise</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
                Indonesian skin faces relentless sun, high humidity, city pollution, and daily stress.
                Skincare that works has to respond to that context, not to a European winter or a dry California climate.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
                Every Tastra formula is field tested: on real skin, in a real city, in real weather.
                The result is lightweight texture, no white cast, and zero fuss.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section style={{ background: "#fff" }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}><Sparkle size={14} /> Our standards</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.1]">
                Four things we never <em className="italic" style={{ color: ROSE_DEEP }}>compromise</em>.
              </h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.12} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BeakerIcon size={26} />, title: "Verified ingredients", body: "Every active has research behind it, not just hype." },
              { icon: <PalmIcon size={26} />, title: "Tested in Indonesia", body: "Trialed on local skin in real climate, not a dry lab." },
              { icon: <RabbitIcon size={26} />, title: "Cruelty free", body: "No animal testing. Never has been, never will be." },
              { icon: <HeartIcon size={26} />, title: "Honest pricing", body: "Pay for the formula, not the packaging or influencers." },
            ].map((x) => (
              <RevealItem key={x.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="rounded-3xl p-7 h-full"
                  style={{ background: PEACH }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#fff", color: ROSE_DEEP }} aria-hidden>
                    {x.icon}
                  </div>
                  <h3 className="text-xl font-extrabold">{x.title}</h3>
                  <p className="mt-2 leading-relaxed text-sm" style={{ color: `${INK}99` }}>{x.body}</p>
                </motion.div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32">
          <Reveal y={40}>
            <div className="relative rounded-[36px] p-10 md:p-16 text-center overflow-hidden" style={{ background: MINT, color: INK }}>
              <Sparkle size={24} className="mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-[1.1]">
                Want to give it a try?
              </h2>
              <p className="mt-4 max-w-xl mx-auto" style={{ color: `${INK}99` }}>
                Start with the Daily Essentials Pack, our most affordable two product set.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE }}>
                  <Link href="/design-3/shop" className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm" style={{ background: INK, color: PEACH }}>
                    Shop now <span aria-hidden>→</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE }}>
                  <Link href="/design-3/contact" className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm border-2" style={{ borderColor: INK, color: INK }}>
                    Contact us
                  </Link>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
