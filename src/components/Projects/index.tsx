import { useEffect, useRef } from "react";
import { projects } from "../../data/projects";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);

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
    <article className="project-card reveal press" ref={ref} data-reveal-delay={String(index % 3)}>
      <div className="project-number">{project.number}</div>
      <div className="project-badge">FEATURED</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-tags">
        {project.technologies.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener"
          className="project-link press"
        >
          VIEW ON GITHUB <ArrowUpRight size={16} />
        </a>
      )}
    </article>
  );
}

export default function Projects() {
  const dividerRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = dividerRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            path.classList.add("is-drawn");
            obs.unobserve(path);
          }
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(path);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="title-underline" />
        </div>

        <div className="projects-layout">
          <div className="projects-main">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}

            <a href="https://github.com/jaishakj" target="_blank" rel="noopener" className="more-projects-card reveal">
              <div className="more-projects-content">
                <h3>Exploring More AI Projects...</h3>
                <p>
                  Continuously building and experimenting with ML and full-stack
                  solutions. Check out my complete collection of projects on GitHub.
                </p>
                <span className="more-projects-link">
                  View All Projects →
                </span>
              </div>
            </a>
          </div>

          <div className="project-side-image-circle reveal">
            <video
              className="rotating-image"
              autoPlay
              muted
              loop
              playsInline
              width={350}
              height={350}
              loading="lazy"
              aria-label="Decorative looping animation"
            >
              <source src="/assets/raccoon.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
