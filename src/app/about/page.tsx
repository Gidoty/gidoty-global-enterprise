import type { Metadata } from "next";
import { Awards } from "@/components/sections/Awards";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Roadmap } from "@/components/sections/Roadmap";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About us",
  description:
    "The story behind Gidoty Global Enterprise — a commercial pepper and plantain agribusiness in Rivers State, Nigeria, backed by a Tony Elumelu Foundation grant.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        heading="Rooted in the Niger Delta, built to scale"
        subheading="Gidoty Global Enterprise grew out of a simple conviction: that Nigerian farmland, worked with discipline and the right standards, can supply markets that expect more than a good harvest."
      />

      <Section background="cream" className="pt-0">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <h2 className="text-h3 text-charcoal-900">Our story</h2>
          <p className="text-body">
            We&apos;re a commercial agribusiness based in Rivers State, Nigeria,
            specialising in Scotch Bonnet and Cameroon pepper varieties
            native to the Niger Delta, alongside full-cycle plantain
            cultivation. From the outset, the goal was never just to farm —
            it was to build an operation where quality, traceability, and
            export-readiness are part of how every plot is managed, not
            features bolted on later.
          </p>
          <p className="text-body">
            That approach shapes every decision, from the varieties we
            grow to how a harvest is inspected before it leaves the farm.
            It&apos;s also what we believe sets Gidoty Global Enterprise apart
            in a sector where inconsistency is often the norm.
          </p>

          <h2 className="text-h3 mt-6 text-charcoal-900">
            A grant that changed our trajectory
          </h2>
          <p className="text-body">
            In {COMPANY.grantYear}, that direction was validated with a{" "}
            {COMPANY.grantAmount} grant through the {COMPANY.grantSource}.
            For an agribusiness at our stage, that grant is more than
            funding — it&apos;s independent recognition of the model, the plan,
            and the team behind it, from one of Africa&apos;s most established
            entrepreneurship platforms.
          </p>

          <h2 className="text-h3 mt-6 text-charcoal-900">Where we&apos;re headed</h2>
          <p className="text-body">
            We hold {COMPANY.totalAcres} acres of farmland in Rivers State,
            with {COMPANY.activeAcres} acres under active cultivation today.
            The rest of our landholding sits on a deliberate, staged
            roadmap — outlined below — as we scale pepper and plantain
            production and lay the groundwork to diversify into new crops.
          </p>
        </div>
      </Section>

      <Roadmap />
      <Awards />
      <FinalCta />
    </main>
  );
}
