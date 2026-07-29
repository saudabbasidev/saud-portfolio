import CtaSection from "./components/cta";
import HeroSection from "./components/hero";
import Reviewsectio from "./components/reviews";
import ExpertiseSection from "./components/expertise";
import WhyusSection from "./components/services";

import Navbarsection from "./components/navbar";
import IntroductionSection from "./components/intro";
import ProjectsSection from "./components/projects";
import AosProvider from "./components/aos";

export default function Page() {
  return (
    <>
      <AosProvider />
      <Navbarsection />

      <HeroSection />

      <main className="max-w-400 mx-auto">
        <IntroductionSection />

        <ExpertiseSection />

        <ProjectsSection />

        <WhyusSection />

        <Reviewsectio />

        <CtaSection />
      </main>
    </>
  );
}
