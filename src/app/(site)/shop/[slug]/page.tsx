import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, getProduct } from "@/lib/products";
import { discountPercent, formatRupiah } from "@/lib/format";
import { AddToCartButton, BuyNowButton } from "@/components/product/add-to-cart";
import { ProductCard } from "@/components/product/product-card";
import { Sticker } from "@/components/site/sticker";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return notFound();

  const off = discountPercent(product.price, product.originalPrice);
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 4);

  return (
    <div>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 font-mono text-xs uppercase tracking-widest text-black/60">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <span className="mx-2">/</span>
          <Link href={`/shop?cat=${product.category}`} className="hover:underline">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="relative aspect-square border-2 border-black bg-white">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain p-8 md:p-12"
              />
              {off > 0 && (
                <div className="absolute top-4 left-4">
                  <Sticker rotate={-10}>-{off}% off</Sticker>
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <div key={i} className="relative aspect-square border-2 border-black bg-white">
                    <Image
                      src={src}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 150px"
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-black/60">
              {product.category} · {product.size}
            </p>
            <h1 className="display text-5xl md:text-6xl lg:text-7xl mt-3">{product.name}</h1>
            <p className="mt-4 text-lg text-black/80">{product.tagline}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="display text-4xl md:text-5xl">{formatRupiah(product.price)}</span>
              {off > 0 && (
                <>
                  <span className="font-mono text-base text-black/40 line-through">
                    {formatRupiah(product.originalPrice)}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest bg-black text-white px-2 py-1">
                    -{off}%
                  </span>
                </>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <AddToCartButton slug={product.slug} />
              <BuyNowButton slug={product.slug} />
            </div>

            <p className="mt-8 text-sm leading-relaxed text-black/80">{product.description}</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <Block title="Best for">
                <ul className="space-y-1 text-sm">
                  {product.bestFor.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden>★</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Hero ingredients">
                <ul className="space-y-1 text-sm">
                  {product.ingredients.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden>★</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <Block title="How to use" className="mt-6">
              <ol className="space-y-2 text-sm list-decimal list-inside marker:font-mono marker:font-bold">
                {product.howTo.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ol>
            </Block>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h2 className="display text-4xl md:text-5xl mb-8">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Block({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-2 border-black p-4 ${className}`}>
      <h3 className="font-mono text-xs uppercase tracking-widest mb-3 text-black/60">{title}</h3>
      {children}
    </div>
  );
}
