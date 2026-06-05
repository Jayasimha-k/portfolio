"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

// SVG Vectors representing each technical project
const GraphicVoiceAssistant = () => (
  <svg width="220" height="100" viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50 Q 35 10, 60 50 T 110 50 T 160 50 T 210 50" stroke="url(#cyan-gradient)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8">
      <animate attributeName="d" dur="3s" repeatCount="indefinite"
        values="
          M10 50 Q 35 10, 60 50 T 110 50 T 160 50 T 210 50;
          M10 50 Q 35 80, 60 50 T 110 50 T 160 20 T 210 50;
          M10 50 Q 35 10, 60 50 T 110 50 T 160 50 T 210 50
        " />
    </path>
    <path d="M10 50 Q 35 80, 60 50 T 110 50 T 160 80 T 210 50" stroke="url(#purple-gradient)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5">
      <animate attributeName="d" dur="4.5s" repeatCount="indefinite"
        values="
          M10 50 Q 35 80, 60 50 T 110 50 T 160 80 T 210 50;
          M10 50 Q 35 20, 60 50 T 110 50 T 160 30 T 210 50;
          M10 50 Q 35 80, 60 50 T 110 50 T 160 80 T 210 50
        " />
    </path>
    <circle cx="110" cy="50" r="8" fill="url(#cyan-glow)" filter="drop-shadow(0 0 10px var(--accent-cyan))">
      <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
    </circle>
    <defs>
      <linearGradient id="cyan-gradient" x1="0" y1="50" x2="220" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00ffa3" />
        <stop offset="1" stopColor="#00e5ff" />
      </linearGradient>
      <linearGradient id="purple-gradient" x1="0" y1="50" x2="220" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00e5ff" />
        <stop offset="1" stopColor="#9d4edd" />
      </linearGradient>
      <radialGradient id="cyan-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00ffa3" />
        <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const GraphicLeafDetection = () => (
  <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid Background */}
    <path d="M 0 30 L 220 30 M 0 65 L 220 65 M 0 100 L 220 100 M 45 0 L 45 130 M 110 0 L 110 130 M 175 0 L 175 130" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
    {/* Leaf Outline */}
    <path d="M110 20 C60 50, 60 90, 110 110 C160 90, 160 50, 110 20 Z" stroke="#00ffa3" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.75" />
    <path d="M110 20 L110 110" stroke="#00ffa3" strokeWidth="1.5" opacity="0.5" />
    <path d="M110 50 Q 85 60, 75 70 M 110 70 Q 85 80, 80 90 M 110 60 Q 135 70, 145 80" stroke="#00ffa3" strokeWidth="1" opacity="0.4" />
    
    {/* Scanning/Bounding Box */}
    <rect x="55" y="45" width="80" height="60" rx="4" stroke="#ff3838" strokeWidth="1.5" filter="drop-shadow(0 0 4px rgba(255,56,56,0.3))" />
    {/* Box Corners */}
    <path d="M50 50 L50 40 L60 40 M130 40 L140 40 L140 50 M140 100 L140 110 L130 110 M60 110 L50 110 L50 100" stroke="#ff3838" strokeWidth="3" />
    
    {/* Detection Alert Spot */}
    <circle cx="85" cy="75" r="6" fill="#ff3838" filter="drop-shadow(0 0 8px #ff3838)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
    </circle>
    
    {/* Bounding text */}
    <text x="58" y="38" fill="#ff3838" fontSize="8" fontFamily="monospace" fontWeight="bold">MobileNetV2: Lesion 94.2%</text>
  </svg>
);

const GraphicFireDetection = () => (
  <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* AMG8833 8x8 grid simulation */}
    <g opacity="0.6">
      {/* Row 1 */}
      <rect x="40" y="25" width="16" height="16" fill="#1b002c" stroke="rgba(255,255,255,0.05)" />
      <rect x="58" y="25" width="16" height="16" fill="#38002c" stroke="rgba(255,255,255,0.05)" />
      <rect x="76" y="25" width="16" height="16" fill="#6a0022" stroke="rgba(255,255,255,0.05)" />
      <rect x="94" y="25" width="16" height="16" fill="#a4000e" stroke="rgba(255,255,255,0.05)" />
      <rect x="112" y="25" width="16" height="16" fill="#c92a00" stroke="rgba(255,255,255,0.05)" />
      <rect x="130" y="25" width="16" height="16" fill="#7a001a" stroke="rgba(255,255,255,0.05)" />
      <rect x="148" y="25" width="16" height="16" fill="#2d002d" stroke="rgba(255,255,255,0.05)" />
      <rect x="166" y="25" width="16" height="16" fill="#1b002c" stroke="rgba(255,255,255,0.05)" />
      
      {/* Row 2 */}
      <rect x="40" y="43" width="16" height="16" fill="#32002c" stroke="rgba(255,255,255,0.05)" />
      <rect x="58" y="43" width="16" height="16" fill="#7d001e" stroke="rgba(255,255,255,0.05)" />
      <rect x="76" y="43" width="16" height="16" fill="#be2000" stroke="rgba(255,255,255,0.05)" />
      <rect x="94" y="43" width="16" height="16" fill="#ff7000" stroke="rgba(255,255,255,0.05)">
        <animate attributeName="fill" values="#ff7000;#ffaa00;#ff7000" dur="1s" repeatCount="indefinite" />
      </rect>
      <rect x="112" y="43" width="16" height="16" fill="#ffa200" stroke="rgba(255,255,255,0.05)">
        <animate attributeName="fill" values="#ffa200;#ffe600;#ffa200" dur="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="130" y="43" width="16" height="16" fill="#b91c00" stroke="rgba(255,255,255,0.05)" />
      <rect x="148" y="43" width="16" height="16" fill="#580028" stroke="rgba(255,255,255,0.05)" />
      <rect x="166" y="43" width="16" height="16" fill="#2d002d" stroke="rgba(255,255,255,0.05)" />

      {/* Row 3 */}
      <rect x="40" y="61" width="16" height="16" fill="#1b002c" stroke="rgba(255,255,255,0.05)" />
      <rect x="58" y="61" width="16" height="16" fill="#40002b" stroke="rgba(255,255,255,0.05)" />
      <rect x="76" y="61" width="16" height="16" fill="#8d001b" stroke="rgba(255,255,255,0.05)" />
      <rect x="94" y="61" width="16" height="16" fill="#d83a00" stroke="rgba(255,255,255,0.05)" />
      <rect x="112" y="61" width="16" height="16" fill="#be2000" stroke="rgba(255,255,255,0.05)" />
      <rect x="130" y="61" width="16" height="16" fill="#6f0021" stroke="rgba(255,255,255,0.05)" />
      <rect x="148" y="61" width="16" height="16" fill="#30002b" stroke="rgba(255,255,255,0.05)" />
      <rect x="166" y="61" width="16" height="16" fill="#1b002c" stroke="rgba(255,255,255,0.05)" />
    </g>

    {/* Targeting Crosshair */}
    <circle cx="112" cy="52" r="18" stroke="#00e5ff" strokeWidth="1" strokeDasharray="3 2" />
    <path d="M112 28 L112 40 M112 64 L112 76 M88 52 L100 52 M124 52 L136 52" stroke="#00e5ff" strokeWidth="1.5" />
    <text x="40" y="105" fill="#ffa200" fontSize="8" fontFamily="monospace" fontWeight="bold">ESP32 FLAME DATA: 82.4 C</text>
  </svg>
);

const GraphicTicTacToe = () => (
  <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid Lines */}
    <line x1="90" y1="10" x2="90" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
    <line x1="130" y1="10" x2="130" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
    <line x1="60" y1="40" x2="160" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
    <line x1="60" y1="70" x2="160" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />

    {/* Xs and Os */}
    {/* O in top left */}
    <circle cx="75" cy="25" r="8" stroke="#00e5ff" strokeWidth="3" fill="none" filter="drop-shadow(0 0 6px rgba(0,229,255,0.5))" />
    
    {/* X in center */}
    <g filter="drop-shadow(0 0 6px rgba(157,78,221,0.5))">
      <line x1="105" y1="50" x2="115" y2="60" stroke="#9d4edd" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="115" y1="50" x2="105" y2="60" stroke="#9d4edd" strokeWidth="3.5" strokeLinecap="round" />
    </g>

    {/* O in center right */}
    <circle cx="145" cy="55" r="8" stroke="#00e5ff" strokeWidth="3" fill="none" filter="drop-shadow(0 0 6px rgba(0,229,255,0.5))" />

    {/* X in bottom right */}
    <g filter="drop-shadow(0 0 6px rgba(157,78,221,0.5))">
      <line x1="140" y1="80" x2="150" y2="90" stroke="#9d4edd" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="150" y1="80" x2="140" y2="90" stroke="#9d4edd" strokeWidth="3.5" strokeLinecap="round" />
    </g>

    {/* Winning Line */}
    <line x1="65" y1="35" x2="155" y2="85" stroke="#00ffa3" strokeWidth="2.5" strokeDasharray="3 3" filter="drop-shadow(0 0 8px #00ffa3)">
      <animate attributeName="strokeDashoffset" values="0;20" dur="2s" repeatCount="indefinite" />
    </line>
  </svg>
);

const GraphicIoTMonitoring = () => (
  <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mini Line Chart */}
    <path d="M40 90 L 70 70 L 100 80 L 130 50 L 160 60 L 190 30" stroke="url(#blue-purple-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="drop-shadow(0 0 5px rgba(0,229,255,0.3))" />
    {/* Grid Lines */}
    <line x1="40" y1="90" x2="190" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <line x1="40" y1="60" x2="190" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    <line x1="40" y1="30" x2="190" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    
    {/* Chart Dots */}
    <circle cx="70" cy="70" r="3" fill="#00e5ff" />
    <circle cx="130" cy="50" r="3" fill="#00ffa3" />
    <circle cx="190" cy="30" r="4" fill="#9d4edd" filter="drop-shadow(0 0 5px #9d4edd)">
      <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
    </circle>

    {/* Connected Nodes */}
    <circle cx="35" cy="35" r="5" fill="rgba(255,255,255,0.2)" />
    <line x1="35" y1="35" x2="60" y2="35" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 2" />
    <circle cx="65" cy="35" r="5" fill="#00ffa3" />

    <text x="40" y="105" fill="var(--text-secondary)" fontSize="8" fontFamily="monospace">MQTT CLIENTS ACTIVE [4/4]</text>

    <defs>
      <linearGradient id="blue-purple-gradient" x1="40" y1="60" x2="190" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00e5ff" />
        <stop offset="0.5" stopColor="#00ffa3" />
        <stop offset="1" stopColor="#9d4edd" />
      </linearGradient>
    </defs>
  </svg>
);

const projects = [
  {
    title: "AI Personal Assistant (Sam)",
    desc: "A Python-based smart conversational voice assistant implementing Speech Recognition, Natural Language Processing, and custom workflow triggers. It handles voice-activated tasks, maps system processes, and acts as a localized offline productivity core.",
    tech: ["Python", "SpeechRecognition", "NLP", "Pyttsx3", "OS APIs"],
    github: "https://github.com/",
    demo: "#",
    graphic: <GraphicVoiceAssistant />,
    span2: false,
  },
  {
    title: "Leaf Disease Detection (MobileNetV2)",
    desc: "A computer vision diagnostic tool that classifies crop diseases from leaf images. Built using custom trained MobileNetV2 architecture in TensorFlow/Keras and pre-processed images with OpenCV, achieving high-accuracy detection for smart-agri solutions.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-Learn"],
    github: "https://github.com/",
    demo: "#",
    graphic: <GraphicLeafDetection />,
    span2: false,
  },
  {
    title: "Fire Detection using AMG8833 Thermal Camera",
    desc: "Developed a Smart Fire Detection System using thermal imaging and IoT for early hazard detection. The system uses an AMG8833 thermal camera, ESP32 microcontroller, MQ2 gas sensor, buzzer, and LED indicators. It performs real-time temperature monitoring, smoke detection, and heat-zone localization. As team lead, I managed system design, integration, and implementation. The project was selected among the Top 70 innovative projects and successfully demonstrated as a working prototype.",
    tech: ["ESP32", "AMG8833 Thermal", "MQ2 Sensor", "IoT", "C++"],
    github: "https://github.com/Jayasimha-k",
    demo: "#",
    graphic: <GraphicFireDetection />,
    span2: true, // Grid highlight
  },
  {
    title: "Multiplayer Tic-Tac-Toe Web App",
    desc: "A real-time socket-based online multiplayer game. Engineered using Node.js, Socket.io, React, and CSS animations. Supports match-making rooms, live state synchronization, latency-tolerant state calculations, and interactive glowing gameboards.",
    tech: ["React", "Node.js", "Socket.io", "CSS Modules", "HTML5"],
    github: "https://github.com/",
    demo: "#",
    graphic: <GraphicTicTacToe />,
    span2: false,
  },
  {
    title: "Smart IoT Monitoring Solutions",
    desc: "An end-to-end industrial dashboard tracking environment telemetry (temperature, humidity, noise). Designed with ESP32 micro-controllers publishing sensor arrays via MQTT brokers to a Python-Flask backend, rendering responsive charts on the client interface.",
    tech: ["Arduino C", "ESP32", "Sensors", "MQTT", "Flask", "Chart.js"],
    github: "https://github.com/",
    demo: "#",
    graphic: <GraphicIoTMonitoring />,
    span2: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        {/* Heading */}
        <div className={styles.titleGroup}>
          <p className="text-gradient-cyan-blue">03 / Works</p>
          <h2>Featured Projects</h2>
        </div>

        {/* Responsive Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              desc={proj.desc}
              tech={proj.tech}
              github={proj.github}
              demo={proj.demo}
              graphic={proj.graphic}
              span2={proj.span2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
