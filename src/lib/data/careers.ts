export interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    type: "full-time" | "part-time" | "contract";
    experience: string;
    description: string;
    requirements: string[];
    postedDate: string;
  }
  
  export const coreValues = [
    { title: "Excellence", description: "We strive for the highest standards in every project, every installation, and every interaction.", icon: "Award" },
    { title: "Innovation", description: "We embrace new technologies and creative solutions to stay ahead of industry trends.", icon: "Lightbulb" },
    { title: "Integrity", description: "We operate with transparency, honesty, and ethical conduct in all our business relationships.", icon: "Shield" },
    { title: "Teamwork", description: "We believe in the power of collaboration, both within our team and with our clients and partners.", icon: "Users" },
    { title: "Customer Focus", description: "Our clients' success is our success. We listen, understand, and deliver beyond expectations.", icon: "Heart" },
    { title: "Safety", description: "We prioritize safety in every aspect of our operations, from design to installation and maintenance.", icon: "HardHat" },
  ];
  
  export const whyWorkAtASG = [
    { title: "Career Growth", description: "Clear career paths with opportunities for advancement, certifications, and leadership roles.", icon: "TrendingUp" },
    { title: "Training & Development", description: "Regular factory training, certifications, and professional development programs with leading technology brands.", icon: "GraduationCap" },
    { title: "Cutting-Edge Technology", description: "Work with the latest technologies from world-leading brands like Axis, Honeywell, Cisco, and more.", icon: "Cpu" },
    { title: "Diverse Projects", description: "Engage with exciting projects across multiple industries — from airports and smart cities to luxury resorts.", icon: "Briefcase" },
    { title: "Collaborative Culture", description: "Join a supportive, team-oriented environment where your ideas and contributions are valued.", icon: "Users" },
    { title: "Competitive Benefits", description: "Attractive compensation packages, health insurance, annual leave, and performance bonuses.", icon: "Gift" },
  ];
  
  export const jobOpenings: JobOpening[] = [
    {
      id: "job-1",
      title: "Senior Security Systems Engineer",
      department: "Engineering",
      location: "Cairo, Egypt",
      type: "full-time",
      experience: "5+ years",
      description: "Design and implement integrated security systems including CCTV, access control, and command & control solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Electrical/Electronics Engineering",
        "5+ years experience in security systems integration",
        "Certification from Axis, Milestone, or equivalent",
        "Strong knowledge of IP networking and VMS platforms",
        "Excellent project management skills",
      ],
      postedDate: "2026-04-01",
    },
    {
      id: "job-2",
      title: "Fire & Safety Systems Engineer",
      department: "Engineering",
      location: "Cairo, Egypt",
      type: "full-time",
      experience: "3+ years",
      description: "Design, install, and commission fire alarm and life safety systems in compliance with EN 54 and NFPA standards.",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "3+ years experience in fire alarm systems",
        "Knowledge of EN 54, NFPA 72, and NFPA 101",
        "Experience with Honeywell or Bosch fire systems",
        "Strong troubleshooting and commissioning skills",
      ],
      postedDate: "2026-03-25",
    },
    {
      id: "job-3",
      title: "Project Manager",
      department: "Project Management",
      location: "Riyadh, Saudi Arabia",
      type: "full-time",
      experience: "7+ years",
      description: "Lead and manage large-scale systems integration projects from inception to completion, ensuring delivery on time and within budget.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "PMP certification preferred",
        "7+ years experience in project management",
        "Experience in ELV/security systems projects",
        "Strong leadership and communication skills",
      ],
      postedDate: "2026-03-20",
    },
    {
      id: "job-4",
      title: "Network & IT Infrastructure Engineer",
      department: "Engineering",
      location: "Cairo, Egypt",
      type: "full-time",
      experience: "4+ years",
      description: "Design and deploy enterprise network infrastructure including structured cabling, switching, routing, and wireless solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or IT",
        "CCNA/CCNP certification",
        "4+ years experience in enterprise networking",
        "Experience with Cisco, CommScope, or Panduit",
        "Knowledge of structured cabling standards",
      ],
      postedDate: "2026-03-15",
    },
    {
      id: "job-5",
      title: "Business Development Manager",
      department: "Sales",
      location: "Cairo, Egypt",
      type: "full-time",
      experience: "5+ years",
      description: "Drive business growth by identifying opportunities, building client relationships, and developing proposals for integrated technology solutions.",
      requirements: [
        "Bachelor's degree in Business or Engineering",
        "5+ years experience in B2B sales",
        "Experience in security/ELV industry preferred",
        "Strong presentation and negotiation skills",
        "Existing network in target industries",
      ],
      postedDate: "2026-03-10",
    },
  ];
  
  export function getJobOpenings(): JobOpening[] {
    return jobOpenings;
  }
  
  export function getJobById(id: string): JobOpening | undefined {
    return jobOpenings.find((j) => j.id === id);
  }