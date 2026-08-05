"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function EventShowcase({
  mainSrc,
  mainAlt,
  secondarySrc,
  secondaryAlt,
  caption,
}: {
  mainSrc: string;
  mainAlt: string;
  secondarySrc: string;
  secondaryAlt: string;
  caption: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-10">
      {/* ambient glow blobs */}
      <div
        aria-hidden
        className="absolute -top-10 left-[-6%] h-56 w-56 rounded-full bg-gold-200/40 blur-3xl animate-float sm:h-72 sm:w-72"
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] right-[-6%] h-56 w-56 rounded-full bg-sage-200/50 blur-3xl animate-float sm:h-72 sm:w-72"
        style={{ animationDelay: "2s" }}
      />

      {/* twinkling accent dots */}
      {[
        { top: "6%", left: "2%", size: 10, delay: 0 },
        { top: "18%", right: "-2%", size: 7, delay: 0.6 },
        { bottom: "10%", left: "-3%", size: 8, delay: 1.2 },
        { bottom: "22%", right: "4%", size: 6, delay: 1.8 },
      ].map((dot, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full bg-gold-500/70"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            width: dot.size,
            height: dot.size,
          }}
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.25, 1, 0.25], scale: [0.85, 1.15, 0.85] }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* secondary card peeking from behind */}
        <motion.div
          aria-hidden
          className="absolute -left-6 top-10 hidden w-32 -rotate-[10deg] overflow-hidden rounded-2xl border border-line/70 shadow-[0_20px_40px_-20px_rgba(43,38,32,0.4)] sm:block sm:w-40"
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <div className="relative aspect-[9/16]">
            <Image
              src={secondarySrc}
              alt={secondaryAlt}
              fill
              className="object-cover"
              sizes="10rem"
            />
          </div>
        </motion.div>

        {/* main photo */}
        <motion.div
          className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-line/70 bg-paper shadow-[0_40px_90px_-30px_rgba(43,38,32,0.4)]"
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={mainSrc}
            alt={mainAlt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 36rem, 90vw"
            priority
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10"
          />
        </motion.div>

        {/* caption chip overlapping the frame edge, outside the photo content */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 mx-auto mt-[-1.75rem] flex w-fit max-w-[90%] items-center gap-2 rounded-2xl border border-line bg-paper px-5 py-3 shadow-[0_20px_45px_-20px_rgba(43,38,32,0.35)] sm:ml-8"
        >
          <Sparkles className="shrink-0 text-gold-500" size={16} />
          <p className="font-display text-sm text-ink sm:text-base">
            {caption}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
