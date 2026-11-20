"use client";
import { asset } from "@/lib/asset";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CertificationShowcase } from "@/components/CertificationShowcase";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import siteContent from "@/content/site.json";

const copy = siteContent["over-mij"];

const TRAITS = [
  {
    icon: "/images/icons/zwanger.png",
    nl: "Ik was 18 toen ik ontdekte dat ik 6 maanden zwanger was",
    en: "I was 18 when I found out I was 6 months pregnant",
  },
  {
    icon: "/images/icons/carriere.png",
    nl: "Ik maakte na mijn 40ste een complete carrièreswitch",
    en: "After turning 40 I made a complete career switch",
  },
  {
    icon: "/images/icons/vastgoed.png",
    nl: "Meer dan 16 jaar werkte ik in de vastgoedwereld",
    en: "For more than 16 years I worked in real estate",
  },
  {
    icon: "/images/icons/doorgaan.png",
    nl: "Toen niemand meer in mij geloofde, ging ik toch door",
    en: "When nobody believed in me anymore, I kept going anyway",
  },
  {
    icon: "/images/icons/studie.png",
    nl: "Ik begon aan een studie zonder te weten hoe ik het zou betalen",
    en: "I started a study without knowing how I would pay for it",
  },
  {
    icon: "/images/icons/motto.png",
    nl: "Mijn motto: vallen is niet erg, blijven liggen wel",
    en: "My motto: falling is fine, staying down is not",
  },
];

export function OverMijContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["phaedra-la-reine"])}
        title={t(copy["over-mij"])}
        subtitle={t(copy["ik-help-mensen-stoppen-met-zichzelf-klein-houden-zodat-ze-hun"])}
        align="left"
      />

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl border border-line bg-paper p-8 sm:flex-row sm:items-start sm:p-10">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-sage-100">
              <Image
                src={asset("/images/foto-9-headshot.jpg")}
                alt="Phaedra La Reine"
                width={200}
                height={200}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="space-y-5 text-[15px] leading-[1.75] text-ink-soft">
              <h2 className="font-display text-[1.75rem] leading-snug tracking-[-0.01em] text-ink">
                {t(copy["mijn-naam-is-phaedra-la-reine"])}
              </h2>
              <p>
                {t(copy["ik-ben-spreker-voice-activation-coach-en-de-enige-lisa-nichols"])}
              </p>
              <p>
                {t(copy["maar-boven-alles-ben-ik-iemand-die-weet-hoe-het-voelt-om-jezel"])}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-plum-50 via-cream to-cream py-16 lg:py-20">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-plum-300/20 blur-3xl"
        />
        <div className="relative px-6 lg:px-8">
          <CertificationShowcase
            photoSrc={asset("/images/lisa-nichols-badge.png")}
            photoAlt="Lisa Nichols Certified Transformational Trainer badge — Phaedra La Reine"
            verifyHref="https://motivatingthemasses.com/portfolio-item/phaedra-la-reine/"
            verifyLabel={t(copy["bekijk-officiele-verificatie"])}
            extraLine={t(copy["de-enige-in-nederland"])}
            eyebrow={t(copy["erkenning"])}
            title={t(copy["lisa-nichols-certified-transformational-trainer"])}
          />
        </div>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-8">
          <PortraitFrame
            src={asset("/images/phaedra-curacao.jpg")}
            alt="Phaedra La Reine"
            accent="sage"
            rotate={2}
            width={1600}
            height={1066}
            className="mx-auto w-full max-w-md"
          />
          <div>
            <Reveal>
              <SectionLabel>
                {t(copy["het-moment-waarop-alles-veranderde"])}
              </SectionLabel>
              <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
                {t(copy["ik-dacht-dat-ik-alles-wel-aankon"])}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 max-w-[62ch] space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
                <p>
                  {t(copy["ik-was-tienermoeder-geweest-ik-had-schulden-gehad-een-burn-out"])}
                </p>
                <p>{t(copy["en-toch-bleef-ik-doorgaan"])}</p>
                <p className="statement font-display text-2xl leading-snug text-forest sm:text-[1.75rem]">
                  {t(copy["tot-ik-hoorde-ik-wil-scheiden"])}
                </p>
                <p>
                  {t(copy["dat-was-het-moment-waarop-ik-besefte-dat-ik-jarenlang-vooral-h"])}
                </p>
                <p>
                  {t(copy["ik-was-bezig-met-zorgen-oplossen-en-doorgaan-maar-niet-meer-me"])}
                </p>
                <p>
                  {t(copy["ik-wilde-niet-alleen-doorgaan-ik-wilde-leven"])}
                </p>
                <p>
                  {t(copy["in-mijn-zoektocht-naar-geluk-rust-en-richting-ontdekte-ik-de-s"])}
                </p>
                <p>
                  {t(copy["wat-begon-als-persoonlijke-groei-werd-uiteindelijk-mijn-missie"])}
                </p>
                <p className="statement font-display text-2xl leading-snug text-forest sm:text-[1.75rem]">
                  {t(copy["ik-besloot-mezelf-niet-langer-klein-te-houden"])}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["wat-ik-nu-doe"])}
          </h2>
          <div className="mt-7 max-w-[62ch] space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
            <p>
              {t(copy["vandaag-werk-ik-als-spreker-en-coach-met-mensen-die-voelen-dat"])}
            </p>
            <p>
              {t(copy["niet-omdat-ze-niets-te-zeggen-hebben-maar-omdat-ze-zijn-gaan-t"])}
            </p>
            <p>
              {t(copy["in-mijn-werk-combineer-ik-persoonlijke-ontwikkeling-voice-acti"])}
            </p>
            <p>
              {t(copy["zodat-mensen-zichzelf-niet-langer-kleiner-maken-dan-nodig-is"])}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] sm:text-[3rem]">
              {t(copy["dit-ben-ik-ook"])}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {TRAITS.map((trait, i) => (
              <Reveal key={trait.nl} delay={i * 0.06}>
                <div className="flex h-full items-center gap-5 rounded-2xl border border-cream/15 bg-cream/5 p-6 text-[15px] leading-[1.7] text-sage-100/90">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cream">
                    <Image
                      src={asset(trait.icon)}
                      alt=""
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                    />
                  </span>
                  <span>{t(trait)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <Reveal>
          <p className="whitespace-pre-line font-display text-[2rem] italic leading-[1.25] text-ink sm:text-[2.4rem]">
            {t(copy["je-stem-verandert-meer-dan-alleen-wat-je-zegt"])}
          </p>
          <p className="mx-auto mt-5 max-w-xl whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
            {t(copy["het-verandert-hoe-je-jezelf-laat-zien-hoe-je-binnenkomt-en-hoe"])}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/werk-met-mij" variant="primary">
              {t(COMMON.workWithMe)}
            </Button>
            <Button href="/contact" variant="secondary">
              {t(COMMON.contact)}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
