import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-charcoal-100 bg-cream-100 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
