"use client";
import { asset } from "@/lib/asset";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORD = "La Reine Coaching";
const MIN_DURATION = 1400;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = "";
    }, MIN_DURATION);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
        >
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ scale: 1.06, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <motion.span
              initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-100 ring-1 ring-inset ring-sage-300/50"
            >
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-gold-200/40"
                animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.35, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src={asset("/images/lion-mark.png")}
                alt=""
                width={44}
                height={31}
                className="relative h-[31px] w-11 object-contain"
                priority
              />
            </motion.span>

            <div className="mt-5 flex overflow-hidden">
              {WORD.split("").map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.35 + i * 0.025,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-lg text-forest sm:text-xl"
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </div>

            <div className="relative mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-line">
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-gold-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: MIN_DURATION / 1000 - 0.1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
