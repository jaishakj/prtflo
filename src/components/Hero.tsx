import heroImage from "@/assets/anime1.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left */}
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="line-mask">
                <span className="line load-reveal">
                  BUILD THE
                </span>
              </span>

              <span className="line-mask">
                <span
                  className="line load-reveal"
                  data-load-delay="1"
                >
                  FUTURE WITH
                </span>
              </span>

              <span className="line-mask">
                <span
                  className="line load-reveal highlight"
                  data-load-delay="2"
                >
                  AI ENGINEERING!
                </span>
              </span>
            </h1>

            <div
              className="badge-circle load-reveal"
              data-load-delay="3"
            >
              <svg
                className="badge-ring"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
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
                rel="noopener noreferrer"
                className="badge-btn magnetic"
                aria-label="Visit my GitHub profile"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            <div
              className="info-card load-reveal press"
              data-load-delay="4"
            >
              <div className="card-header">
                <span className="card-icon" aria-hidden="true">
                  💼
                </span>

                <span className="card-label">
                  PROFESSIONAL PROFILE
                </span>
              </div>

              <p className="card-text">
                AI Engineer specializing in ML, deep learning &
                full-stack development. Building intelligent systems
                with Python, TensorFlow &amp; modern frameworks.
              </p>

              <div className="card-footer">
                <a
                  href="#contact"
                  className="download-btn press"
                >
                  <span>CONTACT ME</span>

                  <span
                    className="arrow"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </a>

                <div className="location">
                  <span
                    className="location-dot"
                    aria-hidden="true"
                  />

                  <span>Chennai, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className="hero-right load-reveal"
            data-load-delay="2"
          >
            <div
              className="image-card main-card"
              data-parallax
            >
              <img
                src={heroImage}
                alt="Stylized anime illustration of Jaishak"
                width={400}
                height={500}
              />

              <div
                className="star-badge"
                aria-hidden="true"
              >
                ★
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
