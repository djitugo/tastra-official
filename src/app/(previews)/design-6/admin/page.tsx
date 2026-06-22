"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useOrders } from "@/lib/orders";
import { formatRupiah } from "@/lib/format";

const CREAM = "#f7f1e6";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

export default function Design6Admin() {
  const { authed, ready, logout } = useAuth();
  const { orders, ready: ordersReady } = useOrders();

  if (!ready) return <Centered>Loading...</Centered>;

  if (!authed) {
    return (
      <Centered>
        <div className="text-center">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
            ⸻ Restricted ⸻
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl leading-[1.1]">
            Please <span className="italic" style={{ color: OCHRE }}>sign in.</span>
          </h1>
          <p className="mt-6 text-[15px] leading-[1.85] max-w-xs mx-auto" style={{ color: `${INK}B3` }}>
            You will need to sign in before the dashboard can be viewed.
          </p>
          <div className="mt-10">
            <Link
              href="/design-6/login"
              className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
              style={{ borderColor: INK }}
            >
              Go to Login →
            </Link>
          </div>
        </div>
      </Centered>
    );
  }

  const revenue = orders.reduce((s, o) => s + o.total, 0);
  const units = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 border-b pb-8" style={{ borderColor: `${INK}1F` }}>
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: OCHRE }}>
              ⸻ The Dashboard
            </p>
            <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl leading-[1.05]">
              <span className="italic" style={{ color: OCHRE }}>The</span> Ledger.
            </h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="min-h-11 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5 hover:opacity-60"
            style={{ borderColor: INK }}
          >
            Sign Out
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 mt-12">
          <Stat roman="I." label="Total Orders" value={String(orders.length)} />
          <Stat roman="II." label="Units Sold" value={String(units)} />
          <Stat roman="III." label="Revenue" value={formatRupiah(revenue)} />
        </div>

        <div className="mt-16">
          {!ordersReady ? (
            <p className="font-[family-name:var(--font-mono)] text-sm opacity-60">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="border-t pt-16 text-center" style={{ borderColor: `${INK}33` }}>
              <p className="font-[family-name:var(--font-lora)] text-2xl mb-3">
                <span className="italic" style={{ color: OCHRE }}>No orders</span> as yet.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: `${INK}B3` }}>
                Orders placed at checkout will appear here in time.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto border-t" style={{ borderColor: `${INK}33` }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] uppercase" style={{ color: OCHRE }}>
                    <th className="text-left px-4 py-5 font-normal">Order</th>
                    <th className="text-left px-4 py-5 font-normal">Customer</th>
                    <th className="text-left px-4 py-5 font-normal">Items</th>
                    <th className="text-right px-4 py-5 font-normal">Total</th>
                    <th className="text-left px-4 py-5 font-normal">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-t align-top" style={{ borderColor: `${INK}1F` }}>
                      <td className="px-4 py-6">
                        <p className="font-[family-name:var(--font-mono)] text-[12px] tracking-wider">{o.id}</p>
                        <p className="text-xs opacity-50 mt-1">{new Date(o.createdAt).toLocaleString("en-GB")}</p>
                        <p className="text-[10px] opacity-40 mt-1 font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase">{o.design}</p>
                      </td>
                      <td className="px-4 py-6">
                        <p className="font-[family-name:var(--font-lora)] text-base">{o.customer.name}</p>
                        <p className="text-xs opacity-60 mt-1">{o.customer.email}</p>
                        <p className="text-xs opacity-60">{o.customer.city}</p>
                      </td>
                      <td className="px-4 py-6">
                        <ul className="space-y-1">
                          {o.items.map((i) => <li key={i.slug} className="text-xs italic" style={{ color: `${INK}B3` }}>{i.qty} × {i.name}</li>)}
                        </ul>
                      </td>
                      <td className="px-4 py-6 text-right font-[family-name:var(--font-mono)] tracking-wider whitespace-nowrap">{formatRupiah(o.total)}</td>
                      <td className="px-4 py-6">
                        <span
                          className="inline-block font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] uppercase px-3 py-1"
                          style={{ background: INK, color: CREAM }}
                        >
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

function Stat({ roman, label, value }: { roman: string; label: string; value: string }) {
  return (
    <div className="border-t pt-6" style={{ borderColor: `${INK}33` }}>
      <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: OCHRE }}>{roman} {label}</p>
      <p className="font-[family-name:var(--font-lora)] text-3xl">{value}</p>
    </div>
  );
}
