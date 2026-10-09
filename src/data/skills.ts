export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "embedded-iot",
    name: "Embedded Systems & IoT",
    description: "Hardware microcontrollers, sensor acquisition, and embedded communication buses",
    skills: [
      { name: "ESP32", description: "Dual-core Wi-Fi/BLE SoC", highlight: true },
      { name: "Arduino", description: "Prototyping & AVR architecture", highlight: true },
      { name: "Sensor Interfacing", description: "Analog & digital sensor signal conditioning" },
      { name: "Data Acquisition", description: "ADC sampling, calibration, and filtering" },
      { name: "UART", description: "Serial communication & debugging" },
      { name: "I²C", description: "Multi-device two-wire bus" },
      { name: "SPI", description: "High-speed synchronous peripherals" },
      { name: "RS-485", description: "Differential long-range industrial communication" },
      { name: "IoT Systems", description: "Cloud telemetry, MQTT/HTTP, edge monitoring", highlight: true },
    ],
  },
  {
    id: "programming",
    name: "Programming",
    description: "Core programming languages for firmware, scripting, and application logic",
    skills: [
      { name: "C", description: "Low-level system programming & memory management", highlight: true },
      { name: "Embedded C", description: "Register-level micro-controller firmware", highlight: true },
      { name: "Python", description: "Data analysis, automation, and algorithm prototyping", highlight: true },
      { name: "Java", description: "Object-oriented software development & algorithms" },
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Frontend web engineering for technical event platforms and dashboards",
    skills: [
      { name: "HTML", description: "Semantic markup & modern web structure" },
      { name: "CSS", description: "Responsive layouts, Flexbox, Grid, & animations", highlight: true },
      { name: "JavaScript", description: "Interactive client-side web application logic", highlight: true },
    ],
  },
  {
    id: "simulation",
    name: "Simulation & Engineering",
    description: "Computational simulation, RF modeling, HDL synthesis, and 3D CAD",
    skills: [
      { name: "MATLAB", description: "Numerical computing, matrix mathematics, & EV simulation", highlight: true },
      { name: "ANSYS", description: "High-frequency electromagnetic simulation & HFSS", highlight: true },
      { name: "Vivado", description: "FPGA design synthesis & hardware description" },
      { name: "SolidWorks", description: "3D mechanical design & enclosure modeling" },
      { name: "Blender", description: "3D visualization & spatial asset rendering" },
    ],
  },
  {
    id: "tools",
    name: "Development Tools",
    description: "Version control, IDEs, cloud environments, and digital design tools",
    skills: [
      { name: "Git", description: "Distributed version control system" },
      { name: "GitHub", description: "Source code repository & collaborative workflows", highlight: true },
      { name: "Visual Studio Code", description: "Primary IDE for software & frontend development" },
      { name: "Google Colab", description: "Cloud-hosted Jupyter notebook execution" },
      { name: "Arduino IDE", description: "Firmware flashing & serial monitor analysis" },
      { name: "Canva", description: "Technical visual design & event branding assets" },
    ],
  },
];
