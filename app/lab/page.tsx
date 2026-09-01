import Link from "next/link";
import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";
import { LAB_EXPERIMENT } from "@/lib/cases";

const EXPERIMENTS = [
  {
    slug: LAB_EXPERIMENT.slug,
    title: LAB_EXPERIMENT.title,
    meta: LAB_EXPERIMENT.meta,
    summary: LAB_EXPERIMENT.summary,
    href: LAB_EXPERIMENT.href,
    why: "Why I built this: I wanted to eliminate 3 hours of repetitive client triage every Monday morning.",
  },
  {
    title: "Make Automations",
    meta: "Make.com · Tally · Sheets",
    summary:
      "Tiny workflow experiments — what breaks, what scales, what’s worth keeping. Documented as I go.",
    why: "Why: to see which automations actually save time versus just demo well.",
  },
  {
    title: "Website Experiments",
    meta: "Next.js · Framer · Prototypes",
    summary:
      "This site itself is a lab — type, layout, motion, and content systems iterated in public.",
    why: "Why: to treat the portfolio as a product, not a poster.",
  },
];

export default function LabPage() {
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Lab
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["Playground &", <>Prototypes: experiments in progress.</>]} />
        </h1>
        <p className="page-lead">
          Projects don’t have to be commercially successful. They don’t even have
          to be finished — Lab is where I learn by making.
        </p>
      </section>

      <div className="container">
        <div className="lab-grid">
          {EXPERIMENTS.map((e) => (
            <Reveal as="article" className="lab-card" key={e.title}>
              <div className="lab-card__top">
                <span className="case__role">{e.meta}</span>
              </div>
              <h2>{e.title}</h2>
              <p>{e.summary}</p>
              {(e as any).why && (
                <p className="muted" style={{ fontStyle: "italic", marginTop: "0.4rem" }}>
                  {(e as any).why}
                </p>
              )}
              {e.href ? (
                <Link href={e.href} className="t-go">
                  View case study →
                </Link>
              ) : (
                <span className="t-go" style={{ opacity: 0.6 }}>
                  Coming soon
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal as="section" className="empty-state">
          <h2>More experiments coming</h2>
          <p>
            Prototypes, tiny tools, product concepts, research experiments — added
            as they’re built. No fake “AI expert” framing; just curiosity +
            initiative.
          </p>
          <Magnetic href="/now" className="btn btn--ghost">
            See what I’m up to →
          </Magnetic>
        </Reveal>
      </div>
    </main>
  );
}
