import Reveal from "@/components/Reveal";

const TIMELINE = [
  {
    year: "NOW",
    role: "Co-Founder & Head of BizDev / PM",
    company: "Parallel Lab",
  },
  {
    year: "2023—",
    role: "UX Researcher & Product Specialist",
    company: "Independent",
  },
  {
    year: "—22",
    role: "Product & Web Designer",
    company: "Foundation Era",
  },
];

export default function About() {
  return (
    <Reveal as="section" id="about" className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
            Background
          </div>
          <h2 className="section-title">A structured, organic logic.</h2>
        </div>
        <span className="idx">02 / ABOUT</span>
      </div>

      <div className="about">
        <div className="about__bio">
          <p>
            I moved from <strong>Product Design</strong> into Product Management
            and AI Systems Building — approaching digital systems the way a
            plant biologist reads an ecosystem: patiently, structurally.
          </p>
          <p className="muted">
            Beyond running <strong>Parallel Lab</strong> with my partners, I
            build practical AI automation with Make and custom workflows, run UX
            research, write career content, and shoot documentary photography.
          </p>
        </div>

        <div className="timeline">
          {TIMELINE.map((t) => (
            <div className="tl-item" key={t.company}>
              <span className="tl-year">{t.year}</span>
              <div>
                <div className="tl-role">{t.role}</div>
                <div className="tl-company">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
