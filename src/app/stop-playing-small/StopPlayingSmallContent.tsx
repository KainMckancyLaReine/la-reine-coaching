"use client";
import { asset } from "@/lib/asset";

import { HelpCircle, EyeOff, Clock3, CircleSlash } from "lucide-react";
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
    nl: "Je denkt na voordat je spreekt — en houdt jezelf in.",
    en: "You think before you speak — and hold yourself back.",
  },
  {
    nl: "Je kiest je woorden zorgvuldig, maar zegt niet alles wat je wil zeggen.",
    en: "You choose your words carefully, but don't say everything you want to say.",
  },
  {
    nl: "Je wacht op het juiste moment, of op meer zekerheid.",
    en: "You wait for the right moment, or for more certainty.",
  },
  {
    nl: "Je speelt kleiner dan wie je werkelijk bent.",
    en: "You play smaller than who you really are.",
  },
];

const ROOT_CAUSES = [
  {
    icon: HelpCircle,
    title: { nl: "Twijfel", en: "Doubt" },
    detail: {
      nl: "De stem in je hoofd die zegt: is dit wel goed genoeg?",
      en: "The voice in your head that says: is this even good enough?",
    },
  },
  {
    icon: EyeOff,
    title: { nl: "Overtuigingen", en: "Beliefs" },
    detail: {
      nl: "Oude ideeën over wie jij mag zijn en wat je mag innemen.",
      en: "Old ideas about who you're allowed to be and how much space you're allowed to take up.",
    },
  },
  {
    icon: Clock3,
    title: { nl: "Momenten", en: "Moments" },
    detail: {
      nl: "De specifieke situaties waarin je jezelf keer op keer tegenhoudt.",
      en: "The specific situations where you hold yourself back, time and again.",
    },
  },
];

const TESTIMONIALS = [
  { quote: { nl: "Ik hield mezelf klein. Nu niet meer.", en: "I kept myself small. Not anymore." }, name: "Amara Rahman" },
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
          nl: "Je weet dat er meer in je zit. De vraag is: wat houdt je nog tegen?",
          en: "You know there's more in you. The question is: what's still holding you back?",
        })}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t({ nl: "Begin hier", en: "Start here" })}
        </Button>
        <Button href="/contact" variant="secondary">
          {t(COMMON.contact)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-balance font-display text-2xl leading-snug text-ink sm:text-3xl">
              {t({
                nl: "Je hebt een stem. Maar ergens gebruik je die nog niet volledig.",
                en: "You have a voice. But somewhere, you're not using it fully yet.",
              })}
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              {t({
                nl: "Niet omdat je niets te zeggen hebt — maar omdat er iets is dat je nog inhoudt. De challenge helpt je precies te zien wat dat is.",
                en: "Not because you have nothing to say — but because something is still holding you back. The challenge helps you see exactly what that is.",
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
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
              {t({
                nl: "Niet alleen in wat je zegt, maar ook in wat je mist",
                en: "Not just in what you say, but in what you miss",
              })}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {RECOGNITIONS.map((text, i) => (
              <Reveal key={text.nl} delay={i * 0.08}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-paper p-5">
                  <CircleSlash className="mt-0.5 shrink-0 text-gold-500" size={18} />
                  <p className="text-sm leading-relaxed text-ink-soft">{t(text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ nl: "Het ligt niet aan je stem", en: "It's not about your voice" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Drie dingen houden je echt tegen", en: "Three things really hold you back" })}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ROOT_CAUSES.map((cause, i) => (
            <Reveal key={cause.title.nl} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-line bg-paper p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                  <cause.icon size={22} />
                </div>
                <h3 className="font-display mt-6 text-2xl text-ink">
                  {t(cause.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {t(cause.detail)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel>{t({ nl: "Dit is waar het verandert", en: "This is where it changes" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              {t({ nl: "Niet harder proberen. Anders kijken.", en: "Not trying harder. Looking differently." })}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sage-100/85">
              {t({
                nl: "Verandering komt niet door harder je best te doen, maar door de patronen te herkennen die je klein houden — en daar stap voor stap doorheen te bewegen.",
                en: "Change doesn't come from trying harder, but from recognizing the patterns that keep you small — and moving through them, step by step.",
              })}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-200">
                {t({ nl: "Begin hier", en: "Start here" })}
              </p>
              <h3 className="font-display mt-3 text-2xl">
                {t({ nl: "De gratis challenge", en: "The free challenge" })}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sage-100/85">
                {t({
                  nl: "5x één-op-één met mij. Je ziet waar je jezelf tegenhoudt, je begrijpt wat er speelt, en je zet een eerste stap die klopt.",
                  en: "5x one-on-one with me. You see where you hold yourself back, you understand what's going on, and you take a first step that feels right.",
                })}
              </p>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external variant="ghost">
                  {t(COMMON.planFirstStep)}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-10 font-display text-xl italic text-gold-100">
              {t({
                nl: "Je hoeft het niet perfect te doen. Je hoeft alleen te beginnen.",
                en: "You don't have to do it perfectly. You just have to begin.",
              })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t({ nl: "Wat anderen zeggen", en: "What others say" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
              {t({ nl: "Zij stopten met klein spelen", en: "They stopped playing small" })}
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
