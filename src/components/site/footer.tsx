import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="display text-5xl tracking-tighter">
            TASTRA
          </Link>
          <p className="mt-4 max-w-md text-white/70 text-sm leading-relaxed">
            Skincare lokal yang formulanya beneran disesuaikan untuk kulit
            Indonesia. Bahan alami, performa modern. Konsisten 28 hari, lihat
            bedanya.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest mb-4 text-white/50">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop?cat=sunscreen" className="hover:underline">Sunscreen</Link></li>
            <li><Link href="/shop?cat=moisturizer" className="hover:underline">Moisturizer</Link></li>
            <li><Link href="/shop?cat=cleanser" className="hover:underline">Cleanser</Link></li>
            <li><Link href="/shop?cat=package" className="hover:underline">Package</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest mb-4 text-white/50">
            Connect
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://instagram.com/tastraofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@tastra_official"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                TikTok
              </a>
            </li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-xs font-mono uppercase tracking-widest text-white/50">
          <span>© {new Date().getFullYear()} TASTRA. All rights reserved.</span>
          <span>Made in Indonesia ★</span>
        </div>
      </div>
    </footer>
  );
}
