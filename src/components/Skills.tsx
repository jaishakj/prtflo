// src/components/Skills.tsx

type SkillCategory = {
  icon: string;
  title: string;
  skills: string[];
  delay?: number;
};

const skillCategories: SkillCategory[] = [
  {
    icon: "💻",
    title: "PROGRAMMING LANGUAGES",
    skills: ["Python", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    icon: "🤖",
    title: "AI & MACHINE LEARNING",
    delay: 1,
    skills: [
      "TensorFlow",
      "scikit-learn",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "LLM",
      "Prompt Engineering",
      "AI Automation",
    ],
  },
  {
    icon: "📊",
    title: "DATA SCIENCE & TOOLS",
    delay: 2,
    skills: [
      "Pandas",
      "NumPy",
      "Data Analysis",
      "MATLAB",
      "Jupyter",
    ],
  },
  {
    icon: "🚀",
    title: "DEVELOPMENT & FRAMEWORKS",
    delay: 3,
    skills: [
      "React.js",
      "FastAPI",
      "REST API",
      "Docker",
      "GitHub",
      "Frontend Dev",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="title-underline" />
        </div>

        <div className="skills-grid-main">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-category reveal press"
              data-reveal-delay={category.delay}
            >
              <div className="skill-category-header">
                <span
                  className="skill-icon"
                  aria-hidden="true"
                >
                  {category.icon}
                </span>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
