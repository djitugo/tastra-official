"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type OrderItem = {
  slug: string;
  name: string;
  qty: number;
  price: number;
};

export type Order = {
  id: string;
  createdAt: string;
  design: string;
  items: OrderItem[];
  total: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postal: string;
    notes?: string;
  };
  status: "paid";
};

const STORAGE_KEY = "tastra-orders-v1";

type OrdersCtx = {
  orders: Order[];
  ready: boolean;
  addOrder: (order: Omit<Order, "id" | "createdAt" | "status">) => Order;
  clearOrders: () => void;
};

const Ctx = createContext<OrdersCtx | null>(null);

function loadOrders(): Order[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setOrders(loadOrders());
    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setOrders(loadOrders());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const persist = useCallback((next: Order[]) => {
    setOrders(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const addOrder = useCallback<OrdersCtx["addOrder"]>(
    (draft) => {
      // Deterministic id without Date in render path; uses time only at call moment.
      const stamp = Date.now();
      const order: Order = {
        ...draft,
        id: `TST-${stamp.toString(36).toUpperCase()}`,
        createdAt: new Date(stamp).toISOString(),
        status: "paid",
      };
      setOrders((prev) => {
        const next = [order, ...prev];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
      return order;
    },
    [],
  );

  const clearOrders = useCallback(() => persist([]), [persist]);

  const value = useMemo<OrdersCtx>(() => ({ orders, ready, addOrder, clearOrders }), [orders, ready, addOrder, clearOrders]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useOrders(): OrdersCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useOrders must be used within OrdersProvider");
  return v;
}
