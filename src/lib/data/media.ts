import { IMAGES } from "../constants";

export interface MediaItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  type: "news" | "blog" | "event";
  date: string;
  image: string;
  author?: string;
  tags: string[];
}

export const mediaItems: MediaItem[] = [
  {
    slug: "asg-group-expands-to-saudi-arabia",
    title: "Arab Security Group Expands Operations to Saudi Arabia",
    excerpt: "Arab Security Group announces the opening of its new regional office in Riyadh, Saudi Arabia, to better serve clients across the GCC region.",
    content: "Arab Security Group is proud to announce the expansion of our operations with a new office in Riyadh, Saudi Arabia. This strategic move allows us to provide localized support and faster response times for our growing client base across the Gulf Cooperation Council (GCC) region. The new office will serve as a hub for project management, technical support, and business development activities.",
    type: "news",
    date: "2026-03-15",
    image: IMAGES.heroAboutTeam,
    tags: ["expansion", "saudi-arabia", "regional-growth"],
  },
  {
    slug: "ai-video-analytics-future-security",
    title: "AI Video Analytics: The Future of Intelligent Security",
    excerpt: "Explore how artificial intelligence is transforming video surveillance from passive recording to proactive threat detection and business intelligence.",
    content: "Artificial intelligence is revolutionizing the security industry. Modern AI-powered video analytics can detect anomalies, recognize faces, count people, and identify behaviors in real-time. This blog explores the latest advancements in AI-based security and how organizations can leverage these technologies to enhance their security posture while gaining valuable business insights.",
    type: "blog",
    date: "2026-03-10",
    image: IMAGES.heroSurveillance,
    author: "ASG Engineering Team",
    tags: ["ai", "video-analytics", "security", "technology"],
  },
  {
    slug: "smart-parking-solutions-mena",
    title: "Smart Parking Solutions Transforming MENA Cities",
    excerpt: "How intelligent parking management systems are reducing congestion and improving urban mobility across the Middle East and North Africa.",
    content: "Smart parking solutions are becoming essential infrastructure in rapidly growing MENA cities. From automated guidance systems to license plate recognition and mobile payments, these technologies are transforming how cities manage parking. Arab Security Group has been at the forefront of deploying these solutions across commercial centers, airports, and mixed-use developments.",
    type: "blog",
    date: "2026-02-28",
    image: IMAGES.heroPhysicalSecurity,
    author: "ASG Engineering Team",
    tags: ["smart-parking", "smart-city", "mena", "urban-mobility"],
  },
  {
    slug: "intersec-2026-dubai",
    title: "Arab Security Group at Intersec 2026 — Dubai",
    excerpt: "Visit Arab Security Group at Intersec 2026, the world's leading security, safety, and fire protection trade fair, held in Dubai.",
    content: "Arab Security Group will be exhibiting at Intersec 2026 in Dubai, showcasing our latest integrated security solutions, AI-powered analytics, and smart building technologies. Visit our booth to see live demonstrations and meet our engineering team. We look forward to connecting with industry professionals and partners.",
    type: "event",
    date: "2026-05-20",
    image: IMAGES.heroCommandCenter,
    tags: ["intersec", "exhibition", "dubai", "security"],
  },
  {
    slug: "fire-safety-compliance-guide",
    title: "A Complete Guide to Fire Safety Compliance in Commercial Buildings",
    excerpt: "Understanding EN 54 and NFPA standards for fire alarm and life safety systems in commercial and industrial environments.",
    content: "Fire safety compliance is critical for any commercial or industrial facility. This comprehensive guide covers the key standards (EN 54, NFPA 72, NFPA 101), system design requirements, testing procedures, and maintenance best practices. Learn how to ensure your facility meets all regulatory requirements while providing maximum protection for occupants and assets.",
    type: "blog",
    date: "2026-02-15",
    image: IMAGES.heroFireAlarm,
    author: "ASG Engineering Team",
    tags: ["fire-safety", "compliance", "en-54", "nfpa"],
  },
  {
    slug: "asg-partnership-axis-communications",
    title: "Arab Security Group Achieves Axis Communications Gold Partner Status",
    excerpt: "Arab Security Group has been elevated to Gold Partner status with Axis Communications, recognizing our expertise in network video solutions.",
    content: "We are pleased to announce that Arab Security Group has achieved Gold Partner status with Axis Communications, a global leader in network video solutions. This recognition reflects our team's deep expertise in designing and deploying Axis-based surveillance systems, our commitment to ongoing training, and our track record of successful projects across the region.",
    type: "news",
    date: "2026-01-20",
    image: IMAGES.heroNetworking,
    tags: ["partnership", "axis", "certification"],
  },
];

export function getMediaItems(): MediaItem[] {
  return mediaItems;
}

export function getMediaByType(type: MediaItem["type"]): MediaItem[] {
  return mediaItems.filter((m) => m.type === type);
}

export function getRecentMedia(count = 3): MediaItem[] {
  return [...mediaItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}