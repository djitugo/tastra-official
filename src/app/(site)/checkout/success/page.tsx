"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Star } from "@/components/site/sticker";

type Order = {
  id: string;
  total: number;
  customer?: { name?: string; email?: string };
};

export default function SuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("tastra-last-order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
      <Star size={64} className="mx-auto mb-6" />
      <p className="font-mono text-xs uppercase tracking-widest text-black/60">★ Order placed</p>
      <h1 className="display text-5xl md:text-7xl mt-3">Pesanan diterima.</h1>
      <p className="mt-4 text-lg text-black/70">
        Makasih banyak{order?.customer?.name ? `, ${String(order.customer.name)}` : ""}.
        Kami sudah catat pesanan kamu.
      </p>

      {order && (
        <div className="mt-10 border-2 border-black p-6 text-left max-w-md mx-auto">
          <dl className="font-mono text-sm space-y-2">
            <div className="flex justify-between">
              <dt className="text-black/60">Order ID</dt>
              <dd className="font-bold">{order.id}</dd>
            </div>
            {order.customer?.email && (
              <div className="flex justify-between">
                <dt className="text-black/60">Email</dt>
                <dd className="font-bold truncate ml-2">{String(order.customer.email)}</dd>
              </div>
            )}
            <div className="flex justify-between border-t-2 border-black pt-2 mt-2">
              <dt className="font-bold">Total</dt>
              <dd className="display text-xl">
                {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(order.total)}
              </dd>
            </div>
          </dl>
        </div>
      )}

      <p className="mt-6 text-xs font-mono uppercase tracking-widest text-black/60">
        Demo lokal — belum terhubung ke sistem pembayaran sungguhan.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn btn-ghost">Kembali ke beranda</Link>
        <Link href="/shop" className="btn btn-invert">Lanjut belanja →</Link>
      </div>
    </div>
  );
}
