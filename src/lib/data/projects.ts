import type { Project } from "../types";
import { IMAGES } from "../constants";

export const projects: Project[] = [
  {
    slug: "its-egypt-radar-smart-system",
    title: "ITS - Egypt Radar Smart System",
    client: "ITS Egypt",
    location: "Egypt",
    duration: "N/A",
    heroImage: "https://arabsecuritygulf.com/wp-content/uploads/2026/04/1-scaled.jpg",
  
    galleryImages: [
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/1-scaled.jpg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-2.jpeg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-5.jpeg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-8.jpeg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-9.jpeg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-10.jpeg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-11.jpeg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-12.jpeg",
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-28-at-4.25.36-PM-13.jpeg",
    ],
  
    videos: [
      "https://arabsecuritygulf.com/wp-content/uploads/2026/04/ASG-ITS-Solution-HQ.mp4",
    ],
  
    industry: "transportation-logistics",
  
    solutionsUsed: [
      "smart-intelligent",
      "integrated-security",
      "parking-traffic",
    ],
  
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
  
    challenge:
      "Managing road safety, speed monitoring, and real-time traffic control across highways and urban roads in Egypt required a highly accurate and scalable smart system capable of operating in diverse environmental and traffic conditions.",
  
    solution:
      "Arab Security Group deployed an advanced ITS radar-based smart system designed to monitor vehicle speed, detect violations, and provide real-time traffic insights. The solution integrated high-precision radar sensors with intelligent analytics and centralized monitoring platforms, enabling seamless detection, tracking, and reporting across multiple road networks.",
  
    result:
      "The implementation of the ITS radar smart system significantly enhanced traffic monitoring capabilities, improved road safety enforcement, and enabled authorities to make data-driven decisions. The system delivered accurate real-time insights, reduced violations, and supported efficient traffic management across key locations.",
  
    impactMetrics: [
      { label: "Monitoring Coverage", value: 100, suffix: "%" },
      { label: "System Operation", value: 24, suffix: "/7" },
      { label: "Detection Accuracy", value: 99, suffix: "%" },
      { label: "Violation Reduction", value: 40, suffix: "% ↑" },
    ],
  
    isFeatured: true,
  },

  {
    slug: "capital-walk-led-displays",
    title: "Capital Walk | Advertising LED Displays",
    client: "Capital Walk",
    location: "New Administrative Capital",
    duration: "N/A",
    heroImage: IMAGES.capitalWalkFeatured,
    galleryImages: [
      IMAGES.capitalWalkFeatured,
      IMAGES.capitalWalk01,
      IMAGES.capitalWalk02,
      IMAGES.capitalWalk03,
      IMAGES.capitalWalk04,
      IMAGES.capitalWalk05,
      IMAGES.capitalWalk06,
      IMAGES.capitalWalk07,
    ],
    industry: "retail-commercial-centers",
    solutionsUsed: [
      "audio-visual",
    ],
    servicesProvided: [
      "installation-commissioning",
    ],
    challenge: "It was a challenge to install on walls, but utilizing front maintenance cabinets solved it and was approved by ECG consultant.",
    solution: "Supplying, installing, and commissioning Dahua LED outdoor displays.",
    result: "The LED display system was successfully installed and approved.",
    impactMetrics: [
      { label: "Display Coverage", value: 100, suffix: "%" },
      { label: "Surveillance Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Installation Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: true,
  },

  {
    slug: "highway-al-watanyah",
    title: "Highway | Al Watanyah",
    client: "Al Watanyah",
    location: "Egypt",
    duration: "N/A",
    heroImage: IMAGES.alWatanyahFeatured,
    galleryImages: [
      IMAGES.alWatanyahFeatured,
      IMAGES.alWatanyah01,
      IMAGES.alWatanyah02,
    ],
    industry: "transportation-logistics",
    solutionsUsed: [
      "integrated-security",
    ],
    servicesProvided: [
      "installation-commissioning",
      "testing-integration",
    ],
    challenge: "Introducing Dahua systems to replace existing vendors across road networks.",
    solution: "Deployment of IP surveillance and DSS platform across highways and toll gates.",
    result: "The system supports monitoring across roads and toll infrastructure.",
    impactMetrics: [
      { label: "Network Coverage", value: 100, suffix: "%" },
      { label: "Surveillance Operation", value: 24, suffix: "/7" },
      { label: "System Reliability", value: 99, suffix: "%" },
      { label: "Response Efficiency", value: 40, suffix: "% ↑" },
    ],
    isFeatured: true,
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
