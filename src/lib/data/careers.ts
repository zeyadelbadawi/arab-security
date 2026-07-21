export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  experience: string;
  description: string;
  responsibilities: string[];
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
      id: "technical-office-engineer-01",
  
      title: "Technical Office Engineer – Light Current Systems",
  
      department: "Technical Office",
  
      location: "Nasr City / New Administrative Capital",
  
      type: "full-time",
  
      experience: "3–5 Years",
  
      description:
        "Join Arab Security Group as a Technical Office Engineer specializing in Light Current Systems. You will be responsible for preparing detailed shop drawings, as-built drawings, riser diagrams, BOQs, technical submittals, and coordinating with project teams to deliver high-quality integrated security and ELV solutions while ensuring compliance with international standards.",
  
      responsibilities: [
        "Prepare shop drawings, single-line diagrams, riser diagrams, and schematic drawings for CCTV, Fire Alarm, Access Control, Public Address, Data Networks, and other ELV systems.",
        "Prepare and continuously update as-built drawings throughout project execution.",
        "Develop and submit technical submittals according to project specifications.",
        "Prepare Quantity Take-Off (QTO) and Bill of Quantities (BOQ).",
        "Coordinate with Project Managers, Site Engineers, Consultants, Suppliers, and Contractors.",
        "Prepare and manage RFIs (Requests for Information) whenever clarification is required.",
        "Ensure approved shop drawings are distributed to all stakeholders on time.",
        "Review system compatibility with life safety codes, security standards, and building regulations.",
        "Review drawings, specifications, and installation procedures to maintain quality standards.",
        "Provide technical support during project execution and resolve site-related technical issues."
      ],
  
      requirements: [
        "Bachelor's Degree in Electrical Engineering.",
        "3–5 years of hands-on experience in Light Current Systems design and shop drawings.",
        "Excellent AutoCAD skills.",
        "Excellent Revit skills.",
        "Strong knowledge of MS Office and Microsoft Visio.",
        "Strong understanding of structured cabling and network infrastructure (Passive & Active).",
        "Excellent communication and teamwork skills.",
        "Ability to manage multiple projects under tight deadlines.",
        "Business-level English reading and writing."
      ],
  
      postedDate: "2026-07-21"
    }
  ];
  export function getJobOpenings(): JobOpening[] {
    return jobOpenings;
  }
  
  export function getJobById(id: string): JobOpening | undefined {
    return jobOpenings.find((j) => j.id === id);
  }
