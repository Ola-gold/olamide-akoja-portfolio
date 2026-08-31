import Link from "next/link";
import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";
import { CASES } from "@/lib/cases";

const LOGOS = [
  "Vairam Edits",
  "Tractify",
  "Capital Flow",
  "LVI",
  "Toki",
  "Rift AI",
  "Zanga",
  "LinkedIn content strategy",
  "Framer templates",
];

export default function WorkPage() {
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Work
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["Selected work"]} />
        </h1>
        <p className="page-lead">
          A selection of products, businesses and problems I&apos;ve worked on.
          Studio OS first — it says the most about where I&apos;m going.
        </p>
      </section>

      <div className="container">
        <div className="work-cards">
          {CASES.map((c) => (
            <Reveal as="div" key={c.slug}>
              <Link href={`/work/${c.slug}`} className="work-card" data-cursor>
                <div
                  className="work-card__media"
                  style={{ backgroundImage: `url(${c.img})` }}
                  aria-hidden="true"
                />
                <div className="work-card__body">
                  <div className="work-card__top">
                    <span className="work-card__idx">{c.idx}</span>
                    <span className="case__role">{c.role}</span>
                  </div>
                  <h2 className="work-card__title">{c.title}</h2>
                  <p className="work-card__summary">{c.summary}</p>
                  <div className="work-card__tags">
                    {c.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="t-go">View case study →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal as="section" className="case">
          <div className="case__head">
            <h2 className="case__title">Also worth a mention</h2>
            <span className="case__role">Archive</span>
          </div>
          <div className="logo-wall">
            {LOGOS.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <p className="about__bio" style={{ marginTop: "2rem", maxWidth: "60ch" }}>
            <strong>Vogue Vista (archive)</strong> — pure visual-design case
            study, held back intentionally. The five above tell a stronger
            story about evolution beyond design. Plus lighter hits and Framer
            templates from earlier practice.
          </p>
        </Reveal>
      </div>

      <Reveal as="section" className="closer">
        <h2>
          Like how I <em>think</em>? Let&apos;s talk.
        </h2>
        <Magnetic href="/contact" className="btn btn--primary">
          Get in touch ↗
        </Magnetic>
      </Reveal>
    </main>
  );
}
