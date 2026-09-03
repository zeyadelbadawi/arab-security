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
          "/assets/Emaar-Misr_1920x1080.jpg",
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
  location: "Egypt",
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
  location: "Egypt",
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
    isFeatured: true,
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

  
  {
  slug: "al-arabi-cctv-surveillance",
  title: "Al Arabi Companies | Comprehensive CCTV Surveillance System",
  client: "Al Arabi Companies",
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
    "Al Arabi Companies required a reliable surveillance solution to strengthen security, monitor key areas, and ensure effective oversight across their facilities.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing reliable camera coverage and continuous monitoring across the company's facilities.",
  result:
    "The solution enhanced overall security, improved situational awareness, and enabled faster incident detection and response, creating a safer and more secure working environment.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "lulu-hypermarket-cctv-surveillance",
  title: "LULU Hypermarket | Comprehensive CCTV Surveillance System",
  client: "LULU Hypermarket",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "retail-commercial-centers",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "LULU Hypermarket required a reliable surveillance solution to enhance security, monitor high-traffic areas, and protect customers, employees, and assets across the facility.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing extensive camera coverage and continuous monitoring across key areas of the hypermarket.",
  result:
    "The solution strengthened overall security, improved situational awareness, and enabled faster incident detection and response, creating a safer and more secure shopping environment.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
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
    isFeatured: true,
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
    isFeatured: true,
  },

{
  slug: "glc-cctv-milestone-vms",
  title: "GLC | Integrated CCTV & Milestone VMS Solution",
  client: "GLC",
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
    "GLC required a reliable surveillance solution capable of providing comprehensive security monitoring and efficient management of video feeds across its facilities.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system integrated with Milestone VMS, enabling centralized video management, monitoring, and efficient control of security operations.",
  result:
    "The solution enhanced security and situational awareness while providing centralized, efficient video management and faster access to critical surveillance footage.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Video Management", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Monitoring Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "ezz-steel-cctv-vehicle-access",
  title: "EZZ Steel | Integrated CCTV & Vehicle Access Control Solution",
  client: "EZZ Steel",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "industrial-manufacturing",
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
    "EZZ Steel required a reliable security solution to enhance surveillance across its facilities and control vehicle access at key entry and exit points.",
  solution:
    "Arab Security Group implemented an integrated CCTV surveillance and barrier system, providing continuous monitoring and controlled vehicle access across the facility.",
  result:
    "The solution strengthened overall security, improved vehicle access management, and enhanced visibility across critical areas, supporting safer and more efficient facility operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Vehicle Access Control", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "fatallah-supermarket-cctv-surveillance",
  title: "Fatallah Supermarket | Comprehensive CCTV Surveillance System",
  client: "Fatallah Supermarket",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "retail-commercial-centers",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Fatallah Supermarket required a reliable surveillance solution to enhance security, monitor customer and operational areas, and protect employees, customers, and assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing extensive camera coverage and continuous monitoring across key areas of the supermarket.",
  result:
    "The solution strengthened overall security, improved situational awareness, and enabled faster incident detection and response, creating a safer and more secure shopping environment.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "mansour-automotive-cctv-surveillance",
  title: "Mansour Automotive | Comprehensive CCTV Surveillance System",
  client: "Mansour Automotive",
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
    "Mansour Automotive required a reliable surveillance solution to enhance security, monitor key areas, and protect vehicles, employees, customers, and facility assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, providing extensive camera coverage and continuous monitoring across the automotive facility.",
  result:
    "The solution strengthened overall security, improved situational awareness, and enabled faster incident detection and response, creating a safer environment for customers, employees, and operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "pepsi-mobile-fleet-monitoring",
  title: "Pepsi | Mobile Fleet Monitoring Solution",
  client: "Pepsi",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "transportation-logistics",
  solutionsUsed: [
    "smart-intelligent",
    "parking-traffic",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Pepsi required an effective fleet monitoring solution to track vehicles, improve operational visibility, and ensure better management of its mobile fleet.",
  solution:
    "Arab Security Group implemented a Mobile Fleet Monitoring Solution across Pepsi's vehicles, enabling real-time tracking, fleet visibility, and monitoring of vehicle movements and operations.",
  result:
    "The solution improved fleet visibility, enhanced operational control, and enabled more efficient vehicle management, helping Pepsi optimize its mobile operations.",
  impactMetrics: [
    { label: "Fleet Coverage", value: 100, suffix: "%" },
    { label: "Real-Time Monitoring", value: 24, suffix: "/7" },
    { label: "Fleet Visibility", value: 100, suffix: "%" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "beyti-mobile-fleet-monitoring",
  title: "Beyti | Mobile Fleet Monitoring Solution",
  client: "Beyti",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "transportation-logistics",
  solutionsUsed: [
    "smart-intelligent",
    "parking-traffic",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Beyti required a reliable solution to monitor its vehicle fleet, track vehicle movements, and gain better visibility over daily transportation operations.",
  solution:
    "Arab Security Group deployed a Mobile Fleet Monitoring Solution across Beyti's fleet, providing real-time vehicle tracking, movement monitoring, and greater operational visibility.",
  result:
    "The solution enhanced fleet management, improved operational efficiency, and provided greater control and visibility over vehicle movements and daily fleet activities.",
  impactMetrics: [
    { label: "Fleet Coverage", value: 100, suffix: "%" },
    { label: "Real-Time Monitoring", value: 24, suffix: "/7" },
    { label: "Fleet Visibility", value: 100, suffix: "%" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

{
  slug: "aluminum-factory-cctv-surveillance",
  title: "Aluminum Factory | Comprehensive CCTV Surveillance System",
  client: "Aluminum Factory",
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
    "The aluminum factory required a reliable surveillance system to monitor production areas, entrances, exits, and critical facilities while maintaining continuous visibility across the site and improving overall security and operational control.",
  solution:
    "Arab Security Group designed and installed a comprehensive CCTV surveillance system across the factory, strategically positioning cameras to provide effective coverage of key areas and enable centralized monitoring of activities throughout the facility.",
  result:
    "The CCTV system enhanced the factory's security and visibility, enabling real-time monitoring, faster detection of incidents, and improved control over the facility. The solution also provided recorded footage to support investigations and strengthen overall operational security.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Monitoring Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "qena-paper-industries-cctv-surveillance",
  title: "Qena Paper Industries | Comprehensive CCTV Surveillance System",
  client: "Qena Paper Industries",
  location: "Qena, Egypt",
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
    "Qena Paper Industries required an effective security and surveillance system capable of monitoring its industrial premises, critical areas, and access points while maintaining continuous visibility across the site.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas of the facility to provide reliable coverage and centralized monitoring.",
  result:
    "The CCTV solution enhanced overall security and visibility across the facility, enabling real-time monitoring, incident detection, and access to recorded footage whenever needed for investigation and operational control.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Monitoring Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "350-healthcare-cctv-display-solution",
  title: "350 Healthcare | Integrated CCTV & Display Solution",
  client: "350 Healthcare",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "audio-visual",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "350 Healthcare required an integrated solution to enhance security and monitoring across its facilities while ensuring important information could be clearly displayed and easily accessed by staff and visitors.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system alongside professional display screens, providing reliable monitoring of key areas while supporting clear and effective visual communication throughout the facility.",
  result:
    "The integrated solution improved security visibility and monitoring while enhancing information display across the facility. CCTV enabled effective surveillance and recorded footage, while the screens provided a clear and professional platform for displaying important content.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Display Coverage", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

  {
  slug: "57357-hospital-cctv-surveillance",
  title: "57357 Hospital | Comprehensive CCTV Surveillance System",
  client: "57357 Hospital",
  location: "Cairo, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "57357 Hospital required a reliable surveillance solution to enhance security across its healthcare environment, monitor critical areas, and maintain continuous visibility while ensuring a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system across the hospital, strategically positioning cameras to provide effective coverage of key areas and enable continuous monitoring of the facility.",
  result:
    "The CCTV solution strengthened the hospital's security and monitoring capabilities, providing real-time visibility and recorded footage to support incident detection, investigation, and overall safety across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "al-salam-hospital-cctv-surveillance",
  title: "Al Salam Hospital | Comprehensive CCTV Surveillance System",
  client: "Al Salam Hospital",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Al Salam Hospital required a reliable surveillance system to enhance security across the facility, monitor critical areas, and maintain continuous visibility while supporting a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV system across the hospital, strategically installing cameras in key areas to provide effective coverage, continuous monitoring, and improved security control.",
  result:
    "The CCTV solution enhanced the hospital's overall security and visibility, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and day-to-day security operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "abu-qurqas-hospital-security-solution",
  title: "Abu Qurqas Hospital | Integrated CCTV & Access Control Solution",
  client: "Abu Qurqas Hospital",
  location: "Abu Qurqas, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Abu Qurqas Hospital required an integrated security solution to monitor the facility, protect critical areas, and control access to authorized personnel while maintaining a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance and access control system, combining continuous monitoring with controlled entry to secure key areas and improve overall security management.",
  result:
    "The integrated solution strengthened the hospital's security infrastructure by providing enhanced surveillance and controlled access. This enabled better monitoring of activities, restricted unauthorized entry, and improved overall safety and security across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},


  {
  slug: "air-force-hospital-parking-management",
  title: "Air Force Hospital | Smart Parking Management Solution",
  client: "Air Force Hospital",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "parking-traffic",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The Air Force Hospital required an efficient parking solution to better organize vehicle movement, manage available parking spaces, and provide a smoother experience for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a professional parking management solution designed to organize vehicle entry and exit, improve traffic flow, and support efficient utilization of the hospital's parking facilities.",
  result:
    "The parking solution improved vehicle flow and parking organization, creating a more efficient and controlled parking experience while helping the hospital manage its parking facilities more effectively.",
  impactMetrics: [
    { label: "Parking Coverage", value: 100, suffix: "%" },
    { label: "Vehicle Flow", value: 100, suffix: "%" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
    { label: "Parking Management", value: 100, suffix: "%" },
  ],
  isFeatured: false,
},

  {
  slug: "seif-pharmacies-cctv-surveillance",
  title: "Seif Pharmacies | Multi-Branch CCTV Surveillance System",
  client: "Seif Pharmacies",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "retail-commercial-centers",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Seif Pharmacies required a reliable surveillance solution to enhance security across its branches, monitor key areas, and maintain continuous visibility to protect employees, customers, and assets.",
  solution:
    "Arab Security Group implemented a CCTV surveillance system across the pharmacies, strategically installing cameras to provide effective coverage of critical areas and enable continuous monitoring of daily operations.",
  result:
    "The CCTV solution strengthened security and visibility across the pharmacies, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and overall operational security.",
  impactMetrics: [
    { label: "Branch Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Security Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

  {
  slug: "qena-ophthalmology-hospital-cctv-surveillance",
  title: "Qena Ophthalmology Hospital | Comprehensive CCTV Surveillance System",
  client: "Qena Ophthalmology Hospital",
  location: "Qena, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Qena Ophthalmology Hospital required a reliable surveillance system to enhance security, monitor critical areas, and maintain continuous visibility across the facility while supporting a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring of the hospital.",
  result:
    "The CCTV solution strengthened the hospital's security and monitoring capabilities, providing real-time visibility and recorded footage to support incident detection, investigation, and overall safety across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


{
  slug: "general-authority-health-insurance-cctv-surveillance",
  title: "General Authority for Health Insurance | Comprehensive CCTV Surveillance System",
  client: "General Authority for Health Insurance",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The General Authority for Health Insurance required a reliable surveillance solution to enhance security across its facilities, monitor critical areas, and maintain continuous visibility for staff, visitors, and assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring of the facilities.",
  result:
    "The CCTV solution enhanced overall security and visibility, enabling real-time monitoring and access to recorded footage. This supported faster incident detection, effective investigations, and improved security management across the facilities.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "maghagha-hospital-cctv-surveillance",
  title: "Maghagha Hospital | Comprehensive CCTV Surveillance System",
  client: "Maghagha Hospital",
  location: "Maghagha, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Maghagha Hospital required a reliable surveillance solution to strengthen security across the facility, monitor critical areas, and maintain continuous visibility to support the safety of patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas of the hospital to provide effective coverage and continuous monitoring.",
  result:
    "The CCTV solution enhanced the hospital's security and visibility, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and overall safety.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},


  {
  slug: "sokhna-emergency-hospital-cctv-access-control",
  title: "Sokhna Emergency Hospital | Integrated CCTV & Access Control Solution",
  client: "Sokhna Emergency Hospital",
  location: "Ain Sokhna, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Sokhna Emergency Hospital required an integrated security solution to monitor critical areas, strengthen facility security, and control access to restricted spaces while maintaining a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented an integrated CCTV surveillance and access control system, providing continuous monitoring across key areas while managing entry for authorized personnel and securing restricted zones.",
  result:
    "The solution enhanced overall security and access management, providing real-time surveillance, controlled entry, and recorded footage to support incident detection, investigation, and improved safety across the hospital.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},
  
  // 1) General Authority for Health Insurance
{
  slug: "general-authority-health-insurance-cctv-surveillance",
  title: "General Authority for Health Insurance | Comprehensive CCTV Surveillance System",
  client: "General Authority for Health Insurance",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The General Authority for Health Insurance required a reliable surveillance solution to enhance security across its facilities, monitor critical areas, and maintain continuous visibility for staff, visitors, and assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring of the facilities.",
  result:
    "The CCTV solution enhanced overall security and visibility, enabling real-time monitoring and access to recorded footage. This supported faster incident detection, effective investigations, and improved security management across the facilities.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 2) Maghagha Hospital
{
  slug: "maghagha-hospital-cctv-surveillance",
  title: "Maghagha Hospital | Comprehensive CCTV Surveillance System",
  client: "Maghagha Hospital",
  location: "Maghagha, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Maghagha Hospital required a reliable surveillance solution to strengthen security across the facility, monitor critical areas, and maintain continuous visibility to support the safety of patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas of the hospital to provide effective coverage and continuous monitoring.",
  result:
    "The CCTV solution enhanced the hospital's security and visibility, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and overall safety.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 3) Sokhna Emergency Hospital
{
  slug: "sokhna-emergency-hospital-cctv-access-control",
  title: "Sokhna Emergency Hospital | Integrated CCTV & Access Control Solution",
  client: "Sokhna Emergency Hospital",
  location: "Ain Sokhna, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Sokhna Emergency Hospital required an integrated security solution to monitor critical areas, strengthen facility security, and control access to restricted spaces while maintaining a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented an integrated CCTV surveillance and access control system, providing continuous monitoring across key areas while managing entry for authorized personnel and securing restricted zones.",
  result:
    "The solution enhanced overall security and access management, providing real-time surveillance, controlled entry, and recorded footage to support incident detection, investigation, and improved safety across the hospital.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

// 4) Nasser Hospital
{
  slug: "nasser-hospital-cctv-surveillance",
  title: "Nasser Hospital | Comprehensive CCTV Surveillance System",
  client: "Nasser Hospital",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Nasser Hospital required a reliable surveillance system to enhance security across the facility, monitor critical areas, and maintain continuous visibility to support the safety of patients, visitors, staff, and hospital assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring of the hospital.",
  result:
    "The CCTV solution strengthened the hospital's security and monitoring capabilities, providing real-time visibility and recorded footage to support incident detection, investigation, and overall safety across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 5) Qena Ophthalmology Hospital
{
  slug: "qena-ophthalmology-hospital-cctv-surveillance",
  title: "Qena Ophthalmology Hospital | Comprehensive CCTV Surveillance System",
  client: "Qena Ophthalmology Hospital",
  location: "Qena, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Qena Ophthalmology Hospital required a reliable surveillance system to enhance security, monitor critical areas, and maintain continuous visibility across the facility while supporting a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring of the hospital.",
  result:
    "The CCTV solution strengthened the hospital's security and monitoring capabilities, providing real-time visibility and recorded footage to support incident detection, investigation, and overall safety across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 6) Shibin El Qanater Hospital
{
  slug: "shibin-el-qanater-hospital-cctv-access-control",
  title: "Shibin El Qanater Hospital | Integrated CCTV & Access Control Solution",
  client: "Shibin El Qanater Hospital",
  location: "Shibin El Qanater, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Shibin El Qanater Hospital required an integrated security solution to monitor the facility, protect critical areas, and regulate access to restricted spaces while maintaining a safe environment for patients, visitors, and staff.",
  solution:
    "Arab Security Group implemented an integrated CCTV surveillance and access control system, providing continuous monitoring across key areas while managing entry and securing restricted zones within the hospital.",
  result:
    "The solution enhanced the hospital's overall security and access management, providing real-time surveillance, controlled entry, and recorded footage to support incident detection, investigation, and improved safety across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

// 7) Atfih Hospital
{
  slug: "atfih-hospital-cctv-surveillance",
  title: "Atfih Hospital | Comprehensive CCTV Surveillance System",
  client: "Atfih Hospital",
  location: "Atfih, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "Healthcare",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Atfih Hospital required a reliable surveillance system to strengthen security across the facility, monitor critical areas, and maintain continuous visibility to support the safety of patients, visitors, staff, and hospital assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas of the hospital to provide effective coverage and continuous monitoring.",
  result:
    "The CCTV solution enhanced the hospital's security and visibility, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and overall safety across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 8) Roshdy Pharmacies
{
  slug: "roshdy-pharmacies-cctv-surveillance",
  title: "Roshdy Pharmacies | Multi-Branch CCTV Surveillance System",
  client: "Roshdy Pharmacies",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "retail-commercial-centers",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Roshdy Pharmacies required a reliable surveillance solution to enhance security across its branches, monitor key areas, and maintain continuous visibility to protect employees, customers, inventory, and other valuable assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system across the pharmacies, strategically positioning cameras to provide effective coverage of critical areas and support continuous monitoring.",
  result:
    "The CCTV solution strengthened security and visibility across the pharmacies, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and improved operational security.",
  impactMetrics: [
    { label: "Branch Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Security Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 9) Nasr Petroleum
{
  slug: "nasr-petroleum-access-control-turnstiles",
  title: "Nasr Petroleum | Integrated Access Control & Turnstile Solution",
  client: "Nasr Petroleum",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "industrial-manufacturing",
  solutionsUsed: [
    "access-control",
    "physical-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Nasr Petroleum required a secure and efficient access management solution to regulate entry and exit, prevent unauthorized access, and ensure controlled movement of employees and visitors across the facility.",
  solution:
    "Arab Security Group implemented an access control system integrated with full-height turnstiles, providing secure physical barriers and controlled entry points while allowing authorized personnel to move efficiently through the facility.",
  result:
    "The solution strengthened access security and improved control over personnel movement, reducing the risk of unauthorized entry while providing a more organized and secure access experience for employees and visitors.",
  impactMetrics: [
    { label: "Access Coverage", value: 100, suffix: "%" },
    { label: "Controlled Entry", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

// 10) EMC
{
  slug: "emc-cctv-surveillance",
  title: "EMC | Comprehensive CCTV Surveillance System",
  client: "EMC",
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
    "EMC required a reliable surveillance solution to strengthen security across its facilities, monitor critical areas, and maintain continuous visibility to protect employees, visitors, and valuable assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring of the facility.",
  result:
    "The CCTV solution enhanced EMC's overall security and visibility, providing real-time monitoring and recorded footage to support incident detection, investigation, and improved day-to-day security operations.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 11) TotalEnergies
{
  slug: "totalenergies-mobile-fleet-monitoring",
  title: "TotalEnergies | Mobile Fleet Monitoring Solution",
  client: "TotalEnergies",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "transportation-logistics",
  solutionsUsed: [
    "smart-intelligent",
    "parking-traffic",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "TotalEnergies required an effective solution to improve visibility and control over its mobile fleet, enabling better monitoring of vehicles and supporting safer, more efficient fleet operations.",
  solution:
    "Arab Security Group implemented a mobile monitoring solution across TotalEnergies' fleet, providing real-time vehicle tracking and visibility into fleet movements to support centralized monitoring and operational management.",
  result:
    "The solution enhanced fleet visibility and operational control, allowing TotalEnergies to monitor vehicle movements more effectively, improve fleet management, and support safer and more efficient day-to-day operations.",
  impactMetrics: [
    { label: "Fleet Coverage", value: 100, suffix: "%" },
    { label: "Real-Time Monitoring", value: 24, suffix: "/7" },
    { label: "Fleet Visibility", value: 100, suffix: "%" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 12) Benban
{
  slug: "benban-thermal-surveillance",
  title: "Benban | Thermal Surveillance Solution",
  client: "Benban",
  location: "Benban, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "industrial-manufacturing",
  solutionsUsed: [
    "smart-intelligent",
    "integrated-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The Benban site required a reliable surveillance solution capable of monitoring large and critical areas, particularly in challenging environmental conditions where traditional cameras may have limited visibility.",
  solution:
    "Arab Security Group implemented thermal camera technology to provide continuous monitoring and detect heat signatures across critical areas, ensuring reliable surveillance even in low-light and challenging visibility conditions.",
  result:
    "The thermal surveillance solution enhanced site security and monitoring capabilities, providing reliable detection and improved visibility in difficult conditions while supporting faster identification of potential security incidents.",
  impactMetrics: [
    { label: "Monitoring Coverage", value: 100, suffix: "%" },
    { label: "Operation", value: 24, suffix: "/7" },
    { label: "Detection Reliability", value: 99, suffix: "%" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 13) Petrochemicals Company
{
  slug: "petrochemicals-company-cctv-surveillance",
  title: "Petrochemicals Company | High-Performance CCTV Surveillance System",
  client: "Petrochemicals Company",
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
    "The Petrochemicals Company required a reliable and high-performance surveillance solution to monitor critical areas, strengthen facility security, and maintain continuous visibility across its industrial environment.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically deploying cameras across key areas to provide high-quality monitoring, reliable coverage, and continuous visibility throughout the facility.",
  result:
    "The CCTV solution enhanced overall security and monitoring capabilities, providing clear surveillance and recorded footage to support incident detection, investigation, and improved operational security across the facility.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Monitoring Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 14) Petroleum Pipelines
{
  slug: "petroleum-pipelines-cctv-surveillance",
  title: "Petroleum Pipelines | Comprehensive CCTV Surveillance System",
  client: "Petroleum Pipelines",
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
    "Petroleum Pipelines required a reliable surveillance solution to strengthen security across its facilities, monitor critical areas, and maintain continuous visibility to protect infrastructure, equipment, and personnel.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and continuous monitoring of the facility.",
  result:
    "The CCTV solution enhanced security and visibility across the site, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and improved protection of critical infrastructure.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Infrastructure Protection", value: 100, suffix: "%" },
  ],
  isFeatured: false,
},

// 15) National Bank of Kuwait
{
  slug: "national-bank-kuwait-light-current-infrastructure",
  title: "National Bank of Kuwait | Integrated Light Current Infrastructure",
  client: "National Bank of Kuwait",
  location: "Kuwait",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "commercial-corporate",
  solutionsUsed: [
    "light-current-elv",
    "integrated-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "National Bank of Kuwait required an integrated light current infrastructure to support reliable communication, security, and technology systems while ensuring efficient operation across its facilities.",
  solution:
    "Arab Security Group delivered a comprehensive light current package, integrating the required low-current systems and infrastructure to provide a reliable, organized, and scalable technology environment for the bank.",
  result:
    "The solution enhanced the facility's technological infrastructure, supporting reliable system performance, improved operational efficiency, and a more secure and connected environment tailored to the bank's requirements.",
  impactMetrics: [
    { label: "Infrastructure Coverage", value: 100, suffix: "%" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Operational Availability", value: 24, suffix: "/7" },
    { label: "Infrastructure Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 16) Faisal Bank
{
  slug: "faisal-bank-atm-solution",
  title: "Faisal Bank | Integrated ATM Solution",
  client: "Faisal Bank",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "commercial-corporate",
  solutionsUsed: [
    "smart-intelligent",
    "integrated-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Faisal Bank required a reliable ATM solution to support secure, efficient, and convenient banking services while ensuring consistent availability and smooth customer access to essential transactions.",
  solution:
    "Arab Security Group implemented an integrated ATM solution designed to support secure and reliable ATM operations, providing the required infrastructure and systems for efficient service delivery.",
  result:
    "The solution enhanced ATM availability and operational efficiency, providing customers with convenient access to banking services while supporting secure and reliable day-to-day ATM operations.",
  impactMetrics: [
    { label: "ATM Availability", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Service Reliability", value: 99, suffix: "%" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 17) Agricultural Bank
{
  slug: "agricultural-bank-integrated-security-genetec",
  title: "Agricultural Bank | Integrated Security & Genetec Solution",
  client: "Agricultural Bank",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "commercial-corporate",
  solutionsUsed: [
    "integrated-security",
    "access-control",
    "parking-traffic",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The Agricultural Bank required an integrated security solution to monitor its facilities, control access, manage vehicle entry and exit, and centralize security operations across its premises.",
  solution:
    "Arab Security Group implemented a comprehensive solution combining CCTV surveillance, access control, vehicle barriers, and Genetec security software to provide centralized monitoring, controlled access, and efficient security management.",
  result:
    "The integrated solution strengthened the bank's overall security infrastructure, improved visibility and access management, enhanced vehicle control, and enabled centralized security monitoring and management through Genetec software.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Access Control", value: 100, suffix: "%" },
    { label: "Vehicle Access Control", value: 100, suffix: "%" },
    { label: "Centralized Monitoring", value: 100, suffix: "%" },
  ],
  isFeatured: false,
},

// 18) KFH Bank
{
  slug: "kfh-bank-lpr-vehicle-access",
  title: "KFH Bank | LPR & Vehicle Access Control Solution",
  client: "KFH Bank",
  location: "Kuwait",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "commercial-corporate",
  solutionsUsed: [
    "parking-traffic",
    "access-control",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "KFH Bank required a secure and efficient vehicle access solution to manage entry and exit, control parking access, and improve visibility over vehicles accessing the facility.",
  solution:
    "Arab Security Group implemented a License Plate Recognition (LPR) system integrated with vehicle barriers, enabling automatic license plate recognition and controlled vehicle entry and exit for a more organized access process.",
  result:
    "The solution enhanced vehicle access security and improved traffic management, providing automated identification, controlled entry and exit, and greater visibility over vehicles accessing the bank's premises.",
  impactMetrics: [
    { label: "Vehicle Access Coverage", value: 100, suffix: "%" },
    { label: "LPR Identification", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Access Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 19) River Transport Authority
{
  slug: "river-transport-authority-mobile-monitoring",
  title: "River Transport Authority | Mobile Fleet Monitoring Solution",
  client: "River Transport Authority",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "transportation-logistics",
  solutionsUsed: [
    "smart-intelligent",
    "parking-traffic",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The River Transport Authority required a solution to improve visibility and control over its mobile assets, enabling better monitoring of fleet movements and supporting more efficient day-to-day transportation operations.",
  solution:
    "Arab Security Group implemented a mobile monitoring solution to provide real-time visibility over mobile assets, allowing the authority to track movements and monitor fleet operations from a centralized platform.",
  result:
    "The solution improved fleet visibility and operational control, enabling more effective monitoring of mobile assets, better movement management, and increased efficiency across daily transportation operations.",
  impactMetrics: [
    { label: "Fleet Coverage", value: 100, suffix: "%" },
    { label: "Real-Time Monitoring", value: 24, suffix: "/7" },
    { label: "Asset Visibility", value: 100, suffix: "%" },
    { label: "Operational Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 20) Electricity Company
{
  slug: "electricity-company-cctv-infrastructure",
  title: "Electricity Company | CCTV & Security Infrastructure Solution",
  client: "Electricity Company",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "industrial-manufacturing",
  solutionsUsed: [
    "integrated-security",
    "light-current-elv",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The Electricity Company required a reliable security and infrastructure solution to strengthen surveillance across its facilities while providing the necessary infrastructure to support efficient and dependable system operation.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV system supported by the required infrastructure, providing effective surveillance coverage across key areas and a reliable foundation for the security system.",
  result:
    "The integrated solution enhanced facility security and monitoring while establishing dependable infrastructure that supports continuous CCTV operation, improved visibility, and more effective management of security across the site.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "CCTV Operation", value: 24, suffix: "/7" },
    { label: "Infrastructure Reliability", value: 99, suffix: "%" },
    { label: "Monitoring Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 21) Operations Room Department
{
  slug: "operations-room-cctv-video-wall",
  title: "Operations Room | Centralized CCTV & Video Wall Solution",
  client: "Operations Room Department",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "government-public-sector",
  solutionsUsed: [
    "integrated-security",
    "audio-visual",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The Operations Room Department required a centralized solution to monitor multiple areas in real time and display surveillance feeds clearly, enabling operators to maintain better situational awareness and respond quickly to incidents.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV system integrated with a professional video wall, enabling centralized monitoring and clear visualization of multiple camera feeds from the operations room.",
  result:
    "The solution enhanced situational awareness and operational control by providing centralized, real-time surveillance and clear visualization of multiple feeds, enabling operators to monitor activities more effectively and support faster incident response.",
  impactMetrics: [
    { label: "Monitoring Coverage", value: 100, suffix: "%" },
    { label: "Video Wall Coverage", value: 100, suffix: "%" },
    { label: "Monitoring Operation", value: 24, suffix: "/7" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 22) Hurghada Port
{
  slug: "hurghada-port-cctv-vehicle-access",
  title: "Hurghada Port | Integrated CCTV & Vehicle Access Solution",
  client: "Hurghada Port",
  location: "Hurghada, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "transportation-logistics",
  solutionsUsed: [
    "integrated-security",
    "parking-traffic",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Hurghada Port required an integrated security solution to strengthen surveillance across the port while improving control over vehicle entry and exit and maintaining a secure and organized flow of traffic.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system alongside vehicle barriers, providing continuous monitoring of critical areas and controlled vehicle access throughout the port.",
  result:
    "The solution enhanced overall port security and visibility while improving vehicle access management. CCTV provided continuous surveillance, while the barriers helped regulate entry and exit, supporting a safer and more controlled port environment.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Vehicle Access Control", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Traffic Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 23) CAPMAS
{
  slug: "capmas-cctv-surveillance",
  title: "CAPMAS | Comprehensive CCTV Surveillance System",
  client: "Central Agency for Public Mobilization and Statistics",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "government-public-sector",
  solutionsUsed: [
    "integrated-security",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "The Central Agency for Public Mobilization and Statistics required a reliable surveillance solution to enhance security across its facilities, monitor critical areas, and maintain continuous visibility over staff, visitors, and assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring of the facility.",
  result:
    "The CCTV solution strengthened overall security and visibility, providing real-time monitoring and recorded footage to support incident detection, investigation, and more effective security management across the agency's facilities.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Security Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 24) Sharm Inn
{
  slug: "sharm-inn-cctv-wifi-solution",
  title: "Sharm Inn | Integrated CCTV & Wi-Fi Solution",
  client: "Sharm Inn",
  location: "Sharm El Sheikh, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "hospitality",
  solutionsUsed: [
    "integrated-security",
    "light-current-elv",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Sharm Inn required an integrated solution to enhance property security while providing reliable wireless connectivity across the hotel, ensuring a seamless experience for guests and efficient connectivity for staff.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system alongside a reliable Wi-Fi network, providing continuous monitoring of key areas and dependable wireless connectivity throughout the property.",
  result:
    "The integrated solution enhanced hotel security and improved connectivity, enabling effective surveillance across the property while providing guests and staff with reliable Wi-Fi access for a more connected and efficient environment.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Wi-Fi Coverage", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Network Reliability", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

// 25) Green Sahel
{
  slug: "green-sahel-cctv-surveillance",
  title: "Green Compound North Coast | Comprehensive CCTV Surveillance System",
  client: "Green Compound North Coast",
  location: "North Coast, Egypt",
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
    "Green Compound North Coast required a reliable surveillance solution to enhance security across the compound, monitor key areas, and maintain continuous visibility to support the safety of residents, visitors, and property assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring throughout the compound.",
  result:
    "The CCTV solution strengthened security and visibility across the compound, enabling real-time monitoring and access to recorded footage to support incident detection, investigation, and improved overall security management.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "System Reliability", value: 99, suffix: "%" },
    { label: "Security Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 26) Barceló Tiran
{
  slug: "barcelo-tiran-cctv-security-screening",
  title: "Barceló Tiran | Integrated CCTV & Security Screening Solution",
  client: "Barceló Tiran",
  location: "Sharm El Sheikh, Egypt",
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
    "Barceló Tiran required an integrated security solution to enhance surveillance across the property while strengthening screening procedures at entry points and improving the detection of prohibited or potentially dangerous items.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV system alongside X-ray screening and metal detection gates, providing continuous surveillance and enhanced security screening at key access points throughout the property.",
  result:
    "The integrated solution strengthened overall security by combining continuous visual monitoring with advanced entry screening, enabling the property to better detect potential security threats and maintain a safer environment for guests, visitors, and staff.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Entry Screening", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

// 27) Al Araby Compound
{
  slug: "al-araby-compound-integrated-smart-systems",
  title: "Al Araby Compound | Integrated Security & Smart Community Solution",
  client: "Al Araby Compound",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
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
    "Al Araby Compound required an integrated technology solution to enhance security, connectivity, communication, and smart management across the community while providing residents with a more connected and efficient living environment.",
  solution:
    "Arab Security Group implemented a comprehensive solution combining CCTV, Wi-Fi, public address systems, and smart systems to provide integrated security, reliable connectivity, effective communication, and intelligent control across the compound.",
  result:
    "The integrated solution enhanced security, connectivity, communication, and smart functionality throughout the compound, creating a more connected, efficient, and technologically advanced environment for residents, visitors, and management.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Connectivity Coverage", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Smart Infrastructure", value: 100, suffix: "%" },
  ],
  isFeatured: false,
},

// 28) Fouka Bay
{
  slug: "fouka-bay-access-control",
  title: "Fouka Bay | Integrated Access Control Solution",
  client: "Fouka Bay",
  location: "North Coast, Egypt",
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
    "Fouka Bay required a reliable access control solution to regulate entry and exit, protect restricted areas, and ensure that only authorized individuals could access designated facilities across the development.",
  solution:
    "Arab Security Group implemented a comprehensive access control system, providing controlled entry points and secure access management across key areas of Fouka Bay.",
  result:
    "The solution strengthened overall security and access management, enabling controlled entry, reducing the risk of unauthorized access, and providing a more organized and secure environment for residents, visitors, and staff.",
  impactMetrics: [
    { label: "Access Coverage", value: 100, suffix: "%" },
    { label: "Controlled Entry", value: 100, suffix: "%" },
    { label: "System Operation", value: 24, suffix: "/7" },
    { label: "Security Efficiency", value: 99, suffix: "%" },
  ],
  isFeatured: false,
},

// 29) Madinaty
{
  slug: "madinaty-safe-city-solution",
  title: "Madinaty | Safe City Security & Monitoring Solution",
  client: "Madinaty",
  location: "Cairo, Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "residential-mixed-use",
  solutionsUsed: [
    "smart-intelligent",
    "integrated-security",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Madinaty required an integrated security approach to monitor public areas, enhance situational awareness, and support effective management of security across the large-scale community and its surrounding infrastructure.",
  solution:
    "Arab Security Group implemented a Safe City solution designed to provide centralized monitoring and enhanced visibility across key areas, supporting security teams with the technology required to monitor and manage the community effectively.",
  result:
    "The Safe City solution strengthened security and situational awareness across Madinaty, enabling more effective monitoring of public areas, faster identification of incidents, and improved coordination of security operations throughout the community.",
  impactMetrics: [
    { label: "Monitoring Coverage", value: 100, suffix: "%" },
    { label: "Centralized Monitoring", value: 100, suffix: "%" },
    { label: "Operation", value: 24, suffix: "/7" },
    { label: "Response Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 30) Agiba Petroleum
{
  slug: "agiba-petroleum-speed-detection",
  title: "Agiba Petroleum | Vehicle Speed Detection Solution",
  client: "Agiba Petroleum",
  location: "Egypt",
  duration: "N/A",
  heroImage: "",
  galleryImages: [],
  industry: "industrial-manufacturing",
  solutionsUsed: [
    "parking-traffic",
    "smart-intelligent",
  ],
  servicesProvided: [
    "installation-commissioning",
    "testing-integration",
  ],
  challenge:
    "Agiba Petroleum required a reliable solution to monitor vehicle speeds within its premises, helping improve road safety and encourage compliance with designated speed limits across the site.",
  solution:
    "Arab Security Group implemented speed detection cameras to monitor vehicle speeds and identify speeding incidents, providing effective surveillance and supporting better control of vehicle movement across the facility.",
  result:
    "The solution improved road safety and traffic control by enabling continuous speed monitoring, supporting the identification of speeding vehicles, and encouraging safer driving practices across the facility.",
  impactMetrics: [
    { label: "Speed Monitoring", value: 100, suffix: "%" },
    { label: "Traffic Operation", value: 24, suffix: "/7" },
    { label: "Detection Reliability", value: 99, suffix: "%" },
    { label: "Road Safety Efficiency", value: 40, suffix: "% ↑" },
  ],
  isFeatured: false,
},

// 31) Sea Beach Sharm
{
  slug: "sea-beach-sharm-cctv-surveillance",
  title: "Sea Beach Sharm | Comprehensive CCTV Surveillance System",
  client: "Sea Beach Sharm",
  location: "Sharm El Sheikh, Egypt",
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
    "Sea Beach Sharm required a reliable surveillance solution to enhance security across the property, monitor key areas, and maintain continuous visibility to support the safety of guests, visitors, staff, and assets.",
  solution:
    "Arab Security Group implemented a comprehensive CCTV surveillance system, strategically installing cameras across key areas to provide effective coverage and enable continuous monitoring throughout the property.",
  result:
    "The CCTV solution enhanced the property's overall security and visibility, providing real-time monitoring and recorded footage to support incident detection, investigation, and improved security management.",
  impactMetrics: [
    { label: "Security Coverage", value: 100, suffix: "%" },
    { label: "Surveillance Operation", value: 24, suffix: "/7" },
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
