import Reveal from "@/components/Reveal";

const EXPERIENCE = [
  {
    role: "Co-Founder & Head of Business Development / PM",
    company: "Parallel Lab • Present",
  },
  {
    role: "UX Researcher & Product Specialist",
    company: "Independent • 2023 - Present",
  },
  {
    role: "Product & Web Designer",
    company: "Foundation Era",
  },
];

export default function About() {
  return (
    <Reveal as="section" id="about" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">Background &amp; Evolution</h2>
        <span className="section-num">02 / ABOUT</span>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <p>
            I transitioned from Product Design into Product Management and AI
            Systems Building. Having studied Plant Biology at the University of
            Ilorin, I approach digital systems with an organic, structured logic.
          </p>
          <p>
            Beyond running <strong>Parallel Lab</strong> with my partners, I
            build practical AI automation systems using Make and custom
            workflows, conduct UX research, write relatable career content, and
            explore documentary photography.
          </p>
        </div>

        <div className="exp-log">
          {EXPERIENCE.map((item) => (
            <div className="exp-item" key={item.company}>
              <div className="exp-role">{item.role}</div>
              <div className="exp-company">{item.company}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
