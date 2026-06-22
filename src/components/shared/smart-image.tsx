"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SmartImageProps = Omit<ImageProps, "onError"> & {
  /** Optional label shown inside the placeholder graphic. */
  placeholderLabel?: string;
};

// Renders a graphic fallback when the source is missing or fails to load,
// so a broken path never shows the browser's broken-image icon.
export function SmartImage({ src, alt, placeholderLabel, className, fill, width, height, sizes, priority, ...rest }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const missing = !src || src === "";

  if (missing || failed) {
    return (
      <div
        className={`flex items-center justify-center ${fill ? "absolute inset-0" : ""} ${className ?? ""}`}
        style={!fill && width && height ? { width, height } : undefined}
        aria-label={typeof alt === "string" ? alt : placeholderLabel}
        role="img"
      >
        <svg viewBox="0 0 64 64" className="w-1/3 h-1/3 opacity-30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="6" y="10" width="52" height="44" rx="4" />
          <circle cx="22" cy="26" r="5" />
          <path d="M10 48l14-14 10 10 8-8 12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
