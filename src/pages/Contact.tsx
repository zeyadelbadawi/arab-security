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
                <h3 className="font-display font-bold text-lg text-navy mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {branches.map((branch) => (
                    <div key={branch.id} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-semibold text-navy text-sm">{branch.name}</h4>
                          {branch.isHeadquarters && (
                            <span className="px-2 py-0.5 bg-teal/10 text-teal text-xs font-medium rounded-full">HQ</span>
                          )}
                        </div>
                        <a
                          href={`https://www.google.com/maps?q=${branch.lat},${branch.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal hover:text-teal-dark transition-colors"
                          aria-label={`View ${branch.name} on Google Maps`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-gray-500 text-xs mb-1">{branch.address}</p>
                      <p className="text-gray-500 text-xs">{branch.phone}</p>
                    </div>
                  ))}
                </div>

                {/* Newsletter */}
                <div className="mt-8 bg-navy rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2">Newsletter</h3>
                  <p className="text-white/60 text-sm mb-4">Subscribe to get the latest updates and insights.</p>
                  <form onSubmit={handleNewsletter} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-teal transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-teal hover:bg-teal-dark text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-1"
                    >
                      {subscribed ? "Done!" : <Send className="w-4 h-4" />}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}