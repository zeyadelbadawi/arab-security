import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABlock } from "@/components/sections/cta-block";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { getFAQs, type FAQ } from "@/lib/data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

const allFaqs = getFAQs();
const categories = [
  { key: "all", label: "All Questions" },
  { key: "general", label: "General" },
  { key: "solutions", label: "Solutions" },
  { key: "services", label: "Services" },
  { key: "support", label: "Support" },
] as const;

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-display font-semibold text-navy text-sm sm:text-base pr-4">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all" ? allFaqs : allFaqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Arab Security Group's solutions, services, and support."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "FAQs" }]} />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.key
                      ? "bg-teal text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-3">
              {filtered.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No questions found in this category.</p>
              </div>
            )}
          </ScrollReveal>

          {/* Still Have Questions */}
          <ScrollReveal>
            <div className="mt-16 bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="font-display font-bold text-2xl text-navy mb-3">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Can't find the answer you're looking for? Our team is happy to help. Reach out to us directly.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal hover:bg-teal-dark text-white font-display font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABlock
        title="Ready to Get Started?"
        subtitle="Let's discuss how Arab Security Group can help your organization."
        primaryText="Request a Meeting"
        primaryHref="/contact"
      />
    </>
  );
}