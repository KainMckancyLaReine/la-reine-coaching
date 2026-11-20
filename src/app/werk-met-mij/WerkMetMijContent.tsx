"use client";
import { asset } from "@/lib/asset";

import { Sparkles, Mic2, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import siteContent from "@/content/site.json";

const copy = siteContent["werk-met-mij"];

const WAYS = [
  {
    icon: Sparkles,
    title: copy["coaching-voice-activation"],
    description: copy["voor-als-je-er-klaar-voor-bent-om-niet-langer-klein-te-blijven"],
    cta: copy["werk-met-mij"],
    href: "/coaching-voice-activation",
  },
  {
    icon: Mic2,
    title: copy["spreker-keynotes"],
    description: copy["voor-organisaties-en-events-die-impact-willen-maken-met-een-bo"],
    cta: copy["boek-mij-als-spreker"],
    href: "/spreker",
  },
  {
    icon: Star,
    title: copy["vibes-voices"],
    description: copy["de-plek-waar-je-je-stem-oefent-in-een-veilige-ontspannen-setti"],
    cta: copy["ontdek-het-event"],
    href: "/vibes-voices",
  },
];

export function WerkMetMijContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["coaching-keynotes-events"])}
        title={t(copy["werk-met-mij-2"])}
        subtitle={t(copy["je-hoeft-het-niet-alleen-te-doen-je-hoeft-ook-niet-te-blijven"])}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t(COMMON.planFirstStep)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <PortraitFrame
            src={asset("/images/foto-4-workshop.jpg")}
            alt="Phaedra La Reine tijdens een workshop"
            accent="gold"
            rotate={-2}
            width={1800}
            height={1200}
            className="mx-auto w-full max-w-md"
          />
          <Reveal delay={0.1}>
            <p className="max-w-lg font-display text-[2.15rem] leading-[1.2] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
              {t(copy["dit-zijn-de-manieren-waarop-je-met-mij-kunt-werken"])}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
        <div className="space-y-8">
          {WAYS.map((way, i) => (
            <Reveal key={way.title.nl} delay={i * 0.08}>
              <div className="grid gap-8 rounded-3xl border border-line bg-paper p-9 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-forest">
                  <way.icon size={26} />
                </div>
                <div>
                  <h2 className="font-display text-[1.9rem] leading-snug tracking-[-0.015em] text-ink sm:text-[2.2rem]">
                    {t(way.title)}
                  </h2>
                  <p className="mt-4 max-w-2xl whitespace-pre-line text-[15px] leading-[1.75] text-ink-soft">
                    {t(way.description)}
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <Button href={way.href} variant="primary">
                    {t(way.cta)}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-24 text-center lg:py-32">
        <Reveal>
          <p className="mx-auto max-w-2xl whitespace-pre-line font-display text-[2rem] leading-[1.25] tracking-[-0.01em] text-ink sm:text-[2.4rem]">
            {t(copy["je-hoeft-niet-alles-in-een-keer-te-weten-je-hoeft-alleen-te-be"])}
          </p>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external variant="primary">
              {t(COMMON.planFirstStep)}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
