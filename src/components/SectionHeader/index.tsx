import { useEffect, useRef } from "react";
import "./SectionHeader.css";

interface Props {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`section-header reveal ${className}`} ref={ref}>
      <h2 className="section-title">{title}</h2>
      <div className="title-underline" />
    </div>
  );
}
