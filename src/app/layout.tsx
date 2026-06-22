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
import { AuthProvider } from "@/lib/auth";
import { OrdersProvider } from "@/lib/orders";
import { ScrollProvider } from "@/components/shared/scroll-context";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { PageTransition } from "@/components/shared/page-transition";
import { WhatsAppFab } from "@/components/shared/whatsapp-fab";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const display = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: ["400"], display: "swap" });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], display: "swap" });
const serifAlt = Cormorant_Garamond({ variable: "--font-serif-alt", subsets: ["latin"], weight: ["300", "400", "500", "600"], display: "swap" });
const rounded = Quicksand({ variable: "--font-rounded", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TASTRA Skincare",
  description: "Local skincare built for Indonesian skin. Natural ingredients, modern formulas.",
  metadataBase: new URL("https://tastraofficial.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable} ${serif.variable} ${serifAlt.variable} ${rounded.variable} ${jakarta.variable} ${lora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <OrdersProvider>
            <CartProvider>
              <ScrollProvider>
                <ScrollToTop />
                <PageTransition />
                {children}
                <WhatsAppFab />
              </ScrollProvider>
            </CartProvider>
          </OrdersProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
