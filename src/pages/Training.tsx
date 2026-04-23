import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTABlock } from "@/components/sections/cta-block";
import { ContactForm } from "@/components/sections/contact-form";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { getUpcomingSessions, type TrainingSession } from "@/lib/data/training";
import { Calendar, Clock, MapPin, Users, GraduationCap, ChevronDown } from "lucide-react";

const sessions = getUpcomingSessions();

function SessionCard({ session }: { session: TrainingSession }) {
  const [expanded, setExpanded] = useState(false);
  const levelColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-yellow-100 text-yellow-700",
    advanced: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="grid md:grid-cols-3 gap-0">
        <div className="aspect-video md:aspect-auto overflow-hidden">
          <img src={session.image} alt={session.title} className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${levelColors[session.level]}`}>
              {session.level}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              {session.category}
            </span>
          </div>
          <h3 className="font-display font-bold text-navy text-lg mb-2">{session.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{session.description}</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-teal" /> {new Date(session.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-teal" /> {session.duration}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-teal" /> {session.location}</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3 text-teal" /> Max {session.maxParticipants} participants</span>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-teal text-sm font-medium hover:gap-2 transition-all"
          >
            {expanded ? "Hide" : "View"} Topics
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>

          {expanded && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {session.topics.map((topic, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TrainingPage() {
  return (
    <>
      <HeroSection
        title="Training & Certification"
        subtitle="Enhance your skills with Arab Security Group's professional training programs delivered by certified engineers."
        backgroundImage={IMAGES.heroAboutTeam}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Training" }]} />

      {/* Upcoming Sessions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Training Sessions"
            subtitle="Browse our scheduled training programs and register to enhance your technical skills."
            overline="Training Calendar"
          />
          <StaggerContainer className="space-y-6">
            {sessions.map((session) => (
              <StaggerItem key={session.id}>
                <SessionCard session={session} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {sessions.length === 0 && (
            <div className="text-center py-16">
              <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No upcoming sessions at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Request Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Request a Training Session"
            subtitle="Need a customized training program for your team? Fill out the form below and we'll get back to you."
            overline="Custom Training"
          />
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABlock
        title="Invest in Your Team's Skills"
        subtitle="Professional training programs delivered by factory-certified engineers."
        primaryText="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}