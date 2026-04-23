import { Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { ContactForm } from "@/components/sections/contact-form";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { LogoGrid } from "@/components/sections/logo-grid";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { getPartners } from "@/lib/data/partners";
import { getTestimonials } from "@/lib/data/testimonials";
import { Handshake, Globe, Award, TrendingUp, Shield, Users } from "lucide-react";

const partners = getPartners();
const testimonials = getTestimonials();

const whyPartner = [
  { icon: Globe, title: "Regional Reach", description: "Access to a growing market across Egypt, Saudi Arabia, and the wider MENA region with established client relationships." },
  { icon: Award, title: "Certified Excellence", description: "Factory-certified engineering team with deep expertise across multiple technology domains and international standards." },
  { icon: TrendingUp, title: "Growth Opportunity", description: "Rapidly expanding project pipeline across government, commercial, industrial, and residential sectors." },
  { icon: Shield, title: "Proven Track Record", description: "500+ successful projects delivered with 200+ enterprise clients trusting our solutions." },
  { icon: Users, title: "Dedicated Support", description: "Dedicated partner management, joint marketing initiatives, and co-selling opportunities." },
  { icon: Handshake, title: "Long-Term Partnership", description: "We build lasting relationships with our technology partners, growing together through shared success." },
];

export default function PartnerWithUsPage() {
  return (
    <>
      <HeroSection
        title="Partner With Arab Security Group"
        subtitle="Join our ecosystem of world-class technology partners and grow your business across the MENA region."
        backgroundImage={IMAGES.heroNetworking}
        variant="page"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Our Network", href: "/partners" }, { label: "Partner With Us" }]} />

      {/* Why Partner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Partner with Arab Security Group"
            subtitle="Leverage our expertise, reach, and reputation to grow your technology business in the region."
            overline="Partnership Benefits"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <SectionHeading title="Technology Expertise" alignment="left" overline="Our Capabilities" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Arab Security Group works across 9 solution categories spanning security, fire safety, networking, smart buildings, and audio-visual systems. Our engineering team holds certifications from leading global technology brands.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are constantly expanding our technology portfolio and looking for innovative partners who share our commitment to excellence and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Integrated Security", "Access Control", "Fire & Safety", "Smart Buildings", "Networking & ELV", "Audio Visual"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm text-navy font-medium">
                    <span className="w-2 h-2 rounded-full bg-teal" />
                    {tech}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slideRight">
              <img src={IMAGES.heroNetworking} alt="Technology" className="rounded-2xl shadow-xl w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      title="Our Technology Partners"
      subtitle="We are proud to partner with the world's leading technology brands."
      overline="Partner Ecosystem"
    />

    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
      {partners.map((partner) => (
        <StaggerItem key={partner.slug}>
       <div className="bg-white rounded-xl border border-gray-200 h-36 px-2 py-2 flex items-center justify-center hover:shadow-md transition-all duration-300">
       <img
  src={partner.logo}
  alt={partner.name}
  className="max-w-full max-h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
  loading="lazy"
/>
</div>
        </StaggerItem>
      ))}
    </StaggerContainer>

    <div className="text-center mt-8">
      <Link to="/partners" className="text-teal font-display font-semibold text-sm hover:underline">
        View All Partners →
      </Link>
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Partners Say"
            subtitle="Hear from the technology partners who trust Arab Security Group."
            overline="Testimonials"
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Become a Partner"
            subtitle="Interested in partnering with Arab Security Group? Fill out the form below and our partnerships team will be in touch."
            overline="Get in Touch"
          />
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABlock
        title="Let's Grow Together"
        subtitle="Partner with Arab Security Group and expand your reach across the MENA region."
        primaryText="Contact Partnerships Team"
        primaryHref="/contact"
      />
    </>
  );
}