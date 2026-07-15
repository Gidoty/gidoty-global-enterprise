import { Check, Flame, Leaf, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const crops = [
  {
    icon: Flame,
    badge: "Core crop",
    badgeVariant: "accent" as const,
    iconWrap: "bg-accent-50 text-accent-600",
    title: "Scotch Bonnet & Cameroon Pepper",
    description:
      "Grown across the Niger Delta for the heat, flavour, and consistency Nigerian and export markets expect.",
    points: [
      "Native Niger Delta varieties",
      "Traceable from farm to buyer",
      "Export-grade quality standards",
    ],
  },
  {
    icon: Leaf,
    badge: "Core crop",
    badgeVariant: "primary" as const,
    iconWrap: "bg-primary-50 text-primary-700",
    title: "Plantain Cultivation",
    description:
      "Full-cycle plantain production grown for reliable yield and market-ready quality, harvest after harvest.",
    points: [
      "Full-cycle cultivation",
      "Consistent, high-yield harvests",
      "Supplies domestic & regional markets",
    ],
  },
];

export function Crops() {
  return (
    <Section id="crops" background="cream">
      <ScrollReveal>
        <SectionHeading
          eyebrow="What we grow"
          heading="Two core crops, grown with intent"
          subheading="Every harvest is grown with quality, traceability, and export-readiness in mind — not as an afterthought."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {crops.map((crop, i) => (
          <ScrollReveal key={crop.title} delay={i * 0.1}>
            <Card className="flex h-full flex-col gap-5">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${crop.iconWrap}`}
              >
                <crop.icon size={22} />
              </div>
              <Badge variant={crop.badgeVariant} className="w-fit">
                {crop.badge}
              </Badge>
              <p className="text-h5 text-charcoal-900">{crop.title}</p>
              <p className="text-body-sm">{crop.description}</p>
              <ul className="mt-auto flex flex-col gap-2 pt-4">
                {crop.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-body-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.2}>
          <Card className="flex h-full flex-col gap-5 border-dashed bg-transparent shadow-none hover:shadow-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-50 text-charcoal-700">
              <Sparkles size={22} />
            </div>
            <Badge variant="neutral" className="w-fit">
              Coming next
            </Badge>
            <p className="text-h5 text-charcoal-900">Diversifying further</p>
            <p className="text-body-sm">
              As the remaining farmland comes online, we&apos;re evaluating
              additional crops to grow alongside pepper and plantain —
              expanding what Gidoty Global Enterprise can offer the market.
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
}
