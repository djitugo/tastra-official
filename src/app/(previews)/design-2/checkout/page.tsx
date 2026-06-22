"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { useOrders } from "@/lib/orders";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

export default function Design2Checkout() {
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
      design: "design-2",
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
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-28 md:py-36 text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            Order placed
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl leading-[1.05]">
            Payment <em className="font-[family-name:var(--font-serif-alt)] font-light">confirmed.</em>
          </h1>
          <p className="mt-8 text-base md:text-lg leading-[1.7] max-w-xl mx-auto" style={{ color: `${INK}B3` }}>
            Thank you. Your order is confirmed and now visible in the admin dashboard.
          </p>
          <div className="mt-10 inline-block border px-8 py-6" style={{ borderColor: INK }}>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: GOLD }}>
              Order ID
            </p>
            <p className="font-[family-name:var(--font-serif)] text-2xl">{placedId}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 items-center justify-center">
            <Link
              href="/design-2/shop"
              className="inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase"
              style={{ background: INK, color: CREAM }}
            >
              Continue browsing
            </Link>
            <Link
              href="/design-2/admin"
              className="inline-flex items-center gap-2 min-h-[48px] text-[12px] tracking-[0.3em] uppercase border-b pb-1 hover:opacity-60"
              style={{ borderColor: INK }}
            >
              View dashboard
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (ready && items.length === 0) {
    return (
      <section>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-28 md:py-36 text-center">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl leading-[1.05]">
            Your bag is <em className="font-[family-name:var(--font-serif-alt)] font-light">empty.</em>
          </h1>
          <p className="mt-8 leading-[1.8] max-w-md mx-auto" style={{ color: `${INK}B3` }}>
            Add a product before proceeding to checkout.
          </p>
          <Link
            href="/design-2/shop"
            className="mt-10 inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase"
            style={{ background: INK, color: CREAM }}
          >
            Explore the collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-24">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            Checkout
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl leading-[1.05]">
            Complete your <em className="font-[family-name:var(--font-serif-alt)] font-light">order.</em>
          </h1>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20">
          <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24">
            <div className="space-y-12">
              <Fieldset legend="I. Contact">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input name="name" label="Full name" required autoComplete="name" />
                  <Input name="email" type="email" label="Email" required autoComplete="email" />
                  <Input name="phone" label="Phone or WhatsApp" required autoComplete="tel" />
                </div>
              </Fieldset>
              <Fieldset legend="II. Shipping">
                <div className="space-y-6">
                  <Input name="address" label="Full address" required autoComplete="street-address" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="city" label="City" required autoComplete="address-level2" />
                    <Input name="postal" label="Postal code" required inputMode="numeric" autoComplete="postal-code" />
                  </div>
                  <Input name="notes" label="Courier notes (optional)" />
                </div>
              </Fieldset>
              <div className="border-t pt-6" style={{ borderColor: `${INK}1A` }}>
                <p className="font-[family-name:var(--font-serif)] text-xl">III. Payment</p>
                <p className="mt-3 text-sm leading-[1.8]" style={{ color: `${INK}99` }}>
                  Testing mode: payment is auto approved on submit. The order goes straight to the dashboard.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-32 h-fit">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl mb-6">Order</h2>
              <ul className="space-y-4 border-t pt-6" style={{ borderColor: `${INK}1A` }}>
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="flex gap-4">
                    <div className="relative w-14 h-16 flex-shrink-0" style={{ background: "#fff" }}>
                      <SmartImage src={product.images[0]} alt="" fill sizes="56px" className="object-contain p-1" />
                      <span
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{ background: INK, color: CREAM }}
                      >
                        {line.qty}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="font-[family-name:var(--font-serif)] text-base truncate">{product.name}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {formatRupiah(product.price)} × {line.qty}
                      </p>
                    </div>
                    <p className="text-sm whitespace-nowrap">{formatRupiah(product.price * line.qty)}</p>
                  </li>
                ))}
              </ul>
              <dl className="border-t mt-6 pt-6 space-y-3 text-sm" style={{ borderColor: `${INK}1A` }}>
                <div className="flex justify-between">
                  <dt className="opacity-60">Subtotal</dt>
                  <dd>{formatRupiah(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="opacity-60">Shipping</dt>
                  <dd className="italic font-[family-name:var(--font-serif-alt)]">Complimentary</dd>
                </div>
                <div className="border-t pt-4 flex justify-between items-baseline" style={{ borderColor: `${INK}1A` }}>
                  <dt className="font-[family-name:var(--font-serif)] text-lg">Total</dt>
                  <dd className="font-[family-name:var(--font-serif)] text-2xl">{formatRupiah(subtotal)}</dd>
                </div>
              </dl>
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2 w-full mt-8 min-h-[48px] py-4 text-[12px] tracking-[0.3em] uppercase disabled:opacity-50"
                style={{ background: INK, color: CREAM }}
              >
                {submitting ? "Processing..." : "Pay and place order"}
                {!submitting && <Arrow />}
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
    <fieldset className="border-t pt-6" style={{ borderColor: `${INK}1A` }}>
      <legend className="font-[family-name:var(--font-serif)] text-xl">{legend}</legend>
      <div className="mt-6">{children}</div>
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
      <span className="text-[11px] tracking-[0.3em] uppercase block mb-3" style={{ color: `${INK}99` }}>
        {label}
        {required && (
          <span aria-hidden className="ml-1">
            *
          </span>
        )}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full bg-white px-4 text-base outline-none"
        style={{ border: `1px solid ${INK}`, color: INK, minHeight: 48 }}
      />
    </label>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden>
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
