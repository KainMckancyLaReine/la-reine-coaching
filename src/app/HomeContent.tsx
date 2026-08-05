"use client";
import { asset } from "@/lib/asset";

import { Ear, Megaphone, Users2, Sparkles, Compass, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { OfferCard } from "@/components/OfferCard";
import { Testimonial } from "@/components/Testimonial";
import { PortraitFrame } from "@/components/PortraitFrame";
import { VoiceMethodLoop } from "@/components/VoiceMethodLoop";
import { HomeSignatureMoment } from "@/components/HomeSignatureMoment";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";

const VOICES = [
  {
    icon: Ear,
    title: { nl: "Innerlijke stem", en: "Inner voice" },
    description: {
      nl: "Doorbreek de beperkende gedachten en het zelftwijfel die je nu nog tegenhouden om voluit te spreken.",
      en: "Break through the limiting thoughts and self-doubt that still hold you back from speaking fully.",
    },
  },
  {
    icon: Megaphone,
    title: { nl: "Publieke stem", en: "Public voice" },
    description: {
      nl: "Bouw zichtbare, authentieke zelfexpressie — zodat wat je zegt overeenkomt met wie je werkelijk bent.",
      en: "Build visible, authentic self-expression — so what you say matches who you really are.",
    },
  },
  {
    icon: Users2,
    title: { nl: "Collectieve stem", en: "Collective voice" },
    description: {
      nl: "Creëer impact en verbinding met anderen door je stem in te zetten voor iets groters dan jezelf.",
      en: "Create impact and connection with others by using your voice for something bigger than yourself.",
    },
  },
];

const METHOD_STEPS = [
  {
    letter: "V",
    word: { nl: "Voice awareness", en: "Voice awareness" },
    detail: {
      nl: "Je wordt je bewust van waar en waarom je jezelf inhoudt. Zonder oordeel. Met helderheid.",
      en: "You become aware of where and why you hold yourself back. Without judgment. With clarity.",
    },
  },
  {
    letter: "O",
    word: { nl: "Own your story", en: "Own your story" },
    detail: {
      nl: "Je stopt met aanpassen. En neemt eigenaarschap over wat je denkt, voelt en te zeggen hebt.",
      en: "You stop adjusting yourself. And take ownership of what you think, feel and have to say.",
    },
  },
  {
    letter: "I",
    word: { nl: "Inner alignment", en: "Inner alignment" },
    detail: {
      nl: "Wat je denkt, voelt en zegt komt op één lijn. Zodat je niet meer twijfelt aan jezelf.",
      en: "What you think, feel and say comes into alignment. So you stop doubting yourself.",
    },
  },
  {
    letter: "C",
    word: { nl: "Confidence", en: "Confidence" },
    detail: {
      nl: "Je spreekt. Duidelijk. Rustig. Zonder jezelf kleiner te maken.",
      en: "You speak. Clearly. Calmly. Without making yourself smaller.",
    },
  },
  {
    letter: "E",
    word: { nl: "Embodied presence", en: "Embodied presence" },
    detail: {
      nl: "Je bent wat je zegt. Je aanwezigheid draagt je woorden, zonder dat je harder hoeft te werken.",
      en: "You are what you say. Your presence carries your words, without you having to work harder.",
    },
  },
];

const OFFERS = [
  {
    icon: Compass,
    title: { nl: "Consultation Call", en: "Consultation Call" },
    description: {
      nl: "Een eerste stap, zonder druk. Samen brengen we in kaart waar jij jezelf nog tegenhoudt.",
      en: "A first step, without pressure. Together we map out where you're still holding yourself back.",
    },
    href: CALENDLY_URL,
    cta: { nl: "Plan je call", en: "Book your call" },
    external: true,
  },
  {
    icon: Sparkles,
    title: { nl: "Coaching & Voice Activation", en: "Coaching & Voice Activation" },
    description: {
      nl: "Eén-op-één traject rond je innerlijke stem, zichtbaarheid en de manier waarop je spreekt.",
      en: "A one-on-one journey around your inner voice, visibility and the way you speak.",
    },
    href: "/werk-met-mij",
    cta: { nl: "Bekijk het traject", en: "See the program" },
  },
  {
    icon: MessageCircle,
    title: { nl: "Vibes & Voices", en: "Vibes & Voices" },
    description: {
      nl: "De plek waar je je stem oefent — in een veilige, ontspannen setting vol echte verhalen.",
      en: "The place where you practice your voice — in a safe, relaxed setting full of real stories.",
    },
    href: "/vibes-voices",
    cta: { nl: "Ontdek het event", en: "Discover the event" },
  },
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
  {
    quote: { nl: "Niet perfect. Wel echt.", en: "Not perfect. But real." },
    name: "Isabella Rossi",
  },
];

export function HomeContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t({ nl: "Voice Activation Coaching", en: "Voice Activation Coaching" })}
        title={
          <>
            Stop Playing Small.
            <br />
            <span className="italic text-gold-600">
              {t({ nl: "Use your voice.", en: "Use your voice." })}
            </span>
          </>
        }
        subtitle={t({
          nl: "Je hebt een stem. Gebruik je die, of houd je jezelf nog tegen?",
          en: "You have a voice. Do you use it, or are you still holding yourself back?",
        })}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t({ nl: "Start hier", en: "Start here" })}
        </Button>
        <Button href="/werk-met-mij" variant="secondary">
          {t(COMMON.workWithMe)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <PortraitFrame
            src={asset("/images/phaedra-profile.jpg")}
            alt="Phaedra La Reine, voice activation coach"
            accent="gold"
            width={1490}
            height={1517}
            className="mx-auto w-full max-w-sm"
            priority
          />
          <Reveal delay={0.1}>
            <p className="text-balance font-display text-2xl leading-snug text-ink sm:text-3xl">
              {t({
                nl: "Je voelt het waarschijnlijk al: je houdt jezelf terug, ook al heb je iets waardevols te brengen. Ergens diep van binnen weet je —",
                en: "You probably feel it already: you hold yourself back, even though you have something valuable to bring. Somewhere deep down you know —",
              })}
              <span className="text-forest">
                {" "}
                &ldquo;{t({ nl: "dit ben ik niet", en: "this isn't me" })}.&rdquo;
              </span>
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed">
              {t({
                nl: "Phaedra La Reine — spreker, voice activation coach en de enige Lisa Nichols Certified Transformational Trainer in Nederland.",
                en: "Phaedra La Reine — speaker, voice activation coach and the only Lisa Nichols Certified Transformational Trainer in the Netherlands.",
              })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ nl: "Het drielagen-model", en: "The three-layer model" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Jouw stem is meer dan wat je zegt", en: "Your voice is more than what you say" })}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VOICES.map((voice, i) => (
            <Reveal key={voice.title.nl} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-line bg-paper p-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                  <voice.icon size={22} />
                </div>
                <h3 className="font-display mt-6 text-2xl text-ink">
                  {t(voice.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {t(voice.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t({ nl: "De methode", en: "The method" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl text-cream sm:text-4xl">
              {t({ nl: "De V.O.I.C.E. methode", en: "The V.O.I.C.E. method" })}
            </h2>
            <p className="mt-4 text-sage-100/85">
              {t({
                nl: "Van jezelf terughouden naar zichtbaar zijn — stap voor stap, in jouw tempo.",
                en: "From holding yourself back to being visible — step by step, at your own pace.",
              })}
            </p>
          </div>
          <Reveal delay={0.15} className="mt-14">
            <VoiceMethodLoop
              steps={METHOD_STEPS.map((s) => ({
                letter: s.letter,
                word: t(s.word),
                detail: t(s.detail),
              }))}
            />
          </Reveal>
        </div>
      </section>

      <HomeSignatureMoment
        src={asset("/images/phaedra-hero.jpg")}
        alt="Phaedra La Reine"
        eyebrow={t({ nl: "In haar eigen woorden", en: "In her own words" })}
        words={[
          t({ nl: "Stem", en: "Voice" }),
          t({ nl: "Kracht", en: "Strength" }),
          t({ nl: "Impact", en: "Impact" }),
        ]}
        statement={t({
          nl: "Ik geloof dat verandering begint zodra je jezelf toestaat om gehoord te worden — echt gehoord, zonder jezelf kleiner te maken.",
          en: "I believe change begins the moment you allow yourself to be heard — truly heard, without making yourself smaller.",
        })}
      >
        <Button href="/over-mij" variant="secondary">
          {t({ nl: "Lees mijn verhaal", en: "Read my story" })}
        </Button>
      </HomeSignatureMoment>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t(COMMON.workWithMe)}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Kies de manier die bij jou past", en: "Choose the way that fits you" })}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {OFFERS.map((offer, i) => (
            <OfferCard
              key={offer.title.nl}
              icon={offer.icon}
              title={t(offer.title)}
              description={t(offer.description)}
              href={offer.href}
              cta={t(offer.cta)}
              external={offer.external}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t({ nl: "Wat anderen ervaren", en: "What others experience" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
              {t({ nl: "Zij deden de eerste stap", en: "They took the first step" })}
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

      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {t({ nl: "Klaar om je stem terug te claimen?", en: "Ready to claim your voice back?" })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            {t({
              nl: "Je hoeft het niet perfect te doen. Je hoeft alleen te beginnen.",
              en: "You don't have to do it perfectly. You just have to begin.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={CALENDLY_URL} external variant="primary">
              {t(COMMON.planFirstStep)}
            </Button>
            <Button href="/stop-playing-small" variant="secondary">
              {t({ nl: "Ontdek Stop Playing Small", en: "Discover Stop Playing Small" })}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
