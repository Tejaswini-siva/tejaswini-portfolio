import React from "react";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from "lucide-react";
import { educationList } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-wrapper" style={{ background: "rgba(23, 13, 29, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Foundation</span>
          </h2>
          <p className="section-subtitle">
            Consistent academic excellence in engineering fundamentals, analytical thinking, and practical systems development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            maxWidth: "960px",
            margin: "0 auto"
          }}
        >
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderTop: "3px solid var(--purple-primary)"
              }}
            >
              <div>
                {/* Score badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      padding: "0.25rem 0.8rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(184, 154, 244, 0.12)",
                      color: "var(--pink-soft)",
                      fontWeight: 600,
                      border: "1px solid var(--border-subtle)"
                    }}
                  >
                    {edu.scoreType}
                  </span>
                  <div className="gradient-wine-text" style={{ fontSize: "1.85rem", fontWeight: 700 }}>
                    {edu.score}
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.4rem", color: "var(--text-main)" }}>
                  {edu.degree}
                </h3>
                <div style={{ fontSize: "1.05rem", color: "var(--lavender-electric)", marginBottom: "0.8rem" }}>
                  {edu.institution}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.2rem",
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: "1.4rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem" }}>
                      <CheckCircle
                        size={15}
                        color="var(--lavender-electric)"
                        style={{ marginTop: "0.25rem", flexShrink: 0 }}
                      />
                      <span style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
