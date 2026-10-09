export type AchievementType = "Award" | "Selection" | "Participation";

export interface Achievement {
  id: string;
  title: string;
  category: AchievementType;
  organization: string;
  description: string;
  year?: string;
  certificateImagePath?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "cit-sparkathon",
    title: "CIT College Sparkathon",
    category: "Award",
    organization: "Coimbatore Institute of Technology",
    description: "Special Prize Winner for technical engineering innovation and hardware solution prototype.",
    certificateImagePath: "images/My Achievements/cit-sparkathon.jpg"
  },
  {
    id: "sih-internal",
    title: "Internal SIH Hackathon (Smart India Hackathon)",
    category: "Award",
    organization: "M. Kumarasamy College of Engineering",
    description: "Winner across two consecutive editions (2025 & 2026) for practical problem-solving prototypes.",
    year: "2025 & 2026",
    certificateImagePath: "images/My Achievements/sih-hackathon.jpg"
  },
  {
    id: "gencraft-2025",
    title: "GenCraft 2025 — Internal Hackathon",
    category: "Award",
    organization: "M. Kumarasamy College of Engineering",
    description: "First Prize Winner in internal technical development hackathon.",
    year: "2025",
    certificateImagePath: "images/My Achievements/gencraft-2025.jpg"
  },
  {
    id: "seedling-2026",
    title: "Seedling 2026 — Internal Hackathon",
    category: "Award",
    organization: "M. Kumarasamy College of Engineering",
    description: "First Prize Winner for multidisciplinary engineering ideation and project execution.",
    year: "2026",
    certificateImagePath: "images/My Achievements/seedling-2026.jpg"
  },
  {
    id: "yi-mudhal-padi",
    title: "Yi Mudhal Padi 2.0",
    category: "Selection",
    organization: "Young Indians (Yi) Confederation of Indian Industry",
    description: "Selected as Top Participant representing Karur district in leadership and youth innovation.",
    certificateImagePath: "images/My Achievements/yi-mudhal-padi.jpg"
  },
  {
    id: "emerging-tech-hackathon",
    title: "Emerging Technologies Hackathon",
    category: "Selection",
    organization: "Technical Innovation Forum",
    description: "Qualified and advanced through competitive rounds up to Round 3.",
    certificateImagePath: "images/My Achievements/emerging-tech.jpg"
  },
  {
    id: "ide-bootcamp",
    title: "IDE Bootcamp — Edition 3, Phase 1",
    category: "Selection",
    organization: "Innovation, Design & Entrepreneurship (IDE)",
    description: "Selected and participated in intensive hands-on product design and entrepreneurship bootcamp.",
    certificateImagePath: "images/My Achievements/ide-bootcamp.jpg"
  },
  {
    id: "iit-madras-workshop",
    title: "Workshop at IIT Madras",
    category: "Participation",
    organization: "Indian Institute of Technology Madras",
    description: "Attended and completed specialized technical training and engineering immersion workshop.",
    certificateImagePath: "images/My Achievements/iit-madras.jpg"
  },
  {
    id: "srishti-2026",
    title: "SRISHTI 2026, Kerala",
    category: "Participation",
    organization: "National Technical Symposium, Kerala",
    description: "Participated and demonstrated engineering project concepts at the interstate symposium.",
    year: "2026",
    certificateImagePath: "images/My Achievements/srishti-2026.jpg"
  },
  {
    id: "rathinam-cih",
    title: "Rathinam College CIH Hackathon",
    category: "Participation",
    organization: "Rathinam College of Arts and Science",
    description: "Competed in collaborative coding and embedded project development challenges.",
    certificateImagePath: "images/My Achievements/rathinam-cih.jpg"
  },
  {
    id: "kongu-hackathon",
    title: "Kongu Engineering Hackathon",
    category: "Participation",
    organization: "Kongu Engineering College",
    description: "Participated in university-level technical engineering hackathon.",
    certificateImagePath: "images/My Achievements/kongu-hackathon.jpg"
  },
  {
    id: "kpr-hackathon",
    title: "KPR Hackathon",
    category: "Participation",
    organization: "KPR Institute of Engineering and Technology",
    description: "Participated in inter-college hardware and software engineering hackathon.",
    certificateImagePath: "images/My Achievements/kpr-hackathon.jpg"
  }
];
