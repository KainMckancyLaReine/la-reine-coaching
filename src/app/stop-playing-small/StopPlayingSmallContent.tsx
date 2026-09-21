"use client";
import { asset } from "@/lib/asset";

import { HelpCircle, EyeOff, Clock3, CircleSlash, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Testimonial } from "@/components/Testimonial";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";

const RECOGNITIONS = [
  {
    nl: "Je denkt na voordat je iets zegt.\nJe houdt je in.\nJe kiest je woorden zorgvuldig.",
    en: "You think before you say something.\nYou hold yourself back.\nYou choose your words carefully.",
  },
  {
    nl: "En toch…\nzeg je niet alles wat je eigenlijk wilt zeggen.",
    en: "And still…\nyou don't say everything you actually want to say.",
  },
  {
    nl: "Misschien wacht je op het juiste moment.\nOf tot je meer zekerheid voelt.\n\nMaar dat moment blijft uit.",
    en: "Maybe you're waiting for the right moment.\nOr until you feel more certain.\n\nBut that moment never comes.",
  },
  {
    nl: "En ondertussen speel je kleiner dan je bent.\n\nEn diep vanbinnen weet je: dit klopt niet.",
    en: "And in the meantime you play smaller than you are.\n\nAnd deep down you know: this isn't right.",
  },
];

const ROOT_CAUSES = [
  { icon: HelpCircle, title: { nl: "Twijfel", en: "Doubt" } },
  { icon: EyeOff, title: { nl: "Overtuigingen", en: "Beliefs" } },
  {
    icon: Clock3,
    title: {
      nl: "Momenten waarop je jezelf tegenhoudt",
      en: "Moments where you hold yourself back",
    },
  },
];

const RESULTS = [
  { nl: "zie je waar je jezelf tegenhoudt", en: "you see where you hold yourself back" },
  { nl: "begrijp je wat er speelt", en: "you understand what's going on" },
  { nl: "zet je een eerste stap die klopt", en: "you take a first step that feels right" },
];

const TESTIMONIALS = [
  {
    quote: { nl: "Ik hield mezelf klein. Nu niet meer.", en: "I kept myself small. Not anymore." },
    name: "Amara Rahman",
  },
  {
    quote: {
      nl: "Ik spreek me uit zonder mezelf kleiner te maken.",
      en: "I speak up without making myself smaller.",
    },
    name: "Marieke van Dongen",
  },
  { quote: { nl: "Niet perfect. Wel echt.", en: "Not perfect. But real." }, name: "Isabella Rossi" },
];

export function StopPlayingSmallContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t({ nl: "De challenge", en: "The challenge" })}
        title="Stop Playing Small"
        subtitle={t({
          nl: "Je weet dat er meer in je zit.\nDe vraag is: wat houdt je nog tegen?",
          en: "You know there's more in you.\nThe question is: what's still holding you back?",
        })}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t({ nl: "Start jouw eerste stap", en: "Start your first step" })}
        </Button>
        <Button href="/contact" variant="secondary">
          {t(COMMON.contact)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="whitespace-pre-line font-display text-3xl leading-snug text-ink sm:text-4xl">
              {t({
                nl: "Je hebt een stem.\nMaar ergens gebruik je die nog niet volledig.",
                en: "You have a voice.\nBut somewhere you're not using it fully yet.",
              })}
            </p>
          </Reveal>
          <PortraitFrame
            src={asset("/images/phaedra-lifestyle-call.jpg")}
            alt="Phaedra La Reine"
            accent="gold"
            rotate={-2}
            width={1600}
            height={1066}
            className="mx-auto w-full max-w-md"
          />
        </div>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t({ nl: "Je herkent dit", en: "You recognize this" })}</SectionLabel>
            <h2 className="text-balance font-display mt-3 text-3xl text-ink sm:text-4xl">
              {t({
                nl: "Niet alleen in wat je zegt, maar ook in wat je mist.",
                en: "Not only in what you say, but also in what you miss.",
              })}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {RECOGNITIONS.map((text, i) => (
              <Reveal key={text.nl} delay={i * 0.08}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5">
                  <CircleSlash className="mt-0.5 shrink-0 text-gold-500" size={18} />
                  <p className="whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                    {t(text)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>
            {t({ nl: "Het ligt niet aan je stem", en: "It's not about your voice" })}
          </SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Het zit in wat eronder ligt.", en: "It's in what lies underneath." })}
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {ROOT_CAUSES.map((cause, i) => (
            <Reveal key={cause.title.nl} delay={i * 0.1} className="h-full">
              <div className="flex h-full min-h-[15rem] flex-col items-center justify-center gap-6 rounded-3xl border border-line bg-paper px-8 py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                  <cause.icon size={24} />
                </div>
                <h3 className="text-balance font-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
                  {t(cause.title)}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel tone="light">
              {t({ nl: "Dit is waar het verandert", en: "This is where it changes" })}
            </SectionLabel>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 whitespace-pre-line text-sage-100/85">
              <p>
                {t({
                  nl: "Niet door harder je best te doen…\nmaar door te zien waar je jezelf inhoudt.\nEn daar stap voor stap doorheen te bewegen.",
                  en: "Not by trying harder…\nbut by seeing where you hold yourself back.\nAnd moving through it, step by step.",
                })}
              </p>
              <p>
                {t({
                  nl: "Zodat wat je denkt, voelt en zegt\nweer op een lijn komt.",
                  en: "So that what you think, feel and say\ncomes into alignment again.",
                })}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-cream/15 bg-cream/5 p-8 text-left backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-200">
                {t({ nl: "Begin hier", en: "Start here" })}
              </p>
              <div className="mt-4 space-y-4 whitespace-pre-line text-sm leading-relaxed text-sage-100/90">
                <p>
                  {t({
                    nl: "Je hoeft het niet alleen te doen.\nEn je hoeft ook niet te blijven waar je nu bent.",
                    en: "You don't have to do it alone.\nAnd you don't have to stay where you are now.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "In mijn gratis challenge werk je 5x één-op-één met mij.\nOnline, persoonlijk en zonder druk.",
                    en: "In my free challenge you work one-on-one with me 5 times.\nOnline, personal and without pressure.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "Geen theorie.\nMaar directe begeleiding waarin je ontdekt waar jij jezelf inhoudt en wat er verandert als je je stem wél gebruikt.",
                    en: "No theory.\nBut direct guidance in which you discover where you hold yourself back and what changes when you do use your voice.",
                  })}
                </p>
                <p className="font-semibold text-cream">
                  {t({ nl: "Na deze sessies:", en: "After these sessions:" })}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-sage-100/90">
                {RESULTS.map((r) => (
                  <li key={r.nl} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold-200" />
                    {t(r)}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external variant="ghost">
                  {t({
                    nl: "Stop playing small - Plan je eerste stap",
                    en: "Stop playing small - Book your first step",
                  })}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-10 whitespace-pre-line font-display text-xl italic text-gold-100">
              {t({
                nl: "Je hoeft het niet perfect te doen.\nJe hoeft alleen te beginnen.",
                en: "You don't have to do it perfectly.\nYou only have to begin.",
              })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {t({ nl: "Wat anderen zeggen", en: "What others say" })}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Testimonial
                key={testimonial.name}
                quote={t(testimonial.quote)}
                name={testimonial.name}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
