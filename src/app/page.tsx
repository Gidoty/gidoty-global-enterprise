import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const primarySwatches = [
  { token: "primary-50", className: "bg-primary-50" },
  { token: "primary-100", className: "bg-primary-100" },
  { token: "primary-200", className: "bg-primary-200" },
  { token: "primary-300", className: "bg-primary-300" },
  { token: "primary-400", className: "bg-primary-400" },
  { token: "primary-500", className: "bg-primary-500" },
  { token: "primary-600", className: "bg-primary-600" },
  { token: "primary-700", className: "bg-primary-700" },
  { token: "primary-800", className: "bg-primary-800" },
  { token: "primary-900", className: "bg-primary-900" },
];

const accentSwatches = [
  { token: "accent-50", className: "bg-accent-50" },
  { token: "accent-100", className: "bg-accent-100" },
  { token: "accent-200", className: "bg-accent-200" },
  { token: "accent-300", className: "bg-accent-300" },
  { token: "accent-400", className: "bg-accent-400" },
  { token: "accent-500", className: "bg-accent-500" },
  { token: "accent-600", className: "bg-accent-600" },
  { token: "accent-700", className: "bg-accent-700" },
  { token: "accent-800", className: "bg-accent-800" },
  { token: "accent-900", className: "bg-accent-900" },
];

const neutralSwatches = [
  { token: "cream-100", className: "bg-cream-100 border border-charcoal-100" },
  { token: "cream-200", className: "bg-cream-200 border border-charcoal-100" },
  { token: "cream-300", className: "bg-cream-300 border border-charcoal-100" },
  { token: "cream-400", className: "bg-cream-400 border border-charcoal-100" },
  { token: "charcoal-500", className: "bg-charcoal-500" },
  { token: "charcoal-700", className: "bg-charcoal-700" },
  { token: "charcoal-900", className: "bg-charcoal-900" },
];

export default function Home() {
  return (
    <main>
      <Section background="cream" className="pt-24 sm:pt-28 lg:pt-32">
        <ScrollReveal>
          <div className="flex max-w-3xl flex-col gap-6">
            <Badge variant="accent">TEF Grantee &middot; 2023</Badge>
            <h1 className="text-h1 text-charcoal-900">
              Gidoty Global Enterprise — design system preview
            </h1>
            <p className="text-body max-w-xl">
              A foundation for a professional, world-class agribusiness marketing
              site: colour tokens, type scale, and component primitives, ready for
              review before we build out the full site.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary" size="lg">
                Primary CTA
              </Button>
              <Button variant="secondary" size="lg">
                Secondary
              </Button>
              <Button variant="ghost" size="lg">
                Ghost
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="cream">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Foundations"
            heading="Typography scale"
            subheading="Fraunces for display headlines, Inter for body copy — loaded via next/font."
          />
        </ScrollReveal>
        <div className="mt-12 flex flex-col gap-6">
          <p className="text-h1">Heading One / Fraunces</p>
          <p className="text-h2">Heading Two / Fraunces</p>
          <p className="text-h3">Heading Three / Fraunces</p>
          <p className="text-h4">Heading Four / Fraunces</p>
          <p className="text-h5">Heading Five / Fraunces</p>
          <p className="text-h6">Heading Six / Fraunces</p>
          <p className="text-body max-w-2xl">
            Body text / Inter — set in a clean, highly legible sans-serif for
            long-form reading: product descriptions, process detail, and
            editorial content that needs to feel credible at a glance.
          </p>
          <p className="text-body-sm max-w-2xl">
            Small body text / Inter — used for captions, metadata, and secondary
            detail beneath primary content.
          </p>
          <p className="text-caption">Caption / eyebrow label style</p>
        </div>
      </Section>

      <Section background="cream">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Foundations"
            heading="Colour palette"
            subheading="Deep green as the primary brand colour, pepper red-orange reserved for CTAs and highlights, warm cream backgrounds, and charcoal text."
          />
        </ScrollReveal>
        <div className="mt-12 flex flex-col gap-10">
          <div>
            <p className="text-caption mb-4">Primary — deep green</p>
            <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
              {primarySwatches.map((s) => (
                <div key={s.token} className="flex flex-col gap-2">
                  <div className={`h-16 w-full rounded-lg ${s.className}`} />
                  <span className="text-body-sm text-xs">{s.token}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-caption mb-4">Accent — pepper red / orange</p>
            <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
              {accentSwatches.map((s) => (
                <div key={s.token} className="flex flex-col gap-2">
                  <div className={`h-16 w-full rounded-lg ${s.className}`} />
                  <span className="text-body-sm text-xs">{s.token}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-caption mb-4">Neutrals — cream &amp; charcoal</p>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
              {neutralSwatches.map((s) => (
                <div key={s.token} className="flex flex-col gap-2">
                  <div className={`h-16 w-full rounded-lg ${s.className}`} />
                  <span className="text-body-sm text-xs">{s.token}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="primary">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Foundations"
            heading="On a primary background"
            subheading="Deep green sections read as premium and confident — reserved for high-impact moments like the awards strip or final CTA."
            className="text-cream-100 [&_p]:text-cream-100/80 [&_h2]:text-cream-100"
          />
        </ScrollReveal>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="primary" size="lg">
            Book a consultation
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border-cream-100/40 text-cream-100 hover:bg-cream-100/10"
          >
            Learn more
          </Button>
        </div>
      </Section>

      <Section background="cream">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Components"
            heading="Cards &amp; badges"
            subheading="Reusable primitives for stats, crops, and trust signals across the site."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Badge variant="primary">Pepper</Badge>
            <p className="text-h5 mt-4 text-charcoal-900">Scotch Bonnet &amp; Cameroon</p>
            <p className="text-body-sm mt-2">
              Commercial cultivation across the Niger Delta, grown for quality
              and export-readiness.
            </p>
          </Card>
          <Card>
            <Badge variant="accent">Plantain</Badge>
            <p className="text-h5 mt-4 text-charcoal-900">Full-cycle cultivation</p>
            <p className="text-body-sm mt-2">
              Traceable production from Rivers State, with a clear roadmap to
              scale across our full landholding.
            </p>
          </Card>
          <Card>
            <Badge variant="neutral">10+ acres</Badge>
            <p className="text-h5 mt-4 text-charcoal-900">Expansion roadmap</p>
            <p className="text-body-sm mt-2">
              3 acres under active cultivation today, with a phased plan to
              bring the remaining land into production.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
