import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";
import { CASES, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const c = getCase(params.slug);
  if (!c) notFound();

  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Case study · {c.idx}
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={[c.title]} />
        </h1>
        <p className="page-lead">{c.summary}</p>
        <div className="case-meta">
          <span>
            <b>Role</b>
            {c.role}
          </span>
          <span>
            <b>Year</b>
            {c.year}
          </span>
          <span>
            <b>Focus</b>
            {c.tags.join(", ")}
          </span>
        </div>
      </section>

      <div
        className="case__media case__media--hero"
        style={{ backgroundImage: `url(${c.img})` }}
        aria-hidden="true"
      />

      <div className="container">
        <Reveal as="section" className="case">
          <div className="case__block case__block--wide">
            <h4>The problem</h4>
            <p>{c.problem}</p>
          </div>

          {c.constraints && (
            <div className="case__block case__block--wide">
              <h4>Constraints</h4>
              <p>{c.constraints}</p>
            </div>
          )}

          <div className="case__block case__block--wide">
            <h4>Key decisions</h4>
            <ol className="case__list">
              {c.decisions.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ol>
          </div>

          <div className="case__block case__block--wide">
            <h4>Outcome</h4>
            <p>{c.outcome}</p>
          </div>

          {c.reflection && (
            <div className="case__block case__block--wide">
              <h4>Reflection</h4>
              <p className="case__reflection">{c.reflection}</p>
            </div>
          )}
        </Reveal>

        <Reveal as="section" className="closer">
          <Link href="/work" className="btn btn--ghost">
            ← All work
          </Link>
          <Magnetic href="/contact" className="btn btn--primary">
            Start a project ↗
          </Magnetic>
        </Reveal>
      </div>
    </main>
  );
}
