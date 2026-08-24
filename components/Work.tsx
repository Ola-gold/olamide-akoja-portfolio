import Reveal from "@/components/Reveal";

type Project = {
  href: string;
  span: string;
  tag: string;
  title: string;
  desc: string;
};

const PROJECTS: Project[] = [
  {
    href: "https://parallellab.co",
    span: "span-8",
    tag: "Agency / BizDev & PM",
    title: "Parallel Lab Studio",
    desc: "Branding, web development, and digital presence studio serving startups and executives in US, Canada, and globally. Leading client operations, proposals, and PM.",
  },
  {
    href: "https://studio-os.v2.demo",
    span: "span-4",
    tag: "Internal OS / V2 Live",
    title: "Studio OS",
    desc: "Custom client management platform built to replace WhatsApp workflows with automated proposals, payment tracking, and invoicing.",
  },
  {
    href: "https://vairam-edits.ai",
    span: "span-6",
    tag: "AI Platform / UX & PM",
    title: "Vairam Edits",
    desc: "AI jewelry editing platform. Milestone specs, high-fidelity UX workflows, and development proposals.",
  },
  {
    href: "https://squaredlabadvisory.com",
    span: "span-6",
    tag: "HR Consulting / Web",
    title: "SquaredLab Advisory",
    desc: "End-to-end website strategy, visual identity alignment, and web structure for executive HR consulting.",
  },
  {
    href: "https://hnlarchitecture.com",
    span: "span-4",
    tag: "Architecture Studio",
    title: "HNL Architecture",
    desc: "Minimalist editorial showcase website for premium structural and architectural projects.",
  },
  {
    href: "https://mind2muscle.app",
    span: "span-8",
    tag: "Fitness / UX Strategy",
    title: "Mind2Muscle App",
    desc: "User experience mapping, qualitative interviews, and feature prioritization for a mobile fitness brand.",
  },
];

export default function Work() {
  return (
    <Reveal as="section" id="work" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">Selected Projects</h2>
        <span className="section-num">01 / WORK</span>
      </div>

      <div className="project-grid">
        {PROJECTS.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card ${p.span}`}
          >
            <div className="card-top">
              <span className="card-tag">{p.tag}</span>
              <span className="card-link-icon" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="card-bottom">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
