import type { Metadata } from "next";
import { Flame, Leaf, Sparkles } from "lucide-react";
import { CropProfile } from "@/components/sections/CropProfile";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Our crops",
  description:
    "Scotch Bonnet and Cameroon pepper, and full-cycle plantain — grown in Rivers State, Nigeria for quality, traceability, and export-readiness.",
};

export default function CropsPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we grow"
        heading="Grown for quality, built for export"
        subheading="Two core crops today, with a roadmap to grow more. Every harvest carries the same standard for quality and traceability."
      />

      <CropProfile
        id="pepper"
        icon={Flame}
        iconWrap="bg-accent-50 text-accent-600"
        badge="Core crop"
        badgeVariant="accent"
        title="Scotch Bonnet & Cameroon Pepper"
        description="Grown across the Niger Delta, our pepper varieties are prized for the heat, flavour, and consistency that Nigerian kitchens and export markets both demand. Every plot is managed with quality and market-readiness in mind from planting to harvest."
        points={[
          "Native Niger Delta varieties, grown on land we know well",
          "Traceable from farm to buyer",
          "Handled to export-grade quality standards",
        ]}
        panelTitle="Crop profile"
        panelItems={[
          { label: "Varieties", value: "Scotch Bonnet & Cameroon" },
          { label: "Native region", value: "Niger Delta" },
          { label: "Grown for", value: "Heat, flavour & consistency" },
          { label: "Market focus", value: "Domestic & export-ready" },
        ]}
        panelWrap="bg-accent-50 text-charcoal-900"
      />

      <CropProfile
        id="plantain"
        icon={Leaf}
        iconWrap="bg-primary-50 text-primary-700"
        badge="Core crop"
        badgeVariant="primary"
        title="Plantain Cultivation"
        description="Alongside pepper, we run full-cycle plantain cultivation — from planting through to harvest — built for reliable yield and market-ready quality on every cycle."
        points={[
          "Full-cycle cultivation, managed end to end",
          "Consistent, high-yield harvests",
          "Supplies domestic and regional markets",
        ]}
        panelTitle="Crop profile"
        panelItems={[
          { label: "Cultivation", value: "Full-cycle" },
          { label: "Grown for", value: "Yield & consistency" },
          { label: "Market focus", value: "Domestic & regional" },
          { label: "Status", value: "Active cultivation" },
        ]}
        panelWrap="bg-primary-800 text-cream-100"
        reverse
      />

      <Section background="cream">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-50 text-charcoal-700">
            <Sparkles size={22} />
          </div>
          <Badge variant="neutral">Coming next</Badge>
          <h2 className="text-h3 text-charcoal-900">Diversifying further</h2>
          <p className="text-body">
            As the remaining acres of our landholding come into production,
            we&apos;re evaluating additional crops to grow alongside pepper
            and plantain — expanding what Gidoty Global Enterprise can offer
            the market, one deliberate phase at a time.
          </p>
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
