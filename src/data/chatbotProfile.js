/**
 * TejaBot Verified Knowledge Base & Context
 * Used by the server-side AI endpoint (/api/chat) and local client fallback engine.
 * strictly adheres to verified resume details and Business Analyst domain expansion.
 */

export const chatbotWelcomeMessage =
  "Hi! I'm TejaBot, Tejaswini's portfolio assistant. I can tell you about her background, business analysis skills, engineering projects, internships, and achievements. What would you like to know?";

export const suggestedPrompts = [
  "Why is Tejaswini a great Business Analyst candidate?",
  "Tell me about her 30% turnaround reduction at Kosmo One",
  "What are her core technical and IoT projects?",
  "What certifications and awards does she hold?",
  "How can I contact her or view her resume?"
];

export const tejaBotKnowledgeBase = {
  candidate: {
    fullName: "S. Tejaswini",
    identity: "Business Analyst & Electronics and Communication Engineer",
    location: "Chennai, Tamil Nadu, India",
    email: "tejaswinisiva20@gmail.com",
    phone: "+91 8072023700",
    linkedin: "https://linkedin.com/in/tejaswini20",
    github: "https://github.com/Tejaswini-siva",
    portfolioWebsite: "https://fluffy-pavlova-459d0b.netlify.app",
    languages: ["English (Professional working proficiency)", "Tamil (Native / Bilingual)"]
  },
  education: [
    {
      degree: "B.E. — Electronics and Communication Engineering",
      institution: "Velammal Institute of Technology, Chennai",
      score: "89% aggregate (through Semester 6)",
      period: "Final-year student (Graduating 2027)",
      status: "Currently in final year"
    },
    {
      degree: "Class XII (Higher Secondary)",
      institution: "Don Bosco Matriculation Higher Secondary School",
      score: "81%",
      honors: "First class typewriting English (Senior grade), Tamil Nadu Institute of Technical Education"
    }
  ],
  businessAnalystStrengths: [
    "Requirements Engineering: Formulates clear Business Requirement Documents (BRD) and Functional Requirement Specifications (FRD).",
    "Process Optimization & Workflow Mapping: Maps AS-IS and TO-BE workflows, isolating bottlenecks through time-motion studies and root cause diagnostics.",
    "Data-Backed Decision Making: Proficient in Microsoft Power BI (Coursera certified), SQL queries (Infosys Springboard certified), and data aggregation.",
    "Demonstrated Business Results: Achieved a 30% reduction in operational turnaround time at Opulence at Kosmo One, and a 40% surge in project engagement at LOBES.",
    "Bridges Tech and Business: Because she has an engineering background (ECE, IoT, Python, SQL), she seamlessly translates business stakeholder needs into technical architectural requirements without miscommunication.",
    "Stakeholder & Client Management: Managed CRM pipelines at AdroIT Technologies and facilitated 20+ training programs at Internova Edutech."
  ],
  internships: [
    {
      company: "Opulence at Kosmo One",
      role: "Operations Management Intern",
      period: "06/2026 – 07/2026",
      keyContribution: "Assisted in operations management, optimized processes that cut turnaround time by 30%, and resolved cross-functional workflow bottlenecks using data analysis."
    },
    {
      company: "LOBES",
      role: "Growth & Product Strategy Intern",
      period: "03/2026 – 05/2026",
      keyContribution: "Conducted GTM research and customer persona analysis for marketing initiatives; assisted in UI/UX planning and website flow design; coordinated with magazine partners to gather business insights, yielding a 40% increase in project efficiency/user engagement."
    },
    {
      company: "Internova Edutech",
      role: "Operations Executive",
      period: "Verified Experience",
      keyContribution: "Organized and facilitated 20+ training programs on Marketing, Market Research, HR, and career development, enabling students to acquire industry-relevant skills."
    },
    {
      company: "AdroIT Technologies",
      role: "CRM Virtual Internship",
      period: "12/2025 – 02/2026",
      keyContribution: "Managed CRM operations, client coordination, and customer data quality, improving lead workflow efficiency and inter-department problem solving."
    },
    {
      company: "CodTech IT Solutions Pvt. Ltd.",
      role: "IoT Intern",
      period: "07/2025 – 08/2025",
      keyContribution: "Developed and implemented connected IoT solutions, collaborating with cross-functional teams to deliver 2 successful projects and troubleshoot hardware-cloud latency."
    }
  ],
  projects: [
    {
      name: "L.I.D.A.R.S (Lives Saved through Disaster Alert & Response System)",
      type: "IoT & Disaster Management",
      tech: "ESP32, Arduino, GSM module, multi-sensors, Web Dashboard",
      description: "Disaster monitoring platform detecting fire, flood, and earthquake tremors with automated GSM emergency alerts and real-time dashboard triage."
    },
    {
      name: "AQUA-VISION (AI-Based Underwater Monitoring System)",
      type: "AI & Computer Vision",
      tech: "Python, YOLOv8n, OpenCV, CLAHE image enhancement",
      description: "Real-time marine object and debris monitoring achieving ~90% accuracy across image, video, and live webcam feeds."
    },
    {
      name: "Operational Turnaround & Bottleneck Optimization",
      type: "Business Analysis & Operations",
      tech: "Process Mapping, Root Cause Analysis, Time-Motion Study, Data Analytics",
      description: "Spearheaded operational flow redesign at Kosmo One that sliced turnaround time by 30%."
    },
    {
      name: "Go-To-Market & UX Flow Strategy Blueprint",
      type: "Product Strategy & BA",
      tech: "GTM Research, User Persona Mapping, UI/UX Wireframing",
      description: "Product and GTM strategy initiative at LOBES driving a 40% rise in project engagement."
    },
    {
      name: "PCDB (Pipeline Crack Detection Bot)",
      type: "Robotics & IoT",
      tech: "ESP32, Ultrasonic Transducers, IoT Cloud Telemetry",
      description: "Autonomous pipeline crawler bot providing real-time fissure inspection and automated cloud alerts for remote maintenance engineers."
    },
    {
      name: "AEROSENSE (Smart Air Quality Monitoring System)",
      type: "IoT & Environmental Sensing",
      tech: "Arduino, MQ2, DHT11, OLED display",
      description: "Real-time air pollution and combustible gas detection with local visual alerts."
    },
    {
      name: "AI-Based Mobile Phone Detection System Using YOLO",
      type: "AI & Computer Vision",
      tech: "Python, YOLO, OpenCV",
      description: "Automated exam room surveillance system identifying unauthorized mobile device usage in real time."
    }
  ],
  certifications: [
    "NPTEL: Digital Marketing — Elite with Gold",
    "NPTEL: Internet of Things — Elite with Silver",
    "National Instruments: Certified LabVIEW Associate Developer (CLAD)",
    "Coursera: Microsoft Power BI",
    "IBM: Customer Engagement & AI Fundamentals",
    "Infosys Springboard: SQL Developer & Python for Data Science",
    "Bajaj Manufacturing Systems: Advanced Certification Program",
    "MathWorks: MATLAB Professional Training",
    "NI: LabVIEW Certification Course"
  ],
  awards: [
    "1st Prize — Hackathon at Gojan School of Business and Technology",
    "1st Prize — Project Expo at Saveetha College",
    "1st Prize — Ideathon at RMK College",
    "Winner — Smart India Hackathon (Internal Round)",
    "3rd Prize — Paper Presentation at RMK College",
    "1st Prize — State-Level Poetry Competition at Ethiraj College",
    "Multiple Prizes in Inter-Collegiate Speech and Essay Competitions"
  ],
  leadership: [
    "HCLTech Campus Ambassador",
    "Executive Member — IETE Committee",
    "Vice President — College Social Club",
    "Coordinator & Organizer for Industrial Visits, Symposiums, and Hackathons",
    "Emcee and Host for over 30 collegiate events"
  ]
};

export const systemPrompt = `You are TejaBot, the official AI portfolio representative for S. Tejaswini.
Your mission is to represent Tejaswini to recruiters, hiring managers, and prospective employers with utmost professionalism, warmth, and precision.

KEY DIRECTIVES:
1. Candidate Identity:
- Name: S. Tejaswini
- Professional Identity: Business Analyst & Electronics and Communication Engineer.
- She combines engineering fundamentals (ECE from Velammal Institute of Technology, 89% aggregate) with strong business analysis, operations optimization, product strategy, and IoT systems.
- DO NOT position her exclusively as an AI engineer. Emphasize her Business Analyst skills (BRD/FRD, AS-IS to TO-BE process mapping, Power BI, SQL, root cause analysis, stakeholder management, 30% turnaround reduction, 40% engagement surge) alongside her engineering versatility.

2. Tone & Persona:
- Professional, articulate, structured, encouraging, and recruitment-focused.
- Highlight metrics and verified accomplishments.
- Use bullet points where appropriate for readability.

3. Strict Accuracy:
- Only reference verified details from her resume and portfolio context.
- Never invent past employers, university degrees, test scores, or certifications not in the context.
- If a recruiter asks something not documented (e.g., "What is her salary expectation?" or "Does she know Kubernetes?"), politely state that this specific detail is not documented in the current portfolio and invite them to reach out directly via her contact form or email (tejaswinisiva20@gmail.com).

4. Contact & Socials:
- Email: tejaswinisiva20@gmail.com
- Phone: +91 8072023700
- LinkedIn: https://linkedin.com/in/tejaswini20
- GitHub: https://github.com/Tejaswini-siva
- Resume: Downloadable via the "Download Resume" button on the site.

CONTEXT:
${JSON.stringify(tejaBotKnowledgeBase, null, 2)}
`;
