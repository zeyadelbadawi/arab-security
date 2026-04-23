import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatsCounter } from "@/components/sections/stats-counter";
import { CTABlock } from "@/components/sections/cta-block";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { IMAGES } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";
import { Target, Eye, Award, Users, Shield, Heart, Lightbulb, Handshake } from "lucide-react";

const historyTimeline = [
  { year: "2009", title: "Founded in Cairo", description: "Arab Security Group was established as a specialized security systems provider in Cairo, Egypt." },
  { year: "2012", title: "First Major Government Project", description: "Secured our first large-scale government contract for integrated security systems." },
  { year: "2015", title: "Expanded to ELV & Networking", description: "Broadened our portfolio to include structured cabling, networking, and ELV systems." },
  { year: "2018", title: "Smart Solutions Division", description: "Launched our smart building and IoT solutions division to meet growing market demand." },
  { year: "2020", title: "Regional Expansion", description: "Opened our UAE Branch and expanded operations across the MENA region." },
  { year: "2023", title: "Saudi Arabia Office", description: "Opened our Riyadh office to serve clients across the GCC region." },
  { year: "2025", title: "500+ Projects Milestone", description: "Celebrated the delivery of over 500 successful projects across 10 industries." },
];

const coreValues = [
  { icon: Award, title: "Excellence", description: "We strive for the highest standards in every project and interaction." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and creative solutions to stay ahead." },
  { icon: Shield, title: "Integrity", description: "We operate with transparency, honesty, and ethical conduct." },
  { icon: Users, title: "Teamwork", description: "We believe in collaboration within our team and with clients." },
  { icon: Heart, title: "Customer Focus", description: "Our clients' success is our success — we deliver beyond expectations." },
  { icon: Handshake, title: "Partnership", description: "We build lasting relationships with clients and technology partners." },
];

const leadership = [
  { name: "CEO", role: "Founder & Chief Executive Officer", description: "Leading Arab Security Group's vision and strategic direction since 2009." },
  { name: "CTO", role: "Chief Technology Officer", description: "Driving technology innovation and solution architecture across all divisions." },
  { name: "COO", role: "Chief Operations Officer", description: "Overseeing project delivery, operations, and quality assurance." },
  { name: "VP Sales", role: "Vice President of Sales", description: "Leading business development and client relationships across the region." },
  { name: "VP Engineering", role: "Vice President of Engineering", description: "Managing the engineering team and technical excellence standards." },
  { name: "HR Director", role: "Director of Human Resources", description: "Building and nurturing Arab Security Group's talented workforce." },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Arab Security Group"
        subtitle="A leading systems integrator delivering end-to-end technology solutions since 2009."
        backgroundImage={IMAGES.heroAboutTeam}
        variant="page"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <SectionHeading title="Who We Are" alignment="left" overline="Our Story" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2009, Arab Security Group has grown from a specialized security systems provider into one of the region's most trusted systems integrators. We combine deep technical expertise with a commitment to excellence, delivering integrated technology solutions that protect, connect, and empower organizations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of certified engineers and project managers brings together decades of experience across networking, security, fire safety, and smart infrastructure. We serve enterprise clients, government entities, and industrial organizations with solutions that are designed, installed, and maintained to the highest international standards.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="slideRight">
              <img src={IMAGES.heroAboutTeam} alt="Arab Security Group Office" className="rounded-2xl shadow-xl" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Journey" subtitle="Key milestones in Arab Security Group's growth story." overline="History" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {historyTimeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                        <span className="text-teal font-display font-bold text-lg">{item.year}</span>
                        <h4 className="font-display font-semibold text-navy mt-1 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal border-2 border-white shadow-sm mt-6" />
                    {/* Spacer for opposite side */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Mission & Vision" overline="Our Purpose" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver integrated technology solutions that exceed expectations, protect assets, and create lasting value for our clients through innovation, expertise, and unwavering commitment to quality.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the region's most trusted and innovative systems integrator, setting the standard for excellence in integrated security and technology solutions across all sectors.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do." overline="Values" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-center h-full hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-navy mb-2">{value.title}</h4>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-navy rounded-2xl p-8 sm:p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-teal" />
                </div>
                <blockquote className="text-white/90 text-lg sm:text-xl leading-relaxed italic mb-6">
                  "At Arab Security Group, we don't just install systems — we build partnerships. Every project is an opportunity to demonstrate our commitment to excellence and our belief that technology, when properly integrated, can transform organizations."
                </blockquote>
                <div>
                  <p className="font-display font-semibold text-white">CEO, Arab Security Group</p>
                  <p className="text-teal text-sm">Founder & Chief Executive Officer</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Leadership Team" subtitle="Meet the team driving Arab Security Group's vision and growth." overline="Our Leaders" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadership.map((person, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center h-full hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-navy/40" />
                  </div>
                  <h4 className="font-display font-bold text-navy text-lg">{person.name}</h4>
                  <p className="text-teal text-sm font-medium mb-2">{person.role}</p>
                  <p className="text-gray-500 text-sm">{person.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Arab Security Group" overline="Our Advantage" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Certified Experts", desc: "Factory-certified engineers across all major technology brands." },
              { icon: Target, title: "End-to-End Delivery", desc: "From design through installation, commissioning, and ongoing maintenance." },
              { icon: Users, title: "200+ Clients", desc: "Trusted by enterprises, governments, and industrial organizations." },
              { icon: Eye, title: "24/7 Support", desc: "Round-the-clock monitoring and rapid-response maintenance services." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-center h-full">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-navy mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter stats={siteConfig.stats} theme="dark" />

      <CTABlock
        title="Work With Arab Security Group"
        subtitle="Let's discuss how we can help your organization achieve its technology goals."
        primaryText="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}