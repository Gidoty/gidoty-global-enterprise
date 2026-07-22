import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "accent" | "gold" | "neutral";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary-50 text-primary-700",
  accent: "bg-accent-50 text-accent-700",
  gold: "bg-gold-50 text-gold-800",
  neutral: "bg-charcoal-50 text-charcoal-700",
};

export function Badge({ variant = "primary", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.08em]",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
