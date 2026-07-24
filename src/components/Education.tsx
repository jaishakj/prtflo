export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">EDUCATION & EXPERIENCE</h2>
          <div className="title-underline" />
        </div>

        <div className="education-experience-grid">
          <div className="info-box reveal press">
            <div className="info-number" aria-hidden="true">
              01
            </div>

            <h3>EDUCATION</h3>

            <p>
              B.Tech in Artificial Intelligence &amp; Data Science
              <br />
              Jeppiaar Institute of Technology, Chennai
              <br />
              Anna University (2021–2025)
              <br />
              CGPA: 7.34
            </p>
          </div>

          <div
            className="info-box reveal press"
            data-reveal-delay="1"
          >
            <div className="info-number" aria-hidden="true">
              02
            </div>

            <h3>EXPERIENCE</h3>

            <p>
              Machine Learning Intern @ Retech Solutions Pvt. Ltd
              <br />
              Aug 2023 – Sep 2023 · Chennai, India
              <br />
              Built churn-prediction models (87% accuracy on 50K+ records),
              cut training time 40%, deployed with FastAPI + Docker at &lt;200ms
              latency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
