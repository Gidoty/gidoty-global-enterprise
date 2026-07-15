import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Cultivate",
    description:
      "Pepper and plantain are grown on carefully managed plots, using practices suited to Niger Delta soil and climate.",
  },
  {
    number: "02",
    title: "Inspect",
    description:
      "Every harvest is checked for size, quality, and consistency before it leaves the farm.",
  },
  {
    number: "03",
    title: "Trace",
    description:
      "Produce is tracked from field to buyer, so quality and origin are never in question.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Sorted, quality-checked produce is prepared for domestic markets and export-ready buyers.",
  },
];

export function Process() {
  return (
    <Section background="cream">
      <ScrollReveal>
        <SectionHeading
          eyebrow="How we work"
          heading="Quality and traceability, at every stage"
          subheading="A consistent process from field to buyer, built for markets that expect more than a good crop."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.1}>
            <div className="flex flex-col gap-3 border-t-2 border-primary-700 pt-5">
              <span className="font-display text-3xl text-primary-300">
                {step.number}
              </span>
              <p className="text-h6 text-charcoal-900">{step.title}</p>
              <p className="text-body-sm">{step.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
