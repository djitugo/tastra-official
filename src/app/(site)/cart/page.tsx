"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";

export default function CartPage() {
  const { lines, setQty, remove, ready } = useCart();

  const items = lines
    .map((l) => {
      const p = PRODUCTS.find((x) => x.slug === l.slug);
      return p ? { line: l, product: p } : null;
    })
    .filter((x): x is { line: { slug: string; qty: number }; product: typeof PRODUCTS[number] } => !!x);

  const subtotal = items.reduce((s, { line, product }) => s + line.qty * product.price, 0);

  return (
    <div>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-black/60">★ Cart</p>
          <h1 className="display text-6xl md:text-8xl mt-3">Keranjang.</h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {!ready ? (
            <p className="font-mono text-sm">Loading...</p>
          ) : items.length === 0 ? (
            <div className="border-2 border-black p-12 text-center">
              <p className="display text-3xl mb-3">Masih kosong.</p>
              <p className="text-black/70 mb-6">
                Mulai dari satu produk, atau ambil paketnya — hemat sampai 50%.
              </p>
              <Link href="/shop" className="btn btn-invert">Mulai belanja →</Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_400px] gap-8">
              <ul className="border-2 border-black divide-y-2 divide-black">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="p-4 sm:p-6 flex gap-4 sm:gap-6">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 border-2 border-black bg-white"
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="128px"
                        className="object-contain p-2"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <Link href={`/shop/${product.slug}`} className="display text-xl sm:text-2xl hover:underline">
                          {product.name}
                        </Link>
                        <p className="font-mono text-xs uppercase tracking-widest text-black/60 mt-1">
                          {product.category} · {product.size}
                        </p>
                      </div>
                      <div className="flex items-end justify-between flex-wrap gap-3 mt-3">
                        <QtyStepper
                          qty={line.qty}
                          onDec={() => setQty(line.slug, line.qty - 1)}
                          onInc={() => setQty(line.slug, line.qty + 1)}
                        />
                        <div className="flex items-center gap-4">
                          <span className="font-mono font-bold">
                            {formatRupiah(product.price * line.qty)}
                          </span>
                          <button
                            type="button"
                            onClick={() => remove(line.slug)}
                            className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 min-h-11 px-2"
                            aria-label={`Hapus ${product.name}`}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="border-2 border-black p-6 h-fit lg:sticky lg:top-24">
                <h2 className="display text-2xl mb-4">Ringkasan</h2>
                <dl className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="font-bold">{formatRupiah(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Ongkir</dt>
                    <dd className="font-bold uppercase">Free</dd>
                  </div>
                  <div className="border-t-2 border-black pt-3 flex justify-between text-base">
                    <dt className="font-bold">Total</dt>
                    <dd className="display text-2xl">{formatRupiah(subtotal)}</dd>
                  </div>
                </dl>
                <Link href="/checkout" className="btn btn-invert w-full mt-6">
                  Checkout →
                </Link>
                <Link href="/shop" className="btn btn-ghost w-full mt-2">
                  Lanjut belanja
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function QtyStepper({ qty, onDec, onInc }: { qty: number; onDec: () => void; onInc: () => void }) {
  return (
    <div className="inline-flex border-2 border-black" role="group" aria-label="Quantity">
      <button
        type="button"
        onClick={onDec}
        className="w-11 h-11 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors"
        aria-label="Kurangi jumlah"
      >
        −
      </button>
      <span className="w-11 h-11 flex items-center justify-center font-mono font-bold border-x-2 border-black" aria-live="polite">
        {qty}
      </span>
      <button
        type="button"
        onClick={onInc}
        className="w-11 h-11 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors"
        aria-label="Tambah jumlah"
      >
        +
      </button>
    </div>
  );
}
