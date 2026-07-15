import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionBackground = "cream" | "primary" | "charcoal" | "transparent";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  as?: "section" | "div";
  container?: boolean;
}

const backgroundStyles: Record<SectionBackground, string> = {
  cream: "bg-cream-200 text-charcoal-900",
  primary: "bg-primary-800 text-cream-100",
  charcoal: "bg-charcoal-900 text-cream-100",
  transparent: "",
};

export function Section({
  background = "transparent",
  as = "section",
  container = true,
  className,
  children,
  ...props
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "py-16 sm:py-20 lg:py-28",
        backgroundStyles[background],
        className,
      )}
      {...props}
    >
      {container ? <Container>{children}</Container> : children}
    </Tag>
  );
}
