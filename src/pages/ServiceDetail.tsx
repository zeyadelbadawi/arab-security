import { useParams, Navigate } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { getServiceBySlug } from "@/lib/data/services";
import { getProjects } from "@/lib/data/projects";
import { CheckCircle } from "lucide-react";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/" replace />;

  const allProjects = getProjects();
  const relatedProjects = allProjects.filter((p) =>
    service.previousWork.some((pw) => pw.projectSlug === p.slug)
  );

  return (
    <>
      <HeroSection
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.heroImage}
        variant="detail"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Services", href: "/" }, { label: service.title }]} />

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-6">Service Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Process" overline="How We Work" />
          <ProcessSteps steps={service.processSteps} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Us" alignment="left" overline="Our Advantage" />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyChooseUs.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg h-full">
                  <CheckCircle className="w-6 h-6 text-teal mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Previous Work */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Previous Work" alignment="left" overline="Our Track Record" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((proj) => (
                <ProjectCard key={proj.slug} slug={proj.slug} title={proj.title} client={proj.client} heroImage={proj.heroImage} industry={proj.industry} location={proj.location} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock
        title="Get a Service Quote"
        subtitle={`Ready to get started with our ${service.title.toLowerCase()} services?`}
        primaryText="Request a Quote"
        primaryHref="/contact"
      />
    </>
  );
}
