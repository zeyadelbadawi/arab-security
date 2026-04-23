export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: "general" | "solutions" | "services" | "support";
  }
  
  export const faqs: FAQ[] = [
    {
      id: "faq-1",
      question: "What industries does Arab Security Group serve?",
      answer: "Arab Security Group serves a wide range of industries including Government & Public Sector, Commercial & Corporate, Industrial & Manufacturing, Hospitality, Healthcare, Education, Transportation & Logistics, Retail & Commercial Centers, Residential & Mixed-Use Developments, and Energy, Oil & Gas.",
      category: "general",
    },
    {
      id: "faq-2",
      question: "Where are Arab Security Group's offices located?",
      answer: "Arab Security Group is headquartered in Cairo, Egypt (Smart Village, 6th of October), with branch offices in Alexandria, Egypt and Riyadh, Saudi Arabia. We serve clients across the Middle East and North Africa region.",
      category: "general",
    },
    {
      id: "faq-3",
      question: "What makes Arab Security Group different from other systems integrators?",
      answer: "Arab Security Group stands out through our end-to-end delivery model — from system design and consultancy through installation, commissioning, and ongoing maintenance. We are certified partners with leading global technology brands, have 15+ years of experience, and maintain a team of factory-certified engineers.",
      category: "general",
    },
    {
      id: "faq-4",
      question: "Does Arab Security Group offer maintenance and support contracts?",
      answer: "Yes, we offer comprehensive maintenance and after-sales support packages including 24/7 monitoring, preventive maintenance, emergency response, spare parts management, and remote technical support. Our SLAs are tailored to your operational requirements.",
      category: "support",
    },
    {
      id: "faq-5",
      question: "What types of security solutions does Arab Security Group provide?",
      answer: "We provide a full spectrum of security solutions including CCTV & Video Surveillance, AI-Based Video Analytics, Access Control & Biometric Systems, Physical Security (gates, barriers, bollards), X-Ray & Inspection Systems, Command & Control Rooms, and Perimeter Protection Systems.",
      category: "solutions",
    },
    {
      id: "faq-6",
      question: "Can Arab Security Group integrate multiple systems from different vendors?",
      answer: "Absolutely. As a vendor-agnostic systems integrator, we specialize in integrating solutions from multiple technology partners into a unified, seamless platform. We work with brands like Axis, Hikvision, Honeywell, Bosch, Cisco, and many more.",
      category: "solutions",
    },
    {
      id: "faq-7",
      question: "Does Arab Security Group provide smart building and home automation solutions?",
      answer: "Yes, we offer comprehensive smart and intelligent solutions including Building Management Systems (BMS), Smart City platforms, and Home Automation & Smart Living solutions using protocols like KNX, BACnet, Zigbee, and more.",
      category: "solutions",
    },
    {
      id: "faq-8",
      question: "What is the typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Small installations may take 2-4 weeks, while large enterprise projects can span 6-12 months. During the consultancy phase, we provide a detailed project plan with milestones and delivery dates.",
      category: "services",
    },
    {
      id: "faq-9",
      question: "Does Arab Security Group offer training on installed systems?",
      answer: "Yes, we provide comprehensive technical training as part of our service offerings. This includes operator training, administrator training, and advanced technical training. We also offer dedicated training sessions that can be requested through our Training page.",
      category: "services",
    },
    {
      id: "faq-10",
      question: "How can I request a quotation or consultation?",
      answer: "You can request a consultation by visiting our Contact page, calling our office directly, or sending an email to infoegypt@arab-security.com. Our team will schedule a meeting to understand your requirements and provide a tailored proposal.",
      category: "general",
    },
    {
      id: "faq-11",
      question: "Are Arab Security Group's solutions compliant with international standards?",
      answer: "Yes, all our solutions are designed and installed in compliance with international standards including EN 54 (Fire), NFPA, TIA/EIA-568 (Cabling), PAS 68 (Physical Security), ECAC/TSA (X-Ray), and ISO 27001 (Information Security).",
      category: "solutions",
    },
    {
      id: "faq-12",
      question: "Does Arab Security Group handle the entire project lifecycle?",
      answer: "Yes, we provide end-to-end services covering System Design & Consultancy, Project Management, Installation & Commissioning, Testing & Integration, Maintenance & After-Sales Support, and Technical Training.",
      category: "services",
    },
  ];
  
  export function getFAQs(): FAQ[] {
    return faqs;
  }
  
  export function getFAQsByCategory(category: FAQ["category"]): FAQ[] {
    return faqs.filter((f) => f.category === category);
  }
  
  export function getFeaturedFAQs(count = 5): FAQ[] {
    return faqs.slice(0, count);
  }