"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PortraitFrame({
  src,
  alt,
  accent = "sage",
  rotate = -3,
  priority = false,
  className = "",
  width = 1012,
  height = 1265,
}: {
  src: string;
  alt: string;
  accent?: "sage" | "gold";
  rotate?: number;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}) {
  const accentClass = accent === "sage" ? "bg-sage-200" : "bg-gold-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 rounded-[2rem] ${accentClass}`}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-line/60 shadow-[0_30px_70px_-30px_rgba(43,38,32,0.35)]"
        style={{ aspectRatio: `${width} / ${height}` }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
