"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { getPost, POSTS } from "@/lib/blog";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";

const INK = "#1a1a1a";
const GOLD = "#9a7b4f";
const CREAM_DEEP = "#ede5d3";
const EASE = [0.22, 1, 0.36, 1] as const;
type Params = Promise<{ slug: string }>;

export default function Design2BlogPost({ params }: { params: Params }) {
  const { slug } = use(params);
  const post = getPost(slug);
  if (!post) return notFound();
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-4 text-[10px] tracking-[0.3em] uppercase opacity-60">
          <Link href="/design-2/blog" className="hover:opacity-100">
            Journal
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: INK }}>{post.category}</span>
        </div>
      </section>

      <article className="border-b" style={{ borderColor: `${INK}1A` }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
              {post.category} · {post.readMinutes} min read
            </p>
            <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl leading-[1.08]">{post.title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="relative aspect-[16/9] mt-10 overflow-hidden"
          >
            <PlaceholderGraphic bg={CREAM_DEEP} fg={INK} label={post.category} />
          </motion.div>
          <div className="mt-12 space-y-6 text-lg leading-[1.9]" style={{ color: `${INK}CC` }}>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 md:py-24">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>
            ⸻ Keep reading
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {more.map((p) => (
              <Link key={p.slug} href={`/design-2/blog/${p.slug}`} className="group block border-t pt-6" style={{ borderColor: INK }}>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>
                  {p.category}
                </p>
                <h3 className="font-[family-name:var(--font-serif)] text-xl leading-[1.2] group-hover:opacity-60 transition-opacity">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
