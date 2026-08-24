import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <Reveal as="section" className="hero">
      <div className="hero-meta">Product Manager / UX Researcher / Builder</div>
      <h1 className="hero-title">
        Building intentional digital products &amp; automated system
        infrastructure. <span>Rooted in product design.</span>
      </h1>
      <div className="hero-sub">
        <p className="hero-desc">
          Co-Founder &amp; BizDev Lead at <strong>Parallel Lab</strong>. I bridge
          human-centered research, product strategy, and practical AI systems to
          help startups and founders scale.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn btn-primary">
            Selected Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Connect
          </a>
        </div>
      </div>
    </Reveal>
  );
}
