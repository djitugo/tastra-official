import type { Metadata } from "next";
import {
  Inter,
  Space_Mono,
  Archivo_Black,
  Playfair_Display,
  Cormorant_Garamond,
  Quicksand,
  Plus_Jakarta_Sans,
  Lora,
} from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { DesignSwitcher } from "@/components/preview/design-switcher";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const display = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const serifAlt = Cormorant_Garamond({
  variable: "--font-serif-alt",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const rounded = Quicksand({
  variable: "--font-rounded",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TASTRA — Skincare Lokal, Hasil Beneran.",
  description:
    "Skincare lokal yang ngerti kulit Indonesia. Bahan alami, formula modern.",
  metadataBase: new URL("https://tastraofficial.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${sans.variable} ${mono.variable} ${display.variable} ${serif.variable} ${serifAlt.variable} ${rounded.variable} ${jakarta.variable} ${lora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <DesignSwitcher />
        </CartProvider>
      </body>
    </html>
  );
}
