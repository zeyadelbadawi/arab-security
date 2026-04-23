import type { Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Arab Security Group transformed our security infrastructure from a fragmented collection of systems into a unified, intelligent platform. Their technical expertise and project management were exceptional throughout the 18-month engagement.",
    authorName: "Eng. Ahmed Hassan",
    authorTitle: "Director of IT Infrastructure",
    authorCompany: "Egyptian Airports Company",
  },
  {
    id: "2",
    quote: "The network infrastructure Arab Security Group delivered exceeded our expectations. The zero-downtime migration was particularly impressive — our banking operations continued without a single interruption during the entire transition.",
    authorName: "Dr. Fatma El-Sayed",
    authorTitle: "Chief Technology Officer",
    authorCompany: "National Bank of Egypt",
  },
  {
    id: "3",
    quote: "Working with Arab Security Group on our ministry's security upgrade was a seamless experience. Their understanding of government requirements and security protocols made them the ideal partner for this sensitive project.",
    authorName: "Gen. Karim Abdel-Nour",
    authorTitle: "Head of Security Operations",
    authorCompany: "Ministry of Interior",
  },
  {
    id: "4",
    quote: "Arab Security Group's maintenance and operations team has been managing our technology systems for over 3 years. Their proactive approach has reduced our system downtime by 90% and significantly improved our operational efficiency.",
    authorName: "Eng. Omar Tawfik",
    authorTitle: "Facility Operations Manager",
    authorCompany: "Vodafone Egypt",
  },
  {
    id: "5",
    quote: "The smart parking and security solution Arab Security Group implemented at our mall has dramatically improved the visitor experience. Parking throughput increased by 50%, and our tenants love the people counting analytics.",
    authorName: "Mr. Hossam El-Din",
    authorTitle: "General Manager",
    authorCompany: "City Stars Development",
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}