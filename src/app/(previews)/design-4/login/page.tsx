"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

const GREEN = "#2d5a3d";
const GREEN_SOFT = "#f4f7f3";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";

export default function Design4Login() {
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
      if (ok) router.push("/design-4/admin");
      else {
        setError(true);
        setBusy(false);
      }
    }, 400);
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16" style={{ background: CREAM }}>
      <div className="w-full max-w-md rounded-3xl p-8" style={{ background: GREEN_SOFT, boxShadow: "0 12px 40px rgba(45,90,61,0.12)" }}>
        <span className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: GREEN, color: CREAM }}>
          <span className="text-xl font-extrabold">T</span>
        </span>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>✦ Admin</p>
        <h1 className="text-3xl font-extrabold mt-2 tracking-tight" style={{ color: INK }}>Sign in</h1>
        <p className="mt-3 text-sm" style={{ color: `${INK}99` }}>Staff only. View and manage incoming orders.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: `${INK}99` }}>Username</span>
            <input
              name="username"
              required
              autoComplete="username"
              className="w-full rounded-xl border-2 bg-white px-4 py-3 text-base focus:outline-none"
              style={{ borderColor: "#d6e0d6", color: INK }}
            />
          </label>
          <label className="block">
            <span className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: `${INK}99` }}>Password</span>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-xl border-2 bg-white px-4 py-3 text-base focus:outline-none"
              style={{ borderColor: "#d6e0d6", color: INK }}
            />
          </label>
          {error && <p className="text-sm font-semibold" style={{ color: "#b91c1c" }}>Wrong username or password.</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-[1.02] disabled:opacity-50"
            style={{ background: GREEN, color: CREAM }}
          >
            {busy ? "Signing in..." : "Sign in →"}
          </button>
        </form>
      </div>
    </section>
  );
}
