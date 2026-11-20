"use client";
import { asset } from "@/lib/asset";
import Image from "next/image";

import { Heart, Eye, Repeat, HeartHandshake, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import siteContent from "@/content/site.json";

const copy = siteContent["coaching-voice-activation"];

const APPROACH = [
  { icon: Heart, label: copy["je-inner-voice"] },
  { icon: Eye, label: copy["je-zichtbaarheid"] },
  { icon: Repeat, label: copy["je-patronen"] },
  {
    icon: HeartHandshake,
    label: copy["hoe-je-spreekt-vanuit-rust-en-vertrouwen"],
  },
];

const CHALLENGE_RESULTS = [
  copy["waar-jij-jezelf-inhoudt"],
  copy["wat-je-tegenhoudt"],
  copy["wat-er-verandert-als-je-je-stem-wel-gebruikt"],
];

export function CoachingContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["een-op-een-traject"])}
        title={t(copy["coaching-voice-activation"])}
        subtitle={t(copy["voor-vrouwen-die-voelen-dat-ze-zichzelf-nog-inhouden"])}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t(COMMON.planFirstStep)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="max-w-[62ch] space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
              <p className="font-display text-[2.15rem] leading-[1.2] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
                {t(copy["je-hebt-al-veel-gedaan-veel-gedragen-veel-opgelost"])}
              </p>
              <p>
                {t(copy["maar-ergens-voel-je-dat-je-jezelf-nog-kleiner-maakt-dan-nodig"])}
              </p>
              <p>
                {t(copy["niet-altijd-zichtbaar-voor-anderen-maar-wel-voelbaar-voor-jou"])}
              </p>
            </div>
          </Reveal>
          <PortraitFrame
            src={asset("/images/foto-5-curacao.jpg")}
            alt="Phaedra La Reine"
            accent="gold"
            rotate={-2}
            width={1800}
            height={1200}
            className="mx-auto w-full max-w-md"
          />
        </div>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
              {t(copy["je-hoeft-niet-harder-je-best-te-doen"])}
            </h2>
            <div className="mt-7 max-w-[62ch] space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
              <p>
                {t(copy["veel-vrouwen-denken-dat-ze-sterker-moeten-worden-zelfverzekerd"])}
              </p>
              <p>
                {t(copy["maar-vaak-zit-het-probleem-niet-in-vaardigheden"])}
              </p>
              <p>
                {t(copy["het-zit-in-het-voortdurend-aanpassen-twijfelen-jezelf-inhouden"])}
              </p>
              <p className="font-display text-2xl leading-snug text-forest sm:text-[1.75rem]">
                {t(copy["en-dat-kost-energie"])}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t(copy["mijn-aanpak"])}</SectionLabel>
          <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["niet-alleen-wat-je-zegt-maar-hoe-je-jezelf-laat-zien"])}
          </h2>
          <p className="mt-7 text-[1.0625rem] leading-[1.8] text-ink-soft">{t(copy["we-kijken-naar"])}</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {APPROACH.map((item, i) => (
            <Reveal key={item.label.nl} delay={i * 0.08}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-line bg-paper px-6 py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                  <item.icon size={20} />
                </div>
                <p className="font-display text-lg leading-snug text-ink">{t(item.label)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl whitespace-pre-line text-center font-display text-[2rem] leading-[1.25] tracking-[-0.01em] text-ink sm:text-[2.4rem]">
            {t(copy["zodat-wat-je-denkt-voelt-en-zegt-weer-met-elkaar-klopt"])}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mx-auto mt-14 max-w-xl">
            <Image
              src={asset("/images/voice-methode.png")}
              alt={t(copy["de-v-o-i-c-e-methode-voice-awareness-own-your-story-inner-alig"])}
              width={937}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel tone="light">{t(copy["begin-hier"])}</SectionLabel>
              <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] sm:text-[3rem]">
                {t(copy["start-met-de-stop-playing-small-challenge"])}
              </h2>
            </div>
            <div className="mx-auto mt-9 max-w-xl space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-sage-100/85">
              <p>
                {t(copy["soms-hoef-je-niet-meteen-het-hele-antwoord-te-hebben-je-hoeft"])}
              </p>
              <p>
                {t(copy["in-deze-gratis-challenge-werk-je-vijf-keer-een-op-een-met-mij"])}
              </p>
              <p className="font-semibold text-cream">
                {t(copy["zo-ontdek-je"])}
              </p>
            </div>
            <ul className="mx-auto mt-5 max-w-xl space-y-3 text-[15px] leading-[1.7] text-sage-100/90">
              {CHALLENGE_RESULTS.map((r) => (
                <li key={r.nl} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-gold-200" />
                  {t(r)}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Button href={CALENDLY_URL} external variant="ghost">
                {t(copy["stop-playing-small-plan-je-eerste-stap"])}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["klaar-voor-de-volgende-stap"])}
          </h2>
          <div className="mt-7 max-w-[62ch] space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
            <p>
              {t(copy["voor-vrouwen-die-dieper-willen-werken-bied-ik-persoonlijke-coa"])}
            </p>
            <p>
              {t(copy["geen-standaard-methode-maar-begeleiding-afgestemd-op-waar-jij"])}
            </p>
            <p>
              {t(copy["voor-vrouwen-die-niet-langer-alleen-willen-begrijpen-wat-hen-t"])}
            </p>
            <p>
              {t(copy["coaching-is-mogelijk-online-en-op-locatie"])}
            </p>
          </div>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external variant="primary">
              {t(copy["plan-een-kennismaking"])}
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel>{t(copy["wat-er-verandert"])}</SectionLabel>
            <div className="mt-7 max-w-[62ch] space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
              <p>
                {t(copy["je-gaat-jezelf-niet-ineens-veranderen-in-iemand-anders"])}
              </p>
              <p className="font-display text-[1.9rem] leading-[1.3] text-ink">
                {t(copy["maar-je-gaat-jezelf-wel-minder-tegenhouden"])}
              </p>
              <p>
                {t(copy["je-spreekt-duidelijker-voelt-meer-rust-neemt-meer-ruimte-in"])}
              </p>
              <p>
                {t(copy["niet-omdat-je-harder-wordt-maar-omdat-je-dichter-bij-jezelf-bl"])}
              </p>
            </div>
            <div className="mt-8">
              <Button href={CALENDLY_URL} external variant="primary">
                {t(copy["plan-een-kennismaking-2"])}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
        <Reveal>
          <SectionLabel>{t(copy["je-investering"])}</SectionLabel>
          <p className="font-display mt-5 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["coachingtrajecten-starten-vanaf-1-997"])}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.8] text-ink-soft">
            {t(copy["omdat-ieder-traject-persoonlijk-maatwerk-is-bespreken-we-samen"])}
          </p>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external variant="primary">
              {t(copy["stop-playing-small-plan-je-eerste-stap-2"])}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
