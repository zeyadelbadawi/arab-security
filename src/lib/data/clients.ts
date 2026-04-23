import type { Client } from "../types";

export const clients: Client[] = [
  { slug: "vodafone", name: "Vodafone Egypt", logo: "/assets/clients/vodafone.png", industry: "enterprise", isFeatured: true },
  { slug: "nbe", name: "National Bank of Egypt", logo: "/assets/clients/nbe.png", industry: "enterprise", isFeatured: true },
  { slug: "orange", name: "Orange Egypt", logo: "/assets/clients/orange.png", industry: "enterprise", isFeatured: true },
  { slug: "eac", name: "Egyptian Airports Company", logo: "/assets/clients/eac.png", industry: "infrastructure", isFeatured: true },
  { slug: "moi", name: "Ministry of Interior", logo: "/assets/clients/moi.png", industry: "government", isFeatured: true },
  { slug: "nac", name: "New Administrative Capital", logo: "/assets/clients/nac.png", industry: "infrastructure", isFeatured: true },
  { slug: "petrochemicals", name: "Egyptian Petrochemicals", logo: "/assets/clients/petrochemicals.png", industry: "industrial", isFeatured: true },
  { slug: "citystars", name: "City Stars", logo: "/assets/clients/citystars.png", industry: "commercial", isFeatured: true },
  { slug: "redsea", name: "Red Sea Resorts", logo: "/assets/clients/redsea.png", industry: "commercial", isFeatured: false },
  { slug: "cib", name: "CIB Egypt", logo: "/assets/clients/cib.png", industry: "enterprise", isFeatured: false },
  { slug: "orascom", name: "Orascom Construction", logo: "/assets/clients/orascom.png", industry: "industrial", isFeatured: false },
  { slug: "emaar", name: "Emaar Misr", logo: "/assets/clients/emaar.png", industry: "commercial", isFeatured: false },
];

export function getClients(): Client[] {
  return clients;
}

export function getFeaturedClients(): Client[] {
  return clients.filter((c) => c.isFeatured);
}