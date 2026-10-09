export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

export const educationData: EducationItem = {
  institution: "M. Kumarasamy College of Engineering",
  degree: "B.E. — Electronics and Communication Engineering",
  duration: "2024–2028",
  cgpa: "7.67 / 10",
  location: "Karur, Tamil Nadu, India",
  highlights: [
    "Core curriculum focusing on Analog & Digital Circuits, Microcontrollers, and Signal Systems",
    "Active participant in collegiate hackathons, technical symposiums, and innovation bootcamps",
    "Club office-bearer and technical web developer for departmental symposiums"
  ]
};
