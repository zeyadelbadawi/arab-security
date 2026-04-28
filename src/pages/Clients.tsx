import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { CTABlock } from "@/components/sections/cta-block";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { getClients } from "@/lib/data/clients";
import { getTestimonials } from "@/lib/data/testimonials";

const clients = getClients();
const testimonials = getTestimonials();

const industries = [...new Set(clients.map((c) => c.industry))];

export default function ClientsPage() {
  return (
    <>
      <HeroSection
        title="Our Clients"
        subtitle="Trusted by leading organizations across enterprise, government, industrial, and commercial sectors."
        backgroundImage={IMAGES.heroAboutTeam}
        variant="page"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Clients" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Organizations We Serve" overline="Client Portfolio" />
          {industries.map((industry) => (
            <ScrollReveal key={industry} className="mb-12">
              <h3 className="font-display font-semibold text-lg text-navy mb-4 capitalize">{industry}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {clients.filter((c) => c.industry === industry).map((client) => (
             <div key={client.slug} className="flex flex-col items-center group">
             <div
               className="w-[140px] h-[140px] bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-center hover:shadow-md hover:border-teal/30 transition-all duration-300"
             >
            <img
  src={client.logo}
  alt={client.name}
  className="max-w-[75%] max-h-[75%] object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
/>
             </div>
           
             <span className="mt-3 text-sm font-medium text-navy/80 text-center leading-snug max-w-[140px]">
               {client.name}
             </span>
           </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Our Clients Say" overline="Testimonials" />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <CTABlock title="Join Our Growing Client Base" subtitle="Let's discuss how Arab Security Group can support your organization." />
    </>
  );
}
