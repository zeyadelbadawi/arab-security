import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { getPartners } from "@/lib/data/partners";
import { ExternalLink } from "lucide-react";

const partners = getPartners();

export default function PartnersPage() {
  return (
    <>
      <HeroSection
        title="Technology Partners"
        subtitle="We partner with the world's leading technology brands to deliver best-in-class solutions."
        backgroundImage={IMAGES.heroNetworking}
        variant="page"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Partners" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Partner Ecosystem"
            subtitle="Each partnership is carefully selected to ensure we deliver the highest quality solutions."
            overline="Technology Partners"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <StaggerItem key={partner.slug}>
                <div className="group bg-white rounded-xl border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-teal">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-20 h-20 rounded-lg bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 p-2 transition-all duration-300 group-hover:shadow-md">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
      />
    </div>

    <div>
      <h3 className="font-display font-semibold text-navy transition-colors duration-300 group-hover:text-teal">
        {partner.name}
      </h3>

      <div className="flex flex-wrap gap-1 mt-1">
        {partner.solutionCategories.map((cat) => (
          <span
            key={cat}
            className="px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-medium rounded-full capitalize"
          >
            {cat.replace("-", " ")}
          </span>
        ))}
      </div>
    </div>
  </div>

  <p className="text-gray-600 text-sm leading-relaxed mb-4">
    {partner.description}
  </p>

  <a
    href={partner.website}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-teal text-sm font-medium transition-all duration-300 group-hover:gap-2"
  >
    Visit Website
    <ExternalLink className="w-3 h-3" />
  </a>
</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABlock
        title="Partner With Us"
        subtitle="Interested in becoming a technology partner? Let's explore collaboration opportunities."
        primaryText="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
