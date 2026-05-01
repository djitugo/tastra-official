"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { Loader5 } from "@/components/preview/loader-5";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const INK = "#0a0a0a";
const BEIGE = "#ede5d3";
const BEIGE_SOFT = "#f7f2e8";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design5() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      <Loader5 />
      <div className="bg-white font-[family-name:var(--font-sans)]" style={{ color: INK }}>
        {/* TOP NOTICE */}
        <div className="text-center py-3 text-[10px] tracking-[0.4em] uppercase border-b border-black/5">
          Free shipping on all orders · Made in Indonesia
        </div>

        {/* NAV */}
        <header className="sticky top-0 z-40 bg-white border-b border-black/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.2em] uppercase font-light">
              <a href="#new" className="hover:opacity-50 transition-opacity">New Arrivals</a>
              <a href="#shop" className="hover:opacity-50 transition-opacity">Shop</a>
              <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
            </nav>
            <Link href="/design-5" className="text-2xl tracking-[0.25em] font-light">
              TASTRA
            </Link>
            <div className="flex items-center gap-5">
              <button aria-label="Search" className="hover:opacity-50 transition-opacity">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <button aria-label="Account" className="hover:opacity-50 transition-opacity">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <Link href="/cart" className="text-[12px] tracking-[0.2em] uppercase font-light hover:opacity-50 transition-opacity">
                Bag (0)
              </Link>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="border-b border-black/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="grid md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-5">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-10"
                >
                  Spring Edition · 2025
                </motion.p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light tracking-tight">
                  <LineRise delay={0.35} duration={1.0}>Made for</LineRise>
                  <LineRise delay={0.5} duration={1.0}>
                    <span className="italic font-[family-name:var(--font-serif-alt)] font-light">women</span>
                  </LineRise>
                  <LineRise delay={0.65} duration={1.0}>who lead.</LineRise>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="mt-12 max-w-md text-base leading-[1.8] opacity-70"
                >
                  Skincare untuk perempuan yang tahu apa yang dipakai.
                  Formulasi fungsional, dirancang untuk ritme modern —
                  tanpa tipu-tipu, tanpa berlebihan.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.7 }}
                  className="mt-12 flex flex-wrap items-center gap-8"
                >
                  <a
                    href="#shop"
                    className="text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity"
                  >
                    Shop the edit
                  </a>
                  <a
                    href="#about"
                    className="text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Our story
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1.2, ease: EASE }}
                className="md:col-span-7 relative aspect-[4/5] md:aspect-[5/6]"
                style={{ background: BEIGE_SOFT }}
              >
                <Image
                  src="/products/uv-protector.webp"
                  alt="Tastra Spring Edition"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain p-12 md:p-20"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute bottom-6 right-6 text-[10px] tracking-[0.3em] uppercase opacity-60"
                >
                  N° 01 · The UV Protector
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SHOP — DUAL ANGLE GRID */}
        <section id="shop" className="border-b border-black/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
                <div className="md:col-span-5">
                  <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-4">
                    Shop the edit
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light leading-[1.1]">
                    The essentials,<br />
                    <span className="italic font-[family-name:var(--font-serif-alt)] font-light">refined.</span>
                  </h2>
                </div>
                <p className="md:col-span-5 md:col-start-8 text-sm leading-[1.9] opacity-70">
                  Empat produk yang kami percayai untuk pemakaian harian. Dipilih
                  untuk kulit yang nyata — bukan untuk display.
                </p>
              </div>
            </Reveal>

            <RevealStagger stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {featured.map((p, i) => (
                <RevealItem key={p.slug}>
                  <Link href={`/shop/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] mb-4 overflow-hidden" style={{ background: BEIGE_SOFT }}>
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-8 transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <Image
                        src={p.images[1] || p.images[0]}
                        alt={`${p.name} alternate angle`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <motion.div
                        whileHover={{ y: 0, opacity: 1 }}
                        initial={{ y: 30, opacity: 0 }}
                        className="absolute bottom-3 left-3 right-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-3 opacity-0"
                      >
                        <span className="block w-full text-center py-2.5 text-[10px] tracking-[0.3em] uppercase bg-white">
                          Quick view
                        </span>
                      </motion.div>
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-1.5">
                      N° 0{i + 1} · {p.category}
                    </p>
                    <h3 className="text-base font-light tracking-wide">{p.name}</h3>
                    <p className="mt-1.5 text-sm tracking-wider opacity-70">{formatRupiah(p.price)}</p>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* EDITORIAL ABOUT */}
        <section id="about" className="border-b border-black/5" style={{ background: BEIGE_SOFT }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <div className="relative aspect-[4/5] bg-white">
                  <Image
                    src="/products/banner-1.webp"
                    alt="Tastra products"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal delay={0.15}>
                  <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">
                    Our story
                  </p>
                  <h2 className="text-3xl md:text-5xl font-light leading-[1.15]">
                    A studio approach<br />
                    to <span className="italic font-[family-name:var(--font-serif-alt)] font-light">everyday skincare.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="mt-10 space-y-6 text-base leading-[1.9] opacity-75">
                    <p>
                      Tastra dibangun seperti studio kecil — fokus pada formula
                      yang sedikit dan dipilih dengan teliti. Tidak ada SKU yang
                      dikejar, tidak ada launching musiman yang dipaksakan.
                    </p>
                    <p>
                      Setiap produk lahir dari kebutuhan riil kulit Indonesia,
                      bukan dari tren. Kalau bahannya tidak terbukti, ia tidak
                      masuk ke botol kami.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.45}>
                  <a
                    href="#shop"
                    className="inline-block mt-12 text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity"
                  >
                    View the edit →
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="border-b border-black/5">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
            <Reveal>
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-10">
                Loved by women across Indonesia
              </p>
              <blockquote className="text-2xl md:text-4xl font-light leading-[1.4] max-w-3xl mx-auto">
                <span className="italic font-[family-name:var(--font-serif-alt)] font-light">&ldquo;Akhirnya saya menemukan ritual yang sebenarnya bisa saya jaga
                konsisten — bahkan di hari yang paling sibuk.&rdquo;</span>
              </blockquote>
              <p className="mt-10 text-[11px] tracking-[0.3em] uppercase opacity-50">
                — Sarah W. · Verified Customer
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex justify-center gap-8 opacity-40">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-base">★</span>
                ))}
                <span className="text-[11px] tracking-[0.3em] uppercase ml-2">2,847 reviews</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* NEW ARRIVALS BLOCK */}
        <section id="new" className="border-b border-black/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-4">
                  Featured this season
                </p>
                <h2 className="text-3xl md:text-5xl font-light">
                  The <span className="italic font-[family-name:var(--font-serif-alt)] font-light">complete</span> ritual.
                </h2>
              </div>
            </Reveal>
            <RevealStagger stagger={0.15} className="grid md:grid-cols-3 gap-6">
              {PRODUCTS.filter((p) => p.category === "package").slice(0, 3).map((p, i) => (
                <RevealItem key={p.slug}>
                  <Link href={`/shop/${p.slug}`} className="group block">
                    <div className="relative aspect-[3/4] mb-5 overflow-hidden" style={{ background: BEIGE_SOFT }}>
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain p-12"
                        />
                      </motion.div>
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-1.5">
                      Edit N° 0{i + 1}
                    </p>
                    <h3 className="text-lg font-light">{p.name}</h3>
                    <p className="mt-1 text-sm opacity-70">{formatRupiah(p.price)}</p>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: BEIGE_SOFT, color: INK }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                  <p className="text-2xl tracking-[0.25em] font-light">TASTRA</p>
                  <p className="mt-4 text-sm leading-[1.9] opacity-70 max-w-sm">
                    A studio of small, considered skincare made for the rhythm
                    of modern Indonesian women.
                  </p>
                  <div className="mt-10 flex border-b border-black max-w-sm">
                    <input
                      type="email"
                      placeholder="Email address"
                      aria-label="Email"
                      className="flex-1 bg-transparent py-3 text-sm tracking-wider outline-none placeholder:opacity-40"
                    />
                    <button className="text-[11px] tracking-[0.3em] uppercase px-4 hover:opacity-60">
                      Join →
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 md:col-start-7">
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Shop</p>
                  <ul className="space-y-2 text-sm font-light">
                    <li><Link href="/shop" className="hover:opacity-60">All</Link></li>
                    <li><Link href="/shop?cat=sunscreen" className="hover:opacity-60">Sunscreen</Link></li>
                    <li><Link href="/shop?cat=moisturizer" className="hover:opacity-60">Moisturizer</Link></li>
                    <li><Link href="/shop?cat=cleanser" className="hover:opacity-60">Cleanser</Link></li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Studio</p>
                  <ul className="space-y-2 text-sm font-light">
                    <li><Link href="/about" className="hover:opacity-60">About</Link></li>
                    <li><a href="#" className="hover:opacity-60">Journal</a></li>
                    <li><Link href="/contact" className="hover:opacity-60">Contact</Link></li>
                  </ul>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Reach</p>
                  <ul className="space-y-2 text-sm font-light">
                    <li>halo@tastraofficial.com</li>
                    <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                    <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] tracking-[0.3em] uppercase opacity-50">
                <span>© {new Date().getFullYear()} Tastra Studio</span>
                <span>Proudly Made in Indonesia</span>
              </div>
            </Reveal>
          </div>
        </footer>
      </div>
    </>
  );
}
