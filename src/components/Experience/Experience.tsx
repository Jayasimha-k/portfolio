"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Users } from "lucide-react";
import styles from "./Experience.module.css";

const academicsAndCerts = [
  {
    date: "2024 — 2028",
    title: "Academic Performance",
    subtitle: "Presidency University",
    desc: "Maintaining an excellent CGPA of 9.02/10 in B.Tech Computer Science Engineering (AI & Machine Learning Specialization).",
  },
  {
    date: "Certification",
    title: "EY Microsoft AI Skills Passport",
    subtitle: "EY & Microsoft",
    desc: "Gained knowledge in AI fundamentals, sustainability, business applications, technology, employability skills, responsible AI practices, and real-world AI use cases.",
  },
];

const leadership = [
  {
    date: "Leadership Role",
    title: "Class Representative",
    subtitle: "Presidency University",
    desc: "Serving as a bridge between students and faculty, ensuring smooth communication and coordination. Leading project teams and hackathon groups while managing planning, execution, and collaboration.",
  },
];

const recognitions = [
  {
    date: "Project Recognition",
    title: "Top 70 Innovative Projects",
    subtitle: "Smart Fire Detection System",
    desc: "The Smart Fire Detection System using thermal imaging and IoT for early hazard detection was selected among the Top 70 innovative projects and successfully demonstrated as a working prototype.",
  },
];

export default function Experience() {
  const columnVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: delay,
      },
    },
  });

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.titleGroup}>
          <p className="text-gradient-blue-purple">04 / Credentials</p>
          <h2>Experience & Achievements</h2>
        </div>

        {/* Timeline Categorized Columns */}
        <div className={styles.timelineGrid}>
          {/* Academics & Certs Column */}
          <motion.div
            className={styles.categoryColumn}
            variants={columnVariants(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={
              {
                "--column-color": "var(--accent-cyan)",
                "--column-glow": "var(--glow-cyan)",
                "--column-glow-shadow": "rgba(0, 255, 163, 0.12)",
              } as React.CSSProperties
            }
          >
            <h3 className={styles.columnHeader}>
              <ShieldCheck size={22} color="var(--accent-cyan)" /> Academics & Certs
            </h3>
            {academicsAndCerts.map((card, idx) => (
              <div key={idx} className={`${styles.timelineCard} glass-panel`}>
                <div className={styles.cardDate}>{card.date}</div>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <div className={styles.cardSubtitle}>{card.subtitle}</div>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Leadership Column */}
          <motion.div
            className={styles.categoryColumn}
            variants={columnVariants(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={
              {
                "--column-color": "var(--accent-blue)",
                "--column-glow": "var(--glow-blue)",
                "--column-glow-shadow": "rgba(0, 229, 255, 0.12)",
              } as React.CSSProperties
            }
          >
            <h3 className={styles.columnHeader}>
              <Users size={22} color="var(--accent-blue)" /> Leadership
            </h3>
            {leadership.map((card, idx) => (
              <div key={idx} className={`${styles.timelineCard} glass-panel`}>
                <div className={styles.cardDate}>{card.date}</div>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <div className={styles.cardSubtitle}>{card.subtitle}</div>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Recognition Column */}
          <motion.div
            className={styles.categoryColumn}
            variants={columnVariants(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={
              {
                "--column-color": "var(--accent-purple)",
                "--column-glow": "var(--glow-purple)",
                "--column-glow-shadow": "rgba(157, 78, 221, 0.12)",
              } as React.CSSProperties
            }
          >
            <h3 className={styles.columnHeader}>
              <Trophy size={22} color="var(--accent-purple)" /> Recognition
            </h3>
            {recognitions.map((card, idx) => (
              <div key={idx} className={`${styles.timelineCard} glass-panel`}>
                <div className={styles.cardDate}>{card.date}</div>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <div className={styles.cardSubtitle}>{card.subtitle}</div>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
