import Reveal from "@/components/Reveal";

const STEPS = [
  {
    step: "STEP 01",
    title: "Discovery & Research",
    desc: "Validate core operational bottlenecks or target user requirements before initiating visual UI layout or engineering work.",
  },
  {
    step: "STEP 02",
    title: "System Architecture",
    desc: "Design structured data flows, business communication channels, and PRD specifications to align team execution.",
  },
  {
    step: "STEP 03",
    title: "Visual Precision",
    desc: "Craft clean, minimal, and premium digital assets using Framer, Webflow, and Figma that position brands effectively.",
  },
  {
    step: "STEP 04",
    title: "AI System Integration",
    desc: "Implement practical automation pipelines (e.g. Make, Studio OS) to streamline client onboarding, invoicing, and admin workflows.",
  },
];

export default function Framework() {
  return (
    <Reveal as="section" id="framework" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">Product &amp; Systems Logic</h2>
        <span className="section-num">03 / FRAMEWORK</span>
      </div>

      <div className="framework-list">
        {STEPS.map((s) => (
          <div className="framework-item" key={s.step}>
            <span className="fw-step">{s.step}</span>
            <span className="fw-title">{s.title}</span>
            <span className="fw-desc">{s.desc}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
