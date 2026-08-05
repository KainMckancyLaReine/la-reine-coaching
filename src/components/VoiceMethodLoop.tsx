"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Step = {
  letter: string;
  word: string;
  detail: string;
};

const DURATION = 4200;

export function VoiceMethodLoop({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % steps.length);
      setCycleKey((k) => k + 1);
    }, DURATION);
    return () => clearTimeout(timer);
  }, [active, paused, steps.length]);

  function selectStep(index: number) {
    setActive(index);
    setCycleKey((k) => k + 1);
  }

  const current = steps[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden rounded-[2.5rem] border border-cream/15 bg-cream/5 backdrop-blur-sm"
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={`ghost-${active}`}
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 0.06, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 1.1, rotate: 6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[16rem] leading-none text-cream sm:text-[20rem]"
          aria-hidden
        >
          {current.letter}
        </motion.span>
      </AnimatePresence>

      <div className="relative flex flex-wrap items-center justify-center gap-2 px-6 pt-8 sm:gap-3">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={step.letter}
              onClick={() => selectStep(i)}
              aria-label={step.word}
              className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full font-display text-lg transition-colors sm:h-12 sm:w-12 ${
                isActive
                  ? "text-forest-deep"
                  : "text-cream/50 hover:text-cream/80"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="voice-loop-active"
                  className="absolute inset-0 rounded-full bg-gold-200"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{step.letter}</span>
              {isActive && (
                <svg
                  className="pointer-events-none absolute inset-0 -rotate-90"
                  viewBox="0 0 44 44"
                >
                  <motion.circle
                    key={cycleKey}
                    cx="22"
                    cy="22"
                    r="20"
                    fill="none"
                    stroke="rgba(18,74,59,0.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 20}
                    initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[11rem] px-8 py-10 text-center sm:min-h-[9rem] sm:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-2xl text-cream sm:text-3xl">
              <span className="text-gold-200">{current.letter}</span> —{" "}
              {current.word}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-sage-100/80">
              {current.detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
