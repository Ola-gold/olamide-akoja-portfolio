import Link from "next/link";
import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";
import { LAB_EXPERIMENT } from "@/lib/cases";

export default function LabAiIntakePage() {
  const c = LAB_EXPERIMENT;
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Lab · Experiment
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={[c.title]} />
        </h1>
        <p className="page-lead">{c.summary}</p>
        <p className="case__role">{c.meta}</p>
        <p className="case__role" style={{ marginTop: "0.6rem" }}>
          Built while learning AI automation.
        </p>
      </section>

      <div
        className="case__media case__media--hero"
        style={{ backgroundImage: `url(${c.img})` }}
        aria-hidden="true"
      />

      <div className="container">
        <Reveal as="section" className="case">
          <div className="case__block case__block--wide">
            <h4>What I wanted to solve</h4>
            <p>{c.problem}</p>
          </div>
          <div className="case__block case__block--wide">
            <h4>What I built</h4>
            <ol className="case__list">
              {c.decisions.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ol>
          </div>
          <div className="case__block case__block--wide">
            <h4>What happened</h4>
            <p>{c.outcome}</p>
          </div>
          <div className="case__block case__block--wide">
            <h4>What I learned</h4>
            <p className="case__reflection">{c.reflection}</p>
          </div>
        </Reveal>

        <Reveal as="section" className="closer">
          <Link href="/lab" className="btn btn--ghost">
            ← All experiments
          </Link>
          <Magnetic href="/contact" className="btn btn--primary">
            Say hello ↗
          </Magnetic>
        </Reveal>
      </div>
    </main>
  );
}
