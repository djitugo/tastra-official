"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { useOrders } from "@/lib/orders";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const CREAM = "#f7f1e6";
const CREAM_DEEP = "#ebe2cf";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

export default function Design6Checkout() {
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
      design: "design-6",
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
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
            ⸻ With Thanks
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl leading-[1.1]">
            Your order is <span className="italic" style={{ color: OCHRE }}>placed.</span>
          </h1>
          <p className="mt-8 text-[15px] leading-[1.9] max-w-md mx-auto" style={{ color: `${INK}B3` }}>
            Payment has been confirmed and your order now rests in the
            dashboard. We will prepare it with care.
          </p>
          <div className="mt-12 inline-block border-t border-b py-6 px-12" style={{ borderColor: `${INK}33` }}>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: OCHRE }}>Order Reference</p>
            <p className="font-[family-name:var(--font-lora)] text-2xl">{placedId}</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <Link
              href="/design-6/shop"
              className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
              style={{ borderColor: INK }}
            >
              Continue Browsing →
            </Link>
            <Link href="/design-6/admin" className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100">
              View Dashboard
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (ready && items.length === 0) {
    return (
      <section>
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="font-[family-name:var(--font-lora)] text-3xl mb-4">
            <span className="italic" style={{ color: OCHRE }}>Empty,</span> for now.
          </p>
          <p className="text-[15px] leading-[1.85] max-w-md mx-auto mb-12" style={{ color: `${INK}B3` }}>
            Add a product before proceeding to checkout.
          </p>
          <Link
            href="/design-6/shop"
            className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
            style={{ borderColor: INK }}
          >
            Discover the Range →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-24">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
            ⸻ To Complete Your Order
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl leading-[1.05]">
            <span className="italic" style={{ color: OCHRE }}>The</span> Checkout.
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
          <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_360px] gap-16">
            <div className="space-y-12">
              <Fieldset roman="I." legend="Contact">
                <div className="space-y-8">
                  <Input name="name" label="Full Name" required autoComplete="name" />
                  <Input name="email" type="email" label="Email" required autoComplete="email" />
                  <Input name="phone" label="Phone / WhatsApp" required autoComplete="tel" />
                </div>
              </Fieldset>
              <Fieldset roman="II." legend="Shipping">
                <div className="space-y-8">
                  <Input name="address" label="Full Address" required autoComplete="street-address" />
                  <div className="grid sm:grid-cols-2 gap-8">
                    <Input name="city" label="City" required autoComplete="address-level2" />
                    <Input name="postal" label="Postal Code" required inputMode="numeric" autoComplete="postal-code" />
                  </div>
                  <Input name="notes" label="Courier Notes (optional)" />
                </div>
              </Fieldset>
              <div className="border-t pt-8" style={{ borderColor: `${INK}33` }}>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: OCHRE }}>
                  III. Payment
                </p>
                <p className="text-[14px] leading-[1.85]" style={{ color: `${INK}B3` }}>
                  In this testing mode, payment is approved automatically on
                  submission, and the order passes directly to the dashboard.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-32 h-fit">
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6" style={{ color: OCHRE }}>Your Order</p>
              <ul className="border-t" style={{ borderColor: `${INK}33` }}>
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="py-4 border-b flex gap-4 items-center" style={{ borderColor: `${INK}1F` }}>
                    <div className="relative w-14 h-16 flex-shrink-0" style={{ background: CREAM_DEEP }}>
                      <SmartImage src={product.images[0]} alt={product.name} fill sizes="56px" className="object-contain p-1.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-[family-name:var(--font-lora)] text-sm truncate">{product.name}</p>
                      <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-wider opacity-60">{formatRupiah(product.price)} × {line.qty}</p>
                    </div>
                    <p className="font-[family-name:var(--font-mono)] text-sm tracking-wider">{formatRupiah(product.price * line.qty)}</p>
                  </li>
                ))}
              </ul>
              <dl className="space-y-3 text-sm pt-6">
                <div className="flex justify-between">
                  <dt className="opacity-60">Subtotal</dt>
                  <dd className="font-[family-name:var(--font-mono)]">{formatRupiah(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="opacity-60">Shipping</dt>
                  <dd className="italic" style={{ color: OCHRE }}>Complimentary</dd>
                </div>
                <div className="border-t pt-4 flex justify-between items-baseline" style={{ borderColor: `${INK}33` }}>
                  <dt className="font-[family-name:var(--font-lora)] text-base">Total</dt>
                  <dd className="font-[family-name:var(--font-lora)] text-2xl">{formatRupiah(subtotal)}</dd>
                </div>
              </dl>
              <button
                type="submit"
                disabled={submitting}
                className="block w-full text-center mt-10 py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50"
                style={{ background: INK, color: CREAM }}
              >
                {submitting ? "Processing..." : "Pay and Place Order →"}
              </button>
            </aside>
          </form>
        </div>
      </section>
    </>
  );
}

function Fieldset({ roman, legend, children }: { roman: string; legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t pt-8" style={{ borderColor: `${INK}33` }}>
      <legend className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: OCHRE }}>
        {roman} {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function Input({ name, label, type = "text", required = false, autoComplete, inputMode }: { name: string; label: string; type?: string; required?: boolean; autoComplete?: string; inputMode?: "text" | "numeric" | "email" | "tel" }) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: OCHRE }}>
        {label}{required && <span aria-hidden className="ml-1">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full bg-transparent border px-4 py-3 text-[15px] outline-none focus:border-[#b8956a]"
        style={{ borderColor: INK, minHeight: 48 }}
      />
    </label>
  );
}
