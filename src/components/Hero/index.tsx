import { useRef, useState, useCallback } from "react";
import { useMagnetic } from "../../hooks/useMagnetic";
import "./Hero.css";

const devQuoteMain =
  "Studied Software Engineering just to become the condom between Claude Code and Prod.";
const devQuoteSub =
  "I spend more time arguing with LLMs than with people—and surprisingly, the LLMs usually lose.";

const devBadges = [
  'git commit -m "works on my machine"',
  "sudo make coffee",
  "AI > Boilerplate",
  "Ship > Perfect",
];

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const { ref: magneticRef, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLAnchorElement>({ strength: 0.25 });
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleFlip = useCallback(() => {
    setFlipped((f) => !f);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    },
    [toggleFlip]
  );

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="line-mask">
                <span className="line load-reveal">BUILD THE</span>
              </span>
              <span className="line-mask">
                <span className="line load-reveal" data-load-delay="1">
                  FUTURE WITH
                </span>
              </span>
              <span className="line-mask">
                <span className="line load-reveal highlight" data-load-delay="2">
                  AI ENGINEERING!
                </span>
              </span>
            </h1>

            <div className="badge-circle load-reveal" data-load-delay="3">
              <svg viewBox="0 0 200 200" className="badge-ring" aria-hidden="true">
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  fill="none"
                />
                <text className="badge-ring-text">
                  <textPath href="#circlePath">
                    ML • COMPUTER VISION • FULL-STACK DEV • DATA SCIENCE •
                  </textPath>
                </text>
              </svg>
              <a
                href="https://github.com/jaishakj"
                target="_blank"
                rel="noopener"
                className="badge-btn magnetic"
                aria-label="Visit my GitHub profile"
                ref={magneticRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            <div
              className={`info-card flip-card press ${flipped ? "is-flipped" : ""}`}
              ref={cardRef}
              role="button"
              tabIndex={0}
              aria-pressed={flipped}
              aria-label="Toggle professional and developer view"
              onClick={toggleFlip}
              onKeyDown={handleKeyDown}
            >
              <div className="flip-inner">
                <div className="flip-face flip-front">
                  <div className="card-header">
                    <span className="card-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </span>
                    <span className="card-label">PROFESSIONAL PROFILE</span>
                  </div>
                  <p className="card-text">
                    Building AI systems that solve real-world problems—from computer vision pipelines to RAG applications.
                  </p>
                  <div className="card-footer-row">
                    <div className="stat-icons">
                      <span className="stat-icon-circle" data-stat="7+ Projects">
                        <svg viewBox="0 0 24 24" width="14" height="14">
                          <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" />
                        </svg>
                      </span>
                      <span className="stat-icon-circle" data-stat="3 AI Systems">
                        <svg viewBox="0 0 24 24" width="14" height="14">
                          <rect x="4" y="7" width="16" height="12" rx="2" />
                          <circle cx="9" cy="13" r="1.3" />
                          <circle cx="15" cy="13" r="1.3" />
                          <path d="M9 4h6v3H9z" />
                        </svg>
                      </span>
                      <span className="stat-icon-circle" data-stat="15+ Technologies">
                        <svg viewBox="0 0 24 24" width="14" height="14">
                          <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </span>
                    </div>
                    <span className="cta-pill">
                      Open to Work
                      <span className="cta-pill-icon">
                        <span className="stat-icon-live" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flip-face flip-back">
                  <div className="card-header">
                    <span className="card-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 9l-4 3l4 3" />
                        <path d="M16 9l4 3l-4 3" />
                        <path d="M12 6l-2 12" />
                      </svg>
                    </span>
                    <span className="card-label">DEV MODE</span>
                  </div>
                  <p className="card-text dev-quote">{devQuoteMain}</p>
                  <p className="card-text dev-quote-sub">{devQuoteSub}</p>
                  <div className="terminal-badges">
                    {devBadges.map((badge, i) => (
                      <span key={i} className="term-badge">
                        {badge}
                        {i === devBadges.length - 1 && <span className="term-cursor" />}
                      </span>
                    ))}
                  </div>
                  <span className="flip-hint">← Back to professional</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right load-reveal" data-load-delay="2">
            <div className="image-card main-card">
              <img src="/assets/anime1.png" alt="Jaishak J — AI Engineer portrait" loading="eager" />
              <div className="edge-strip">
                <span className="edge-star">★</span>
                <span className="edge-star">★</span>
                <span className="edge-arrow">↑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
