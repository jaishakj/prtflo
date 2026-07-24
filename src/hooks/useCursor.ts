// src/hooks/useCursor.ts

import { useEffect } from "react";

export default function useCursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor");

    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
}
