"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useAuth } from "@/lib/auth";

const PEACH = "#fff5ee";
const ROSE = "#f4a8a4";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";

function Sparkle({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2 L13 10 L21 11 L13 13 L12 22 L11 13 L3 11 L11 10 Z" />
    </svg>
  );
}

const fieldClass = "w-full rounded-2xl bg-white px-4 py-3 text-base outline-none";
const fieldStyle = { border: "2px solid #ffe0d0" };

export default function Design3Login() {
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
      if (ok) router.push("/design-3/admin");
      else {
        setError(true);
        setBusy(false);
      }
    }, 400);
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md rounded-[36px] p-8 shadow-xl"
        style={{ background: "#fff" }}
      >
        <p className="text-sm font-bold mb-2 inline-flex items-center gap-2" style={{ color: ROSE_DEEP }}>
          <Sparkle size={14} /> Admin
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight">Welcome back!</h1>
        <p className="mt-2 text-sm" style={{ color: `${INK}99` }}>Staff only. View and manage incoming orders.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm font-bold block mb-1.5">Username</span>
            <input name="username" required autoComplete="username" className={fieldClass} style={fieldStyle} />
          </label>
          <label className="block">
            <span className="text-sm font-bold block mb-1.5">Password</span>
            <input name="password" type="password" required autoComplete="current-password" className={fieldClass} style={fieldStyle} />
          </label>
          {error && (
            <p className="text-sm font-bold rounded-2xl px-4 py-3" style={{ background: "#ffe0e0", color: ROSE_DEEP }}>
              Oops, wrong username or password.
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full px-7 py-4 font-bold text-sm disabled:opacity-50 transition-transform hover:scale-[1.02]"
            style={{ background: INK, color: PEACH }}
          >
            {busy ? "Signing in..." : "Sign in →"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
