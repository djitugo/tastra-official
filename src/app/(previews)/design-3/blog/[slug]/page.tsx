"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { getPost, POSTS } from "@/lib/blog";
import { PlaceholderGraphic } from "@/components/shared/placeholder-graphic";

const PEACH = "#fff5ee";
const PEACH_DEEP = "#ffe0d0";
const ROSE_DEEP = "#e88c89";
const INK = "#3a2a1f";
const EASE = [0.22, 1, 0.36, 1] as const;

type Params = Promise<{ slug: string }>;

export default function Design3BlogPost({ params }: { params: Params }) {
  const { slug } = use(params);
  const post = getPost(slug);
  if (!post) return notFound();
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-16 py-6 text-xs font-semibold" style={{ color: `${INK}99` }}>
          <Link href="/design-3/blog" className="hover:opacity-60">Blog</Link>
          <span className="mx-2">·</span>
          <span style={{ color: INK }}>{post.category}</span>
        </div>
      </section>

      <article>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-16 py-10 md:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ROSE_DEEP }}>
              {post.category} · {post.readMinutes} min read
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 leading-[1.1]">{post.title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative aspect-[16/9] rounded-[36px] overflow-hidden mt-8"
          >
            <PlaceholderGraphic bg={PEACH_DEEP} fg={INK} label={post.category} />
          </motion.div>
          <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: `${INK}CC` }}>
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>

      <section style={{ background: "#fff" }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-16 py-16 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6">Keep reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/design-3/blog/${p.slug}`}
                className="block rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: PEACH }}
              >
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ROSE_DEEP }}>{p.category}</p>
                <h3 className="text-lg font-extrabold tracking-tight mt-2">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
