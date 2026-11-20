"use client";
import { asset } from "@/lib/asset";

import { Mic2, Eye, TrendingUp, FileDown, PlayCircle, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PortraitFrame } from "@/components/PortraitFrame";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import siteContent from "@/content/site.json";

const copy = siteContent["spreker"];

const SPEAKER_KIT_NL = asset("/downloads/sprekerskit-phaedra-la-reine-nl.pdf");
const SPEAKER_KIT_EN = asset("/downloads/speaker-kit-phaedra-la-reine-en.pdf");
const IMPRESSION_VIDEO = "https://www.youtube.com/embed/Q8U-306eCUA";
const IMPRESSION_VIDEO_LINK = "https://youtu.be/Q8U-306eCUA";

const AUDIENCE = [
  {
    icon: Mic2,
    label: copy["hun-stem-meer-willen-gebruiken"],
  },
  { icon: Eye, label: copy["zichtbaar-willen-zijn"] },
  {
    icon: TrendingUp,
    label: copy["willen-groeien-in-vertrouwen-en-impact"],
  },
];

const RESULTS = [
  copy["een-verhaal-dat-raakt-en-blijft-hangen"],
  copy["interactie-en-herkenning"],
  copy["een-verhaal-dat-je-in-beweging-brengt"],
];

const THEMES = [
  copy["stop-playing-small"],
  copy["je-stem-gebruiken-met-impact"],
  copy["zichtbaarheid-en-zelfvertrouwen"],
  copy["persoonlijk-leiderschap"],
];

const FAQ = [
  {
    q: copy["wat-kost-een-keynote"],
    a: copy["prijs-is-op-aanvraag-en-afhankelijk-van-het-event"],
  },
  {
    q: copy["hoe-lang-duurt-een-keynote"],
    a: copy["afhankelijk-van-het-programma-meestal-20-60-minuten"],
  },
  {
    q: copy["spreekt-phaedra-ook-online"],
    a: copy["ja-phaedra-spreekt-zowel-live-als-online-en-zorgt-ook-daar-voo"],
  },
  {
    q: copy["is-maatwerk-mogelijk"],
    a: copy["ja-elke-keynote-wordt-afgestemd-op-het-publiek"],
  },
  {
    q: copy["in-welke-talen-worden-de-diensten-aangeboden"],
    a: copy["phaedra-spreekt-zowel-in-het-nederlands-als-in-het-engels"],
  },
  {
    q: copy["hoe-kan-ik-phaedra-boeken"],
    a: copy["phaedra-is-te-boeken-via-het-contactformulier"],
  },
];

export function SprekerContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["spreker-keynotes"])}
        title={t(copy["boek-phaedra-als-spreker"])}
        subtitle={t(copy["een-keynote-die-raakt-en-iets-in-beweging-zet"])}
      >
        <Button href="/contact" variant="primary">
          {t(COMMON.contact)}
        </Button>
        <Button href="#fragment" variant="secondary">
          {t(copy["bekijk-een-fragment"])}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="whitespace-pre-line font-display text-[2.15rem] leading-[1.2] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
              {t(copy["geen-standaard-verhaal-maar-een-ervaring-die-mensen-laat-voele"])}
            </p>
          </Reveal>
          <PortraitFrame
            src={asset("/images/foto-7-spreker.jpg")}
            alt="Phaedra La Reine aan het woord"
            accent="gold"
            rotate={-2}
            width={1800}
            height={1200}
            className="mx-auto w-full max-w-md"
            priority
          />
        </div>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t(copy["voor-wie"])}</SectionLabel>
            <h2 className="font-display mt-4 whitespace-pre-line text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
              {t(copy["voor-organisaties-en-events-die-meer-willen-dan-inspiratie"])}
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.8] text-ink-soft">
              {t(copy["voor-teams-en-groepen-die"])}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {AUDIENCE.map((item, i) => (
              <Reveal key={item.label.nl} delay={i * 0.1}>
                <div className="flex h-full min-h-[13rem] flex-col items-center justify-center gap-5 rounded-3xl border border-line bg-paper px-8 py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                    <item.icon size={24} />
                  </div>
                  <p className="text-balance font-display text-[1.35rem] leading-snug text-ink">
                    {t(item.label)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              {t(COMMON.contact)}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel tone="light">
              {t(copy["resultaten-die-spreken"])}
            </SectionLabel>
            <p className="mt-7 text-[1.0625rem] leading-[1.8] text-sage-100/85">
              {t(copy["de-impact-van-een-keynote-of-workshop-van-phaedra-la-reine"])}
            </p>
            <p className="font-display mt-5 text-[2rem] leading-[1.25] sm:text-[2.4rem]">
              {t(copy["mensen-luisteren-niet-alleen-ze-voelen-wat-er-voor-hen-mogelij"])}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
            {RESULTS.map((r, i) => (
              <Reveal key={r.nl} delay={0.1 + i * 0.08} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-2xl border border-cream/15 bg-cream/5 p-5">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold-200" />
                  <p className="text-[15px] leading-[1.6] text-sage-100/90">{t(r)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t(copy["thema-s"])}</SectionLabel>
          <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["thema-s-waar-ik-over-spreek"])}
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {THEMES.map((theme, i) => (
            <Reveal key={theme.nl} delay={i * 0.08}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-line bg-paper p-5">
                <Check size={18} className="shrink-0 text-gold-500" />
                <p className="font-display text-lg text-ink">{t(theme)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-ink-soft">
              {t(copy["keynotes-worden-altijd-afgestemd-op-het-event"])}
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                {t(COMMON.contact)}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="fragment" className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t(copy["bekijk-een-fragment-2"])}</SectionLabel>
            <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
              {t(copy["alle-informatie-op-een-plek"])}
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.8] text-ink-soft">
              {t(copy["download-de-sprekerskit-van-phaedra-la-reine-in-het-nederlands"])}
            </p>
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_24px_60px_-24px_rgba(43,38,32,0.25)]">
              <div className="relative aspect-video w-full">
                <iframe
                  src={IMPRESSION_VIDEO}
                  title="Impressie video Phaedra La Reine"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <a
                href={SPEAKER_KIT_NL}
                download="Sprekerskit Phaedra La Reine NL.pdf"
                className="flex h-full items-center gap-3 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-sage-300"
              >
                <FileDown size={20} className="shrink-0 text-forest" />
                <span className="text-[15px] font-medium text-ink">
                  {t(copy["sprekerskit-nederlands"])}
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={IMPRESSION_VIDEO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-3 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-sage-300"
              >
                <PlayCircle size={20} className="shrink-0 text-forest" />
                <span className="text-[15px] font-medium text-ink">
                  {t(copy["impressie-video-nl"])}
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={SPEAKER_KIT_EN}
                download="Speaker kit Phaedra La Reine EN.pdf"
                className="flex h-full items-center gap-3 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-sage-300"
              >
                <FileDown size={20} className="shrink-0 text-forest" />
                <span className="text-[15px] font-medium text-ink">Speakerskit English</span>
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-dashed border-line bg-paper/60 p-5">
                <PlayCircle size={20} className="shrink-0 text-ink-faint" />
                <span className="text-[15px] font-medium text-ink-faint">
                  Speakers Reel (EN) (soon)
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["veelgestelde-vragen"])}
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {FAQ.map((item, i) => (
            <Reveal key={item.q.nl} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-paper px-7 py-6">
                <p className="font-display text-xl leading-snug text-ink">{t(item.q)}</p>
                <p className="mt-3 text-[15px] leading-[1.75] text-ink-soft">{t(item.a)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-24 text-center lg:py-32">
        <Reveal>
          <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["op-zoek-naar-een-spreker-die-raakt"])}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.8] text-ink-soft">
            {t(copy["laten-we-samen-kijken-wat-past-bij-jouw-event"])}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              {t(COMMON.contact)}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
