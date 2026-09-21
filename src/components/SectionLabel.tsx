export function SectionLabel({
  children,
  tone = "dark",
}: {
  children: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.3em] ${
        tone === "light" ? "text-gold-200" : "text-sage-700"
      }`}
    >
      {children}
    </p>
  );
}
