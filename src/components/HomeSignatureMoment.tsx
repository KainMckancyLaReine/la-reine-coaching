"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function HomeSignatureMoment({
  src,
  alt,
  eyebrow,
  words,
  statement,
  children,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  words: string[];
  statement: string;
  children?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto w-full max-w-sm py-6">
          <div
            aria-hidden
            className="absolute left-[6%] top-0 h-[78%] w-[78%] rounded-[2.5rem] bg-gold-100"
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -right-4 h-32 w-32 rounded-full bg-sage-200/60 blur-2xl animate-float"
          />
          <motion.span
            aria-hidden
            className="absolute right-2 top-6 h-3 w-3 rounded-full bg-gold-500"
            animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="absolute bottom-16 left-0 h-2 w-2 rounded-full bg-sage-500"
            animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="relative aspect-[563/763] w-full overflow-hidden rounded-[2rem] border border-line/60 shadow-[0_40px_80px_-30px_rgba(43,38,32,0.4)] sm:w-[112%]"
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26rem, 80vw"
              />
            </motion.div>
          </motion.div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-700"
          >
            {eyebrow}
          </motion.p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="font-display text-4xl text-ink sm:text-5xl"
              >
                {word}
                {i < words.length - 1 && (
                  <span className="text-gold-500">.</span>
                )}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: words.length * 0.15 + 0.1 }}
            className="mt-6 max-w-md text-ink-soft leading-relaxed"
          >
            {statement}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: words.length * 0.15 + 0.25 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
