import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Max magnetic pull range
      const maxDistance = Math.max(width, height) * 1.5;
      const currentDistance = Math.hypot(distanceX, distanceY);

      if (currentDistance < maxDistance) {
        // Closer to center = stronger pull
        const strength = 0.35;
        gsap.to(element, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        handleMouseLeave();
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
}
