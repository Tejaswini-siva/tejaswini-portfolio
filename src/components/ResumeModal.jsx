import React from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div
        className="modal-content"
        style={{ maxWidth: "860px", height: "88vh", display: "flex", flexDirection: "column", padding: "1.5rem" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(184, 154, 244, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--pink-soft)"
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <h3 id="resume-modal-title" style={{ fontSize: "1.25rem", margin: 0 }}>
                {personalInfo.name} — Verified Resume
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
                Official resume • Updated 2026
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <a
              href={personalInfo.resumePath}
              download="S_Tejaswini_Resume.pdf"
              className="btn-outline"
              style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
            >
              <Download size={15} />
              <span>Download</span>
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
            >
              <ExternalLink size={15} />
              <span>Full Tab</span>
            </a>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "none",
                color: "var(--text-secondary)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
            border: "1px solid var(--border-subtle)",
            background: "#1E1124"
          }}
        >
          <object
            data={personalInfo.resumePath}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          >
            <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                Your browser doesn't support direct PDF preview. You can download the verified resume file directly:
              </p>
              <a
                href={personalInfo.resumePath}
                download="S_Tejaswini_Resume.pdf"
                className="btn-primary"
              >
                <Download size={18} />
                <span>Download S. Tejaswini's Resume (PDF)</span>
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
