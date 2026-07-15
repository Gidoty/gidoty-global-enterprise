import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <p className="text-caption text-accent-600">{eyebrow}</p> : null}
      <h2 className="text-h2 max-w-2xl text-charcoal-900">{heading}</h2>
      {subheading ? (
        <p className="text-body max-w-xl text-charcoal-500">{subheading}</p>
      ) : null}
    </div>
  );
}
