"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useOrders } from "@/lib/orders";
import { formatRupiah } from "@/lib/format";

export default function Design5Admin() {
  const { authed, ready, logout } = useAuth();
  const { orders, ready: ordersReady } = useOrders();

  if (!ready) return <Centered>Loading...</Centered>;

  if (!authed) {
    return (
      <Centered>
        <div className="text-center max-w-sm">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Restricted</p>
          <h1 className="text-3xl md:text-4xl leading-[1.05]">
            Please <span className="italic font-[family-name:var(--font-serif-alt)]">sign in.</span>
          </h1>
          <p className="mt-5 text-sm leading-[1.8] opacity-70">
            You need to sign in to view the dashboard.
          </p>
          <Link href="/design-5/login" className="inline-block mt-10 text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1.5 hover:opacity-60 transition-opacity">
            Go to login
          </Link>
        </div>
      </Centered>
    );
  }

  const revenue = orders.reduce((s, o) => s + o.total, 0);
  const units = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-6 border-b border-black/10 pb-8">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-4">Dashboard</p>
            <h1 className="text-4xl md:text-6xl leading-[1.05]">
              <span className="italic font-[family-name:var(--font-serif-alt)]">Orders.</span>
            </h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="min-h-11 text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign out
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-black/10 border border-black/10 mt-10">
          <Stat label="Total orders" value={String(orders.length)} />
          <Stat label="Units sold" value={String(units)} />
          <Stat label="Revenue" value={formatRupiah(revenue)} />
        </div>

        <div className="mt-12">
          {!ordersReady ? (
            <p className="text-sm tracking-wider opacity-60">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="border-t border-black/10 pt-16 text-center pb-16">
              <p className="text-2xl mb-3">
                No orders <span className="italic font-[family-name:var(--font-serif-alt)]">yet.</span>
              </p>
              <p className="text-sm leading-[1.8] opacity-70">Orders placed at checkout will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto border-t border-black/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] tracking-[0.3em] uppercase opacity-50 text-left border-b border-black/10">
                    <th className="px-4 py-4 font-light">Order</th>
                    <th className="px-4 py-4 font-light">Customer</th>
                    <th className="px-4 py-4 font-light">Items</th>
                    <th className="px-4 py-4 font-light text-right">Total</th>
                    <th className="px-4 py-4 font-light">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-b border-black/10 align-top">
                      <td className="px-4 py-6">
                        <p className="tracking-wider">{o.id}</p>
                        <p className="text-xs opacity-50 mt-1">{new Date(o.createdAt).toLocaleString("en-GB")}</p>
                        <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mt-1">{o.design}</p>
                      </td>
                      <td className="px-4 py-6">
                        <p>{o.customer.name}</p>
                        <p className="text-xs opacity-60 mt-1">{o.customer.email}</p>
                        <p className="text-xs opacity-60">{o.customer.city}</p>
                      </td>
                      <td className="px-4 py-6">
                        <ul className="space-y-1">
                          {o.items.map((i) => <li key={i.slug} className="text-xs">{i.qty} × {i.name}</li>)}
                        </ul>
                      </td>
                      <td className="px-4 py-6 text-right tracking-wider whitespace-nowrap">{formatRupiah(o.total)}</td>
                      <td className="px-4 py-6">
                        <span className="inline-block text-[10px] tracking-[0.3em] uppercase border-b border-black pb-0.5">{o.status}</span>
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
    <div className="bg-white p-8">
      <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">{label}</p>
      <p className="text-3xl mt-3 tracking-tight">{value}</p>
    </div>
  );
}
