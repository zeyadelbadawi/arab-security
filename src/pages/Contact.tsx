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
    </>
  );
}
