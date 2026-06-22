"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useOrders } from "@/lib/orders";
import { formatRupiah } from "@/lib/format";

const GREEN = "#2d5a3d";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

export default function Design4Admin() {
  const { authed, ready, logout } = useAuth();
  const { orders, ready: ordersReady } = useOrders();

  if (!ready) return <Centered>Loading...</Centered>;

  if (!authed) {
    return (
      <Centered>
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight mb-3" style={{ color: INK }}>Restricted</h1>
          <p className="mb-6" style={{ color: `${INK}99` }}>You need to sign in to view the dashboard.</p>
          <Link href="/design-4/login" className="inline-flex rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-105" style={{ background: GREEN, color: CREAM }}>Go to login →</Link>
        </div>
      </Centered>
    );
  }

  const revenue = orders.reduce((s, o) => s + o.total, 0);
  const units = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  return (
    <section style={{ background: CREAM }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between flex-wrap gap-4 border-b pb-6" style={{ borderColor: `${INK}1A` }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>✦ Dashboard</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight" style={{ color: INK }}>Orders</h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-full px-6 py-2.5 text-sm font-bold border-2 transition-colors hover:bg-white"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            Sign out
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <Stat label="Total orders" value={String(orders.length)} />
          <Stat label="Units sold" value={String(units)} />
          <Stat label="Revenue" value={formatRupiah(revenue)} />
        </div>

        <div className="mt-10">
          {!ordersReady ? (
            <p className="text-sm font-semibold opacity-60">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="rounded-2xl p-12 text-center" style={{ background: GREEN_SOFT }}>
              <p className="text-2xl font-extrabold mb-2" style={{ color: INK }}>No orders yet</p>
              <p style={{ color: `${INK}99` }}>Orders placed at checkout will appear here.</p>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden overflow-x-auto" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
              <table className="w-full text-sm" style={{ background: CREAM }}>
                <thead>
                  <tr className="text-[11px] uppercase tracking-widest" style={{ background: GREEN, color: CREAM }}>
                    <th className="text-left px-4 py-3 font-bold">Order</th>
                    <th className="text-left px-4 py-3 font-bold">Customer</th>
                    <th className="text-left px-4 py-3 font-bold">Items</th>
                    <th className="text-right px-4 py-3 font-bold">Total</th>
                    <th className="text-left px-4 py-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-t align-top" style={{ borderColor: `${INK}1A` }}>
                      <td className="px-4 py-4">
                        <p className="font-bold" style={{ color: INK }}>{o.id}</p>
                        <p className="text-xs" style={{ color: `${INK}80` }}>{new Date(o.createdAt).toLocaleString("en-GB")}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-bold" style={{ color: INK }}>{o.customer.name}</p>
                        <p className="text-xs" style={{ color: `${INK}99` }}>{o.customer.email}</p>
                        <p className="text-xs" style={{ color: `${INK}99` }}>{o.customer.city}</p>
                      </td>
                      <td className="px-4 py-4">
                        <ul className="space-y-0.5">
                          {o.items.map((i) => <li key={i.slug} className="text-xs" style={{ color: `${INK}CC` }}>{i.qty} × {i.name}</li>)}
                        </ul>
                      </td>
                      <td className="px-4 py-4 text-right font-bold whitespace-nowrap" style={{ color: GREEN }}>{formatRupiah(o.total)}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block rounded-full text-[10px] uppercase tracking-widest px-2.5 py-1 font-bold" style={{ background: GREEN, color: CREAM }}>{o.status}</span>
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
  return <section className="min-h-[60vh] flex items-center justify-center px-4" style={{ background: CREAM, color: INK }}>{children}</section>;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl p-5" style={{ background: GREEN_SOFT }}>
      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: `${INK}80` }}>{label}</p>
      <p className="text-3xl font-extrabold mt-2" style={{ color: INK }}>{value}</p>
    </div>
  );
}
