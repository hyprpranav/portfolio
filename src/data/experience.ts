export interface ExperienceItem {
  id: string;
  role: string;
  eventName: string;
  type: "Technical Event & Web Development" | "Student Leadership";
  contribution: string;
  year?: string;
  websiteUrl?: string | null;
  imagePath?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "medha-26",
    role: "Technical Coordinator & Web Developer",
    eventName: "MEDHA’26 Hackathon",
    type: "Technical Event & Web Development",
    contribution: "Spearheaded technical event coordination, managed participant flow, and built the official responsive event platform.",
    year: "2026",
    websiteUrl: null,
    imagePath: "images/My Events/medha-26.jpg"
  },
  {
    id: "nirmavora-2k26",
    role: "Event Coordinator & Web Developer",
    eventName: "NIRMAVORA 2K26",
    type: "Technical Event & Web Development",
    contribution: "Coordinated technical event rounds, planned track logistics, and developed the web interface for registrations.",
    year: "2026",
    websiteUrl: null,
    imagePath: "images/My Events/nirmavora-2k26.jpg"
  },
  {
    id: "entrepix",
    role: "Event Coordinator & Web Developer",
    eventName: "ENTREPIX — Where Ideas Ignite",
    type: "Technical Event & Web Development",
    contribution: "Executed event coordination and engineered the landing website showcase for pitching sessions and participant registration.",
    websiteUrl: null,
    imagePath: "images/My Events/entrepix.jpg"
  },
  {
    id: "forgia-2k26",
    role: "Event Coordinator & Web Developer",
    eventName: "FORGIA 2K26",
    type: "Technical Event & Web Development",
    contribution: "Handled end-to-end technical coordination and built the event website to display track guidelines, problem statements, and schedules.",
    year: "2026",
    websiteUrl: null,
    imagePath: "images/My Events/forgia-2k26.jpg"
  },
  {
    id: "multiverse",
    role: "Event Coordinator (Office-Bearer Team)",
    eventName: "MULTIVERSE",
    type: "Technical Event & Web Development",
    contribution: "Coordinated inter-departmental technical and creative competitions as part of the core Aaroh Club office-bearer committee.",
    websiteUrl: null,
    imagePath: "images/My Events/multiverse.jpg"
  },
  {
    id: "ici-treasurer",
    role: "Treasurer",
    eventName: "ICI Sustainable Engineers Club",
    type: "Student Leadership",
    contribution: "Managing financial allocation, budgeting student technical projects, and orchestrating sustainability-focused engineering workshops.",
    websiteUrl: null,
    imagePath: "images/My Events/ici-club.jpg"
  },
  {
    id: "iete-aaroh-member",
    role: "Active Member",
    eventName: "IETE & Aaroh Student Club",
    type: "Student Leadership",
    contribution: "Actively contributing to electronics seminars, peer technical mentorship, community events, and embedded design initiatives.",
    websiteUrl: null,
    imagePath: "images/My Events/iete-aaroh.jpg"
  }
];
