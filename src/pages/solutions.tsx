import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { CTABlock } from "@/components/sections/cta-block";
import { StatsCounter } from "@/components/sections/stats-counter";
import { SolutionCard } from "@/components/cards/solution-card";
import { StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";
import { getSolutions } from "@/lib/data/solutions";

const solutions = getSolutions();

export default function SolutionsPage() {
  return (
    <>
      <HeroSection
        title="Our Solutions"
        subtitle="Comprehensive technology solutions designed to protect, connect, and empower your organization."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="page"
        overlay="navy"
      />

      <Breadcrumb items={[{ label: "Solutions" }]} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Comprehensive technology solutions designed to protect, connect, and empower your organization."
            overline="What We Offer"
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <StaggerItem key={sol.slug}>
                <SolutionCard
                  slug={sol.slug}
                  title={sol.title}
                  description={sol.shortDescription}
                  icon={sol.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <StatsCounter stats={siteConfig.stats} theme="dark" />

      <CTABlock
        title="Need the Right Solution for Your Business?"
        subtitle="Our experts can help you choose, design, and implement the ideal technology stack."
        primaryText="Talk to Our Experts"
        primaryHref="/contact"
      />
    </>
  );
}