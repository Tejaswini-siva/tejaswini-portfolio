import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const requestRef = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if touch device or reduced motion
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Smooth animation loop for the trailing orb
    const animateFollower = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.15;
      currentPos.current.y += dy * 0.15;

      setFollower({
        x: Math.round(currentPos.current.x * 10) / 10,
        y: Math.round(currentPos.current.y * 10) / 10
      });

      requestRef.current = requestAnimationFrame(animateFollower);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    requestRef.current = requestAnimationFrame(animateFollower);

    // Track interactive elements
    const handleElementHover = () => setIsHovered(true);
    const handleElementLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, .tilt-card, .interactive-hover"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={isHovered ? "custom-cursor-hover" : ""}>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: `${follower.x}px`,
          top: `${follower.y}px`
        }}
      />
    </div>
  );
}
