import { RefObject, useEffect } from "react";

interface MagneticOptions {
  strength?: number;
}

export function useMagnetic<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: MagneticOptions = {}
) {
  const { strength = 0.35 } = options;

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const reset = () => {
      element.style.transform = "translate(0px, 0px)";
    };

    element.style.transition = "transform 0.2s ease-out";

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", reset);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", reset);
    };
  }, [ref, strength]);
}
