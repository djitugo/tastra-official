"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design2() {
  const featured = PRODUCTS.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-32 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
              className="text-[11px] tracking-[0.4em] uppercase mb-8"
              style={{ color: GOLD }}
            >
              Vol. I — A New Indonesian Standard
            </motion.p>
            <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              <LineRise delay={0.4} duration={1.0}>
                <span>The art of <em className="font-[family-name:var(--font-serif-alt)] font-light">caring</em></span>
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
              Tastra meracik formula yang menghormati kerumitan kulit
              Indonesia — diuji di iklim sebenarnya, dirancang untuk ritual
              yang berkelanjutan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease: EASE }}
              className="mt-10 flex flex-wrap gap-6 items-center"
            >
              <a
                href="#collection"
                className="inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase transition-colors"
                style={{ background: INK, color: CREAM }}
              >
                Explore the collection
              </a>
              <a
                href="#philosophy"
                className="text-[12px] tracking-[0.3em] uppercase border-b pb-1 hover:opacity-60"
                style={{ borderColor: INK }}
              >
                Read our philosophy →
              </a>
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
              <Image
                src="/products/uv-protector.webp"
                alt="UV Protector"
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
      <section id="collection" className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
              <div>
                <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
                  The Collection
                </p>
                <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl leading-[1.05]">
                  Tiga produk inti.<br />
                  <em className="font-[family-name:var(--font-serif-alt)] font-light">Tanpa berlebihan.</em>
                </h2>
              </div>
              <p className="text-base leading-[1.8]" style={{ color: `${INK}B3` }}>
                Setiap formula dipilih karena alasan yang dapat dipertanggungjawabkan.
                Bukan tren, bukan demi rak yang penuh — hanya yang benar-benar
                kulit Anda butuhkan.
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
                    <Image
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
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="border-b" style={{ borderColor: `${INK}1A`, background: "#fff" }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 md:py-32 text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-8" style={{ color: GOLD }}>
              ⸻ Philosophy ⸻
            </p>
          </Reveal>
          <Reveal delay={0.15} y={20}>
            <blockquote className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl leading-[1.25]">
              &ldquo;Kulit Indonesia tidak meminta produk yang lebih banyak.
              Ia meminta yang <em className="font-[family-name:var(--font-serif-alt)] font-light">lebih tepat.</em>&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-12 max-w-2xl mx-auto leading-[1.8]" style={{ color: `${INK}B3` }}>
              Setiap formula Tastra disusun dari premis yang sederhana: hormati
              kompleksitas kulit, gunakan bahan yang sudah terbukti, dan
              sajikan dalam tekstur yang ingin dipakai setiap hari. Tidak ada
              jalan pintas, tidak ada janji ajaib.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <RevealStagger stagger={0.18} className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-28 grid md:grid-cols-3 gap-12">
          {[
            { roman: "I.", title: "Sourced", body: "Bahan aktif yang ditelusuri asalnya, dipilih bukan karena nama tapi karena efikasi." },
            { roman: "II.", title: "Tested", body: "Diujikan di kulit Indonesia sungguhan, di iklim asli — bukan ruang lab kering." },
            { roman: "III.", title: "Refined", body: "Tekstur ringan yang ingin Anda pakai berulang. Karena ritual hanya bekerja jika dilakukan." },
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
      <section id="journal" style={{ borderColor: `${INK}1A`, background: CREAM }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
              The Journal
            </p>
            <h3 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl">
              Surat berkala. Tanpa promosi yang gaduh.
            </h3>
            <p className="mt-6 leading-[1.8] max-w-xl mx-auto" style={{ color: `${INK}B3` }}>
              Esai pendek tentang ritual, bahan, dan kulit. Dikirim sekali sebulan.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <form className="mt-10 max-w-md mx-auto flex border-b" style={{ borderColor: INK }}>
              <input
                type="email"
                placeholder="alamat@email.com"
                aria-label="Email address"
                className="flex-1 bg-transparent py-3 text-sm tracking-wider outline-none placeholder:opacity-40"
              />
              <button
                type="button"
                className="text-[11px] tracking-[0.3em] uppercase px-4 hover:opacity-60"
              >
                Subscribe →
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
