"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { POSTS } from "@/lib/blog";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design1Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-black/60">★ Journal</p>
          <h1 className="font-[family-name:var(--font-display)] uppercase text-6xl md:text-8xl mt-3 tracking-tighter">The blog.</h1>
          <p className="mt-6 max-w-2xl text-black/70 text-base md:text-lg">Short reads on ingredients, routines, and skin in a tropical climate.</p>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Reveal>
            <Link href={`/design-1/blog/${featured.slug}`} className="group grid md:grid-cols-2 border-2 border-black bg-white hover:[box-shadow:8px_8px_0_0_#000] transition-shadow">
              <div className="relative aspect-[16/10] md:aspect-auto border-b-2 md:border-b-0 md:border-r-2 border-black overflow-hidden">
                <SmartImage src={featured.cover} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest text-black/50">{featured.category} · {featured.readMinutes} min read</p>
                <h2 className="font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl mt-3 tracking-tighter">{featured.title}</h2>
                <p className="mt-4 text-black/70">{featured.excerpt}</p>
                <span className="mt-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest underline underline-offset-4">Read more →</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <motion.div whileHover={{ y: -6, boxShadow: "6px 6px 0 0 #000" }} transition={{ duration: 0.2, ease: EASE }}>
                  <Link href={`/design-1/blog/${post.slug}`} className="group block border-2 border-black bg-white h-full">
                    <div className="relative aspect-[16/9] border-b-2 border-black overflow-hidden">
                      <SmartImage src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest text-black/50">{post.category} · {post.readMinutes} min</p>
                      <h3 className="font-[family-name:var(--font-display)] uppercase text-2xl mt-2 tracking-tight">{post.title}</h3>
                      <p className="mt-3 text-sm text-black/70 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
