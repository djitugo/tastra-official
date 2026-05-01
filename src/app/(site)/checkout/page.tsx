"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";

export default function CheckoutPage() {
  const { lines, ready, clear } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const items = lines
    .map((l) => {
      const p = PRODUCTS.find((x) => x.slug === l.slug);
      return p ? { line: l, product: p } : null;
    })
    .filter((x): x is { line: { slug: string; qty: number }; product: typeof PRODUCTS[number] } => !!x);

  const subtotal = items.reduce((s, { line, product }) => s + line.qty * product.price, 0);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const order = {
      id: `TST-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      items: items.map(({ line, product }) => ({
        slug: product.slug,
        name: product.name,
        qty: line.qty,
        price: product.price,
      })),
      subtotal,
      total: subtotal,
      shipping: 0,
      payment: form.get("payment"),
      customer: {
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        address: form.get("address"),
        city: form.get("city"),
        postal: form.get("postal"),
        notes: form.get("notes") ?? "",
      },
    };
    try {
      localStorage.setItem("tastra-last-order", JSON.stringify(order));
    } catch {}
    setTimeout(() => {
      clear();
      router.push("/checkout/success");
    }, 600);
  }

  if (ready && items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="display text-5xl mb-4">Keranjang kosong.</h1>
        <p className="text-black/70 mb-6">Tambah produk dulu sebelum checkout.</p>
        <Link href="/shop" className="btn btn-invert">Belanja →</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="font-mono text-xs uppercase tracking-widest text-black/60">★ Checkout</p>
          <h1 className="display text-5xl md:text-7xl mt-3">Selesaikan pesanan.</h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_400px] gap-8">
            <div className="space-y-8">
              <Fieldset legend="01 — Kontak">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" label="Nama lengkap" required autoComplete="name" />
                  <Input name="email" type="email" label="Email" required autoComplete="email" />
                  <Input name="phone" label="Nomor HP / WhatsApp" required autoComplete="tel" />
                </div>
              </Fieldset>

              <Fieldset legend="02 — Alamat pengiriman">
                <div className="space-y-4">
                  <Input name="address" label="Alamat lengkap" required autoComplete="street-address" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input name="city" label="Kota" required autoComplete="address-level2" />
                    <Input name="postal" label="Kode pos" required autoComplete="postal-code" inputMode="numeric" />
                  </div>
                  <Input name="notes" label="Catatan untuk kurir (opsional)" />
                </div>
              </Fieldset>

              <Fieldset legend="03 — Metode pembayaran">
                <div className="grid sm:grid-cols-3 gap-3">
                  <Radio name="payment" value="bank-transfer" label="Bank Transfer" defaultChecked />
                  <Radio name="payment" value="qris" label="QRIS" />
                  <Radio name="payment" value="cod" label="Bayar di Tempat" />
                </div>
                <p className="mt-3 text-xs text-black/60 font-mono">
                  Detail pembayaran akan dikirim ke email setelah pesanan dibuat.
                </p>
              </Fieldset>
            </div>

            <aside className="border-2 border-black p-6 h-fit lg:sticky lg:top-24">
              <h2 className="display text-2xl mb-4">Pesanan</h2>
              <ul className="space-y-3 mb-4">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="flex gap-3">
                    <div className="relative w-14 h-14 border-2 border-black flex-shrink-0 bg-white">
                      <Image src={product.images[0]} alt="" fill sizes="56px" className="object-contain p-1" />
                      <span className="absolute -top-2 -right-2 bg-black text-white font-mono text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {line.qty}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="font-bold truncate">{product.name}</p>
                      <p className="font-mono text-xs text-black/60">
                        {formatRupiah(product.price)} × {line.qty}
                      </p>
                    </div>
                    <p className="font-mono text-sm font-bold">
                      {formatRupiah(product.price * line.qty)}
                    </p>
                  </li>
                ))}
              </ul>
              <dl className="border-t-2 border-black pt-3 space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="font-bold">{formatRupiah(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Ongkir</dt>
                  <dd className="font-bold uppercase">Free</dd>
                </div>
                <div className="flex justify-between border-t-2 border-black pt-2">
                  <dt className="font-bold">Total</dt>
                  <dd className="display text-2xl">{formatRupiah(subtotal)}</dd>
                </div>
              </dl>
              <button type="submit" className="btn btn-invert w-full mt-6" disabled={submitting}>
                {submitting ? "Memproses..." : "Buat pesanan →"}
              </button>
              <p className="mt-3 text-[11px] text-black/60 font-mono uppercase tracking-widest">
                Demo lokal — pesanan disimpan di browser saja.
              </p>
            </aside>
          </form>
        </div>
      </section>
    </div>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-2 border-black p-5">
      <legend className="display text-xl px-2 -ml-2">{legend}</legend>
      <div className="mt-2">{children}</div>
    </fieldset>
  );
}

function Input({
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "email" | "tel";
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest block mb-1">
        {label}
        {required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full border-2 border-black bg-white px-3 py-3 text-base font-mono focus:outline-none focus:ring-0 focus:[box-shadow:4px_4px_0_0_#000]"
      />
    </label>
  );
}

function Radio({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="border-2 border-black p-3 flex items-center gap-2 cursor-pointer has-[:checked]:bg-black has-[:checked]:text-white transition-colors">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="appearance-none w-4 h-4 border-2 border-current rounded-full checked:bg-white checked:[box-shadow:inset_0_0_0_3px_#000]"
      />
      <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
    </label>
  );
}
