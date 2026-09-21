import type { Metadata } from "next";
import { SprekerContent } from "./SprekerContent";

export const metadata: Metadata = {
  title: "Spreker",
  description:
    "Boek Phaedra La Reine als spreker. Een keynote die raakt en iets in beweging zet — voor organisaties en events die meer willen dan inspiratie.",
};

export default function SprekerPage() {
  return <SprekerContent />;
}
