"use client";
import { asset } from "@/lib/asset";

import { Coffee, Mic, Eye, GraduationCap, Megaphone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Testimonial } from "@/components/Testimonial";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SpeakerWall } from "@/components/SpeakerWall";
import { PortraitFrame } from "@/components/PortraitFrame";
import { EventShowcase } from "@/components/EventShowcase";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";
import siteContent from "@/content/site.json";

const copy = siteContent["vibes-voices"];

const CTAS = [
  { icon: Mic, label: copy["ik-wil-spreken"], href: "/contact" },
  {
    icon: Eye,
    label: copy["ik-wil-kijken"],
    href: CALENDLY_URL,
    external: true,
  },
  { icon: GraduationCap, label: copy["ik-wil-leren"], href: "#workshop" },
  {
    icon: Megaphone,
    label: copy["ik-zoek-sprekers"],
    href: "/contact",
  },
];

const WORKSHOP_LEARNINGS = [
  copy["hoe-je-een-krachtige-structuur-opbouwt"],
  copy["hoe-je-voor-interactie-zorgt-met-het-publiek"],
  copy["hoe-je-jouw-zenuwen-in-je-voordeel-gebruikt"],
  copy["presentatietips-voor-houding-stem-en-uitstraling"],
];

const KEYNOTE_SPEAKERS = [
  "Phaedra La Reine",
  "Frank Soonius",
  "Sara Bruinsma",
  "Consuela Cambridge",
  "Shy Chedoe",
  "Iris Blue",
  "Winston Scholsberg",
];

const FAME_SPEAKERS = [
  "Claudia Esajas",
  "Jacqueline Moleres Morales",
  "Tsnatee Elisa",
  "Tars Fens",
  "Mandy Reemnet",
  "Britta Hall",
  "Ingrid Meijer",
  "Sabine Pols",
  "Amy Rotgans",
  "Nicole Aarland-Kensdell",
  "Gerda Maduro",
  "Mark Kirkenier",
  "Jesse Heeringa",
  "Yasmin Asrafali",
  "Wim Pruim",
  "Ahilya Elbers",
  "Nanja van Loon",
  "Marlene Amsdorf",
  "Kongo Apinti",
  "Avana Aisa Apinti",
];

export function VibesVoicesContent() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={t(copy["vibes-voices"])}
        title={
          <>
            {t(copy["jij-brengt-de-vibes"])}
            <br />
            <span className="italic text-gold-600">
              {t(copy["wij-de-voices"])}
            </span>
          </>
        }
        subtitle={t(copy["vibes-voices-is-het-platform-voor-beginnende-sprekers-die-will"])}
      />

      <section className="mx-auto -mt-4 max-w-4xl px-6 pb-16 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CTAS.map((cta, i) => (
            <Reveal key={cta.label.nl} delay={i * 0.06}>
              <a
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col items-center gap-2 rounded-2xl border border-line bg-paper px-4 py-5 text-center transition-all hover:-translate-y-1 hover:border-sage-300"
              >
                <cta.icon className="text-forest" size={20} />
                <span className="text-[13px] font-medium text-ink-soft">{t(cta.label)}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
        <Testimonial
          quote={t(copy["vibes-en-voices-is-een-evenement-waar-sprekers-en-luisteraars"])}
          name="Mandy Reemnet"
          role="Mandy PT"
        />
      </section>

      <section className="pb-4">
        <EventShowcase
          mainSrc={asset("/images/vibes-voices-event.jpg")}
          mainAlt="Vibes & Voices pop-up café avond"
          secondarySrc={asset("/images/vibes-voices-flyer.jpg")}
          secondaryAlt="Vibes & Voices House of Speakers flyer"
          caption={t(copy["jij-brengt-de-vibes-wij-de-voices"])}
        />
      </section>

      <section className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel tone="light">{t(copy["onze-missie"])}</SectionLabel>
            <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] sm:text-[3rem]">
              {t(copy["verbinding-door-verhalen"])}
            </h2>
            <p className="mt-7 whitespace-pre-line text-[1.0625rem] leading-[1.8] text-sage-100/85">
              {t(copy["vibes-voices-is-er-voor-iedereen-die-wil-leren-spreken-met-imp"])}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PortraitFrame
            src={asset("/images/foto-8-vibes.jpg")}
            alt="Phaedra La Reine"
            accent="gold"
            rotate={-2}
            width={1201}
            height={1800}
            className="mx-auto w-full max-w-sm"
          />
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] leading-[1.75] text-ink-soft">
              <p>
                {t(copy["als-lisa-nichols-certified-transformational-trainer-wilde-ik-d"])}
              </p>
              <p className="font-display text-[1.5rem] leading-snug text-ink">
                {t(copy["er-was-slechts-een-probleem-niemand-kent-mij-dus-niemand-boekt"])}
              </p>
              <p>
                {t(copy["hoe-kom-je-als-beginnende-spreker-aan-opdrachten-hoe-kan-je-me"])}
              </p>
              <p className="font-display text-lg italic text-forest">~ Phaedra La Reine</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
              {t(copy["vibes-voices-storytelling-pop-up-cafe"])}
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
              {t(copy["gezellig-laagdrempelig-verbindend"])}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                  <Coffee size={22} />
                </div>
                <h3 className="font-display mt-6 text-[1.6rem] leading-snug tracking-[-0.01em] text-ink">
                  {t(copy["avondje-uit"])}
                </h3>
                <div className="mt-4 flex-1 space-y-4 text-[15px] leading-[1.75] text-ink-soft">
                  <p>
                    {t(copy["elke-eerste-vrijdagavond-van-de-maand-organiseren-we-het-vibes"])}
                  </p>
                  <p>
                    {t(copy["in-een-intiem-cafe-krijgen-gastsprekers-5-minuten-op-het-podiu"])}
                  </p>
                  <p>
                    {t(copy["het-publiek-kan-onder-het-genot-van-een-drankje-en-een-borrelm"])}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href={CALENDLY_URL} external variant="secondary">
                    {t(copy["bekijk-volgende-editie"])}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                  5 minutes of fame
                </p>
                <h3 className="font-display mt-3 text-[1.6rem] leading-snug tracking-[-0.01em] text-ink">
                  {t(copy["pak-je-moment"])}
                </h3>
                <div className="mt-4 flex-1 space-y-4 text-[15px] leading-[1.75] text-ink-soft">
                  <p>
                    {t(copy["durf-jij-het-aan-om-5-minuten-op-het-podium-te-staan-of-ben-je"])}
                  </p>
                  <p>
                    {t(copy["wij-bieden-een-podium-vrij-van-racisme-expliciete-content-poli"])}
                  </p>
                  <p>
                    {t(copy["meld-je-aan-en-pak-je-moment"])}
                  </p>
                  <p className="font-medium text-ink">
                    {t(copy["locatie-amsterdam-noord"])}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href="/contact" variant="secondary">
                    {t(copy["claim-je-spot"])}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                  Spotlight Talk
                </p>
                <h3 className="font-display mt-3 text-[1.6rem] leading-snug tracking-[-0.01em] text-ink">Phaedra La Reine</h3>
                <div className="mt-4 flex-1 space-y-4 text-[15px] leading-[1.75] text-ink-soft">
                  <p>
                    {t(copy["tijdens-de-spotlight-talk-neemt-phaedra-la-reine-je-zo-n-20-mi"])}
                  </p>
                  <p>
                    {t(copy["in-de-ontspannen-setting-van-het-vibes-voices-pop-up-cafe-dran"])}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href={CALENDLY_URL} external variant="secondary">
                    {t(copy["kom-luisteren"])}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="workshop" className="bg-forest py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel tone="light">{t(copy["workshop"])}</SectionLabel>
              <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] sm:text-[3rem]">
                {t(copy["workshop-get-ready-to-shine"])}
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.8] text-sage-100/85">
                {t(copy["hulp-nodig-bij-de-voorbereiding-van-jouw-5-minutes-of-fame-in"])}
              </p>
            </div>

            <div className="mx-auto mt-9 max-w-xl space-y-5 text-[15px] leading-[1.75] text-sage-100/90">
              <p>
                {t(copy["sta-jij-binnenkort-op-het-podium-bij-vibes-voices-of-wil-je-ge"])}
              </p>
              <p className="font-semibold text-cream">
                {t(copy["wat-je-leert"])}
              </p>
              <ul className="space-y-2">
                {WORKSHOP_LEARNINGS.map((item) => (
                  <li key={item.nl}>&bull; {t(item)}</li>
                ))}
              </ul>
              <p>
                {t(copy["je-hoeft-niet-perfect-te-zijn-wel-echt-en-dat-leer-je-hier"])}
              </p>
              <div className="whitespace-pre-line rounded-2xl border border-cream/15 bg-cream/5 p-5">
                {t(copy["trainer-phaedra-la-reine-duur-45-minuten-locatie-online-via-zo"])}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button href={CALENDLY_URL} external variant="ghost">
                {t(copy["meld-je-aan"])}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionLabel>{t(copy["onze-sprekers"])}</SectionLabel>
          <h2 className="font-display mt-4 text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["op-zoek-naar-nieuwe-stemmen-met-impact"])}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-ink-soft">
            {t(copy["deze-sprekers-stonden-op-het-podium-van-vibes-voices-sommige-z"])}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-6 lg:px-8">
          <SpeakerWall
            groups={[
              { title: "20 minutes keynotes", names: KEYNOTE_SPEAKERS },
              { title: "5 minutes of fame", names: FAME_SPEAKERS },
            ]}
          />
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" variant="secondary">
            {t(copy["neem-contact-op"])}
          </Button>
        </div>
      </section>

      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-[2.4rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {t(copy["blijf-op-de-hoogte"])}
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.8] text-ink-soft">
            {t(copy["blijf-op-de-hoogte-van-nieuwe-events-en-tips-voor-sprekers"])}
          </p>
          <Reveal delay={0.1} className="mt-8">
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
