"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { useOrders } from "@/lib/orders";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const INK = "#0a0a0a";
const BEIGE_SOFT = "#f7f2e8";

export default function Design5Checkout() {
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
      design: "design-5",
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
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Order placed</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05]">
            Thank <span className="italic font-[family-name:var(--font-serif-alt)]">you.</span>
          </h1>
          <p className="mt-6 text-base leading-[1.8] opacity-70 max-w-md mx-auto">
            Your order is confirmed and now visible in the admin dashboard.
          </p>
          <div className="mt-10 inline-block border-t border-b border-black/10 py-6 px-12">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">Order ID</p>
            <p className="text-2xl mt-2">{placedId}</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 justify-center">
            <Link href="/design-5/shop" className="text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
              Continue browsing
            </Link>
            <Link href="/design-5/admin" className="text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity">
              View dashboard
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (ready && items.length === 0) {
    return (
      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl leading-[1.05] mb-6">
            Your bag is <span className="italic font-[family-name:var(--font-serif-alt)]">empty.</span>
          </h1>
          <p className="text-base leading-[1.8] opacity-70 mb-10">Add a piece before checking out.</p>
          <Link href="/design-5/shop" className="inline-block text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
            Shop the edit
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-black/5">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-24">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Checkout</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05]">
            Complete your <span className="italic font-[family-name:var(--font-serif-alt)]">order.</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-16">
          <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_360px] gap-16">
            <div className="space-y-12">
              <Fieldset legend="01 · Contact">
                <div className="space-y-8">
                  <Input name="name" label="Full name" required autoComplete="name" />
                  <Input name="email" type="email" label="Email" required autoComplete="email" />
                  <Input name="phone" label="Phone" required autoComplete="tel" />
                </div>
              </Fieldset>
              <Fieldset legend="02 · Shipping">
                <div className="space-y-8">
                  <Input name="address" label="Full address" required autoComplete="street-address" />
                  <div className="grid sm:grid-cols-2 gap-8">
                    <Input name="city" label="City" required autoComplete="address-level2" />
                    <Input name="postal" label="Postal code" required inputMode="numeric" autoComplete="postal-code" />
                  </div>
                  <Input name="notes" label="Courier notes (optional)" />
                </div>
              </Fieldset>
              <Fieldset legend="03 · Payment">
                <p className="text-sm leading-[1.9] opacity-70">
                  Testing mode. Payment is auto approved on submit, and the order
                  goes straight to the dashboard.
                </p>
              </Fieldset>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit">
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Your order</p>
              <ul className="space-y-5 border-t border-black/10 pt-6 mb-6">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="flex gap-4">
                    <div className="relative w-14 h-16 flex-shrink-0" style={{ background: BEIGE_SOFT }}>
                      <SmartImage src={product.images[0]} alt="" fill sizes="56px" className="object-contain p-1.5" />
                    </div>
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="truncate">{product.name}</p>
                      <p className="text-xs opacity-60 mt-1">{formatRupiah(product.price)} × {line.qty}</p>
                    </div>
                    <p className="text-sm whitespace-nowrap">{formatRupiah(product.price * line.qty)}</p>
                  </li>
                ))}
              </ul>
              <dl className="border-t border-black/10 pt-6 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="opacity-60">Subtotal</dt><dd>{formatRupiah(subtotal)}</dd></div>
                <div className="flex justify-between"><dt className="opacity-60">Shipping</dt><dd className="italic font-[family-name:var(--font-serif-alt)] opacity-60">Complimentary</dd></div>
                <div className="flex justify-between items-baseline border-t border-black/10 pt-4"><dt className="text-base">Total</dt><dd className="text-2xl">{formatRupiah(subtotal)}</dd></div>
              </dl>
              <button
                type="submit"
                disabled={submitting}
                className="block w-full text-center mt-10 min-h-11 py-4 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50 hover:opacity-90 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
                style={{ background: INK, color: "#fff" }}
              >
                {submitting ? "Processing..." : "Pay and place order"}
              </button>
            </aside>
          </form>
        </div>
      </section>
    </>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-black/10 pt-8">
      <legend className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-8">{legend}</legend>
      {children}
    </fieldset>
  );
}

function Input({ name, label, type = "text", required = false, autoComplete, inputMode }: { name: string; label: string; type?: string; required?: boolean; autoComplete?: string; inputMode?: "text" | "numeric" | "email" | "tel" }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-3">
        {label}{required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full bg-white border border-black/15 px-3 py-3 text-sm outline-none focus:border-black transition-colors min-h-11"
      />
    </label>
  );
}
