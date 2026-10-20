import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolio";
import { sendContactEmail, isEmailJsConfigured } from "../services/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "" // Anti-spam honey pot
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    unconfigured: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.error || status.success) {
      setStatus({ submitting: false, success: false, error: null, unconfigured: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam check
    if (formData.honeypot) return;

    setStatus({ submitting: true, success: false, error: null, unconfigured: false });

    try {
      const result = await sendContactEmail(formData);

      if (result.unconfigured) {
        setStatus({
          submitting: false,
          success: false,
          error: result.message,
          unconfigured: true
        });
        return;
      }

      setStatus({
        submitting: false,
        success: true,
        error: null,
        unconfigured: false
      });

      // Confetti celebration on success
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#8052B8", "#B89AF4", "#D6A2CF", "#FFFFFF"]
        });
      } catch (cErr) {
        // ignore confetti errors
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: ""
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "Failed to transmit message. Please contact Tejaswini directly.",
        unconfigured: false
      });
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: "rgba(23, 13, 29, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Open to Business Analyst, Systems Engineering, Product Strategy, and Operations roles. Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            maxWidth: "1050px",
            margin: "0 auto"
          }}
          className="contact-layout-grid"
        >
          {/* Direct Channels & Verified Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--lavender-electric)", marginBottom: "1rem" }}>
                Direct Contact Channels
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.8rem" }}>
                Whether you're looking for a Business Analyst who speaks engineering fluency or an innovative systems developer, I welcome meaningful conversations.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    color: "var(--text-main)",
                    padding: "0.8rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(16, 8, 18, 0.5)",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(184, 154, 244, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--pink-soft)"
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Email Address</div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 600 }}>{personalInfo.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    color: "var(--text-main)",
                    padding: "0.8rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(16, 8, 18, 0.5)",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(184, 154, 244, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--pink-soft)"
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Phone / WhatsApp</div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 600 }}>{personalInfo.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    color: "var(--text-main)",
                    padding: "0.8rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(16, 8, 18, 0.5)",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(184, 154, 244, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--pink-soft)"
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Location</div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 600 }}>{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social profile buttons */}
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.8rem" }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "0.6rem 1rem", fontSize: "0.9rem" }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "0.6rem 1rem", fontSize: "0.9rem" }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="glass-card" style={{ padding: "2.2rem" }}>
            <h3 style={{ fontSize: "1.4rem", color: "var(--text-main)", marginBottom: "0.5rem" }}>
              Send an In-App Message
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Messages are transmitted directly via EmailJS to Tejaswini's primary email.
            </p>

            {/* Success Message Banner */}
            {status.success && (
              <div
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  color: "#4ade80",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem"
                }}
              >
                <CheckCircle size={20} />
                <span style={{ fontSize: "0.92rem" }}>
                  Thank you! Your message was delivered successfully. Tejaswini will review it shortly.
                </span>
              </div>
            )}

            {/* Error / Unconfigured Message Banner */}
            {status.error && (
              <div
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "var(--radius-sm)",
                  background: status.unconfigured ? "rgba(214, 162, 207, 0.12)" : "rgba(239, 68, 68, 0.15)",
                  border: status.unconfigured ? "1px solid rgba(214, 162, 207, 0.3)" : "1px solid rgba(239, 68, 68, 0.4)",
                  color: status.unconfigured ? "var(--pink-soft)" : "#f87171",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem"
                }}
              >
                <AlertCircle size={20} style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                <span style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>
                  {status.error}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {/* Honey Pot anti-spam */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Name & Email Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.1rem"
                }}
                className="form-row-2"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{ display: "block", fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(16, 8, 18, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "0.95rem"
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ display: "block", fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(16, 8, 18, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "0.95rem"
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  style={{ display: "block", fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Opportunity: Business Analyst Role"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(16, 8, 18, 0.8)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                    fontSize: "0.95rem"
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: "block", fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your inquiry, open role, or collaboration..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(16, 8, 18, 0.8)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                    fontSize: "0.95rem",
                    resize: "vertical"
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary"
                style={{
                  padding: "0.85rem 1.8rem",
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                  opacity: status.submitting ? 0.7 : 1
                }}
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1.35fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
