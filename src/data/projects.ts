export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  imagePaths: string[];
  featured: boolean;
  status: string;
  githubUrl: string | null;
  demoUrl: string | null;
  problemStatement?: string;
  solution?: string;
  workingPrinciple?: string;
  hardwareComponents?: string[];
  softwareComponents?: string[];
}

export const projectCategories = [
  "All Projects",
  "Embedded Systems",
  "IoT",
  "Healthcare Technology",
  "EV Technology",
  "Engineering Simulation",
  "Web Development",
  "Safety Systems",
] as const;

export const projectsData: Project[] = [
  {
    id: "neoguard",
    title: "NeoGuard — Smart Neonatal Monitoring & Thermal Care System",
    shortDescription: "A smart neonatal-care concept integrating continuous physiological monitoring and controlled thermal regulation to help prevent neonatal hypothermia.",
    fullDescription: "NeoGuard is an embedded healthcare engineering concept engineered to safeguard newborn infants from hypothermia and vital instability. By combining precision temperature sensors, photoplethysmography telemetry, and automated closed-loop thermal regulation, the system continuously tracks neonatal vitals and transmits telemetry to a clinical dashboard.",
    category: "Healthcare Technology",
    technologies: ["ESP32", "Temperature Sensing", "MAX30102", "Wi-Fi", "Firebase", "Web Dashboard", "Embedded Monitoring"],
    imagePaths: [
      "images/My Projects/neoguard/overview.jpg",
      "images/My Projects/neoguard/prototype.jpg"
    ],
    featured: true,
    status: "Concept & Prototyping",
    githubUrl: null,
    demoUrl: null,
    problemStatement: "Neonatal hypothermia is a leading contributor to infant mortality in underserved medical environments where continuous intensive care monitoring may be limited.",
    solution: "An integrated edge-monitored neonatal warming and telemetry system that provides reliable non-invasive vital measurement with automatic thermal stabilization.",
    workingPrinciple: "A dual-core ESP32 acquires skin temperature and blood oxygen/pulse telemetry from MAX30102 and high-accuracy thermal sensors. Real-time feedback triggers controlled warming pads while forwarding data via Wi-Fi to a web-based clinical dashboard.",
    hardwareComponents: ["ESP32 Microcontroller", "MAX30102 Sensor", "Digital Temperature Sensors", "Controlled Heating Element", "Power Regulation Circuitry"],
    softwareComponents: ["Embedded C / Arduino Firmware", "Firebase Realtime Database", "Web Dashboard UI"]
  },
  {
    id: "sentinel",
    title: "Sentinel — H₂S Exposure Dosimeter",
    shortDescription: "A passive colorimetric wristband concept for hazardous hydrogen sulfide exposure detection, backed by AI-based image analysis.",
    fullDescription: "Sentinel addresses the deadly invisible threat of hydrogen sulfide gas in industrial refineries, chemical plants, and sewage environments. It incorporates a wearable wristband with a sensitive chemical indicator film that undergoes a visible colorimetric shift upon H₂S exposure, enabling workers and safety supervisors to monitor cumulative toxic exposure.",
    category: "Safety Systems",
    technologies: ["Colorimetric Sensing", "Wearable Design", "Image Processing", "AI Analysis", "IoT Telemetry"],
    imagePaths: [
      "images/My Projects/sentinel/wristband.jpg",
      "images/My Projects/sentinel/analysis.jpg"
    ],
    featured: true,
    status: "Research & Prototyping",
    githubUrl: null,
    demoUrl: null,
    problemStatement: "Hydrogen sulfide (H₂S) deadens the human sense of smell at moderate concentrations, leading to worker incapacitation before standard ambient alarms detect localized pockets.",
    solution: "A wearable, lightweight personal dosimeter with optical colorimetric response that can be photographed and verified with AI image analysis for quantitative exposure logging.",
    workingPrinciple: "Chemical reagent immobilized on the dosimeter strip reacts specifically with ambient H₂S, shifting in chromaticity proportionate to gas parts-per-million (ppm) and duration. An image processing model quantifies the shift against calibrated optical curves."
  },
  {
    id: "bilifusion",
    title: "BiliFusion — Neonatal Phototherapy & Bilirubin Monitoring",
    shortDescription: "A neonatal-care concept combining targeted phototherapy treatment with non-invasive optical bilirubin monitoring for infant jaundice care.",
    fullDescription: "BiliFusion streamlines treatment for neonatal hyperbilirubinemia (jaundice) by integrating therapeutic blue-light narrowband phototherapy with transcutaneous optical sensing. This reduces the need for repeated, painful infant blood draws while providing continuous treatment efficacy feedback.",
    category: "Healthcare Technology",
    technologies: ["Phototherapy Arrays", "Optical Sensing", "Embedded Controller", "Medical Telemetry"],
    imagePaths: [
      "images/My Projects/bilifusion/system.jpg"
    ],
    featured: true,
    status: "Engineering Concept",
    githubUrl: null,
    demoUrl: null,
    problemStatement: "Traditional infant jaundice management requires periodic invasive heel-stick blood draws to check serum bilirubin levels, causing distress and delayed treatment adjustments.",
    solution: "Non-invasive optical reflectance measurement coupled to calibrated 450–470 nm narrow-band LED phototherapy to deliver real-time dosage optimization."
  },
  {
    id: "smart-railway-safety",
    title: "Smart Railway Edge Safety System",
    shortDescription: "A sensor-based edge computing system concept for railway platform edge monitoring and proactive human hazard detection.",
    fullDescription: "Designed to curb platform falls and perimeter breaches at passenger transit stations, this edge-sensing system monitors the platform hazard clearance zone using optical and ultrasonic sensor arrays, generating immediate visual-acoustic alerts and operator telemetry.",
    category: "IoT",
    technologies: ["Ultrasonic Sensors", "PIR Sensors", "Microcontroller Edge Node", "Alert Telemetry", "Industrial Signaling"],
    imagePaths: [
      "images/My Projects/smart-railway-safety/platform.jpg"
    ],
    featured: true,
    status: "Prototype Design",
    githubUrl: null,
    demoUrl: null,
    problemStatement: "Overcrowded train platforms experience accidental passenger falls onto active tracks, particularly during train ingress and departure.",
    solution: "A zoned edge sensor grid placed along the platform perimeter that detects unauthorized presence within the hazard zone and sounds targeted warnings before hazards escalate.",
    workingPrinciple: "Multiplexed edge sensors sample platform edge clearance. When a human crosses into the yellow demarcation line during train approach, the local controller activates directional strobes and sends safety flags to station signaling."
  },
  {
    id: "smart-bms",
    title: "Smart Battery Management System",
    shortDescription: "An EV battery-management concept focused on identifying weak cells through internal-resistance variation and isolating faulty cells to maintain load operation.",
    fullDescription: "A fault-tolerant EV battery management architecture centered around active cell diagnostics. By constantly computing dynamic internal resistance and voltage sag during discharge cycles, the system predicts cell failure and electrically isolates degraded cells via solid-state switching matrices while preserving continuous drive power.",
    category: "EV Technology",
    technologies: ["ESP32 / Embedded Controller", "Internal Resistance Computation", "MOSFET Isolation Matrix", "CAN Bus", "Cell Telemetry"],
    imagePaths: [
      "images/My Projects/smart-bms/schematic.jpg"
    ],
    featured: true,
    status: "Architecture & Simulation",
    githubUrl: null,
    demoUrl: null,
    problemStatement: "A single defective or thermal-runaway-prone cell in a high-voltage EV battery pack can cause catastrophic entire-pack shutdown or fire hazards.",
    solution: "Continuous per-cell internal resistance profiling with autonomous bypass routing, following the operational paradigm: Measure → Calculate → Compare → Isolate → Continue.",
    workingPrinciple: "Precision ADCs monitor per-cell current discharge and instantaneous voltage drop to extract dynamic ESR (Equivalent Series Resistance). Cells exceeding safe impedance thresholds are triggered for isolation through bypass MOSFET switches."
  },
  {
    id: "gobardhan",
    title: "GOBARdhan — IoT Biogas Monitoring",
    shortDescription: "An IoT-based system for continuous monitoring of anaerobic biogas production rates and digester slurry conditions.",
    fullDescription: "GOBARdhan introduces smart agricultural telemetry to rural and community biogas plants. By sensing internal digester pressure, pH, methane concentration, and slurry temperature, plant operators receive proactive maintenance guidance to maintain optimal anaerobic digestion.",
    category: "IoT",
    technologies: ["IoT Telemetry", "Gas Sensors", "pH Sensor", "Slurry Temperature Sensing", "Cloud Dashboard"],
    imagePaths: [
      "images/My Projects/gobardhan/digester.jpg"
    ],
    featured: false,
    status: "Concept & Prototyping",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "groundguard",
    title: "GroundGuard — Low-Voltage Conductor Failure Detection",
    shortDescription: "An IoT and intelligent-monitoring concept intended to detect hazardous conditions associated with low-voltage overhead conductor snaps.",
    fullDescription: "GroundGuard is designed to detect fallen live overhead distribution cables. When low-voltage conductors snap and touch the ground without causing high short-circuit currents, traditional circuit breakers often fail to trip. GroundGuard identifies phase impedance imbalance and ground leakage instantaneously.",
    category: "Safety Systems",
    technologies: ["Phase Imbalance Detection", "Current Transformers", "IoT Gateway", "Grid Safety"],
    imagePaths: [
      "images/My Projects/groundguard/sensor.jpg"
    ],
    featured: false,
    status: "Design Phase",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "fenceora",
    title: "Fenceora — Hazardous-Voltage Detection in Electric Fences",
    shortDescription: "An IoT device concept for continuous hazardous-voltage monitoring and insulation breakdown detection in agricultural electric fences.",
    fullDescription: "Fenceora verifies the electrical integrity and safety of perimeter security and agricultural energizer fences. It detects voltage leakages, unintended short-circuits caused by overgrown foliage, and illegal lethal over-voltage tampering.",
    category: "Embedded Systems",
    technologies: ["Pulsed HV Sensing", "Voltage Divider Network", "Microcontroller", "Alert Notification"],
    imagePaths: [
      "images/My Projects/fenceora/unit.jpg"
    ],
    featured: false,
    status: "Concept Development",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "lifebeep",
    title: "LifeBeep — IC 741 Wearable Emergency Sound Alert",
    shortDescription: "An analog IC 741 operational amplifier-based wearable concept for emergency siren detection and vibrotactile sensory alerts for the hearing-impaired.",
    fullDescription: "LifeBeep is an assistive analog electronic wearable tailored for hearing-impaired individuals. Built around the classic LM741 operational amplifier comparator and electret microphone filter stage, it isolates high-frequency emergency siren signatures and activates a haptic vibration motor.",
    category: "Embedded Systems",
    technologies: ["IC 741 Op-Amp", "Analog Signal Conditioning", "Bandpass Filter", "Vibration Motor", "Wearable PCB"],
    imagePaths: [
      "images/My Projects/lifebeep/circuit.jpg"
    ],
    featured: false,
    status: "Hardware Prototyping",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "ev-energy-recovery",
    title: "EV Energy Recovery Simulation",
    shortDescription: "Computational modeling and simulation of electric vehicle kinetic energy recovery and regenerative braking efficiency.",
    fullDescription: "A MATLAB/Simulink engineering simulation analyzing the mechanical-to-electrical energy recapture ratio during city driving drive-cycles. The model assesses motor-generator back-EMF, battery charge acceptance rates, and braking torque blending.",
    category: "Engineering Simulation",
    technologies: ["MATLAB", "Simulink", "EV Powertrain Modeling", "Regenerative Braking"],
    imagePaths: [
      "images/My Projects/ev-energy-recovery/simulation.jpg"
    ],
    featured: false,
    status: "Simulation Completed",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "hfss-antenna",
    title: "ANSYS HFSS 5.8 GHz Microstrip Patch Antenna",
    shortDescription: "Design, parametric modeling, and return-loss simulation of a 5.8 GHz microstrip patch antenna for ISM/WLAN communication.",
    fullDescription: "Electromagnetic wave simulation created in ANSYS HFSS to design a 5.8 GHz inset-fed rectangular microstrip patch antenna on FR-4 dielectric substrate. Evaluated radiation pattern, gain, directivity, and S11 return-loss resonance.",
    category: "Engineering Simulation",
    technologies: ["ANSYS HFSS", "Electromagnetic Modeling", "Microstrip RF", "S-Parameter Analysis"],
    imagePaths: [
      "images/My Projects/hfss-antenna/radiation-pattern.jpg"
    ],
    featured: false,
    status: "Simulation Validated",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "h2s-dashboard",
    title: "H₂S Monitoring & Worker Safety Dashboard",
    shortDescription: "A web-dashboard concept for industrial worker registration, QR-based identification, toxic gas exposure history, and administrative analytics.",
    fullDescription: "A management portal engineered to integrate with the Sentinel dosimeter and plant gas sensors. Enables safety supervisors to scan worker identification, log periodic dosimeter colorimetry measurements, and track compliance against occupational safety thresholds.",
    category: "Web Development",
    technologies: ["HTML5", "CSS3", "JavaScript", "QR Code Scanner", "Telemetry UI"],
    imagePaths: [
      "images/My Projects/sentinel/dashboard.jpg"
    ],
    featured: false,
    status: "Frontend Concept",
    githubUrl: null,
    demoUrl: null
  },
  // Additional projects with editable entries
  {
    id: "visitor-management",
    title: "Visitor Management System",
    shortDescription: "A digital check-in and visitor verification platform for educational and corporate premises.",
    fullDescription: "A web-based record management system designed to log entry/exit stamps, print visitor passes, and maintain searchable visitor logs.",
    category: "Web Development",
    technologies: ["JavaScript", "HTML", "CSS", "Frontend Architecture"],
    imagePaths: ["images/My Projects/other-projects/visitor-mgmt.jpg"],
    featured: false,
    status: "Developed",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "school-management",
    title: "School Management System",
    shortDescription: "An administrative web interface for student records, academic scheduling, and departmental coordination.",
    fullDescription: "Modular portal interface providing structured views for student profiles, course enrollment, and faculty directory management.",
    category: "Web Development",
    technologies: ["Frontend Development", "JavaScript", "Responsive UI"],
    imagePaths: ["images/My Projects/other-projects/school-mgmt.jpg"],
    featured: false,
    status: "Developed",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "sign-language-converter",
    title: "Sign Language Converter",
    shortDescription: "An assistive technology concept mapping hand gesture inputs to textual or audio translations.",
    fullDescription: "A prototype exploring flex sensor inputs and gesture recognition algorithms to bridge communication for deaf and non-verbal individuals.",
    category: "Embedded Systems",
    technologies: ["Sensor Integration", "Microcontroller", "Pattern Matching"],
    imagePaths: ["images/My Projects/other-projects/sign-language.jpg"],
    featured: false,
    status: "Concept Exploration",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "scientific-calculator",
    title: "Scientific Calculator",
    shortDescription: "An interactive computational calculator supporting trigonometric, logarithmic, and engineering functions.",
    fullDescription: "A cleanly designed mathematical utility implementing expression evaluation, floating-point precision, and memory registers.",
    category: "Web Development",
    technologies: ["JavaScript", "Mathematical Algorithms", "CSS"],
    imagePaths: ["images/My Projects/other-projects/calculator.jpg"],
    featured: false,
    status: "Completed",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "flood-flow-algorithm",
    title: "Flood Flow Algorithm",
    shortDescription: "Algorithmic simulation modeling water discharge flow rates and flood inundation vectors.",
    fullDescription: "Simulation study evaluating flow dynamics and topographical runoff gradients to assess flood warning thresholds.",
    category: "Engineering Simulation",
    technologies: ["Python", "Mathematical Simulation", "Data Analysis"],
    imagePaths: ["images/My Projects/other-projects/flood-flow.jpg"],
    featured: false,
    status: "Exploratory Study",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "bank-management",
    title: "Bank Management System",
    shortDescription: "A software application for account ledger tracking, transaction logging, and balance validation.",
    fullDescription: "Structured core banking workflow simulation demonstrating account creation, deposit/withdrawal authorization, and interest calculation.",
    category: "Web Development",
    technologies: ["Programming", "Logic Flow", "User Interface"],
    imagePaths: ["images/My Projects/other-projects/bank-mgmt.jpg"],
    featured: false,
    status: "Completed",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "automotive-smoke-detection",
    title: "Automotive Smoke Detection System",
    shortDescription: "An in-cabin and engine bay gas sensing module designed for rapid vehicle fire hazard detection.",
    fullDescription: "Embedded sensor safety system detecting particulate smoke and volatile combustible gases inside automotive compartments with audible warnings.",
    category: "Safety Systems",
    technologies: ["MQ Gas Sensor", "Microcontroller", "Buzzer Alert Circuit"],
    imagePaths: ["images/My Projects/other-projects/smoke-detection.jpg"],
    featured: false,
    status: "Prototype Tested",
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "smart-door-monitoring",
    title: "Smart Door Monitoring Dashboard",
    shortDescription: "An IoT access control interface displaying live door status, entry logs, and remote lock telemetry.",
    fullDescription: "A browser-based real-time dashboard interfacing with magnetic contact sensors and edge microcontrollers to monitor facility ingress points.",
    category: "IoT",
    technologies: ["IoT", "Web Dashboard", "Sensor Telemetry"],
    imagePaths: ["images/My Projects/other-projects/door-monitoring.jpg"],
    featured: false,
    status: "Functional Prototype",
    githubUrl: null,
    demoUrl: null
  }
];
