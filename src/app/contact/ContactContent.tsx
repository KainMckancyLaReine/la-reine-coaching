"use client";
import { asset } from "@/lib/asset";

import { MessageCircleHeart, CalendarClock, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";

const OPTIONS = [
  {
    icon: Mail,
    title: { nl: "Stuur me een bericht", en: "Send me a message" },
    description: {
      nl: "Ik lees alles persoonlijk en kom bij je terug.",
      en: "I read everything personally and will get back to you.",
    },
  },
  {
    icon: MessageCircleHeart,
    title: { nl: "Korte vraag?", en: "Quick question?" },
    description: {
      nl: "Gebruik de chat. Ik reageer zo snel mogelijk.",
      en: "Use the chat. I'll reply as soon as possible.",
    },
  },
  {
    icon: CalendarClock,
    title: {
      nl: "Direct een vrijblijvende sessie plannen?",
      en: "Book a no-obligation session right away?",
    },
    description: {
      nl: "Gebruik de knop Plan je eerste stap.",
      en: "Use the Book your first step button.",
    },
  },
];

export function ContactContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={t({
          nl: "Heb je een vraag?\nOf twijfel je waar je moet beginnen?",
          en: "Do you have a question?\nOr are you unsure where to start?",
        })}
        subtitle={t({
          nl: "Je hoeft het niet alleen uit te zoeken.",
          en: "You don't have to figure it out alone.",
        })}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t(COMMON.planFirstStep)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {OPTIONS.map((opt, i) => (
            <Reveal key={opt.title.nl} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-paper p-6">
                <opt.icon className="text-forest" size={20} />
                <p className="mt-3 text-sm font-semibold text-ink">{t(opt.title)}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {t(opt.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <PortraitFrame
            src={asset("/images/phaedra-hero.jpg")}
            alt="Phaedra La Reine"
            accent="sage"
            rotate={2}
            width={563}
            height={763}
            className="mx-auto hidden w-full max-w-sm lg:block"
          />
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                {t({ nl: "Stuur me een bericht", en: "Send me a message" })}
              </h2>
              <div className="mt-4 space-y-3 whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                <p>
                  {t({
                    nl: "Ik lees alles persoonlijk en kom bij je terug.",
                    en: "I read everything personally and will get back to you.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "Vertel me waar je tegenaan loopt\nof waar je meer over wilt weten.",
                    en: "Tell me what you're running into\nor what you'd like to know more about.",
                  })}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
