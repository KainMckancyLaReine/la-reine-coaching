"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, MessageCircleHeart, X } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/nav";

type Text = { nl: string; en: string };
type Faq = {
  question: Text;
  answer: Text;
  cta: { label: Text; href: string; external?: boolean };
};

const GREETING: Text = {
  nl: "Hoi! Fijn dat je er bent. Kies hieronder een vraag, dan geef ik je meteen antwoord.",
  en: "Hi! Glad you're here. Pick a question below and I'll answer it right away.",
};

const FAQS: Faq[] = [
  {
    question: {
      nl: "Wat is Voice Activation Coaching?",
      en: "What is Voice Activation Coaching?",
    },
    answer: {
      nl: "Voice Activation Coaching helpt je stoppen met jezelf klein houden. Phaedra werkt met je aan drie lagen: je inner voice (je gedachten en overtuigingen), je public voice (zichtbaar worden en zeggen wat je echt wilt zeggen) en je collective voice (impact maken). Dat doet ze met haar eigen V.O.I.C.E. methode.",
      en: "Voice Activation Coaching helps you stop keeping yourself small. Phaedra works with you on three layers: your inner voice (your thoughts and beliefs), your public voice (becoming visible and saying what you really want to say) and your collective voice (making impact). She does this with her own V.O.I.C.E. method.",
    },
    cta: {
      label: { nl: "Lees meer over coaching", en: "Read more about coaching" },
      href: "/coaching-voice-activation",
    },
  },
  {
    question: {
      nl: "Hoe kan ik het beste beginnen?",
      en: "What's the best way to start?",
    },
    answer: {
      nl: "Start met de gratis Stop Playing Small Challenge. Je werkt vijf keer één-op-één met Phaedra, online, persoonlijk en zonder druk. Je ontdekt waar je jezelf inhoudt en wat er verandert als je je stem wél gebruikt.",
      en: "Start with the free Stop Playing Small Challenge. You work one-on-one with Phaedra five times, online, personal and without pressure. You discover where you hold yourself back and what changes when you do use your voice.",
    },
    cta: {
      label: { nl: "Plan je eerste stap", en: "Book your first step" },
      href: CALENDLY_URL,
      external: true,
    },
  },
  {
    question: {
      nl: "Wat kost een coachingtraject?",
      en: "What does a coaching programme cost?",
    },
    answer: {
      nl: "Coachingtrajecten starten vanaf €1.997. Ieder traject is persoonlijk maatwerk, dus in een vrijblijvend kennismakingsgesprek bespreken jullie samen wat past bij waar jij nu staat. Coaching kan online en op locatie.",
      en: "Coaching programmes start from €1,997. Every programme is tailor-made, so in a free intro call you discuss together what fits where you are now. Coaching is available online and on location.",
    },
    cta: {
      label: { nl: "Plan een kennismaking", en: "Book an intro call" },
      href: CALENDLY_URL,
      external: true,
    },
  },
  {
    question: {
      nl: "Kan ik Phaedra boeken als spreker?",
      en: "Can I book Phaedra as a speaker?",
    },
    answer: {
      nl: "Ja! Phaedra geeft keynotes en workshops, live en online, in het Nederlands en Engels. Een keynote duurt meestal 20 tot 60 minuten en wordt altijd afgestemd op je publiek. De prijs is op aanvraag.",
      en: "Yes! Phaedra gives keynotes and workshops, live and online, in Dutch and English. A keynote usually lasts 20 to 60 minutes and is always tailored to your audience. Price on request.",
    },
    cta: {
      label: { nl: "Bekijk de sprekerspagina", en: "View the speaker page" },
      href: "/spreker",
    },
  },
  {
    question: {
      nl: "Wat is Vibes & Voices?",
      en: "What is Vibes & Voices?",
    },
    answer: {
      nl: "Vibes & Voices is een storytelling pop-up café in Amsterdam Noord, elke eerste vrijdagavond van de maand. Sprekers krijgen 5 minuten op het podium (5 minutes of fame) en het publiek geniet met een drankje van echte verhalen. Je kunt komen luisteren of je aanmelden om zelf te spreken.",
      en: "Vibes & Voices is a storytelling pop-up café in Amsterdam Noord, every first Friday evening of the month. Speakers get 5 minutes on stage (5 minutes of fame) and the audience enjoys real stories with a drink. You can come and listen or sign up to speak yourself.",
    },
    cta: {
      label: { nl: "Ontdek Vibes & Voices", en: "Discover Vibes & Voices" },
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
        aria-label={t({ nl: "Veelgestelde vragen", en: "Frequently asked questions" })}
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
                  {t({ nl: "Stel je vraag", en: "Ask a question" })}
                </p>
                <p className="text-xs text-sage-100/80">
                  {t({ nl: "Veelgestelde vragen", en: "Frequently asked questions" })}{" "}
                  &middot; La Reine Coaching
                </p>
              </div>
              <button
                aria-label={t({ nl: "Sluiten", en: "Close" })}
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
                    {t({ nl: "Andere vraag kiezen", en: "Choose another question" })}
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
              {t({ nl: "Staat je vraag er niet bij?", en: "Question not listed?" })}{" "}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="font-medium text-forest underline underline-offset-4"
              >
                {t({ nl: "Stuur Phaedra een bericht", en: "Send Phaedra a message" })}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
