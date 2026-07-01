import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { ContactForm } from "@/components/sections/contact-form";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { siteConfig, branches } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock, Send, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };
const sectors = [
  {
    name: "ITS Sector",
    people: [
      { name: "Karim Elshanawnay", title: "BDM ITS Private Sector", email: "Karim@arab-security.com" },
      { name: "Ahmed Abdelhamid", title: "Government BDM", email: "ahmed@arab-security.com" },
    ],
  },
  {
    name: "Education & Healthcare Sector",
    people: [
      { name: "Shimaa Fathy", title: "Project Sales Manager", email: "shimaa@arab-security.com" },
      { name: "Nourhan Elsebaey", title: "Healthcare BDM", email: "nourhan@arab-security.com" },
    ],
  },
  {
    name: "Residential & Hospitality Sector",
    people: [
      { name: "Haidy Nabieh", title: "Sales Manager Residential & Hospitality Sector", email: "Haidy@arab-security.com" },
      { name: "Salah Shawky", title: "Residential & Telecom BDM", email: "Salah@arab-security.com" },
    ],
  },
  {
    name: "Oil & Gas Sector",
    people: [
      { name: "Mohamed Osama", title: "Sales Manager", email: "Mohamed@arab-security.com" },
      { name: "Seif Elmehy", title: "System Integrator & Energy BDM", email: "Seif@arab-security.com" },
    ],
  },
  {
    name: "Pre-Sales Team",
    people: [
      { name: "Ghada Rashad", title: "Pre-Sales Manager", email: "Ghada@arab-security.com" },
      { name: "Michael Ghali", title: "Pre-sales Director", email: "Michael@arab-security.com" },
    ],
  },
];
  
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Ready to discuss your project? Our team of engineers is here to help."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-display font-bold text-2xl text-navy mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-navy rounded-2xl p-8 text-white mb-8">
                  <h3 className="font-display font-bold text-xl mb-6">Get in Touch</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/60 text-xs mb-1">Phone</p>
                        <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-teal transition-colors text-sm">{siteConfig.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/60 text-xs mb-1">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-teal transition-colors text-sm">{siteConfig.email}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/60 text-xs mb-1">Address</p>
                        <p className="text-white text-sm">{siteConfig.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/60 text-xs mb-1">Working Hours</p>
                        <p className="text-white text-sm">Sun - Thu: 9:00 AM - 5:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Locations */}
                

                {/* Newsletter */}
                
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollReveal>
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-4">
          Our Sectors
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Connect directly with the right team based on your sector and project needs.
        </p>
      </div>
    </ScrollReveal>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectors.map((sector, index) => (
        <ScrollReveal key={sector.name} delay={index * 0.1}>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
            <h3 className="font-display font-bold text-xl text-navy mb-5">
              {sector.name}
            </h3>

            <div className="space-y-5">
              {sector.people.map((person) => (
                <div key={person.email} className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0">
                  <h4 className="font-semibold text-navy">{person.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{person.title}</p>

                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 text-sm text-teal hover:text-navy transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {person.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>
    </>
  );
}
