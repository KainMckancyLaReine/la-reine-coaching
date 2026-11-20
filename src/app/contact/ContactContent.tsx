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
import siteContent from "@/content/site.json";

const copy = siteContent["contact"];

const OPTIONS = [
  {
    icon: Mail,
    title: copy["stuur-me-een-bericht"],
    description: copy["ik-lees-alles-persoonlijk-en-kom-bij-je-terug"],
  },
  {
    icon: MessageCircleHeart,
    title: copy["korte-vraag"],
    description: copy["bekijk-de-veelgestelde-vragen-in-de-chat-rechtsonder"],
  },
  {
    icon: CalendarClock,
    title: copy["direct-een-vrijblijvende-sessie-plannen"],
    description: copy["gebruik-de-knop-plan-je-eerste-stap"],
  },
];

export function ContactContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["contact"])}
        title={t(copy["heb-je-een-vraag-of-twijfel-je-waar-je-moet-beginnen"])}
        subtitle={t(copy["je-hoeft-het-niet-alleen-uit-te-zoeken"])}
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
                <p className="mt-4 text-base font-semibold text-ink">{t(opt.title)}</p>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-soft">
                  {t(opt.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <PortraitFrame
            src={asset("/images/foto-10-contact.jpg")}
            alt="Phaedra La Reine aan de telefoon"
            accent="sage"
            rotate={2}
            width={1800}
            height={1200}
            className="mx-auto w-full max-w-md lg:mt-4"
          />
          <div>
            <Reveal>
              <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.015em] text-ink sm:text-[2.4rem]">
                {t(copy["stuur-me-een-bericht-2"])}
              </h2>
              <div className="mt-5 space-y-5 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
                <p>
                  {t(copy["ik-lees-alles-persoonlijk-en-kom-bij-je-terug-2"])}
                </p>
                <p>
                  {t(copy["vertel-me-waar-je-tegenaan-loopt-of-waar-je-meer-over-wilt-wet"])}
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
