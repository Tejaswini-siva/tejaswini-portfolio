import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certificates" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        transition: "all 0.35s ease",
        background: isScrolled
          ? "rgba(16, 8, 18, 0.88)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(14px)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.5)" : "none"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "var(--text-main)",
            fontWeight: 600,
            fontSize: "1.25rem",
            letterSpacing: "0.02em"
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8052B8 0%, #321538 100%)",
              border: "1.5px solid var(--lavender-electric)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#FFFFFF",
              boxShadow: "0 0 15px rgba(184, 154, 244, 0.3)"
            }}
          >
            ST
          </div>
          <div>
            <span style={{ display: "block", lineHeight: 1.1, fontSize: "1.15rem" }}>S. Tejaswini</span>
            <span style={{ fontSize: "0.75rem", color: "var(--pink-soft)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Portfolio & BA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.8rem"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.98rem",
                fontWeight: 500,
                position: "relative",
                padding: "0.2rem 0",
                transition: "color 0.25s ease"
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--pink-soft)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}

          {/* Quick Resume CTA Button */}
          <button
            onClick={onOpenResumeModal}
            className="btn-outline"
            style={{
              padding: "0.5rem 1.1rem",
              fontSize: "0.9rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem"
            }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="mobile-nav-toggle">
          <button
            onClick={onOpenResumeModal}
            className="btn-outline"
            style={{ padding: "0.45rem 0.85rem", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "rgba(33, 20, 42, 0.8)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-main)",
              borderRadius: "var(--radius-sm)",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            background: "rgba(23, 13, 29, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-subtle)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            animation: "fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                color: "var(--text-main)",
                fontSize: "1.1rem",
                padding: "0.4rem 0",
                borderBottom: "1px solid rgba(184, 154, 244, 0.08)"
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <a
              href={personalInfo.resumePath}
              download="S_Tejaswini_Resume.pdf"
              className="btn-primary"
              style={{ flex: 1, fontSize: "0.95rem", padding: "0.7rem 1rem" }}
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for desktop vs mobile toggle */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
