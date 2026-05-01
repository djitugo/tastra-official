"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { Loader6 } from "@/components/preview/loader-6";
import { Reveal, RevealStagger, RevealItem, LineRise } from "@/components/preview/reveal";

const CREAM = "#f7f1e6";
const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";
const SAGE = "#6e7d5d";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design6() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      <Loader6 />
      <div
        className="font-[family-name:var(--font-lora)]"
        style={{ background: CREAM, color: INK }}
      >
        {/* TOP LINE */}
        <div
          className="text-center py-2.5 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase border-b"
          style={{ borderColor: `${INK}1F`, color: `${INK}99` }}
        >
          Of Ingredient & Restraint · Indonesia
        </div>

        {/* NAV */}
        <header className="border-b" style={{ borderColor: `${INK}1F` }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 flex items-center justify-between gap-8">
            <Link
              href="/design-6"
              className="font-[family-name:var(--font-lora)] text-2xl tracking-tight"
              style={{ color: INK }}
            >
              Tastra<span className="italic" style={{ color: OCHRE }}>.</span>
            </Link>
            <nav className="hidden md:flex items-center gap-10 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase">
              <a href="#range" className="hover:opacity-60">Range</a>
              <a href="#read" className="hover:opacity-60">Read</a>
              <a href="#stockists" className="hover:opacity-60">Stockists</a>
              <a href="#contact" className="hover:opacity-60">Contact</a>
            </nav>
            <Link
              href="/cart"
              className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] uppercase hover:opacity-60"
            >
              Cart (0)
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="border-b" style={{ borderColor: `${INK}1F` }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.p
                className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-10"
                style={{ color: OCHRE }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Vol. I — A Practice in Indonesian Skin
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
                  Tastra menyusun formulanya dari satu prinsip: kulit yang
                  hidup di iklim tropis menuntut perhatian yang spesifik —
                  bukan terjemahan dari musim dingin Eropa.
                </p>
                <p>
                  Setiap produk lahir dari pertimbangan, bukan tren. Kami
                  memilih bahan aktif yang ditelusuri asalnya, dan menyajikannya
                  dalam tekstur yang dirancang untuk dipakai berulang.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.7 }}
                className="mt-12 flex flex-wrap items-center gap-8"
              >
                <a
                  href="#range"
                  className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60 transition-opacity"
                  style={{ borderColor: INK }}
                >
                  Discover the Range
                </a>
                <a
                  href="#philosophy"
                  className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100"
                >
                  Our Philosophy →
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: EASE }}
              className="lg:col-span-5 relative aspect-[3/4]"
              style={{ background: CREAM_DEEP }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src="/products/uv-protector.webp"
                  alt="The UV Protector"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-12 md:p-16"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: OCHRE }}>
                  N° 01
                </p>
                <p className="font-[family-name:var(--font-lora)] italic text-lg" style={{ color: INK }}>
                  The UV Protector
                </p>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] uppercase mt-2 opacity-60">
                  Broad-Spectrum · 30ml
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY ESSAY */}
        <section
          id="philosophy"
          className="border-b"
          style={{ borderColor: `${INK}1F`, background: CREAM_DEEP }}
        >
          <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 md:py-32">
            <Reveal>
              <p
                className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-10 text-center"
                style={{ color: OCHRE }}
              >
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
                <p>
                  Sebuah ritual harian tidak harus rumit untuk menjadi efektif.
                  Banyak yang berasumsi bahwa kulit yang sehat adalah hasil dari
                  rangkaian panjang — botol demi botol, langkah demi langkah.
                  Kami tidak setuju.
                </p>
                <p>
                  Kulit, sebagaimana tubuh kita yang lain, hidup dengan ritmenya
                  sendiri. Memberinya terlalu banyak adalah bentuk kebisingan;
                  yang ia butuhkan justru sederhana — bahan yang dipilih dengan
                  alasan, dan disajikan dalam tekstur yang ingin dipakai
                  berulang.
                </p>
                <p>
                  Karena ritual hanya berfungsi jika ia, sebenarnya, dilakukan.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RANGE */}
        <section id="range" className="border-b" style={{ borderColor: `${INK}1F` }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-28">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-8 mb-16">
                <div className="md:col-span-5">
                  <p
                    className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-4"
                    style={{ color: OCHRE }}
                  >
                    The Range
                  </p>
                  <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.15]">
                    Six formulations.<br />
                    <span className="italic" style={{ color: OCHRE }}>Considered.</span>
                  </h2>
                </div>
                <p className="md:col-span-6 md:col-start-7 text-[15px] leading-[1.9]" style={{ color: `${INK}B3` }}>
                  Setiap produk dalam koleksi ini disusun untuk menempati
                  perannya yang spesifik — tidak lebih, tidak kurang. Jika
                  Anda menemukan satu yang Anda sukai, ia kemungkinan akan
                  tinggal di rak Anda untuk waktu yang lama.
                </p>
              </div>
            </Reveal>

            <RevealStagger stagger={0.12} className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {featured.map((p, i) => (
                <RevealItem key={p.slug}>
                  <Link href={`/shop/${p.slug}`} className="group block">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="relative aspect-[3/4] mb-5 overflow-hidden"
                      style={{ background: CREAM_DEEP }}
                    >
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                    <p
                      className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-1.5"
                      style={{ color: OCHRE }}
                    >
                      N° 0{i + 1}
                    </p>
                    <h3 className="font-[family-name:var(--font-lora)] text-xl leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-2 italic text-sm leading-relaxed" style={{ color: `${INK}99` }}>
                      {p.tagline}
                    </p>
                    <p
                      className="mt-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.15em]"
                      style={{ color: INK }}
                    >
                      {formatRupiah(p.price)}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section className="border-b" style={{ borderColor: `${INK}1F`, background: CREAM_DEEP }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-28">
            <Reveal>
              <div className="text-center mb-16">
                <p
                  className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-4"
                  style={{ color: OCHRE }}
                >
                  ⸻ Ingredients of Note ⸻
                </p>
                <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.2] max-w-2xl mx-auto">
                  <span className="italic" style={{ color: OCHRE }}>Sourced</span> with intention.
                </h2>
              </div>
            </Reveal>
            <RevealStagger stagger={0.15} className="grid md:grid-cols-3 gap-12">
              {[
                {
                  roman: "I.",
                  latin: "Centella Asiatica",
                  body: "Daun pegagan — telah lama digunakan dalam tradisi pengobatan kulit di Asia Tenggara untuk efek menenangkan.",
                },
                {
                  roman: "II.",
                  latin: "Niacinamide",
                  body: "Bentuk Vitamin B3 yang stabil; dipilih karena efikasi pada barier kulit dan pori yang membesar.",
                },
                {
                  roman: "III.",
                  latin: "Hyaluronic Acid",
                  body: "Molekul yang mampu mengikat hingga seribu kali bobot air-nya — esensial untuk kelembapan tropis yang seimbang.",
                },
              ].map((x) => (
                <RevealItem key={x.roman}>
                  <div className="border-t pt-6" style={{ borderColor: `${INK}33` }}>
                    <p
                      className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-3"
                      style={{ color: OCHRE }}
                    >
                      {x.roman}
                    </p>
                    <h3 className="font-[family-name:var(--font-lora)] italic text-2xl" style={{ color: SAGE }}>
                      {x.latin}
                    </h3>
                    <p className="mt-4 text-[14px] leading-[1.85]" style={{ color: `${INK}B3` }}>
                      {x.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* READ */}
        <section id="read" className="border-b" style={{ borderColor: `${INK}1F` }}>
          <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 text-center">
            <Reveal>
              <p
                className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-6"
                style={{ color: OCHRE }}
              >
                The Reading Room
              </p>
              <h3 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl leading-[1.2] mb-6">
                Letters, sent <span className="italic" style={{ color: OCHRE }}>occasionally.</span>
              </h3>
              <p className="text-[15px] leading-[1.85] max-w-xl mx-auto" style={{ color: `${INK}B3` }}>
                Esai pendek tentang ritual, bahan, dan kulit di iklim tropis.
                Kami berkirim sekali setiap dua bulan — tidak lebih sering dari itu.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <form className="mt-12 max-w-md mx-auto flex border-b" style={{ borderColor: INK }}>
                <input
                  type="email"
                  placeholder="alamat@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-transparent py-3 text-sm tracking-wider outline-none placeholder:opacity-40"
                />
                <button
                  type="button"
                  className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase px-4 hover:opacity-60"
                >
                  Subscribe
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          style={{ background: INK, color: CREAM }}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-5">
                  <p className="font-[family-name:var(--font-lora)] text-3xl tracking-tight">
                    Tastra<span className="italic" style={{ color: OCHRE }}>.</span>
                  </p>
                  <p className="mt-4 text-sm leading-[1.85] opacity-70 max-w-sm">
                    Of ingredient and restraint. Diracik dengan kesabaran di
                    Indonesia, dirancang untuk dipakai dengan sederhana.
                  </p>
                </div>
                <div className="md:col-span-2 md:col-start-7">
                  <p
                    className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4"
                  >
                    Range
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/shop" className="hover:opacity-60">All</Link></li>
                    <li><Link href="/shop?cat=sunscreen" className="hover:opacity-60">Skin</Link></li>
                    <li><Link href="/shop?cat=cleanser" className="hover:opacity-60">Cleansing</Link></li>
                    <li><Link href="/shop?cat=package" className="hover:opacity-60">Sets</Link></li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <p
                    className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4"
                  >
                    Read
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#philosophy" className="hover:opacity-60">Philosophy</a></li>
                    <li><a href="#" className="hover:opacity-60">Journal</a></li>
                    <li><Link href="/about" className="hover:opacity-60">About</Link></li>
                  </ul>
                </div>
                <div className="md:col-span-3">
                  <p
                    className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4"
                  >
                    Reach
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>halo@tastraofficial.com</li>
                    <li><a href="https://instagram.com/tastraofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a></li>
                    <li><a href="https://www.tiktok.com/@tastra_official" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-50">
                <span>© {new Date().getFullYear()} Tastra Apothecary</span>
                <span style={{ color: OCHRE }}>⸻ Of Ingredient & Restraint ⸻</span>
              </div>
            </Reveal>
          </div>
        </footer>
      </div>
    </>
  );
}
