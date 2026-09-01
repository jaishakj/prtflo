import "./Marquee.css";

const items = [
  "AI ENGINEER",
  "MACHINE LEARNING",
  "COMPUTER VISION",
  "RAG SYSTEMS",
  "FULL-STACK",
  "PYTHON",
  "TENSORFLOW",
];

export default function Marquee() {
  const text = items.join(" ✦ ") + " ✦ ";
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
