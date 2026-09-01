import { useEffect, useRef } from "react";
import { educations } from "../../data/education";
import { experiences } from "../../data/experience";
import "./Education.css";

function useReveal() {
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
  return ref;
}

export default function Education() {
  const eduRef = useReveal();
  const expRef = useReveal();

  return (
    <section className="education-section" id="education">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">EDUCATION & EXPERIENCE</h2>
          <div className="title-underline" />
        </div>

        <div className="education-experience-grid">
          {educations.map((edu) => (
            <div className="info-box reveal press" ref={eduRef} key={edu.id}>
              <div className="info-number" aria-hidden="true">
                {edu.number}
              </div>
              <h3>{edu.title}</h3>
              <p>
                {edu.degree}
                <br />
                {edu.institution}
                <br />
                {edu.university} ({edu.period})
                <br />
                {edu.grade}
              </p>
            </div>
          ))}

          {experiences.map((exp) => (
            <div className="info-box reveal press" ref={expRef} key={exp.id} data-reveal-delay="1">
              <div className="info-number" aria-hidden="true">
                {exp.number}
              </div>
              <h3>{exp.title}</h3>
              <p>
                {exp.organization}
                <br />
                {exp.period} · {exp.location}
                <br />
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
