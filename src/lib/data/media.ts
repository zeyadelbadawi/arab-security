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
    slug: "elgouna-2026",
    title: "El Gouna 2026: Connect. Collaborate. Celebrate.",
    excerpt: "ASG Distribution and Dahua Technology brought together leading System Integrators and End-Users in El Gouna to celebrate strong partnerships and shared success.",
    content: "ASG Distribution and Dahua Technology brought together leading System Integrators and End-Users in El Gouna to celebrate strong partnerships and shared success.\n\nWith the presence of both companies' leadership teams, the event also highlighted El Gouna as a successful showcase of security solutions powered by ASG Distribution and Dahua Technology.\n\nTogether, we build a smarter, safer future.\n\n#ASGDistribution #DahuaTechnology #ElGouna #SystemIntegrators #EndUsers",
    type: "event",
    date: "2026-06-17",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1781724154367-QshqsmosldMBXCmrYthyZ7KjmWSqWE.jpeg",
images: [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1781724154367-QshqsmosldMBXCmrYthyZ7KjmWSqWE.jpeg",
  "/assets/event/1.jpeg",
  "/assets/event/2.jpeg",
  "/assets/event/3.jpeg",
  "/assets/event/4.jpeg",
  "/assets/event/5.jpeg",
  "/assets/event/6.jpeg",
  "/assets/event/7.jpeg",
  "/assets/event/8.jpeg",
  "/assets/event/9.jpeg",
  "/assets/event/10.jpeg",
  "/assets/event/11.jpeg",
  "/assets/event/12.jpeg",
  "/assets/event/13.jpeg",
  "/assets/event/14.jpeg",
  "/assets/event/15.jpeg",
  "/assets/event/16.jpeg",
  "/assets/event/18.jpeg",
],
    tags: ["elgouna", "partnership", "dahua", "asg-distribution", "event"],
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

export function getMediaBySlug(slug: string): MediaItem | undefined {
  return mediaItems.find((m) => m.slug === slug);
}
