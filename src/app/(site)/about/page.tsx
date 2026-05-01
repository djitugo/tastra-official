import Image from "next/image";
import Link from "next/link";
import { Star } from "@/components/site/sticker";

export const metadata = {
  title: "About — TASTRA",
  description: "Cerita di balik Tastra: skincare lokal yang dirancang untuk kulit Indonesia.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-black/60">★ About</p>
          <h1 className="display text-6xl md:text-8xl lg:text-9xl mt-3 max-w-5xl">
            Skincare yang lahir dari sini.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-black/70 leading-relaxed">
            Tastra dimulai dari satu keluhan sederhana: kenapa skincare yang
            beredar di sini formulanya nggak nyambung sama iklim dan kebutuhan
            kulit kita? Jadi kami bikin yang nyambung.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] border-2 border-black bg-white">
            <Image
              src="/products/banner-1.webp"
              alt="Lini produk Tastra"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="display text-4xl md:text-6xl">Premis kami.</h2>
            <p className="mt-6 text-base md:text-lg text-black/80 leading-relaxed">
              Kulit Indonesia tiap hari hadapin matahari yang nggak tanggung,
              kelembapan tinggi, polusi kota, dan stres yang nempel. Skincare
              yang efektif harus respon ke konteks itu — bukan ke konteks
              musim dingin Eropa atau iklim kering California.
            </p>
            <p className="mt-4 text-base md:text-lg text-black/80 leading-relaxed">
              Setiap formula Tastra di-uji di lapangan: di kulit beneran, di
              kota beneran, di cuaca beneran. Hasilnya: tekstur ringan, tanpa
              white-cast, tanpa ribet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-6">
            ★ Standar kami
          </p>
          <h2 className="display text-5xl md:text-7xl">Empat hal yang nggak kami kompromikan.</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Standard n="01" h="Bahan terverifikasi" b="Setiap aktif punya jurnal pendukung. Bukan hype." />
            <Standard n="02" h="Tested on Indonesia" b="Diujikan ke kulit lokal di iklim asli, bukan lab kering." />
            <Standard n="03" h="Cruelty-free" b="Tidak ada eksperimen pada hewan. Pernah, dan tidak akan." />
            <Standard n="04" h="Harga jujur" b="Bayar untuk formula. Bukan untuk packaging atau influencer." />
          </div>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <Star size={48} className="mx-auto mb-6" />
          <h2 className="display text-4xl md:text-6xl max-w-3xl mx-auto">
            Mau coba langsung?
          </h2>
          <p className="mt-4 text-black/70 max-w-xl mx-auto">
            Mulai dari Daily Essentials Pack — paket termurah dengan dua produk inti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/shop" className="btn btn-invert">Belanja sekarang →</Link>
            <Link href="/contact" className="btn btn-ghost">Hubungi kami</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Standard({ n, h, b }: { n: string; h: string; b: string }) {
  return (
    <div className="border-2 border-white p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-white/50">{n}</p>
      <h3 className="display text-2xl mt-3">{h}</h3>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{b}</p>
    </div>
  );
}
