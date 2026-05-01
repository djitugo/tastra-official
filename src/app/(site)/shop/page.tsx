import Link from "next/link";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";

type SearchParams = Promise<{ cat?: string }>;

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const { cat } = await searchParams;
  const active = (CATEGORIES.find((c) => c.slug === cat)?.slug as Category | undefined) ?? null;
  const items = active ? PRODUCTS.filter((p) => p.category === active) : PRODUCTS;

  return (
    <div>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-black/60">★ Shop</p>
          <h1 className="display text-6xl md:text-8xl lg:text-9xl mt-3">
            Semua <span className="inline-block bg-black text-white px-2">produk.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-black/70 text-base md:text-lg">
            6 produk inti, tanpa bloat. Pilih satu, atau ambil paketnya
            langsung — semua sale 45–50% selama launching.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
          <FilterChip href="/shop" active={!active}>All</FilterChip>
          {CATEGORIES.map((c) => (
            <FilterChip key={c.slug} href={`/shop?cat=${c.slug}`} active={active === c.slug}>
              {c.label}
            </FilterChip>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {items.length === 0 ? (
            <p className="font-mono text-sm">Tidak ada produk di kategori ini.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {items.map((p, i) => (
                <ProductCard key={p.slug} product={p} priority={i < 4} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border-2 border-black transition-colors ${
        active ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
