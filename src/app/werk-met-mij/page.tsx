import type { Metadata } from "next";
import { WerkMetMijContent } from "./WerkMetMijContent";

export const metadata: Metadata = {
  title: "Werk met mij",
  description:
    "Je hoeft het niet alleen te doen. Ontdek de manieren waarop je met Phaedra La Reine kunt werken: coaching, keynotes en Vibes & Voices.",
};

export default function WerkMetMijPage() {
  return <WerkMetMijContent />;
}
