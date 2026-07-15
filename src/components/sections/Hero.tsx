import { Award, MapPin, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY, whatsappUrl } from "@/lib/constants";

export function Hero() {
  return (
    <Section
      id="top"
      background="cream"
      className="relative overflow-hidden pt-36 sm:pt-40 lg:pt-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-100 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-accent-50 blur-3xl"
      />

      <div className="relative flex flex-col gap-8">
        <ScrollReveal>
          <div className="flex max-w-2xl flex-col gap-6">
            <Badge variant="accent">TEF Grantee &middot; {COMPANY.grantYear}</Badge>
            <h1 className="text-h1 text-charcoal-900">
              Premium pepper and plantain, cultivated for the world.
            </h1>
            <p className="text-body max-w-xl">
              Gidoty Global Enterprise is a commercial agribusiness in
              Rivers State, Nigeria, growing Scotch Bonnet and Cameroon
              pepper alongside plantain — built on quality, traceability,
              and a clear path to export.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                href={whatsappUrl("Hello, I'd like to know more about Gidoty Global Enterprise.")}
                size="lg"
              >
                Get in touch
              </Button>
              <Button href="#crops" variant="ghost" size="lg">
                Explore our crops
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-charcoal-100 pt-8">
            <div className="flex items-center gap-2">
              <Sprout size={18} className="text-primary-600" />
              <span className="text-body-sm">
                <strong className="text-charcoal-900">{COMPANY.totalAcres} acres</strong> landholding
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary-600" />
              <span className="text-body-sm">{COMPANY.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-primary-600" />
              <span className="text-body-sm">
                <strong className="text-charcoal-900">{COMPANY.grantAmount}</strong> TEF Grant recipient
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
