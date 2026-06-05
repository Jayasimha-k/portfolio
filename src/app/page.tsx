import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      {/* Floating capsule navigation bar */}
      <Navbar />
      
      {/* Main content grid */}
      <main>
        {/* Full-screen Hero layout with dynamic 3D elements */}
        <Hero />
        
        {/* Core intro profile & education milestone history */}
        <About />
        
        {/* 3D skill tag-cloud & categories lists */}
        <Skills />
        
        {/* Premium project grids with interactive 3D-tilt cards */}
        <Projects />
        
        {/* Experience metrics split into hackathons, certs, and leadership */}
        <Experience />
        
        {/* Glowing input form and social contacts */}
        <Contact />
      </main>

      {/* Cyberpunk technological footer layout */}
      <footer
        style={{
          padding: "3rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid var(--border-glass)",
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-muted)",
          fontSize: "0.85rem",
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
          position: "relative",
          zIndex: 2,
          letterSpacing: "0.05em",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            © {new Date().getFullYear()} JAYASIMHA. ALL SYSTEMS OPERATIONAL // UPLINK SECURE.
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a href="#home" className="footer-link">BACK TO NODE 0</a>
            <a href="#about" className="footer-link">PROFILE</a>
            <a href="#skills" className="footer-link">COMPETENCIES</a>
            <a href="#projects" className="footer-link">WORKS</a>
          </div>
        </div>
      </footer>
    </>
  );
}
