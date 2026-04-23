import { SolutionCategory, type Partner } from "../types";

export const partners: Partner[] = [
  { slug: "cisco", name: "Cisco", logo: "/assets/partners/1.png", description: "Global leader in networking, security, and collaboration technology.", website: "https://cisco.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },
  { slug: "axis", name: "Axis Communications", logo: "/assets/partners/2.png", description: "World leader in network video surveillance and analytics.", website: "https://axis.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY] },
  { slug: "honeywell", name: "Honeywell", logo: "/assets/partners/3.png", description: "Global technology company providing fire safety and building automation solutions.", website: "https://honeywell.com", solutionCategories: [SolutionCategory.FIRE_LIFE_SAFETY, SolutionCategory.SMART_INTELLIGENT] },
  { slug: "bosch", name: "Bosch Security", logo: "/assets/partners/4.png", description: "Leading provider of security, safety, and communications products.", website: "https://boschsecurity.com", solutionCategories: [SolutionCategory.FIRE_LIFE_SAFETY, SolutionCategory.INTEGRATED_SECURITY, SolutionCategory.LIGHT_CURRENT_ELV] },
  { slug: "commscope", name: "CommScope", logo: "/assets/partners/5.png", description: "Global leader in infrastructure solutions for communications networks.", website: "https://commscope.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },
  { slug: "panduit", name: "Panduit", logo: "/assets/partners/6.png", description: "Leading provider of physical infrastructure solutions for enterprise environments.", website: "https://panduit.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },
  { slug: "hid", name: "HID Global", logo: "/assets/partners/7.png", description: "World leader in trusted identity solutions and access control.", website: "https://hidglobal.com", solutionCategories: [SolutionCategory.ACCESS_CONTROL] },
  { slug: "milestone", name: "Milestone Systems", logo: "/assets/partners/8.png", description: "Leading provider of open platform video management software.", website: "https://milestonesys.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY] },
  { slug: "came", name: "CAME", logo: "/assets/partners/9.png", description: "Italian leader in automated entrance and parking systems.", website: "https://came.com", solutionCategories: [SolutionCategory.PHYSICAL_SECURITY] },
  { slug: "nice", name: "NICE Systems", logo: "/assets/partners/10.png", description: "Provider of intelligent parking and traffic management solutions.", website: "https://nice.com", solutionCategories: [SolutionCategory.PARKING_TRAFFIC, SolutionCategory.PHYSICAL_SECURITY] },
  { slug: "notifier", name: "Notifier by Honeywell", logo: "/assets/partners/11.png", description: "World's largest manufacturer of engineered fire alarm systems.", website: "https://notifier.com", solutionCategories: [SolutionCategory.FIRE_LIFE_SAFETY] },
  { slug: "zkteco", name: "ZKTeco", logo: "/assets/partners/12.png", description: "Global leader in biometric verification and security solutions.", website: "https://zkteco.com", solutionCategories: [SolutionCategory.ACCESS_CONTROL] },
  { slug: "schneider", name: "Schneider Electric", logo: "/assets/partners/13.png", description: "Global specialist in energy management and automation.", website: "https://se.com", solutionCategories: [SolutionCategory.SMART_INTELLIGENT] },
  { slug: "smiths-detection", name: "Smiths Detection", logo: "/assets/partners/14.png", description: "Global leader in threat detection and screening technologies.", website: "https://smithsdetection.com", solutionCategories: [SolutionCategory.XRAY_INSPECTION] },
  { slug: "samsung", name: "Samsung", logo: "/assets/partners/15.png", description: "Global technology leader in displays and digital signage solutions.", website: "https://samsung.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },
  { slug: "crestron", name: "Crestron", logo: "/assets/partners/16.png", description: "World leader in advanced control and automation systems for AV.", website: "https://crestron.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },
  { slug: "aws", name: "AWS", logo: "/assets/partners/17.png", description: "Cloud computing platform offering scalable infrastructure, networking, and enterprise services.", website: "https://aws.amazon.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "lenovo", name: "Lenovo", logo: "/assets/partners/18.png", description: "Global technology company providing enterprise computing devices and infrastructure solutions.", website: "https://www.lenovo.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "hp", name: "HP", logo: "/assets/partners/19.png", description: "Global provider of business computing, printing, and workplace technology solutions.", website: "https://www.hp.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "microsoft", name: "Microsoft", logo: "/assets/partners/20.png", description: "Global technology leader offering cloud, productivity, and enterprise software solutions.", website: "https://www.microsoft.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "dahua", name: "Dahua Technology", logo: "/assets/partners/21.png", description: "Leading provider of video surveillance, AIoT, and security solutions.", website: "https://www.dahuatech.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY] },

{ slug: "faac", name: "FAAC", logo: "/assets/partners/22.png", description: "International leader in access automation, gate systems, and parking control solutions.", website: "https://www.faacgroup.com", solutionCategories: [SolutionCategory.PHYSICAL_SECURITY, SolutionCategory.PARKING_TRAFFIC] },

{ slug: "kstar", name: "KSTAR", logo: "/assets/partners/23.png", description: "Provider of power electronics, UPS systems, and infrastructure support solutions.", website: "https://www.kstar.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "itc", name: "ITC", logo: "/assets/partners/24.png", description: "Provider of professional AV, public address, conference, and intelligent control systems.", website: "https://www.itc-pa.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },

{ slug: "skidata", name: "SKIDATA", logo: "/assets/partners/25.png", description: "Global specialist in access management and parking solutions.", website: "https://www.skidata.com", solutionCategories: [SolutionCategory.PARKING_TRAFFIC, SolutionCategory.ACCESS_CONTROL] },

{ slug: "aten", name: "ATEN", logo: "/assets/partners/26.png", description: "Provider of connectivity, KVM, AV, and IT infrastructure management solutions.", website: "https://www.aten.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL, SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "vicon", name: "Vicon", logo: "/assets/partners/27.png", description: "Provider of advanced video surveillance and security management solutions.", website: "https://www.vicon-security.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY] },

{ slug: "hub-parking", name: "HUB Parking Technology", logo: "/assets/partners/28.png", description: "Provider of intelligent parking access and revenue control systems.", website: "https://www.hubparking.com", solutionCategories: [SolutionCategory.PARKING_TRAFFIC] },

{ slug: "imou", name: "IMOU", logo: "/assets/partners/29.png", description: "Smart security brand delivering cameras and connected protection solutions.", website: "https://www.imoulife.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY] },

{ slug: "hpe-aruba", name: "HPE Aruba Networking", logo: "/assets/partners/30.png", description: "Enterprise networking solutions provider for wired, wireless, and secure connectivity.", website: "https://www.arubanetworks.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "vmware", name: "VMware", logo: "/assets/partners/31.png", description: "Cloud infrastructure and virtualization technology provider for enterprise environments.", website: "https://www.vmware.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "extron", name: "Extron", logo: "/assets/partners/32.png", description: "Leading provider of professional AV system integration and control technologies.", website: "https://www.extron.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },

{ slug: "biamp", name: "Biamp", logo: "/assets/partners/33.png", description: "Provider of professional audio and communication solutions for enterprise spaces.", website: "https://www.biamp.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },

{ slug: "nedap", name: "Nedap", logo: "/assets/partners/34.png", description: "Technology company specializing in access control, security, and identification systems.", website: "https://www.nedap.com", solutionCategories: [SolutionCategory.ACCESS_CONTROL] },

{ slug: "absen", name: "Absen", logo: "/assets/partners/35.png", description: "Global manufacturer of LED display and digital visual communication solutions.", website: "https://www.absen.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },

{ slug: "fortinet", name: "Fortinet", logo: "/assets/partners/36.png", description: "Cybersecurity leader offering secure networking and enterprise protection solutions.", website: "https://www.fortinet.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "dell", name: "Dell Technologies", logo: "/assets/partners/37.png", description: "Global technology company providing computing, infrastructure, and enterprise IT solutions.", website: "https://www.dell.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "amg-system", name: "AMG System", logo: "/assets/partners/38.png", description: "Provider of advanced network transmission and communication solutions for security and infrastructure systems.", website: "https://www.amgsystems.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV, SolutionCategory.INTEGRATED_SECURITY] },

{ slug: "western-digital", name: "Western Digital", logo: "/assets/partners/39.png", description: "Global provider of data storage technologies and surveillance-grade storage solutions.", website: "https://www.westerndigital.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY, SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "gunnebo", name: "Gunnebo", logo: "/assets/partners/40.png", description: "Global security group specializing in entrance control, access management, and physical security solutions.", website: "https://www.gunnebo.com", solutionCategories: [SolutionCategory.PHYSICAL_SECURITY, SolutionCategory.ACCESS_CONTROL] },

{ slug: "ruptela", name: "Ruptela", logo: "/assets/partners/41.png", description: "Telematics and fleet management technology provider delivering tracking and mobility solutions.", website: "https://ruptela.com", solutionCategories: [SolutionCategory.PARKING_TRAFFIC, SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "huawei-ekit", name: "Huawei eKit", logo: "/assets/partners/42.png", description: "Enterprise networking and digital infrastructure solutions brand from Huawei for business environments.", website: "https://e.huawei.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV, SolutionCategory.SMART_INTELLIGENT] },

{ slug: "qnet", name: "QNET", logo: "/assets/partners/43.png", description: "Technology solutions provider supporting integrated communication and infrastructure requirements.", website: "https://www.qnet.net", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "ruijie-reyee", name: "Ruijie Reyee", logo: "/assets/partners/44.png", description: "Provider of networking equipment and cloud-managed connectivity solutions for enterprise and commercial deployments.", website: "https://www.reyee.ruijie.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "infosec", name: "Infosec", logo: "/assets/partners/45.png", description: "Provider of power protection, UPS, and backup energy solutions for critical systems.", website: "https://www.infosecups.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "idis", name: "IDIS", logo: "/assets/partners/46.png", description: "Manufacturer of video surveillance, recording, and end-to-end security monitoring solutions.", website: "https://www.idisglobal.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY] },

{ slug: "hewlett-packard-enterprise", name: "Hewlett Packard Enterprise", logo: "/assets/partners/47.png", description: "Enterprise infrastructure and IT solutions provider for networking, servers, storage, and hybrid cloud.", website: "https://www.hpe.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "tansa-security", name: "Tansa Security", logo: "/assets/partners/48.png", description: "Manufacturer of pedestrian access control systems, turnstiles, and secure entrance solutions.", website: "https://www.tansa.com", solutionCategories: [SolutionCategory.ACCESS_CONTROL, SolutionCategory.PHYSICAL_SECURITY] },

{ slug: "hanwha-vision", name: "Hanwha Vision", logo: "/assets/partners/49.png", description: "Global provider of video surveillance cameras, AI-powered monitoring, and integrated security solutions.", website: "https://www.hanwhavision.com", solutionCategories: [SolutionCategory.INTEGRATED_SECURITY] },

{ slug: "centurion", name: "Centurion", logo: "/assets/partners/50.png", description: "Specialist in gate automation, access control, and perimeter security systems.", website: "https://www.centsys.com", solutionCategories: [SolutionCategory.PHYSICAL_SECURITY, SolutionCategory.ACCESS_CONTROL] },

{ slug: "magnetic-access", name: "Magnetic Access", logo: "/assets/partners/51.png", description: "Provider of vehicle barriers, pedestrian gates, and access management systems.", website: "https://www.magnetic-access.com", solutionCategories: [SolutionCategory.PARKING_TRAFFIC, SolutionCategory.ACCESS_CONTROL] },

{ slug: "deutschtec", name: "DEUTSCHTEC", logo: "/assets/partners/52.png", description: "Technology and automation solutions provider for infrastructure and specialized security applications.", website: "https://www.deutschtec.de", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

{ slug: "arthur-holm", name: "Arthur Holm", logo: "/assets/partners/53.png", description: "Premium AV manufacturer specializing in motorized monitors, conference technology, and presentation systems.", website: "https://www.arthurholm.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },

{ slug: "ampled", name: "AMPLED", logo: "/assets/partners/54.png", description: "LED display solutions provider focused on digital visual communication and display technologies.", website: "https://www.ampled.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },

{ slug: "astrophysics", name: "Astrophysics", logo: "/assets/partners/55.png", description: "Manufacturer of X-ray screening and inspection systems for critical security environments.", website: "https://www.astrophysicsinc.com", solutionCategories: [SolutionCategory.XRAY_INSPECTION] },

{ slug: "auveo", name: "Auveo", logo: "/assets/partners/56.png", description: "Professional AV and communication technology solutions provider for enterprise environments.", website: "https://www.auveo.com", solutionCategories: [SolutionCategory.AUDIO_VISUAL] },

{ slug: "software-house", name: "Software House", logo: "/assets/partners/57.png", description: "Access control and security management systems brand delivering enterprise-grade security solutions.", website: "https://www.swhouse.com", solutionCategories: [SolutionCategory.ACCESS_CONTROL, SolutionCategory.INTEGRATED_SECURITY] },

{ slug: "kantech", name: "Kantech", logo: "/assets/partners/58.png", description: "Integrated access control technologies for commercial and enterprise security environments.", website: "https://www.kantech.com", solutionCategories: [SolutionCategory.ACCESS_CONTROL] },

{ slug: "kathrein", name: "Kathrein", logo: "/assets/partners/59.png", description: "Provider of communication, antenna, and connected infrastructure technologies.", website: "https://www.kathrein.com", solutionCategories: [SolutionCategory.LIGHT_CURRENT_ELV] },

];

export function getPartners(): Partner[] {
  return partners;
}

export function getPartnersByCategory(category: SolutionCategory): Partner[] {
  return partners.filter((p) => p.solutionCategories.includes(category));
}