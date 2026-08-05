"use client";
import { asset } from "@/lib/asset";

import {
  Coffee,
  Mic,
  Clock,
  MapPin,
  Sparkle,
  Eye,
  GraduationCap,
  Megaphone,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Testimonial } from "@/components/Testimonial";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SpeakerMarquee } from "@/components/SpeakerMarquee";
import { PortraitFrame } from "@/components/PortraitFrame";
import { EventShowcase } from "@/components/EventShowcase";
import { CALENDLY_URL } from "@/lib/nav";
import { useT } from "@/lib/i18n";

const CTAS = [
  { icon: Mic, label: { nl: "Ik wil spreken", en: "I want to speak" }, href: "/contact" },
  { icon: Eye, label: { nl: "Ik wil kijken", en: "I want to watch" }, href: CALENDLY_URL, external: true },
  { icon: GraduationCap, label: { nl: "Ik wil leren", en: "I want to learn" }, href: "#workshop" },
  { icon: Megaphone, label: { nl: "Ik zoek sprekers", en: "I'm looking for speakers" }, href: "/contact" },
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
        eyebrow="Vibes & Voices"
        title={
          <>
            {t({ nl: "Jij brengt de Vibes,", en: "You bring the Vibes," })}
            <br />
            <span className="italic text-gold-600">
              {t({ nl: "wij de Voices!", en: "we bring the Voices!" })}
            </span>
          </>
        }
        subtitle={t({
          nl: "Voor (beginnende) sprekers die willen groeien, verbinden en impact maken.",
          en: "For (aspiring) speakers who want to grow, connect and make impact.",
        })}
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
                <span className="text-xs font-medium text-ink-soft">
                  {t(cta.label)}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-4">
        <EventShowcase
          mainSrc={asset("/images/vibes-voices-event.jpg")}
          mainAlt="Vibes & Voices pop-up café avond"
          secondarySrc={asset("/images/vibes-voices-flyer.jpg")}
          secondaryAlt="Vibes & Voices House of Speakers flyer"
          caption={t({
            nl: "Breng jij de vibes, wij brengen de voices.",
            en: "You bring the vibes, we bring the voices.",
          })}
        />
      </section>

      <section className="bg-forest py-16 text-center text-cream">
        <Reveal>
          <SectionLabel>{t({ nl: "Onze missie", en: "Our mission" })}</SectionLabel>
          <p className="font-display mx-auto mt-4 max-w-2xl text-2xl italic leading-snug sm:text-3xl">
            &ldquo;
            {t({
              nl: "Spreken met lef, luisteren met je hart. Want iedereen heeft een verhaal dat gehoord mag worden.",
              en: "Speak with courage, listen with your heart. Because everyone has a story that deserves to be heard.",
            })}
            &rdquo;
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PortraitFrame
            src={asset("/images/vibes-voices-popup.jpg")}
            alt="Vibes & Voices pop-up café"
            accent="gold"
            rotate={-2}
            width={1080}
            height={1080}
            className="mx-auto w-full max-w-sm"
          />
          <Reveal delay={0.1}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
              <Coffee size={22} />
            </div>
            <h2 className="font-display mt-6 text-3xl text-ink">
              {t({ nl: "Het pop-up café", en: "The pop-up café" })}
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              {t({
                nl: "Een podium voor persoonlijke verhalen, tijdens gezellige open mic-avonden in een intieme cafésetting. Laagdrempelig, verbindend en altijd oprecht.",
                en: "A stage for personal stories, during cozy open mic nights in an intimate café setting. Low-key, connecting and always genuine.",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="rounded-3xl border border-line bg-sage-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                {t({ nl: "Avondje uit", en: "Evening out" })}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-forest" />
                  {t({
                    nl: "Elke eerste vrijdag van de maand",
                    en: "Every first Friday of the month",
                  })}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-forest" />
                  {t({ nl: "Intieme cafésetting", en: "Intimate café setting" })}
                </li>
                <li className="flex items-center gap-2">
                  <Mic size={16} className="text-forest" />
                  {t({ nl: "5 minuten spreektijd per gast", en: "5 minutes of stage time per guest" })}
                </li>
                <li className="flex items-center gap-2">
                  <Sparkle size={16} className="text-forest" />
                  {t({ nl: "Drankjes en hapjes inbegrepen", en: "Drinks and snacks included" })}
                </li>
              </ul>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external variant="primary">
                  {t({ nl: "Bekijk volgende editie", en: "See the next edition" })}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <SectionLabel>{t({ nl: "Onze sprekers", en: "Our speakers" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Ben jij de volgende?", en: "Will you be next?" })}
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          <SpeakerMarquee names={KEYNOTE_SPEAKERS} />
          <SpeakerMarquee names={FAME_SPEAKERS} reverse />
        </div>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Testimonial
            quote={t({
              nl: "Vibes en Voices is een event waar sprekers en luisteraars samenkomen in een warme cafésetting. Ik kwam als publiek — en eindigde op het podium.",
              en: "Vibes and Voices is an event where speakers and listeners come together in a warm café setting. I came as an audience member — and ended up on stage.",
            })}
            name="Mandy Reemnet"
            role="Mandy PT"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-paper p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                5 Minutes of Fame
              </p>
              <h3 className="font-display mt-3 text-2xl text-ink">
                Amsterdam Noord
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t({
                  nl: "Jouw kans om kort maar krachtig het podium te pakken. Geen racisme, expliciete content, politiek of verkooppraatjes — alleen jouw echte verhaal.",
                  en: "Your chance to take the stage, short and powerful. No racism, explicit content, politics or sales pitches — just your real story.",
                })}
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">
                  {t({ nl: "Claim je spot", en: "Claim your spot" })}
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-line bg-paper p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                Spotlight Talk &middot; ~20 {t({ nl: "min", en: "min" })}
              </p>
              <h3 className="font-display mt-3 text-2xl text-ink">
                Phaedra La Reine
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t({
                  nl: "Echte verhalen. Soms licht, soms scherp, altijd eerlijk. Ontdek waarom de oprichter van Vibes & Voices dit podium ooit zelf begon.",
                  en: "Real stories. Sometimes light, sometimes sharp, always honest. Discover why the founder of Vibes & Voices started this stage herself.",
                })}
              </p>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external variant="secondary">
                  {t({ nl: "Kom luisteren", en: "Come listen" })}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="workshop" className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel>{`Workshop · ${t({ nl: "online via Zoom", en: "online via Zoom" })} · 45 min`}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              Get Ready to Shine
            </h2>
            <p className="mt-4 text-sage-100/85">
              {t({
                nl: "Door Phaedra La Reine. Je hoeft niet perfect te zijn, wel echt.",
                en: "By Phaedra La Reine. You don't need to be perfect, just real.",
              })}
            </p>
            <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left text-sm text-sage-100/90">
              <li>
                &bull;{" "}
                {t({ nl: "Een krachtige structuur opbouwen", en: "Build a powerful structure" })}
              </li>
              <li>
                &bull; {t({ nl: "Interactie creëren met je publiek", en: "Create interaction with your audience" })}
              </li>
              <li>
                &bull; {t({ nl: "Zenuwen inzetten als voordeel", en: "Turn nerves into an advantage" })}
              </li>
              <li>
                &bull;{" "}
                {t({
                  nl: "Presentatietechnieken: houding, stem, presence",
                  en: "Presentation techniques: posture, voice, presence",
                })}
              </li>
            </ul>
            <p className="mt-8 font-display text-2xl text-gold-200">
              &euro;37,- {t({ nl: "excl. btw", en: "excl. VAT" })}
            </p>
            <div className="mt-6">
              <Button href={CALENDLY_URL} external variant="ghost">
                {t({ nl: "Meld je aan", en: "Sign up" })}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <SectionLabel>{t({ nl: "Blijf op de hoogte", en: "Stay updated" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({ nl: "Nooit meer een editie missen", en: "Never miss an edition" })}
          </h2>
          <p className="mt-3 text-ink-soft">
            {t({
              nl: "Updates over nieuwe events en tips voor sprekers, rechtstreeks in je inbox.",
              en: "Updates on new events and tips for speakers, straight to your inbox.",
            })}
          </p>
          <Reveal delay={0.1} className="mt-8">
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
