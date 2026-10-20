import React from "react";
import { Trophy, Award, Sparkles, Users, Mic, Compass } from "lucide-react";
import { awardsList, leadershipList } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper" style={{ background: "rgba(23, 13, 29, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Honors & Impact</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-subtitle">
            Consistent recognition across technical hackathons, ideathons, campus ambassadorship, and executive event organization.
          </p>
        </div>

        {/* Competitive Awards Section */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
            <Award size={22} color="var(--pink-soft)" />
            <h3 style={{ fontSize: "1.45rem", margin: 0, color: "var(--lavender-electric)" }}>
              Competitive Honors & Prizes
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.3rem"
            }}
          >
            {awardsList.map((award, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: "3px solid var(--purple-primary)"
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--pink-soft)",
                      fontWeight: 600,
                      marginBottom: "0.4rem"
                    }}
                  >
                    {award.category}
                  </div>
                  <h4 style={{ fontSize: "1.15rem", color: "var(--text-main)", marginBottom: "0.4rem", lineHeight: 1.3 }}>
                    {award.title}
                  </h4>
                  <div style={{ fontSize: "0.92rem", color: "var(--lavender-electric)", marginBottom: "0.8rem" }}>
                    {award.issuer}
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Positions of Responsibility & Campus Leadership */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
            <Users size={22} color="var(--pink-soft)" />
            <h3 style={{ fontSize: "1.45rem", margin: 0, color: "var(--lavender-electric)" }}>
              Leadership & Campus Governance
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.3rem"
            }}
          >
            {leadershipList.map((leader, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "1.6rem",
                  borderTop: "2px solid var(--lavender-electric)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <Sparkles size={16} color="var(--pink-soft)" />
                  <span style={{ fontSize: "0.82rem", color: "var(--pink-soft)", fontWeight: 600 }}>
                    {leader.organization}
                  </span>
                </div>
                <h4 style={{ fontSize: "1.2rem", color: "var(--text-main)", marginBottom: "0.6rem" }}>
                  {leader.role}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {leader.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
