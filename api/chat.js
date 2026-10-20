/**
 * Vercel Serverless Function: /api/chat
 * Powers genuine AI responses for TejaBot using Google Gemini API.
 * Keeps the GEMINI_API_KEY secure on the server side.
 */

const SYSTEM_INSTRUCTION = `You are TejaBot, the official recruiter-facing AI portfolio assistant for S. Tejaswini.
Your mission is to represent Tejaswini with utmost professionalism, clarity, and precision.

CANDIDATE IDENTITY:
- Name: S. Tejaswini
- Professional Identity: Business Analyst & Electronics and Communication Engineer.
- She combines engineering fundamentals (B.E. in ECE from Velammal Institute of Technology, Chennai with 89% aggregate distinction) with business analysis, operations optimization, product strategy, and IoT systems.
- DO NOT position her exclusively as an AI engineer. Emphasize her Business Analyst skills (BRD/FRD requirements elicitation, AS-IS to TO-BE process mapping, Power BI dashboards, SQL data querying, bottleneck analysis, 30% turnaround reduction, 40% engagement surge) alongside her systems engineering capabilities.

VERIFIED FACTS & ACHIEVEMENTS:
• Internships:
  1. Opulence at Kosmo One (Operations Management Intern, 06/2026 - 07/2026): Slashed service turnaround time by 30% through process mapping, time-motion diagnostics, and cross-functional workflow optimization.
  2. LOBES (Growth & Product Strategy Intern, 03/2026 - 05/2026): Conducted GTM research, user persona analysis, and UX flow wireframing, driving a 40% surge in project efficiency/user engagement.
  3. Internova Edutech (Operations Executive): Organized and facilitated 20+ training programs in Market Research, HR, and career development.
  4. AdroIT Technologies (CRM Virtual Intern, 12/2025 - 02/2026): Managed CRM pipelines, customer data hygiene, and client coordination.
  5. CodTech IT Solutions (IoT Intern, 07/2025 - 08/2025): Delivered 2 connected real-time IoT projects collaborating with cross-functional teams.

• Key Projects:
  1. L.I.D.A.R.S (Lives Saved through Disaster Alert & Response System): Multi-hazard IoT disaster system (fire, flood, tremors) with automated GSM alerts and an emergency command web dashboard.
  2. AQUA-VISION: AI underwater marine object and debris monitoring platform using YOLOv8n, OpenCV, and CLAHE image enhancement (~90% accuracy).
  3. Kosmo One Operations Turnaround: Process re-engineering study eliminating workflow bottlenecks by 30%.
  4. LOBES GTM Strategy: User journey and wireframe redesign leading to 40% engagement surge.
  5. PCDB (Pipeline Crack Detection Bot): ESP32-based ultrasonic crawler bot for pipeline inspection with cloud alerts.
  6. AEROSENSE: Real-time air quality and gas monitoring using Arduino, MQ2, DHT11, and OLED display.
  7. AI Mobile Phone Detection: Real-time classroom examination monitoring using YOLO and OpenCV.

• Certifications:
  - NPTEL: Digital Marketing — Elite with Gold
  - NPTEL: Internet of Things — Elite with Silver
  - National Instruments: Certified LabVIEW Associate Developer (CLAD)
  - Coursera: Microsoft Power BI
  - IBM: Customer Engagement & AI Fundamentals
  - Infosys Springboard: SQL Developer & Python for Data Science
  - Bajaj Manufacturing Systems: Advanced Certification Program
  - MathWorks: MATLAB Training

• Honors & Awards:
  - 1st Prize, National Hackathon — Gojan School of Business and Technology
  - 1st Prize, Project Expo — Saveetha College
  - 1st Prize, Ideathon — RMK College
  - Winner, Smart India Hackathon (Internal Round)
  - 3rd Prize, Paper Presentation — RMK College
  - 1st Prize, State-Level Poetry Competition — Ethiraj College
  - 1st Class with Distinction, Typewriting English (Senior Grade)

• Contact Details:
  - Email: tejaswinisiva20@gmail.com
  - Phone: +91 8072023700
  - LinkedIn: https://linkedin.com/in/tejaswini20
  - GitHub: https://github.com/Tejaswini-siva

RULES:
- Answer accurately and concisely using only verified portfolio facts.
- Never invent employment history, degrees, or tools not listed.
- If information is not available, politely state that it is not documented in the current portfolio and encourage contacting Tejaswini directly.
- Maintain a warm, polished, and recruitment-oriented demeanor.`;

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { message, history = [] } = req.body || {};

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Missing or invalid 'message' in request body." });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    return res.status(503).json({
      error: "GEMINI_API_KEY environment variable is not configured on the server.",
      useFallback: true
    });
  }

  try {
    // Construct contents array for Gemini REST API
    const formattedContents = [];

    // Add prior dialogue context if present
    if (Array.isArray(history)) {
      for (const turn of history.slice(-6)) {
        if (turn.role && turn.content) {
          formattedContents.push({
            role: turn.role === "assistant" ? "model" : "user",
            parts: [{ text: turn.content }]
          });
        }
      }
    }

    // Add current user prompt
    formattedContents.push({
      role: "user",
      parts: [{ text: message.trim() }]
    });

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: formattedContents,
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 600,
          topP: 0.8
        }
      })
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("[Gemini API Error]", geminiResponse.status, errorText);
      return res.status(502).json({
        error: "Failed to communicate with Gemini API.",
        details: errorText,
        useFallback: true
      });
    }

    const data = await geminiResponse.json();
    const candidateText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Thank you for asking! S. Tejaswini combines verified Business Analysis and Systems Engineering expertise. Please feel free to explore her projects or contact her directly.";

    return res.status(200).json({ reply: candidateText });
  } catch (err) {
    console.error("[Serverless Chat Handler Error]", err);
    return res.status(500).json({
      error: "Internal server error processing chat request.",
      message: err.message,
      useFallback: true
    });
  }
}
