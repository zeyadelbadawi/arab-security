import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { coreValues, whyWorkAtASG, getJobOpenings } from "@/lib/data/careers";
import * as Icons from "lucide-react";
import { MapPin, Clock, Briefcase, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[name];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}

const jobs = getJobOpenings();

export default function CareersPage() {
  return (
    <>
      <HeroSection
        title="Careers at Arab Security Group"
        subtitle="Join a team of passionate engineers and professionals building the future of integrated technology solutions."
        backgroundImage={IMAGES.heroAboutTeam}
        variant="page"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Careers" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Work at Arab Security Group"
            subtitle="We offer more than just a job — we offer a career in one of the most dynamic and rewarding industries."
            overline="Life in ASG"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWorkAtASG.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <DynamicIcon name={item.icon} className="w-6 h-6 text-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Arab Security Group."
            overline="What We Stand For"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                    <DynamicIcon name={value.icon} className="w-7 h-7 text-navy" />
                  </div>
                  <h4 className="font-display font-semibold text-navy text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slideLeft">
              <SectionHeading title="Work Environment" alignment="left" overline="Our Culture" />
              <p className="text-gray-600 leading-relaxed mb-4">
                At Arab Security Group, we foster a collaborative and innovative work environment where every team member is valued. Our offices are equipped with the latest technology, and our project sites span some of the most exciting developments in the region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe in continuous learning and provide regular opportunities for professional development, including factory training with our technology partners, industry certifications, and attendance at international exhibitions and conferences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team works on diverse projects — from securing international airports to designing smart city infrastructure — ensuring that every day brings new challenges and opportunities for growth.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="slideRight">
              <img src={IMAGES.heroAboutTeam} alt="ASG Work Environment" className="rounded-2xl shadow-xl w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Current Openings"
            subtitle="Explore our current job opportunities and find your next career move."
            overline="Job Openings"
          />
          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <ScrollReveal key={job.id}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-display font-bold text-navy text-lg">{job.title}</h4>
                      <p className="text-teal text-sm font-medium">{job.department}</p>
                    </div>
                    <a
                      href={`mailto:careers@asggroup.com?subject=Application: ${job.title}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal hover:bg-teal-dark text-white text-sm font-display font-semibold rounded-lg transition-colors flex-shrink-0"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.experience}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Posted {new Date(job.postedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-medium mb-2">Requirements:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Don't see a role that fits? Send us your CV for future opportunities.</p>
              <a
                href="mailto:careers@asggroup.com?subject=General Application"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy hover:bg-navy-light text-white font-display font-semibold rounded-lg transition-colors"
              >
                Send Your CV
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABlock
        title="Build Your Career with Arab Security Group"
        subtitle="Join a team that's shaping the future of integrated technology solutions in the region."
        primaryText="View Openings"
        primaryHref="/careers"
        secondaryText="Contact HR"
        secondaryHref="mailto:careers@asggroup.com"
      />
    </>
  );
}