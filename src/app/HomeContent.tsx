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
    title: { nl: "Inner Voice", en: "Inner Voice" },
    description: {
      nl: "Dit is waar het begint.\n\nDe gedachten die je tegenhouden.\nDe twijfel.\nDe overtuigingen die je klein houden.\n\nHier doorbreek je de patronen waardoor je jezelf blijft inhouden.",
      en: "This is where it begins.\n\nThe thoughts that hold you back.\nThe doubt.\nThe beliefs that keep you small.\n\nThis is where you break the patterns that keep you holding yourself back.",
    },
  },
  {
    icon: Megaphone,
    title: { nl: "Public Voice", en: "Public Voice" },
    description: {
      nl: "Dit is waar je zichtbaar wordt.\n\nJe durft te spreken.\nJe zegt wat je echt wilt zeggen.\nJe laat jezelf zien, zonder jezelf kleiner te maken.\n\nNiet perfect.\nWel echt.",
      en: "This is where you become visible.\n\nYou dare to speak.\nYou say what you really want to say.\nYou show yourself, without making yourself smaller.\n\nNot perfect.\nBut real.",
    },
  },
  {
    icon: Users2,
    title: { nl: "Collective Voice", en: "Collective Voice" },
    description: {
      nl: "Dit is waar je impact maakt.\n\nJe gebruikt je stem\nom anderen te raken, te verbinden\nen beweging te creëren.\n\nOmdat jouw stem verder reikt dan jij.",
      en: "This is where you make impact.\n\nYou use your voice\nto move others, to connect\nand to create momentum.\n\nBecause your voice reaches further than you.",
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
    title: { nl: "Start hier", en: "Start here" },
    description: {
      nl: "Een eerste stap, zonder druk.\n\nJe ontdekt waar jij jezelf nog inhoudt.\nEn wat er verandert als je je stem wél gebruikt.\n\nKlein. Persoonlijk.\nDirect toepasbaar.",
      en: "A first step, without pressure.\n\nYou discover where you still hold yourself back.\nAnd what changes when you do use your voice.\n\nSmall. Personal.\nImmediately applicable.",
    },
    href: CALENDLY_URL,
    cta: { nl: "Start hier", en: "Start here" },
    external: true,
  },
  {
    icon: Sparkles,
    title: { nl: "Werk met mij", en: "Work with me" },
    description: {
      nl: "Voor als je er klaar voor bent om niet langer klein te blijven spelen.\n\nWe werken samen aan je inner voice, je zichtbaarheid en je manier van spreken.\n\nZodat je niet alleen weet wat je wilt zeggen.\nMaar het ook daadwerkelijk doet.",
      en: "For when you're ready to stop playing small.\n\nTogether we work on your inner voice, your visibility and the way you speak.\n\nSo you not only know what you want to say.\nBut actually do it.",
    },
    href: "/werk-met-mij",
    cta: { nl: "Werk met mij", en: "Work with me" },
  },
  {
    icon: MessageCircle,
    title: { nl: "Vibes & Voices", en: "Vibes & Voices" },
    description: {
      nl: "De plek waar je je stem oefent.\n\nIn een veilige, ontspannen setting krijg je de ruimte om te spreken, te groeien en jezelf te laten zien.\n\nNiet perfect. Wel echt.",
      en: "The place where you practice your voice.\n\nIn a safe, relaxed setting you get the space to speak, to grow and to show yourself.\n\nNot perfect. But real.",
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
  { quote: { nl: "Niet perfect. Wel echt.", en: "Not perfect. But real." }, name: "Isabella Rossi" },
];

export function HomeContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t({ nl: "Voice Activation Coaching", en: "Voice Activation Coaching" })}
        title={
          <>
            Stop Playing Small
            <br />
            <span className="italic text-gold-600">Use your voice</span>
          </>
        }
        subtitle={t({
          nl: "Je hebt een stem.\nGebruik je die, of houd je jezelf nog tegen?",
          en: "You have a voice.\nDo you use it, or are you still holding yourself back?",
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
            <h2 className="text-balance font-display text-3xl leading-snug text-ink sm:text-4xl">
              {t({
                nl: "Je weet dat er meer in je zit",
                en: "You know there's more in you",
              })}
            </h2>
            <div className="mt-6 space-y-4 whitespace-pre-line leading-relaxed text-ink-soft">
              <p>{t({ nl: "Je voelt het al een tijd.", en: "You've been feeling it for a while." })}</p>
              <p>
                {t({
                  nl: "Dat je dingen niet zegt die je wél denkt.\nDat je kleiner speelt dan je eigenlijk bent.",
                  en: "That you don't say the things you do think.\nThat you play smaller than you really are.",
                })}
              </p>
              <p>
                {t({
                  nl: "Niet omdat je niets te vertellen hebt,\nmaar omdat je het nog niet volledig durft te laten zien.",
                  en: "Not because you have nothing to tell,\nbut because you don't yet fully dare to show it.",
                })}
              </p>
              <p>
                {t({
                  nl: "Misschien wacht je op het juiste moment.\nMeer zekerheid.\nMeer zelfvertrouwen.",
                  en: "Maybe you're waiting for the right moment.\nMore certainty.\nMore confidence.",
                })}
              </p>
              <p>
                {t({
                  nl: "Maar ondertussen…\n\nblijf je op de achtergrond.",
                  en: "But in the meantime…\n\nyou stay in the background.",
                })}
              </p>
              <p className="font-display text-xl text-forest">
                {t({
                  nl: "En diep vanbinnen weet je: dit ben ik niet.",
                  en: "And deep down you know: this isn't me.",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ nl: "Drie lagen", en: "Three layers" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Je stem werkt op drie niveaus", en: "Your voice works on three levels" })}
          </h2>
          <div className="mt-6 space-y-4 whitespace-pre-line text-ink-soft">
            <p>
              {t({
                nl: "Als je jezelf inhoudt, zit dat niet op één plek.",
                en: "When you hold yourself back, it doesn't sit in one place.",
              })}
            </p>
            <p>
              {t({
                nl: "Het zit in hoe je denkt.\nHoe je spreekt.\nEn in hoe je jezelf laat zien.",
                en: "It's in how you think.\nHow you speak.\nAnd in how you show yourself.",
              })}
            </p>
            <p>{t({ nl: "Daarom werk ik met drie lagen.", en: "That's why I work with three layers." })}</p>
          </div>
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
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                  {t(voice.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="font-display whitespace-pre-line text-2xl leading-snug text-ink">
              {t({
                nl: "Als je deze drie lagen samenbrengt,\nverandert niet alleen hoe je spreekt,\nmaar hoe je jezelf laat zien.",
                en: "When you bring these three layers together,\nnot only how you speak changes,\nbut how you show yourself.",
              })}
            </p>
            <div className="mt-8">
              <Button href={CALENDLY_URL} external variant="primary">
                {t({ nl: "Gebruik je stem", en: "Use your voice" })}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{t({ nl: "De V.O.I.C.E. methode", en: "The V.O.I.C.E. method" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl text-cream sm:text-4xl">
              {t({ nl: "Dit is hoe je je stem terugpakt", en: "This is how you take your voice back" })}
            </h2>
            <div className="mt-6 space-y-4 whitespace-pre-line text-sage-100/85">
              <p>{t({ nl: "Je hoeft jezelf niet te fixen.", en: "You don't have to fix yourself." })}</p>
              <p>
                {t({
                  nl: "Je hebt al een stem.\nJe gebruikt die alleen nog niet volledig.",
                  en: "You already have a voice.\nYou're just not using it fully yet.",
                })}
              </p>
              <p>
                {t({
                  nl: "Daarom werkt de V.O.I.C.E. methode.",
                  en: "That's why the V.O.I.C.E. method works.",
                })}
              </p>
              <p>
                {t({
                  nl: "Een praktische manier om van je inhouden\nnaar zichtbaar en hoorbaar zijn te bewegen.",
                  en: "A practical way to move from holding back\nto being visible and audible.",
                })}
              </p>
            </div>
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
          <Reveal delay={0.25}>
            <div className="mx-auto mt-14 max-w-2xl text-center">
              <p className="font-display text-2xl text-cream">
                {t({ nl: "Klaar om je stem te gebruiken?", en: "Ready to use your voice?" })}
              </p>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external variant="ghost">
                  {t({ nl: "Gebruik je stem", en: "Use your voice" })}
                </Button>
              </div>
            </div>
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
          nl: "Je stem zit niet alleen in wat je zegt. Het zit in hoe je jezelf laat zien. Hoe je binnenkomt. En in wat je uitstraalt, nog voordat je iets zegt.",
          en: "Your voice isn't only in what you say. It's in how you show yourself. How you walk in. And in what you radiate, before you even say a word.",
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
            {t({ nl: "Werk met mij", en: "Work with me" })}
          </h2>
          <div className="mt-6 space-y-4 whitespace-pre-line text-ink-soft">
            <p>
              {t({
                nl: "Je hoeft het niet alleen te doen.\nJe hoeft ook niet te blijven waar je nu bent.",
                en: "You don't have to do it alone.\nAnd you don't have to stay where you are now.",
              })}
            </p>
            <p>
              {t({
                nl: "Of je nu net begint,\nof klaar bent om je stem écht te laten horen,\ner is een manier die bij jou past.",
                en: "Whether you're just starting out,\nor ready to truly let your voice be heard,\nthere is a way that fits you.",
              })}
            </p>
          </div>
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
        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="font-display whitespace-pre-line text-2xl leading-snug text-ink">
              {t({
                nl: "Je hoeft niet alles in één keer te weten.\nJe hoeft alleen te beginnen.",
                en: "You don't have to know everything at once.\nYou only have to begin.",
              })}
            </p>
            <div className="mt-8">
              <Button href={CALENDLY_URL} external variant="primary">
                {t(COMMON.planFirstStep)}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {t({ nl: "Wat anderen ervaren", en: "What others experience" })}
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
          <div className="mt-12 text-center">
            <Button href={CALENDLY_URL} external variant="primary">
              {t(COMMON.planFirstStep)}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
