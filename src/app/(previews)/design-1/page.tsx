"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { Loader1 } from "@/components/preview/loader-1";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const MARQUEE = [
  "FREE ONGKIR SE-INDONESIA",
  "DISKON HINGGA 50%",
  "BAYAR DI TEMPAT TERSEDIA",
  "BAHAN ALAMI · FORMULA MODERN",
  "★",
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design1() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      <Loader1 />
      <div className="bg-white text-black font-[family-name:var(--font-sans)]">
        {/* MARQUEE */}
        <div className="bg-black text-white border-b-2 border-black overflow-hidden">
          <div className="marquee-track py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="px-6 whitespace-nowrap">
                {t} <span className="px-3 opacity-50">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* NAV */}
        <header className="bg-white border-b-2 border-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/design-1" className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-tighter">
              TASTRA<span className="inline-block ml-1 w-2 h-2 bg-black align-middle" />
            </Link>
            <nav className="hidden md:flex items-center gap-8 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest">
              <a href="#shop" className="hover:underline underline-offset-4">Shop</a>
              <a href="#about" className="hover:underline underline-offset-4">About</a>
              <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
            </nav>
            <Link href="/cart" className="btn btn-ghost !min-h-11 !px-4 !py-2 !text-xs">CART</Link>
          </div>
        </header>

        {/* HERO */}
        <section className="border-b-2 border-black overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <motion.span
                initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                className="inline-block bg-black text-white font-[family-name:var(--font-mono)] uppercase text-[11px] font-bold tracking-widest px-3 py-1 border-2 border-black mb-4"
              >
                ★ New Era ★
              </motion.span>
              <h1 className="font-[family-name:var(--font-display)] uppercase text-[14vw] leading-[0.85] sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter">
                <LineRise delay={0.1}>Skincare</LineRise>
                <LineRise delay={0.2}>Lokal,</LineRise>
                <LineRise delay={0.3}>
                  <span className="inline-block bg-black text-white px-2">Hasil</span>
                </LineRise>
                <LineRise delay={0.4}>Beneran.</LineRise>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
                className="mt-6 max-w-md text-base md:text-lg text-black/70 leading-relaxed"
              >
                Bahan alami, formula modern. Diformulasi ulang untuk iklim tropis dan tipe kulit Indonesia.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.7, ease: EASE }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#shop" className="btn btn-invert">Shop now →</a>
                <a href="#about" className="btn btn-ghost">Our story</a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: EASE }}
              className="relative aspect-square max-w-xl mx-auto w-full"
            >
              <div className="absolute inset-0 border-2 border-black bg-white grain" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src="/products/uv-protector.webp" alt="Tastra UV Protector" fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-contain p-8" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
                className="absolute -bottom-4 -right-4 bg-white border-2 border-black px-4 py-3 [box-shadow:6px_6px_0_0_#000]"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl leading-none uppercase">SPF 50+</p>
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest mt-1">PA++++</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
                className="absolute -top-4 -left-4 hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-black text-white spin-slow"
              >
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest leading-tight text-center">Iklim<br />Tropis<br />Ready</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="shop" className="border-b-2 border-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Best sellers</p>
              <h2 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-7xl mt-2 tracking-tighter">Pilihan teratas.</h2>
            </Reveal>
            <RevealStagger stagger={0.1} className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featured.map((p) => {
                const off = discountPercent(p.price, p.originalPrice);
                return (
                  <RevealItem key={p.slug}>
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "6px 6px 0 0 #000" }}
                      transition={{ duration: 0.2, ease: EASE }}
                    >
                      <Link href={`/shop/${p.slug}`} className="group block border-2 border-black bg-white">
                        <div className="relative aspect-square border-b-2 border-black bg-white overflow-hidden">
                          <Image src={p.images[0]} alt={p.name} fill sizes="25vw" className="object-contain p-6 transition-transform duration-300 group-hover:scale-105" />
                          {off > 0 && <span className="absolute top-3 left-3 bg-black text-white font-[family-name:var(--font-mono)] uppercase text-[10px] font-bold tracking-widest px-2 py-1">-{off}%</span>}
                        </div>
                        <div className="p-4">
                          <h3 className="font-[family-name:var(--font-display)] uppercase text-xl tracking-tight">{p.name}</h3>
                          <p className="mt-2 text-xs text-black/70 line-clamp-2 min-h-[32px]">{p.tagline}</p>
                          <p className="mt-4 font-[family-name:var(--font-mono)] font-bold">{formatRupiah(p.price)}</p>
                        </div>
                      </Link>
                    </motion.div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* MANIFESTO */}
        <section id="about" className="bg-black text-white border-b-2 border-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-white/60 mb-6">★ Manifesto</p>
              <h2 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-7xl lg:text-8xl tracking-tighter max-w-5xl">
                Kulit Indonesia layak skincare yang bukan terjemahan.
              </h2>
            </Reveal>
            <RevealStagger stagger={0.12} delay={0.2} className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { n: "01", h: "Bahan alami.", b: "Niacinamide, ceramide, centella, dan rangkaian aktif yang sudah terbukti bekerja." },
                { n: "02", h: "Formula modern.", b: "Tekstur ringan, no white-cast, low-pH. Performa tinggi tanpa drama." },
                { n: "03", h: "Harga jujur.", b: "Kualitas internasional, harga lokal. Tanpa markup absurd untuk packaging mewah." },
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

        {/* FOOTER */}
        <footer id="contact" className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <p className="font-[family-name:var(--font-display)] uppercase text-5xl tracking-tighter">TASTRA</p>
              <p className="mt-4 max-w-md text-white/70 text-sm">Skincare lokal yang ngerti kulit Indonesia. Bahan alami, formula modern.</p>
              <div className="mt-8 flex flex-wrap gap-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">
                <a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                <a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
                <span className="text-white/40">halo@tastraofficial.com</span>
              </div>
              <div className="mt-12 border-t border-white/20 pt-6 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/50">
                © {new Date().getFullYear()} TASTRA · Made in Indonesia ★
              </div>
            </Reveal>
          </div>
        </footer>
      </div>
    </>
  );
}
