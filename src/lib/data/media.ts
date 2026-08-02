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
{
  slug: "dahua-hangzhou-songcheng-park-2026",
  title: "Dahua China Trip 2026",
  excerpt:
    "ASG Distribution and Dahua Technology concluded the China Trip 2026 with a memorable cultural visit to Hangzhou Songcheng Park alongside their valued authorized distribution partners.",
  content:
    "As part of the closing activities of Dahua China Trip 2026, ASG Distribution, together with Dahua Technology and its valued authorized distribution partners, enjoyed a memorable visit to Hangzhou Songcheng Park in China.\n\nThe experience offered more than just sightseeing—it provided an opportunity to strengthen professional relationships, celebrate successful partnerships, and explore one of China's most iconic cultural destinations.\n\nThe journey reflected our shared commitment to collaboration, innovation, and building stronger connections that extend beyond business.\n\nTogether, we continue to grow, innovate, and create lasting partnerships.\n\n#ASGDistribution #DahuaTechnology #ChinaTrip2026 #Hangzhou #SongchengPark #AuthorizedDistributors #Partnership #Innovation #TogetherWeGrow",
  type: "news",
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
  type: "traning",
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
  type: "traning",
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
  type: "news",
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

  {
  slug: "asg-distribution-10th-anniversary-2025",
  title: "10 Years of the Power of Partnership",
  excerpt:
    "ASG Distribution celebrated its 10th Anniversary by bringing together more than 250 System Integrators, End Users, vendors, and strategic partners in the largest customer gathering in Egypt's security industry.",
  content:
    "ASG Distribution proudly celebrated a defining milestone in its journey—ten years of growth, innovation, and trusted partnerships—under the inspiring theme, '10 Years of the Power of Partnership.'\n\nThe celebration brought together more than 250 attendees, including System Integrators (SI), End Users, technology vendors, and strategic business partners, making it the largest customer gathering in Egypt's security industry. More than a celebration, the event reflected a decade of collaboration built on trust, shared success, and a common vision for the future.\n\nThroughout the evening, guests experienced memorable moments that honored the people and partnerships behind ASG Distribution's success. Inspiring speeches from valued partners highlighted years of collaboration, while recognition ceremonies celebrated outstanding System Integrator and End User clients whose contributions have played a vital role in the company's continued growth.\n\nThe event also served as a platform to strengthen relationships, exchange ideas, and explore new opportunities that will shape the next chapter of innovation across the security and low-current technology sectors. Every conversation, every award, and every shared memory reinforced the values that have driven ASG Distribution forward over the past decade.\n\nAs ASG Distribution enters its second decade, the company remains committed to empowering its partners with world-class technologies, exceptional support, and long-term collaboration. Together with its customers, vendors, and strategic partners, ASG Distribution looks ahead with confidence to building an even smarter, safer, and more connected future.\n\nTen years of partnership have created countless success stories—and this is only the beginning.\n\n#ASGDistribution #10YearsOfPartnership #PowerOfPartnership #TogetherWeGrow #SystemIntegrators #EndUsers #SecuritySolutions #Innovation",
  type: "event",
  date: "2025-07-09",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/514360237_1219992289927058_7926125854848487034_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/514360237_1219992289927058_7926125854848487034_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514248354_1224846239441663_9006223474202151843_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514286748_1219992553260365_5338636927335061563_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514033106_1219991943260426_6607413248353041051_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515960650_1219991883260432_7674021831287526168_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514408001_1219991426593811_5579500932087856902_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515017206_1219990253260595_8357057100268370516_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514255207_1219989876593966_1157245824189120753_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514042284_1219989379927349_4878054096474752663_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514403933_1219989363260684_5753177464776185286_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514352673_1219989373260683_2321735162774488486_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/517460492_1224105742849046_7042616540166256239_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515500308_1224105376182416_2836618919241251330_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/518306102_1224104886182465_252738979496103784_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515495317_1224104432849177_6183987942998415279_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/517008919_1224104039515883_657416929654650388_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/517153238_1224104096182544_5155814327610552246_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/518321137_1224104066182547_6586481497782137473_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/518284664_1224100512849569_1653266711720997664_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/518270968_1224099702849650_6256983084271455128_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514359415_1224097119516575_6343057240772826400_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/518404646_1224095819516705_5579930941550705230_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515980477_1224847919441495_8221701685842938298_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515888562_1224847802774840_9108891906215156473_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/516135749_1224848442774776_4573660575426869364_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515937392_1224848136108140_33478845552454209_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/514288527_1224848009441486_4874483321294713648_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/517586282_1224847266108227_651852422053613409_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/515858936_1224847312774889_7496241914862613864_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/518149164_1224847356108218_1229482325809826502_n.jpg"
  ],
  tags: [
    "asg-distribution",
    "10th-anniversary",
    "power-of-partnership",
    "system-integrators",
    "end-users",
    "vendors",
    "partnership",
    "security-industry",
    "event"
  ],
},

  {
  slug: "itc-headquarters-china-visit-2025",
  title: "ASG Distribution Strengthens Partnership with ITC Through Technical Visit to China",
  excerpt:
    "ASG Distribution's ITC Product Manager visited ITC's headquarters in China, completing advanced technical training and exploring the company's state-of-the-art manufacturing facilities to strengthen regional expertise.",
  content:
    "As part of its ongoing commitment to delivering world-class audio-visual solutions, ASG Distribution's ITC Product Manager, Mr. Ibrahim Fadl, visited ITC's global headquarters in China for an advanced technical and product development program.\n\nThe visit included comprehensive training on ITC's latest technologies, solutions, and product innovations, providing valuable first-hand knowledge of the company's rapidly evolving audio-visual ecosystem. In addition, Mr. Fadl toured ITC's state-of-the-art manufacturing facilities, gaining deeper insight into the engineering excellence, quality standards, and innovation processes behind the brand's industry-leading solutions.\n\nThis strategic visit reinforces the strong partnership between ASG Distribution and ITC while ensuring that customers across the region benefit from the latest technological advancements, enhanced technical expertise, and world-class support.\n\nBy investing in continuous learning and direct collaboration with global technology leaders, ASG Distribution continues to empower its partners and customers with innovative, reliable, and future-ready audio-visual solutions.\n\n#ASGDistribution #ITC #AudioVisual #Innovation #Technology #China #StrategicPartnership #ProfessionalTraining",
  type: "news",
  date: "2025-04-01",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/492736655_1172361348023486_293786768878975202_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/492736655_1172361348023486_293786768878975202_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/492502953_1172361424690145_7122606254030466639_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/493722025_1172361401356814_7533713020323819102_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/493019920_1172361421356812_8898084227179831742_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/493711413_1172361451356809_1560791890724131971_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/494005101_1172361388023482_7794060350196887199_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/493928962_1172361504690137_6437998566579954934_n.jpg",
  ],
  tags: [
    "asg-distribution",
    "itc",
    "china",
    "training",
    "audio-visual",
    "technology",
    "strategic-partnership",
    "innovation",
    "news",
  ],
},


  {
  slug: "asg-distribution-kstar-canton-fair-2025",
  title: "ASG Distribution Explores Strategic Opportunities with Kstar at Canton Fair 2025",
  excerpt:
    "ASG Distribution visited Kstar during Canton Fair 2025 in China, strengthening strategic collaboration and exploring advanced energy technologies to expand its portfolio of innovative solutions.",
  content:
    "ASG Distribution, led by General Manager Mr. Hassan Mansour, visited the Kstar booth during Canton Fair 2025 in China as part of the company's ongoing commitment to expanding its global partnerships and introducing innovative technologies to the regional market.\n\nRecognized as a global leader in energy solutions, Kstar showcased its latest advancements in power infrastructure, energy storage, and intelligent energy technologies. The visit provided ASG Distribution with valuable insights into Kstar's cutting-edge portfolio and future innovations that support sustainable and high-performance energy solutions.\n\nDuring the visit, senior representatives from both companies held strategic discussions focused on strengthening their partnership and exploring new opportunities for collaboration. The meeting reinforced a shared vision of delivering reliable, future-ready energy solutions that meet the evolving needs of customers across the region.\n\nThis milestone reflects ASG Distribution's dedication to building strong international alliances and continuously expanding its portfolio with world-class technologies that create long-term value for its partners and clients.\n\n#ASGDistribution #Kstar #CantonFair2025 #EnergySolutions #StrategicPartnership #Innovation #SmartEnergy #China",
  type: "news",
  date: "2025-04-01",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/07/491714119_1162780098981611_7307817094179882874_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/07/491714119_1162780098981611_7307817094179882874_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/07/486170666_1162780095648278_4102847352221670925_n-1.jpg",
  ],
  tags: [
    "asg-distribution",
    "kstar",
    "canton-fair",
    "china",
    "energy",
    "smart-energy",
    "strategic-partnership",
    "innovation",
    "news",
  ],
},


  {
  slug: "you-matter-hurghada-2025",
  title: "You Matter 2025 – Egypt's Largest Gathering of Low-Current Professionals",
  excerpt:
    "ASG Distribution and Dahua Technology Egypt brought together authorized distributors and low-current professionals for 'You Matter 2025,' the largest technical community event of its kind in Egypt.",
  content:
    "ASG Distribution, in collaboration with Dahua Technology Egypt, proudly hosted 'You Matter 2025' in Hurghada—an exceptional event that brought together authorized distributors, business partners, and low-current professionals from across Egypt for an inspiring experience of learning, collaboration, and celebration.\n\nRecognized as the largest gathering of low-current technicians in Egypt, the event reflected ASG Distribution's commitment to investing in the people who drive the success of the security industry. Participants from different governorates came together to exchange knowledge, strengthen professional relationships, and explore the latest innovations shaping the future of security and low-current technologies.\n\nAcross multiple days, attendees enjoyed technical sessions, interactive activities, networking opportunities, and engaging discussions with industry experts, creating an environment that encouraged both professional growth and meaningful collaboration. Beyond the technical content, the event celebrated the dedication and achievements of ASG Distribution's trusted partners and authorized distributors, reinforcing the company's philosophy that every partner plays a vital role in its continued success.\n\n'You Matter' is more than an event—it is a long-term initiative that reflects ASG Distribution's vision of empowering its technical community, recognizing excellence, and building stronger partnerships across the Egyptian market.\n\nTogether with Dahua Technology Egypt, ASG Distribution remains committed to creating opportunities that inspire innovation, strengthen technical expertise, and shape the future of the security industry.\n\n#ASGDistribution #YouMatter #DahuaTechnology #LowCurrent #TechnicalCommunity #AuthorizedDistributors #Partnership #SecuritySolutions",
  type: "event",
  date: "2025-03-01",
  image:
    "https://imoukuwait.com/wp-content/uploads/2026/08/484921114_1138453084747646_1591935281315696706_n.jpg",
  images: [
    "https://imoukuwait.com/wp-content/uploads/2026/08/484921114_1138453084747646_1591935281315696706_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484147398_1138453054747649_6741874830299270539_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484210358_1138461771413444_2889066054410560277_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484126633_1138452924747662_2494488059317913214_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484081841_1138452981414323_1323637682830855534_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/485345916_1138453011414320_5342098645080898709_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484462746_1138452854747669_2853169623284432309_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484998965_1138453138080974_4512516485423994696_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/485137693_1138453198080968_2971774742243512123_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484796571_1138453148080973_5683968359270546348_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484487945_1138453231414298_1622905988593285278_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484232375_1138461741413447_713159516897465403_n-1.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484345397_1138461341413487_1192120129157548430_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484540056_1138461351413486_2202422445037348228_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484536432_1138461701413451_2395132463215078019_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484953716_1138461768080111_5736526962262495967_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484312809_1138461711413450_1145531980019406968_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484232375_1138461741413447_713159516897465403_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484047289_1138450511414570_1216313705573643426_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484456858_1138450281414593_7750960076437197994_n.jpg",
    "https://imoukuwait.com/wp-content/uploads/2026/08/484873371_1138338634759091_4039214985254017801_n.jpg",
  ],
  tags: [
    "asg-distribution",
    "you-matter",
    "hurghada",
    "dahua",
    "low-current",
    "technical-training",
    "authorized-distributors",
    "networking",
    "security-solutions",
    "event",
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
