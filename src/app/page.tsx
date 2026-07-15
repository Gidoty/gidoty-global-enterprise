import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Crops } from "@/components/sections/Crops";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Roadmap } from "@/components/sections/Roadmap";
import { TrustStats } from "@/components/sections/TrustStats";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStats />
      <About />
      <Crops />
      <Process />
      <Roadmap />
      <Awards />
      <WhyUs />
      <FinalCta />
    </main>
  );
}
