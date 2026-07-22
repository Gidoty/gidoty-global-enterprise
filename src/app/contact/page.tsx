import type { Metadata } from "next";
import { MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gidoty Global Enterprise on WhatsApp to discuss sourcing pepper and plantain, or explore a partnership.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        heading="Let's talk about what we can grow together"
        subheading="Whether you're sourcing quality pepper and plantain or exploring a partnership, WhatsApp is the fastest way to reach us."
      />

      <Section background="cream" className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <Card className="flex h-full flex-col gap-6 bg-primary-800 text-cream-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100/10 text-accent-400">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="text-h5 text-cream-100">Chat on WhatsApp</p>
                <p className="mt-2 text-body-sm text-cream-100/70">
                  Message us directly at {WHATSAPP_DISPLAY} — we typically
                  respond during business hours in West Africa Time (WAT).
                </p>
              </div>
              <Button
                href={whatsappUrl(
                  "Hello, I'd like to know more about Gidoty Global Enterprise.",
                )}
                size="lg"
                className="mt-auto w-fit"
              >
                Start a conversation
              </Button>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Card className="flex h-full flex-col gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-h5 text-charcoal-900">Where we farm</p>
                <p className="mt-2 text-body-sm">{COMPANY.location}</p>
              </div>
              <p className="text-body-sm">
                Gidoty Global Enterprise cultivates pepper and plantain
                across {COMPANY.totalAcres} acres of farmland in Rivers
                State, with {COMPANY.activeAcres} acres under active
                cultivation today.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
    </main>
  );
}
