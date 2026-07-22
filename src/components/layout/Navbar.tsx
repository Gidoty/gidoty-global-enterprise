"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, whatsappUrl } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 transition-colors duration-300 ${
        scrolled
          ? "bg-cream-200/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-primary-800 sm:text-xl"
          >
            Gidoty Global Enterprise
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm font-medium text-charcoal-700 transition-colors hover:text-primary-700"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href={whatsappUrl("Hello, I'd like to know more about Gidoty Global Enterprise.")} size="md">
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal-900 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden bg-cream-200 shadow-sm lg:hidden"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-800 hover:bg-primary-50"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  href={whatsappUrl("Hello, I'd like to know more about Gidoty Global Enterprise.")}
                  size="md"
                  className="mt-3 justify-center"
                  onClick={() => setOpen(false)}
                >
                  Get in touch
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
