"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function designOf(pathname: string): string | null {
  const m = pathname.match(/^\/(design-[1-6])/);
  return m ? m[1] : null;
}

// Floating button, bottom right, that routes to the current design's contact page.
export function WhatsAppFab() {
  const pathname = usePathname();
  const design = designOf(pathname);
  if (!design) return null;

  return (
    <Link
      href={`/${design}/contact`}
      aria-label="Chat with us"
      className="fixed bottom-5 right-5 z-[90] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform hover:scale-110 active:scale-95"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C5 9.5 9.9 5 16 5s11 4.5 11 9.9-4.9 9.9-11 9.9zm5.5-7.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-1.8-.9-2.9-1.6-4.1-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.8.6-.1 1.8-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
      </svg>
    </Link>
  );
}
