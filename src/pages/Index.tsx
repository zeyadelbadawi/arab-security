import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cpu, Users, Award, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { LogoGrid } from "@/components/sections/logo-grid";
import { SolutionCard } from "@/components/cards/solution-card";
import { ProjectCard } from "@/components/cards/project-card";
import { IndustryCard } from "@/components/cards/industry-card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { CounterAnimation } from "@/components/animation/counter-animation";
import { IMAGES } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";
import { getSolutions } from "@/lib/data/solutions";
import { getFeaturedProjects } from "@/lib/data/projects";
import { getPartners } from "@/lib/data/partners";
import { getFeaturedClients } from "@/lib/data/clients";
import { getTestimonials } from "@/lib/data/testimonials";
import { getIndustries } from "@/lib/data/industries";
import { getRecentMedia, type MediaItem } from "@/lib/data/media";
import { getFeaturedFAQs, type FAQ } from "@/lib/data/faqs";
import { Calendar } from "lucide-react";

const solutions = getSolutions();
const featuredProjects = getFeaturedProjects();
const partners = getPartners();
const featuredClients = getFeaturedClients();
const testimonials = getTestimonials();
const industries = getIndustries();
const recentMedia = getRecentMedia(3);
const topFaqs = getFeaturedFAQs(5);

function HomeFAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-display font-semibold text-navy text-sm pr-4">{faq.question}</span>
        <ChevronDown className={`w-4 h-4 text-teal flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

function MediaPreviewCard({ item }: { item: MediaItem }) {
  const typeColors = {
    news: "bg-blue-100 text-blue-700",
    blog: "bg-teal/10 text-teal",
    event: "bg-orange-100 text-orange-700",
  };
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${typeColors[item.type]}`}>{item.type}</span>
          <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
        </div>
        <h4 className="font-display font-bold text-navy text-sm mb-2 group-hover:text-teal transition-colors line-clamp-2">{item.title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">{item.excerpt}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="The Integrated Intelligence Behind Tomorrow's Smart Cities"
        subtitle="Integrated Security & Technology Solutions for the Enterprise. From design to deployment and beyond — Arab Security Group delivers end-to-end systems integration for organizations that demand reliability."
        backgroundImage={IMAGES.heroCommandCenter}
        primaryCTA={{ text: "Explore Solutions", href: "/solutions", variant: "primary" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact", variant: "outline" }}
        stats={siteConfig.stats}
        variant="home"
        overlay="gradient"
      />

      {/* About Snippet / Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <span className="text-teal text-xs font-semibold uppercase tracking-[0.1em]">About Arab Security Group</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mt-3 mb-6">
                Your Trusted Partner in Integrated Technology Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience, Arab Security Group has established itself as a leading systems integrator in the region. We design, implement, and maintain comprehensive technology solutions that protect assets, enhance operations, and drive business value for enterprise clients across all sectors.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, label: "End-to-End Security" },
                  { icon: Cpu, label: "Smart Integration" },
                  { icon: Users, label: "Expert Engineers" },
                  { icon: Award, label: "Certified Partners" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-navy text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-teal font-display font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="slideRight">
              <div className="relative">
                <img
                  src={IMAGES.heroAboutTeam}
                  alt="Arab Security Group Team"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-navy rounded-xl p-6 shadow-xl hidden sm:block">
                  <div className="text-3xl font-display font-bold text-white">
                    <CounterAnimation value={15} suffix="+" />
                  </div>
                  <div className="text-white/60 text-sm">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why ASG? */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Arab Security Group?"
            subtitle="What sets us apart as your technology partner."
            overline="Our Advantage"
            theme="dark"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "End-to-End Delivery", desc: "From design and consultancy through installation, commissioning, and ongoing maintenance — we handle it all.", icon: CheckCircle },
              { title: "Certified Engineers", desc: "Factory-certified engineers across all major technology brands ensuring expert-level implementation.", icon: Award },
              { title: "500+ Projects", desc: "A proven track record of successful projects across diverse industries and technology domains.", icon: Shield },
              { title: "24/7 Support", desc: "Round-the-clock monitoring, rapid-response maintenance, and dedicated after-sales support.", icon: Users },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-teal/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Comprehensive technology solutions designed to protect, connect, and empower your organization."
            overline="What We Offer"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <StaggerItem key={sol.slug}>
                <SolutionCard
                  slug={sol.slug}
                  title={sol.title}
                  description={sol.shortDescription}
                  icon={sol.icon}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Industries"
            subtitle="We serve organizations across 10 diverse industry sectors with tailored technology solutions."
            overline="Industries We Serve"
          />
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <IndustryCard
                  slug={ind.slug}
                  title={ind.title}
                  icon={ind.icon}
                  compact
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-8">
            <Link to="/industries" className="inline-flex items-center gap-2 text-teal font-display font-semibold hover:gap-3 transition-all text-sm">
              Explore All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technology Partners"
            subtitle="We partner with the world's leading technology brands to deliver best-in-class solutions."
            overline="Trusted By"
          />
          <LogoGrid logos={partners} variant="carousel" grayscale />
          <div className="text-center mt-8">
            <Link to="/partners" className="inline-flex items-center gap-2 text-teal font-display font-semibold hover:gap-3 transition-all text-sm">
              View All Partners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Success Stories"
            subtitle="Explore our portfolio of successful projects across diverse industries and technology domains."
            overline="Our Work"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((proj) => (
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
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-navy hover:bg-navy-light text-white font-display font-semibold rounded-lg transition-all"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest Insights"
            subtitle="Stay updated with our latest news, articles, and industry insights."
            overline="Recent Blogs"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentMedia.map((item) => (
              <StaggerItem key={item.slug}>
                <Link to={`/media/${item.slug}`} className="block h-full">
                  <MediaPreviewCard item={item} />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-8">
            <Link to="/media" className="inline-flex items-center gap-2 text-teal font-display font-semibold hover:gap-3 transition-all text-sm">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about Arab Security Group."
            overline="Top FAQs"
          />
          <div className="space-y-3">
            {topFaqs.map((faq) => (
              <HomeFAQItem key={faq.id} faq={faq} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faqs" className="inline-flex items-center gap-2 text-teal font-display font-semibold hover:gap-3 transition-all text-sm">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Clients"
            subtitle="Trusted by leading organizations across enterprise, government, and industrial sectors."
            overline="Who We Serve"
          />
          <LogoGrid logos={featuredClients} variant="static" grayscale />
          <div className="text-center mt-8">
            <Link to="/clients" className="inline-flex items-center gap-2 text-teal font-display font-semibold hover:gap-3 transition-all text-sm">
              See All Clients <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from the organizations we've partnered with to deliver exceptional results."
            overline="Testimonials"
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Ready to Secure Your Next Project?"
        subtitle="Our team of engineers is here to help you design, implement, and maintain the perfect solution."
        primaryText="Request a Meeting"
        primaryHref="/contact"
        secondaryText="Call Us Now"
        secondaryHref="/contact"
      />
    </>
  );
}
