// Formulieren worden verstuurd via FormSubmit (https://formsubmit.co).
// Werkt zonder eigen server, dus ook op GitHub Pages.
// Let op: de allereerste inzending stuurt een activatiemail naar dit adres.
// Klik op "Activate Form" in die mail, daarna komen alle berichten binnen.
export const FORM_EMAIL = "info@lareinecoaching.nl";

const ENDPOINT = `https://formsubmit.co/ajax/${FORM_EMAIL}`;

export async function sendForm(
  subject: string,
  fields: Record<string, string>,
  replyTo?: string,
): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: "table",
      _captcha: "false",
      ...(replyTo ? { _replyto: replyTo } : {}),
    }),
  });
  const data = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
  if (!res.ok || !data || String(data.success) !== "true") {
    throw new Error("Versturen mislukt");
  }
}
