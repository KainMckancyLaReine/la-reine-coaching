"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-24 pt-24 lg:pb-32 lg:pt-32">
      <div
        aria-hidden
        className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-sage-200/50 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute top-32 left-[-8%] h-64 w-64 rounded-full bg-gold-100/60 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div
        className={`relative mx-auto max-w-4xl px-6 lg:px-8 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sage-700"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display mt-5 text-[2.5rem] leading-[1.06] tracking-[-0.025em] text-ink sm:text-[3.5rem] lg:text-[4.25rem]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-7 whitespace-pre-line text-[1.1875rem] leading-[1.75] text-ink-soft sm:text-xl ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`mt-11 flex flex-wrap gap-4 ${
              align === "center" ? "justify-center" : "justify-start"
            }`}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
