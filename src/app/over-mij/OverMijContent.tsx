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
  { nl: "Tienermoeder op mijn 18e", en: "Teenage mother at 18" },
  {
    nl: "Carrièreswitch na mijn 40e, na 16+ jaar in vastgoed",
    en: "Career switch after turning 40, after 16+ years in real estate",
  },
  {
    nl: "Een opleiding volgen ondanks financiële onzekerheid",
    en: "Pursuing an education despite financial uncertainty",
  },
  { nl: "Doorzetten wanneer anderen twijfelden", en: "Persisting when others doubted" },
  {
    nl: "Motto: vallen is niet erg, blijven liggen wel",
    en: "Motto: falling isn't terrible, staying down is",
  },
];

export function OverMijContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t({ nl: "Over mij", en: "About me" })}
        title={t({
          nl: "Ik help mensen stoppen met zichzelf klein maken",
          en: "I help people stop making themselves small",
        })}
        subtitle={t({
          nl: "Zodat ze hun stem echt kunnen gebruiken.",
          en: "So they can truly use their voice.",
        })}
        align="left"
      />

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl border border-line bg-paper p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-sage-100">
              <Image
                src={asset("/images/phaedra-headshot.jpg")}
                alt="Phaedra La Reine"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink">
                Phaedra La Reine
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {t({
                  nl: "Spreker en voice activation coach. Ik weet wat het is om jezelf te verliezen terwijl je alles op de rit probeert te houden.",
                  en: "Speaker and voice activation coach. I know what it's like to lose yourself while trying to keep everything together.",
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
              nl: "Een unieke, internationale erkenning",
              en: "A unique, international recognition",
            })}
            description={t({
              nl: "Phaedra is de enige Lisa Nichols Certified Transformational Trainer in Nederland — een erkenning voor werk dat mensen daadwerkelijk laat transformeren, van binnenuit.",
              en: "Phaedra is the only Lisa Nichols Certified Transformational Trainer in the Netherlands — a recognition for work that truly transforms people, from the inside out.",
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
                &ldquo;{t({ nl: "Ik wil scheiden", en: "I want a divorce" })}&rdquo;
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  {t({
                    nl: "Tienermoederschap, schulden, burn-out en relatieproblemen — het waren geen aparte hoofdstukken, maar één lange periode van overleven. Het kantelpunt kwam toen ik de woorden hoorde: “Ik wil scheiden.” Dat moment liet me beseffen dat ik al lang aan het overleven was, niet aan het leven.",
                    en: "Teenage motherhood, debt, burnout and relationship struggles — they weren't separate chapters, but one long period of surviving. The turning point came when I heard the words: “I want a divorce.” That moment made me realize I'd been surviving for a long time, not living.",
                  })}
                </p>
                <p>
                  {t({
                    nl: "“Ik was bezig met zorgen, oplossen en doorgaan, maar niet meer met mezelf.” Die realisatie zette me aan het denken — over gelukswetenschap, over het werk van Lisa Nichols, en uiteindelijk over hoe ik mijn eigen groei kon omzetten in mijn professionele missie.",
                    en: "“I was busy worrying, solving and pushing on, but no longer with myself.” That realization set me thinking — about the science of happiness, about Lisa Nichols' work, and eventually about how I could turn my own growth into my professional mission.",
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
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({
              nl: "Persoonlijke ontwikkeling, voice activation en transformatie",
              en: "Personal development, voice activation and transformation",
            })}
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            {t({
              nl: "Ik werk met mensen die zichzelf tegenhouden — niet omdat ze tekortschieten, maar omdat ze twijfelen aan hun eigen stem. Mijn aanpak combineert persoonlijke ontwikkeling, voice activation en transformatiecoaching, zodat je niet alleen weet wat je waard bent, maar het ook laat zien.",
              en: "I work with people who hold themselves back — not because they fall short, but because they doubt their own voice. My approach combines personal development, voice activation and transformation coaching, so you not only know your worth, but show it too.",
            })}
          </p>
        </Reveal>
      </section>

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>{t({ nl: "Dit ben ik ook", en: "This is also me" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              {t({ nl: "Zes dingen die mij vormden", en: "Six things that shaped me" })}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {TRAITS.map((trait, i) => (
              <Reveal key={trait.nl} delay={i * 0.06}>
                <div className="rounded-2xl border border-cream/15 bg-cream/5 p-5 text-sm text-sage-100/90">
                  {t(trait)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <Reveal>
          <p className="font-display text-2xl italic text-ink sm:text-3xl">
            {t({
              nl: "Je stem verandert meer dan alleen wat je zegt.",
              en: "Your voice changes more than just what you say.",
            })}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            {t({
              nl: "Het beïnvloedt hoe je jezelf presenteert, hoe je een ruimte binnenkomt, en hoeveel ruimte je durft in te nemen.",
              en: "It influences how you present yourself, how you enter a room, and how much space you dare to take up.",
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
