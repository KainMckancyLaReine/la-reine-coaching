import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Heb je een vraag? Of twijfel je waar je moet beginnen? Je hoeft het niet alleen uit te zoeken. Stuur een bericht of plan je eerste stap.",
};

export default function ContactPage() {
  return <ContactContent />;
}
