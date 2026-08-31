import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__field" aria-hidden="true" />
      <div className="hero__inner">
        <Reveal as="div" className="hero__meta eyebrow">
          Lagos, Nigeria
        </Reveal>

        <div className="status-pill">
          <span className="status-pill__dot" aria-hidden="true" />
          Open to PM &amp; UX research roles
        </div>

        <h1 className="hero__title">
          <MaskLines
            lines={[
              "I've been a writer,",
              <>
                a builder, <em>a strategist.</em>
              </>,
            ]}
          />
        </h1>

        <div className="hero__foot">
          <div>
            <p className="hero__desc">
              The thread through all of it — I go learn the thing instead of
              just talking about it. I run business development &amp; product at{" "}
              <strong>Parallel Lab</strong>, and I&apos;m pursuing a full-time
              move into product management. On the side, I&apos;m teaching
              myself to build with AI.
            </p>
            <div className="beat" style={{ marginTop: "2rem" }}>
              <span className="b-dot" aria-hidden="true" />
              Most mornings start with a 6am run before anything else does.
            </div>
          </div>
          <div className="cta-row">
            <Magnetic href="/work" className="btn btn--primary">
              See the work ↗
            </Magnetic>
            <Magnetic href="/contact" className="btn btn--ghost" strength={0.25}>
              Get in touch
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
