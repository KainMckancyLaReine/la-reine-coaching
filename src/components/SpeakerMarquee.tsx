export function SpeakerMarquee({
  names,
  reverse = false,
}: {
  names: string[];
  reverse?: boolean;
}) {
  const doubled = [...names, ...names];

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="flex w-max gap-3"
        style={{
          animation: `marquee ${names.length * 2.4}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-ink-soft"
          >
            {name}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
