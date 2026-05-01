import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const off = discountPercent(product.price, product.originalPrice);
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block border-2 border-black bg-white transition-transform duration-200 hover:-translate-y-1 hover:[box-shadow:6px_6px_0_0_#000] focus-visible:-translate-y-1 focus-visible:[box-shadow:6px_6px_0_0_#000]"
    >
      <div className="relative aspect-square bg-white overflow-hidden border-b-2 border-black">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
        {off > 0 && (
          <span className="absolute top-3 left-3 bg-black text-white font-mono uppercase text-[10px] font-bold tracking-widest px-2 py-1">
            -{off}%
          </span>
        )}
        <span className="absolute top-3 right-3 font-mono uppercase text-[10px] tracking-widest text-black/60">
          {product.category}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="display text-xl sm:text-2xl leading-none">{product.name}</h3>
        <p className="mt-2 text-xs text-black/70 line-clamp-2 min-h-[32px]">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-mono font-bold text-base">{formatRupiah(product.price)}</span>
          {off > 0 && (
            <span className="font-mono text-xs text-black/40 line-through">
              {formatRupiah(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
