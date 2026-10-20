import React from "react";
import { User, Briefcase, Cpu, Award, Globe, CheckCircle2, TrendingUp } from "lucide-react";
import { aboutData, personalInfo, languagesList } from "../data/portfolio";

export default function About() {
  const pillarIcons = [
    <TrendingUp size={24} color="var(--pink-soft)" />,
    <Briefcase size={24} color="var(--lavender-electric)" />,
    <Cpu size={24} color="var(--pink-soft)" />,
    <Award size={24} color="var(--lavender-electric)" />
  ];

  return (
    <section id="about" className="section-wrapper" style={{ background: "rgba(23, 13, 29, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Executive Profile</span>
          </div>
          <h2 className="section-title">
            Bridging <span className="gradient-text">Business Strategy</span> & Systems Engineering
          </h2>
          <p className="section-subtitle">
            An engineering foundation with an analytical, product-oriented mindset driving measurable organizational impact.
          </p>
        </div>

        {/* Narrative & Quote Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            marginBottom: "3.5rem"
          }}
          className="about-overview-grid"
        >
          {/* Main Biography */}
          <div className="glass-card" style={{ padding: "2.2rem" }}>
            <h3 style={{ fontSize: "1.45rem", marginBottom: "1.2rem", color: "var(--lavender-electric)" }}>
              Professional Journey
            </h3>
            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx} style={{ marginBottom: idx < aboutData.paragraphs.length - 1 ? "1.1rem" : 0 }}>
                {p}
              </p>
            ))}

            {/* Languages Bar */}
            <div
              style={{
                marginTop: "1.8rem",
                paddingTop: "1.4rem",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.5rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-main)" }}>
                <Globe size={18} color="var(--pink-soft)" />
                <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>Languages:</span>
              </div>
              {languagesList.map((lang, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "rgba(184, 154, 244, 0.1)",
                    border: "1px solid var(--border-subtle)",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    color: "var(--text-main)"
                  }}
                >
                  <strong style={{ color: "var(--lavender-electric)" }}>{lang.language}</strong> ({lang.proficiency})
                </span>
              ))}
            </div>
          </div>

          {/* Editorial Quote Card */}
          <div
            className="glass-card"
            style={{
              padding: "2.2rem",
              background: "linear-gradient(145deg, rgba(50, 21, 56, 0.7) 0%, rgba(23, 13, 29, 0.95) 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderLeft: "4px solid var(--lavender-electric)"
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "3.5rem",
                  lineHeight: 1,
                  color: "var(--pink-soft)",
                  opacity: 0.4,
                  marginBottom: "-0.5rem"
                }}
              >
                “
              </div>
              <blockquote
                style={{
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "var(--text-main)",
                  marginBottom: "1.5rem"
                }}
              >
                {aboutData.quote}
              </blockquote>
            </div>

            <div>
              <div style={{ fontWeight: 600, color: "var(--pink-soft)", fontSize: "1.05rem" }}>
                S. Tejaswini
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                B.E. Electronics & Communication Engineering • Velammal Institute of Technology
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Core Value Pillars */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.6rem" }}>
            Four Pillars of <span className="gradient-text">Core Competence</span>
          </h3>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {aboutData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "1.8rem",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(184, 154, 244, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.2rem",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                {pillarIcons[idx % pillarIcons.length]}
              </div>

              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", color: "var(--text-main)" }}>
                {pillar.title}
              </h4>

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, flex: 1 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 990px) {
          .about-overview-grid {
            grid-template-columns: 1.35fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
