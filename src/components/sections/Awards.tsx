import { Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

export function Awards() {
  return (
    <Section id="awards" background="primary">
      <ScrollReveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-400/15 text-accent-400">
            <Award size={28} />
          </div>
          <p className="text-caption text-cream-100/60">Recognition</p>
          <h2 className="text-h2 text-cream-100">
            Backed by the Tony Elumelu Foundation
          </h2>
          <p className="text-body text-cream-100/80">
            In {COMPANY.grantYear}, Gidoty Global Enterprise was awarded a{" "}
            {COMPANY.grantAmount} grant through the {COMPANY.grantSource} —
            independent validation of our model and our plan to scale. For an
            agribusiness at our stage, it&apos;s the equivalent of a first
            institutional round of backing.
          </p>
          <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-cream-100/20 px-6 py-3">
            <span className="text-lg font-semibold text-cream-100">
              {COMPANY.grantAmount}
            </span>
            <span className="h-1 w-1 rounded-full bg-cream-100/40" />
            <span className="text-body-sm text-cream-100/80">
              TEF Entrepreneurship Programme, {COMPANY.grantYear}
            </span>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
