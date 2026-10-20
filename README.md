# S. Tejaswini — Premium Personal Portfolio & AI Assistant

A production-grade, dark wine-purple luxury personal portfolio website with an interactive AI assistant representative (**TejaBot**), in-app resume preview, verified credentials, and responsive mobile architecture.

---

## 🌟 Key Highlights & Verification

- **Owner**: S. Tejaswini
- **Verified Background**:
  - **Academic Distinction**: B.E. in Electronics and Communication Engineering from **Velammal Institute of Technology** (**89% aggregate** through Semester 6).
  - **Business Analysis & Operations**:
    - **Opulence at Kosmo One**: Slashed operational turnaround time by **30%** through process mapping and workflow bottleneck elimination.
    - **LOBES**: Drove a **40%** surge in project engagement and efficiency via Go-To-Market (GTM) research and UI/UX flow redesign.
    - **Internova Edutech**: Facilitated 20+ training programs in Market Research, HR, and career development.
    - **AdroIT Technologies**: Managed enterprise CRM pipelines and client coordination data hygiene.
  - **Systems Engineering & IoT**: Built and deployed connected hardware systems (**L.I.D.A.R.S** disaster monitoring, **AQUA-VISION** subsea AI debris detection, **PCDB** ultrasonic crawler bot, **AEROSENSE** gas telemetry).
  - **Certifications**: NPTEL Elite Gold (Digital Marketing), NPTEL Elite Silver (IoT), NI Certified LabVIEW Associate Developer (CLAD), Coursera Microsoft Power BI, IBM Customer Engagement & AI Fundamentals, Infosys SQL Developer.

---

## 🎨 Visual Design System

- **Typography**: Editorial luxury typography powered by **Times New Roman** applied consistently across all headings, body text, buttons, modals, and chatbot messages.
- **Color Palette**:
  - Deep Wine Background: `#100812`
  - Primary Background: `#170D1D`
  - Elevated Cards: `#21142A`
  - Deep Wine Accent: `#321538`
  - Primary Purple: `#8052B8`
  - Electric Lavender: `#B89AF4`
  - Soft Pink Highlight: `#D6A2CF`
  - Main Text: `#F7F0FA`
  - Secondary Text: `#C2B5CA`
- **Interactions**:
  - Trailing glowing wine-purple cursor orb on desktop (gracefully disabled on touch devices).
  - Smooth cycling typing title in the Hero section.
  - Interactive 3D tilt cards.
  - In-app PDF resume modal with zoom and instant download.
  - Confetti celebration upon contact form dispatch.

---

## 🤖 TejaBot — AI Portfolio Representative

TejaBot is a recruiter-facing assistant representing Tejaswini:
- **Architecture**:
  - Connects to `/api/chat` (Vercel serverless function with Google Gemini API using server-side `GEMINI_API_KEY`).
  - Seamless fallback: If running in local static development without the serverless backend or before API keys are configured, TejaBot automatically falls back to an intelligent local knowledge engine matching against `src/data/chatbotProfile.js` so recruiters can test and review answers immediately!
- **Voice Capability**: Optional browser native speech synthesis button to read assistant answers aloud, with a stop-speaking control.

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18 or higher recommended; v24 installed)
- **npm** (v9 or higher)

### 2. Installation
Open your terminal in the project directory:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be created in the `dist/` directory.

---

## ⚙️ Environment Variables Configuration

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Set the following variables:

### 1. Google Gemini API (For TejaBot AI in Production)
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) and generate a free API key.
2. In Vercel (or `.env`):
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key
   ```
*(Note: TejaBot's verified local knowledge engine already answers recruiter questions locally even if this key is left unconfigured!)*

### 2. EmailJS (For Working Contact Form)
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS Dashboard:
   - Create an **Email Service** (e.g. Gmail) -> Copy **Service ID**.
   - Create an **Email Template** -> Set template parameters: `from_name`, `from_email`, `subject`, `message`, `to_name` -> Copy **Template ID**.
   - Go to **Account Settings** -> Copy **Public Key**.
3. In `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## 📁 How to Edit Content (Modular Architecture)

Everything is decoupled into clean, editable JavaScript data files in `src/data/`:

### 1. Adding a New Project
Open [`src/data/projects.js`](file:///c:/Users/Tejaswini/OneDrive/Desktop/portfolio2/src/data/projects.js) and add an object to `projectsData`:
```javascript
{
  id: "new-project-slug",
  title: "New Project Title",
  category: "Business & Strategy", // or "IoT & Embedded", "AI & Computer Vision"
  isFeatured: true,
  tagline: "Short catchy subtitle",
  shortDescription: "Overview displayed on the card.",
  fullDescription: "Detailed technical architecture displayed in the modal.",
  businessAndAnalyticalValue: "Explain the business analysis and ROI impact.",
  technologies: ["Power BI", "SQL", "Python"],
  metrics: [
    { label: "Metric Name", value: "+25%" }
  ],
  githubUrl: "https://github.com/Tejaswini-siva/your-repo", // Leave as "" if not public yet
  liveDemoUrl: null, // or "https://your-demo-url.com"
  date: "2026"
}
```

### 2. Adding or Updating Certificates
Open [`src/data/certificates.js`](file:///c:/Users/Tejaswini/OneDrive/Desktop/portfolio2/src/data/certificates.js) and append or modify a certificate object.

### 3. Updating Biography, Stats, or Experience
Open [`src/data/portfolio.js`](file:///c:/Users/Tejaswini/OneDrive/Desktop/portfolio2/src/data/portfolio.js):
- `personalInfo`: Email, phone, LinkedIn, GitHub.
- `heroContent`: Rotating titles, impact metrics.
- `aboutData`: Narrative paragraphs and the 4 pillars.
- `skillCategories`: Categorized skills and proficiency levels.
- `experienceList`: Internships, roles, and bulleted achievements.
- `educationList`: Degrees, scores, and academic honors.
- `awardsList`: Hackathon prizes and competitive recognitions.

### 4. Updating TejaBot Knowledge
Open [`src/data/chatbotProfile.js`](file:///c:/Users/Tejaswini/OneDrive/Desktop/portfolio2/src/data/chatbotProfile.js) to update the knowledge base context or suggested question chips.

### 5. Replacing Resume and Profile Picture
- **Profile Photo**: Place your updated image in `public/profile.jpg` (or change `profilePhoto` in `portfolio.js`).
- **Resume PDF**: Place your updated PDF in `public/resume.pdf`. The "Download Resume" button and the in-app "Quick View" modal will automatically display the new PDF.

---

## 🚢 Deploying to GitHub & Vercel

### Step 1: Initialize Git Repository
In your workspace directory:
```bash
git init
git add .
git commit -m "feat: complete S. Tejaswini personal portfolio with TejaBot AI assistant"
```

### Step 2: Push to GitHub
1. Create a new repository on your GitHub account (e.g. `tejaswini-portfolio`).
2. Link and push:
```bash
git remote add origin https://github.com/Tejaswini-siva/tejaswini-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
2. Select your `tejaswini-portfolio` repository.
3. In **Build and Output Settings**, Vercel will automatically detect Vite (`npm run build` and `dist`).
4. In **Environment Variables**, add:
   - `GEMINI_API_KEY`: Your Gemini API key from Google AI Studio.
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID.
   - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID.
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key.
5. Click **Deploy**. Vercel will deploy both the static frontend and the `/api/chat` serverless function in seconds!

---

## 📄 License
Created for S. Tejaswini. Verified portfolio and curriculum vitae records.
