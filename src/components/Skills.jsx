import React, { useState } from "react";
import { Wrench, CheckCircle2, BarChart3, Code2, Cpu, Laptop, Users } from "lucide-react";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [
    <BarChart3 size={18} />,
    <Code2 size={18} />,
    <Cpu size={18} />,
    <Laptop size={18} />,
    <Users size={18} />
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Technical & Analytical Stack</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Curated from verified resume experience across business analysis, embedded engineering, and modern data platforms.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.65rem",
            marginBottom: "2.8rem"
          }}
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.65rem 1.3rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.95rem",
                fontWeight: 500,
                background:
                  activeTab === idx
                    ? "linear-gradient(135deg, #8052B8 0%, #4D1F63 100%)"
                    : "rgba(33, 20, 42, 0.6)",
                color: activeTab === idx ? "#FFFFFF" : "var(--text-secondary)",
                border:
                  activeTab === idx
                    ? "1px solid var(--lavender-electric)"
                    : "1px solid var(--border-subtle)",
                boxShadow:
                  activeTab === idx
                    ? "0 4px 18px rgba(128, 82, 184, 0.35)"
                    : "none",
                transform: activeTab === idx ? "translateY(-1px)" : "none"
              }}
            >
              <span>{categoryIcons[idx % categoryIcons.length]}</span>
              <span>{cat.category}</span>
              <span
                style={{
                  fontSize: "0.78rem",
                  padding: "0.15rem 0.45rem",
                  borderRadius: "var(--radius-full)",
                  background:
                    activeTab === idx
                      ? "rgba(255, 255, 255, 0.25)"
                      : "rgba(184, 154, 244, 0.12)",
                  color: activeTab === idx ? "#FFFFFF" : "var(--lavender-electric)"
                }}
              >
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 2.2rem auto",
            color: "var(--text-muted)",
            fontSize: "1rem"
          }}
        >
          {skillCategories[activeTab].description}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.2rem"
          }}
        >
          {skillCategories[activeTab].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="glass-card"
              style={{
                padding: "1.4rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "0.8rem",
                borderLeft: "3px solid var(--purple-primary)"
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                <h4 style={{ fontSize: "1.1rem", color: "var(--text-main)", margin: 0 }}>
                  {skill.name}
                </h4>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(184, 154, 244, 0.14)",
                    color: "var(--pink-soft)",
                    fontWeight: 600,
                    whiteSpace: "nowrap"
                  }}
                >
                  {skill.level}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  {skill.tag}
                </span>
                <CheckCircle2 size={16} color="var(--lavender-electric)" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
