import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="title-underline" />
        </div>

        <div className="projects-layout">
          <div className="projects-main">
            <article className="project-card-large reveal press">
              <div className="project-badge">NEW PROJECT</div>

              <h3>AI-POWERED VIDEO SUMMARIZATION</h3>

              <p>
                Intelligent video analysis system using YOLOv5 for object
                detection and LLM integration for automated summarization.
                Processes 30 FPS streams in real time with 92% accuracy.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">YOLOV5</span>
                <span className="tech-tag">PYTHON</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">COMPUTER VISION</span>
              </div>

              <a
                href="https://github.com/jaishakj/Ai-Powered-Video-Summarisation-Multiple-Models"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link press"
              >
                VIEW ON GITHUB
                <ArrowRight size={18} />
              </a>
            </article>

            <article className="project-card-large reveal press">
              <div className="project-badge">NEW PROJECT</div>

              <h3>SUPPORT RAG CHATBOT</h3>

              <p>
                RAG-powered customer support chatbot built with LangChain,
                Pinecone, Gemini 1.5 Pro, FastAPI, and React. Vector search
                across 5,000+ documents with cited sources, multi-turn memory
                (68% → 89% accuracy), and automatic agent escalation.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">LANGCHAIN</span>
                <span className="tech-tag">PINECONE</span>
                <span className="tech-tag">GEMINI 1.5 PRO</span>
                <span className="tech-tag">FASTAPI</span>
                <span className="tech-tag">REACT</span>
                <span className="tech-tag">RAG</span>
              </div>

              <a
                href="https://github.com/jaishakj/Support-RAG-Chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link press"
              >
                VIEW ON GITHUB
                <ArrowRight size={18} />
              </a>
            </article>

            <div className="coming-soon-card reveal">
              <h3>EXPLORING MORE AI PROJECTS...</h3>

              <p>
                Continuously building and experimenting with ML and full-stack
                solutions. Check my GitHub for the latest work!
              </p>
            </div>
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
              preload="metadata"
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
