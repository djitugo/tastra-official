"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function Design1Login() {
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
      if (ok) router.push("/design-1/admin");
      else {
        setError(true);
        setBusy(false);
      }
    }, 400);
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md border-2 border-black p-8 [box-shadow:8px_8px_0_0_#000]">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Admin</p>
        <h1 className="font-[family-name:var(--font-display)] uppercase text-4xl mt-2 tracking-tighter">Sign in.</h1>
        <p className="mt-3 text-sm text-black/70">Staff only. View and manage incoming orders.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest block mb-1">Username</span>
            <input name="username" required autoComplete="username" className="w-full border-2 border-black bg-white px-3 py-3 text-base font-[family-name:var(--font-mono)]" />
          </label>
          <label className="block">
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest block mb-1">Password</span>
            <input name="password" type="password" required autoComplete="current-password" className="w-full border-2 border-black bg-white px-3 py-3 text-base font-[family-name:var(--font-mono)]" />
          </label>
          {error && <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-red-600">Wrong username or password.</p>}
          <button type="submit" className="btn btn-invert w-full" disabled={busy}>{busy ? "Signing in..." : "Sign in →"}</button>
        </form>
      </div>
    </section>
  );
}
