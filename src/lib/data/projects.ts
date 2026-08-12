import type { Project } from "../types";
import { IMAGES } from "../constants";

export const projects: Project[] = [
{
  slug: "moi-amman",
  title: "MOI (Amman)",
  client: "Ministry of Interior",
  location: "Egypt",
  duration: "N/A",
  heroImage:
    "https://imoukuwait.com/wp-content/uploads/2026/04/1-scaled.jpg",
  galleryImages: [
    "https://imoukuwait.com/wp-content/uploads/2026/04/1-scaled.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-2.jpeg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-5.jpeg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-8.jpeg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-9.jpeg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-10.jpeg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-11.jpeg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-12.jpeg",
    "https://imoukuwait.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-13.jpeg",
  ],
  industry: "Government & Public Sector",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Securing Ministry of Interior facilities across multiple locations required a large-scale surveillance system capable of delivering reliable, continuous monitoring while maintaining consistent performance across diverse sites.",
  solution:
    "Arab Security Group deployed and installed more than 500 high-performance surveillance cameras across multiple Ministry of Interior sites, providing comprehensive coverage, centralized monitoring, and a scalable security infrastructure.",
  result:
    "The project significantly enhanced situational awareness and security operations, delivering reliable surveillance coverage, improved incident response, and a robust monitoring system that supports the Ministry's nationwide security objectives.",
  impactMetrics: [
    { label: "Cameras Deployed", value: 500, suffix: "+" },
    { label: "Monitoring Operation", value: 24, suffix: "/7" },
    { label: "Site Coverage", value: 100, suffix: "%" },
    { label: "Security Infrastructure", value: 100, suffix: "%" },
  ],
  isFeatured: true,
},

  {
  slug: "emaar-safe-city-traffic-management",
  title: "Emaar | Safe City Traffic Management Solution",
  client: "Emaar",
  location: "N/A",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "smart-intelligent",
    "parking-traffic",
    "integrated-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Emaar required an intelligent traffic management solution to monitor vehicle speeds, accurately detect violations, and seamlessly integrate with its existing systems to enhance road safety across the community.",
  solution:
    "Arab Security Group implemented a Safe City Solution featuring an advanced speeding monitoring and violation detection system, fully integrated with Emaar's existing infrastructure to enable automated monitoring, accurate enforcement, and centralized management.",
  result:
    "The solution improved road safety, streamlined traffic enforcement, and enabled faster violation processing through a fully integrated and automated system, enhancing operational efficiency and supporting a safer driving environment.",
  impactMetrics: [
    { label: "Traffic Monitoring", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "System Integration", value: 100, suffix: "%" },
    { label: "Enforcement Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "signal-intelligent-traffic-signal-management",
  title: "Signal | Intelligent Traffic Signal Management System",
  client: "Signal",
  location: "N/A",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "transportation-logistics",
  solutionsUsed: [
    "parking-traffic",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Managing traffic flow at busy intersections required a reliable and intelligent traffic signal system to reduce congestion, improve road safety, and ensure efficient vehicle movement.",
  solution:
    "Arab Security Group delivered an Intelligent Transportation System (ITS) featuring advanced traffic signal control, real-time traffic management, and smart intersection solutions to optimize traffic flow and enhance operational efficiency.",
  result:
    "The solution improved traffic mobility, reduced congestion, enhanced road safety, and enabled more efficient traffic operations through intelligent signal control and centralized management.",
  impactMetrics: [
    { label: "Traffic Coverage", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Signal Integration", value: 100, suffix: "%" },
    { label: "Traffic Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "smart-cities-city-wide-cctv-surveillance",
  title: "Smart Cities | City-Wide CCTV & Surveillance Solution",
  client: "Security Directorates",
  location: "Dakahlia, Alexandria & Giza, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Government & Public Sector",
  solutionsUsed: [
    "smart-intelligent",
    "integrated-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Enhancing public safety across multiple cities required a reliable surveillance network capable of providing continuous street monitoring and supporting Security Directorates with real-time situational awareness.",
  solution:
    "Arab Security Group deployed an advanced Smart City CCTV solution, installing surveillance systems across Dakahlia, Alexandria, and Giza, integrated with Security Directorates to enable centralized street monitoring and improved security operations.",
  result:
    "The project strengthened public safety, improved city-wide surveillance capabilities, and enabled faster incident detection and response through reliable, centralized monitoring across multiple governorates.",
  impactMetrics: [
    { label: "City Coverage", value: 3, suffix: " Governorates" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Centralized Monitoring", value: 100, suffix: "%" },
    { label: "Security Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "watanya-roads-integrated-toll-station",
  title: "Watanya Roads | Integrated Toll Station Solution",
  client: "Watanya Roads",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [

          IMAGES.alWatanyahFeatured,
      IMAGES.alWatanyah01,
      IMAGES.alWatanyah02,
  ],
  industry: "transportation-logistics",
  solutionsUsed: [
    "integrated-security",
    "parking-traffic",
    "audio-visual",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Watanya Roads required an integrated toll station solution to streamline vehicle processing, enhance security, and improve operational efficiency while ensuring accurate vehicle identification and continuous monitoring.",
  solution:
    "Arab Security Group delivered a complete toll station solution featuring CCTV surveillance, ANPR cameras, automatic barriers, and a public address system, creating a secure and efficient traffic management environment.",
  result:
    "The solution improved toll operations, enhanced security, accelerated vehicle processing, and enabled accurate license plate recognition, delivering a safer and more efficient tolling experience.",
  impactMetrics: [
    { label: "Traffic Coverage", value: 100, suffix: "%" },
    { label: "Operation", value: 24, suffix: "/7" },
    { label: "Vehicle Identification", value: 100, suffix: "%" },
    { label: "Processing Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "orascom-hotel-management-integrated-hotel-technology",
  title: "Orascom Hotel Management | Integrated Hotel Technology Solutions",
  client: "Orascom Hotel Management",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "hospitality",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
    "light-current-elv",
    "audio-visual",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Orascom Hotel Management required a reliable and scalable technology infrastructure to enhance security, communication, and operational efficiency across 19 hotel properties while maintaining a consistent guest experience.",
  solution:
    "Arab Security Group delivered comprehensive integrated solutions across 19 hotels, including security systems, surveillance, access control, networking, public address, and smart building technologies tailored to each property's operational needs.",
  result:
    "The project enhanced safety, streamlined hotel operations, improved communication, and delivered a secure, efficient, and seamless experience for both guests and hotel management across all locations.",
  impactMetrics: [
    { label: "Hotels Covered", value: 19, suffix: " Properties" },
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "orascom-hotel-management-integrated-hotel-technology",
  title: "Orascom Hotel Management | Integrated Hotel Technology Solutions",
  client: "Orascom Hotel Management",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "hospitality",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
    "light-current-elv",
    "audio-visual",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Orascom Hotel Management required a reliable and scalable technology infrastructure to enhance security, communication, and operational efficiency across 19 hotel properties while maintaining a consistent guest experience.",
  solution:
    "Arab Security Group delivered comprehensive integrated solutions across 19 hotels, including security systems, surveillance, access control, networking, public address, and smart building technologies tailored to each property's operational needs.",
  result:
    "The project enhanced safety, streamlined hotel operations, improved communication, and delivered a secure, efficient, and seamless experience for both guests and hotel management across all locations.",
  impactMetrics: [
    { label: "Hotels Covered", value: 19, suffix: " Properties" },
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "sunrise-hotels-cctv-surveillance",
  title: "Sunrise Hotels | Comprehensive CCTV Surveillance System",
  client: "Sunrise Hotels",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "hospitality",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Sunrise Hotels required a high-performance surveillance system to strengthen security, monitor key areas, and ensure the safety of guests, staff, and hotel assets without disrupting daily operations.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing strategic camera coverage, high-definition monitoring, and reliable security across the hotel premises.",
  result:
    "The solution enhanced overall security, improved incident monitoring and response, and created a safer environment for guests, employees, and hotel operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "markato-integrated-security-smart-building",
  title: "Markato | Integrated Security & Smart Building Solutions",
  client: "Markato",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "retail-commercial-centers",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
    "light-current-elv",
    "audio-visual",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Markato required a fully integrated technology infrastructure to enhance security, connectivity, guest experience, and life safety while supporting smooth day-to-day operations across the facility.",
  solution:
    "Arab Security Group implemented a complete solution including CCTV surveillance, high-speed Wi-Fi, fire alarm systems, and IPTV, delivering a secure, connected, and modern environment.",
  result:
    "The project improved security, ensured reliable connectivity, enhanced guest satisfaction, and provided a safe, efficient, and technology-driven experience throughout the property.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Network Availability", value: 99, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "steigenberger-hotels-cctv-surveillance",
  title: "Steigenberger Hotels | Advanced CCTV Surveillance System",
  client: "Steigenberger Hotels",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "hospitality",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Steigenberger Hotels required a reliable surveillance solution to enhance guest safety, protect hotel assets, and provide continuous monitoring across critical areas of the property.",
  solution:
    "Arab Security Group deployed a comprehensive CCTV surveillance system, delivering high-definition camera coverage, real-time monitoring, and a scalable security infrastructure tailored to the hotel's requirements.",
  result:
    "The solution strengthened hotel security, improved incident detection and response, and ensured a safer environment for guests, staff, and daily operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "sofitel-hotel-cctv-video-wall",
  title: "Sofitel Hotel | Integrated CCTV & Video Wall Solution",
  client: "Sofitel Hotel",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "hospitality",
  solutionsUsed: [
    "integrated-security",
    "audio-visual",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Sofitel Hotel required an integrated visual security solution to enhance surveillance, improve operational awareness, and enable real-time monitoring of critical areas across the property.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system integrated with a video wall, providing centralized monitoring, high-definition video, and enhanced visibility for security operations.",
  result:
    "The solution strengthened security, improved situational awareness, enabled faster incident response, and delivered efficient centralized monitoring for seamless hotel operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Monitoring Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "albatros-hotels-cctv-surveillance",
  title: "Albatros Hotels | Comprehensive CCTV Surveillance System",
  client: "Albatros Hotels",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "hospitality",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Albatros Hotels required a reliable surveillance solution to strengthen security, monitor key areas, and ensure the safety of guests, staff, and hotel assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing high-quality camera coverage and reliable monitoring across the hotel's premises.",
  result:
    "The solution enhanced overall security, improved incident detection and response, and created a safer environment for guests, employees, and hotel operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "cgp-integrated-security-it-infrastructure",
  title: "CGP | Integrated Security & IT Infrastructure Solution",
  client: "CGP",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "commercial-corporate",
  solutionsUsed: [
    "integrated-security",
    "light-current-elv",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "CGP required a robust and integrated security and IT infrastructure capable of supporting reliable surveillance, centralized monitoring, and high-performance network connectivity across the facility.",
  solution:
    "Arab Security Group delivered a comprehensive solution combining CCTV surveillance, structured infrastructure, Milestone video management software, and Aruba network switches, creating a reliable and scalable security ecosystem.",
  result:
    "The solution enhanced security and situational awareness while providing centralized video management and dependable network performance, supporting efficient monitoring and day-to-day operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Network Reliability", value: 99, suffix: "%" },
    { label: "Monitoring Operation", value: 24, suffix: "/7" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "granda-life-integrated-residential-security",
  title: "Granda Life | Integrated Residential Security & Technology Solution",
  client: "Granda Life",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "integrated-security",
    "access-control",
    "light-current-elv",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Granda Life required an integrated security and technology infrastructure to ensure comprehensive protection, controlled access, seamless communication, and reliable connectivity throughout the residential compound.",
  solution:
    "Arab Security Group delivered a complete solution including CCTV surveillance, access control, intercom systems, DSS Pro, and IT infrastructure, integrating multiple technologies into one cohesive security ecosystem.",
  result:
    "The solution enhanced security and access management, improved communication across the compound, and provided reliable infrastructure for efficient monitoring and day-to-day community operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Infrastructure Reliability", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

  {
  slug: "markez-comprehensive-cctv-surveillance",
  title: "Markez | Comprehensive CCTV Surveillance System",
  client: "Markez",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "commercial-corporate",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Markez required a reliable surveillance solution to enhance security, monitor critical areas, and ensure effective oversight across the facility.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing reliable camera coverage and continuous monitoring throughout the facility.",
  result:
    "The solution strengthened overall security, improved situational awareness, and enabled faster detection and response to incidents.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

{
  slug: "jayed-compound-cctv-vehicle-access-control",
  title: "JAYED Compound | Integrated CCTV & Vehicle Access Control Solution",
  client: "JAYED Compound",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "integrated-security",
    "parking-traffic",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "JAYED Compound required a reliable security solution to control vehicle access and enhance surveillance across entry and exit points, ensuring a safer and more secure residential environment.",
  solution:
    "Arab Security Group implemented an integrated CCTV surveillance and barrier system, providing continuous monitoring and controlled vehicle access throughout the compound.",
  result:
    "The solution enhanced overall security, improved vehicle access management, and enabled better monitoring of the compound's entry and exit points.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

  {
  slug: "al-ahly-bank-compound-cctv-surveillance",
  title: "Al Ahly Bank Compound | Comprehensive CCTV Surveillance System",
  client: "Al Ahly Bank Compound",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Al Ahly Bank Compound required a reliable surveillance solution to enhance security, monitor key areas, and ensure the safety of residents, staff, and property assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing reliable camera coverage and continuous monitoring across the compound.",
  result:
    "The solution strengthened overall security, improved situational awareness, and enabled faster incident detection and response, creating a safer residential environment.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "green-square-integrated-cctv-it-infrastructure",
  title: "Green Square | Integrated CCTV & IT Infrastructure Solution",
  client: "Al Ahly Sabbour",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "integrated-security",
    "light-current-elv",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Green Square required a reliable security and technology infrastructure to enhance surveillance across the compound while ensuring a robust foundation for its connected systems.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system and IT infrastructure, providing extensive monitoring capabilities supported by reliable and scalable connectivity.",
  result:
    "The solution strengthened security, improved situational awareness, and established a dependable infrastructure capable of supporting efficient surveillance and future technology requirements across the development.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Infrastructure Reliability", value: 99, suffix: "%" },
    { label: "System Scalability", value: 100, suffix: "%" },
  ],
  isFeatured: false,
},


  {
  slug: "capital-walk-video-wall",
  title: "Capital Walk | Professional Video Wall Solution",
  client: "Capital Walk",
  location: "New Administrative Capital, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "retail-commercial-centers",
  solutionsUsed: [
    "audio-visual",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Capital Walk required an advanced visual display solution to enhance communication, monitoring, and information visibility across its facilities while delivering a high-quality viewing experience.",
  solution:
    "Arab Security Group implemented a professional Video Wall solution, providing high-resolution, seamless content display and centralized visual management for effective monitoring and communication.",
  result:
    "The solution enhanced visual communication, improved information visibility, and delivered an impactful display experience suitable for monitoring, presentations, and operational needs.",
  impactMetrics: [
    { label: "Display Coverage", value: 100, suffix: "%" },
    { label: "Display Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Visual Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
    slug: "aura-compound-cfc-barrier-gates",
    title: "Aura Compound – CFC | Barrier Gates",
    client: "Aura Compound",
    location: "CFC, Cairo, Egypt",
    duration: "N/A",
    heroImage: IMAGES.auraCompoundFeatured,
    galleryImages: [
      IMAGES.auraCompoundFeatured,
      IMAGES.auraCompound01,
      IMAGES.auraCompound02,
      IMAGES.auraCompound03,
      IMAGES.auraCompound04,
      IMAGES.auraCompound05,
      IMAGES.auraCompound06,
      IMAGES.auraCompound07,
      IMAGES.auraCompound08,
    ],
    industry: "residential-mixed-use",
        solutionsUsed: [
      "parking-traffic",
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
    challenge: "Navigating the security requirements and privacy concerns of the compound while securing all entrances, exits, and garage access points.",
    solution: "Supplying, installing, and commissioning barrier gates equipped with RFID readers. The implemented system used Magnetic Barrier Gates integrated with Centurion RFID readers.",
    result: "The project enhanced the compound’s security infrastructure and improved regulation of human flow at access points while maintaining residents’ privacy.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Installation Status", value: 100, suffix: "%" },
      { label: "System Operation", value: 24, suffix: "/7" },
      { label: "Security Efficiency", value: 99, suffix: "%" },
    ],
    isFeatured: false,
  },

{
  slug: "marassi-integrated-access-control",
  title: "Marassi | Integrated Access Control System",
  client: "Marassi",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "access-control",
    "integrated-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Marassi required a reliable access control solution to regulate entry, enhance security, and ensure controlled access across key areas of the development.",
  solution:
    "Arab Security Group implemented an integrated Access Control System, enabling secure and efficient management of authorized entry points throughout the development.",
  result:
    "The solution strengthened overall security, improved access management, and provided greater control and visibility over movement across the development.",
  impactMetrics: [
    { label: "Access Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

  {
  slug: "tmg-integrated-vehicle-access-security",
  title: "TMG | Integrated Vehicle Access & Security Solution",
  client: "Talaat Mostafa Group (TMG)",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "integrated-security",
    "parking-traffic",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Talaat Mostafa Group (TMG) required an integrated security solution to monitor its developments, control vehicle access, and improve the identification and management of vehicles entering and exiting its premises.",
  solution:
    "Arab Security Group implemented a comprehensive solution combining CCTV surveillance, automatic barriers, and License Plate Recognition (LPR) systems to provide secure and efficient vehicle access management.",
  result:
    "The solution enhanced overall security, streamlined vehicle entry and exit, improved access control, and provided greater visibility over vehicle movement across TMG's developments.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Vehicle Access Control", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Vehicle Management Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "waterway-integrated-cctv-network-infrastructure",
  title: "Waterway | Integrated CCTV & Network Infrastructure Solution",
  client: "Waterway Developments",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "integrated-security",
    "light-current-elv",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Waterway Developments required a reliable security and network infrastructure to enhance surveillance capabilities while ensuring stable connectivity across the development.",
  solution:
    "Arab Security Group implemented an integrated solution combining CCTV surveillance systems and network switches, providing comprehensive monitoring supported by reliable network infrastructure.",
  result:
    "The solution strengthened security, improved surveillance coverage, and provided dependable network connectivity to support efficient monitoring and ongoing operations across the development.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Network Reliability", value: 99, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Monitoring Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "katameya-dunes-integrated-cctv-network-infrastructure",
  title: "Katameya Dunes | Integrated CCTV & Network Infrastructure Solution",
  client: "Katameya Dunes",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "integrated-security",
    "light-current-elv",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Katameya Dunes required a reliable security and network infrastructure to enhance surveillance across the compound while ensuring stable connectivity for its security systems.",
  solution:
    "Arab Security Group implemented an integrated solution combining CCTV surveillance and network switches, providing comprehensive monitoring supported by reliable and scalable network infrastructure.",
  result:
    "The solution strengthened overall security, improved surveillance coverage, and provided dependable network connectivity to support efficient monitoring and day-to-day operations across the compound.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Network Reliability", value: 99, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Monitoring Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

{
  slug: "cemex-cctv-control-room",
  title: "CEMEX | Integrated CCTV & Control Room Solution",
  client: "CEMEX",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "industrial-manufacturing",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "CEMEX required a robust security solution to enhance surveillance across its facilities while enabling centralized monitoring and efficient security management from a dedicated control room.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system and Control Room, providing centralized video monitoring, enhanced visibility, and efficient management of security operations.",
  result:
    "The solution strengthened facility security, improved situational awareness, and enabled faster incident detection and response through centralized, real-time surveillance.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Monitoring Operation", value: 24, suffix: "/7" },
    { label: "Centralized Monitoring", value: 100, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  
  

  // 5) Hilton Nile Towers
  {
    slug: "hilton-nile-towers",
    title: "Hilton Nile Towers",
    client: "Hilton",
    location: "Maadi, Cairo",
    duration: "N/A",
    heroImage: IMAGES.hiltonNileFeatured,
    galleryImages: [
      IMAGES.hiltonNileFeatured,
      IMAGES.hiltonNile01,
      IMAGES.hiltonNile02,
      IMAGES.hiltonNile03,
      IMAGES.hiltonNile04,
      IMAGES.hiltonNile05,
      IMAGES.hiltonNile06,
      IMAGES.hiltonNile07,
      IMAGES.hiltonNile08,
    ],
    industry: "hospitality",
    solutionsUsed: [
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Securing entrances for both pedestrians and vehicles.",
    solution: "Installation of hydraulic bollards and sliding gate motors.",
    result: "Enhanced entrance security and controlled access.",
    impactMetrics: [
      { label: "Access Control", value: 100, suffix: "%" },
      { label: "Surveillance Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },


  {
    slug: "al-burouj-compound",
    title: "Al Burouj Compound",
    client: "Al Burouj Compound",
    location: "Ismailia Desert Road, Cairo",
    duration: "3 Months",
    heroImage: IMAGES.alBuroujFeatured,
    galleryImages: [
      IMAGES.alBuroujFeatured,
      IMAGES.alBurouj01,
      IMAGES.alBurouj02,
      IMAGES.alBurouj03,
      IMAGES.alBurouj04,
      IMAGES.alBurouj05,
      IMAGES.alBurouj06,
      IMAGES.alBurouj07,
      IMAGES.alBurouj08,
    ],
    industry: "residential-mixed-use",
    solutionsUsed: [
      "integrated-security",
      "physical-security",
      "light-current-elv",
    ],
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
    challenge: "Based on the needs and requirements of the security on fences and entrances and considering the privacy of the property and owners, the surveillance system needed to provide reliable monitoring across the compound streets and public areas.",
    solution: "Arab Security Group supplied, installed, and commissioned a complete surveillance system for Al Burouj Compound. The system included Dahua CCTV cameras connected to Dahua industrial switches and configured on Milestone VMS utilizing Dell servers and clients, with all cameras monitored through a 24/7 control room setup.",
    result: "The project delivered continuous monitoring of the compound streets and public areas through a centralized surveillance and control room environment, supporting daily security operations across the site.",
    impactMetrics: [
      { label: "Monitoring Coverage", value: 100, suffix: "%" },
      { label: "Surveillance Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99.9, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },


  {
    slug: "al-hamra-tower-office",
    title: "Al Hamra Tower Office",
    client: "Al Hamra Tower",
    location: "Kuwait City",
    duration: "N/A",
    heroImage: IMAGES.alHamra1,
    galleryImages: [
      IMAGES.alHamra1,
      IMAGES.alHamra2,
    ],
    industry: "commercial-corporate",
    solutionsUsed: [
      "physical-security",
      "light-current-elv",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "The project required installing an automatic sliding frameless glass door system suitable for a high-end office environment.",
    solution: "Supplying, installing and commissioning of Deutschtec Primedrive 240 automatic sliding frameless glass door.",
    result: "The system was successfully installed and commissioned, providing a smooth and reliable entrance solution for the office.",
    impactMetrics: [
      { label: "System Coverage", value: 100, suffix: "%" },
      { label: "Installation Status", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Efficiency", value: 99, suffix: "%" },
    ],
    isFeatured: false,
  },
  {
    slug: "al-nasr-club",
    title: "Al Nasr Club",
    client: "Al Nasr Club",
    location: "Ardiya",
    duration: "N/A",
    heroImage: IMAGES.alNasrFeatured,
    galleryImages: [
      IMAGES.alNasrFeatured,
      IMAGES.alNasr01,
      IMAGES.alNasr02,
      IMAGES.alNasr03,
      IMAGES.alNasr04,
    ],
    industry: "Healthcare",
        solutionsUsed: [
      "audio-visual",
      "integrated-security",
    ],
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
    challenge: "The project required deploying reliable communication and surveillance systems suitable for a club environment.",
    solution: "Supplying, installing and commissioning of ITC public address system and Dahua CCTV system.",
    result: "The project delivered a complete public address and CCTV setup to support daily operations and site monitoring.",
    impactMetrics: [
      { label: "System Coverage", value: 100, suffix: "%" },
      { label: "Installation Status", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Efficiency", value: 99, suffix: "%" },
    ],
    isFeatured: false,
  },
  {
    slug: "al-najat-charity",
    title: "Al Najat Charity",
    client: "Al Najat Charity",
    location: "Sabah Al Salem",
    duration: "N/A",
    heroImage: IMAGES.alNajatFeatured,
    galleryImages: [
      IMAGES.alNajatFeatured,
      IMAGES.alNajat01,
      IMAGES.alNajat02,
      IMAGES.alNajat03,
      IMAGES.alNajat04,
      IMAGES.alNajat05,
      IMAGES.alNajat06,
      IMAGES.alNajat07,
    ],
    industry: "commercial-corporate",
        solutionsUsed: [
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
    challenge: "The project required a controlled and reliable entry solution for the facility.",
    solution: "Supplying, installing and commissioning of TANSA Turnstile Gate (Flap LTOP 111 & SG-WMC).",
    result: "The project delivered a turnstile gate solution to support controlled access and entry management.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Installation Status", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Efficiency", value: 99, suffix: "%" },
    ],
    isFeatured: false,
  },

  // 1) Cairo Int. Airport
  {
    slug: "cairo-int-airport-hbt",
    title: "Cairo Int. Airport",
    client: "Cairo International Airport",
    location: "Cairo, Egypt",
    duration: "N/A",
    heroImage: IMAGES.cairoAirportHbtFeatured,
    galleryImages: [
      IMAGES.cairoAirportHbtFeatured,
      IMAGES.cairoAirportHbt01,
      IMAGES.cairoAirportHbt02,
      IMAGES.cairoAirportHbt03,
    ],
    industry: "transportation-logistics",
    solutionsUsed: [
      "integrated-security",
      "smart-intelligent",
    ],
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
    challenge: "Deploying human body temperature monitoring across terminals, gates, lounges, and sensitive airport areas.",
    solution: "Implementation of HBT system using hybrid thermal cameras with blackbody, integrated with Dahua DSS platform and monitoring infrastructure.",
    result: "The system enabled temperature monitoring across multiple airport zones.",
    impactMetrics: [
      { label: "Monitoring Coverage", value: 100, suffix: "%" },
      { label: "Surveillance Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },

  // 2) Capital Walk
  
  // 3) Champion Gym
  {
    slug: "champion-gym",
    title: "Champion Gym",
    client: "Champion Gym",
    location: "Jabriya",
    duration: "N/A",
    heroImage: IMAGES.championGymFeatured,
    galleryImages: [
      IMAGES.championGymFeatured,
      IMAGES.championGym01,
      IMAGES.championGym02,
      IMAGES.championGym03,
      IMAGES.championGym04,
      IMAGES.championGym05,
      IMAGES.championGym06,
      IMAGES.championGym07,
      IMAGES.championGym08,
      IMAGES.championGym09,
      IMAGES.championGym10,
      IMAGES.championGym11,
      IMAGES.championGym12,
    ],
    industry: "Healthcare",
    solutionsUsed: [
      "access-control",
      "parking-traffic",
      "integrated-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Providing controlled access and vehicle entry management for the facility.",
    solution: "Installation of automatic sliding doors, gate barriers, and ANPR camera system.",
    result: "The system enabled controlled entry and vehicle access management.",
    impactMetrics: [
      { label: "Access Control", value: 100, suffix: "%" },
      { label: "Surveillance Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },

  // 4) Highway | Al Watanyah
  
  // 6) Huawei Egypt Offices
  {
    slug: "huawei-egypt-offices",
    title: "Huawei Egypt Offices",
    client: "Huawei",
    location: "New Cairo & Smart Village",
    duration: "N/A",
    heroImage: IMAGES.huaweiEgyptFeatured,
    galleryImages: [
      IMAGES.huaweiEgyptFeatured,
      IMAGES.huaweiEgypt01,
      IMAGES.huaweiEgypt02,
    ],
    industry: "commercial-corporate",
    solutionsUsed: [
      "smart-intelligent",
      "integrated-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Deploying temperature monitoring system across office environments.",
    solution: "Installation of hybrid thermal cameras with DSS platform integration.",
    result: "Enabled monitoring across office facilities.",
    impactMetrics: [
      { label: "Monitoring Coverage", value: 100, suffix: "%" },
      { label: "Surveillance Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },

  {
    slug: "international-university-in-kuwait",
    title: "International University in Kuwait",
    client: "International University in Kuwait",
    location: "Ardiya",
    duration: "N/A",
    heroImage: IMAGES.iukFeatured,
    galleryImages: [
      IMAGES.iukFeatured,
      IMAGES.iuk01,
      IMAGES.iuk02,
      IMAGES.iuk03,
      IMAGES.iuk04,
      IMAGES.iuk05,
    ],
    industry: "education",
    solutionsUsed: [
      "audio-visual",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Providing an interactive display solution suitable for an educational environment.",
    solution: "Supplying, installing and commissioning Dahua 86” interactive display with mobile stand.",
    result: "The project delivered an interactive display setup for use at the university.",
    impactMetrics: [
      { label: "Display Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Installation Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },

  {
    slug: "kuwait-airport-vip-entrance",
    title: "Kuwait Airport VIP Entrance",
    client: "Kuwait Airport",
    location: "Kuwait Airport, Kuwait City",
    duration: "N/A",
    heroImage: IMAGES.kuwaitVipFeatured,
    galleryImages: [
      IMAGES.kuwaitVipFeatured,
      IMAGES.kuwaitVip01,
      IMAGES.kuwaitVip02,
      IMAGES.kuwaitVip03,
      IMAGES.kuwaitVip04,
      IMAGES.kuwaitVip05,
      IMAGES.kuwaitVip06,
      IMAGES.kuwaitVip07,
      IMAGES.kuwaitVip08,
      IMAGES.kuwaitVip09,
      IMAGES.kuwaitVip10,
      IMAGES.kuwaitVip11,
      IMAGES.kuwaitVip12,
      IMAGES.kuwaitVip13,
      IMAGES.kuwaitVip14,
      IMAGES.kuwaitVip15,
      IMAGES.kuwaitVip16,
      IMAGES.kuwaitVip17,
      IMAGES.kuwaitVip18,
      IMAGES.kuwaitVip19,
      IMAGES.kuwaitVip20,
      IMAGES.kuwaitVip21,
    ],
    industry: "transportation-logistics",
    solutionsUsed: [
      "access-control",
      "physical-security",
      "parking-traffic",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Securing VIP and passenger airport entrances with reliable vehicle access control and perimeter protection.",
    solution: "Supplying, installing and commissioning FAAC B614 gate barriers at the airport VIP entrance and FAAC J275 hydraulic bollards at the airport passenger entrance.",
    result: "The project delivered controlled and reinforced access at the airport entrance areas.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },

  {
    slug: "kuwait-flour-mills-bakeries",
    title: "Kuwait Flour Mills & Bakeries",
    client: "Kuwait Flour Mills & Bakeries",
    location: "Saad Al Abdullah, Al Jahra",
    duration: "N/A",
    heroImage: IMAGES.kfmFeatured,
    galleryImages: [
      IMAGES.kfmFeatured,
      IMAGES.kfm01,
      IMAGES.kfm02,
      IMAGES.kfm03,
      IMAGES.kfm04,
      IMAGES.kfm05,
      IMAGES.kfm06,
      IMAGES.kfm07,
      IMAGES.kfm08,
      IMAGES.kfm09,
    ],
    industry: "industrial-manufacturing",
    solutionsUsed: [
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Securing the main entrance with dependable gate automation suitable for an industrial facility.",
    solution: "Supplying, installing and commissioning of 2 FAAC Sliding Gate 741 at the main entrance of Kuwait Flour Mills & Bakeries.",
    result: "The project provided controlled automated entry at the facility’s main entrance.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Installation Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },

  {
    slug: "kuwait-university",
    title: "Kuwait University",
    client: "Kuwait University",
    location: "Kuwait City",
    duration: "N/A",
    heroImage: IMAGES.kuwaitUniversityFeatured,
    galleryImages: [
      IMAGES.kuwaitUniversityFeatured,
      IMAGES.kuwaitUniversity01,
      IMAGES.kuwaitUniversity02,
      IMAGES.kuwaitUniversity03,
      IMAGES.kuwaitUniversity04,
      IMAGES.kuwaitUniversity05,
      IMAGES.kuwaitUniversity06,
    ],
    industry: "education",
    solutionsUsed: [
      "parking-traffic",
      "integrated-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Deploying vehicle identification and entry monitoring for a university environment.",
    solution: "Supplying, installing and commissioning of Dahua ANPR Cameras.",
    result: "The project delivered ANPR-based monitoring for the university site.",
    impactMetrics: [
      { label: "Monitoring Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },


  {
    slug: "loop-gym",
    title: "Loop Gym",
    client: "Loop Gym",
    location: "Al Jahra",
    duration: "N/A",
    heroImage: IMAGES.loopGymFeatured,
    galleryImages: [
      IMAGES.loopGymFeatured,
      IMAGES.loopGym01,
    ],
    industry: "hospitality",
    solutionsUsed: [
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Providing controlled member entry for the gym facility.",
    solution: "Supplying, installing and commissioning of TANSA Tripod Turnstile double gate LTT-313ED.",
    result: "The project delivered a controlled entry solution for the gym.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },


  {
    slug: "mazda-peugeot-showroom",
    title: "Mazda & Peugeot Showroom",
    client: "Mazda & Peugeot Showroom",
    location: "Al Rai",
    duration: "N/A",
    heroImage: IMAGES.mazdaPeugeotFeatured,
    galleryImages: [
      IMAGES.mazdaPeugeotFeatured,
      IMAGES.mazdaPeugeot01,
      IMAGES.mazdaPeugeot02,
      IMAGES.mazdaPeugeot03,
      IMAGES.mazdaPeugeot04,
      IMAGES.mazdaPeugeot05,
      IMAGES.mazdaPeugeot06,
    ],
    industry: "commercial-corporate",
    solutionsUsed: [
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Providing a suitable entrance solution for a showroom environment.",
    solution: "Supplying of Deutschtec Primedrive 240 Automatic sliding frameless glass door.",
    result: "The project delivered an automated frameless entrance solution for the showroom.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Installation Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },


  {
    slug: "mpled-video-wall",
    title: "MPLED",
    client: "Ministry of Education",
    location: "Ministry of Education",
    duration: "N/A",
    heroImage: IMAGES.mpledFeatured,
    galleryImages: [
      IMAGES.mpledFeatured,
      IMAGES.mpled01,
      IMAGES.mpled02,
    ],
    industry: "government-public-sector",
    solutionsUsed: [
      "audio-visual",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Providing a video wall solution for a ministry environment.",
    solution: "Supplying, installing and commissioning of MPLED Video Wall.",
    result: "The project delivered a video wall installation for the site.",
    impactMetrics: [
      { label: "Display Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Installation Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },


  {
    slug: "national-bank-of-egypt-hbt",
    title: "National Bank of Egypt",
    client: "National Bank of Egypt",
    location: "National Bank of Egypt",
    duration: "N/A",
    heroImage: IMAGES.nbeHbtFeatured,
    galleryImages: [
      IMAGES.nbeHbtFeatured,
      IMAGES.nbeHbt01,
      IMAGES.nbeHbt02,
    ],
    industry: "commercial-corporate",
    solutionsUsed: [
      "smart-intelligent",
      "integrated-security",
    ],
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
    challenge: "Deploying human body temperature monitoring across several admin buildings.",
    solution: "HBT System using 7 Hybrid Thermal HBT Camera + Blackbody, Dahua Network Active Components, Dahua AI NVR High-end POE series, and Dahua DSS Security Platform.",
    result: "The project enabled temperature monitoring across the bank’s admin building environment.",
    impactMetrics: [
      { label: "Monitoring Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },

  {
    slug: "rasiyat-company-prime-tower",
    title: "Rasiyat Company Prime Tower",
    client: "Rasiyat Company Prime Tower",
    location: "Sharq",
    duration: "N/A",
    heroImage: IMAGES.rasiyatPrimeTowerFeatured,
    galleryImages: [
      IMAGES.rasiyatPrimeTowerFeatured,
      IMAGES.rasiyatPrimeTower01,
      IMAGES.rasiyatPrimeTower02,
      IMAGES.rasiyatPrimeTower03,
      IMAGES.rasiyatPrimeTower04,
      IMAGES.rasiyatPrimeTower05,
      IMAGES.rasiyatPrimeTower06,
      IMAGES.rasiyatPrimeTower07,
    ],
    industry: "commercial-corporate",
    solutionsUsed: [
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Providing an automatic entrance solution suitable for a tower environment.",
    solution: "Supplying, installing and commissioning of Deutschtec Primedrive 239 automatic sliding frameless glass door.",
    result: "The project delivered an automated frameless glass entrance solution for the site.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Installation Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },
  
  {
    slug: "the-new-car-market-access-gate-automation",
    title: "The New Car Market | Access Gate Automation",
    client: "The New Car Market",
    location: "Ain Sokhna Road, Cairo",
    duration: "N/A",
    heroImage: IMAGES.newCarMarketFeatured,
    galleryImages: [
      IMAGES.newCarMarketFeatured,
      IMAGES.newCarMarket01,
      IMAGES.newCarMarket02,
      IMAGES.newCarMarket03,
      IMAGES.newCarMarket04,
      IMAGES.newCarMarket05,
      IMAGES.newCarMarket06,
      IMAGES.newCarMarket07,
      IMAGES.newCarMarket08,
      IMAGES.newCarMarket09,
      IMAGES.newCarMarket10,
      IMAGES.newCarMarket11,
      IMAGES.newCarMarket12,
    ],
    industry: "retail-commercial-centers",
    solutionsUsed: [
      "parking-traffic",
      "access-control",
      "physical-security",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "Controlling and regulating the entry and exit of cars from the car market.",
    solution: "Supplying, installing, and commissioning of Magnetic Access Toll Barriers.",
    result: "The project delivered access gate automation for vehicle entry and exit management.",
    impactMetrics: [
      { label: "Access Coverage", value: 100, suffix: "%" },
      { label: "Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: false,
  },




];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.isFeatured);
}

export function getProjectsByIndustry(industry: string): Project[] {
  return projects.filter((p) => p.industry === industry);
}

export function getProjectsBySolution(solution: string): Project[] {
  return projects.filter((p) => p.solutionsUsed.includes(solution));
}
