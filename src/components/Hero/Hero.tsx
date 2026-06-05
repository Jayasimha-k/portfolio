"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import styles from "./Hero.module.css";

// Dynamic import of the R3F Canvas with SSR disabled to prevent hydration conflicts
const Canvas3D = dynamic(() => import("./Canvas3D"), { ssr: false });

export default function Hero() {
  const primaryBtnRef = useMagnetic<HTMLAnchorElement>();
  const secondaryBtnRef = useMagnetic<HTMLAnchorElement>();
  const tertiaryBtnRef = useMagnetic<HTMLAnchorElement>();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* 3D Core Canvas Background */}
      <Canvas3D />

      {/* Hero Typography & CTAs */}
      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className={styles.eyebrow} variants={itemVariants}>
          Initialize Neural Connection
        </motion.span>
        
        {/* Profile Image in Hero */}
        <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", marginTop: "-2rem" }}>
          <div style={{ 
            width: "120px", 
            height: "120px", 
            borderRadius: "50%", 
            overflow: "hidden",
            border: "2px solid rgba(0, 240, 255, 0.4)",
            boxShadow: "0 0 25px rgba(0, 240, 255, 0.3), inset 0 0 15px rgba(0, 240, 255, 0.2)",
            background: "rgba(10, 10, 10, 0.8)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img 
              src="/profile.jpg" 
              alt="Jayasimha K" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span style="color: rgba(255,255,255,0.5); text-align: center; font-size: 0.7rem; padding: 0.5rem;">Image missing</span>';
              }}
            />
          </div>
        </motion.div>

        <motion.h1 className={styles.title} variants={itemVariants}>
          Jayasimha K
        </motion.h1>
        
        <motion.h2 
          className={`${styles.subtitle} text-gradient-cyan-blue text-gradient-glow`} 
          variants={itemVariants}
        >
          AI & Machine Learning Engineer
        </motion.h2>
        
        <motion.p className={styles.description} variants={itemVariants} style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          B.Tech CSE (AI & ML Specialization)
        </motion.p>
        <motion.p className={styles.description} variants={itemVariants} style={{ fontSize: '1rem', marginBottom: '0.5rem', opacity: 0.8 }}>
          Presidency University, Bangalore | CGPA: 9.02 / 10.0
        </motion.p>

        <motion.p className={styles.description} variants={itemVariants} style={{ marginTop: '1rem' }}>
          Building intelligent systems through Artificial Intelligence, Machine Learning, IoT, Computer Vision, and Software Development.
        </motion.p>
        
        <motion.div className={styles.ctaGroup} variants={itemVariants}>
          <a
            ref={primaryBtnRef}
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="btn-magnetic btn-primary"
          >
            View Projects <ArrowUpRight className={styles.btnIcon} size={18} />
          </a>
          <a
            ref={secondaryBtnRef}
            href="#"
            className="btn-magnetic btn-secondary"
          >
            Download Resume <Download className={styles.btnIcon} size={18} />
          </a>
          <a
            ref={tertiaryBtnRef}
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="btn-magnetic btn-tertiary"
          >
            Contact Me <ArrowDown className={styles.btnIcon} size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
