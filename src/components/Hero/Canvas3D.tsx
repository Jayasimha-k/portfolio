"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AICore from "./AICore";

export default function Canvas3D() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]} // Limit pixel ratio to max 1.5 for performance optimization
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "auto" }}
      >
        <Suspense fallback={null}>
          <AICore />
        </Suspense>
      </Canvas>
    </div>
  );
}
