import Reveal from "@/components/Reveal";

type Project = {
  href: string;
  tag: string;
  title: string;
  desc: string;
  initial: string;
};

const PROJECTS: Project[] = [
  {
    href: "https://parallellab.co",
    tag: "Agency / BizDev & PM",
    title: "Parallel Lab Studio",
    desc: "Branding, web development, and digital presence for startups and executives across US, Canada, and globally.",
    initial: "P",
  },
  {
    href: "https://studio-os.v2.demo",
    tag: "Internal OS / V2 Live",
    title: "Studio OS",
    desc: "Client management platform replacing WhatsApp workflows with automated proposals, payments, and invoicing.",
    initial: "S",
  },
  {
    href: "https://vairam-edits.ai",
    tag: "AI Platform / UX & PM",
    title: "Vairam Edits",
    desc: "AI jewelry editing platform — milestone specs, high-fidelity UX workflows, and dev proposals.",
    initial: "V",
  },
  {
    href: "https://squaredlabadvisory.com",
    tag: "HR Consulting / Web",
    title: "SquaredLab Advisory",
    desc: "End-to-end website strategy, visual identity, and structure for executive HR consulting.",
    initial: "L",
  },
  {
    href: "https://hnlarchitecture.com",
    tag: "Architecture Studio",
    title: "HNL Architecture",
    desc: "Minimalist editorial showcase for premium structural and architectural projects.",
    initial: "H",
  },
  {
    href: "https://mind2muscle.app",
    tag: "Fitness / UX Strategy",
    title: "Mind2Muscle App",
    desc: "UX mapping, qualitative interviews, and feature prioritization for a mobile fitness brand.",
    initial: "M",
  },
];

export default function Work() {
  return (
    <Reveal as="section" id="work" className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
            Selected Projects
          </div>
          <h2 className="section-title">Work, cultivated end to end.</h2>
        </div>
        <span className="idx">01 / WORK</span>
      </div>

      <div className="work-grid">
        {PROJECTS.map((p, i) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
          >
            <div className="work-card__plate" data-initial={p.initial} aria-hidden="true" />
            <div className="work-card__top">
              <span className="tag">{p.tag}</span>
              <span className="work-card__idx">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="work-card__body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="work-card__arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
