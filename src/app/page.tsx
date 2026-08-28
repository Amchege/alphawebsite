import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateLocalBusinessSchema,
  generateWebPageSchema,
} from "@/lib/structured-data";
import { Hero } from "@/components/sections/hero";
import { BusinessProblems } from "@/components/sections/business-problems";
import { ProblemTransition } from "@/components/sections/problem-transition";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProcessPreview } from "@/components/sections/process-preview";
import { TechnologySection } from "@/components/sections/technology-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { GlobalSection } from "@/components/sections/global-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { SectionDivider } from "@/components/visual/section-divider";

const pageTitle = "Alpha Tec Solutions | Custom Business Software Development";
const pageDescription =
  "Alpha Tec Solutions designs and builds custom business software, web applications and automation systems for businesses in Kenya and worldwide.";

export const metadata = generatePageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateWebPageSchema({ title: pageTitle, description: pageDescription, path: "/" })} />

      <Hero />
      <SectionDivider variant="gradient" />
      <BusinessProblems />
      <ProblemTransition />
      <SolutionsSection />
      <SectionDivider variant="dots" />
      <FeaturedProjects />
      <ProcessPreview />
      <SectionDivider variant="gradient" />
      <TechnologySection />
      <IndustriesSection />
      <WhyUsSection />
      <GlobalSection />
      <FinalCtaSection />
    </>
  );
}