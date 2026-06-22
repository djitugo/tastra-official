"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useOrders } from "@/lib/orders";
import { formatRupiah } from "@/lib/format";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";

function Sparkle({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

export default function Design3Admin() {
  const { authed, ready, logout } = useAuth();
  const { orders, ready: ordersReady } = useOrders();

  if (!ready) return <Centered>Loading...</Centered>;

  if (!authed) {
    return (
      <Centered>
        <div className="rounded-[36px] p-10 text-center max-w-md" style={{ background: "#fff" }}>
          <div className="text-5xl mb-4" aria-hidden>🔒</div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Members only</h1>
          <p className="mb-6" style={{ color: `${INK}99` }}>You need to sign in to view the dashboard.</p>
          <Link
            href="/design-3/login"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-sm transition-transform hover:scale-105"
            style={{ background: INK, color: PEACH }}
          >
            Go to login <span aria-hidden>→</span>
          </Link>
        </div>
      </Centered>
    );
  }

  const revenue = orders.reduce((s, o) => s + o.total, 0);
  const units = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm font-bold mb-2 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
              <Sparkle size={14} /> Dashboard
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Orders</h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-full px-6 min-h-11 font-bold text-sm border-2 transition-colors hover:bg-white"
            style={{ borderColor: INK, color: INK }}
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
            <div className="rounded-3xl p-12 text-center" style={{ background: "#fff" }}>
              <div className="text-4xl mb-3" aria-hidden>🌸</div>
              <p className="text-2xl font-extrabold mb-2">No orders yet</p>
              <p style={{ color: `${INK}99` }}>Orders placed at checkout will appear here.</p>
            </div>
          ) : (
            <div className="rounded-3xl overflow-hidden overflow-x-auto" style={{ background: "#fff" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wider" style={{ background: PEACH_DEEP, color: `${INK}99` }}>
                    <th className="px-4 py-3 font-bold">Order</th>
                    <th className="px-4 py-3 font-bold">Customer</th>
                    <th className="px-4 py-3 font-bold">Items</th>
                    <th className="px-4 py-3 font-bold text-right">Total</th>
                    <th className="px-4 py-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="align-top border-t" style={{ borderColor: `${INK}14` }}>
                      <td className="px-4 py-4">
                        <p className="font-extrabold">{o.id}</p>
                        <p className="text-xs" style={{ color: `${INK}66` }}>{new Date(o.createdAt).toLocaleString("en-GB")}</p>
                        <p className="text-[10px] uppercase tracking-wider mt-0.5" style={{ color: ROSE_DEEP }}>{o.design}</p>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-bold">{o.customer.name}</p>
                        <p className="text-xs" style={{ color: `${INK}80` }}>{o.customer.email}</p>
                        <p className="text-xs" style={{ color: `${INK}80` }}>{o.customer.city}</p>
                      </td>
                      <td className="px-4 py-4">
                        <ul className="space-y-0.5">
                          {o.items.map((i) => <li key={i.slug} className="text-xs">{i.qty} × {i.name}</li>)}
                        </ul>
                      </td>
                      <td className="px-4 py-4 text-right font-extrabold whitespace-nowrap">{formatRupiah(o.total)}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: ROSE }}>{o.status}</span>
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
    <div className="rounded-3xl p-6" style={{ background: "#fff" }}>
      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ROSE_DEEP }}>{label}</p>
      <p className="text-3xl font-extrabold mt-2">{value}</p>
    </div>
  );
}
