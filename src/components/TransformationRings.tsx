"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const PARTICLES = [
  { angle: 10, radius: 52, size: 6, delay: 0 },
  { angle: 60, radius: 48, size: 4, delay: 0.4 },
  { angle: 115, radius: 54, size: 5, delay: 0.8 },
  { angle: 165, radius: 49, size: 4, delay: 1.2 },
  { angle: 220, radius: 53, size: 6, delay: 1.6 },
  { angle: 275, radius: 47, size: 4, delay: 2.0 },
  { angle: 320, radius: 52, size: 5, delay: 2.4 },
];

export function TransformationRings({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const speed = hovered ? 0.45 : 1;

  const badge = (
    <div className="relative h-48 w-48 sm:h-56 sm:w-56">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain drop-shadow-[0_18px_35px_rgba(75,46,131,0.35)]"
        sizes="14rem"
      />
      {href && (
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-plum-700 text-cream shadow-lg"
        >
          <ArrowUpRight size={16} />
        </motion.span>
      )}
    </div>
  );

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
    >
      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="absolute inset-[-15%] rounded-full bg-plum-500/25 blur-3xl"
        animate={
          reduceMotion ? undefined : { opacity: [0.4, 0.75, 0.4], scale: [0.95, 1.08, 0.95] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* transformation pulse — sonar rings */}
      {!reduceMotion &&
        [0, 1.5].map((delay) => (
          <motion.div
            key={delay}
            aria-hidden
            className="absolute inset-2 rounded-full border border-plum-300/60"
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: [0.6, 0], scale: [0.9, 1.35] }}
            transition={{ duration: 3.6, repeat: Infinity, delay, ease: "easeOut" }}
          />
        ))}

      {/* outer gradient ring */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full p-[2px]"
        style={{
          background:
            "conic-gradient(from 0deg, #4b2e83, #c96bb0, #b79ae0, #4b2e83)",
        }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 26 * speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-full w-full rounded-full bg-cream" />
      </motion.div>

      {/* middle dashed ring, counter-rotating */}
      <motion.div
        aria-hidden
        className="absolute inset-6 rounded-full border-2 border-dashed border-plum-300/70"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 34 * speed, repeat: Infinity, ease: "linear" }}
      />

      {/* inner gradient ring */}
      <motion.div
        aria-hidden
        className="absolute inset-12 rounded-full p-[2px]"
        style={{
          background: "conic-gradient(from 90deg, #c96bb0, #7c4dbc, #ede4fa, #c96bb0)",
        }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18 * speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-full w-full rounded-full bg-cream" />
      </motion.div>

      {/* particles */}
      {!reduceMotion &&
        PARTICLES.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = 50 + p.radius * Math.cos(rad);
          const y = 50 + p.radius * Math.sin(rad);
          return (
            <motion.span
              key={i}
              aria-hidden
              className="absolute rounded-full bg-rose-purple"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.25, 0.7] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

      {/* badge */}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={alt}
          className="relative z-10"
        >
          {badge}
        </a>
      ) : (
        <div className="relative z-10">{badge}</div>
      )}
    </motion.div>
  );
}
