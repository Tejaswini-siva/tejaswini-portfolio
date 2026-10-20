/**
 * S. Tejaswini - Projects Data Model
 * Modular and easily extensible.
 * To add a new project, simply copy an object structure and append to the array.
 * Note: If githubUrl or liveDemoUrl is empty string or null, the UI handles it gracefully.
 */

export const projectCategories = [
  "All",
  "Business & Strategy",
  "IoT & Embedded",
  "AI & Computer Vision"
];

export const projectsData = [
  {
    id: "lidars-disaster-response",
    title: "L.I.D.A.R.S – Disaster Alert & Response System",
    category: "IoT & Embedded",
    isFeatured: true,
    tagline: "IoT-powered early disaster detection & automated emergency coordination protocol",
    shortDescription:
      "Engineered an IoT-based disaster monitoring system detecting fire, flood, and seismic tremors with instant GSM alerts and a centralized command web dashboard.",
    fullDescription:
      "L.I.D.A.R.S (Lives Saved through Disaster Alert and Response System) was conceptualized to eliminate life-threatening communication delays during natural calamities. By combining multi-sensor hardware (temperature, water-level, seismic vibration) with real-time GSM telemetry and a responsive command dashboard, the system provides automated triage alerts to emergency teams before infrastructure collapses.",
    businessAndAnalyticalValue:
      "From a Business Analyst perspective, conducted stakeholder impact mapping with disaster response workflows. Designed the AS-IS emergency dispatch latency analysis and structured the TO-BE automated notification protocol, reducing projected emergency notification response times from minutes to under 5 seconds.",
    technologies: ["ESP32", "Arduino", "GSM Module", "IoT Telemetry", "Web Dashboard", "Sensors (Fire, Flood, Seismic)"],
    metrics: [
      { label: "Notification Latency", value: "< 5s" },
      { label: "Hazard Modalities", value: "Fire, Flood, Seismic" },
      { label: "Dispatch Architecture", value: "GSM & Cloud" }
    ],
    githubUrl: "https://github.com/Tejaswini-siva/LIDARS-Disaster-Alert-System",
    liveDemoUrl: null,
    featuredImage: "lidars",
    date: "2025"
  },
  {
    id: "aqua-vision-marine-ai",
    title: "AQUA-VISION – AI-Based Underwater Monitoring",
    category: "AI & Computer Vision",
    isFeatured: true,
    tagline: "Real-time marine object detection & debris tracking with 90% accuracy",
    shortDescription:
      "Built an AI-powered underwater monitoring platform using YOLOv8n and OpenCV for marine life and pollution classification with CLAHE image enhancement.",
    fullDescription:
      "Subsea vision suffers from heavy light attenuation and turbidity. AQUA-VISION integrates Contrast Limited Adaptive Histogram Equalization (CLAHE) with custom YOLOv8n object detection to classify marine organisms, plastic debris, and pollutants across live webcam feeds, video captures, and high-resolution still images.",
    businessAndAnalyticalValue:
      "Structured product requirements for environmental monitoring agencies. Formulated benchmark evaluation KPIs (Precision, Recall, mAP@0.5) and designed an intuitive web analytics view for marine researchers to review pollution trends without needing machine learning expertise.",
    technologies: ["Python", "YOLOv8n", "OpenCV", "CLAHE Enhancement", "Deep Learning", "Streamlit / Analytics"],
    metrics: [
      { label: "Detection Accuracy", value: "~90%" },
      { label: "Input Feeds", value: "Webcam, Video, Stills" },
      { label: "Enhancement", value: "CLAHE Algorithm" }
    ],
    githubUrl: "https://github.com/Tejaswini-siva/Aqua-Vision-Underwater-AI",
    liveDemoUrl: null,
    featuredImage: "aquavision",
    date: "2025"
  },
  {
    id: "kosmo-one-turnaround-optimization",
    title: "Operations Turnaround & Bottleneck Optimization",
    category: "Business & Strategy",
    isFeatured: true,
    tagline: "Business process re-engineering achieving 30% reduction in service turnaround time",
    shortDescription:
      "Led end-to-end operational diagnostic study at Kosmo One, isolating critical workflow bottlenecks through data analytics and restructuring handoffs.",
    fullDescription:
      "During my tenure as Operations Management Intern at Kosmo One, operational execution was hampered by redundant inter-department approval steps and fragmented data logging. Through rigorous data gathering and time-motion studies, I mapped the complete operational lifecycle to pinpoint delays.",
    businessAndAnalyticalValue:
      "Authored process flow documentation (AS-IS vs. TO-BE), applied root cause analysis (5-Whys and Fishbone diagramming), and built unified tracking matrices that streamlined cross-functional collaboration and permanently sliced service turnaround time by 30%.",
    technologies: ["Process Mapping", "Root Cause Analysis", "Workflow Optimization", "Data Analytics", "Cross-Functional Management"],
    metrics: [
      { label: "Turnaround Time Slashed", value: "-30%" },
      { label: "Process Steps Streamlined", value: "Cross-Functional" },
      { label: "Focus", value: "Operational Efficiency" }
    ],
    githubUrl: "", // Available on request / portfolio documentation
    liveDemoUrl: null,
    featuredImage: "kosmo",
    date: "2026"
  },
  {
    id: "lobes-gtm-product-strategy",
    title: "Go-To-Market & UX Flow Optimization Blueprint",
    category: "Business & Strategy",
    isFeatured: true,
    tagline: "Market research & user journey redesign driving 40% surge in project engagement",
    shortDescription:
      "Conducted comprehensive GTM research, user persona segmentation, and wireframe flow redesign for LOBES, boosting customer engagement by 40%.",
    fullDescription:
      "At LOBES, I drove growth and product strategy initiatives by analyzing customer touchpoints and market positioning. Interfacing with magazine publishing partners and early adopters, I synthesized qualitative feedback into high-impact product roadmap requirements.",
    businessAndAnalyticalValue:
      "Mapped user journeys to eliminate friction during navigation and on-boarding. Developed wireframes and structured content hierarchies that directly elevated digital engagement and operational partner alignment by 40%.",
    technologies: ["GTM Strategy", "User Journey Mapping", "UI/UX Planning", "Customer Research", "Product Analytics"],
    metrics: [
      { label: "Engagement Boost", value: "+40%" },
      { label: "Stakeholders Aligned", value: "Media & Magazine Partners" },
      { label: "Deliverables", value: "GTM Deck & Flow Wireframes" }
    ],
    githubUrl: "",
    liveDemoUrl: null,
    featuredImage: "lobes",
    date: "2026"
  },
  {
    id: "pcdb-pipeline-crack-detection",
    title: "PCDB – Pipeline Crack Detection Inspection Bot",
    category: "IoT & Embedded",
    isFeatured: false,
    tagline: "ESP32 ultrasonic autonomous pipeline inspection bot with cloud telemetry",
    shortDescription:
      "Engineered an ESP32-based ultrasonic crawler bot designed for automated industrial pipeline inspection and instant cloud alert transmission.",
    fullDescription:
      "Industrial pipelines in hazardous environments are difficult and dangerous for human inspection. PCDB navigates confined cylindrical conduits using motorized locomotion and high-frequency ultrasonic transducers to detect internal fissures, weld degradation, and structural stress cracks.",
    businessAndAnalyticalValue:
      "Eliminates expensive downtime and hazardous manual inspection labor. Designed remote dashboard alerts for maintenance engineers to receive precise linear distance coordinates of defects in real time.",
    technologies: ["ESP32", "Ultrasonic Transducers", "IoT Cloud Telemetry", "Embedded C", "Robotics Hardware"],
    metrics: [
      { label: "Inspection Mode", value: "Autonomous Internal Crawler" },
      { label: "Alert Dispatch", value: "Instant Cloud Notification" }
    ],
    githubUrl: "https://github.com/Tejaswini-siva/PCDB-Pipeline-Crack-Detection-Bot",
    liveDemoUrl: null,
    featuredImage: "pcdb",
    date: "2025"
  },
  {
    id: "aerosense-air-quality-system",
    title: "AEROSENSE – Smart Air Quality Monitoring System",
    category: "IoT & Embedded",
    isFeatured: false,
    tagline: "Real-time atmospheric telemetry with multi-gas sensing and OLED alerts",
    shortDescription:
      "Built an Arduino-based environmental telemetry unit tracking gas concentrations, temperature, and humidity with instant OLED visual feedback.",
    fullDescription:
      "AEROSENSE monitors localized air pollution, harmful smoke, and combustible gas levels. Leveraging calibrated MQ2 and DHT11 sensor clusters with an onboard OLED screen, it flags hazardous environmental thresholds before dangerous gas accumulations occur.",
    businessAndAnalyticalValue:
      "Designed for occupational health and safety compliance in manufacturing and laboratory environments, providing low-cost continuous environmental auditing without costly legacy instrumentation.",
    technologies: ["Arduino", "MQ2 Gas Sensor", "DHT11 Temp & Humidity", "OLED Display", "Embedded C"],
    metrics: [
      { label: "Parameters Monitored", value: "Smoke, Gas, Temp, Humidity" },
      { label: "Display", value: "Real-time I2C OLED" }
    ],
    githubUrl: "https://github.com/Tejaswini-siva/AeroSense-Air-Quality-Monitor",
    liveDemoUrl: null,
    featuredImage: "aerosense",
    date: "2024"
  },
  {
    id: "yolo-classroom-phone-detection",
    title: "AI-Based Mobile Phone Detection System Using YOLO",
    category: "AI & Computer Vision",
    isFeatured: false,
    tagline: "Automated examination and classroom surveillance using deep learning object detection",
    shortDescription:
      "Developed a real-time computer vision system using YOLO and OpenCV to detect unauthorized mobile phone usage in academic test environments.",
    fullDescription:
      "Deployed deep learning object detection models on edge video streams to identify mobile devices under varying illumination, angles, and occlusions during academic examinations and restricted environments.",
    businessAndAnalyticalValue:
      "Demonstrates practical automation of institutional compliance policies. Slashes invigilation labor while maintaining an unbiased, auditable video timestamp record of infractions.",
    technologies: ["Python", "YOLO", "OpenCV", "Deep Learning", "Computer Vision"],
    metrics: [
      { label: "Detection Speed", value: "Real-Time 30+ FPS" },
      { label: "Use Case", value: "Automated Academic Integrity" }
    ],
    githubUrl: "https://github.com/Tejaswini-siva/YOLO-Mobile-Detection-System",
    liveDemoUrl: null,
    featuredImage: "yolophone",
    date: "2024"
  },
  {
    id: "crm-operations-data-hygiene",
    title: "Enterprise CRM Operations & Data Quality Framework",
    category: "Business & Strategy",
    isFeatured: false,
    tagline: "Client coordination, pipeline hygiene, and operational SLA streamlining",
    shortDescription:
      "Structured CRM workflows, lead qualification protocols, and customer database standardization at AdroIT Technologies.",
    fullDescription:
      "At AdroIT Technologies, conducted audits across CRM data entities to eliminate duplicated accounts and enforce standardized customer lifecycle stages. Enhanced client engagement by standardizing communications and response SLAs.",
    businessAndAnalyticalValue:
      "Created structured data entry templates and lead escalation rules, strengthening data accuracy and enabling clear executive reporting across the client conversion funnel.",
    technologies: ["CRM Systems", "Data Quality Auditing", "Client Coordination", "SLA Optimization", "Excel / SQL"],
    metrics: [
      { label: "Data Quality Audit", value: "Enterprise Pipeline" },
      { label: "Outcome", value: "Faster Lead Cycle Response" }
    ],
    githubUrl: "",
    liveDemoUrl: null,
    featuredImage: "crm",
    date: "2026"
  }
];
