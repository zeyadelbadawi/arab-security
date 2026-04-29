export enum SolutionCategory {
  INTEGRATED_SECURITY = "integrated-security",
  ACCESS_CONTROL = "access-control",
  PHYSICAL_SECURITY = "physical-security",
  PARKING_TRAFFIC = "parking-traffic",
  FIRE_LIFE_SAFETY = "fire-life-safety",
  LIGHT_CURRENT_ELV = "light-current-elv",
  SMART_INTELLIGENT = "smart-intelligent",
  XRAY_INSPECTION = "xray-inspection",
  AUDIO_VISUAL = "audio-visual",
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface ProjectReference {
  projectSlug: string;
  title: string;
  thumbnail: string;
  industry: string;
}

export interface SubSolution {
  slug: string;
  parentCategory: SolutionCategory;
  title: string;
  description: string;
  icon: string;
  heroImage: string;
  features: Feature[];
  technicalSpecs: TechnicalSpec[];
  relatedProjects: string[];
  relatedPartners: string[];
}

export interface Solution {
  slug: string;
  category: SolutionCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  features: Feature[];
  technicalDetails: string[];
  relatedIndustries: string[];
  relatedProjects: string[];
  relatedPartners: string[];
  subSolutions: SubSolution[];
  previousWork: ProjectReference[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  processSteps: ProcessStep[];
  whyChooseUs: string[];
  relatedSectors: string[];
  previousWork: ProjectReference[];
}

export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  challenges: string[];
  relevantSolutions: string[];
  relevantProjects: string[];
  stats: StatItem[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  duration: string;
  heroImage: string;
  galleryImages: string[];
  videos?: string[];
  industry: string;
  solutionsUsed: string[];
  servicesProvided: string[];
  challenge: string;
  solution: string;
  result: string;
  impactMetrics: StatItem[];
  isFeatured: boolean;
}

export interface Partner {
  slug: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  solutionCategories: SolutionCategory[];
}

export interface Client {
  slug: string;
  name: string;
  logo: string;
  industry: string;
  isFeatured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  authorImage?: string;
}

export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
  isHeadquarters: boolean;
}

export interface CTAConfig {
  text: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
  icon?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  megaMenu?: MegaMenuConfig;
}

export interface MegaMenuConfig {
  columns: MegaMenuColumn[];
  featuredProject?: ProjectReference;
}

export interface MegaMenuColumn {
  title: string;
  href: string;
  icon: string;
  items: NavItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  socialLinks: SocialLink[];
  stats: StatItem[];
}

export interface RelatedContent {
  solutions: Solution[];
  services: Service[];
  industries: Industry[];
  projects: Project[];
  partners: Partner[];
}
