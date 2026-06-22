"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useOrders } from "@/lib/orders";
import { formatRupiah } from "@/lib/format";

export default function Design1Admin() {
  const { authed, ready, logout } = useAuth();
  const { orders, ready: ordersReady } = useOrders();

  if (!ready) return <Centered>Loading...</Centered>;

  if (!authed) {
    return (
      <Centered>
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] uppercase text-4xl tracking-tighter mb-3">Restricted.</h1>
          <p className="text-black/70 mb-6">You need to sign in to view the dashboard.</p>
          <Link href="/design-1/login" className="btn btn-invert">Go to login →</Link>
        </div>
      </Centered>
    );
  }

  const revenue = orders.reduce((s, o) => s + o.total, 0);
  const units = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between flex-wrap gap-4 border-b-2 border-black pb-6">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Dashboard</p>
            <h1 className="font-[family-name:var(--font-display)] uppercase text-5xl md:text-6xl mt-2 tracking-tighter">Orders.</h1>
          </div>
          <button type="button" onClick={logout} className="btn btn-ghost">Sign out</button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <Stat label="Total orders" value={String(orders.length)} />
          <Stat label="Units sold" value={String(units)} />
          <Stat label="Revenue" value={formatRupiah(revenue)} />
        </div>

        <div className="mt-10">
          {!ordersReady ? (
            <p className="font-[family-name:var(--font-mono)] text-sm">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="border-2 border-black p-12 text-center">
              <p className="font-[family-name:var(--font-display)] uppercase text-2xl tracking-tight mb-2">No orders yet.</p>
              <p className="text-black/70">Orders placed at checkout will appear here.</p>
            </div>
          ) : (
            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-black text-white font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest">
                    <th className="text-left px-4 py-3">Order</th>
                    <th className="text-left px-4 py-3">Customer</th>
                    <th className="text-left px-4 py-3">Items</th>
                    <th className="text-right px-4 py-3">Total</th>
                    <th className="text-left px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-t-2 border-black align-top">
                      <td className="px-4 py-4">
                        <p className="font-[family-name:var(--font-mono)] font-bold">{o.id}</p>
                        <p className="text-xs text-black/50">{new Date(o.createdAt).toLocaleString("en-GB")}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-bold">{o.customer.name}</p>
                        <p className="text-xs text-black/60">{o.customer.email}</p>
                        <p className="text-xs text-black/60">{o.customer.city}</p>
                      </td>
                      <td className="px-4 py-4">
                        <ul className="space-y-0.5">
                          {o.items.map((i) => <li key={i.slug} className="text-xs">{i.qty} × {i.name}</li>)}
                        </ul>
                      </td>
                      <td className="px-4 py-4 text-right font-[family-name:var(--font-mono)] font-bold whitespace-nowrap">{formatRupiah(o.total)}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block bg-black text-white font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest px-2 py-1">{o.status}</span>
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
  return <section className="min-h-[60vh] flex items-center justify-center px-4">{children}</section>;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-black p-5">
      <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">{label}</p>
      <p className="font-[family-name:var(--font-display)] text-3xl mt-2 tracking-tight">{value}</p>
    </div>
  );
}
