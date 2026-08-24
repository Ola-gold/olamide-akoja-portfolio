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
    <Reveal as="section" id="skills" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">Capability Matrix</h2>
        <span className="section-num">04 / TOOLKIT</span>
      </div>

      <div className="skills-wrapper">
        {GROUPS.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
