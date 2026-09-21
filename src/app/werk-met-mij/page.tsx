import type { Metadata } from "next";
import { WerkMetMijContent } from "./WerkMetMijContent";

export const metadata: Metadata = {
  title: "Werk met mij",
  description:
    "Je hoeft het niet alleen te doen. Je hoeft ook niet te blijven waar je nu bent. Dit zijn de manieren waarop je met Phaedra La Reine kunt werken.",
};

export default function WerkMetMijPage() {
  return <WerkMetMijContent />;
}
