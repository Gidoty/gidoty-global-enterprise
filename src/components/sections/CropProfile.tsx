import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CropProfileProps {
  id?: string;
  icon: LucideIcon;
  iconWrap: string;
  badge: string;
  badgeVariant: "primary" | "accent" | "gold" | "neutral";
  title: string;
  description: string;
  points: string[];
  panelTitle: string;
  panelItems: { label: string; value: string }[];
  panelWrap: string;
  reverse?: boolean;
  illustration?: React.ReactNode;
}

export function CropProfile({
  id,
  icon: Icon,
  iconWrap,
  badge,
  badgeVariant,
  title,
  description,
  points,
  panelTitle,
  panelItems,
  panelWrap,
  reverse = false,
  illustration,
}: CropProfileProps) {
  return (
    <Section id={id} background="cream">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <ScrollReveal className={reverse ? "lg:order-2" : ""}>
          <div className="flex flex-col gap-5">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconWrap}`}
            >
              <Icon size={22} />
            </div>
            <Badge variant={badgeVariant} className="w-fit">
              {badge}
            </Badge>
            <h2 className="text-h2 text-charcoal-900">{title}</h2>
            <p className="text-body">{description}</p>
            <ul className="flex flex-col gap-3 pt-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-body-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className={reverse ? "lg:order-1" : ""}>
          <div className={`rounded-3xl p-8 sm:p-10 ${panelWrap}`}>
            {illustration ? (
              <div className="mb-8 flex justify-center">{illustration}</div>
            ) : null}
            <p className="mb-8 text-xs font-sans uppercase tracking-[0.14em] opacity-60">
              {panelTitle}
            </p>
            <div className="flex flex-col gap-6">
              {panelItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="font-sans text-sm opacity-70">
                    {item.label}
                  </span>
                  <span className="text-right text-sm font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
