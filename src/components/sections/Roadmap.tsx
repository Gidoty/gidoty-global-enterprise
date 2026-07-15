import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

const phases = [
  {
    phase: "Phase 1",
    status: "Active",
    badgeVariant: "primary" as const,
    title: "Foundation",
    description: `${COMPANY.activeAcres} acres under active cultivation, growing Scotch Bonnet and Cameroon pepper alongside plantain.`,
  },
  {
    phase: "Phase 2",
    status: "Next",
    badgeVariant: "accent" as const,
    title: "Scaling up",
    description:
      "Expanding cultivation across additional acreage and strengthening export-readiness for both core crops.",
  },
  {
    phase: "Phase 3",
    status: "Future",
    badgeVariant: "neutral" as const,
    title: "Diversification",
    description:
      "Bringing the remaining farmland into production and introducing new crops alongside pepper and plantain.",
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap" background="cream">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Land & expansion"
          heading="A clear roadmap for our full landholding"
          subheading={`We hold ${COMPANY.totalAcres} acres in Rivers State. Here's how we're bringing all of it into production.`}
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-12">
          <div className="flex items-baseline justify-between">
            <p className="text-body-sm font-medium text-charcoal-900">
              {COMPANY.activeAcres} of {COMPANY.totalAcres} acres under cultivation
            </p>
            <p className="text-body-sm">~30%</p>
          </div>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-charcoal-100">
            <div className="h-full w-[30%] rounded-full bg-primary-600" />
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {phases.map((phase, i) => (
          <ScrollReveal key={phase.phase} delay={i * 0.1}>
            <Card className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-caption">{phase.phase}</p>
                <Badge variant={phase.badgeVariant}>{phase.status}</Badge>
              </div>
              <p className="text-h5 text-charcoal-900">{phase.title}</p>
              <p className="text-body-sm">{phase.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
