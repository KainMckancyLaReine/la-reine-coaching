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

const TRAITS = [
  {
    nl: "Ik was 18 toen ik ontdekte dat ik 6 maanden zwanger was",
    en: "I was 18 when I found out I was 6 months pregnant",
  },
  {
    nl: "Ik maakte na mijn 40ste een complete carrièreswitch",
    en: "After turning 40 I made a complete career switch",
  },
  {
    nl: "Meer dan 16 jaar werkte ik in de vastgoedwereld",
    en: "For more than 16 years I worked in real estate",
  },
  {
    nl: "Toen niemand meer in mij geloofde, ging ik toch door",
    en: "When nobody believed in me anymore, I kept going anyway",
  },
  {
    nl: "Ik begon aan een studie zonder te weten hoe ik het zou betalen",
    en: "I started a study without knowing how I would pay for it",
  },
  {
    nl: "Mijn motto: vallen is niet erg, blijven liggen wel",
    en: "My motto: falling is fine, staying down is not",
  },
];

export function OverMijContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t({ nl: "Over mij", en: "About me" })}
        title={t({ nl: "Over mij", en: "About me" })}
        subtitle={t({
          nl: "Ik help mensen stoppen met zichzelf klein houden,\nzodat ze hun stem durven gebruiken.",
          en: "I help people stop keeping themselves small,\nso they dare to use their voice.",
        })}
        align="left"
      />

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl border border-line bg-paper p-8 sm:flex-row sm:items-start sm:p-10">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-sage-100">
              <Image
                src={asset("/images/phaedra-headshot.jpg")}
                alt="Phaedra La Reine"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-ink-soft">
              <h2 className="font-display text-2xl text-ink">
                {t({ nl: "Mijn naam is Phaedra La Reine.", en: "My name is Phaedra La Reine." })}
              </h2>
              <p>
                {t({
                  nl: "Ik ben spreker, voice activation coach en de enige Lisa Nichols Certified Transformational Trainer in Nederland.",
                  en: "I'm a speaker, voice activation coach and the only Lisa Nichols Certified Transformational Trainer in the Netherlands.",
                })}
              </p>
              <p>
                {t({
                  nl: "Maar boven alles ben ik iemand die weet hoe het voelt om jezelf kwijt te raken, terwijl je probeert alles bij elkaar te houden.",
                  en: "But above all I'm someone who knows how it feels to lose yourself, while trying to keep everything together.",
                })}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-plum-50 via-cream to-cream py-24">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-plum-300/20 blur-3xl"
        />
        <div className="relative px-6 lg:px-8">
          <CertificationShowcase
            photoSrc={asset("/images/lisa-nichols-badge.png")}
            photoAlt="Lisa Nichols Certified Transformational Trainer badge — Phaedra La Reine"
            verifyHref="https://motivatingthemasses.com/portfolio-item/phaedra-la-reine/"
            verifyLabel={t({
              nl: "Bekijk officiële verificatie",
              en: "View official verification",
            })}
            extraLine={t({
              nl: "De enige in Nederland",
              en: "The only one in the Netherlands",
            })}
            eyebrow={t({ nl: "Erkenning", en: "Recognition" })}
            title={t({
              nl: "Lisa Nichols Certified Transformational Trainer",
              en: "Lisa Nichols Certified Transformational Trainer",
            })}
            description={t({
              nl: "Ik ben spreker, voice activation coach en de enige Lisa Nichols Certified Transformational Trainer in Nederland.",
              en: "I'm a speaker, voice activation coach and the only Lisa Nichols Certified Transformational Trainer in the Netherlands.",
            })}
          />
        </div>
      </section>

      <section className="bg-sage-50 py-20">
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
                {t({ nl: "Het moment waarop alles veranderde", en: "The moment everything changed" })}
              </SectionLabel>
              <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
                {t({ nl: "Ik dacht dat ik alles wel aankon.", en: "I thought I could handle anything." })}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 whitespace-pre-line leading-relaxed text-ink-soft">
                <p>
                  {t({
                    nl: "Ik was tienermoeder geweest.\nIk had schulden gehad.\nEen burn-out.\nGebroken relaties.",
                    en: "I had been a teenage mother.\nI had been in debt.\nA burnout.\nBroken relationships.",
                  })}
                </p>
                <p>{t({ nl: "En toch bleef ik doorgaan.", en: "And still I kept going." })}</p>
                <p className="font-display text-xl text-forest">
                  {t({ nl: "Tot ik hoorde: “Ik wil scheiden.”", en: "Until I heard: “I want a divorce.”" })}
                </p>
                <p>
                  {t({
                    nl: "Dat was het moment waarop ik besefte dat ik jarenlang vooral had overleefd.",
                    en: "That was the moment I realized I had mostly been surviving for years.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "Ik was bezig met zorgen, oplossen en doorgaan,\nmaar niet meer met mezelf.",
                    en: "I was busy caring, solving and pushing on,\nbut no longer with myself.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "Ik wilde niet alleen doorgaan.\nIk wilde leven.",
                    en: "I didn't just want to keep going.\nI wanted to live.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "In mijn zoektocht naar geluk, rust en richting ontdekte ik de science of happiness en kwam ik in aanraking met het werk van Lisa Nichols.",
                    en: "In my search for happiness, calm and direction I discovered the science of happiness and came across the work of Lisa Nichols.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "Wat begon als persoonlijke groei, werd uiteindelijk mijn missie.",
                    en: "What began as personal growth eventually became my mission.",
                  })}
                </p>
                <p className="font-display text-xl text-forest">
                  {t({
                    nl: "Ik besloot mezelf niet langer klein te houden.",
                    en: "I decided to stop keeping myself small.",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionLabel>{t({ nl: "Wat ik nu doe", en: "What I do now" })}</SectionLabel>
          <div className="mt-6 space-y-4 whitespace-pre-line leading-relaxed text-ink-soft">
            <p>
              {t({
                nl: "Vandaag werk ik als spreker en coach met mensen die voelen dat ze zichzelf nog inhouden.",
                en: "Today I work as a speaker and coach with people who feel they're still holding themselves back.",
              })}
            </p>
            <p>
              {t({
                nl: "Niet omdat ze niets te zeggen hebben.\nMaar omdat ze zijn gaan twijfelen aan hun eigen stem.",
                en: "Not because they have nothing to say.\nBut because they've started doubting their own voice.",
              })}
            </p>
            <p>
              {t({
                nl: "In mijn werk combineer ik persoonlijke ontwikkeling, voice activation en transformatie.",
                en: "In my work I combine personal development, voice activation and transformation.",
              })}
            </p>
            <p>
              {t({
                nl: "Zodat mensen zichzelf niet langer kleiner maken dan nodig is.",
                en: "So people stop making themselves smaller than they need to be.",
              })}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">
              {t({ nl: "Dit ben ik ook", en: "This is also me" })}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {TRAITS.map((trait, i) => (
              <Reveal key={trait.nl} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-cream/15 bg-cream/5 p-5 text-sm text-sage-100/90">
                  {t(trait)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <Reveal>
          <p className="whitespace-pre-line font-display text-2xl italic text-ink sm:text-3xl">
            {t({
              nl: "Je stem verandert meer\ndan alleen wat je zegt.",
              en: "Your voice changes more\nthan only what you say.",
            })}
          </p>
          <p className="mx-auto mt-4 max-w-xl whitespace-pre-line text-ink-soft">
            {t({
              nl: "Het verandert hoe je jezelf laat zien.\nHoe je binnenkomt en hoeveel ruimte je jezelf geeft.",
              en: "It changes how you show yourself.\nHow you walk in and how much space you give yourself.",
            })}
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
