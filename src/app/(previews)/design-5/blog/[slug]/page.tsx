"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { getPost, POSTS } from "@/lib/blog";
import { SmartImage } from "@/components/shared/smart-image";

const BEIGE_SOFT = "#f7f2e8";
const EASE = [0.22, 1, 0.36, 1] as const;
type Params = Promise<{ slug: string }>;

export default function Design5BlogPost({ params }: { params: Params }) {
  const { slug } = use(params);
  const post = getPost(slug);
  if (!post) return notFound();
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-4 text-[10px] tracking-[0.3em] uppercase opacity-60">
          <Link href="/design-5/blog" className="hover:opacity-100">Journal</Link>
          <span className="mx-3">/</span>
          <span>{post.category}</span>
        </div>
      </section>

      <article className="border-b border-black/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">{post.category} · {post.readMinutes} min read</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl mt-5 leading-[1.1] tracking-tight">{post.title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="relative aspect-[16/9] mt-10 overflow-hidden"
            style={{ background: BEIGE_SOFT }}
          >
            <SmartImage src={post.cover} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </motion.div>
          <div className="mt-12 space-y-6 text-lg leading-[1.9] opacity-80">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section>
          <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 md:py-20">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-8">Keep reading</p>
            <div className="grid sm:grid-cols-2 gap-px bg-black/10 border border-black/10">
              {more.map((p) => (
                <Link key={p.slug} href={`/design-5/blog/${p.slug}`} className="group block bg-white p-8 hover:opacity-70 transition-opacity">
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">{p.category}</p>
                  <h3 className="text-xl mt-3 leading-[1.2]">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
