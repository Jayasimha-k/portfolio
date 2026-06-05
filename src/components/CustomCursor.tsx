"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setTimeout(() => {
      setVisible(true);
    }, 0);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive") ||
        target.getAttribute("role") === "button"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "var(--accent-cyan)" : "var(--accent-blue)"}`,
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? "rgba(0, 255, 163, 0.08)" : "rgba(0, 229, 255, 0.0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          x: 13,
          y: 13,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: hovered ? "var(--accent-cyan)" : "var(--accent-blue)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: hovered 
            ? "0 0 10px var(--accent-cyan), 0 0 20px var(--accent-cyan)" 
            : "0 0 8px var(--accent-blue), 0 0 15px var(--accent-blue)",
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
