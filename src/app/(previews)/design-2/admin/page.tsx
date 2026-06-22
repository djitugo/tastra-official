"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useOrders } from "@/lib/orders";
import { formatRupiah } from "@/lib/format";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

export default function Design2Admin() {
  const { authed, ready, logout } = useAuth();
  const { orders, ready: ordersReady } = useOrders();

  if (!ready) return <Centered>Loading...</Centered>;

  if (!authed) {
    return (
      <Centered>
        <div className="text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            Atelier Access
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl">
            <em className="font-[family-name:var(--font-serif-alt)] font-light">Restricted.</em>
          </h1>
          <p className="mt-6 leading-[1.8] max-w-md mx-auto" style={{ color: `${INK}99` }}>
            You need to sign in to view the dashboard.
          </p>
          <Link
            href="/design-2/login"
            className="mt-10 inline-flex items-center min-h-[48px] px-8 py-3 text-[12px] tracking-[0.3em] uppercase"
            style={{ background: INK, color: CREAM }}
          >
            Go to sign in →
          </Link>
        </div>
      </Centered>
    );
  }

  const revenue = orders.reduce((s, o) => s + o.total, 0);
  const units = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-6 border-b pb-8" style={{ borderColor: `${INK}1A` }}>
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
              Dashboard
            </p>
            <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl">
              <em className="font-[family-name:var(--font-serif-alt)] font-light">Orders.</em>
            </h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center min-h-11 text-[11px] tracking-[0.3em] uppercase border-b pb-1 hover:opacity-60"
            style={{ borderColor: INK }}
          >
            Sign out
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-12 mt-12">
          <Stat label="Total orders" value={String(orders.length)} />
          <Stat label="Units sold" value={String(units)} />
          <Stat label="Revenue" value={formatRupiah(revenue)} />
        </div>

        <div className="mt-16">
          {!ordersReady ? (
            <p className="text-sm tracking-wider opacity-60">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="border-t pt-16 text-center" style={{ borderColor: `${INK}1A` }}>
              <p className="font-[family-name:var(--font-serif)] text-2xl mb-3">
                No orders <em className="font-[family-name:var(--font-serif-alt)] font-light">yet.</em>
              </p>
              <p className="text-sm" style={{ color: `${INK}99` }}>
                Orders placed at checkout will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto border-t" style={{ borderColor: INK }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] tracking-[0.25em] uppercase" style={{ color: GOLD }}>
                    <th className="text-left px-4 py-4 font-normal">Order</th>
                    <th className="text-left px-4 py-4 font-normal">Customer</th>
                    <th className="text-left px-4 py-4 font-normal">Items</th>
                    <th className="text-right px-4 py-4 font-normal">Total</th>
                    <th className="text-left px-4 py-4 font-normal">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-t align-top" style={{ borderColor: `${INK}1A` }}>
                      <td className="px-4 py-5">
                        <p className="font-[family-name:var(--font-serif)] text-base">{o.id}</p>
                        <p className="text-xs opacity-50 mt-1">{new Date(o.createdAt).toLocaleString("en-GB")}</p>
                      </td>
                      <td className="px-4 py-5">
                        <p className="font-[family-name:var(--font-serif)] text-base">{o.customer.name}</p>
                        <p className="text-xs opacity-60 mt-1">{o.customer.email}</p>
                        <p className="text-xs opacity-60">{o.customer.city}</p>
                      </td>
                      <td className="px-4 py-5">
                        <ul className="space-y-1">
                          {o.items.map((i) => (
                            <li key={i.slug} className="text-xs">
                              {i.qty} × {i.name}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-5 text-right font-[family-name:var(--font-serif)] whitespace-nowrap">{formatRupiah(o.total)}</td>
                      <td className="px-4 py-5">
                        <span className="inline-block text-[10px] tracking-[0.25em] uppercase px-3 py-1" style={{ background: INK, color: CREAM }}>
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return <section className="min-h-[60vh] flex items-center justify-center px-6">{children}</section>;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t pt-6" style={{ borderColor: `${INK}33` }}>
      <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
        {label}
      </p>
      <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl mt-3">{value}</p>
    </div>
  );
}
