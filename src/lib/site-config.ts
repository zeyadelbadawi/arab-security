import type { SiteConfig, BranchLocation } from "./types";

export const siteConfig: SiteConfig = {
  companyName: "Arab Security Group",
  tagline: "More Secure Than Ever",
  description: "Integrated Security & Technology Solutions for the Enterprise. From design to deployment and beyond — Arab Security Group delivers end-to-end systems integration for organizations that demand reliability.",
  phone: "0223495290",
  email: "infoegypt@arab-security.com",
  address: "Cairo, Egypt",
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/asggroup", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/asggroup", icon: "Twitter" },
    { platform: "Facebook", url: "https://facebook.com/asggroup", icon: "Facebook" },
    { platform: "Instagram", url: "https://instagram.com/asggroup", icon: "Instagram" },
  ],
  stats: [
    { label: "Years of Experience", value: 15, suffix: "+" },
    { label: "Projects Delivered", value: 500, suffix: "+" },
    { label: "Enterprise Clients", value: 200, suffix: "+" },
    { label: "Technology Partners", value: 50, suffix: "+" },
  ],
};

export const branches: BranchLocation[] = [
  {
    id: "cairo-hq",
    name: "Cairo Headquarters",
    address: "4 Dr. Mohamed Awad, Al Mintaqah as Sādisah, Nasr City, Cairo, Egypt",
    phone: "0223495290",
    email: "cairo@asggroup.com",
    lat: 30.0712,
    lng: 31.0175,
    isHeadquarters: true,
  },

  {
    id: "riyadh",
    name: "Kuwait Branch",
    address: "Al-Mirqab – AlSoor St -Burj Jassim – Floor 12, Office A-D – Kuwait.",
    phone: "+965 22612501",
    email: "riyadh@asggroup.com",
    lat: 24.7136,
    lng: 46.6753,
    isHeadquarters: false,
  },
  {
    id: "alexandria",
    name: "UAE Branch",
    address: "Office 300-06 Rasis Business Center Al Barsha First - Dubai , Dubai, United Arab Emirates",
    phone: "+971 43250111",
    email: "alex@asggroup.com",
    lat: 31.2156,
    lng: 29.9553,
    isHeadquarters: false,
  },
];