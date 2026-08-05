"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useT } from "@/lib/i18n";

const SUBJECTS = [
  { nl: "Coaching & Voice Activation", en: "Coaching & Voice Activation" },
  { nl: "Spreker & Keynotes", en: "Speaker & Keynotes" },
  { nl: "Vibes & Voices", en: "Vibes & Voices" },
  { nl: "Shop / bestelling", en: "Shop / order" },
  { nl: "Iets anders", en: "Something else" },
];

export function ContactForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-3 rounded-3xl border border-sage-300 bg-sage-50 p-8">
        <CheckCircle2 className="mt-0.5 shrink-0 text-forest" size={22} />
        <p className="text-ink">
          {t({
            nl: "Dank je, ik kom zo snel mogelijk bij je terug.",
            en: "Thank you, I'll get back to you as soon as possible.",
          })}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-3xl border border-line bg-paper p-8 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft">
          {t({ nl: "Voornaam", en: "First name" })}
        </label>
        <input
          required
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft">
          {t({ nl: "Achternaam", en: "Last name" })}
        </label>
        <input
          required
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft">
          {t({ nl: "E-mailadres", en: "Email address" })}
        </label>
        <input
          required
          type="email"
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft">
          {t({ nl: "Telefoonnummer", en: "Phone number" })}
        </label>
        <input
          required
          type="tel"
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="text-xs font-medium text-ink-soft">
          {t({ nl: "Onderwerp", en: "Subject" })}
        </label>
        <select
          required
          defaultValue=""
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        >
          <option value="" disabled>
            {t({ nl: "Kies een onderwerp", en: "Choose a subject" })}
          </option>
          {SUBJECTS.map((s) => (
            <option key={s.nl} value={s.nl}>
              {t(s)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="text-xs font-medium text-ink-soft">
          {t({ nl: "Bericht", en: "Message" })}
        </label>
        <textarea
          required
          rows={5}
          className="resize-none rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-forest px-8 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
        >
          {t({ nl: "Verstuur mijn bericht", en: "Send my message" })}
        </button>
      </div>
    </form>
  );
}
