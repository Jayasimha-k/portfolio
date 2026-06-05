"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  graphic: React.ReactNode;
  span2?: boolean;
}

export default function ProjectCard({ title, desc, tech, github, demo, graphic, span2 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values to track normalized (0 to 1) mouse positions over the card
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Interpolate position into rotation coordinates (max tilt +/- 10 degrees)
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 175, damping: 22 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 175, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);

    card.style.setProperty("--mouse-x", `${mouseX}px`);
    card.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    // Return to default level coordinates
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className={`${styles.cardContainer} ${span2 ? styles.span2 : ""}`}>
      <motion.div
        ref={cardRef}
        className={styles.cardInner}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className={styles.cardGlow} />
        
        {/* Project Graphic Representation */}
        <div className={styles.projectGraphic}>
          <div className={styles.graphicOverlay} />
          {graphic}
        </div>

        {/* Technologies used badges */}
        <div className={styles.techStack}>
          {tech.map((t, idx) => (
            <span key={idx} className={styles.techBadge}>
              {t}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className={styles.projectTitle}>{title}</h3>

        {/* Project Description */}
        <p className={styles.projectDescription}>{desc}</p>

        {/* GitHub & Live link buttons */}
        <div className={styles.linksGroup}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Code
          </a>
          <a
            href={demo}
            onClick={(e) => {
              if (demo === "#") e.preventDefault();
            }}
            className={styles.projectLink}
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
}
