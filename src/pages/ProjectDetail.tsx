import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABlock } from "@/components/sections/cta-block";
import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { CounterAnimation } from "@/components/animation/counter-animation";
import { getProjectBySlug, getProjects } from "@/lib/data/projects";
import {
  MapPin,
  Calendar,
  Building2,
  Layers,
  Wrench,
  ArrowRight,
  Play,
  X,
  Phone,
} from "lucide-react";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) return <Navigate to="/projects" replace />;

  const [activeVideo, setActiveVideo] = useState<null | {
    id: string;
    label: string;
    url: string;
  }>(null);

  const projectVideoCards =
    project.slug === "its-egypt-radar-smart-system"
      ? [
          {
            id: "arabic",
            label: "Arabic Video",
            url: "https://imoukuwait.com/wp-content/uploads/2026/07/ASG-V2-Long-Arabic-Version_1.mp4 ",
          },
          {
            id: "english",
            label: "English Video",
            url: "https://imoukuwait.com/wp-content/uploads/2026/07/ASG-V2-Long-English-Version_1mp4.mp4",
          },
          {
            id: "french",
            label: "French Video",
            url: "https://imoukuwait.com/wp-content/uploads/2026/07/ASG-V2-Long-French-Version_1.mp4",
          },
        ]
      : [];

  const allProjects = getProjects();

  const relatedProjects = allProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        (p.industry === project.industry ||
          p.solutionsUsed.some((s) => project.solutionsUsed.includes(s)))
    )
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

      <Breadcrumb
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Building2 className="w-3 h-3" /> Client
                </div>
                <p className="text-navy font-semibold text-sm">
                  {project.client}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Layers className="w-3 h-3" /> Industry
                </div>
                <p className="text-navy font-semibold text-sm capitalize">
                  {project.industry}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Calendar className="w-3 h-3" /> Duration
                </div>
                <p className="text-navy font-semibold text-sm">
                  {project.duration}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <MapPin className="w-3 h-3" /> Location
                </div>
                <p className="text-navy font-semibold text-sm">
                  {project.location}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Layers className="w-3 h-3" /> Solutions
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.solutionsUsed.map((s) => (
                    <span
                      key={s}
                      className="text-teal text-xs font-medium capitalize"
                    >
                      {s.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                  <Wrench className="w-3 h-3" /> Services
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.servicesProvided.map((s) => (
                    <span
                      key={s}
                      className="text-navy text-xs font-medium capitalize"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Challenge / Solution / Result */}
          <div className="grid lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
                <h3 className="font-display font-bold text-lg text-navy mb-3">
                  The Challenge
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
                <h3 className="font-display font-bold text-lg text-teal mb-3">
                  Our Solution
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-navy rounded-xl p-6 h-full">
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  The Result
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {project.result}
                </p>
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
              <h2 className="font-display font-bold text-2xl text-navy mb-8 text-center">
                Impact Metrics
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {project.impactMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="text-center bg-white rounded-xl p-6 border border-gray-200"
                  >
                    <div className="text-2xl sm:text-3xl font-display font-bold text-navy">
                      <CounterAnimation
                        value={metric.value}
                        suffix={metric.suffix}
                        prefix={metric.prefix}
                      />
                    </div>
                    <div className="text-gray-500 text-xs mt-2">
                      {metric.label}
                    </div>
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
              <h2 className="font-display font-bold text-2xl text-navy mb-8">
                Project Gallery
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden aspect-video"
                  >
                    <img
                      src={img}
                      alt={`${project.title} gallery ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Contact Our Experts - Only ITS Egypt */}
      {project.slug === "its-egypt-radar-smart-system" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-navy rounded-[28px] px-6 sm:px-10 lg:px-14 py-12 lg:py-16 overflow-hidden">
                <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-center">
                  <div>
                    <span className="text-[#5aa4b1] uppercase tracking-[0.25em] text-xs font-bold">
                      Contact
                    </span>

                    <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-5 leading-tight">
                      Contact Our Experts
                    </h2>

                    <p className="text-white/65 text-sm sm:text-base leading-relaxed mt-5 max-w-sm">
                      Speak directly with our specialists for more details about
                      this smart radar system project.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
  {/* Card 1 */}
  <div className="group rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#5aa4b1]/60 px-5 py-5 transition-all duration-300">
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-[#5aa4b1]/15 flex items-center justify-center text-2xl">
        🇪🇬
      </span>

      <div>
        <p className="text-white/55 text-xs mb-1">Egypt</p>

        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Phone className="w-4 h-4 text-[#5aa4b1]" />
          <span>(+20) 109 300 6001</span>
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-5">
      <a
        href="tel:+201093006001"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#5aa4b1] hover:bg-[#4b8d98] text-white text-sm font-medium py-3 rounded-lg transition-all duration-300"
      >
        <Phone className="w-4 h-4" />
        Call
      </a>

      <a
        href="https://wa.me/201093006001"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#5aa4b1] hover:bg-[#4b8d98] text-white text-sm font-medium py-3 rounded-lg transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M16.002 3C8.822 3 3 8.822 3 16c0 2.52.738 4.97 2.133 7.067L3 29l6.133-2.067A12.944 12.944 0 0016.002 29C23.18 29 29 23.178 29 16S23.18 3 16.002 3zm0 23.667a10.6 10.6 0 01-5.4-1.48l-.387-.227-3.64 1.227 1.227-3.547-.253-.4A10.593 10.593 0 015.333 16c0-5.882 4.786-10.667 10.669-10.667 5.88 0 10.665 4.785 10.665 10.667s-4.785 10.667-10.665 10.667zm5.84-7.947c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.496-2.567-1.58-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.547l-.613-.013c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.827.763.33 1.36.527 1.827.673.767.244 1.467.21 2.02.127.616-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
        WhatsApp
      </a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#5aa4b1]/60 px-5 py-5 transition-all duration-300">
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-[#5aa4b1]/15 flex items-center justify-center text-2xl">
        🇪🇬
      </span>

      <div>
        <p className="text-white/55 text-xs mb-1">Egypt</p>

        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Phone className="w-4 h-4 text-[#5aa4b1]" />
          <span>(+20) 101 234 4772</span>
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-5">
      <a
        href="tel:+201012344772"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#5aa4b1] hover:bg-[#4b8d98] text-white text-sm font-medium py-3 rounded-lg transition-all duration-300"
      >
        <Phone className="w-4 h-4" />
        Call
      </a>

      <a
        href="https://wa.me/201012344772"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#5aa4b1] hover:bg-[#4b8d98] text-white text-sm font-medium py-3 rounded-lg transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M16.002 3C8.822 3 3 8.822 3 16c0 2.52.738 4.97 2.133 7.067L3 29l6.133-2.067A12.944 12.944 0 0016.002 29C23.18 29 29 23.178 29 16S23.18 3 16.002 3zm0 23.667a10.6 10.6 0 01-5.4-1.48l-.387-.227-3.64 1.227 1.227-3.547-.253-.4A10.593 10.593 0 015.333 16c0-5.882 4.786-10.667 10.669-10.667 5.88 0 10.665 4.785 10.665 10.667s-4.785 10.667-10.665 10.667zm5.84-7.947c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.496-2.567-1.58-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.547l-.613-.013c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.827.763.33 1.36.527 1.827.673.767.244 1.467.21 2.02.127.616-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
        WhatsApp
      </a>
    </div>
  </div>
</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Project Videos - Only ITS Egypt */}
      {projectVideoCards.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl text-navy mb-8">
                Project Videos
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectVideoCards.map((video, i) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className={`group text-left bg-white rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      i === 0
                        ? "border-[#5aa4b1]/40 shadow-md"
                        : "border-gray-200 hover:border-[#5aa4b1]"
                    }`}
                  >
                    <div className="relative aspect-video bg-black overflow-hidden m-5 mb-0 rounded-lg">
                      {i === 0 ? (
                        <img
                          src={project.heroImage}
                          alt={video.label}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <video
                          src={video.url}
                          preload="metadata"
                          muted
                          className="w-full h-full object-cover opacity-70"
                        />
                      )}

                      <div className="absolute inset-0 bg-black/20" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="w-14 h-14 rounded-full bg-[#5aa4b1] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#4b8d98] transition-all">
                          <Play className="w-6 h-6 fill-white ml-1" />
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3
                        className={`font-display font-bold text-base mb-2 transition-colors ${
                          i === 0
                            ? "text-[#5aa4b1]"
                            : "text-navy group-hover:text-[#5aa4b1]"
                        }`}
                      >
                        {video.label}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Click to play video
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-4">
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-6xl">
            <h3 className="text-white font-display font-bold text-xl mb-4">
              {activeVideo.label}
            </h3>

            <video
              key={activeVideo.id}
              src={activeVideo.url}
              controls
              autoPlay
              className="w-full max-h-[80vh] aspect-video rounded-xl bg-black object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl text-navy">
                Related Projects
              </h2>

              <Link
                to="/projects"
                className="inline-flex items-center gap-1 text-teal text-sm font-medium hover:gap-2 transition-all"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((proj) => (
                <ProjectCard
                  key={proj.slug}
                  slug={proj.slug}
                  title={proj.title}
                  client={proj.client}
                  heroImage={proj.heroImage}
                  industry={proj.industry}
                  location={proj.location}
                />
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
