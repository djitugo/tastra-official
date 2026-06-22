"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { POSTS } from "@/lib/blog";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const INK = "#2a1f17";
const OCHRE = "#b8956a";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design6Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: OCHRE }}>
            ⸻ Letters, Sent Occasionally
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl leading-[1.05]">
            The <span className="italic" style={{ color: OCHRE }}>Reading Room.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.9]" style={{ color: `${INK}B3` }}>
            Short essays on ingredients, on ritual, and on skin in a tropical
            climate. Read at your leisure; there is no hurry here.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-b" style={{ borderColor: `${INK}1F` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-24">
          <Reveal>
            <Link href={`/design-6/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <PlaceholderGraphic bg="#ebe2cf" fg="#2a1f17" label={featured.title} />
                <span className="absolute top-6 left-6 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: OCHRE }}>N° 01</span>
              </div>
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase opacity-60">{featured.category} · {featured.readMinutes} min read</p>
                <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl mt-4 leading-[1.2] group-hover:opacity-70 transition-opacity">{featured.title}</h2>
                <p className="mt-5 text-[15px] leading-[1.9]" style={{ color: `${INK}B3` }}>{featured.excerpt}</p>
                <span className="mt-8 inline-block font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase border-b pb-1.5" style={{ borderColor: INK }}>
                  Read the Letter →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* REST */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16 py-20 md:py-28">
          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
            {rest.map((post, i) => (
              <RevealItem key={post.slug}>
                <Link href={`/design-6/blog/${post.slug}`} className="group block">
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: EASE }} className="relative aspect-[16/10] mb-6 overflow-hidden">
                    <PlaceholderGraphic bg="#ebe2cf" fg="#2a1f17" label={post.title} />
                  </motion.div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: OCHRE }}>
                    N° 0{i + 2} · {post.category} · {post.readMinutes} min
                  </p>
                  <h3 className="font-[family-name:var(--font-lora)] text-2xl leading-tight group-hover:opacity-70 transition-opacity">{post.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85]" style={{ color: `${INK}99` }}>{post.excerpt}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
