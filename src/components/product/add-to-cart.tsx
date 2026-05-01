"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useRouter } from "next/navigation";

export function AddToCartButton({ slug, label = "Add to cart" }: { slug: string; label?: string }) {
  const { add } = useCart();
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const onClick = () => {
    if (busy) return;
    setBusy(true);
    add(slug, 1);
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setBusy(false);
    }, 1200);
  };

  return (
    <button type="button" className="btn btn-invert w-full" onClick={onClick} disabled={busy}>
      {done ? "✓ Added" : label}
    </button>
  );
}

export function BuyNowButton({ slug }: { slug: string }) {
  const { add } = useCart();
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const onClick = () => {
    if (busy) return;
    setBusy(true);
    add(slug, 1);
    router.push("/checkout");
  };

  return (
    <button type="button" className="btn w-full" onClick={onClick} disabled={busy}>
      {busy ? "Loading..." : "Buy now"}
    </button>
  );
}
