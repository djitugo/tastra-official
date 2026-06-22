"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

const INK = "#0a0a0a";

export default function Design5Login() {
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
      if (ok) router.push("/design-5/admin");
      else {
        setError(true);
        setBusy(false);
      }
    }, 400);
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-sm">
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6">Admin</p>
        <h1 className="text-4xl md:text-5xl leading-[1.05]">
          Sign <span className="italic font-[family-name:var(--font-serif-alt)]">in.</span>
        </h1>
        <p className="mt-5 text-sm leading-[1.8] opacity-70">
          Staff only. View and manage incoming orders.
        </p>
        <form onSubmit={onSubmit} className="mt-12 space-y-8">
          <label className="block">
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-3">Username</span>
            <input
              name="username"
              required
              autoComplete="username"
              className="w-full bg-white border border-black/15 px-3 py-3 text-sm outline-none focus:border-black transition-colors min-h-11"
            />
          </label>
          <label className="block">
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-3">Password</span>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full bg-white border border-black/15 px-3 py-3 text-sm outline-none focus:border-black transition-colors min-h-11"
            />
          </label>
          {error && (
            <p className="text-[11px] tracking-[0.2em] uppercase text-red-700" role="alert">
              Wrong username or password.
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="block w-full text-center min-h-11 py-4 text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50 hover:opacity-90 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{ background: INK, color: "#fff" }}
          >
            {busy ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
}
