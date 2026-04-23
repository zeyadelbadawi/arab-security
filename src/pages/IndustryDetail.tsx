import { useParams, Navigate } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { SolutionCard } from "@/components/cards/solution-card";
import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { CounterAnimation } from "@/components/animation/counter-animation";
import { getIndustryBySlug } from "@/lib/data/industries";
import { getSolutions } from "@/lib/data/solutions";
import { getProjects } from "@/lib/data/projects";
import { AlertTriangle } from "lucide-react";

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(slug || "");

  if (!industry) return <Navigate to="/industries" replace />;

  const allSolutions = getSolutions();
  const relevantSolutions = allSolutions.filter((s) => industry.relevantSolutions.includes(s.slug));
  const allProjects = getProjects();
  const relevantProjects = allProjects.filter((p) => industry.relevantProjects.includes(p.slug));

  return (
    <>
      <HeroSection
        title={industry.title}
        subtitle={industry.shortDescription}
        backgroundImage={industry.heroImage}
        variant="detail"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Industries", href: "/industries" }, { label: industry.title }]} />

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{industry.fullDescription}</p>
              {/* Stats */}
              {industry.stats.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {industry.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-display font-bold text-navy">
                        <CounterAnimation value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="font-display font-semibold text-lg text-navy mb-4">Key Challenges</h3>
              <div className="space-y-3">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <AlertTriangle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Relevant Solutions */}
      {relevantSolutions.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Relevant Solutions" alignment="left" overline="How We Help" />
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantSolutions.map((sol) => (
                <StaggerItem key={sol.slug}>
                  <SolutionCard slug={sol.slug} title={sol.title} description={sol.shortDescription} icon={sol.icon} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Projects */}
      {relevantProjects.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title={`${industry.title} Projects`} alignment="left" overline="Our Work" />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantProjects.map((proj) => (
                <StaggerItem key={proj.slug}>
                  <ProjectCard slug={proj.slug} title={proj.title} client={proj.client} heroImage={proj.heroImage} industry={proj.industry} location={proj.location} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <CTABlock
        title={`Talk to Our ${industry.title} Experts`}
        subtitle="Let us help you address the unique challenges of your sector."
        primaryText="Get a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}