import { IMAGES } from "../constants";

export interface MediaItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  type: "News" | "Bblog" | "Event" | "Training" | "Collaboration";
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
    type: "Event",
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
{
  slug: "dahua-hangzhou-songcheng-park-2026",
  title: "Dahua China Trip 2026",
  excerpt:
    "ASG Distribution and Dahua Technology concluded the China Trip 2026 with a memorable cultural visit to Hangzhou Songcheng Park alongside their valued authorized distribution partners.",
  content:
    "As part of the closing activities of Dahua China Trip 2026, ASG Distribution, together with Dahua Technology and its valued authorized distribution partners, enjoyed a memorable visit to Hangzhou Songcheng Park in China.\n\nThe experience offered more than just sightseeing—it provided an opportunity to strengthen professional relationships, celebrate successful partnerships, and explore one of China's most iconic cultural destinations.\n\nThe journey reflected our shared commitment to collaboration, innovation, and building stronger connections that extend beyond business.\n\nTogether, we continue to grow, innovate, and create lasting partnerships.\n\n#ASGDistribution #DahuaTechnology #ChinaTrip2026 #Hangzhou #SongchengPark #AuthorizedDistributors #Partnership #Innovation #TogetherWeGrow",
  type: "News",
  date: "2026-07-01",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/753729725_1535643211695296_7203993570700827241_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/753729725_1535643211695296_7203993570700827241_n.jpg",
  ],
  tags: [
    "dahua",
    "china-trip",
    "hangzhou",
    "songcheng-park",
    "asg-distribution",
    "authorized-distributors",
    "partnership",
    "news",
  ],
},

  {
  slug: "asg-distribution-training-academy-cairo-2026",
  title: "ASG Distribution Training Academy 2 – Cairo",
  excerpt:
    "The second round of the ASG Distribution Training Academy brought together technicians and authorized distributors in Cairo for an intensive day of hands-on Dahua product training and industry updates.",
  content:
    "ASG Distribution successfully hosted the second round of its Training Academy in Cairo, welcoming technicians and authorized distribution partners for a full day of practical learning and professional development.\n\nThe event was attended by Mr. Farid Galila, Chief Executive Officer, Mr. Ahmed Safwat, Vice Chairman, and Mr. Hassan Mansour, General Manager, highlighting the company's ongoing commitment to empowering security professionals through continuous education and technical excellence.\n\nParticipants explored the latest Dahua security and low-current technologies through hands-on demonstrations, technical discussions, and knowledge-sharing sessions designed to strengthen practical expertise and deployment best practices.\n\nThe academy also featured productive discussions with technicians and distributors, where valuable feedback and technical inquiries were addressed. During the event, ASG Distribution announced an additional one-year warranty on Dahua products, the arrival of a new shipment of Dahua Technology solutions, and the official launch of the 'You Matter – Hurghada 2026' program for distributors and technicians.\n\nStay tuned for upcoming Training Academy sessions and more opportunities to grow with ASG Distribution.\n\n#ASGDistribution #ASGTrainingAcademy #Dahua #Cairo #SecuritySolutions #TechnicalTraining #AuthorizedDistributors",
  type: "Training",
  date: "2026-05-20",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/701686925_1479443493981935_7245132182971915036_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/701686925_1479443493981935_7245132182971915036_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702570528_1479443600648591_8938163303991493822_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/703588390_1479443887315229_2992955136708641885_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/703824330_1479443983981886_3813647538172783381_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/703468060_1479444110648540_7511756764259119794_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/703954822_1479444240648527_8954615339631426326_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/703170429_1479444293981855_2980187664402206260_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/703519898_1479444530648498_6512950921103061667_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702830101_1479444687315149_3078291341303563349_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702280873_1479444880648463_5941247612780708897_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/701961194_1479444953981789_4844256658566892207_n.jpg",
  ],
  tags: [
    "asg-distribution",
    "training-academy",
    "dahua",
    "cairo",
    "technical-training",
    "authorized-distributors",
    "security-solutions",
    "news",
  ],
},

{
  slug: "asg-distribution-training-academy-mansoura-2026",
  title: "ASG Distribution Training Academy 1 – Mansoura",
  excerpt:
    "The first round of the ASG Distribution Training Academy kicked off in Mansoura, bringing together technicians and authorized distributors for a full day of Dahua product training and technical development.",
  content:
    "ASG Distribution successfully launched the first round of its Training Academy in Mansoura as part of its ongoing initiative to empower technicians and authorized distribution partners with the latest security technologies and industry expertise.\n\nThe training program featured hands-on technical sessions, knowledge-sharing discussions, and practical demonstrations covering Dahua's latest security and low-current solutions. Participants exchanged valuable experiences while enhancing their technical skills and deployment knowledge.\n\nThe event also included productive discussions with technicians and distributors, providing an opportunity to address technical inquiries, gather feedback, and strengthen collaboration across the partner network. During the academy, ASG Distribution officially announced the launch of the 'You Matter 2 – Hurghada 2026' program for distributors and technicians.\n\nStay tuned for upcoming Training Academy sessions as we continue investing in professional development and delivering innovative security solutions across the region.\n\n#ASGDistribution #ASGTrainingAcademy #Dahua #Mansoura #TechnicalTraining #SecuritySolutions #AuthorizedDistributors",
  type: "Training",
  date: "2026-05-18",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/702570454_1477917690801182_7832903345255597268_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/702570454_1477917690801182_7832903345255597268_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702136385_1477917050801246_1918142177796805172_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702306952_1477918087467809_7897877452027133560_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/700998023_1477917884134496_1069349978895410474_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/701811571_1477917414134543_7209261526008281212_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702893877_1477917334134551_6122610914342304337_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702306956_1477918850801066_7589132833037527380_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702812959_1477917980801153_5971901725064551680_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702494761_1477918547467763_2719250333705557083_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702122428_1477918764134408_3858899206135633234_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/702487426_1477918837467734_6792156868037864752_n.jpg",
  ],
  tags: [
    "asg-distribution",
    "training-academy",
    "dahua",
    "mansoura",
    "technical-training",
    "authorized-distributors",
    "security-solutions",
    "news",
  ],
},
  {
  slug: "dahua-annual-distributor-conference-2026",
  title: "ASG Distribution Celebrates Success at the Dahua Annual Distributor Conference 2026",
  excerpt:
    "ASG Distribution proudly participated in the Dahua Technology Annual Distributor Conference 2026, where the company celebrated a major achievement with the recognition of its Dahua Product Manager.",
  content:
    "ASG Distribution was honored to participate in the Dahua Technology Annual Distributor Conference 2026, a prestigious event that brought together partners, distributors, and industry leaders to celebrate collaboration, innovation, and shared success.\n\nThe conference provided an excellent opportunity to strengthen the long-standing partnership between ASG Distribution and Dahua Technology while recognizing outstanding achievements across the regional distribution network.\n\nA proud highlight of the event was the recognition of Kareem Moemen, ASG Distribution's Dahua Product Manager, who received the 2025 Best DT Product Management Award. This achievement reflects his dedication, technical expertise, and the company's ongoing commitment to delivering excellence in product management and customer support.\n\nASG Distribution extends its sincere appreciation to Dahua Technology for its continuous trust, collaboration, and support. Together, we look forward to achieving even greater milestones and driving innovation across the security industry.\n\n#ASGDistribution #DahuaTechnology #AnnualDistributorConference #BestProductManagement #Partnership #Innovation #SecuritySolutions",
  type: "news",
  date: "2026-07-01",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/624331189_1389430666316552_4012545646310283204_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/624331189_1389430666316552_4012545646310283204_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/624805311_1389430902983195_5140985935873786077_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/625087442_1389430842983201_7878099112698096532_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/623843641_1389430712983214_6693921030830136142_n.jpg",
  ],
  tags: [
    "asg-distribution",
    "dahua",
    "annual-distributor-conference",
    "product-management",
    "award",
    "partnership",
    "security-solutions",
    "news",
  ],
},

  {
  slug: "global-phdc-2025-minister-visit",
  title: "Dr. Khaled Abdel Ghaffar Visits the ASG Distribution Booth at Global PHDC 2025",
  excerpt:
    "ASG Distribution welcomed Dr. Khaled Abdel Ghaffar during his visit to the company's booth at Global PHDC 2025, where the latest healthcare security technologies and smart solutions were showcased.",
  content:
    "ASG Distribution proudly welcomed Dr. Khaled Abdel Ghaffar, Deputy Prime Minister of Egypt and Minister of Health and Population, during his visit to the ASG Distribution and Dahua Technology Egypt booth at the Global Congress on Population, Health, and Human Development (Global PHDC) 2025.\n\nDuring the visit, the Minister explored a range of advanced security technologies and intelligent healthcare solutions designed to enhance safety, operational efficiency, and digital transformation across healthcare facilities.\n\nASG Distribution proudly participated in Global PHDC 2025 as a Gold Sponsor for the second consecutive year, reaffirming its commitment to supporting the healthcare sector with innovative security and smart technology solutions.\n\nHeld from November 12 to 15, 2025, at St. Regis Al Masa Hotel in Egypt's New Administrative Capital, the congress brought together government officials, healthcare leaders, and technology innovators to shape the future of healthcare and human development.\n\nASG Distribution continues to deliver cutting-edge security and smart infrastructure solutions that help healthcare organizations build safer, more connected, and future-ready environments.\n\n#ASGDistribution #GlobalPHDC #HealthcareTechnology #DahuaTechnology #SmartHealthcare #GoldSponsor #SecuritySolutions",
  type: "Collaboration",
  date: "2025-11-12",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/582800360_1329805142279105_4777885413131529612_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/582800360_1329805142279105_4777885413131529612_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/583189205_1329834555609497_7984659344867563608_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/581920867_1331217935471159_7565945719001776701_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/579439008_1329805085612444_3336096526876597424_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/581133592_1329805138945772_5824168714828217667_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/581208661_1329805082279111_1114836760124976959_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/579864175_746672491782738_6934690392921985806_n.jpg",
  ],
  tags: [
    "asg-distribution",
    "global-phdc",
    "healthcare",
    "gold-sponsor",
    "dahua",
    "egypt",
    "healthcare-security",
    "security-solutions",
    "news",
  ],
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
