export type CertificateCategory =
  | "Hackathons"
  | "Workshops"
  | "Technical Training"
  | "Research"
  | "Other Certifications";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  year?: string;
  imagePath?: string;
  description?: string;
}

export const certificateCategories: CertificateCategory[] = [
  "Hackathons",
  "Workshops",
  "Technical Training",
  "Research",
  "Other Certifications"
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-sparkathon",
    title: "Special Prize Winner Certificate",
    issuer: "CIT College Sparkathon",
    category: "Hackathons",
    imagePath: "images/My Certificates/cit-sparkathon.jpg",
    description: "Certificate of excellence awarded for the Special Prize at CIT College Sparkathon."
  },
  {
    id: "cert-sih-internal",
    title: "Internal SIH Hackathon Winner Certificate",
    issuer: "Smart India Hackathon / MKCE",
    category: "Hackathons",
    year: "2025 & 2026",
    imagePath: "images/My Certificates/sih-hackathon.jpg",
    description: "Winner recognition certificate for internal collegiate Smart India Hackathon selections."
  },
  {
    id: "cert-gencraft",
    title: "GenCraft 2025 First Prize Certificate",
    issuer: "GenCraft Hackathon",
    category: "Hackathons",
    year: "2025",
    imagePath: "images/My Certificates/gencraft-2025.jpg",
    description: "First prize award certificate in internal technical project competition."
  },
  {
    id: "cert-seedling",
    title: "Seedling 2026 First Prize Certificate",
    issuer: "Seedling Hackathon",
    category: "Hackathons",
    year: "2026",
    imagePath: "images/My Certificates/seedling-2026.jpg",
    description: "First prize award certificate for innovation and hardware-software prototype."
  },
  {
    id: "cert-iit-madras",
    title: "IIT Madras Technical Workshop Certificate",
    issuer: "Indian Institute of Technology Madras",
    category: "Workshops",
    imagePath: "images/My Certificates/iit-madras-workshop.jpg",
    description: "Certificate of participation for completing advanced engineering immersion workshop."
  },
  {
    id: "cert-ide-bootcamp",
    title: "IDE Bootcamp Certificate",
    issuer: "Innovation, Design & Entrepreneurship (IDE)",
    category: "Technical Training",
    imagePath: "images/My Certificates/ide-bootcamp.jpg",
    description: "Certificate of completion for intensive product design and prototyping bootcamp, Edition 3."
  },
  {
    id: "cert-srishti-2026",
    title: "SRISHTI 2026 Symposium Certificate",
    issuer: "National Technical Symposium, Kerala",
    category: "Other Certifications",
    year: "2026",
    imagePath: "images/My Certificates/srishti-2026.jpg",
    description: "Certificate of participation in interstate engineering project showcase."
  }
];
