"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

const CREAM = "#f7f1e6";
const INK = "#2a1f17";
const OCHRE = "#b8956a";

export default function Design6Login() {
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
      if (ok) router.push("/design-6/admin");
      else {
        setError(true);
        setBusy(false);
      }
    }, 400);
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8 text-center" style={{ color: OCHRE }}>
          ⸻ For Staff Alone ⸻
        </p>
        <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl text-center leading-[1.1]">
          Sign <span className="italic" style={{ color: OCHRE }}>in.</span>
        </h1>
        <p className="mt-6 text-[15px] leading-[1.85] text-center max-w-xs mx-auto" style={{ color: `${INK}B3` }}>
          The dashboard, where incoming orders are kept and tended.
        </p>

        <form onSubmit={onSubmit} className="mt-12 space-y-8">
          <label className="block">
            <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: OCHRE }}>Username</span>
            <input
              name="username"
              required
              autoComplete="username"
              className="w-full bg-transparent border px-4 py-3 text-[15px] outline-none focus:border-[#b8956a]"
              style={{ borderColor: INK, minHeight: 48 }}
            />
          </label>
          <label className="block">
            <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: OCHRE }}>Password</span>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full bg-transparent border px-4 py-3 text-[15px] outline-none focus:border-[#b8956a]"
              style={{ borderColor: INK, minHeight: 48 }}
            />
          </label>
          {error && (
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: "#a13d2d" }}>
              Incorrect username or password.
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="w-full min-h-11 py-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase transition-opacity disabled:opacity-50"
            style={{ background: INK, color: CREAM }}
          >
            {busy ? "Signing in..." : "Sign In →"}
          </button>
        </form>
      </div>
    </section>
  );
}
