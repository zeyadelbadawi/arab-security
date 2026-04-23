import { useState } from "react";
import { CheckCircle, Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", solution: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    
    try {
      // Submit form to Google Sheets via API
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("[v0] Form submission response:", result);
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("[v0] Error submitting form:", error);
      setIsSubmitting(false);
      setErrors({ submit: "Failed to submit form. Please try again." });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    // Clear submit error when user starts typing
    if (errors.submit) {
      setErrors({ ...errors, submit: "" });
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
        <h3 className="font-display font-bold text-2xl text-navy mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">We'll be in touch within 24 hours.</p>
        <button
          onClick={() => { setIsSuccess(false); setFormData({ name: "", email: "", phone: "", company: "", service: "", solution: "", message: "" }); }}
          className="text-teal font-medium hover:underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{errors.submit}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            name="name" value={formData.name} onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-400" : "border-gray-200"} focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-sm`}
            placeholder="Ziad Elbadawi"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            name="email" type="email" value={formData.email} onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-400" : "border-gray-200"} focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-sm`}
            placeholder="ziad@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            name="phone" value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-sm"
            placeholder="+20 123 456 789"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            name="company" value={formData.company} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-sm"
            placeholder="Your Company Name"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
          <select name="service" value={formData.service} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-sm bg-white"
>
  <option value="">Select a service</option>
  <option value="system-design-consultancy">System Design & Consultancy</option>
  <option value="project-management">Project Management</option>
  <option value="installation-commissioning">Installation & Commissioning</option>
  <option value="testing-integration">Testing & Integration</option>
  <option value="maintenance-after-sales">Maintenance & After-Sales Support</option>
  <option value="technical-training">Technical Training & Support</option>
</select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Solution Interest</label>
          <select name="solution" value={formData.solution} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-sm bg-white"
            >
    <option value="">Select a solution</option>
    <option value="integrated-security">Integrated Security</option>
    <option value="access-control-id">Access Control & ID</option>
    <option value="physical-security">Physical Security</option>
    <option value="parking-traffic">Parking & Traffic</option>
    <option value="fire-life-safety">Fire & Life Safety</option>
    <option value="light-current-elv">Light Current & ELV</option>
    <option value="smart-solutions">Smart Solutions</option>
    <option value="x-ray-inspection">X-Ray & Inspection</option>
    <option value="audio-visual">Audio Visual</option>
  </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          name="message" value={formData.message} onChange={handleChange} rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-400" : "border-gray-200"} focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors text-sm resize-none`}
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-display font-semibold rounded-lg transition-all duration-300 disabled:opacity-60"
      >
        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
