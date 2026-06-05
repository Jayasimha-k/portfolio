"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillSphere from "./SkillSphere";
import styles from "./Skills.module.css";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "Java", "SQL"],
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    items: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Deep Learning", "NLP"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Flask", "FastAPI"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Google Colab", "Docker"],
  },
  {
    category: "Internet of Things (IoT)",
    items: ["ESP32", "Arduino", "Sensors & Actuators", "MQTT", "Embedded C++"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.titleGroup}>
          <p className="text-gradient-blue-purple">02 / Competencies</p>
          <h2>Technical Skills</h2>
        </div>

        <div className={styles.skillsLayout}>
          {/* Left side: Grouped Skill lists */}
          <motion.div
            className={styles.categoriesWrapper}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skillsData.map((cat, idx) => (
              <motion.div
                key={idx}
                className={`${styles.categoryCard} glass-panel`}
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.15 } }}
              >
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
                <div className={styles.skillsTagsGrid}>
                  {cat.items.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.skillBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side: 3D interactive skill sphere tag cloud */}
          <div className={styles.sphereContainer}>
            <SkillSphere />
          </div>
        </div>
      </div>
    </section>
  );
}
