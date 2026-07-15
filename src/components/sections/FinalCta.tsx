import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { whatsappUrl } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="contact" className="bg-cream-200 py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-charcoal-900 px-6 py-16 text-center sm:px-16">
            <h2 className="text-h2 max-w-xl text-cream-100">
              Let&apos;s talk about what we can grow together.
            </h2>
            <p className="text-body max-w-lg text-cream-100/70">
              Whether you&apos;re sourcing quality pepper and plantain or
              exploring a partnership, we&apos;d like to hear from you.
            </p>
            <Button
              href={whatsappUrl("Hello, I'd like to know more about Gidoty Global Enterprise.")}
              size="lg"
              className="mt-2"
            >
              Chat with us on WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
