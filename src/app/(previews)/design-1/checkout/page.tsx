"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { useOrders } from "@/lib/orders";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

export default function Design1Checkout() {
  const { lines, ready, clear } = useCart();
  const { addOrder } = useOrders();
  const [submitting, setSubmitting] = useState(false);
  const [placedId, setPlacedId] = useState<string | null>(null);

  const items = lines
    .map((l) => {
      const p = PRODUCTS.find((x) => x.slug === l.slug);
      return p ? { line: l, product: p } : null;
    })
    .filter((x): x is { line: { slug: string; qty: number }; product: typeof PRODUCTS[number] } => !!x);

  const subtotal = items.reduce((s, { line, product }) => s + line.qty * product.price, 0);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting || items.length === 0) return;
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    // Testing override: payment is auto approved and the order lands in the dashboard.
    const order = addOrder({
      design: "design-1",
      items: items.map(({ line, product }) => ({ slug: product.slug, name: product.name, qty: line.qty, price: product.price })),
      total: subtotal,
      customer: {
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
        address: String(form.get("address") ?? ""),
        city: String(form.get("city") ?? ""),
        postal: String(form.get("postal") ?? ""),
        notes: String(form.get("notes") ?? ""),
      },
    });
    setTimeout(() => {
      clear();
      setPlacedId(order.id);
    }, 500);
  }

  if (placedId) {
    return (
      <section>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Order placed</p>
          <h1 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-7xl mt-3 tracking-tighter">Payment done.</h1>
          <p className="mt-4 text-lg text-black/70">Thanks. Your order is confirmed and now visible in the admin dashboard.</p>
          <div className="mt-8 border-2 border-black p-6 inline-block">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">Order ID</p>
            <p className="font-[family-name:var(--font-display)] text-2xl mt-1">{placedId}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/design-1/shop" className="btn btn-invert">Keep shopping →</Link>
            <Link href="/design-1/admin" className="btn btn-ghost">View dashboard</Link>
          </div>
        </div>
      </section>
    );
  }

  if (ready && items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-[family-name:var(--font-display)] uppercase text-5xl mb-4 tracking-tighter">Cart is empty.</h1>
        <p className="text-black/70 mb-6">Add a product before checking out.</p>
        <Link href="/design-1/shop" className="btn btn-invert">Shop →</Link>
      </div>
    );
  }

  return (
    <>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Checkout</p>
          <h1 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-7xl mt-3 tracking-tighter">Complete order.</h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_400px] gap-8">
            <div className="space-y-8">
              <Fieldset legend="01 — Contact">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" label="Full name" required autoComplete="name" />
                  <Input name="email" type="email" label="Email" required autoComplete="email" />
                  <Input name="phone" label="Phone / WhatsApp" required autoComplete="tel" />
                </div>
              </Fieldset>
              <Fieldset legend="02 — Shipping">
                <div className="space-y-4">
                  <Input name="address" label="Full address" required autoComplete="street-address" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input name="city" label="City" required autoComplete="address-level2" />
                    <Input name="postal" label="Postal code" required inputMode="numeric" autoComplete="postal-code" />
                  </div>
                  <Input name="notes" label="Courier notes (optional)" />
                </div>
              </Fieldset>
              <div className="border-2 border-black p-5">
                <p className="font-[family-name:var(--font-display)] uppercase text-xl tracking-tight">03 — Payment</p>
                <p className="mt-2 text-sm text-black/70 font-[family-name:var(--font-mono)]">Testing mode: payment is auto approved on submit. The order goes straight to the dashboard.</p>
              </div>
            </div>

            <aside className="border-2 border-black p-6 h-fit lg:sticky lg:top-24">
              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl mb-4 tracking-tight">Order</h2>
              <ul className="space-y-3 mb-4">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="flex gap-3">
                    <div className="relative w-14 h-14 border-2 border-black flex-shrink-0 bg-white">
                      <SmartImage src={product.images[0]} alt="" fill sizes="56px" className="object-contain p-1" />
                      <span className="absolute -top-2 -right-2 bg-black text-white font-[family-name:var(--font-mono)] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{line.qty}</span>
                    </div>
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="font-bold truncate">{product.name}</p>
                      <p className="font-[family-name:var(--font-mono)] text-xs text-black/60">{formatRupiah(product.price)} × {line.qty}</p>
                    </div>
                    <p className="font-[family-name:var(--font-mono)] text-sm font-bold">{formatRupiah(product.price * line.qty)}</p>
                  </li>
                ))}
              </ul>
              <dl className="border-t-2 border-black pt-3 space-y-2 font-[family-name:var(--font-mono)] text-sm">
                <div className="flex justify-between"><dt>Subtotal</dt><dd className="font-bold">{formatRupiah(subtotal)}</dd></div>
                <div className="flex justify-between"><dt>Shipping</dt><dd className="font-bold uppercase">Free</dd></div>
                <div className="flex justify-between border-t-2 border-black pt-2"><dt className="font-bold">Total</dt><dd className="font-[family-name:var(--font-display)] text-2xl">{formatRupiah(subtotal)}</dd></div>
              </dl>
              <button type="submit" className="btn btn-invert w-full mt-6" disabled={submitting}>{submitting ? "Processing..." : "Pay and place order →"}</button>
            </aside>
          </form>
        </div>
      </section>
    </>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-2 border-black p-5">
      <legend className="font-[family-name:var(--font-display)] uppercase text-xl px-2 -ml-2 tracking-tight">{legend}</legend>
      <div className="mt-2">{children}</div>
    </fieldset>
  );
}

function Input({ name, label, type = "text", required = false, autoComplete, inputMode }: { name: string; label: string; type?: string; required?: boolean; autoComplete?: string; inputMode?: "text" | "numeric" | "email" | "tel" }) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest block mb-1">{label}{required && <span aria-hidden className="ml-1">*</span>}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} inputMode={inputMode} className="w-full border-2 border-black bg-white px-3 py-3 text-base font-[family-name:var(--font-mono)] focus:outline-none focus:[box-shadow:4px_4px_0_0_#000]" />
    </label>
  );
}
