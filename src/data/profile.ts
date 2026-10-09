export interface FocusArea {
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  brand: string;
  titles: string[];
  primaryTitle: string;
  secondaryTitle: string;
  shortBio: string;
  aboutText: string;
  location: string;
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    instagram: string;
    existingPortfolio: string;
  };
  focusAreas: FocusArea[];
  areasOfInterest: string[];
  professionalStrengths: string[];
  languages: { language: string; proficiency: string }[];
  images: {
    primary: string;
    about: string;
    secondary: string;
  };
  resumeUrl: string;
}

export const profileData: ProfileData = {
  name: "Harish Pranav S",
  brand: "HARISH PRANAV S",
  titles: [
    "Electronics & Communication Engineering Student",
    "Embedded Systems & IoT Enthusiast",
    "Engineering Project Developer",
    "Frontend Website Developer",
    "Technical Event Organizer"
  ],
  primaryTitle: "Electronics & Communication Engineering Student",
  secondaryTitle: "Embedded Systems & IoT Enthusiast",
  shortBio:
    "I am an Electronics and Communication Engineering student interested in building practical engineering solutions through embedded systems, IoT, electronics, simulation, and software development. I enjoy exploring technical problems, developing prototypes, working across hardware and software, and collaborating on innovative engineering projects.",
  aboutText:
    "I am pursuing a B.E. in Electronics and Communication Engineering at M. Kumarasamy College of Engineering, Karur. My interests span embedded systems, IoT, sensor integration, EV technology, engineering simulation, healthcare technology, antenna design, and frontend development. Through academic projects, technical competitions, and event coordination, I have explored ways to combine electronics, software, and practical problem-solving. I also enjoy collaborating with teams, developing technical event websites, and contributing to student innovation initiatives.",
  location: "Karur, Tamil Nadu, India",
  institution: "M. Kumarasamy College of Engineering, Karur",
  degree: "B.E. — Electronics and Communication Engineering",
  duration: "2024–2028",
  cgpa: "7.67 / 10",
  contact: {
    email: "harishpranavs259@gmail.com",
    phone: "+91 7845693765",
    github: "https://github.com/hyprpranav",
    linkedin: "https://www.linkedin.com/in/harish-pranav-s-030756364",
    instagram: "https://instagram.com/p_r_a_n_a_v.kvg",
    existingPortfolio: "https://hyprpanav.vercel.app",
  },
  focusAreas: [
    {
      title: "Electronics Engineering",
      description: "Circuit analysis, analog signal processing, operational amplifier conditioning, and RF patch antenna simulation.",
    },
    {
      title: "Embedded Systems & IoT",
      description: "Microcontroller architecture (ESP32/Arduino), industrial bus protocols (I²C, SPI, UART, RS-485), and sensor telemetry.",
    },
    {
      title: "Engineering Innovation",
      description: "Developing rapid hardware-software prototypes across neonatal healthcare, EV battery safety, and industrial monitoring.",
    },
    {
      title: "Technical Leadership",
      description: "Spearheading hackathon event coordination, designing dedicated competition web platforms, and student club management.",
    },
  ],
  areasOfInterest: [
    "Embedded Systems",
    "Internet of Things",
    "EV Technology",
    "AI and Machine Learning",
    "Sensor Systems",
    "Antenna and RF Engineering",
    "Engineering Simulation",
    "Healthcare Technology",
    "Sustainable Engineering",
    "HyperLoop",
  ],
  professionalStrengths: [
    "Creative Leadership",
    "Team Management",
    "Event Management",
    "Technical Communication",
    "Problem Solving",
    "Project Coordination",
    "Rapid Prototyping",
    "Innovation",
  ],
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Tamil", proficiency: "Fluent" },
  ],
  images: {
    primary: "images/My Essentials/profile.jpg",
    about: "images/My Essentials/profile-about.jpg",
    secondary: "images/My Essentials/profile-secondary.jpg",
  },
  resumeUrl: "/resume.pdf",
};
