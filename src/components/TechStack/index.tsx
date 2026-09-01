import { useEffect, useRef } from "react";
import { skillCategories } from "../../data/skills";
import { Code, Brain, BarChart3, Terminal, Database, Settings } from "lucide-react";
import "./TechStack.css";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={22} />,
  brain: <Brain size={22} />,
  "bar-chart": <BarChart3 size={22} />,
  terminal: <Terminal size={22} />,
  database: <Database size={22} />,
  settings: <Settings size={22} />,
};

function SkillRow({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
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
    <div className="stack-row reveal press" ref={ref} data-reveal-delay={String(index % 3)}>
      <div className="stack-domain">
        <span className="domain-icon">{iconMap[category.icon]}</span>
        {category.domain}
      </div>
      <div className="stack-techs">
        {category.technologies.map((tech) => (
          <span
            key={tech.name}
            className="tech-pill"
            style={{ "--pill": tech.color } as React.CSSProperties}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="skills-section reveal" id="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title-main">TECH STACK</h2>
          <div className="title-underline" />
        </div>

        <div className="stack-table">
          <div className="stack-row stack-head">
            <div className="stack-domain">Domain</div>
            <div className="stack-techs">Technologies</div>
          </div>
          {skillCategories.map((cat, i) => (
            <SkillRow key={cat.domain} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
