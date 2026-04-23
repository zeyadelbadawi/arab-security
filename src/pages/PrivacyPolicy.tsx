import { HeroSection } from "@/components/sections/hero-section";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        subtitle="How Arab Security Group collects, uses, and protects your personal information."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-500 text-sm mb-8">Last updated: April 16, 2026</p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Arab Security Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and job title when you fill out contact forms or request consultations.</li>
                <li><strong>Usage Data:</strong> Browser type, operating system, pages visited, time spent on pages, and other diagnostic data.</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience.</li>
              </ul>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you relevant information about our solutions and services</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
                <li>Communicate about projects, training, and events</li>
              </ul>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="font-display font-bold text-xl text-navy mt-8 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Arab Security Group</strong><br />
                Email: privacy@asggroup.com<br />
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