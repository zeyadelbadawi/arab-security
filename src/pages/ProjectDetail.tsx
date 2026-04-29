import { useParams, Navigate, Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABlock } from "@/components/sections/cta-block";
import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { CounterAnimation } from "@/components/animation/counter-animation";
import { getProjectBySlug, getProjects } from "@/lib/data/projects";
import { MapPin, Calendar, Building2, Layers, Wrench, ArrowRight } from "lucide-react";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) return <Navigate to="/projects" replace />;

  const allProjects = getProjects();
  const relatedProjects = allProjects
    .filter((p) => p.slug !== project.slug && (p.industry === project.industry || p.solutionsUsed.some((s) => project.solutionsUsed.includes(s))))
    .slice(0, 3);

  return (
    <>
      <HeroSection
        title={project.title}
        subtitle={project.client}
        backgroundImage={project.heroImage}
        variant="detail"
        overlay="gradient"
      />
      <Breadcrumb items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Building2 className="w-3 h-3" /> Client
                </div>
                <p className="text-navy font-semibold text-sm">{project.client}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Layers className="w-3 h-3" /> Industry
                </div>
                <p className="text-navy font-semibold text-sm capitalize">{project.industry}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Calendar className="w-3 h-3" /> Duration
                </div>
                <p className="text-navy font-semibold text-sm">{project.duration}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <MapPin className="w-3 h-3" /> Location
                </div>
                <p className="text-navy font-semibold text-sm">{project.location}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Layers className="w-3 h-3" /> Solutions
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.solutionsUsed.map((s) => (
                    <span key={s} className="text-teal text-xs font-medium capitalize">{s.replace("-", " ")}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Wrench className="w-3 h-3" /> Services
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.servicesProvided.map((s) => (
                    <span key={s} className="text-navy text-xs font-medium capitalize">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Challenge / Solution / Result */}
          <div className="grid lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
                <h3 className="font-display font-bold text-lg text-navy mb-3">The Challenge</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
                <h3 className="font-display font-bold text-lg text-teal mb-3">Our Solution</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-navy rounded-xl p-6 h-full">
                <h3 className="font-display font-bold text-lg text-white mb-3">The Result</h3>
                <p className="text-white/80 text-sm leading-relaxed">{project.result}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      {project.impactMetrics.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl text-navy mb-8 text-center">Impact Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {project.impactMetrics.map((metric, i) => (
                  <div key={i} className="text-center bg-white rounded-xl p-6 border border-gray-200">
                    <div className="text-2xl sm:text-3xl font-display font-bold text-navy">
                      <CounterAnimation value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                    </div>
                    <div className="text-gray-500 text-xs mt-2">{metric.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.galleryImages.length > 1 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl text-navy mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video">
                    <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}


{/* Project Videos */}
{/* Project Videos */}
{project.videos && project.videos.length > 0 && (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl text-navy mb-8">
          Project Videos
        </h2>

        <div className="space-y-8">
          {project.videos.map((video, i) => (
            <div
              key={i}
              className="w-full rounded-xl overflow-hidden bg-black border border-gray-200 shadow-sm"
            >
              <video
                src={video}
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
)}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl text-navy">Related Projects</h2>
              <Link to="/projects" className="inline-flex items-center gap-1 text-teal text-sm font-medium hover:gap-2 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((proj) => (
                <ProjectCard key={proj.slug} slug={proj.slug} title={proj.title} client={proj.client} heroImage={proj.heroImage} industry={proj.industry} location={proj.location} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock
        title="Start a Similar Project"
        subtitle="Ready to discuss your requirements? Our team is here to help."
        primaryText="Contact Our Team"
        primaryHref="/contact"
      />
    </>
  );
}
