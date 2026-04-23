import type { Service } from "../types";
import { IMAGES } from "../constants";

export const services: Service[] = [
  {
    slug: "system-design-consultancy",
    title: "System Design & Consultancy",
    shortDescription: "Expert system design and consultancy services that transform requirements into optimized, scalable technical solutions tailored to your needs.",
    fullDescription: "Our design and consultancy team combines deep technical expertise with industry best practices to create comprehensive system designs. From initial consultation through detailed engineering drawings, we ensure every solution is optimized for performance, scalability, and cost-effectiveness.",
    icon: "PenTool",
    heroImage: IMAGES.heroAboutTeam,
    processSteps: [
      { stepNumber: 1, title: "Consultation", description: "Understanding your requirements, challenges, and objectives through detailed stakeholder interviews.", icon: "MessageSquare" },
      { stepNumber: 2, title: "Site Survey", description: "Comprehensive site assessment including infrastructure audit and environmental analysis.", icon: "MapPin" },
      { stepNumber: 3, title: "System Design", description: "Detailed technical design with architecture diagrams, equipment specifications, and BOQ.", icon: "PenTool" },
      { stepNumber: 4, title: "Review & Approval", description: "Collaborative review process with stakeholders to refine and approve the final design.", icon: "CheckCircle" },
    ],
    whyChooseUs: [
      "Certified design engineers with 15+ years of experience",
      "Vendor-agnostic approach ensuring best-fit solutions",
      "Compliance with international standards (IEEE, TIA, NFPA, EN)",
      "3D modeling and simulation for complex installations",
      "Detailed BOQ with competitive pricing",
    ],
    relatedSectors: ["commercial-corporate", "government", "industrial"],
    previousWork: [
      { projectSlug: "cairo-airport-security", title: "Cairo Airport System Design", thumbnail: IMAGES.heroCommandCenter, industry: "Transportation" },
      { projectSlug: "national-bank-hq", title: "National Bank Network Design", thumbnail: IMAGES.heroNetworking, industry: "Commercial & Corporate" },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortDescription: "Professional project management services ensuring on-time, on-budget delivery with clear communication and risk mitigation throughout the project lifecycle.",
    fullDescription: "Arab Security Group's project management services provide end-to-end oversight of technology projects from initiation to closeout. Our certified project managers use proven methodologies to plan, execute, monitor, and control every aspect of your project, ensuring successful delivery.",
    icon: "ClipboardList",
    heroImage: IMAGES.heroCommandCenter,
    processSteps: [
      { stepNumber: 1, title: "Initiation", description: "Project charter, stakeholder identification, and scope definition.", icon: "FileText" },
      { stepNumber: 2, title: "Planning", description: "Detailed project plan with WBS, schedule, budget, and risk register.", icon: "Calendar" },
      { stepNumber: 3, title: "Execution", description: "Resource coordination, vendor management, and quality assurance.", icon: "Play" },
      { stepNumber: 4, title: "Monitoring", description: "Progress tracking, change management, and stakeholder reporting.", icon: "BarChart3" },
      { stepNumber: 5, title: "Closeout", description: "Final acceptance, lessons learned, and project documentation.", icon: "CheckCircle" },
    ],
    whyChooseUs: [
      "PMP-certified project managers",
      "Proven track record of on-time, on-budget delivery",
      "Agile and waterfall methodology expertise",
      "Transparent reporting and stakeholder communication",
      "Risk mitigation and change management processes",
    ],
    relatedSectors: ["government", "commercial-corporate", "industrial", "transportation"],
    previousWork: [
      { projectSlug: "cairo-airport-security", title: "Cairo Airport Project Management", thumbnail: IMAGES.heroCommandCenter, industry: "Transportation" },
      { projectSlug: "smart-city-infrastructure", title: "Smart City Project Delivery", thumbnail: IMAGES.heroCommandCenter, industry: "Government" },
    ],
  },
  {
    slug: "installation-commissioning",
    title: "Installation & Commissioning",
    shortDescription: "Professional installation and commissioning services delivered by certified technicians with zero-defect methodology and minimal disruption.",
    fullDescription: "Our installation teams deliver professional, standards-compliant installations across all technology domains. With certified technicians and a zero-defect methodology, we ensure every system is installed correctly the first time, minimizing disruption and maximizing performance.",
    icon: "Wrench",
    heroImage: IMAGES.heroNetworking,
    processSteps: [
      { stepNumber: 1, title: "Planning", description: "Detailed installation plan with timelines, resource allocation, and safety protocols.", icon: "Calendar" },
      { stepNumber: 2, title: "Preparation", description: "Site preparation, material staging, and pre-installation checks.", icon: "Package" },
      { stepNumber: 3, title: "Installation", description: "Professional installation by certified technicians following manufacturer guidelines.", icon: "Wrench" },
      { stepNumber: 4, title: "Commissioning", description: "System testing, calibration, and commissioning with documented results.", icon: "PlayCircle" },
      { stepNumber: 5, title: "Handover", description: "As-built documentation, training, and formal system handover.", icon: "FileCheck" },
    ],
    whyChooseUs: [
      "Factory-certified installation technicians",
      "Zero-defect methodology with quality checkpoints",
      "Minimal disruption to ongoing operations",
      "Comprehensive as-built documentation",
      "Post-installation training and support",
    ],
    relatedSectors: ["commercial-corporate", "government", "industrial", "hospitality"],
    previousWork: [
      { projectSlug: "national-bank-hq", title: "Bank HQ Installation", thumbnail: IMAGES.heroNetworking, industry: "Commercial & Corporate" },
      { projectSlug: "industrial-complex-safety", title: "Industrial Complex Install", thumbnail: IMAGES.heroFireAlarm, industry: "Industrial" },
    ],
  },
  {
    slug: "testing-integration",
    title: "Testing & Integration",
    shortDescription: "End-to-end system testing and integration services that unify diverse technologies into cohesive, interoperable solutions.",
    fullDescription: "Arab Security Group's testing and integration services bring together multiple technology systems into a unified, interoperable platform. We specialize in integrating security, networking, fire safety, and building management systems, with rigorous testing to ensure seamless operations and centralized control.",
    icon: "Puzzle",
    heroImage: IMAGES.heroCommandCenter,
    processSteps: [
      { stepNumber: 1, title: "Assessment", description: "Evaluate existing systems, identify integration points, and define interoperability requirements.", icon: "Search" },
      { stepNumber: 2, title: "Architecture", description: "Design the integration architecture with protocols, APIs, and middleware specifications.", icon: "Layers" },
      { stepNumber: 3, title: "Implementation", description: "Configure, connect, and test all system integrations in a controlled environment.", icon: "Wrench" },
      { stepNumber: 4, title: "Validation", description: "End-to-end testing, performance validation, and user acceptance testing.", icon: "CheckCircle" },
    ],
    whyChooseUs: [
      "Multi-vendor integration expertise across 50+ technology brands",
      "Custom middleware and API development capabilities",
      "BMS, PSIM, and SCADA integration experience",
      "Rigorous testing and validation protocols",
      "Post-integration support and optimization",
    ],
    relatedSectors: ["commercial-corporate", "government", "transportation"],
    previousWork: [
      { projectSlug: "cairo-airport-security", title: "Airport Integrated Security", thumbnail: IMAGES.heroCommandCenter, industry: "Transportation" },
    ],
  },
  {
    slug: "maintenance-after-sales",
    title: "Maintenance & After-Sales Support",
    shortDescription: "Proactive maintenance and after-sales support services that maximize system uptime, extend equipment life, and ensure peak performance.",
    fullDescription: "Arab Security Group's maintenance and after-sales support services ensure your technology investments continue to perform at their best. Our proactive approach combines scheduled preventive maintenance with rapid-response corrective support, backed by 24/7 monitoring and dedicated service teams.",
    icon: "Settings",
    heroImage: IMAGES.heroCommandCenter,
    processSteps: [
      { stepNumber: 1, title: "Assessment", description: "System health assessment and maintenance plan development.", icon: "ClipboardCheck" },
      { stepNumber: 2, title: "Preventive", description: "Scheduled preventive maintenance visits with documented checklists.", icon: "Calendar" },
      { stepNumber: 3, title: "Monitoring", description: "24/7 remote monitoring with automated alerts and diagnostics.", icon: "Monitor" },
      { stepNumber: 4, title: "Response", description: "Rapid corrective maintenance with guaranteed SLA response times.", icon: "Zap" },
    ],
    whyChooseUs: [
      "24/7 remote monitoring and support",
      "Guaranteed SLA response times (2-4 hours)",
      "Preventive maintenance programs that reduce downtime by 80%",
      "Spare parts inventory for critical components",
      "Quarterly performance reports and recommendations",
    ],
    relatedSectors: ["commercial-corporate", "government", "industrial", "transportation"],
    previousWork: [
      { projectSlug: "cairo-airport-security", title: "Airport Maintenance Contract", thumbnail: IMAGES.heroCommandCenter, industry: "Transportation" },
    ],
  },
  {
    slug: "technical-training",
    title: "Technical Training & Support",
    shortDescription: "Comprehensive technical training programs and ongoing support to empower your team with the knowledge to operate and maintain installed systems.",
    fullDescription: "Arab Security Group provides comprehensive technical training and ongoing support services to ensure your team can effectively operate, manage, and troubleshoot installed systems. From hands-on operator training to advanced administrator courses, we empower your staff with the skills they need.",
    icon: "GraduationCap",
    heroImage: IMAGES.heroAboutTeam,
    processSteps: [
      { stepNumber: 1, title: "Needs Assessment", description: "Evaluate team skill levels and define training objectives and curriculum.", icon: "ClipboardCheck" },
      { stepNumber: 2, title: "Training Delivery", description: "Hands-on training sessions with real equipment and simulated scenarios.", icon: "Users" },
      { stepNumber: 3, title: "Certification", description: "Assessment and certification of trained personnel.", icon: "Award" },
      { stepNumber: 4, title: "Ongoing Support", description: "Post-training support with documentation, helpdesk, and refresher sessions.", icon: "LifeBuoy" },
    ],
    whyChooseUs: [
      "Manufacturer-certified training instructors",
      "Hands-on lab environments with real equipment",
      "Customized training programs for each client",
      "Training documentation and reference materials",
      "Post-training helpdesk and refresher courses",
    ],
    relatedSectors: ["government", "commercial-corporate", "industrial", "healthcare"],
    previousWork: [
      { projectSlug: "government-ministry-complex", title: "Government Staff Training", thumbnail: IMAGES.heroAboutTeam, industry: "Government" },
      { projectSlug: "national-bank-hq", title: "Bank Operations Training", thumbnail: IMAGES.heroAboutTeam, industry: "Commercial & Corporate" },
    ],
  },
];

export function getServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}