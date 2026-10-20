import React, { useState } from "react";
import { Award, ExternalLink, Eye, X, CheckCircle2, ShieldCheck, FileText } from "lucide-react";
import { certificatesData } from "../data/certificates";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section-wrapper">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Accredited qualifications across data analytics, business platforms, digital marketing, AI, and hardware instrumentation.
          </p>
        </div>

        {/* Certificate Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: "1.8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                borderTop: "3px solid var(--purple-primary)"
              }}
            >
              <div>
                {/* Issuer & Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.8rem"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(184, 154, 244, 0.12)",
                      color: "var(--lavender-electric)",
                      fontWeight: 600
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--pink-soft)",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem"
                    }}
                  >
                    <ShieldCheck size={13} />
                    <span>{cert.badge}</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "0.6rem", lineHeight: 1.3 }}>
                  {cert.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tag-badge" style={{ fontSize: "0.78rem" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-subtle)",
                  gap: "0.6rem"
                }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="btn-outline"
                  style={{ fontSize: "0.85rem", padding: "0.45rem 0.9rem" }}
                >
                  <Eye size={14} />
                  <span>View Details</span>
                </button>

                {cert.verificationUrl && cert.verificationUrl.trim().length > 0 && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{
                      width: "34px",
                      height: "34px",
                      padding: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    title="Visit Verification Portal"
                    aria-label={`Verify ${cert.title}`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal / Fallback Preview */}
      {selectedCert && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "640px" }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "1.4rem"
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
                    display: "inline-block",
                    marginBottom: "0.4rem"
                  }}
                >
                  {selectedCert.issuer} • {selectedCert.badge}
                </span>
                <h3 style={{ fontSize: "1.5rem", margin: 0, color: "var(--text-main)" }}>
                  {selectedCert.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
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
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div
                style={{
                  padding: "1.2rem",
                  background: "rgba(16, 8, 18, 0.7)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                  Credential Status
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--pink-soft)", fontWeight: 600 }}>
                  <ShieldCheck size={18} />
                  <span>Verified Resume Credential</span>
                </div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Credential Reference: <strong style={{ color: "var(--lavender-electric)" }}>{selectedCert.credentialId}</strong>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: "1.05rem", color: "var(--lavender-electric)", marginBottom: "0.4rem" }}>
                  Certification Scope
                </h4>
                <p style={{ lineHeight: 1.65 }}>{selectedCert.description}</p>
              </div>

              <div>
                <h4 style={{ fontSize: "1.05rem", color: "var(--lavender-electric)", marginBottom: "0.5rem" }}>
                  Validated Competencies
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {selectedCert.skills.map((s, idx) => (
                    <span key={idx} className="tag-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate File Note / Link */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid var(--border-subtle)",
                  marginTop: "0.5rem"
                }}
              >
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Verified from official resume records
                </div>

                {selectedCert.verificationUrl ? (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: "0.88rem", padding: "0.5rem 1rem" }}
                  >
                    <span>Official Portal</span>
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span style={{ fontSize: "0.85rem", color: "var(--pink-soft)" }}>
                    Verified In-Person Credential
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
