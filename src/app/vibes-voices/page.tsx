import type { Metadata } from "next";
import { VibesVoicesContent } from "./VibesVoicesContent";

export const metadata: Metadata = {
  title: "Vibes & Voices",
  description:
    "Vibes & Voices is het platform voor (beginnende) sprekers die willen groeien, verbinden en impact maken. Open mic pop-up café in Amsterdam Noord.",
};

export default function VibesVoicesPage() {
  return <VibesVoicesContent />;
}
