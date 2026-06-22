"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

const CREAM = "#f5f1ea";
const INK = "#1a1a1a";
const GOLD = "#9a7b4f";

export default function Design2Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(false);
    const form = new FormData(e.currentTarget);
    const ok = login(String(form.get("username") ?? ""), String(form.get("password") ?? ""));
    setTimeout(() => {
      if (ok) router.push("/design-2/admin");
      else {
        setError(true);
        setBusy(false);
      }
    }, 400);
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md border p-10" style={{ borderColor: INK }}>
        <p className="text-[11px] tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>
          Atelier Access
        </p>
        <h1 className="font-[family-name:var(--font-serif)] text-4xl">
          Sign <em className="font-[family-name:var(--font-serif-alt)] font-light">in.</em>
        </h1>
        <p className="mt-4 text-sm leading-[1.7]" style={{ color: `${INK}99` }}>
          Staff only. View and manage incoming orders.
        </p>
        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          <label className="block">
            <span className="text-[11px] tracking-[0.3em] uppercase block mb-3" style={{ color: `${INK}99` }}>
              Username
            </span>
            <input
              name="username"
              required
              autoComplete="username"
              className="w-full bg-white px-4 text-base outline-none"
              style={{ border: `1px solid ${INK}`, color: INK, minHeight: 48 }}
            />
          </label>
          <label className="block">
            <span className="text-[11px] tracking-[0.3em] uppercase block mb-3" style={{ color: `${INK}99` }}>
              Password
            </span>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full bg-white px-4 text-base outline-none"
              style={{ border: `1px solid ${INK}`, color: INK, minHeight: 48 }}
            />
          </label>
          {error && (
            <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "#9a3b3b" }}>
              Wrong username or password.
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="flex items-center justify-center w-full min-h-[48px] py-4 text-[12px] tracking-[0.3em] uppercase disabled:opacity-50"
            style={{ background: INK, color: CREAM }}
          >
            {busy ? "Signing in..." : "Sign in →"}
          </button>
        </form>
      </div>
    </section>
  );
}
