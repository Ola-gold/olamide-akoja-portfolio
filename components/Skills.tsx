import Reveal from "@/components/Reveal";

const GROUPS = [
  {
    title: "Product & PM",
    skills: ["PRD Creation", "Linear & Miro", "Sprint Planning", "UX Research"],
  },
  {
    title: "Design & Web",
    skills: ["Figma", "Framer", "Webflow", "Design Systems"],
  },
  {
    title: "AI & Automation",
    skills: ["Make.com", "AI Automation", "System Logic", "Builder Workflows"],
  },
  {
    title: "Business & Ops",
    skills: [
      "BizDev Strategy",
      "Client Management",
      "Inbound Systems",
      "Content Strategy",
    ],
  },
];

export default function Skills() {
  return (
    <Reveal as="section" id="skills" className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
            Capability Matrix
          </div>
          <h2 className="section-title">The full toolkit.</h2>
        </div>
        <span className="idx">04 / TOOLKIT</span>
      </div>

      <div className="skills">
        {GROUPS.map((g) => (
          <div className="skill-col" key={g.title}>
            <h4>{g.title}</h4>
            <ul>
              {g.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
