"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { useOrders } from "@/lib/orders";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

function CheckIcon({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Design4Checkout() {
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
      design: "design-4",
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
      <section style={{ background: CREAM }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: GREEN, color: CREAM }}><CheckIcon /></div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>✦ Order placed</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 tracking-tight" style={{ color: INK }}>Payment done</h1>
          <p className="mt-4 text-lg" style={{ color: `${INK}99` }}>Thank you. Your order is confirmed and now visible in the admin dashboard.</p>
          <div className="mt-8 rounded-2xl p-6 inline-block" style={{ background: GREEN_SOFT }}>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: `${INK}80` }}>Order ID</p>
            <p className="text-2xl font-extrabold mt-1" style={{ color: GREEN }}>{placedId}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/design-4/shop" className="rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105" style={{ background: GREEN, color: CREAM }}>Keep shopping →</Link>
            <Link href="/design-4/admin" className="rounded-full px-7 py-3.5 text-sm font-bold border-2 transition-colors hover:bg-white" style={{ borderColor: GREEN, color: GREEN }}>View dashboard</Link>
          </div>
        </div>
      </section>
    );
  }

  if (ready && items.length === 0) {
    return (
      <section style={{ background: CREAM }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight" style={{ color: INK }}>Your cart is empty</h1>
          <p className="mb-6" style={{ color: `${INK}99` }}>Add a product before checking out.</p>
          <Link href="/design-4/shop" className="inline-flex rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105" style={{ background: GREEN, color: CREAM }}>Shop →</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 md:py-24 border-b" style={{ background: GREEN_LIGHT, borderColor: `${INK}14` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Checkout</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: INK }}>Complete your order</h1>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ background: CREAM }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
            <div className="space-y-6">
              <Card legend="1. Contact">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" label="Full name" required autoComplete="name" />
                  <Input name="email" type="email" label="Email" required autoComplete="email" />
                  <Input name="phone" label="Phone / WhatsApp" required autoComplete="tel" />
                </div>
              </Card>
              <Card legend="2. Shipping">
                <div className="space-y-4">
                  <Input name="address" label="Full address" required autoComplete="street-address" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input name="city" label="City" required autoComplete="address-level2" />
                    <Input name="postal" label="Postal code" required inputMode="numeric" autoComplete="postal-code" />
                  </div>
                  <Input name="notes" label="Courier notes (optional)" />
                </div>
              </Card>
              <div className="rounded-2xl p-6" style={{ background: GREEN_SOFT }}>
                <p className="text-lg font-extrabold" style={{ color: INK }}>3. Payment</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: `${INK}99` }}>
                  Testing mode. Payment is auto approved on submit and the order goes straight to the dashboard.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl p-6 h-fit lg:sticky lg:top-24" style={{ background: GREEN_SOFT }}>
              <h2 className="text-lg font-extrabold mb-4" style={{ color: INK }}>Order</h2>
              <ul className="space-y-3 mb-4">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden" style={{ background: GREEN_LIGHT }}>
                      <SmartImage src={product.images[0]} alt="" fill sizes="56px" className="object-contain p-1" />
                      <span className="absolute -top-1 -right-1 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center" style={{ background: GREEN, color: CREAM }}>{line.qty}</span>
                    </div>
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="font-bold truncate" style={{ color: INK }}>{product.name}</p>
                      <p className="text-xs" style={{ color: `${INK}99` }}>{formatRupiah(product.price)} × {line.qty}</p>
                    </div>
                    <p className="text-sm font-bold" style={{ color: GREEN }}>{formatRupiah(product.price * line.qty)}</p>
                  </li>
                ))}
              </ul>
              <dl className="border-t pt-3 space-y-2 text-sm" style={{ borderColor: `${INK}1A` }}>
                <div className="flex justify-between"><dt style={{ color: `${INK}99` }}>Subtotal</dt><dd className="font-bold">{formatRupiah(subtotal)}</dd></div>
                <div className="flex justify-between"><dt style={{ color: `${INK}99` }}>Shipping</dt><dd className="font-bold uppercase" style={{ color: GREEN }}>Free</dd></div>
                <div className="flex justify-between border-t pt-2 items-baseline" style={{ borderColor: `${INK}1A` }}><dt className="font-extrabold">Total</dt><dd className="text-2xl font-extrabold" style={{ color: GREEN }}>{formatRupiah(subtotal)}</dd></div>
              </dl>
              <button
                type="submit"
                disabled={submitting}
                className="block w-full text-center mt-6 rounded-full px-7 py-3.5 font-bold text-sm transition-transform hover:scale-[1.02] disabled:opacity-50"
                style={{ background: GREEN, color: CREAM }}
              >
                {submitting ? "Processing..." : "Pay and place order →"}
              </button>
            </aside>
          </form>
        </div>
      </section>
    </>
  );
}

function Card({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-2xl p-6" style={{ background: GREEN_SOFT }}>
      <legend className="text-lg font-extrabold px-2 -ml-2" style={{ color: INK }}>{legend}</legend>
      <div className="mt-2">{children}</div>
    </fieldset>
  );
}

function Input({ name, label, type = "text", required = false, autoComplete, inputMode }: { name: string; label: string; type?: string; required?: boolean; autoComplete?: string; inputMode?: "text" | "numeric" | "email" | "tel" }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: `${INK}99` }}>
        {label}{required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-xl border-2 bg-white px-4 py-3 text-base focus:outline-none"
        style={{ borderColor: "#d6e0d6", color: INK }}
      />
    </label>
  );
}
