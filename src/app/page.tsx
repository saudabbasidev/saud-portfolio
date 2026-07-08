"use client";
import { useEffect } from "react";
import CtaSection from "./components/cta";
import HeroSection from "./components/hero";
import Reviewsectio from "./components/reviews";
import ExpertiseSection from "./components/expertise";
import WhyusSection from "./components/whyus";
import AOS from "aos";
import Navbarsection from "./components/navbar";
import IntroductionSection from "./components/intro";
import ProjectsSection from "./components/projects";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <>
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
