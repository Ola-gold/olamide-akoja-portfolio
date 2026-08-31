import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { CASES } from "@/lib/cases";

const SELECTED = CASES.slice(0, 4);

export default function Home() {
  return (
    <main id="main">
      {/* 01 — Opening statement §4 — LOCKED — Adaora-inspired with portrait */}
      <section className="home-opening container">
        <div className="home-opening__grid">
          <div className="home-opening__text">
            <Reveal as="h1" className="home-opening__title">
              I like figuring
              <br />
              things <em>out.</em>
            </Reveal>
            <Reveal as="div" className="home-opening__support">
              <p>
                I’m curious about problems — how they happen, how people
                experience them, and what might make them better.
              </p>
              <p>
                My work moves between product, research, design and technology, but
                the process is usually the same: understand, make sense, and build.
              </p>
            </Reveal>
          </div>
          <Reveal as="div" className="home-opening__image">
            <img
              src="/portrait/olamide.jpg"
              alt="Olamide Akoja"
              width={540}
              height={680}
            />
          </Reveal>
        </div>
      </section>

      {/* 02 — Short introduction */}
      <Reveal as="section" className="home-intro container">
        <div className="home-intro__grid">
          <div className="eyebrow">A little about me</div>
          <div className="home-intro__body">
            <p>
              I began in design — learning how things should feel, not just how
              they look. The more I designed, the more I wanted to understand
              the problems underneath the interfaces.
            </p>
            <p className="muted">
              That led toward product, research and business. I now work across
              those disciplines while running{" "}
              <a href="https://parallellab.co" target="_blank" rel="noopener noreferrer">
                Parallel Lab
              </a>
              , a studio I co-run, and learning to build with AI — not to
              pretend I’m an expert, but to figure it out by making things.
            </p>
            <a href="/about" className="t-go">
              More about me →
            </a>
          </div>
        </div>
      </Reveal>

      {/* 03 — Selected Work §5 — redesigned, center-aligned */}
      <Reveal as="section" className="section container">
        <div className="section-head section-head--center">
          <span className="idx">01 / WORK</span>
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">A few things that show how I think.</h2>
          </div>
        </div>

        <div className="home-work">
          {SELECTED.map((c) => (
            <a
              key={c.slug}
              href={`/work/${c.slug}`}
              className="home-work__item"
              data-cursor
            >
              <div className="home-work__eyebrow">
                {c.idx} — {c.tags[0]}
              </div>
              <div
                className="home-work__media"
                style={{ backgroundImage: `url(${c.img})` }}
                aria-hidden="true"
              />
              <div className="home-work__text">
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <div className="home-work__pills">
                  {c.tags.slice(1).map((t) => (
                    <span key={t} className="home-work__pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <a href="/work" className="t-go">
            All work →
          </a>
        </div>
      </Reveal>

      {/* 04 — How I Work §6 */}
      <Reveal as="section" className="section container home-how">
        <div className="eyebrow" style={{ marginBottom: "2rem" }}>
          How I work
        </div>
        <h2 className="home-how__title">
          I tend to work from the <em>problem</em> outward.
        </h2>
        <div className="home-how__grid">
          <div>
            <h4>Understand.</h4>
            <p>I ask questions until the problem makes sense.</p>
          </div>
          <div>
            <h4>Structure.</h4>
            <p>I turn complexity into something people can understand and act on.</p>
          </div>
          <div>
            <h4>Make.</h4>
            <p>I prototype, design, build and collaborate until the idea becomes tangible.</p>
          </div>
          <div>
            <h4>Learn.</h4>
            <p>I pay attention to what happened and carry the lesson into the next problem.</p>
          </div>
        </div>
      </Reveal>

      {/* 05 — Lab preview §7 */}
      <Reveal as="section" className="section container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Lab
            </div>
            <h2 className="section-title">Currently learning how to build with AI.</h2>
          </div>
          <span className="idx">02 / LAB</span>
        </div>
        <div className="lab-preview">
          <a href="/lab/ai-intake" className="lab-preview__item">
            <h4>AI Client-Intake Automation</h4>
            <p>An experiment in using AI to turn an otherwise manual intake process into a more structured workflow.</p>
            <span className="case__role">Built while learning AI automation</span>
            <span className="t-go">View experiment →</span>
          </a>
          <div className="lab-preview__item lab-preview__item--muted">
            <h4>Make Automations</h4>
            <p>Tiny workflow experiments — what breaks, what scales, what’s worth keeping.</p>
            <span className="case__role">Documenting</span>
          </div>
          <div className="lab-preview__item lab-preview__item--muted">
            <h4>Website Experiments</h4>
            <p>This site is a lab — type, layout, motion iterated in public.</p>
            <span className="case__role">Ongoing</span>
          </div>
        </div>
        <a href="/lab" className="t-go" style={{ marginTop: "1.5rem", display: "inline-block" }}>
          All experiments →
        </a>
      </Reveal>

      {/* 06 — Notes preview §8 */}
      <Reveal as="section" className="section container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Notes
            </div>
            <h2 className="section-title">Things I’m thinking about.</h2>
          </div>
          <span className="idx">03 / NOTES</span>
        </div>
        <div className="notes-preview">
          <a href="/notes" className="notes-preview__item">
            <h4>I don’t think every problem needs more design.</h4>
            <span className="case__role">Note · Product</span>
          </a>
          <a href="/notes" className="notes-preview__item">
            <h4>What running a studio taught me about product management.</h4>
            <span className="case__role">Essay · Business</span>
          </a>
          <a href="/notes" className="notes-preview__item">
            <h4>What I’m learning from building with AI.</h4>
            <span className="case__role">Learning · Lab</span>
          </a>
        </div>
        <a href="/notes" className="t-go" style={{ marginTop: "1.5rem", display: "inline-block" }}>
          All notes →
        </a>
      </Reveal>

      {/* 07 — Fieldwork preview §9 */}
      <Reveal as="section" className="section container home-fieldwork">
        <div
          className="home-fieldwork__media"
          style={{ backgroundImage: "url(/photos/pf-1.jpg)" }}
          aria-hidden="true"
        />
        <div className="home-fieldwork__text">
          <h2>Fieldwork</h2>
          <p>I photograph people, places and moments that make me pay attention.</p>
          <a href="/fieldwork" className="t-go">
            View fieldwork →
          </a>
        </div>
      </Reveal>

      {/* 08 — Now preview §10 */}
      <Reveal as="section" className="section container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Now
            </div>
            <h2 className="section-title">What I’m up to.</h2>
          </div>
          <span className="idx">04 / NOW</span>
        </div>
        <div className="now-preview">
          <div>
            <b>Learning</b>
            <span>Building with AI</span>
          </div>
          <div>
            <b>Working on</b>
            <span>Product / Parallel Lab</span>
          </div>
          <div>
            <b>Reading</b>
            <span>Systems, storytelling, photography</span>
          </div>
          <div>
            <b>Thinking about</b>
            <span>Clarity vs. simplicity</span>
          </div>
        </div>
        <a href="/now" className="t-go" style={{ marginTop: "1.5rem", display: "inline-block" }}>
          See what I’m up to →
        </a>
      </Reveal>

      {/* 09 — Final CTA §11 */}
      <Reveal as="section" className="closer container">
        <h2>
          If something here <em>resonates</em>, say hello.
        </h2>
        <div className="home-cta__links">
          <Magnetic href="mailto:olamideibukunoluwa5@gmail.com" className="btn btn--primary">
            Email ↗
          </Magnetic>
          <a href="https://www.linkedin.com/in/olamideakoja/" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/olamide_akoja/" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Instagram
          </a>
        </div>
      </Reveal>
    </main>
  );
}
