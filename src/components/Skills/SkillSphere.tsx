"use client";

import React, { useEffect, useRef } from "react";

interface Tag {
  text: string;
  x: number;
  y: number;
  z: number;
}

const skillsList = [
  "Python", "HTML", "CSS", "ESP32", "Arduino", 
  "Problem Solving", "Leadership", "Python", "HTML", "CSS",
  "ESP32", "Arduino", "Problem Solving", "Leadership"
];

export default function SkillSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;
    
    // Radius of the tag sphere
    const getRadius = () => {
      const minScreen = Math.min(window.innerWidth, window.innerHeight);
      if (minScreen < 500) return 130;
      if (minScreen < 768) return 150;
      return 180;
    };
    let radius = getRadius();
    
    // Golden Spiral placement of tags over a sphere
    const initTags = (): Tag[] => {
      const N = skillsList.length;
      return skillsList.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / N);
        const theta = Math.sqrt(N * Math.PI) * phi;
        return {
          text: skill,
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.sin(phi) * Math.sin(theta),
          z: radius * Math.cos(phi),
        };
      });
    };

    let tags = initTags();

    // Constant auto-rotation speed (radians/frame)
    let angleX = 0.0025;
    let angleY = 0.0025;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Calculate mouse offset from canvas center
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      mouseRef.current = { x: mouseX, y: mouseY };
      isHoveredRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const rotateX = (tag: Tag, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = tag.y * cos - tag.z * sin;
      const z1 = tag.z * cos + tag.y * sin;
      tag.y = y1;
      tag.z = z1;
    };

    const rotateY = (tag: Tag, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = tag.x * cos - tag.z * sin;
      const z1 = tag.z * cos + tag.x * sin;
      tag.x = x1;
      tag.z = z1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Speed adjusts towards cursor if hovered, otherwise floats back to passive speeds
      if (isHoveredRef.current) {
        angleX = -mouseRef.current.y * 0.00006;
        angleY = mouseRef.current.x * 0.00006;
      } else {
        angleX = angleX * 0.98 + 0.002 * 0.02;
        angleY = angleY * 0.98 + 0.002 * 0.02;
      }

      // Sort tags by z coordinate (depth) for correct occlusion drawing order (painter's algorithm)
      const sortedTags = [...tags].sort((a, b) => b.z - a.z);

      sortedTags.forEach((tag) => {
        rotateX(tag, angleX);
        rotateY(tag, angleY);

        const depth = 320;
        const scale = depth / (depth + tag.z); // Perspective projection coefficient
        const x2d = tag.x * scale + width / 2;
        const y2d = tag.y * scale + height / 2;

        // Depth calculations for styles
        const alpha = (tag.z + radius) / (2 * radius); // 0 to 1
        const opacity = 0.15 + 0.85 * alpha; // Muted background, glowing foreground
        const fontSize = Math.round(12 + 10 * scale); // 12px to 22px depending on depth

        ctx.font = `600 ${fontSize}px var(--font-heading), sans-serif`;
        
        // Dynamic multi-color neon selection based on depth coordinates
        let color = `rgba(0, 229, 255, ${opacity})`; // Electric Blue for mid
        if (tag.z > radius * 0.3) {
          color = `rgba(0, 255, 163, ${opacity})`; // Cyber Cyan when closest
        } else if (tag.z < -radius * 0.3) {
          color = `rgba(157, 78, 221, ${opacity})`; // Neon Purple when furthest
        }

        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Apply shadow/glow for tags that are closer (foreground)
        if (tag.z > radius * 0.5) {
          ctx.shadowColor = color;
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fillText(tag.text, x2d, y2d);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        width = canvas.width = container.clientWidth;
        height = canvas.height = Math.max(container.clientHeight, 400);
        radius = getRadius();
        // Re-initialize tags on size change to avoid stretching
        tags = initTags();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "450px", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          display: "block",
          touchAction: "none",
        }}
      />
    </div>
  );
}
