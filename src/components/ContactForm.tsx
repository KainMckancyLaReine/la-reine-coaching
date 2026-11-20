"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useT } from "@/lib/i18n";
import { FORM_EMAIL, sendForm } from "@/lib/forms";
import siteContent from "@/content/site.json";

const copy = siteContent["ContactForm"];

const SUBJECTS = [
  copy["coaching-voice-activation"],
  copy["spreker-keynotes"],
  copy["vibes-voices"],
  copy["shop-bestelling"],
  copy["iets-anders"],
];

export function ContactForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("_honey")) return; // spam-bot
    const get = (k: string) => String(form.get(k) ?? "").trim();
    setSending(true);
    setError(false);
    try {
      await sendForm(
        `Nieuw bericht via de website: ${get("onderwerp")}`,
        {
          Voornaam: get("voornaam"),
          Achternaam: get("achternaam"),
          "E-mailadres": get("email"),
          Telefoonnummer: get("telefoon"),
          Onderwerp: get("onderwerp"),
          Bericht: get("bericht"),
        },
        get("email"),
      );
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex items-start gap-3 rounded-3xl border border-sage-300 bg-sage-50 p-8">
        <CheckCircle2 className="mt-0.5 shrink-0 text-forest" size={22} />
        <p className="text-ink">
          {t(copy["dank-je-ik-kom-zo-snel-mogelijk-bij-je-terug"])}
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
          {t(copy["voornaam"])}
        </label>
        <input
          name="voornaam"
          autoComplete="given-name"
          required
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft">
          {t(copy["achternaam"])}
        </label>
        <input
          name="achternaam"
          autoComplete="family-name"
          required
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft">
          {t(copy["e-mailadres"])}
        </label>
        <input
          name="email"
          autoComplete="email"
          required
          type="email"
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft">
          {t(copy["telefoonnummer-optioneel"])}
        </label>
        <input
          name="telefoon"
          autoComplete="tel"
          type="tel"
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="text-xs font-medium text-ink-soft">
          {t(copy["onderwerp"])}
        </label>
        <select
          name="onderwerp"
          required
          defaultValue=""
          className="rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        >
          <option value="" disabled>
            {t(copy["kies-een-optie"])}
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
          {t(copy["laat-een-bericht-achter"])}
        </label>
        <textarea
          name="bericht"
          required
          rows={5}
          className="resize-none rounded-xl border border-line bg-cream px-4 py-2.5 text-sm outline-none focus:border-sage-500"
        />
      </div>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {sending && <Loader2 size={16} className="animate-spin" />}
          {sending
            ? t(copy["bezig-met-versturen"])
            : t(copy["verstuur-mijn-bericht"])}
        </button>
        {error && (
          <p role="alert" className="mt-4 text-sm text-red-700">
            {t(copy["er-ging-iets-mis-bij-het-versturen-probeer-het-opnieuw-of-mail"])}
            <a href={`mailto:${FORM_EMAIL}`} className="underline">
              {FORM_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
