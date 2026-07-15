import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

const stats = [
  { value: COMPANY.totalAcres, label: "Acres of farmland" },
  { value: `${COMPANY.activeAcres} acres`, label: "Under active cultivation" },
  { value: COMPANY.grantAmount, label: `TEF Grant, ${COMPANY.grantYear}` },
  { value: "2", label: "Core crops, growing" },
];

export function TrustStats() {
  return (
    <Section
      background="cream"
      className="border-y border-charcoal-100 py-10 sm:py-12 lg:py-14"
    >
      <ScrollReveal>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <p className="text-h3 text-primary-700">{stat.value}</p>
              <p className="text-body-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
