import React, { useState, useEffect } from "react";
import { Download, Eye, ArrowRight, Sparkles, TrendingUp, Cpu, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, heroContent } from "../data/portfolio";

export default function Hero({ onOpenResumeModal }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Typing effect loop
  useEffect(() => {
    const titles = heroContent.rotatingTitles;
    const fullText = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(75);

        if (displayedText === fullText) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting characters
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40);

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        paddingTop: "calc(var(--nav-height) + 3.5rem)",
        paddingBottom: "4.5rem",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Ambient background glows */}
      <div className="ambient-glow-orb orb-wine-1" />
      <div className="ambient-glow-orb orb-wine-2" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Main Hero Narrative & Identity */}
          <div style={{ maxWidth: "680px" }}>
            {/* Status pill badge */}
            <div
              className="section-badge"
              style={{
                marginBottom: "1.2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <Sparkles size={14} color="var(--pink-soft)" />
              <span>Verified Portfolio • Open to Opportunities</span>
            </div>

            {/* Static Headline */}
            <h2
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                color: "var(--lavender-electric)",
                fontStyle: "italic",
                fontWeight: 400,
                marginBottom: "0.5rem",
                letterSpacing: "0.02em"
              }}
            >
              "{heroContent.staticHeadline}"
            </h2>

            {/* Name */}
            <h1
              className="gradient-text"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "1rem"
              }}
            >
              {heroContent.name}
            </h1>

            {/* Dynamic Typing Title */}
            <div
              style={{
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem"
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.25rem, 2.8vw, 1.85rem)",
                  color: "var(--pink-soft)",
                  fontWeight: 600
                }}
              >
                {displayedText}
              </span>
              <span className="typing-cursor" />
            </div>

            {/* Short Bio */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2.2rem"
              }}
            >
              {heroContent.subtext}
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.9rem",
                alignItems: "center",
                marginBottom: "2.5rem"
              }}
            >
              {/* Download Resume */}
              <a
                href={personalInfo.resumePath}
                download="S_Tejaswini_Resume.pdf"
                className="btn-primary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              {/* In-app Preview Resume */}
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="btn-secondary"
              >
                <Eye size={17} />
                <span>Quick View</span>
              </button>

              {/* Explore Projects */}
              <a href="#projects" className="btn-secondary">
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              {/* Social Links */}
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ width: "42px", height: "42px", padding: 0 }}
                  aria-label="Tejaswini's LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ width: "42px", height: "42px", padding: 0 }}
                  aria-label="Tejaswini's GitHub Repositories"
                >
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo Display with Luxury Purple Aura */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="hero-photo-wrapper">
              <img
                src={personalInfo.profilePhoto}
                alt="S. Tejaswini - Business Analyst and Electronics Engineer"
                className="hero-photo-img"
                loading="eager"
              />
            </div>

            {/* Quick credentials chip below photo */}
            <div
              style={{
                marginTop: "1.2rem",
                textAlign: "center",
                background: "rgba(33, 20, 42, 0.7)",
                border: "1px solid var(--border-subtle)",
                padding: "0.5rem 1.2rem",
                borderRadius: "var(--radius-full)",
                backdropFilter: "blur(8px)"
              }}
            >
              <span style={{ fontSize: "0.88rem", color: "var(--text-main)" }}>
                Chennai, India • <strong style={{ color: "var(--pink-soft)" }}>Velammal ECE (89%)</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Verified Impact Metrics Banner */}
        <div
          style={{
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.2rem"
          }}
        >
          {heroContent.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "1.4rem 1.2rem",
                textAlign: "center",
                borderTop: "2px solid var(--purple-primary)"
              }}
            >
              <div
                className="gradient-wine-text"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: "0.3rem"
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "var(--text-main)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  marginBottom: "0.2rem"
                }}
              >
                {stat.label}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid template media query */}
      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
