import React, { useState, useRef } from "react";
import { ExternalLink, ArrowUpRight, Cpu, LineChart, Sparkles, AlertCircle, Info } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, onSelectProject }) {
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  // 3D card tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out"
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-out"
    });
  };

  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="glass-card tilt-card"
    >
      <div
        style={{
          padding: "1.8rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between"
        }}
      >
        <div>
          {/* Top category & featured badge */}
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
                fontSize: "0.8rem",
                padding: "0.25rem 0.75rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(184, 154, 244, 0.12)",
                color: "var(--pink-soft)",
                fontWeight: 600,
                border: "1px solid var(--border-subtle)"
              }}
            >
              {project.category}
            </span>

            {project.isFeatured && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.75rem",
                  color: "var(--lavender-electric)"
                }}
              >
                <Sparkles size={13} />
                <span>Featured</span>
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3
            style={{
              fontSize: "1.35rem",
              lineHeight: 1.3,
              marginBottom: "0.5rem",
              color: "var(--text-main)"
            }}
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <div
            style={{
              fontSize: "0.88rem",
              color: "var(--lavender-electric)",
              fontStyle: "italic",
              marginBottom: "0.9rem"
            }}
          >
            {project.tagline}
          </div>

          {/* Short Description */}
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "1.2rem"
            }}
          >
            {project.shortDescription}
          </p>

          {/* Impact Metrics Snippet */}
          {project.metrics && project.metrics.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                marginBottom: "1.2rem",
                padding: "0.7rem 0.9rem",
                borderRadius: "var(--radius-sm)",
                background: "rgba(16, 8, 18, 0.5)",
                border: "1px solid var(--border-subtle)"
              }}
            >
              {project.metrics.map((m, idx) => (
                <div key={idx} style={{ fontSize: "0.82rem" }}>
                  <span style={{ color: "var(--text-muted)", display: "block" }}>{m.label}</span>
                  <span style={{ color: "var(--pink-soft)", fontWeight: 600 }}>{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.45rem",
              marginBottom: "1.5rem"
            }}
          >
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tag-badge">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tag-badge" style={{ opacity: 0.7 }}>
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1.2rem",
            borderTop: "1px solid var(--border-subtle)",
            gap: "0.6rem"
          }}
        >
          {/* View Details Modal Trigger */}
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="btn-outline"
            style={{ fontSize: "0.88rem", padding: "0.45rem 0.95rem" }}
          >
            <Info size={15} />
            <span>View Details</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* GitHub Repo */}
            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                title="View GitHub Repository"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <GithubIcon size={16} />
              </a>
            ) : (
              <span
                style={{
                  fontSize: "0.76rem",
                  color: "var(--text-muted)",
                  padding: "0.3rem 0.5rem",
                  border: "1px dashed rgba(184, 154, 244, 0.2)",
                  borderRadius: "var(--radius-sm)"
                }}
                title="Repository code available upon professional request"
              >
                Code on Request
              </span>
            )}

            {/* Live Demo if exists */}
            {hasLiveDemo && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "0.45rem 0.85rem",
                  fontSize: "0.85rem"
                }}
                title="View Live Demo"
              >
                <span>Live</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
