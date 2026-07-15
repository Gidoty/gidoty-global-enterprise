import { Award, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY, NAV_LINKS, whatsappUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <p className="font-display text-xl font-semibold text-cream-100">
              {COMPANY.name}
            </p>
            <p className="text-body-sm max-w-sm text-cream-100/70">
              Commercial pepper farming and plantain cultivation from the
              Niger Delta — grown for quality, traceability, and
              export-readiness.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream-100/70">
              <MapPin size={16} className="shrink-0" />
              <span>{COMPANY.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cream-100/70">
              <Award size={16} className="shrink-0" />
              <span>
                {COMPANY.grantSource} Grant recipient, {COMPANY.grantYear}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-caption text-cream-100/50">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-cream-100/80 transition-colors hover:text-cream-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-caption text-cream-100/50">Get in touch</p>
            <a
              href={whatsappUrl("Hello, I'd like to know more about Gidoty Global Enterprise.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-body-sm text-cream-100/80 transition-colors hover:text-cream-100"
            >
              <MessageCircle size={16} className="shrink-0" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-cream-100/10 pt-8 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Built in Rivers State, Nigeria.</p>
        </div>
      </Container>
    </footer>
  );
}
