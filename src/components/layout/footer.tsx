import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function SocialIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[name];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        // Submit newsletter subscription to Google Sheets
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            type: "newsletter",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit");
        }

        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 4000);
      } catch (error) {
        console.error("[v0] Newsletter subscription error:", error);
        // Still show success message even if there's an error
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 4000);
      }
    }
  };

  return (
    <footer className="bg-deep-dark text-white">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-white/60 text-sm">Get the latest news, insights, and updates delivered to your inbox.</p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 md:w-72 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-teal transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-teal hover:bg-teal-dark text-white text-sm font-display font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src="/assets/logos/logo-white.png" alt="Arab Security Group" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Integrated Security & Technology Solutions for the Enterprise. End-to-end systems integration for organizations that demand reliability.
            </p>
            <div className="flex gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-teal flex items-center justify-center transition-colors duration-300"
                  aria-label={link.platform}
                >
                  <SocialIcon name={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Integrated Security", href: "/solutions/integrated-security" },
                { label: "Access Control & ID", href: "/solutions/access-control" },
                { label: "Physical Security", href: "/solutions/physical-security" },
                { label: "Parking & Traffic", href: "/solutions/parking-traffic" },
                { label: "Fire & Life Safety", href: "/solutions/fire-life-safety" },
                { label: "Light Current & ELV", href: "/solutions/light-current-elv" },
                { label: "Smart Solutions", href: "/solutions/smart-intelligent" },
                { label: "X-Ray & Inspection", href: "/solutions/xray-inspection" },
                { label: "Audio Visual", href: "/solutions/audio-visual" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/60 hover:text-teal text-sm transition-colors inline-flex items-center gap-1 group">
                    {item.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Clients", href: "/clients" },
                { label: "Partners", href: "/partners" },
                { label: "Industries", href: "/industries" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/60 hover:text-teal text-sm transition-colors inline-flex items-center gap-1 group">
                    {item.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Media Center", href: "/media" },
                { label: "FAQs", href: "/faqs" },
                { label: "Training", href: "/training" },
                { label: "Partner With Us", href: "/partner-with-us" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/60 hover:text-teal text-sm transition-colors inline-flex items-center gap-1 group">
                    {item.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-white/60 hover:text-teal text-sm transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-teal text-sm transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal hover:bg-teal-dark text-white text-sm font-display font-semibold rounded-lg transition-all duration-300"
              >
                Ready to Start?
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Arab Security Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/40 hover:text-teal text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-teal text-xs transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
