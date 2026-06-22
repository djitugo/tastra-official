"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { POSTS } from "@/lib/blog";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";
import { Reveal, RevealStagger, RevealItem } from "@/components/preview/reveal";

const GREEN = "#2d5a3d";
const GREEN_LIGHT = "#e8efe8";
const INK = "#1a1f1a";
const CREAM = "#fafaf6";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Design4Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="py-16 md:py-24 border-b" style={{ background: GREEN_LIGHT, borderColor: `${INK}14` }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GREEN }}>✦ Journal</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: INK }}>The blog</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: `${INK}99` }}>
            Short reads on ingredients, routines, and caring for skin in a tropical climate.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 md:py-20" style={{ background: CREAM }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <Reveal>
            <Link
              href={`/design-4/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 rounded-3xl overflow-hidden transition-transform hover:-translate-y-1"
              style={{ background: CREAM, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden">
                <PlaceholderGraphic bg={GREEN_LIGHT} fg={GREEN} label={featured.category} />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: GREEN }}>{featured.category} · {featured.readMinutes} min read</p>
                <h2 className="text-2xl md:text-4xl font-extrabold mt-3 leading-tight" style={{ color: INK }}>{featured.title}</h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: `${INK}99` }}>{featured.excerpt}</p>
                <span className="mt-6 text-sm font-bold underline underline-offset-4" style={{ color: GREEN }}>Read more →</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 md:pb-28" style={{ background: CREAM }}>
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-16">
          <RevealStagger stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: EASE }}>
                  <Link
                    href={`/design-4/blog/${post.slug}`}
                    className="group block rounded-2xl overflow-hidden h-full"
                    style={{ background: CREAM, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <PlaceholderGraphic bg={GREEN_LIGHT} fg={GREEN} label={post.category} />
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: GREEN }}>{post.category} · {post.readMinutes} min</p>
                      <h3 className="text-xl font-extrabold mt-2 leading-tight" style={{ color: INK }}>{post.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed line-clamp-2" style={{ color: `${INK}99` }}>{post.excerpt}</p>
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
