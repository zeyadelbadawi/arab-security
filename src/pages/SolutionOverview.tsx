import { useParams, Navigate, Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { SolutionCard } from "@/components/cards/solution-card";
import { ProjectCard } from "@/components/cards/project-card";
import { LogoGrid } from "@/components/sections/logo-grid";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { getSolutionBySlug } from "@/lib/data/solutions";
import { getProjects } from "@/lib/data/projects";
import { getPartners } from "@/lib/data/partners";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { SolutionCategory } from "@/lib/types";

export default function SolutionOverviewPage() {
  const { category } = useParams<{ category: string }>();
  const solution = getSolutionBySlug(category || "");

  if (!solution) return <Navigate to="/" replace />;

  const allProjects = getProjects();
  const relatedProjects = allProjects.filter((p) => solution.relatedProjects.includes(p.slug));
  const allPartners = getPartners();
  const relatedPartners = allPartners.filter((p) =>
    p.solutionCategories.includes(solution.category as SolutionCategory)
  );

  return (
    <>
      <HeroSection
        title={solution.title}
        subtitle={solution.shortDescription}
        backgroundImage={solution.heroImage}
        variant="detail"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Solutions" }, { label: solution.title }]} />

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{solution.fullDescription}</p>
              <div className="space-y-2">
                {solution.technicalDetails.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img src={solution.heroImage} alt={solution.title} className="rounded-2xl shadow-xl w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sub-Solutions */}
      {solution.subSolutions.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Our Solutions" subtitle="Explore our specialized offerings in this category." overline="Sub-Solutions" />
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.subSolutions.map((sub) => (
                <StaggerItem key={sub.slug}>
                  <SolutionCard
                    slug={sub.slug}
                    title={sub.title}
                    description={sub.description}
                    icon={sub.icon}
                    category={category}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Partners */}
      {relatedPartners.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Technology Partners" overline="Powered By" />
            <LogoGrid logos={relatedPartners} variant="static" grayscale />
          </div>
        </section>
      )}

      {/* Previous Work */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <SectionHeading title="Previous Work" alignment="left" overline="Our Track Record" />
              <Link
                to={`/solutions/${category}/previous-work`}
                className="hidden sm:inline-flex items-center gap-1 text-teal text-sm font-medium hover:gap-2 transition-all"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 3).map((proj) => (
                <ProjectCard key={proj.slug} slug={proj.slug} title={proj.title} client={proj.client} heroImage={proj.heroImage} industry={proj.industry} location={proj.location} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock
        title={`Need ${solution.title}?`}
        subtitle="Our engineers are ready to design the perfect solution for your requirements."
        primaryText="Request Technical Consultation"
        primaryHref="/contact"
      />
    </>
  );
}