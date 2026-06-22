"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";
const MINT = "#cfe6db";
const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 200, damping: 20 };

function Sparkle({ className = "", size = 16 }: { className?: string; size?: number }) {
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

export default function Design3Home() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-50 -z-0"
          style={{ color: ROSE }}
          aria-hidden
        >
          <Blob className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 -right-32 w-[400px] h-[400px] opacity-40 -z-0"
          style={{ color: MINT }}
          aria-hidden
        >
          <Blob className="w-full h-full" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 pt-12 pb-20 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6"
              style={{ background: "#fff", color: ROSE_DEEP }}
            >
              <Sparkle size={12} /> Hello, fresh skin
            </motion.span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
                className="block"
              >
                Skincare that is
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.55, ...SPRING }}
                className="inline-block px-3 py-1 rounded-2xl my-1"
                style={{ background: ROSE, color: "#fff" }}
              >
                kind
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
                className="inline-block"
              >
                to your skin.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
              className="mt-6 max-w-md text-lg leading-relaxed"
              style={{ color: `${INK}CC` }}
            >
              Natural ingredients, formulas that never sting, and prices that
              make sense. For skin that is looking for a friend (not a new enemy).
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE }}>
                <Link
                  href="/design-3/shop"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm"
                  style={{ background: INK, color: PEACH }}
                >
                  Shop the lineup <span aria-hidden>→</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE }}>
                <Link
                  href="/design-3/about"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm border-2"
                  style={{ borderColor: INK, color: INK, background: "transparent" }}
                >
                  Why Tastra?
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="mt-12 flex flex-wrap gap-6 text-sm"
            >
              <Pill icon="🌿" text="100% natural ingredients" />
              <Pill icon="✨" text="Safe for sensitive skin" />
              <Pill icon="🇮🇩" text="Made locally" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: EASE }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-[40%_60%_55%_45%/55%_45%_60%_40%]"
              style={{ background: PEACH_DEEP }}
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <SmartImage
                src="/products/uv-protector.webp"
                alt="Tastra UV Protector"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain p-12 relative"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ delay: 1.0, ...SPRING }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="absolute -top-2 -right-2 rounded-full w-24 h-24 flex flex-col items-center justify-center text-white text-center font-bold leading-tight"
              style={{ background: ROSE }}
            >
              <span className="text-[10px] uppercase tracking-wider opacity-80">Best</span>
              <span className="text-2xl">SPF50+</span>
              <span className="text-[10px] uppercase tracking-wider opacity-80">PA++++</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, ...SPRING }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="absolute -bottom-2 -left-2 rounded-2xl px-4 py-3 shadow-lg"
              style={{ background: "#fff", color: INK }}
            >
              <p className="text-xs font-bold opacity-60">Rating ★★★★★</p>
              <p className="text-sm font-bold">2,847 reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
                <Sparkle size={14} /> Best sellers <Sparkle size={14} />
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                The picks everyone is <em className="italic" style={{ color: ROSE_DEEP }}>loving</em>
              </h2>
              <p className="mt-4 max-w-md mx-auto" style={{ color: `${INK}99` }}>
                Start with the most popular ones. Beginner friendly, promise.
              </p>
            </div>
          </Reveal>

          <RevealStagger stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featured.map((p) => {
              const off = discountPercent(p.price, p.originalPrice);
              return (
                <RevealItem key={p.slug}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  >
                    <Link
                      href={`/design-3/shop/${p.slug}`}
                      className="group block rounded-3xl p-3 hover:shadow-xl transition-shadow"
                      style={{ background: "#fff" }}
                    >
                      <div
                        className="relative aspect-square rounded-2xl overflow-hidden mb-3"
                        style={{ background: PEACH_DEEP }}
                      >
                        <SmartImage
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="25vw"
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                        />
                        {off > 0 && (
                          <span
                            className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
                            style={{ background: ROSE }}
                          >
                            -{off}%
                          </span>
                        )}
                      </div>
                      <div className="px-2 pb-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: `${INK}80` }}>
                          {p.category}
                        </p>
                        <h3 className="font-extrabold text-lg mt-0.5">{p.name}</h3>
                        <p className="text-xs mt-1.5 line-clamp-2 min-h-[32px]" style={{ color: `${INK}99` }}>
                          {p.tagline}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-extrabold">{formatRupiah(p.price)}</span>
                          <span
                            className="rounded-full w-8 h-8 flex items-center justify-center text-white text-lg leading-none transition-transform group-hover:rotate-90"
                            style={{ background: ROSE }}
                            aria-hidden
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>

          <Reveal delay={0.1}>
            <div className="mt-12 text-center">
              <Link
                href="/design-3/shop"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm border-2 transition-transform hover:scale-105"
                style={{ borderColor: INK, color: INK }}
              >
                View all products <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY TASTRA */}
      <section className="relative" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold mb-3" style={{ color: ROSE_DEEP }}>
                ✨ Why Tastra
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.1]">
                Because your skin deserves<br />
                <em className="italic" style={{ color: ROSE_DEEP }}>more than the usual</em>.
              </h2>
            </div>
          </Reveal>

          <RevealStagger stagger={0.15} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🌿", title: "Truly natural", body: "Real active ingredients you can name, not just filler that looks nice on a label." },
              { icon: "💧", title: "Light on skin", body: "Water based textures that absorb fast. No sticky feeling, no white cast." },
              { icon: "💛", title: "Honest pricing", body: "International quality at prices that still make sense for a local budget." },
            ].map((x) => (
              <RevealItem key={x.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="rounded-3xl p-7 h-full"
                  style={{ background: PEACH }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                    style={{ background: "#fff" }}
                    aria-hidden
                  >
                    {x.icon}
                  </div>
                  <h3 className="text-xl font-extrabold">{x.title}</h3>
                  <p className="mt-2 leading-relaxed text-sm" style={{ color: `${INK}99` }}>
                    {x.body}
                  </p>
                </motion.div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* TESTIMONIAL CTA */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 md:py-28">
          <Reveal y={40}>
            <div
              className="relative rounded-[36px] p-10 md:p-16 text-center overflow-hidden"
              style={{ background: ROSE, color: "#fff" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -left-12 w-40 h-40 opacity-20"
                style={{ color: "#fff" }}
                aria-hidden
              >
                <Blob className="w-full h-full" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -right-12 w-48 h-48 opacity-20"
                style={{ color: "#fff" }}
                aria-hidden
              >
                <Blob className="w-full h-full" />
              </motion.div>
              <Sparkle size={24} className="mx-auto mb-6 opacity-90" />
              <p className="text-2xl md:text-4xl font-extrabold leading-tight max-w-3xl mx-auto">
                &ldquo;My skin usually breaks out with every new sunscreen.
                With Tastra? Calm, light, and glowy.&rdquo;
              </p>
              <p className="mt-6 text-sm font-bold opacity-90">Anya, 23, Jakarta</p>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE }}>
                  <Link
                    href="/design-3/shop"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm"
                    style={{ background: "#fff", color: ROSE_DEEP }}
                  >
                    Try it now <span aria-hidden>→</span>
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

function Pill({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 font-semibold">
      <span aria-hidden className="text-base">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
