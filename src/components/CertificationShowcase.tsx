"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { TransformationRings } from "@/components/TransformationRings";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.28, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function CertificationShowcase({
  photoSrc,
  photoAlt,
  verifyHref,
  verifyLabel,
  eyebrow,
  title,
  description,
  extraLine,
}: {
  photoSrc: string;
  photoAlt: string;
  verifyHref: string;
  verifyLabel: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  extraLine: string;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto flex max-w-xl flex-col items-center text-center"
    >
      <motion.div variants={item}>
        <TransformationRings src={photoSrc} alt={photoAlt} href={verifyHref} />
      </motion.div>

      <motion.p
        variants={item}
        className="mt-7 font-display text-lg italic text-plum-700"
      >
        {extraLine}
      </motion.p>

      <motion.a
        variants={item}
        href={verifyHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-plum-300/60 bg-plum-50 px-4 py-1.5 text-xs font-medium text-plum-700 transition-colors hover:border-plum-500 hover:bg-plum-100"
      >
        {verifyLabel}
        <ExternalLink size={12} />
      </motion.a>

      <motion.p
        variants={item}
        className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-plum-500"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={item}
        className="font-display mt-3 text-3xl text-ink sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.div variants={item} className="mt-4 text-ink-soft leading-relaxed">
        {description}
      </motion.div>
    </motion.div>
  );
}
