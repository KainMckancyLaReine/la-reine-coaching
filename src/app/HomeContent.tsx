"use client";
import { asset } from "@/lib/asset";

import { Heart, Megaphone, Users2, Sparkles, Compass, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { OfferCard } from "@/components/OfferCard";
import { Testimonial } from "@/components/Testimonial";
import { PortraitFrame } from "@/components/PortraitFrame";
import { VoiceMethodLoop } from "@/components/VoiceMethodLoop";
import { HomeSignatureMoment } from "@/components/HomeSignatureMoment";
import { CALENDLY_URL, REVIEW_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import { COMMON } from "@/lib/common-dict";
import siteContent from "@/content/site.json";

const copy = siteContent["home"];

const VOICES = [
  {
    icon: Heart,
    title: copy["inner-voice"],
    description: copy["dit-is-waar-het-begint-de-gedachten-die-je-tegenhouden-de-twij"],
  },
  {
    icon: Megaphone,
    title: copy["public-voice"],
    description: copy["dit-is-waar-je-zichtbaar-wordt-je-durft-te-spreken-je-zegt-wat"],
  },
  {
    icon: Users2,
    title: copy["collective-voice"],
    description: copy["dit-is-waar-je-impact-maakt-je-gebruikt-je-stem-om-anderen-te"],
  },
];

const METHOD_STEPS = [
  {
    letter: "V",
    word: copy["voice-awareness"],
    detail: copy["je-wordt-je-bewust-van-waar-en-waarom-je-jezelf-inhoudt-zonder"],
  },
  {
    letter: "O",
    word: copy["own-your-story"],
    detail: copy["je-stopt-met-aanpassen-en-neemt-eigenaarschap-over-wat-je-denk"],
  },
  {
    letter: "I",
    word: copy["inner-alignment"],
    detail: copy["wat-je-denkt-voelt-en-zegt-komt-op-een-lijn-zodat-je-niet-meer"],
  },
  {
    letter: "C",
    word: copy["confidence"],
    detail: copy["je-spreekt-duidelijk-rustig-zonder-jezelf-kleiner-te-maken"],
  },
  {
    letter: "E",
    word: copy["embodied-presence"],
    detail: copy["je-bent-wat-je-zegt-je-aanwezigheid-draagt-je-woorden-zonder-d"],
  },
];

const OFFERS = [
  {
    icon: Compass,
    title: copy["start-hier"],
    description: copy["een-eerste-stap-zonder-druk-je-ontdekt-waar-jij-jezelf-nog-inh"],
    href: CALENDLY_URL,
    cta: copy["start-hier-2"],
    external: true,
  },
  {
    icon: Sparkles,
    title: copy["werk-met-mij"],
    description: copy["voor-als-je-er-klaar-voor-bent-om-niet-langer-klein-te-blijven"],
    href: "/werk-met-mij",
    cta: copy["werk-met-mij-2"],
  },
  {
    icon: Star,
    title: copy["vibes-voices"],
    description: copy["de-plek-waar-je-je-stem-oefent-in-een-veilige-ontspannen-setti"],
    href: "/vibes-voices",
    cta: copy["ontdek-het-event"],
  },
];

const TESTIMONIALS = [
  {
    quote: copy["ik-hield-mezelf-klein-nu-niet-meer"],
    name: "Amara Rahman",
  },
  {
    quote: copy["ik-spreek-me-uit-zonder-mezelf-kleiner-te-maken"],
    name: "Marieke van Dongen",
  },
  { quote: copy["niet-perfect-wel-echt"], name: "Isabella Rossi" },
];

export function HomeContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["voice-activation-coaching"])}
        title={
          <>
            {t(copy["stop-playing-small"])}
            <br />
            <span className="italic text-gold-600">{t(copy["use-your-voice"])}</span>
          </>
        }
        subtitle={t(copy["je-hebt-een-stem-gebruik-je-die-of-houd-je-jezelf-nog-tegen"])}
      >
        <Button href={CALENDLY_URL} external variant="primary">
          {t(copy["start-hier-3"])}
        </Button>
        <Button href="/werk-met-mij" variant="secondary">
          {t(COMMON.workWithMe)}
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <PortraitFrame
            src={asset("/images/foto-1-hero.jpg")}
            alt="Phaedra La Reine, voice activation coach"
            accent="gold"
            width={1200}
            height={1800}
            className="mx-auto w-full max-w-sm"
            priority
          />
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-[2.15rem] leading-[1.2] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
              {t(copy["je-weet-dat-er-meer-in-je-zit"])}
            </h2>
            <div className="mt-7 max-w-[62ch] space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
              <p>{t(copy["je-voelt-het-al-een-tijd"])}</p>
              <p>
                {t(copy["dat-je-dingen-niet-zegt-die-je-wel-denkt-dat-je-kleiner-speelt"])}
              </p>
              <p>
                {t(copy["niet-omdat-je-niets-te-vertellen-hebt-maar-omdat-je-het-nog-ni"])}
              </p>
              <p>
                {t(copy["misschien-wacht-je-op-het-juiste-moment-meer-zekerheid-meer-ze"])}
              </p>
              <p>
                {t(copy["maar-ondertussen-blijf-je-op-de-achtergrond"])}
              </p>
              <p className="statement font-display text-2xl leading-snug text-forest sm:text-[1.75rem]">
                {t(copy["en-diep-vanbinnen-weet-je-dit-ben-ik-niet"])}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t(copy["drie-lagen"])}</SectionLabel>
          <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["je-stem-werkt-op-drie-niveaus"])}
          </h2>
          <div className="mt-7 space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
            <p>
              {t(copy["als-je-jezelf-inhoudt-zit-dat-niet-op-een-plek"])}
            </p>
            <p>
              {t(copy["het-zit-in-hoe-je-denkt-hoe-je-spreekt-en-in-hoe-je-jezelf-laa"])}
            </p>
            <p>{t(copy["daarom-werk-ik-met-drie-lagen"])}</p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {VOICES.map((voice, i) => (
            <Reveal key={voice.title.nl} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-line bg-paper p-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                  <voice.icon size={22} />
                </div>
                <h3 className="font-display mt-6 text-[1.6rem] leading-snug tracking-[-0.01em] text-ink">
                  {t(voice.title)}
                </h3>
                <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.75] text-ink-soft">
                  {t(voice.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="font-display whitespace-pre-line text-[2rem] leading-[1.25] tracking-[-0.01em] text-ink sm:text-[2.4rem]">
              {t(copy["als-je-deze-drie-lagen-samenbrengt-verandert-niet-alleen-hoe-j"])}
            </p>
            <div className="mt-8">
              <Button href={CALENDLY_URL} external variant="primary">
                {t(copy["gebruik-je-stem"])}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel tone="light">
              {t(copy["de-v-o-i-c-e-methode"])}
            </SectionLabel>
            <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-cream sm:text-[3rem]">
              {t(copy["dit-is-hoe-je-je-stem-terugpakt"])}
            </h2>
            <div className="mt-7 space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-sage-100/85">
              <p>{t(copy["je-hoeft-jezelf-niet-te-fixen"])}</p>
              <p>
                {t(copy["je-hebt-al-een-stem-je-gebruikt-die-alleen-nog-niet-volledig"])}
              </p>
              <p>
                {t(copy["daarom-werkt-de-v-o-i-c-e-methode"])}
              </p>
              <p>
                {t(copy["een-praktische-manier-om-van-je-inhouden-naar-zichtbaar-en-hoo"])}
              </p>
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-2xl space-y-6 whitespace-pre-line text-center font-display text-[1.5rem] leading-[1.4] text-cream sm:text-[1.75rem]">
              <p>
                {t(copy["je-stem-zit-niet-alleen-in-wat-je-zegt"])}
              </p>
              <p>
                {t(copy["het-zit-in-hoe-je-jezelf-laat-zien-hoe-je-binnenkomt"])}
              </p>
              <p>
                {t(copy["en-in-wat-je-uitstraalt-nog-voordat-je-iets-zegt"])}
              </p>
            </div>
          </Reveal>
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
              <p className="font-display text-[2rem] leading-[1.25] text-cream">
                {t(copy["klaar-om-je-stem-te-gebruiken"])}
              </p>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external variant="ghost">
                  {t(copy["gebruik-je-stem-2"])}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeSignatureMoment
        src={asset("/images/foto-2-portret.jpg")}
        alt="Phaedra La Reine"
        eyebrow={t(copy["in-haar-eigen-woorden"])}
        words={[
          t(copy["stem"]),
          t(copy["kracht"]),
          t(copy["impact"]),
        ]}
        statement={t(copy["je-stem-verandert-meer-dan-alleen-wat-je-zegt-het-verandert-ho"])}
      >
        <Button href="/over-mij" variant="secondary">
          {t(copy["lees-mijn-verhaal"])}
        </Button>
      </HomeSignatureMoment>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["werk-met-mij-3"])}
          </h2>
          <div className="mt-7 space-y-6 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-ink-soft">
            <p>
              {t(copy["je-hoeft-het-niet-alleen-te-doen-je-hoeft-ook-niet-te-blijven"])}
            </p>
            <p>
              {t(copy["of-je-nu-net-begint-of-klaar-bent-om-je-stem-echt-te-laten-hor"])}
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
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
            <p className="font-display whitespace-pre-line text-[2rem] leading-[1.25] tracking-[-0.01em] text-ink sm:text-[2.4rem]">
              {t(copy["je-hoeft-niet-alles-in-een-keer-te-weten-je-hoeft-alleen-te-be"])}
            </p>
            <div className="mt-8">
              <Button href={CALENDLY_URL} external variant="primary">
                {t(COMMON.planFirstStep)}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
              {t(copy["wat-anderen-ervaren"])}
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Testimonial
                key={testimonial.name}
                quote={t(testimonial.quote)}
                name={testimonial.name}
                delay={i * 0.1}
              />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href={CALENDLY_URL} external variant="primary">
              {t(COMMON.planFirstStep)}
            </Button>
            <Button href={REVIEW_URL} external={REVIEW_URL.startsWith("http")} variant="secondary">
              {t(copy["laat-een-review-achter"])}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
