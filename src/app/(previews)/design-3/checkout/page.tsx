"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { useCart } from "@/lib/cart";
import { useOrders } from "@/lib/orders";
import { PRODUCTS } from "@/lib/products";
import { formatRupiah } from "@/lib/format";
import { SmartImage } from "@/components/shared/smart-image";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";

function Sparkle({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

const fieldClass = "w-full rounded-2xl bg-white px-4 py-3 text-base outline-none";
const fieldStyle = { border: "2px solid #ffe0d0" };

export default function Design3Checkout() {
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
      design: "design-3",
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
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="text-6xl mb-6"
            aria-hidden
          >
            🎉
          </motion.div>
          <p className="text-sm font-bold mb-2 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
            <Sparkle size={14} /> Order placed <Sparkle size={14} />
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Payment done!</h1>
          <p className="mt-4 text-lg" style={{ color: `${INK}99` }}>
            Thank you. Your order is confirmed and now visible in the admin dashboard.
          </p>
          <div className="mt-8 inline-block rounded-3xl p-6" style={{ background: "#fff" }}>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ROSE_DEEP }}>Order ID</p>
            <p className="text-2xl font-extrabold mt-1">{placedId}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/design-3/shop" className="rounded-full px-7 py-4 font-bold text-sm transition-transform hover:scale-105" style={{ background: INK, color: PEACH }}>
              Keep shopping →
            </Link>
            <Link href="/design-3/admin" className="rounded-full px-7 py-4 font-bold text-sm border-2 transition-colors hover:bg-white" style={{ borderColor: INK, color: INK }}>
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
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 text-center">
          <div className="text-5xl mb-4" aria-hidden>🌸</div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Your bag is empty</h1>
          <p className="mb-6" style={{ color: `${INK}99` }}>Add a product before checking out.</p>
          <Link href="/design-3/shop" className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm transition-transform hover:scale-105" style={{ background: INK, color: PEACH }}>
            Shop now <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <p className="text-sm font-bold mb-3 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
            <Sparkle size={14} /> Checkout <Sparkle size={14} />
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Almost <em className="italic" style={{ color: ROSE_DEEP }}>yours</em>
          </h1>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_360px] gap-6">
            <div className="space-y-6">
              <Fieldset legend="Contact" emoji="💌">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" label="Full name" required autoComplete="name" />
                  <Input name="email" type="email" label="Email" required autoComplete="email" />
                  <Input name="phone" label="Phone / WhatsApp" required autoComplete="tel" />
                </div>
              </Fieldset>
              <Fieldset legend="Shipping" emoji="📦">
                <div className="space-y-4">
                  <Input name="address" label="Full address" required autoComplete="street-address" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input name="city" label="City" required autoComplete="address-level2" />
                    <Input name="postal" label="Postal code" required inputMode="numeric" autoComplete="postal-code" />
                  </div>
                  <Input name="notes" label="Courier notes (optional)" />
                </div>
              </Fieldset>
              <div className="rounded-3xl p-6" style={{ background: PEACH_DEEP }}>
                <p className="text-lg font-extrabold flex items-center gap-2">💳 Payment</p>
                <p className="mt-2 text-sm" style={{ color: `${INK}99` }}>
                  Testing mode: payment is auto approved on submit. The order goes straight to the dashboard.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl p-6 h-fit lg:sticky lg:top-24" style={{ background: "#fff" }}>
              <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2">
                <Sparkle size={18} /> Order
              </h2>
              <ul className="space-y-3 mb-4">
                {items.map(({ line, product }) => (
                  <li key={line.slug} className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 rounded-2xl flex-shrink-0 overflow-hidden" style={{ background: PEACH_DEEP }}>
                      <SmartImage src={product.images[0]} alt="" fill sizes="56px" className="object-contain p-1" />
                      <span className="absolute -top-1.5 -right-1.5 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center" style={{ background: ROSE }}>{line.qty}</span>
                    </div>
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="font-bold truncate">{product.name}</p>
                      <p className="text-xs" style={{ color: `${INK}80` }}>{formatRupiah(product.price)} × {line.qty}</p>
                    </div>
                    <p className="text-sm font-bold whitespace-nowrap">{formatRupiah(product.price * line.qty)}</p>
                  </li>
                ))}
              </ul>
              <dl className="border-t pt-3 space-y-2 text-sm" style={{ borderColor: `${INK}1A` }}>
                <div className="flex justify-between"><dt style={{ color: `${INK}99` }}>Subtotal</dt><dd className="font-bold">{formatRupiah(subtotal)}</dd></div>
                <div className="flex justify-between"><dt style={{ color: `${INK}99` }}>Shipping</dt><dd className="font-bold uppercase" style={{ color: ROSE_DEEP }}>Free</dd></div>
                <div className="flex justify-between items-baseline border-t pt-2" style={{ borderColor: `${INK}1A` }}><dt className="font-extrabold">Total</dt><dd className="text-2xl font-extrabold">{formatRupiah(subtotal)}</dd></div>
              </dl>
              <button
                type="submit"
                disabled={submitting}
                className="block w-full text-center mt-6 rounded-full px-7 py-4 font-bold text-sm disabled:opacity-50 transition-transform hover:scale-[1.02]"
                style={{ background: INK, color: PEACH }}
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

function Fieldset({ legend, emoji, children }: { legend: string; emoji: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-3xl p-6" style={{ background: "#fff" }}>
      <legend className="text-lg font-extrabold px-2 flex items-center gap-2">
        <span aria-hidden>{emoji}</span> {legend}
      </legend>
      <div className="mt-3">{children}</div>
    </fieldset>
  );
}

function Input({ name, label, type = "text", required = false, autoComplete, inputMode }: { name: string; label: string; type?: string; required?: boolean; autoComplete?: string; inputMode?: "text" | "numeric" | "email" | "tel" }) {
  return (
    <label className="block">
      <span className="text-sm font-bold block mb-1.5">{label}{required && <span aria-hidden className="ml-1" style={{ color: ROSE_DEEP }}>*</span>}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} inputMode={inputMode} className={fieldClass} style={fieldStyle} />
    </label>
  );
}
