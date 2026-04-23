import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatsCounter } from "@/components/sections/stats-counter";
import { CTABlock } from "@/components/sections/cta-block";
import { IndustryCard } from "@/components/cards/industry-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";
import { getIndustries } from "@/lib/data/industries";

const industries = getIndustries();

export default function IndustriesPage() {
  return (
    <>
      <HeroSection
        title="Industries We Serve"
        subtitle="Specialized technology solutions tailored to the unique challenges of each sector."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="page"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Industries" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sector Expertise"
            subtitle="Deep domain knowledge across government, commercial, industrial, hospitality, healthcare, education, transportation, retail, residential, and energy sectors."
            overline="Our Industries"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <IndustryCard slug={ind.slug} title={ind.title} description={ind.shortDescription} icon={ind.icon} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <StatsCounter stats={siteConfig.stats} theme="dark" />

      <CTABlock
        title="Need Industry-Specific Solutions?"
        subtitle="Our engineers understand the unique requirements of your sector."
        primaryText="Talk to Our Experts"
        primaryHref="/contact"
      />
    </>
  );
}