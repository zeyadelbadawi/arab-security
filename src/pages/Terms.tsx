import { HeroSection } from "@/components/sections/hero-section";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";

export default function TermsPage() {
  return (
    <>
      <HeroSection
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using Arab Security Group's website and services."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-500 text-sm mb-8">Last updated: April 16, 2026</p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using the Arab Security Group website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">2. Use of Website</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The content of this website is for general information and use only. It is subject to change without notice. You may not use this website for any purpose that is unlawful or prohibited by these terms.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of Arab Security Group and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Arab Security Group shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or our services. The information provided on this website is for general purposes only and does not constitute professional advice.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">5. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may contain links to third-party websites. These links are provided for your convenience only. Arab Security Group does not endorse or assume responsibility for the content or practices of any third-party websites.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">6. Service Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specific terms and conditions for our professional services, including system design, installation, maintenance, and training, are governed by individual service agreements and contracts executed between Arab Security Group and the client.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">7. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Egypt.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Arab Security Group reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website constitutes acceptance of the modified terms.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">9. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>Arab Security Group</strong><br />
                Email: legal@asggroup.com<br />
                Phone: 0223495290<br />
                Address: 4 Dr. Mohamed Awad, Al Mintaqah as Sādisah, Nasr City, Cairo, Egypt
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}