import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Loader.css";

const greetings = ["Hello", "こんにちは", "வணக்கம்"];

export default function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const chars = text.textContent?.split("") || [];
    text.innerHTML = chars.map((c) => `<span class="char">${c}</span>`).join("");

    const tl = gsap.timeline({
      onComplete: () => {
        if (current < greetings.length - 1) {
          setCurrent((p) => p + 1);
        } else {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            onComplete: () => {
              containerRef.current?.remove();
            },
          });
        }
      },
    });

    tl.fromTo(
      text.querySelectorAll(".char"),
      { opacity: 0, y: 25, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.025,
        duration: 0.35,
        ease: "power3.out",
      }
    ).to(text.querySelectorAll(".char"), {
      opacity: 0,
      y: -20,
      filter: "blur(6px)",
      stagger: 0.02,
      duration: 0.25,
      delay: 0.12,
    });

    return () => {
      tl.kill();
    };
  }, [current]);

  return (
    <div ref={containerRef} id="loader">
      <div ref={textRef} id="loader-text">
        {greetings[current]}
      </div>
    </div>
  );
}
