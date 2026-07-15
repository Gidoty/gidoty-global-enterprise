import { Award, Leaf, MapPin, Sprout } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

const glance = [
  { icon: MapPin, label: "Location", value: "Rivers State, Niger Delta" },
  { icon: Sprout, label: "Total landholding", value: `${COMPANY.totalAcres} acres` },
  { icon: Leaf, label: "Active cultivation", value: `${COMPANY.activeAcres} acres` },
  { icon: Award, label: "TEF Grant", value: `${COMPANY.grantAmount}, ${COMPANY.grantYear}` },
];

export function About() {
  return (
    <Section id="about" background="cream">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="About us"
              heading="Rooted in the Niger Delta, built to scale"
            />
            <p className="text-body">
              Gidoty Global Enterprise is a commercial agribusiness based in
              Rivers State, Nigeria, specialising in Scotch Bonnet and
              Cameroon pepper varieties native to the Niger Delta, alongside
              full-cycle plantain cultivation. Quality, traceability, and
              export-readiness sit at the centre of how we farm.
            </p>
            <p className="text-body">
              In {COMPANY.grantYear}, that direction was backed by the{" "}
              {COMPANY.grantSource}, which awarded Gidoty Global Enterprise a{" "}
              {COMPANY.grantAmount} grant — a credibility marker akin to an
              early funding round, and a vote of confidence in where
              we&apos;re headed next.
            </p>
            <p className="text-body">
              We hold {COMPANY.totalAcres} acres of farmland in total, with{" "}
              {COMPANY.activeAcres} acres under active cultivation today.
              The remaining land sits on a clearly staged expansion roadmap
              as we scale production and diversify into new crops.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-3xl bg-primary-800 p-8 sm:p-10">
            <p className="text-caption mb-8 text-cream-100/60">Farm at a glance</p>
            <div className="grid grid-cols-2 gap-8">
              {glance.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <item.icon size={20} className="text-accent-400" />
                  <div>
                    <p className="text-lg font-semibold text-cream-100">
                      {item.value}
                    </p>
                    <p className="text-xs text-cream-100/60">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
