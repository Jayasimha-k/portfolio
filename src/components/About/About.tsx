"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Cpu, BookOpen } from "lucide-react";
import styles from "./About.module.css";

const highlights = [
  {
    icon: <GraduationCap size={28} />,
    title: "AIML Engineering Student",
    desc: "Specializing in deep learning, neural networks, computer vision, and building intelligent embedded systems.",
  },
  {
    icon: <Award size={28} />,
    title: "Strong Academic Performance",
    desc: "Maintaining an exceptional GPA of 9.3/10 while excelling in core computer science, mathematics, and algorithms.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Hands-on Project Experience",
    desc: "Applying theory to practice by developing end-to-end computer vision systems, smart IoT networks, and NLP engines.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Continuous Learner",
    desc: "Regularly obtaining industry certifications, participating in AI hackathons, and studying the latest AI research papers.",
  },
];

const timelineData = [
  {
    date: "2024 — 2028",
    title: "B.Tech CSE (AI & Machine Learning Specialization)",
    institution: "Presidency University, Bangalore",
    desc: "CGPA: 9.02 / 10.0",
  },
  {
    date: "Certification",
    title: "EY Microsoft AI Skills Passport",
    institution: "EY & Microsoft",
    desc: "Completed the EY Microsoft AI Skills Passport, gaining knowledge in AI fundamentals, sustainability, business applications, technology, employability skills, responsible AI practices, and real-world AI use cases.",
  },
  {
    date: "Featured Project",
    title: "Fire Detection using AMG8833 Thermal Camera",
    institution: "IoT & Computer Vision",
    desc: "Developed a Smart Fire Detection System using thermal imaging and IoT for early hazard detection. The system uses an AMG8833 thermal camera, ESP32 microcontroller, MQ2 gas sensor, buzzer, and LED indicators. It performs real-time temperature monitoring, smoke detection, and heat-zone localization. As team lead, I managed system design, integration, and implementation. The project was selected among the Top 70 innovative projects and successfully demonstrated as a working prototype.",
  },
  {
    date: "Leadership",
    title: "Class Representative",
    institution: "Presidency University",
    desc: "Served as a bridge between students and faculty, ensuring smooth communication and coordination. Led project teams and hackathon groups while managing planning, execution, and collaboration.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        {/* Section Heading */}
        <div className={styles.titleGroup}>
          <p className="text-gradient-cyan-blue">01 / Profile</p>
          <h2>About Me</h2>
        </div>

        {/* Intro and Highlights */}
        <div className="grid-2" style={{ marginBottom: "5rem", alignItems: "start" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }} className="text-gradient-cyan-blue">
              Engineering the Intelligent Future
            </h3>
            
            {/* Added Profile Image placeholder per request */}
            <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
              <div style={{ 
                width: "180px", 
                height: "180px", 
                borderRadius: "50%", 
                overflow: "hidden",
                border: "2px solid rgba(0, 240, 255, 0.3)",
                boxShadow: "0 0 20px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0, 240, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(10, 10, 10, 0.8)",
                backdropFilter: "blur(10px)"
              }}>
                <img 
                  src="/profile.jpg" 
                  alt="Jayasimha K" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    // Fallback if image not uploaded yet
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span style="color: rgba(255,255,255,0.5); text-align: center; font-size: 0.9rem; padding: 1rem;">Upload profile.jpg to public folder</span>';
                  }}
                />
              </div>
            </div>

            <p className={styles.introText}>
              I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Presidency University, Bangalore. I am passionate about building intelligent systems that combine AI, Machine Learning, IoT, Computer Vision, and Software Development.
            </p>
            <p className={styles.introText} style={{ marginTop: "-2rem" }}>
              I enjoy solving real-world problems through technology and continuously expanding my skills through projects, research, and hands-on development.
            </p>
          </motion.div>

          <motion.div
            className={styles.highlightsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className={`${styles.highlightCard} glass-panel`}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={styles.highlightIcon}>{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: "6rem" }}>
          <h3 
            style={{ 
              fontSize: "1.75rem", 
              marginBottom: "3rem", 
              textAlign: "center" 
            }} 
            className="text-gradient-blue-purple"
          >
            Education & Milestones
          </h3>

          <div className={styles.timelineContainer}>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineDate}>{item.date}</div>
                <div className={`${styles.timelineContentCard} glass-panel`}>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <div className={styles.timelineInstitution}>{item.institution}</div>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
