import { useParams, Navigate } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABlock } from "@/components/sections/cta-block";
import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { getSolutionBySlug } from "@/lib/data/solutions";
import { getProjectsBySolution } from "@/lib/data/projects";

export default function SolutionPreviousWorkPage() {
  const { category } = useParams<{ category: string }>();
  const solution = getSolutionBySlug(category || "");

  if (!solution) return <Navigate to="/" replace />;

  const projects = getProjectsBySolution(solution.slug);

  return (
    <>
      <HeroSection
        title={`${solution.title} — Previous Work`}
        subtitle={`Explore our portfolio of ${solution.title.toLowerCase()} projects.`}
        backgroundImage={solution.heroImage}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[
        { label: "Solutions" },
        { label: solution.title, href: `/solutions/${category}` },
        { label: "Previous Work" },
      ]} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <StaggerItem key={proj.slug}>
                <ProjectCard slug={proj.slug} title={proj.title} client={proj.client} heroImage={proj.heroImage} industry={proj.industry} location={proj.location} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          {projects.length === 0 && (
            <p className="text-center text-gray-500 py-12">No projects found for this solution category.</p>
          )}
        </div>
      </section>

      <CTABlock
        title="Start Your Project"
        subtitle={`Ready to implement ${solution.title.toLowerCase()} for your organization?`}
        primaryText="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}