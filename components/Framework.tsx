import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Research",
    desc: "Validate operational bottlenecks or user requirements before any visual or engineering work begins.",
  },
  {
    n: "02",
    title: "System Architecture",
    desc: "Design data flows, communication channels, and PRDs that align the whole team's execution.",
  },
  {
    n: "03",
    title: "Visual Precision",
    desc: "Craft clean, minimal, premium assets in Framer, Webflow, and Figma that position brands effectively.",
  },
  {
    n: "04",
    title: "AI System Integration",
    desc: "Ship practical automation pipelines (Make, Studio OS) across onboarding, invoicing, and admin.",
  },
];

export default function Framework() {
  return (
    <Reveal as="section" id="framework" className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
            Product & Systems Logic
          </div>
          <h2 className="section-title">How the work is grown.</h2>
        </div>
        <span className="idx">03 / FRAMEWORK</span>
      </div>

      <div className="fw-list">
        {STEPS.map((s) => (
          <div className="fw-row" key={s.n}>
            <span className="fw-step">{s.n}</span>
            <span className="fw-title">{s.title}</span>
            <span className="fw-desc">{s.desc}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
