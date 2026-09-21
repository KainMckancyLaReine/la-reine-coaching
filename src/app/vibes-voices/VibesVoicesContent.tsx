"use client";
import { asset } from "@/lib/asset";

import { Coffee, Mic, Eye, GraduationCap, Megaphone } from "lucide-react";
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
  {
    icon: Eye,
    label: { nl: "Ik wil kijken", en: "I want to watch" },
    href: CALENDLY_URL,
    external: true,
  },
  { icon: GraduationCap, label: { nl: "Ik wil leren", en: "I want to learn" }, href: "#workshop" },
  {
    icon: Megaphone,
    label: { nl: "Ik zoek sprekers", en: "I'm looking for speakers" },
    href: "/contact",
  },
];

const WORKSHOP_LEARNINGS = [
  { nl: "Hoe je een krachtige structuur opbouwt", en: "How to build a powerful structure" },
  {
    nl: "Hoe je voor interactie zorgt met het publiek",
    en: "How to create interaction with the audience",
  },
  {
    nl: "Hoe je jouw zenuwen in je voordeel gebruikt",
    en: "How to turn your nerves to your advantage",
  },
  {
    nl: "Presentatietips voor houding, stem en uitstraling",
    en: "Presentation tips for posture, voice and presence",
  },
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
          nl: "Vibes & Voices is het platform voor (beginnende) sprekers die willen groeien, verbinden en impact maken.\nClaim je plek op het podium, luister naar inspirerende verhalen of ontdek sprekers voor jouw event.",
          en: "Vibes & Voices is the platform for (aspiring) speakers who want to grow, connect and make impact.\nClaim your spot on stage, listen to inspiring stories or discover speakers for your event.",
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
                <span className="text-xs font-medium text-ink-soft">{t(cta.label)}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
        <Testimonial
          quote={t({
            nl: "Vibes en Voices is een evenement waar sprekers en luisteraars samenkomen in een hele fijne, leuke cafe setting. Ik ging in eerste instantie als luisteraar en belandde toch op het podium. Gesproken over leuke nieuwe uitdagingen",
            en: "Vibes and Voices is an event where speakers and listeners come together in a really nice, fun café setting. I initially went as a listener and still ended up on stage. Talk about fun new challenges",
          })}
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
          caption={t({
            nl: "Jij brengt de Vibes, wij de Voices!",
            en: "You bring the Vibes, we bring the Voices!",
          })}
        />
      </section>

      <section className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <Reveal>
            <SectionLabel tone="light">{t({ nl: "Onze missie", en: "Our mission" })}</SectionLabel>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              {t({ nl: "Verbinding door verhalen", en: "Connection through stories" })}
            </h2>
            <p className="mt-6 whitespace-pre-line text-sage-100/85">
              {t({
                nl: "Vibes & Voices is er voor iedereen die wil leren spreken met impact.\nWe geloven dat echtheid meer raakt dan perfectie.\nBij ons vind je ruimte om te oefenen, geïnspireerd te raken en je stem te laten horen.",
                en: "Vibes & Voices is there for everyone who wants to learn to speak with impact.\nWe believe authenticity moves people more than perfection.\nWith us you'll find space to practice, to get inspired and to let your voice be heard.",
              })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PortraitFrame
            src={asset("/images/phaedra-desk.jpg")}
            alt="Phaedra La Reine"
            accent="gold"
            rotate={-2}
            width={1400}
            height={1400}
            className="mx-auto w-full max-w-sm"
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-sm leading-relaxed text-ink-soft">
              <p>
                {t({
                  nl: "Als Lisa Nichols Certified Transformational Trainer wilde ik direct aan de slag als spreekster. Ik heb immers genoeg verhalen te delen en ben opgeleid door één van de beste uit de internationale sprekerswereld.",
                  en: "As a Lisa Nichols Certified Transformational Trainer I wanted to start working as a speaker right away. After all, I have plenty of stories to share and was trained by one of the best in the international speaking world.",
                })}
              </p>
              <p className="font-display text-xl text-ink">
                {t({
                  nl: "Er was slechts één probleem: niemand kent mij dus niemand boekt mij.",
                  en: "There was just one problem: nobody knows me, so nobody books me.",
                })}
              </p>
              <p>
                {t({
                  nl: "Hoe kom je als beginnende spreker aan opdrachten? Hoe kan je meters maken als niemand je vraagt? Door je eigen event te creëren. Dus dat is wat ik deed en ik dacht, als ik een podium zoek dan zijn er vast meer die dat doen. Zo is Vibes & Voices ontstaan, een podium voor sprekers. Of je er nou een carrière van wilt maken of dat je spreken voor een groep gewoon een keer wilt proberen, bij Vibes & Voices is het mogelijk.",
                  en: "How do you get gigs as a beginning speaker? How do you build experience when nobody asks you? By creating your own event. So that's what I did, and I thought: if I'm looking for a stage, there are probably more people like me. That's how Vibes & Voices came about, a stage for speakers. Whether you want to make a career out of it or simply want to try speaking to a group once, at Vibes & Voices it's possible.",
                })}
              </p>
              <p className="font-display text-lg italic text-forest">~ Phaedra La Reine</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {t({
                nl: "Vibes & Voices - Storytelling Pop up café",
                en: "Vibes & Voices - Storytelling Pop up café",
              })}
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
              {t({
                nl: "Gezellig | Laagdrempelig | Verbindend",
                en: "Cosy | Low-key | Connecting",
              })}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                  <Coffee size={22} />
                </div>
                <h3 className="font-display mt-6 text-2xl text-ink">
                  {t({ nl: "Avondje uit", en: "A night out" })}
                </h3>
                <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-ink-soft">
                  <p>
                    {t({
                      nl: "Elke eerste vrijdagavond van de maand organiseren we het Vibes & Voices Pop-up Café: een open mic voor echte verhalen.",
                      en: "Every first Friday evening of the month we host the Vibes & Voices Pop-up Café: an open mic for real stories.",
                    })}
                  </p>
                  <p>
                    {t({
                      nl: "In een intiem café krijgen gastsprekers 5 minuten op het podium om te inspireren, verbinden en raken.",
                      en: "In an intimate café, guest speakers get 5 minutes on stage to inspire, connect and move people.",
                    })}
                  </p>
                  <p>
                    {t({
                      nl: "Het publiek kan onder het genot van een drankje en een borrelmandje genieten van het meest inspirerende avondje uit.",
                      en: "The audience can enjoy the most inspiring night out with a drink and a snack basket.",
                    })}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href={CALENDLY_URL} external variant="secondary">
                    {t({ nl: "Bekijk volgende editie", en: "See the next edition" })}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                  5 minutes of fame
                </p>
                <h3 className="font-display mt-3 text-2xl text-ink">
                  {t({ nl: "Pak je moment", en: "Take your moment" })}
                </h3>
                <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-ink-soft">
                  <p>
                    {t({
                      nl: "Durf jij het aan om 5 minuten op het podium te staan? Of ben je reeds ervaren en wil je komen inspireren?",
                      en: "Do you dare to stand on stage for 5 minutes? Or are you already experienced and want to come and inspire?",
                    })}
                  </p>
                  <p>
                    {t({
                      nl: "Wij bieden een podium vrij van racisme, expliciete content, politiek en salespitches.",
                      en: "We offer a stage free of racism, explicit content, politics and sales pitches.",
                    })}
                  </p>
                  <p>
                    {t({
                      nl: "Meld je aan en pak je moment.",
                      en: "Sign up and take your moment.",
                    })}
                  </p>
                  <p className="font-medium text-ink">
                    {t({ nl: "Locatie: Amsterdam Noord", en: "Location: Amsterdam Noord" })}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href="/contact" variant="secondary">
                    {t({ nl: "Claim je spot", en: "Claim your spot" })}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-700">
                  Spotlight Talk
                </p>
                <h3 className="font-display mt-3 text-2xl text-ink">Phaedra La Reine</h3>
                <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-ink-soft">
                  <p>
                    {t({
                      nl: "Tijdens de Spotlight Talk neemt Phaedra La Reine je zo’n 20 minuten mee in een inspirerende keynote.",
                      en: "During the Spotlight Talk, Phaedra La Reine takes you along for about 20 minutes in an inspiring keynote.",
                    })}
                  </p>
                  <p>
                    {t({
                      nl: "In de ontspannen setting van het Vibes & Voices pop-up café - drankje erbij, fijne mensen om je heen - luister je naar een persoonlijk verhaal dat raakt en blijft hangen. Geen perfecte plaatjes, maar echte verhalen. Soms licht, soms scherp en altijd eerlijk. Verhalen die je laten voelen wat er gebeurt als je écht je stem pakt en waarom dat elke keer weer de moeite waard is om bij te zijn. Dus kom voor de gezelligheid en blijf voor het verhaal.",
                      en: "In the relaxed setting of the Vibes & Voices pop-up café - a drink in hand, good people around you - you listen to a personal story that moves you and stays with you. No perfect pictures, but real stories. Sometimes light, sometimes sharp and always honest. Stories that let you feel what happens when you truly take your voice, and why that's worth being there for every single time. So come for the atmosphere and stay for the story.",
                    })}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href={CALENDLY_URL} external variant="secondary">
                    {t({ nl: "Kom luisteren", en: "Come listen" })}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="workshop" className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <SectionLabel tone="light">{t({ nl: "Workshop", en: "Workshop" })}</SectionLabel>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">
                {t({
                  nl: "Workshop - Get ready to shine",
                  en: "Workshop - Get ready to shine",
                })}
              </h2>
              <p className="mt-4 text-sage-100/85">
                {t({
                  nl: "Hulp nodig bij de voorbereiding van jouw “5 minutes of fame” in ons pop up café? We got you!",
                  en: "Need help preparing your “5 minutes of fame” in our pop-up café? We got you!",
                })}
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl space-y-4 text-sm leading-relaxed text-sage-100/90">
              <p>
                {t({
                  nl: "Sta jij binnenkort op het podium bij Vibes & Voices? Of wil je gewoon krachtiger leren spreken in het openbaar? In de online workshop “Get ready to shine” help ik je om zelfverzekerd, helder en met impact jouw verhaal te brengen in slechts 5 minuten.",
                  en: "Are you about to take the stage at Vibes & Voices? Or do you simply want to learn to speak more powerfully in public? In the online workshop “Get ready to shine” I help you bring your story confidently, clearly and with impact in just 5 minutes.",
                })}
              </p>
              <p className="font-semibold text-cream">
                {t({ nl: "Wat je leert:", en: "What you'll learn:" })}
              </p>
              <ul className="space-y-2">
                {WORKSHOP_LEARNINGS.map((item) => (
                  <li key={item.nl}>&bull; {t(item)}</li>
                ))}
              </ul>
              <p>
                {t({
                  nl: "Je hoeft niet perfect te zijn, wel echt en dat leer je hier.",
                  en: "You don't have to be perfect, just real — and that's what you learn here.",
                })}
              </p>
              <div className="whitespace-pre-line rounded-2xl border border-cream/15 bg-cream/5 p-5">
                {t({
                  nl: "Trainer: Phaedra La Reine\nDuur: 45 minuten\nLocatie: Online (via Zoom)\nInvestering: €37,- excl. btw",
                  en: "Trainer: Phaedra La Reine\nDuration: 45 minutes\nLocation: Online (via Zoom)\nInvestment: €37 excl. VAT",
                })}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button href={CALENDLY_URL} external variant="ghost">
                {t({ nl: "Meld je aan", en: "Sign up" })}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionLabel>{t({ nl: "Onze sprekers", en: "Our speakers" })}</SectionLabel>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            {t({
              nl: "Op zoek naar nieuwe stemmen met impact?",
              en: "Looking for new voices with impact?",
            })}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {t({
              nl: "Deze sprekers stonden op het podium van Vibes & Voices. Sommige zijn reeds te boeken als ervaren sprekers, anderen stonden er eenmalig. Interesse in een van de sprekers? Neem contact met ons op voor meer informatie.",
              en: "These speakers have stood on the Vibes & Voices stage. Some are already bookable as experienced speakers, others were there once. Interested in one of the speakers? Get in touch with us for more information.",
            })}
          </p>
        </div>
        <div className="mt-10 space-y-3">
          <SpeakerMarquee names={KEYNOTE_SPEAKERS} />
          <SpeakerMarquee names={FAME_SPEAKERS} reverse />
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" variant="secondary">
            {t({ nl: "Neem contact op", en: "Get in touch" })}
          </Button>
        </div>
      </section>

      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {t({ nl: "Blijf op de hoogte", en: "Stay updated" })}
          </h2>
          <p className="mt-3 text-ink-soft">
            {t({
              nl: "Blijf op de hoogte van nieuwe events en tips voor sprekers",
              en: "Stay updated on new events and tips for speakers",
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
