import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";
import { Star, Sticker } from "@/components/site/sticker";

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <div>
      {/* HERO */}
      <section className="relative border-b-2 border-black overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-2 -left-2 hidden md:block">
              <Sticker rotate={-12}>★ New Era ★</Sticker>
            </div>
            <h1 className="display text-[14vw] leading-[0.85] sm:text-7xl md:text-8xl lg:text-9xl">
              Skincare<br />
              Lokal,<br />
              <span className="inline-block bg-black text-white px-2">Hasil</span><br />
              Beneran.
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-black/70 leading-relaxed">
              Bahan alami, formula modern. Diformulasi ulang untuk iklim
              tropis dan tipe kulit Indonesia — bukan asal terjemahan dari
              luar negeri.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn btn-invert">Shop now →</Link>
              <Link href="/about" className="btn btn-ghost">Our story</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest">
              <Stat n="50%" l="Diskon launching" />
              <Stat n="Free" l="Ongkir nasional" />
              <Stat n="100%" l="Lokal" />
            </div>
          </div>

          <div className="relative aspect-square max-w-xl mx-auto w-full">
            <div className="absolute inset-0 border-2 border-black bg-white grain" />
            <Image
              src="/products/uv-protector.webp"
              alt="Tastra UV Protector — sunscreen broad spectrum"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain p-8"
            />
            <div className="absolute -bottom-4 -right-4 bg-white border-2 border-black px-4 py-3 [box-shadow:6px_6px_0_0_#000]">
              <p className="display text-2xl leading-none">SPF 50+</p>
              <p className="font-mono text-[10px] uppercase tracking-widest mt-1">PA++++</p>
            </div>
            <div className="absolute -top-4 -left-4 hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-black text-white spin-slow">
              <span className="font-mono text-[10px] uppercase tracking-widest leading-tight text-center">
                Iklim<br />Tropis<br />Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-black/60">
                ★ Best sellers
              </p>
              <h2 className="display text-5xl md:text-7xl mt-2">Pilihan teratas.</h2>
            </div>
            <Link href="/shop" className="font-mono text-sm uppercase tracking-widest underline underline-offset-4">
              Lihat semua →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-black text-white border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-6">
            ★ Manifesto
          </p>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            Kulit Indonesia layak skincare yang bukan terjemahan.
          </h2>
          <p className="mt-8 max-w-2xl text-white/70 text-lg leading-relaxed">
            Kami uji formulanya di iklim tropis, di kulit yang beneran panas,
            lembap, dan kena polusi tiap hari. Bukan formula winter Eropa
            yang dipaksa cocok di Jakarta.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Pillar n="01" h="Bahan alami." b="Niacinamide, ceramide, centella, dan rangkaian aktif yang sudah terbukti bekerja." />
            <Pillar n="02" h="Formula modern." b="Tekstur ringan, no white-cast, low-pH. Performa tinggi tanpa drama." />
            <Pillar n="03" h="Harga jujur." b="Kualitas internasional, harga lokal. Tanpa markup absurd untuk packaging mewah." />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-4">
            <Star size={48} className="text-black flex-shrink-0" />
            <div>
              <p className="display text-3xl md:text-4xl leading-tight">
                Mulai dari paket. Hemat 50%.
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-black/60 mt-2">
                Bundle pilihan untuk pemula.
              </p>
            </div>
          </div>
          <div className="flex md:justify-end">
            <Link href="/shop?cat=package" className="btn btn-invert">
              Lihat paket →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="display text-3xl">{n}</span>
      <span className="text-black/60 max-w-[100px] leading-tight normal-case">{l}</span>
    </div>
  );
}

function Pillar({ n, h, b }: { n: string; h: string; b: string }) {
  return (
    <div className="border-2 border-white p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-white/50">{n}</p>
      <h3 className="display text-2xl mt-3">{h}</h3>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{b}</p>
    </div>
  );
}
