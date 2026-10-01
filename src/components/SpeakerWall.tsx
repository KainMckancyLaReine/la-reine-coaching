"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { asset } from "@/lib/asset";

export type SpeakerGroup = { title: string; names: string[] };

export function speakerSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function speakerSrc(name: string) {
  return asset(`/images/sprekers/${speakerSlug(name)}.jpg`);
}

export function SpeakerWall({ groups }: { groups: SpeakerGroup[] }) {
  const all = groups.flatMap((g) => g.names);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % all.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + all.length) % all.length));
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, all.length]);

  const starts = groups.map((_, gi) =>
    groups.slice(0, gi).reduce((sum, g) => sum + g.names.length, 0),
  );

  return (
    <>
      <div className="space-y-14">
        {groups.map((group, gi) => {
          const start = starts[gi];
          return (
            <div key={group.title}>
              <h3 className="font-display text-center text-[1.6rem] tracking-[-0.01em] text-ink">
                {group.title}
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {group.names.map((name, i) => (
                  <motion.button
                    key={name}
                    type="button"
                    onClick={() => setActive(start + i)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: (i % 5) * 0.05 }}
                    className="group relative aspect-[600/722] overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_16px_40px_-24px_rgba(43,38,32,0.35)] transition-transform duration-300 hover:-translate-y-1"
                    aria-label={name}
                  >
                    <Image
                      src={speakerSrc(name)}
                      alt={name}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={all[active]}
          >
            <button
              type="button"
              aria-label="Sluiten"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-forest"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>
            <button
              type="button"
              aria-label="Vorige"
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-forest sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                setActive((active - 1 + all.length) % all.length);
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative aspect-[600/722] w-full max-w-md overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={speakerSrc(all[active])} alt={all[active]} fill sizes="448px" className="object-cover" />
            </motion.div>
            <button
              type="button"
              aria-label="Volgende"
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-forest sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                setActive((active + 1) % all.length);
              }}
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
