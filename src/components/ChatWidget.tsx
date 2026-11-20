"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, MessageCircleHeart, X } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/nav";
import siteContent from "@/content/site.json";

const copy = siteContent["ChatWidget"];

type Text = { nl: string; en: string };
type Faq = {
  question: Text;
  answer: Text;
  cta: { label: Text; href: string; external?: boolean };
};

const GREETING: Text = copy["hoi-fijn-dat-je-er-bent-kies-hieronder-een-vraag-dan-geef-ik-j"];

const FAQS: Faq[] = [
  {
    question: copy["wat-is-voice-activation-coaching"],
    answer: copy["voice-activation-coaching-helpt-je-stoppen-met-jezelf-klein-ho"],
    cta: {
      label: copy["lees-meer-over-coaching"],
      href: "/coaching-voice-activation",
    },
  },
  {
    question: copy["hoe-kan-ik-het-beste-beginnen"],
    answer: copy["start-met-de-gratis-stop-playing-small-challenge-je-werkt-vijf"],
    cta: {
      label: copy["plan-je-eerste-stap"],
      href: CALENDLY_URL,
      external: true,
    },
  },
  {
    question: copy["wat-kost-een-coachingtraject"],
    answer: copy["coachingtrajecten-starten-vanaf-1-997-ieder-traject-is-persoon"],
    cta: {
      label: copy["plan-een-kennismaking"],
      href: CALENDLY_URL,
      external: true,
    },
  },
  {
    question: copy["kan-ik-phaedra-boeken-als-spreker"],
    answer: copy["ja-phaedra-geeft-keynotes-en-workshops-live-en-online-in-het-n"],
    cta: {
      label: copy["bekijk-de-sprekerspagina"],
      href: "/spreker",
    },
  },
  {
    question: copy["wat-is-vibes-voices"],
    answer: copy["vibes-voices-is-een-storytelling-pop-up-cafe-in-amsterdam-noor"],
    cta: {
      label: copy["ontdek-vibes-voices"],
      href: "/vibes-voices",
    },
  },
];

export function ChatWidget() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const faq = active === null ? null : FAQS[active];

  return (
    <>
      <motion.button
        aria-label={t(copy["veelgestelde-vragen"])}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-[0_12px_30px_-8px_rgba(18,74,59,0.55)]"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircleHeart size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex max-h-[min(34rem,calc(100vh-8rem))] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_24px_60px_-16px_rgba(43,38,32,0.25)]"
          >
            <div className="flex items-center justify-between bg-forest px-5 py-4 text-cream">
              <div>
                <p className="font-display text-lg">
                  {t(copy["stel-je-vraag"])}
                </p>
                <p className="text-xs text-sage-100/80">
                  {t(copy["veelgestelde-vragen-2"])}{" "}
                  &middot; La Reine Coaching
                </p>
              </div>
              <button
                aria-label={t(copy["sluiten"])}
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-cream/80 hover:text-cream"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-sage-50/60 px-4 py-4">
              <p className="max-w-[90%] rounded-2xl border border-line bg-paper px-4 py-2.5 text-sm leading-relaxed text-ink">
                {t(GREETING)}
              </p>

              {faq ? (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl bg-forest px-4 py-2.5 text-sm leading-relaxed text-cream">
                      {t(faq.question)}
                    </p>
                  </div>
                  <div className="max-w-[90%] rounded-2xl border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-ink">
                    <p>{t(faq.answer)}</p>
                    {faq.cta.external ? (
                      <a
                        href={faq.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 font-medium text-forest underline-offset-4 hover:underline"
                      >
                        {t(faq.cta.label)}
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <Link
                        href={faq.cta.href}
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex items-center gap-1 font-medium text-forest underline-offset-4 hover:underline"
                      >
                        {t(faq.cta.label)}
                        <ArrowUpRight size={14} />
                      </Link>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-ink-soft hover:text-forest"
                  >
                    <ChevronLeft size={14} />
                    {t(copy["andere-vraag-kiezen"])}
                  </button>
                </motion.div>
              ) : (
                <div className="flex flex-col items-end gap-2">
                  {FAQS.map((item, i) => (
                    <button
                      key={item.question.nl}
                      type="button"
                      onClick={() => setActive(i)}
                      className="max-w-[90%] rounded-2xl border border-sage-300 bg-paper px-4 py-2 text-left text-sm text-forest transition-colors hover:bg-sage-100"
                    >
                      {t(item.question)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-line bg-paper px-4 py-3 text-center text-xs text-ink-soft">
              {t(copy["staat-je-vraag-er-niet-bij"])}{" "}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="font-medium text-forest underline underline-offset-4"
              >
                {t(copy["stuur-phaedra-een-bericht"])}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
