import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import {
  coreValues,
  whyWorkAtASG,
  getJobOpenings,
} from "@/lib/data/careers";

import * as Icons from "lucide-react";

import {
  MapPin,
  Clock,
  Briefcase,
  Calendar,
  CheckCircle2,
  Building2,
  ArrowRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const IconComponent =
    (Icons as unknown as Record<string, LucideIcon>)[name];

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

      {/* ========================= */}
      {/* WHY WORK AT ASG */}
      {/* ========================= */}


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title="Current Openings"
            subtitle="Join our growing team and help deliver world-class integrated security and ELV solutions."
            overline="Career Opportunities"
          />

          <div className="space-y-10 max-w-6xl mx-auto">

            {jobs.map((job) => (

              <ScrollReveal key={job.id}>

                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300">

                  {/* Header */}

                  <div className="bg-gradient-to-r from-navy to-teal text-white p-8">

                    <div className="flex flex-col lg:flex-row justify-between gap-6">

                      <div>

                        <h3 className="text-3xl font-display font-bold">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 mt-5">

                          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                            {job.department}
                          </span>

                          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                            {job.type.replace("-", " ")}
                          </span>

                          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                            {job.experience}
                          </span>

                        </div>

                      </div>

                      <div className="flex items-start">

                        <a
                          href={`mailto:hr@arab-security.com?subject=Application - ${job.title}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-navy shadow hover:scale-105 transition"
                        >
                          Apply Now

                          <ArrowRight className="w-4 h-4" />

                        </a>

                      </div>

                    </div>

                  </div>

                  {/* Body */}

                  <div className="p-8">

                    <p className="text-gray-600 leading-8">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

                      <div className="rounded-xl bg-gray-50 p-4 flex gap-3">

                        <MapPin className="text-teal w-5 h-5 mt-1" />

                        <div>

                          <p className="text-xs uppercase text-gray-400">
                            Location
                          </p>

                          <p className="font-medium text-navy">
                            {job.location}
                          </p>

                        </div>

                      </div>

                      <div className="rounded-xl bg-gray-50 p-4 flex gap-3">

                        <Briefcase className="text-teal w-5 h-5 mt-1" />

                        <div>

                          <p className="text-xs uppercase text-gray-400">
                            Department
                          </p>

                          <p className="font-medium text-navy">
                            {job.department}
                          </p>

                        </div>

                      </div>

                      <div className="rounded-xl bg-gray-50 p-4 flex gap-3">

                        <Clock className="text-teal w-5 h-5 mt-1" />

                        <div>

                          <p className="text-xs uppercase text-gray-400">
                            Experience
                          </p>

                          <p className="font-medium text-navy">
                            {job.experience}
                          </p>

                        </div>

                      </div>

                      <div className="rounded-xl bg-gray-50 p-4 flex gap-3">

                        <Calendar className="text-teal w-5 h-5 mt-1" />

                        <div>

                          <p className="text-xs uppercase text-gray-400">
                            Posted
                          </p>

                          <p className="font-medium text-navy">
                            {new Date(job.postedDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </p>

                        </div>

                      </div>

                    </div>
                    
                    {/* ====================================== */}
                    {/* Responsibilities */}
                    {/* ====================================== */}

                    <div className="mt-10">

                      <h4 className="text-xl font-display font-bold text-navy mb-5">
                        Key Responsibilities
                      </h4>

                      <div className="space-y-4">

                        {job.responsibilities.map((item, index) => (

                          <div
                            key={index}
                            className="flex items-start gap-3"
                          >

                            <CheckCircle2 className="w-5 h-5 text-teal mt-1 flex-shrink-0" />

                            <p className="text-gray-600 leading-7">
                              {item}
                            </p>

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* ====================================== */}
                    {/* Requirements */}
                    {/* ====================================== */}

                    <div className="mt-10">

                      <h4 className="text-xl font-display font-bold text-navy mb-5">
                        Qualifications & Skills
                      </h4>

                      <div className="flex flex-wrap gap-3">

                        {job.requirements.map((req, index) => (

                          <span
                            key={index}
                            className="rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal transition hover:bg-teal hover:text-white"
                          >
                            {req}
                          </span>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </ScrollReveal>

            ))}

          </div>
                    {/* ====================================== */}
          {/* General Application */}
          {/* ====================================== */}

          <ScrollReveal>

            <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">

              <Building2 className="mx-auto mb-5 h-12 w-12 text-teal" />

              <h3 className="font-display text-3xl font-bold text-navy">
                Don't See the Right Opportunity?
              </h3>

              <p className="mx-auto mt-4 mb-8 max-w-2xl leading-8 text-gray-600">
                We're always looking for talented engineers, project
                managers, designers, and technology professionals.
                Send us your CV and we'll contact you whenever a
                suitable opportunity becomes available.
              </p>

              <a
                href="mailto:hr@arab-security.com?subject=General Application"
                className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 font-display font-semibold text-white transition-all duration-300 hover:bg-navy-light"
              >
                Send Your CV

                <ArrowRight className="h-5 w-5" />

              </a>

            </div>

          </ScrollReveal>

        </div>

      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title="Why Work at Arab Security Group"
            subtitle="We offer more than just a job — we offer a career in one of the most dynamic and rewarding industries."
            overline="Life in ASG"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {whyWorkAtASG.map((item, i) => (

              <StaggerItem key={i}>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                  <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-5">

                    <DynamicIcon
                      name={item.icon}
                      className="w-7 h-7 text-teal"
                    />

                  </div>

                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>

                </div>

              </StaggerItem>

            ))}

          </StaggerContainer>

        </div>

      </section>
            {/* ========================= */}
      {/* CORE VALUES */}
      {/* ========================= */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Arab Security Group."
            overline="What We Stand For"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {coreValues.map((value, i) => (

              <StaggerItem key={i}>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                  <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-5">

                    <DynamicIcon
                      name={value.icon}
                      className="w-8 h-8 text-navy"
                    />

                  </div>

                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {value.description}
                  </p>

                </div>

              </StaggerItem>

            ))}

          </StaggerContainer>

        </div>
      </section>

      {/* ========================= */}
      {/* WORK ENVIRONMENT */}
      {/* ========================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <ScrollReveal variant="slideLeft">

              <SectionHeading
                title="Work Environment"
                alignment="left"
                overline="Our Culture"
              />

              <p className="text-gray-600 leading-8 mb-6">
                At Arab Security Group, we foster a collaborative,
                innovative, and professional workplace where every team
                member contributes to delivering integrated technology
                solutions for mission-critical environments.
              </p>

              <p className="text-gray-600 leading-8 mb-6">
                Our engineers work with leading global technologies in
                security, networking, fire safety, automation, and ELV
                systems while receiving continuous training,
                certifications, and professional development.
              </p>

              <p className="text-gray-600 leading-8">
                From smart cities and airports to hospitals,
                universities, government facilities, hotels, and
                enterprise campuses, every project offers exciting
                technical challenges and opportunities for career growth.
              </p>

            </ScrollReveal>

            <ScrollReveal variant="slideRight">

              <img
                src={IMAGES.heroAboutTeam}
                alt="Arab Security Group Team"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />

            </ScrollReveal>

          </div>

        </div>

      </section>
            {/* ================================================= */}
      {/* CURRENT OPENINGS */}
      {/* ================================================= */}


      {/* ====================================== */}
      {/* CTA */}
      {/* ====================================== */}

      <CTABlock
        title="Build Your Career with Arab Security Group"
        subtitle="Join a team delivering innovative integrated security and technology solutions across Egypt and the Middle East."
        primaryText="Apply Today"
        primaryHref="mailto:hr@arab-security.com"
        secondaryText="Contact HR"
        secondaryHref="mailto:hr@arab-security.com"
      />

    </>
  );
}
