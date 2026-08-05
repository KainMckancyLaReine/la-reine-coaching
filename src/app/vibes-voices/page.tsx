import type { Metadata } from "next";
import { VibesVoicesContent } from "./VibesVoicesContent";

export const metadata: Metadata = {
  title: "Vibes & Voices",
  description:
    "Jij brengt de Vibes, wij de Voices! Voor (beginnende) sprekers die willen groeien, verbinden en impact maken. Open mic events in Amsterdam.",
};

export default function VibesVoicesPage() {
  return <VibesVoicesContent />;
}
