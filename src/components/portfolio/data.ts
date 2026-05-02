export type Project = {
  id: string;
  title: string;
  category: string;
  short: string;
  problem: string;
  solution: string;
  tech: string[];
  gradient: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: "cold-storage",
    title: "AI-Based Cold Storage System",
    category: "AgriTech · IoT",
    short:
      "Intelligent cold storage that predicts spoilage and auto-tunes temperature using sensor fusion and edge AI.",
    problem:
      "Smallholder farmers and food vendors lose up to 40% of perishables due to inconsistent cold storage and poor monitoring infrastructure.",
    solution:
      "Designed a sensor-rich storage unit with ESP32 controllers reading temperature, humidity, and gas emissions. An on-device TinyML model predicts spoilage risk and dynamically regulates compressor cycles, while a cloud dashboard alerts owners in real time.",
    tech: ["ESP32", "TinyML", "DHT22", "MQ-135", "Firebase", "C++"],
    gradient: "from-[oklch(0.88_0.18_180)] to-[oklch(0.78_0.16_230)]",
    icon: "❄️",
  },
  {
    id: "nut-picker",
    title: "AI Based Shear Nut Picker Robot",
    category: "Agricultural Robotics",
    short:
      "Autonomous field robot that identifies and collects nuts using computer vision and a robotic arm.",
    problem:
      "Manual harvesting of nuts is labor-intensive, slow, and economically unviable at scale for many farms.",
    solution:
      "Built a four-wheel autonomous rover with a Raspberry Pi running a YOLO-based vision model to detect nuts on the ground. A servo-driven arm picks and stores them, while ultrasonic sensors handle obstacle avoidance.",
    tech: ["Raspberry Pi", "YOLOv8", "OpenCV", "Servo Motors", "Python"],
    gradient: "from-[oklch(0.62_0.22_285)] to-[oklch(0.88_0.18_180)]",
    icon: "🤖",
  },
  {
    id: "smart-meter",
    title: "Smart Energy Meter",
    category: "Energy · IoT",
    short:
      "WiFi-enabled energy meter with real-time usage analytics and remote disconnect.",
    problem:
      "Households and SMEs lack visibility into per-appliance energy usage, leading to inflated bills and waste.",
    solution:
      "Engineered a current-sensing meter using PZEM-004T and ESP32. Real-time usage streams to a cloud dashboard with cost forecasting, and users can remotely disconnect loads via a web app.",
    tech: ["ESP32", "PZEM-004T", "MQTT", "React", "Node.js"],
    gradient: "from-[oklch(0.78_0.16_230)] to-[oklch(0.62_0.22_285)]",
    icon: "⚡",
  },
  {
    id: "tractor-tracker",
    title: "IoT Tractor Tracking Device",
    category: "Fleet · GPS",
    short:
      "GPS + GSM tracker for agricultural fleets with geofencing and theft alerts.",
    problem:
      "Tractors and farm equipment are frequently stolen or misused, with owners lacking real-time location data.",
    solution:
      "Compact device combining SIM800L GSM, NEO-6M GPS, and an STM32 controller. Streams location to a fleet dashboard, triggers SMS alerts on geofence breach, and supports remote ignition cut-off.",
    tech: ["STM32", "SIM800L", "NEO-6M GPS", "MQTT", "Mapbox"],
    gradient: "from-[oklch(0.88_0.18_180)] to-[oklch(0.62_0.22_285)]",
    icon: "🛰️",
  },
  {
    id: "incubator",
    title: "Smart Hybrid Incubator",
    category: "AgriTech",
    short:
      "Solar-assisted poultry incubator with automated turning and AI hatch prediction.",
    problem:
      "Power outages and manual egg turning lead to low hatch rates in rural poultry operations.",
    solution:
      "Hybrid solar + grid powered incubator with PID-controlled heating, automated egg-turning servos, and an ML model that predicts hatch success based on temperature/humidity history.",
    tech: ["Arduino Mega", "PID Control", "Solar MPPT", "Python", "TensorFlow Lite"],
    gradient: "from-[oklch(0.62_0.22_285)] to-[oklch(0.78_0.16_230)]",
    icon: "🥚",
  },
  {
    id: "crop-disease",
    title: "Yam and Maize Disease Detection Device",
    category: "Computer Vision · AgriTech",
    short:
      "Handheld field device that diagnoses plant diseases from leaf images instantly.",
    problem:
      "Farmers misdiagnose crop diseases, leading to wrong pesticide use and yield loss.",
    solution:
      "Pi-powered handheld unit with a camera module running a CNN trained on PlantVillage. Farmers point, scan, and receive instant diagnosis plus treatment recommendations — fully offline.",
    tech: ["Raspberry Pi 4", "TensorFlow Lite", "OpenCV", "CNN", "Python"],
    gradient: "from-[oklch(0.78_0.16_230)] to-[oklch(0.88_0.18_180)]",
    icon: "🌿",
  },
  {
    id: "follower-cart",
    title: "Autonomous Follower Cart",
    category: "Robotics",
    short:
      "Smart cart that follows its user using UWB tracking and obstacle avoidance.",
    problem:
      "Workers in warehouses, markets, and farms waste energy hauling carts manually across long distances.",
    solution:
      "Dual-motor cart with UWB tag tracking and LiDAR-based obstacle avoidance. Maintains a safe following distance and supports voice commands for stop/start.",
    tech: ["ESP32", "UWB DWM1000", "LiDAR", "BLDC Motors", "ROS"],
    gradient: "from-[oklch(0.88_0.18_180)] to-[oklch(0.78_0.16_230)]",
    icon: "🛒",
  },
  {
    id: "fertilizer-advisor",
    title: "AI Fertilizer Advisor System",
    category: "AgriTech · AI",
    short:
      "Soil-sensing device that recommends optimal fertilizer mix using on-device ML.",
    problem:
      "Over-fertilization damages soil and wastes money; under-fertilization reduces yields.",
    solution:
      "Probe-style device measuring NPK, pH, and moisture. An on-board ML model recommends precise fertilizer composition by crop type, with results pushed to a companion mobile app.",
    tech: ["ESP32", "NPK Sensor", "TinyML", "BLE", "Flutter"],
    gradient: "from-[oklch(0.62_0.22_285)] to-[oklch(0.88_0.18_180)]",
    icon: "🌾",
  },
  {
    id: "scarecrow",
    title: "Scarecrow IoT Crop Protection",
    category: "AgriTech · AI",
    short:
      "Solar-powered field protector using sensors and alarms to deter animals and intruders.",
    problem:
      "Crop losses from wildlife and theft are significant in rural farming operations.",
    solution:
      "Solar-powered field protector using sensors and alarms to deter animals and intruders.",
    tech: ["ESP32", "PIR Sensor", "Solar Panel", "GSM", "Arduino"],
    gradient: "from-[oklch(0.62_0.22_285)] to-[oklch(0.88_0.18_180)]",
    icon: "🛡️",
  },
  {
    id: "weeding-drone",
    title: "AI Groundnut Farm Weeding Drone",
    category: "AgriTech · AI",
    short:
      "Drone uses leaf detection to spray herbicide selectively, minimizing damage to crops.",
    problem:
      "Manual weeding is labor-intensive and herbicide overuse harms the environment.",
    solution:
      "Drone uses leaf detection to spray herbicide selectively, minimizing damage to crops.",
    tech: ["Raspberry Pi", "OpenCV", "YOLO", "Drone Kit", "Python"],
    gradient: "from-[oklch(0.62_0.22_285)] to-[oklch(0.88_0.18_180)]",
    icon: "🚁",
  },
];

export const services = [
  {
    title: "Embedded Systems Design",
    desc: "Designing and programming microcontroller-based systems using Arduino, ESP32, and Raspberry Pi to power smart and automated devices. ",
    icon: "🔌",
  },
  {
    title: "PCB & Circuit Design",
    desc: "Developing accurate circuit schematics and PCB layouts using tools like Proteus, KiCad, and EasyEDA to ensure performance and reliability.",
    icon: "🧩",
  },
  {
    title: "IoT Solutions",
    desc: "End-to-end IoT systems with sensor integration, cloud dashboards, and OTA updates.",
    icon: "📡",
  },
  {
    title: "Edge AI Deployment",
    desc: "TinyML and computer vision models deployed on resource-constrained devices.",
    icon: "🧠",
  },
  {
    title: "Prototyping & R&D",
    desc: "Rapid hardware prototyping for startups and research teams — from concept to working unit.",
    icon: "⚙️",
  },
  {
    title: "Technical Consulting",
    desc: "Architecture reviews, BOM optimization, and product strategy for hardware ventures.",
    icon: "💡",
  },
];

export const skills = [
  { name: "Embedded C/C++", level: 95 },
  { name: "Python", level: 90 },
  { name: "ESP32 / Arduino", level: 95 },
  { name: "Raspberry Pi", level: 90 },
  { name: "PCB Design (KiCad/EasyEDA)", level: 95 },
  { name: "IoT & Cloud Integration", level: 92 },
  { name: "Computer Vision (OpenCV)", level: 92 },
  { name: "TinyML / Edge AI", level: 90 },
];

export const experience = [
  {
    role: "Founder & Lead Hardware Engineer",
    org: "Esstronics",
    period: "2022 — Present",
    desc: "Designing and shipping intelligent hardware products across agriculture, energy, and automation verticals.",
  },
  {
    role: "Embedded Systems Consultant",
    org: "Independent",
    period: "2021 — Present",
    desc: "Delivering custom firmware, PCB designs, and IoT integrations for startups and research labs.",
  },
  {
    role: "IoT Developer",
    org: "AgriTech Initiatives",
    period: "2020 — 2022",
    desc: "Built sensor networks and cloud dashboards for precision farming pilots across West Africa.",
  },
];
