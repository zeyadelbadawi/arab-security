import { IMAGES } from "../constants";

export interface TrainingSession {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  instructor: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  maxParticipants: number;
  image: string;
  topics: string[];
}

export const trainingSessions: TrainingSession[] = [
  {
    id: "train-1",
    title: "CCTV & Video Surveillance Fundamentals",
    description: "Comprehensive training on IP camera systems, NVR configuration, VMS platforms, and best practices for surveillance system design and deployment.",
    date: "2026-05-15",
    duration: "3 days",
    location: "Cairo, Egypt",
    instructor: "ASG Engineering Team",
    category: "Security Systems",
    level: "beginner",
    maxParticipants: 20,
    image: IMAGES.heroSurveillance,
    topics: ["IP Camera Technology", "NVR/VMS Configuration", "Network Design for CCTV", "System Commissioning", "Troubleshooting"],
  },
  {
    id: "train-2",
    title: "Advanced Access Control & Biometrics",
    description: "Deep dive into enterprise access control systems, biometric technologies, integration with HR systems, and advanced configuration techniques.",
    date: "2026-06-10",
    duration: "2 days",
    location: "Cairo, Egypt",
    instructor: "ASG Engineering Team",
    category: "Access Control",
    level: "advanced",
    maxParticipants: 15,
    image: IMAGES.heroPhysicalSecurity,
    topics: ["Biometric Technologies", "Multi-Factor Authentication", "HR System Integration", "Anti-Passback Configuration", "Mobile Credentials"],
  },
  {
    id: "train-3",
    title: "Fire Alarm Systems — EN 54 Compliance",
    description: "Training on fire alarm system design, installation, and commissioning in accordance with EN 54 and NFPA standards.",
    date: "2026-06-25",
    duration: "2 days",
    location: "Cairo, Egypt",
    instructor: "ASG Engineering Team",
    category: "Fire & Safety",
    level: "intermediate",
    maxParticipants: 20,
    image: IMAGES.heroFireAlarm,
    topics: ["EN 54 Standards", "System Design", "Loop Configuration", "Commissioning & Testing", "Maintenance Requirements"],
  },
  {
    id: "train-4",
    title: "Smart Building Management (BMS) Essentials",
    description: "Introduction to building management systems, BACnet/Modbus protocols, HVAC integration, and energy management strategies.",
    date: "2026-07-08",
    duration: "3 days",
    location: "Riyadh, Saudi Arabia",
    instructor: "ASG Engineering Team",
    category: "Smart Solutions",
    level: "intermediate",
    maxParticipants: 15,
    image: IMAGES.heroCommandCenter,
    topics: ["BACnet & Modbus Protocols", "HVAC Integration", "Energy Monitoring", "Dashboard Configuration", "Alarm Management"],
  },
  {
    id: "train-5",
    title: "Structured Cabling & Network Infrastructure",
    description: "Hands-on training covering structured cabling standards, fiber optic termination, testing procedures, and network infrastructure best practices.",
    date: "2026-07-20",
    duration: "2 days",
    location: "Cairo, Egypt",
    instructor: "ASG Engineering Team",
    category: "Networking",
    level: "beginner",
    maxParticipants: 20,
    image: IMAGES.heroNetworking,
    topics: ["TIA/EIA Standards", "Copper & Fiber Termination", "Cable Testing & Certification", "Rack & Cabinet Installation", "Documentation"],
  },
];

export function getTrainingSessions(): TrainingSession[] {
  return trainingSessions;
}

export function getUpcomingSessions(): TrainingSession[] {
  const now = new Date();
  return trainingSessions.filter((s) => new Date(s.date) >= now);
}

export function getSessionById(id: string): TrainingSession | undefined {
  return trainingSessions.find((s) => s.id === id);
}