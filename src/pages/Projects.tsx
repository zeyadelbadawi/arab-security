import { useState, useMemo } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABlock } from "@/components/sections/cta-block";
import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { getProjects } from "@/lib/data/projects";

const allProjects = getProjects();
const industries = [...new Set(allProjects.map((p) => p.industry))];
const solutionTypes = [...new Set(allProjects.flatMap((p) => p.solutionsUsed))];

export default function ProjectsPage() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      if (activeIndustry && p.industry !== activeIndustry) return false;
      if (activeSolution && !p.solutionsUsed.includes(activeSolution)) return false;
      return true;
    });
  }, [activeIndustry, activeSolution]);

  const clearFilters = () => {
    setActiveIndustry(null);
    setActiveSolution(null);
  };

  return (
    <>
      <HeroSection
        title="Our Projects"
        subtitle="Explore our portfolio of successful projects across diverse industries and technology domains."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Projects" }]} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm font-medium text-gray-500 mr-2">Industry:</span>
                <button
                  onClick={() => setActiveIndustry(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    !activeIndustry ? "bg-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setActiveIndustry(activeIndustry === ind ? null : ind)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                      activeIndustry === ind ? "bg-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-500 mr-2">Solution:</span>
                <button
                  onClick={() => setActiveSolution(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    !activeSolution ? "bg-navy text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {solutionTypes.map((sol) => (
                  <button
                    key={sol}
                    onClick={() => setActiveSolution(activeSolution === sol ? null : sol)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${
                      activeSolution === sol ? "bg-navy text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {sol.replace("-", " ")}
                  </button>
                ))}
              </div>
              {(activeIndustry || activeSolution) && (
                <button onClick={clearFilters} className="mt-3 text-teal text-xs font-medium hover:underline">
                  Clear All Filters
                </button>
              )}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj) => (
              <StaggerItem key={proj.slug}>
                <ProjectCard
                  slug={proj.slug}
                  title={proj.title}
                  client={proj.client}
                  heroImage={proj.heroImage}
                  industry={proj.industry}
                  location={proj.location}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No projects match your current filters.</p>
              <button onClick={clearFilters} className="text-teal font-medium hover:underline">
                Clear Filters
              </button>
            </div>
          )}

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Showing {filtered.length} of {allProjects.length} projects
            </p>
          </div>
        </div>
      </section>

      <CTABlock
        title="Start Your Project"
        subtitle="Ready to discuss your next project? Our team is here to help."
        primaryText="Get a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}