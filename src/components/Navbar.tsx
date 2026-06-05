"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -50% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(href.substring(1));
    if (targetEl) {
      const yOffset = -80; // offset for the navbar
      const y = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 24,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        width: "100%",
        padding: "0 1rem",
      }}
    >
      <nav
        className="glass-panel"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "6px 8px",
          borderRadius: 40,
          pointerEvents: "auto",
          transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s",
          boxShadow: isScrolled
            ? "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.15)"
            : "0 4px 20px rgba(0, 0, 0, 0.3)",
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              style={{
                position: "relative",
                padding: "8px 14px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.3s ease",
                fontFamily: "var(--font-heading)",
                whiteSpace: "nowrap",
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="active-nav-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 30,
                    background: "linear-gradient(90deg, rgba(0, 229, 255, 0.08), rgba(157, 78, 221, 0.12))",
                    border: "1px solid rgba(0, 229, 255, 0.2)",
                    boxShadow: "0 0 12px rgba(0, 229, 255, 0.15)",
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}
