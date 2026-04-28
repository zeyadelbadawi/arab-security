import type { SiteConfig, BranchLocation } from "./types";

export const siteConfig: SiteConfig = {
  companyName: "Arab Security Group",
  tagline: "More Secure Than Ever",
  description: "Integrated Security & Technology Solutions for the Enterprise. From design to deployment and beyond — Arab Security Group delivers end-to-end systems integration for organizations that demand reliability.",
  phone: "0223495290",
  email: "infoegypt@arab-security.com",
  address: "Cairo, Egypt",
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/arab-security-group/posts/?feedView=all", icon: "Linkedin" },
    { platform: "Youtube", url: "https://www.youtube.com/@ArabSecurityGroup", icon: "Youtube" },
    { platform: "Facebook", url: "https://www.facebook.com/ASG.GroupEG", icon: "Facebook" },
    { platform: "Instagram", url: "https://www.instagram.com/arabsecuritygroup", icon: "Instagram" },
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

];
