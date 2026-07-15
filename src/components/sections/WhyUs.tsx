import { Globe2, MapPinned, Sprout, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const reasons = [
  {
    icon: Globe2,
    title: "Export-ready quality",
    description:
      "Every harvest is grown and handled to standards buyers can rely on, at home and abroad.",
  },
  {
    icon: MapPinned,
    title: "Full traceability",
    description:
      "From field to buyer, we track what we grow — so origin and quality are never in question.",
  },
  {
    icon: TrendingUp,
    title: "Proven, backed growth",
    description:
      "Backed by the Tony Elumelu Foundation, with a clear, staged plan to scale our landholding.",
  },
  {
    icon: Sprout,
    title: "Rooted in the Niger Delta",
    description:
      "Native pepper varieties and full-cycle plantain, grown on land we know well.",
  },
];

export function WhyUs() {
  return (
    <Section background="cream">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Why partner with us"
          heading="An agribusiness built for the long term"
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <ScrollReveal key={reason.title} delay={i * 0.08}>
            <Card className="flex h-full flex-col gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <reason.icon size={20} />
              </div>
              <p className="text-h6 text-charcoal-900">{reason.title}</p>
              <p className="text-body-sm">{reason.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
