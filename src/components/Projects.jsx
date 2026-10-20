import React, { useState } from "react";
import { FolderGit2, Sparkles, Filter, X, ExternalLink, CheckCircle2, TrendingUp } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projectsData, projectCategories } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Filter projects according to category and featured toggle
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesFeatured = featuredOnly ? project.isFeatured : true;
    return matchesCategory && matchesFeatured;
  });

  return (
    <section id="projects" className="section-wrapper" style={{ background: "rgba(23, 13, 29, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Portfolio Deliverables</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & BA Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Engineered systems, IoT telemetry platforms, and operational business analysis initiatives with proven outcomes.
          </p>
        </div>

        {/* Filter Controls */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
            marginBottom: "2.8rem"
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "0.5rem 1.15rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  background:
                    selectedCategory === cat
                      ? "linear-gradient(135deg, #8052B8 0%, #4D1F63 100%)"
                      : "rgba(33, 20, 42, 0.6)",
                  color: selectedCategory === cat ? "#FFFFFF" : "var(--text-secondary)",
                  border:
                    selectedCategory === cat
                      ? "1px solid var(--lavender-electric)"
                      : "1px solid var(--border-subtle)",
                  boxShadow:
                    selectedCategory === cat
                      ? "0 4px 15px rgba(128, 82, 184, 0.3)"
                      : "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Toggle */}
          <button
            onClick={() => setFeaturedOnly(!featuredOnly)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.15rem",
              borderRadius: "var(--radius-full)",
              fontSize: "0.88rem",
              background: featuredOnly ? "rgba(184, 154, 244, 0.2)" : "rgba(33, 20, 42, 0.6)",
              color: featuredOnly ? "var(--pink-soft)" : "var(--text-muted)",
              border: featuredOnly ? "1px solid var(--pink-soft)" : "1px solid var(--border-subtle)"
            }}
          >
            <Sparkles size={15} />
            <span>{featuredOnly ? "Showing Featured Only" : "Show Featured Only"}</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.8rem"
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div
            className="glass-card"
            style={{
              textAlign: "center",
              padding: "3.5rem 2rem",
              maxWidth: "500px",
              margin: "2rem auto"
            }}
          >
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
              No projects match the selected filter combination.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setFeaturedOnly(false);
              }}
              className="btn-outline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detailed Project Deep-Dive Modal */}
      {activeProject && (
        <div
          className="modal-overlay"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "780px" }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
                gap: "1rem"
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(184, 154, 244, 0.12)",
                    color: "var(--pink-soft)",
                    fontWeight: 600,
                    border: "1px solid var(--border-subtle)",
                    display: "inline-block",
                    marginBottom: "0.5rem"
                  }}
                >
                  {activeProject.category}
                </span>
                <h3 style={{ fontSize: "1.65rem", margin: 0, color: "var(--text-main)" }}>
                  {activeProject.title}
                </h3>
                <div style={{ color: "var(--lavender-electric)", fontStyle: "italic", marginTop: "0.25rem" }}>
                  {activeProject.tagline}
                </div>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "none",
                  color: "var(--text-secondary)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              <div>
                <h4 style={{ fontSize: "1.1rem", color: "var(--lavender-electric)", marginBottom: "0.5rem" }}>
                  Project Overview & Architecture
                </h4>
                <p style={{ lineHeight: 1.7 }}>{activeProject.fullDescription}</p>
              </div>

              {/* Business & Analytical Value */}
              {activeProject.businessAndAnalyticalValue && (
                <div
                  style={{
                    padding: "1.2rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(50, 21, 56, 0.4)",
                    border: "1px solid var(--border-medium)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <TrendingUp size={18} color="var(--pink-soft)" />
                    <h4 style={{ fontSize: "1.1rem", color: "var(--pink-soft)", margin: 0 }}>
                      Business Analysis & Strategic Value
                    </h4>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.98rem", color: "var(--text-main)", lineHeight: 1.65 }}>
                    {activeProject.businessAndAnalyticalValue}
                  </p>
                </div>
              )}

              {/* Metrics Grid */}
              {activeProject.metrics && activeProject.metrics.length > 0 && (
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--lavender-electric)", marginBottom: "0.6rem" }}>
                    Verified Impact Metrics
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "0.8rem"
                    }}
                  >
                    {activeProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "0.85rem",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(16, 8, 18, 0.7)",
                          border: "1px solid var(--border-subtle)"
                        }}
                      >
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{m.label}</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--pink-soft)" }}>
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 style={{ fontSize: "1.1rem", color: "var(--lavender-electric)", marginBottom: "0.6rem" }}>
                  Technologies & Frameworks
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {activeProject.technologies.map((t, idx) => (
                    <span key={idx} className="tag-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "0.8rem",
                  marginTop: "0.5rem",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid var(--border-subtle)"
                }}
              >
                {activeProject.githubUrl && activeProject.githubUrl.trim().length > 0 ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Repository available upon direct request
                  </span>
                )}

                {activeProject.liveDemoUrl && (
                  <a
                    href={activeProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
