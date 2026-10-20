import React from "react";
import { ArrowUp, Heart, Mail, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-darkest)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "4rem 0 2.5rem 0",
        position: "relative"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            marginBottom: "3rem"
          }}
          className="footer-grid"
        >
          {/* Brand & Identity Column */}
          <div style={{ maxWidth: "420px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8052B8 0%, #321538 100%)",
                  border: "1.5px solid var(--lavender-electric)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "1.05rem"
                }}
              >
                ST
              </div>
              <div>
                <h3 style={{ fontSize: "1.35rem", margin: 0, color: "var(--text-main)" }}>
                  {personalInfo.name}
                </h3>
                <div style={{ fontSize: "0.82rem", color: "var(--pink-soft)" }}>
                  Business Analyst & Electronics Engineer
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.2rem" }}>
              Final-year B.E. student at Velammal Institute of Technology (89% distinction). Bridging business requirements, operations optimization, and hardware/software telemetry.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.82rem" }}>
              <ShieldCheck size={16} color="var(--lavender-electric)" />
              <span>Verified candidate profile and authentic resume credentials.</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: "1.1rem", color: "var(--lavender-electric)", marginBottom: "1.1rem" }}>
              Navigation
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
              <a href="#about" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>About Me</a>
              <a href="#skills" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Core Skills</a>
              <a href="#projects" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Projects & BA</a>
              <a href="#experience" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Experience</a>
              <a href="#education" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Education</a>
              <a href="#certificates" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Certifications</a>
              <a href="#achievements" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Achievements</a>
              <a href="#contact" style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Contact</a>
            </div>
          </div>

          {/* Connect & Top Action */}
          <div>
            <h4 style={{ fontSize: "1.1rem", color: "var(--lavender-electric)", marginBottom: "1.1rem" }}>
              Connect & Downloads
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.92rem" }}
              >
                <LinkedinIcon size={16} color="var(--pink-soft)" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.92rem" }}
              >
                <GithubIcon size={16} color="var(--pink-soft)" />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.92rem" }}
              >
                <Mail size={16} color="var(--pink-soft)" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-outline"
              style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(184, 154, 244, 0.08)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            color: "var(--text-muted)",
            fontSize: "0.85rem"
          }}
        >
          <div>
            © {new Date().getFullYear()} S. Tejaswini. All rights reserved.
          </div>
          <div>
            Chennai, Tamil Nadu, India • B.E. Electronics and Communication
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
