import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, Award, TrendingUp } from "lucide-react";
import { experienceList } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Track Record</span>
          </div>
          <h2 className="section-title">
            Industry Experience & <span className="gradient-text">Internships</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated results across operations management, product strategy, CRM, and IoT systems engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            position: "relative"
          }}
        >
          {/* Vertical Timeline Guide Line */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "24px",
              width: "2px",
              background: "linear-gradient(to bottom, var(--lavender-electric), var(--wine-deep), transparent)",
              zIndex: 0
            }}
            className="timeline-guide"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative", zIndex: 1 }}>
            {experienceList.map((exp, idx) => (
              <div
                key={exp.id}
                className="glass-card"
                style={{
                  marginLeft: "52px",
                  padding: "2rem",
                  position: "relative",
                  borderLeft: "3px solid var(--purple-primary)"
                }}
              >
                {/* Timeline node icon */}
                <div
                  style={{
                    position: "absolute",
                    left: "-68px",
                    top: "24px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "var(--card-elevated)",
                    border: "2px solid var(--lavender-electric)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pink-soft)",
                    boxShadow: "0 0 14px rgba(184, 154, 244, 0.4)"
                  }}
                  className="timeline-node"
                >
                  <TrendingUp size={15} />
                </div>

                {/* Role Header */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.8rem",
                    marginBottom: "0.75rem"
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(184, 154, 244, 0.12)",
                        color: "var(--pink-soft)",
                        fontWeight: 600,
                        border: "1px solid var(--border-subtle)",
                        display: "inline-block",
                        marginBottom: "0.4rem"
                      }}
                    >
                      {exp.domain}
                    </span>
                    <h3 style={{ fontSize: "1.35rem", margin: 0, color: "var(--text-main)" }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: "1.05rem", color: "var(--lavender-electric)", fontWeight: 500 }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(214, 162, 207, 0.15)",
                        color: "var(--pink-soft)",
                        fontWeight: 600,
                        display: "inline-block",
                        marginBottom: "0.3rem"
                      }}
                    >
                      {exp.badge}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.85rem", justifyContent: "flex-end" }}>
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p style={{ fontSize: "0.98rem", lineHeight: 1.65, marginBottom: "1.1rem" }}>
                  {exp.summary}
                </p>

                {/* Bulleted Achievements */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.2rem" }}>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <CheckCircle
                        size={16}
                        color="var(--lavender-electric)"
                        style={{ marginTop: "0.25rem", flexShrink: 0 }}
                      />
                      <span style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills Applied */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", paddingTop: "0.8rem", borderTop: "1px solid var(--border-subtle)" }}>
                  {exp.skillsApplied.map((sk, sIdx) => (
                    <span key={sIdx} className="tag-badge">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-guide { display: none !important; }
          .timeline-node { display: none !important; }
          .glass-card { margin-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
