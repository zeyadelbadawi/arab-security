import type { NavItem } from "../types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    megaMenu: {
      columns: [
        {
          title: "Integrated Security",
          href: "/solutions/integrated-security",
          icon: "Camera",
          items: [
            { label: "CCTV & Video Surveillance", href: "/solutions/integrated-security/cctv-video-surveillance" },
            { label: "Video Analytics & AI", href: "/solutions/integrated-security/video-analytics-ai" },
            { label: "Command & Control Rooms", href: "/solutions/integrated-security/command-control-rooms" },
          ],
        },
        {
          title: "Access Control & ID",
          href: "/solutions/access-control",
          icon: "Fingerprint",
          items: [
            { label: "Access Control Systems", href: "/solutions/access-control/access-control-systems" },
            { label: "Biometric & Facial Recognition", href: "/solutions/access-control/biometric-facial-recognition" },
            { label: "Time Attendance", href: "/solutions/access-control/time-attendance" },
            { label: "Visitor Management", href: "/solutions/access-control/visitor-management" },
          ],
        },
        {
          title: "Physical Security",
          href: "/solutions/physical-security",
          icon: "Shield",
          items: [
            { label: "Gates, Barriers & Turnstiles", href: "/solutions/physical-security/gates-barriers-turnstiles" },
            { label: "Bollards & Road Blockers", href: "/solutions/physical-security/bollards-road-blockers" },
            { label: "Perimeter Protection", href: "/solutions/physical-security/perimeter-protection" },
          ],
        },
        {
          title: "Parking & Traffic",
          href: "/solutions/parking-traffic",
          icon: "Car",
          items: [
            { label: "Smart Parking Management", href: "/solutions/parking-traffic/smart-parking-management" },
            { label: "Parking Guidance", href: "/solutions/parking-traffic/parking-guidance" },
            { label: "Vehicle Access & LPR", href: "/solutions/parking-traffic/vehicle-access-lpr" },
            { label: "Automated Parking", href: "/solutions/parking-traffic/automated-parking" },
          ],
        },
        {
          title: "Fire & Life Safety",
          href: "/solutions/fire-life-safety",
          icon: "Flame",
          items: [
            { label: "Fire Alarm Systems", href: "/solutions/fire-life-safety/fire-alarm-systems" },
            { label: "Detection & Notification", href: "/solutions/fire-life-safety/fire-detection-notification" },
            { label: "Emergency & Evacuation", href: "/solutions/fire-life-safety/emergency-evacuation" },
          ],
        },
        {
          title: "Light Current & ELV",
          href: "/solutions/light-current-elv",
          icon: "Cable",
          items: [
            { label: "Structured Cabling", href: "/solutions/light-current-elv/structured-cabling" },
            { label: "Network & Data", href: "/solutions/light-current-elv/network-data-infrastructure" },
            { label: "PA & Voice Evacuation", href: "/solutions/light-current-elv/public-address-voice-evacuation" },
            { label: "Intercom Systems", href: "/solutions/light-current-elv/intercom-video-intercom" },
          ],
        },
        {
          title: "Smart Solutions",
          href: "/solutions/smart-intelligent",
          icon: "Cpu",
          items: [
            { label: "Building Management (BMS)", href: "/solutions/smart-intelligent/smart-bms" },
            { label: "Smart City", href: "/solutions/smart-intelligent/smart-city" },
            { label: "Home Automation", href: "/solutions/smart-intelligent/home-automation" },
          ],
        },
        {
          title: "X-Ray & Inspection",
          href: "/solutions/xray-inspection",
          icon: "ScanLine",
          items: [
            { label: "X-Ray Screening", href: "/solutions/xray-inspection/xray-screening" },
            { label: "Metal Detection", href: "/solutions/xray-inspection/metal-detection" },
            { label: "Explosive Detection", href: "/solutions/xray-inspection/explosive-threat-detection" },
          ],
        },
        {
          title: "Audio Visual",
          href: "/solutions/audio-visual",
          icon: "Tv",
          items: [
            { label: "Video Walls", href: "/solutions/audio-visual/video-walls" },
            { label: "Meeting & Conference", href: "/solutions/audio-visual/meeting-room-conference" },
            { label: "Unified Communication", href: "/solutions/audio-visual/unified-communication" },
          ],
        },
      ],
      featuredProject: {
        projectSlug: "cairo-airport-security",
        title: "Cairo International Airport — Integrated Security",
        thumbnail: "",
        industry: "Transportation",
      },
    },
  },
  {
    label: "Services",
    href: "/services",
    megaMenu: {
      columns: [
        {
          title: "Professional & Value-Added Services",
          href: "/services/system-design-consultancy",
          icon: "Briefcase",
          items: [
            { label: "System Design & Consultancy", href: "/services/system-design-consultancy" },
            { label: "Project Management", href: "/services/project-management" },
            { label: "Installation & Commissioning", href: "/services/installation-commissioning" },
            { label: "Testing & Integration", href: "/services/testing-integration" },
            { label: "Maintenance & After-Sales Support", href: "/services/maintenance-after-sales" },
            { label: "Technical Training & Support", href: "/services/technical-training" },
          ],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: {
      columns: [
        {
          title: "Industries We Serve",
          href: "/industries",
          icon: "Building2",
          items: [
            { label: "Government & Public Sector", href: "/industries/government" },
            { label: "Commercial & Corporate", href: "/industries/commercial-corporate" },
            { label: "Industrial & Manufacturing", href: "/industries/industrial" },
            { label: "Hospitality", href: "/industries/hospitality" },
            { label: "Healthcare", href: "/industries/healthcare" },
            { label: "Education", href: "/industries/education" },
            { label: "Transportation & Logistics", href: "/industries/transportation" },
            { label: "Retail & Commercial Centers", href: "/industries/retail" },
            { label: "Residential & Mixed-Use", href: "/industries/residential" },
            { label: "Energy, Oil & Gas", href: "/industries/energy-oil-gas" },
          ],
        },
      ],
    },
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Our Network",
    href: "/partners",
    megaMenu: {
      columns: [
        {
          title: "Our Network",
          href: "/partners",
          icon: "Globe",
          items: [
            { label: "Technology Partners", href: "/partners" },
            { label: "Our Clients", href: "/clients" },
            { label: "Partner With Us", href: "/partner-with-us" },
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    href: "/media",
    megaMenu: {
      columns: [
        {
          title: "Resources",
          href: "/media",
          icon: "BookOpen",
          items: [
            { label: "Media Center", href: "/media" },
            { label: "FAQs", href: "/faqs" },
            { label: "Training", href: "/training" },
            { label: "Careers", href: "/careers" },
          ],
        },
      ],
    },
  },
  { label: "Contact", href: "/contact" },
];