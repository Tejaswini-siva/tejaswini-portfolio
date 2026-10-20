/**
 * TejaBot Assistant Service
 * Connects to serverless /api/chat (Gemini API) and provides an intelligent
 * local knowledge engine fallback using verified resume data.
 */
import { tejaBotKnowledgeBase } from "../data/chatbotProfile";

/**
 * Text-to-speech utilities
 */
export const isSpeechSynthesisSupported = () => {
  return typeof window !== "undefined" && "speechSynthesis" in window;
};

export const stopSpeaking = () => {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
  }
};

export const speakText = (text, onStart, onEnd, onError) => {
  if (!isSpeechSynthesisSupported()) return false;

  stopSpeaking();

  // Strip markdown formatting for cleaner speech
  const cleanText = text
    .replace(/[*#_`~>]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  // Prefer natural English voices if available
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(
    (v) =>
      (v.lang.startsWith("en") && v.name.includes("Natural")) ||
      v.name.includes("Google UK") ||
      v.name.includes("Google US") ||
      v.name.includes("Samantha") ||
      v.name.includes("Zira")
  );
  if (naturalVoice) {
    utterance.voice = naturalVoice;
  }

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;
  if (onError) utterance.onerror = onError;

  window.speechSynthesis.speak(utterance);
  return true;
};

/**
 * Local verified knowledge matcher
 * Provides accurate recruiter answers when offline, in local dev, or before Vercel API key configuration.
 */
export const queryLocalKnowledgeBase = (userQuery) => {
  const query = userQuery.toLowerCase().trim();

  // Business Analyst suitability / strengths
  if (
    query.includes("business analyst") ||
    query.includes("ba role") ||
    query.includes("why hire") ||
    query.includes("suitable candidate") ||
    query.includes("product strategy")
  ) {
    return `S. Tejaswini is an exceptional Business Analyst candidate because she bridges technical systems engineering with business value:
• Proven Business Impact: Reduced operational turnaround time by 30% at Kosmo One through workflow mapping and bottleneck analysis, and boosted project engagement by 40% at LOBES through customer persona research.
• Technical Fluency: With an 89% academic distinction in Electronics & Communication Engineering, she speaks the language of developers, data engineers, and hardware architects—eliminating technical miscommunication.
• Core BA Competencies: Proficient in writing Business Requirement Documents (BRD), Functional Specifications (FRD), AS-IS to TO-BE process mapping, Power BI dashboard design (Coursera certified), and SQL querying (Infosys Springboard certified).
• Stakeholder Alignment: HCLTech Campus Ambassador, IETE Executive Member, and host of 30+ events with outstanding cross-functional communication skills.`;
  }

  // Turnaround time / Kosmo One
  if (query.includes("turnaround") || query.includes("kosmo") || query.includes("bottleneck")) {
    return `At Opulence at Kosmo One (Operations Management Intern), Tejaswini achieved a 30% reduction in service turnaround time:
• She mapped the end-to-end operational lifecycle to uncover delays in inter-department handoffs.
• She applied root-cause diagnostics (including 5-Whys and workflow mapping) to eliminate redundant approval cycles.
• She collaborated directly with cross-functional teams to implement a structured data-tracking matrix that permanently streamlined operations.`;
  }

  // LOBES / GTM / Engagement
  if (query.includes("lobes") || query.includes("engagement") || query.includes("gtm")) {
    return `At LOBES (Growth & Product Strategy Intern), Tejaswini drove a 40% surge in project engagement:
• Conducted comprehensive Go-To-Market (GTM) research and customer persona segmentation.
• Assisted in UI/UX planning, user journey mapping, and website flow re-architecture to minimize friction.
• Coordinated with magazine and media partners to gather qualitative business insights that directly shaped product direction.`;
  }

  // Projects / IoT / AI
  if (
    query.includes("project") ||
    query.includes("iot") ||
    query.includes("lidars") ||
    query.includes("aqua") ||
    query.includes("crack") ||
    query.includes("pcdb") ||
    query.includes("aerosense")
  ) {
    return `Tejaswini has delivered notable engineering and business projects:
1. L.I.D.A.R.S (Disaster Alert & Response System): Multi-sensor IoT platform (fire, flood, earthquake) with automated GSM alerts and an emergency command web dashboard reducing notification latency to <5s.
2. AQUA-VISION: AI-powered underwater monitoring platform using YOLOv8n, OpenCV, and CLAHE image enhancement achieving ~90% detection accuracy for marine life and pollution debris.
3. Operations Turnaround Case Study (Kosmo One): Process optimization that permanently slashed operational turnaround time by 30%.
4. PCDB (Pipeline Crack Detection Bot): ESP32-based ultrasonic crawler bot designed for automated industrial pipeline crack inspection with IoT cloud alerts.
5. AEROSENSE: Real-time environmental air quality and gas monitoring system using Arduino, MQ2, DHT11, and OLED feedback.
6. AI-Based Mobile Phone Detection: Real-time classroom exam surveillance using YOLO and OpenCV.`;
  }

  // Internships / Experience
  if (
    query.includes("internship") ||
    query.includes("experience") ||
    query.includes("work") ||
    query.includes("job") ||
    query.includes("company")
  ) {
    return `Tejaswini's industry experience spans 5 organizations:
1. Opulence at Kosmo One (Operations Management Intern): Cut turnaround time by 30% through process mapping and bottleneck analytics.
2. LOBES (Growth & Product Strategy Intern): Propelled user engagement and project efficiency by 40% through GTM research and UX flow design.
3. Internova Edutech (Operations Executive): Organized and facilitated 20+ career and market research training programs.
4. AdroIT Technologies (CRM Virtual Intern): Managed CRM pipelines, client inquiries, and data quality standards.
5. CodTech IT Solutions (IoT Intern): Built and integrated real-time IoT hardware telemetry, delivering 2 successful projects.`;
  }

  // Skills / Technologies
  if (
    query.includes("skill") ||
    query.includes("technolog") ||
    query.includes("python") ||
    query.includes("sql") ||
    query.includes("power bi") ||
    query.includes("tools")
  ) {
    return `Tejaswini's core technical and analytical skills include:
• Business & Product Analysis: Requirements Gathering (BRD/FRD), AS-IS to TO-BE Process Mapping, GTM Strategy, User Journey & Wireframing, Root Cause Analysis, CRM Operations.
• Data & BI: Microsoft Power BI (Coursera certified), SQL Database Modeling (Infosys Springboard certified), Python for Data Science.
• Programming: Python, Java, C, C++, HTML5, CSS3, SQL.
• IoT & Hardware: ESP32, Arduino, Sensor Integration (MQ2, DHT11, Ultrasonic), Cloud Telemetry, GSM Alert Protocols, UART, Embedded C.
• Tools: GitHub, VS Code, MATLAB (MathWorks certified), NI LabVIEW (CLAD certified).`;
  }

  // Education / College / Degree
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("degree") ||
    query.includes("university") ||
    query.includes("marks") ||
    query.includes("velammal")
  ) {
    return `Tejaswini's verified educational background:
• Bachelor of Engineering (B.E.) in Electronics and Communication Engineering at Velammal Institute of Technology, Chennai.
• Academic Distinction: 89% aggregate through Semester 6 (Final year student).
• Higher Secondary (Class XII): Don Bosco Matriculation Higher Secondary School with 81% distinction.
• First Class Senior Grade in Typewriting English from Tamil Nadu Institute of Technical Education.`;
  }

  // Certifications
  if (query.includes("certif") || query.includes("clad") || query.includes("nptel") || query.includes("ibm")) {
    return `Tejaswini holds prestigious credentials from premier institutions:
• NPTEL: Digital Marketing — Elite with Gold
• NPTEL: Internet of Things — Elite with Silver
• National Instruments (NI): Certified LabVIEW Associate Developer (CLAD)
• Coursera: Microsoft Power BI
• IBM: Customer Engagement & AI Fundamentals
• Infosys Springboard: SQL Developer & Python for Data Science
• Bajaj Manufacturing Systems: Advanced Certification Program
• MathWorks: MATLAB Professional Training
• NI: LabVIEW Certification Course`;
  }

  // Awards & Achievements / Hackathons
  if (
    query.includes("award") ||
    query.includes("achievement") ||
    query.includes("hackathon") ||
    query.includes("prize") ||
    query.includes("smart india") ||
    query.includes("sih")
  ) {
    return `Tejaswini's verified awards and achievements include:
• 1st Prize, National Hackathon — Gojan School of Business and Technology
• 1st Prize, Project Expo — Saveetha College
• 1st Prize, Ideathon — RMK College
• Winner, Smart India Hackathon (SIH) — Internal Institutional Round
• 3rd Prize, Paper Presentation — RMK College
• 1st Prize, State-Level Poetry Competition — Ethiraj College
• Multiple Prizes in Inter-Collegiate Speech and Essay Competitions
• First Class with Distinction, Typewriting English (Senior Grade).`;
  }

  // Leadership / Responsibilities
  if (query.includes("leadership") || query.includes("position") || query.includes("ambassador") || query.includes("iete")) {
    return `Tejaswini's leadership roles include:
• Campus Ambassador at HCLTech: Championing enterprise technology engagement on campus.
• Executive Member at IETE Committee: Driving technical workshops and peer learning.
• Vice President of the College Social Club: Directing student welfare and community initiatives.
• Coordinator & Organizer: Handled end-to-end logistics for symposiums, industrial visits, and hackathons.
• Master of Ceremonies (Emcee): Hosted over 30 collegiate and institutional events.`;
  }

  // Contact / Resume / Email / Phone / LinkedIn / GitHub
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("resume") ||
    query.includes("hire")
  ) {
    return `You can connect with S. Tejaswini directly:
• Email: tejaswinisiva20@gmail.com
• Phone: +91 8072023700
• LinkedIn: https://linkedin.com/in/tejaswini20
• GitHub: https://github.com/Tejaswini-siva
• Location: Chennai, Tamil Nadu, India
• Resume: Download the verified PDF directly via the "Download Resume" button in the hero section or top navigation.`;
  }

  // Default recruiter overview
  return `S. Tejaswini is a final-year Electronics and Communication Engineering student at Velammal Institute of Technology (89% distinction) specializing in Business Analysis, Operations Optimization, and IoT Systems.

Key Highlights:
• Slashed service turnaround time by 30% at Kosmo One through process mapping and bottleneck analysis.
• Lifted user engagement by 40% at LOBES via customer research and UX flow design.
• Delivered high-impact IoT and AI systems including L.I.D.A.R.S (disaster response) and AQUA-VISION (~90% marine detection accuracy).
• Holds NPTEL Elite Gold/Silver, CLAD NI, and Microsoft Power BI certifications.

Feel free to ask about her specific projects, business analysis methodologies, certifications, or how to contact her!`;
};

/**
 * Dispatches a chat message to TejaBot.
 * Tries server-side /api/chat first; gracefully falls back to local knowledge engine.
 */
export const sendChatMessage = async (userMessage, chatHistory = []) => {
  if (!userMessage?.trim()) {
    throw new Error("Message cannot be empty.");
  }

  const trimmedMessage = userMessage.trim();

  // Try calling server-side /api/chat endpoint
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: trimmedMessage,
        history: chatHistory.slice(-6)
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.reply) {
        return {
          reply: data.reply,
          source: "gemini-api"
        };
      }
    }
  } catch (err) {
    // API is unavailable or running locally without backend server
    console.info("[TejaBot] Serverless /api/chat endpoint not reachable; using verified local knowledge engine.", err);
  }

  // Fallback to local verified knowledge engine
  const localReply = queryLocalKnowledgeBase(trimmedMessage);
  return {
    reply: localReply,
    source: "verified-knowledge-base"
  };
};
