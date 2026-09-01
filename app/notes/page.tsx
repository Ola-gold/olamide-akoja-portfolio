import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";

export default function NotesPage() {
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Notes
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["Unfiltered thoughts", <>on systems, product intuition, and culture.</>]} />
        </h1>
        <p className="page-lead">
          Essays, short observations, and things I’ve learned while building —
          not a content factory, just things worth saying.
        </p>
      </section>

      <div className="container">
        <Reveal as="section" className="empty-state">
          <div className="empty-state__icon" aria-hidden="true">
            —
          </div>
          <h2>Notes are coming</h2>
          <p>
            I’m gathering 10–15 ideas first — product, career, design,
            research, building, life. No SEO sludge, just things worth saying.
            Check back soon, or follow along on the homepage.
          </p>
          <Magnetic href="/" className="btn btn--ghost">
            Back to home →
          </Magnetic>
        </Reveal>

        <Reveal as="section" className="section">
          <div className="section-head">
            <h2 className="section-title">What will live here</h2>
            <span className="case__role">Three formats</span>
          </div>
          <div className="notes-types">
            <div className="note-type">
              <h4>Essays</h4>
              <p>Longer, considered pieces. E.g. “What running a studio taught me about product management.”</p>
            </div>
            <div className="note-type">
              <h4>Notes</h4>
              <p>Short observations. E.g. “I don’t think every problem needs more design.”</p>
            </div>
            <div className="note-type">
              <h4>Learning</h4>
              <p>Things discovered while building. E.g. “What I’m learning from building with AI.”</p>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
