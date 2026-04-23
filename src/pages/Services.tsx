import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { CTABlock } from "@/components/sections/cta-block";
import { StatsCounter } from "@/components/sections/stats-counter";
import { StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { IMAGES } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";
import { getServices } from "@/lib/data/services";

const services = getServices();

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Our Services"
        subtitle="End-to-end professional services covering design, implementation, integration, and support."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="page"
        overlay="navy"
      />

      {/* BREADCRUMB */}
      <Breadcrumb items={[{ label: "Services" }]} />

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Professional services designed to ensure successful delivery, operation, and optimization of your technology systems."
            overline="What We Do"
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard
                  slug={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter stats={siteConfig.stats} theme="dark" />

      {/* CTA */}
      <CTABlock
        title="Need Professional Support?"
        subtitle="Our experts are ready to help you deliver and maintain high-performance systems."
        primaryText="Contact Our Team"
        primaryHref="/contact"
      />
    </>
  );
}