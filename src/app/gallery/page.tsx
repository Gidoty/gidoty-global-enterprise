import type { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { GALLERY_IMAGES } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Gidoty Global Enterprise's pepper and plantain farm in Rivers State, Nigeria.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        heading="From our farm"
        subheading="A look at pepper and plantain cultivation on the ground in Rivers State."
      />
      <Section background="cream" className="pt-0">
        <GalleryGrid images={GALLERY_IMAGES} />
      </Section>
    </main>
  );
}
