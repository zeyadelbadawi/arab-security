import { useParams, Navigate } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABlock } from "@/components/sections/cta-block";
import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { getSolutionBySlug } from "@/lib/data/solutions";
import { getProjects } from "@/lib/data/projects";
import * as Icons from "lucide-react";

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Comp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Comp ? <Comp className={className} /> : null;
}

export default function SolutionSubPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const solution = getSolutionBySlug(category || "");
  const subSolution = solution?.subSolutions.find((s) => s.slug === slug);

  if (!solution || !subSolution) return <Navigate to={`/solutions/${category || ""}`} replace />;

  const allProjects = getProjects();
  const relatedProjects = allProjects.filter((p) => subSolution.relatedProjects.includes(p.slug));

  return (
    <>
      <HeroSection
        title={subSolution.title}
        subtitle={subSolution.description}
        backgroundImage={subSolution.heroImage}
        variant="detail"
        overlay="navy"
      />
      <Breadcrumb items={[
        { label: "Solutions" },
        { label: solution.title, href: `/solutions/${category}` },
        { label: subSolution.title },
      ]} />

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl text-navy mb-8">Key Features</h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subSolution.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-3">
                    <DynamicIcon name={feature.icon} className="w-5 h-5 text-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-navy mb-2">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Specs */}
{/* Technical Description */}
{subSolution.technicalDescription && (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl text-navy mb-8">
        Technical Description
        </h2>

        <div className="max-w-4xl bg-white rounded-xl border border-gray-200 p-8">
          <p className="text-gray-600 text-base leading-8">
            {subSolution.technicalDescription}
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
)}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl text-navy mb-8">Related Projects</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((proj) => (
                <ProjectCard key={proj.slug} slug={proj.slug} title={proj.title} client={proj.client} heroImage={proj.heroImage} industry={proj.industry} location={proj.location} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock
        title={`Need ${subSolution.title}?`}
        subtitle="Let our engineers design the perfect solution for your requirements."
        primaryText="Request Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
