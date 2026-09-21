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

const SPEAKER_KIT_NL =
  "https://www.lareinecoaching.nl/_files/ugd/5e8b9a_d7bead146c014a63922b3ff9855eaa36.pdf";
const SPEAKER_KIT_EN =
  "https://www.lareinecoaching.nl/_files/ugd/5e8b9a_e8cd0e386f5d4535a390141cc220632d.pdf";
const IMPRESSION_VIDEO = "https://www.youtube.com/embed/Q8U-306eCUA";
const IMPRESSION_VIDEO_LINK = "https://youtu.be/Q8U-306eCUA";

const AUDIENCE = [
  {
    icon: Mic2,
    label: { nl: "hun stem meer willen gebruiken", en: "want to use their voice more" },
  },
  { icon: Eye, label: { nl: "zichtbaar willen zijn", en: "want to be visible" } },
  {
    icon: TrendingUp,
    label: {
      nl: "willen groeien in vertrouwen en impact",
      en: "want to grow in confidence and impact",
    },
  },
];

const THEMES = [
  { nl: "Stop Playing Small", en: "Stop Playing Small" },
  { nl: "Je stem gebruiken met impact", en: "Using your voice with impact" },
  { nl: "Zichtbaarheid en zelfvertrouwen", en: "Visibility and self-confidence" },
  { nl: "Persoonlijk leiderschap", en: "Personal leadership" },
];

const FAQ = [
  {
    q: { nl: "Wat kost een keynote?", en: "What does a keynote cost?" },
    a: {
      nl: "Prijs is op aanvraag en afhankelijk van het event.",
      en: "Price is on request and depends on the event.",
    },
  },
  {
    q: { nl: "Hoe lang duurt een keynote?", en: "How long is a keynote?" },
    a: {
      nl: "Afhankelijk van het programma, meestal 20–60 minuten.",
      en: "Depending on the programme, usually 20–60 minutes.",
    },
  },
  {
    q: { nl: "Spreekt Phaedra ook online?", en: "Does Phaedra also speak online?" },
    a: {
      nl: "Ja. Phaedra spreekt zowel live als online en zorgt ook daar voor interactie, betrokkenheid en impact.",
      en: "Yes. Phaedra speaks both live and online, and creates interaction, engagement and impact there too.",
    },
  },
  {
    q: { nl: "Is maatwerk mogelijk?", en: "Is customization possible?" },
    a: {
      nl: "Ja, elke keynote wordt afgestemd op het publiek.",
      en: "Yes, every keynote is tailored to the audience.",
    },
  },
  {
    q: {
      nl: "In welke talen worden de diensten aangeboden?",
      en: "In which languages are the services offered?",
    },
    a: {
      nl: "Phaedra spreekt zowel in het Nederlands als in het Engels.",
      en: "Phaedra speaks both Dutch and English.",
    },
  },
  {
    q: { nl: "Hoe kan ik Phaedra boeken?", en: "How can I book Phaedra?" },
    a: {
      nl: "Phaedra is te boeken via het contactformulier.",
      en: "Phaedra can be booked via the contact form.",
    },
  },
];

export function SprekerContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t({ nl: "Spreker & Keynotes", en: "Speaker & Keynotes" })}
        title={t({ nl: "Boek Phaedra als spreker", en: "Book Phaedra as a speaker" })}
        subtitle={t({
          nl: "Een keynote die raakt.\nEn iets in beweging zet.",
          en: "A keynote that moves you.\nAnd sets something in motion.",
        })}
      >
        <Button href="/contact" variant="primary">
          {t(COMMON.contact)}
        </Button>
        <Button href="#fragment" variant="secondary">
          {t({ nl: "Bekijk een fragment", en: "Watch a clip" })}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-balance whitespace-pre-line font-display text-2xl leading-snug text-ink sm:text-3xl">
              {t({
                nl: "Geen standaard verhaal.\nMaar een ervaring die mensen laat voelen\nwat er mogelijk is wanneer ze hun stem gebruiken.",
                en: "No standard story.\nBut an experience that makes people feel\nwhat's possible when they use their voice.",
              })}
            </p>
          </Reveal>
          <PortraitFrame
            src={asset("/images/phaedra-hero.jpg")}
            alt="Phaedra La Reine op het podium"
            accent="gold"
            rotate={-2}
            width={563}
            height={763}
            className="mx-auto w-full max-w-sm"
            priority
          />
        </div>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t({ nl: "Voor wie", en: "For whom" })}</SectionLabel>
            <h2 className="font-display mt-3 whitespace-pre-line text-3xl text-ink sm:text-4xl">
              {t({
                nl: "Voor organisaties en events\ndie meer willen dan inspiratie",
                en: "For organizations and events\nthat want more than inspiration",
              })}
            </h2>
            <p className="mt-6 text-ink-soft">
              {t({ nl: "Voor teams en groepen die:", en: "For teams and groups that:" })}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {AUDIENCE.map((item, i) => (
              <Reveal key={item.label.nl} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-line bg-paper p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                    <item.icon size={22} />
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">{t(item.label)}</p>
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

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel>{t({ nl: "Resultaten die spreken", en: "Results that speak" })}</SectionLabel>
            <p className="mt-6 text-sage-100/85">
              {t({
                nl: "De impact van een keynote of workshop van Phaedra La Reine:",
                en: "The impact of a keynote or workshop by Phaedra La Reine:",
              })}
            </p>
            <p className="font-display mt-4 text-2xl leading-snug sm:text-3xl">
              {t({
                nl: "Mensen luisteren niet alleen. Ze voelen wat er voor hen mogelijk is en gaan bewegen.",
                en: "People don't just listen. They feel what's possible for them and start moving.",
              })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ nl: "Thema's", en: "Themes" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Thema's waar ik over spreek", en: "Themes I speak about" })}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
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
              {t({
                nl: "Keynotes worden altijd afgestemd op het event",
                en: "Keynotes are always tailored to the event",
              })}
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                {t(COMMON.contact)}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="fragment" className="bg-sage-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t({ nl: "Bekijk een fragment", en: "Watch a clip" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
              {t({ nl: "Alle informatie op één plek", en: "All information in one place" })}
            </h2>
            <p className="mt-6 text-ink-soft">
              {t({
                nl: "Download de sprekerskit van Phaedra La Reine in het Nederlands of in het Engels. Of bekijk de video om een indruk te krijgen van Phaedra als spreker / trainer.",
                en: "Download Phaedra La Reine's speaker kit in Dutch or in English. Or watch the video to get an impression of Phaedra as a speaker / trainer.",
              })}
            </p>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_24px_60px_-24px_rgba(43,38,32,0.25)]">
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
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-3 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-sage-300"
              >
                <FileDown size={20} className="shrink-0 text-forest" />
                <span className="text-sm font-medium text-ink">
                  {t({ nl: "Sprekerskit Nederlands", en: "Sprekerskit Nederlands" })}
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
                <span className="text-sm font-medium text-ink">
                  {t({ nl: "Impressie video (NL)", en: "Impressie video (NL)" })}
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={SPEAKER_KIT_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-3 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:border-sage-300"
              >
                <FileDown size={20} className="shrink-0 text-forest" />
                <span className="text-sm font-medium text-ink">Speakerskit English</span>
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-dashed border-line bg-paper/60 p-5">
                <PlayCircle size={20} className="shrink-0 text-ink-faint" />
                <span className="text-sm font-medium text-ink-faint">
                  Speakers Reel (EN) (soon)
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {t({ nl: "Veelgestelde vragen", en: "Frequently asked questions" })}
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {FAQ.map((item, i) => (
            <Reveal key={item.q.nl} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-paper p-6">
                <p className="font-display text-lg text-ink">{t(item.q)}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(item.a)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {t({ nl: "Op zoek naar een spreker die raakt?", en: "Looking for a speaker who moves people?" })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            {t({
              nl: "Laten we samen kijken wat past bij jouw event.",
              en: "Let's look together at what fits your event.",
            })}
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
