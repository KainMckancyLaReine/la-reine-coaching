"use client";
import { asset } from "@/lib/asset";

import { Ear, Eye, Repeat, HeartHandshake, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PortraitFrame } from "@/components/PortraitFrame";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";

const APPROACH = [
  { icon: Ear, label: { nl: "je inner voice", en: "your inner voice" } },
  { icon: Eye, label: { nl: "je zichtbaarheid", en: "your visibility" } },
  { icon: Repeat, label: { nl: "je patronen", en: "your patterns" } },
  {
    icon: HeartHandshake,
    label: {
      nl: "hoe je spreekt vanuit rust en vertrouwen",
      en: "how you speak from calm and confidence",
    },
  },
];

const CHALLENGE_RESULTS = [
  { nl: "waar jij jezelf inhoudt", en: "where you hold yourself back" },
  { nl: "wat je tegenhoudt", en: "what's stopping you" },
  {
    nl: "wat er verandert als je je stem wél gebruikt",
    en: "what changes when you do use your voice",
  },
];

export function CoachingContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t({ nl: "Coaching & Voice Activation", en: "Coaching & Voice Activation" })}
        title={t({ nl: "Coaching & Voice Activation", en: "Coaching & Voice Activation" })}
        subtitle={t({
          nl: "Voor vrouwen die voelen dat ze zichzelf nog inhouden.",
          en: "For women who feel they're still holding themselves back.",
        })}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t(COMMON.planFirstStep)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="space-y-4 whitespace-pre-line leading-relaxed text-ink-soft">
              <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                {t({
                  nl: "Je hebt al veel gedaan.\nVeel gedragen.\nVeel opgelost.",
                  en: "You've already done a lot.\nCarried a lot.\nSolved a lot.",
                })}
              </p>
              <p>
                {t({
                  nl: "Maar ergens voel je dat je jezelf nog kleiner maakt dan nodig is.",
                  en: "But somewhere you feel you're still making yourself smaller than necessary.",
                })}
              </p>
              <p>
                {t({
                  nl: "Niet altijd zichtbaar voor anderen.\nMaar wel voelbaar voor jou.",
                  en: "Not always visible to others.\nBut very noticeable to you.",
                })}
              </p>
            </div>
          </Reveal>
          <PortraitFrame
            src={asset("/images/phaedra-lifestyle-call.jpg")}
            alt="Phaedra La Reine tijdens een coachingsessie"
            accent="gold"
            rotate={-2}
            width={1600}
            height={1066}
            className="mx-auto w-full max-w-md"
          />
        </div>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {t({
                nl: "Je hoeft niet harder je best te doen",
                en: "You don't have to try harder",
              })}
            </h2>
            <div className="mt-6 space-y-4 whitespace-pre-line leading-relaxed text-ink-soft">
              <p>
                {t({
                  nl: "Veel vrouwen denken dat ze sterker moeten worden.\nZelfverzekerder.\nBeter in spreken.",
                  en: "Many women think they need to become stronger.\nMore confident.\nBetter at speaking.",
                })}
              </p>
              <p>
                {t({
                  nl: "Maar vaak zit het probleem niet in vaardigheden.",
                  en: "But often the problem isn't in skills.",
                })}
              </p>
              <p>
                {t({
                  nl: "Het zit in het voortdurend aanpassen.\nTwijfelen.\nJezelf inhouden.",
                  en: "It's in constantly adapting.\nDoubting.\nHolding yourself back.",
                })}
              </p>
              <p className="font-display text-xl text-forest">
                {t({ nl: "En dat kost energie.", en: "And that costs energy." })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ nl: "Mijn aanpak", en: "My approach" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({
              nl: "Niet alleen aan wat je zegt. Maar aan hoe je jezelf laat zien.",
              en: "Not only what you say. But how you show yourself.",
            })}
          </h2>
          <p className="mt-6 text-ink-soft">{t({ nl: "We kijken naar:", en: "We look at:" })}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {APPROACH.map((item, i) => (
            <Reveal key={item.label.nl} delay={i * 0.08}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-line bg-paper p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                  <item.icon size={18} />
                </div>
                <p className="text-sm text-ink-soft">{t(item.label)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl whitespace-pre-line text-center font-display text-2xl leading-snug text-ink">
            {t({
              nl: "Zodat wat je denkt, voelt en zegt\nweer met elkaar klopt.",
              en: "So that what you think, feel and say\nadds up again.",
            })}
          </p>
        </Reveal>
      </section>

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel>{t({ nl: "Begin hier", en: "Start here" })}</SectionLabel>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">
                {t({
                  nl: "Start met de Stop Playing Small Challenge",
                  en: "Start with the Stop Playing Small Challenge",
                })}
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-xl space-y-4 whitespace-pre-line text-sage-100/85">
              <p>
                {t({
                  nl: "Soms hoef je niet meteen het hele antwoord te hebben.\nJe hoeft alleen een eerste stap te zetten.",
                  en: "Sometimes you don't need the whole answer right away.\nYou only have to take a first step.",
                })}
              </p>
              <p>
                {t({
                  nl: "In deze gratis challenge werk je vijf keer één-op-één met mij.\nOnline, persoonlijk en zonder druk.",
                  en: "In this free challenge you work one-on-one with me five times.\nOnline, personal and without pressure.",
                })}
              </p>
              <p className="font-semibold text-cream">
                {t({ nl: "Zo ontdek je:", en: "This is how you discover:" })}
              </p>
            </div>
            <ul className="mx-auto mt-4 max-w-xl space-y-2 text-sm text-sage-100/90">
              {CHALLENGE_RESULTS.map((r) => (
                <li key={r.nl} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-gold-200" />
                  {t(r)}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Button href={CALENDLY_URL} external variant="ghost">
                {t({
                  nl: "Stop playing small - Plan je eerste stap",
                  en: "Stop playing small - Book your first step",
                })}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {t({ nl: "Klaar voor de volgende stap?", en: "Ready for the next step?" })}
          </h2>
          <div className="mt-6 space-y-4 whitespace-pre-line leading-relaxed text-ink-soft">
            <p>
              {t({
                nl: "Voor vrouwen die dieper willen werken,\nbied ik persoonlijke coachingtrajecten aan.",
                en: "For women who want to go deeper,\nI offer personal coaching programmes.",
              })}
            </p>
            <p>
              {t({
                nl: "Geen standaard methode.\nMaar begeleiding afgestemd op waar jij nu staat.",
                en: "No standard method.\nBut guidance tailored to where you are now.",
              })}
            </p>
            <p>
              {t({
                nl: "Voor vrouwen die niet langer alleen willen begrijpen wat hen tegenhoudt,\nmaar daar daadwerkelijk doorheen willen bewegen.",
                en: "For women who no longer only want to understand what's holding them back,\nbut actually want to move through it.",
              })}
            </p>
            <p>
              {t({
                nl: "Coaching is mogelijk online en op locatie.",
                en: "Coaching is available online and on location.",
              })}
            </p>
          </div>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external variant="primary">
              {t({ nl: "Plan een kennismaking", en: "Book an intro call" })}
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel>{t({ nl: "Wat er verandert", en: "What changes" })}</SectionLabel>
            <div className="mt-6 space-y-4 whitespace-pre-line leading-relaxed text-ink-soft">
              <p>
                {t({
                  nl: "Je gaat jezelf niet ineens veranderen in iemand anders.",
                  en: "You're not suddenly going to turn into someone else.",
                })}
              </p>
              <p className="font-display text-2xl text-ink">
                {t({
                  nl: "Maar je gaat jezelf wel minder tegenhouden.",
                  en: "But you will hold yourself back less.",
                })}
              </p>
              <p>
                {t({
                  nl: "Je spreekt duidelijker.\nVoelt meer rust.\nNeemt meer ruimte in.",
                  en: "You speak more clearly.\nFeel more calm.\nTake up more space.",
                })}
              </p>
              <p>
                {t({
                  nl: "Niet omdat je harder wordt.\nMaar omdat je dichter bij jezelf blijft.",
                  en: "Not because you get harder.\nBut because you stay closer to yourself.",
                })}
              </p>
            </div>
            <div className="mt-8">
              <Button href={CALENDLY_URL} external variant="primary">
                {t({ nl: "Plan een kennismaking", en: "Book an intro call" })}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
        <Reveal>
          <SectionLabel>{t({ nl: "Je investering", en: "Your investment" })}</SectionLabel>
          <p className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            {t({
              nl: "Coachingtrajecten starten vanaf €1.997",
              en: "Coaching programmes start from €1,997",
            })}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            {t({
              nl: "Omdat ieder traject persoonlijk maatwerk is, bespreken we samen wat past bij waar jij nu staat.",
              en: "Because every programme is personal and tailor-made, we discuss together what fits where you are now.",
            })}
          </p>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external variant="primary">
              {t({
                nl: "Stop playing small - Plan je eerste stap",
                en: "Stop playing small - Book your first step",
              })}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
