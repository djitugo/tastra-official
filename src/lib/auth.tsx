"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// Demo auth. The credential lives client side because there is no backend yet.
// This is fine for testing the order dashboard, NOT safe for a real launch.
// Move to Supabase (server side) before going live.
const USERNAME = "tastra";
const PASSWORD = "Tastra@2026#!";
const SESSION_KEY = "tastra-admin-session";

type AuthCtx = {
  authed: boolean;
  ready: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setAuthed(sessionStorage.getItem(SESSION_KEY) === "1");
    } catch {}
    setReady(true);
  }, []);

  const login = useCallback((username: string, password: string) => {
    const ok = username.trim() === USERNAME && password === PASSWORD;
    if (ok) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
      setAuthed(true);
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {}
    setAuthed(false);
  }, []);

  const value = useMemo<AuthCtx>(() => ({ authed, ready, login, logout }), [authed, ready, login, logout]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used within AuthProvider");
  return v;
}
