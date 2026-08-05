import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-deep shadow-[0_8px_24px_-8px_rgba(18,74,59,0.45)]",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-forest hover:text-forest",
  ghost: "bg-gold-100/70 text-forest hover:bg-gold-100",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-[13px]",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
