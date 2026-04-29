import type { Client } from "../types";

export const clients: Client[] = [
  { slug: "national-organization-for-potable-water", name: "National Organization for Potable Water", logo: "/assets/clients/1.png", industry: "government", isFeatured: true },
  { slug: "ministry-of-interior", name: "Ministry of Interior", logo: "/assets/clients/2.png", industry: "government", isFeatured: true },
  { slug: "the-walk", name: "The Walk", logo: "/assets/clients/4.png", industry: "commercial", isFeatured: true },
  { slug: "sinai-university", name: "Sinai University", logo: "/assets/clients/6.png", industry: "education", isFeatured: true },
  { slug: "mansoura-university", name: "Mansoura University", logo: "/assets/clients/7.png", industry: "education", isFeatured: true },
  { slug: "nile-university", name: "Nile University", logo: "/assets/clients/8.png", industry: "education", isFeatured: true },

  { slug: "cairo-electricity-production-company", name: "Cairo Electricity Production Company", logo: "/assets/clients/10.png", industry: "infrastructure", isFeatured: true },
  { slug: "east-delta-electricity-production-company", name: "East Delta Electricity Production Company", logo: "/assets/clients/11.png", industry: "infrastructure", isFeatured: true },
  { slug: "metro", name: "Metro", logo: "/assets/clients/12.png", industry: "infrastructure", isFeatured: true },

  { slug: "ministry-of-health-and-population", name: "Ministry of Health and Population", logo: "/assets/clients/14.png", industry: "healthcare", isFeatured: true },
  { slug: "health-insurance-organization", name: "Health Insurance Organization", logo: "/assets/clients/15.png", industry: "healthcare", isFeatured: false },
  { slug: "national-cancer-institute", name: "National Cancer Institute", logo: "/assets/clients/16.png", industry: "healthcare", isFeatured: false },
  { slug: "elaraby-hospital", name: "Elaraby Hospital", logo: "/assets/clients/17.png", industry: "healthcare", isFeatured: true },
  { slug: "as-salam-international-hospital", name: "As-Salam International Hospital", logo: "/assets/clients/18.png", industry: "healthcare", isFeatured: false },

  { slug: "military-production", name: "Military Production", logo: "/assets/clients/20.png", industry: "government", isFeatured: false },
  { slug: "alexandria-governorate", name: "Alexandria Governorate", logo: "/assets/clients/21.png", industry: "government", isFeatured: false },
  { slug: "administrative-control-authority", name: "Administrative Control Authority", logo: "/assets/clients/22.png", industry: "government", isFeatured: false },
  { slug: "ministry-of-defense", name: "Ministry of Defense", logo: "/assets/clients/23.png", industry: "government", isFeatured: true },

  { slug: "qnb-alahli", name: "QNB Al Ahli", logo: "/assets/clients/25.png", industry: "enterprise", isFeatured: true },
  { slug: "banque-misr", name: "Banque Misr", logo: "/assets/clients/26.png", industry: "enterprise", isFeatured: true },
  { slug: "national-bank-of-kuwait", name: "National Bank of Kuwait", logo: "/assets/clients/27.png", industry: "enterprise", isFeatured: false },

  { slug: "suez-oil-processing-company", name: "Suez Oil Processing Company", logo: "/assets/clients/29.png", industry: "industrial", isFeatured: true },
  { slug: "petromaint", name: "Petromaint", logo: "/assets/clients/30.png", industry: "industrial", isFeatured: false },
  { slug: "total", name: "Total", logo: "/assets/clients/31.png", industry: "industrial", isFeatured: true },
  { slug: "npc", name: "NPC", logo: "/assets/clients/32.png", industry: "industrial", isFeatured: false },
  { slug: "e22", name: "E22", logo: "/assets/clients/34.png", industry: "industrial", isFeatured: false },
  { slug: "pepsi", name: "Pepsi", logo: "/assets/clients/35.png", industry: "industrial", isFeatured: true },
  { slug: "ezz-steel", name: "Ezz Steel", logo: "/assets/clients/36.png", industry: "industrial", isFeatured: true },
  { slug: "glc-paints", name: "GLC Paints", logo: "/assets/clients/37.png", industry: "industrial", isFeatured: false },
  { slug: "beyti", name: "Beyti", logo: "/assets/clients/38.png", industry: "industrial", isFeatured: false },
  { slug: "cemex", name: "Cemex", logo: "/assets/clients/39.png", industry: "industrial", isFeatured: false },

  { slug: "the-chedi", name: "The Chedi Hotel & Residences", logo: "/assets/clients/41.png", industry: "commercial", isFeatured: false },
  { slug: "three-corners-ocean-view-hotel", name: "The Three Corners Ocean View Hotel", logo: "/assets/clients/42.png", industry: "commercial", isFeatured: false },
  { slug: "barcelo-tiran-sharm", name: "Barceló Tiran Sharm", logo: "/assets/clients/43.png", industry: "commercial", isFeatured: false },
  { slug: "secon-nile-towers", name: "SECON Nile Towers", logo: "/assets/clients/44.png", industry: "commercial", isFeatured: false },
  { slug: "sofitel", name: "Sofitel Hotels & Resorts", logo: "/assets/clients/45.png", industry: "commercial", isFeatured: false },
  { slug: "il-mercato-hotel-and-spa", name: "IL Mercato Hotel & Spa", logo: "/assets/clients/46.png", industry: "commercial", isFeatured: false },
  { slug: "blue-resorts", name: "Blue Resorts", logo: "/assets/clients/47.png", industry: "commercial", isFeatured: false },

  { slug: "majid-al-futtaim", name: "Majid Al Futtaim", logo: "/assets/clients/49.png", industry: "commercial", isFeatured: true },
  { slug: "ahly-sabbour", name: "Ahly Sabbour", logo: "/assets/clients/50.png", industry: "real-estate", isFeatured: true },
  { slug: "orascom-construction", name: "Orascom Construction", logo: "/assets/clients/51.png", industry: "real-estate", isFeatured: true },
  { slug: "alburouj", name: "Alburouj", logo: "/assets/clients/52.png", industry: "real-estate", isFeatured: false },
  { slug: "orascom-development", name: "Orascom Development", logo: "/assets/clients/53.png", industry: "real-estate", isFeatured: true },
  { slug: "madinaty", name: "Madinaty", logo: "/assets/clients/54.png", industry: "real-estate", isFeatured: true },
  { slug: "granda-alshorouk", name: "Granda Al Shorouk", logo: "/assets/clients/55.png", industry: "real-estate", isFeatured: false },
  { slug: "jayd-new-cairo", name: "Jayd New Cairo", logo: "/assets/clients/56.png", industry: "real-estate", isFeatured: false },
  { slug: "dar-misr", name: "Dar Misr", logo: "/assets/clients/57.png", industry: "real-estate", isFeatured: false },
  { slug: "elaraby", name: "El Araby", logo: "/assets/clients/58.png", industry: "commercial", isFeatured: true },
  { slug: "fathalla", name: "Fathalla", logo: "/assets/clients/60.png", industry: "commercial", isFeatured: false },
  { slug: "lulu", name: "LuLu Hypermarket", logo: "/assets/clients/61.png", industry: "commercial", isFeatured: true },
  { slug: "carrefour", name: "Carrefour", logo: "/assets/clients/62.png", industry: "commercial", isFeatured: true },
  { slug: "citystars-heliopolis", name: "Citystars Heliopolis", logo: "/assets/clients/63.png", industry: "commercial", isFeatured: true },
];

export function getClients(): Client[] {
  return clients;
}

export function getFeaturedClients(): Client[] {
  return clients.filter((c) => c.isFeatured);
}
