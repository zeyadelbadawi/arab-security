'use client';

import { ScrollReveal } from "@/components/animation/scroll-reveal";

export function OrganizationChart() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-navy/5 to-teal/5 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2">
              Organization Chart
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Our leadership structure and team hierarchy
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideUp" delay={0.2}>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-3 sm:p-5 lg:p-8">
            <img
              src="/assets/organization-chart.jpg"
              alt="ASG Distribution organization chart"
              className="w-full h-auto object-contain rounded-xl"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
