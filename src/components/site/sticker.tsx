import { ReactNode } from "react";

export function Sticker({
  children,
  rotate = -8,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-block bg-black text-white font-mono uppercase text-[11px] font-bold tracking-widest px-3 py-1 border-2 border-black ${className}`}
    >
      {children}
    </span>
  );
}

export function Star({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" />
    </svg>
  );
}
