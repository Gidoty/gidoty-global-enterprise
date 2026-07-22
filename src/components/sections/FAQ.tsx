"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQS } from "@/lib/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" background="cream">
      <ScrollReveal>
        <SectionHeading
          eyebrow="FAQs"
          heading="Frequently asked questions"
          subheading="Answers to what buyers and partners ask us most. Still curious about something? Reach out on WhatsApp."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-x-10 gap-y-1 lg:grid-cols-2">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <ScrollReveal key={faq.question} delay={(index % 2) * 0.05}>
              <div className="border-b border-charcoal-100 py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-h6 text-charcoal-900">
                    {faq.question}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-primary-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-body-sm pt-3 pr-8">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
