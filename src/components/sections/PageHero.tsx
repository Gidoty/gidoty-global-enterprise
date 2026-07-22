import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
}

export function PageHero({ eyebrow, heading, subheading }: PageHeroProps) {
  return (
    <Section
      background="cream"
      className="relative overflow-hidden pt-36 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-100 blur-3xl"
      />
      <ScrollReveal>
        <div className="relative flex max-w-2xl flex-col gap-5">
          <p className="text-caption text-accent-600">{eyebrow}</p>
          <h1 className="text-h1 text-charcoal-900">{heading}</h1>
          {subheading ? <p className="text-body max-w-xl">{subheading}</p> : null}
        </div>
      </ScrollReveal>
    </Section>
  );
}
