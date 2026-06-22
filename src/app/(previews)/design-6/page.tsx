"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";
const SAGE = "#6e7d5d";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design6() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-36 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <motion.p
              className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-10"
              style={{ color: OCHRE }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Vol. I ⸻ A Practice in Indonesian Skin
            </motion.p>

            <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              <LineRise delay={0.4} duration={1.0}>On the formulation</LineRise>
              <LineRise delay={0.55} duration={1.0}>of skincare for</LineRise>
              <LineRise delay={0.7} duration={1.0}>
                <span className="italic" style={{ color: OCHRE }}>tropical climates.</span>
              </LineRise>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-12 max-w-md space-y-5 leading-[1.85] text-[15px]"
              style={{ color: `${INK}CC` }}
            >
              <p>
                Tastra is composed from a single premise: skin that lives in a
                tropical climate asks for specific attention, not a translation
                of a European winter.
              </p>
              <p>
                Each formulation is born of consideration rather than trend. We
                choose actives whose origins can be traced, and present them in
                textures made to be worn again and again.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              <Link
                href="/design-6/shop"
                className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60 transition-opacity"
                style={{ borderColor: INK }}
              >
                Discover the Range
              </Link>
              <Link href="/design-6/about" className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100">
                Our Philosophy →
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: EASE }}
            className="lg:col-span-5 relative aspect-[3/4]"
            style={{ background: CREAM_DEEP }}
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0">
              <SmartImage src="/products/uv-protector.webp" alt="The UV Protector" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-12 md:p-16" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.7 }} className="absolute bottom-6 left-6 right-6">
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: OCHRE }}>N° 01</p>
              <p className="font-[family-name:var(--font-lora)] italic text-lg" style={{ color: INK }}>The UV Protector</p>
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] uppercase mt-2 opacity-60">Broad-Spectrum · 30ml</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY ESSAY (reading column kept narrow inside full-width section) */}
      <section id="philosophy" className="border-b" style={{ borderColor: `${INK}1F`, background: CREAM_DEEP }}>
        <div className="w-full px-5 sm:px-8 lg:px-16 py-28 md:py-36">
          <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-10 text-center" style={{ color: OCHRE }}>
              ⸻ A Note on Practice ⸻
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.25] mb-12">
              <span className="italic" style={{ color: OCHRE }}>&ldquo;Of</span> sufficiency, considered.&rdquo;
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-6 text-[15px] leading-[1.95]" style={{ color: `${INK}CC` }}>
              <p>A daily ritual need not be elaborate to be effective. Many assume that healthy skin is the product of a long sequence, bottle after bottle, step after step. We disagree.</p>
              <p>Skin, like the rest of the body, keeps its own rhythm. To give it too much is a kind of noise; what it asks for is simpler. Ingredients chosen for a reason, presented in a texture one is glad to use again.</p>
              <p>Because a ritual only works if it is, in fact, kept.</p>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* RANGE */}
      <section id="range" className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-28 md:py-32">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-5">
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: OCHRE }}>The Range</p>
                <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.15]">
                  Six formulations.<br />
                  <span className="italic" style={{ color: OCHRE }}>Considered.</span>
                </h2>
              </div>
              <p className="md:col-span-6 md:col-start-7 text-[15px] leading-[1.9]" style={{ color: `${INK}B3` }}>
                Each product in this collection is composed to fill its own
                particular role, no more and no less. Should you find one you
                are fond of, it is likely to remain on your shelf for a long
                while.
              </p>
            </div>
          </Reveal>

          <RevealStagger stagger={0.12} className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featured.map((p, i) => (
              <RevealItem key={p.slug}>
                <Link href={`/design-6/shop/${p.slug}`} className="group block">
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE }} className="relative aspect-[3/4] mb-5 overflow-hidden" style={{ background: CREAM_DEEP }}>
                    <SmartImage src={p.images[0]} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-105" />
                  </motion.div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-1.5" style={{ color: OCHRE }}>N° 0{i + 1}</p>
                  <h3 className="font-[family-name:var(--font-lora)] text-xl leading-tight">{p.name}</h3>
                  <p className="mt-2 italic text-sm leading-relaxed" style={{ color: `${INK}99` }}>{p.tagline}</p>
                  <p className="mt-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.15em]" style={{ color: INK }}>{formatRupiah(p.price)}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.1}>
            <div className="mt-16 text-center">
              <Link
                href="/design-6/shop"
                className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                View the Full Range →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="border-b" style={{ borderColor: `${INK}1F`, background: CREAM_DEEP }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-28 md:py-32">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: OCHRE }}>
                ⸻ Ingredients of Note ⸻
              </p>
              <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.2] max-w-2xl mx-auto">
                <span className="italic" style={{ color: OCHRE }}>Sourced</span> with intention.
              </h2>
            </div>
          </Reveal>
          <RevealStagger stagger={0.15} className="grid md:grid-cols-3 gap-12">
            {[
              { roman: "I.", latin: "Centella Asiatica", body: "Long used in the skin traditions of Southeast Asia, the pegagan leaf is held for its quiet, settling effect on stressed skin." },
              { roman: "II.", latin: "Niacinamide", body: "A stable form of Vitamin B3, chosen for its measured work on the barrier and on the appearance of enlarged pores." },
              { roman: "III.", latin: "Hyaluronic Acid", body: "A molecule able to hold many times its weight in water, essential to a balanced hydration in tropical air." },
            ].map((x) => (
              <RevealItem key={x.roman}>
                <div className="border-t pt-6" style={{ borderColor: `${INK}33` }}>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: OCHRE }}>{x.roman}</p>
                  <h3 className="font-[family-name:var(--font-lora)] italic text-2xl" style={{ color: SAGE }}>{x.latin}</h3>
                  <p className="mt-4 text-[14px] leading-[1.85]" style={{ color: `${INK}B3` }}>{x.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* READING ROOM (reading column kept narrow inside full-width section) */}
      <section id="read" className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full px-5 sm:px-8 lg:px-16 py-28">
          <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: OCHRE }}>The Reading Room</p>
            <h3 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.2] mb-6">
              Letters, sent <span className="italic" style={{ color: OCHRE }}>occasionally.</span>
            </h3>
            <p className="text-[15px] leading-[1.85] max-w-xl mx-auto" style={{ color: `${INK}B3` }}>
              Short essays on ritual, ingredients, and skin in a tropical
              climate. We write once every other month, and no more often
              than that.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12">
              <Link
                href="/design-6/blog"
                className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                Enter the Reading Room →
              </Link>
            </div>
          </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
