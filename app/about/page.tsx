import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";

const SKILLS = [
  "Roadmapping",
  "Sprint Planning",
  "Discovery & Requirements",
  "Stakeholder Management",
  "Commercial Strategy",
  "UX Research",
  "Cross-functional Coordination",
  "Scope Management",
  "Go-to-market Strategy",
  "AI Workflow Automation",
];

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          About
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["The short version:", <>I keep learning the thing.</>]} />
        </h1>
        <p className="page-lead">
          I was a writer before I was anything else. I read constantly growing
          up — fiction, nonfiction, whatever I could get — and I wrote just as
          much, long before I knew it would matter.
        </p>
        <div className="portrait-wrap">
          <img
            className="portrait"
            src="/portrait/olamide.jpg"
            alt="Portrait of Olamide Akoja"
          />
        </div>
      </section>

      <Reveal as="section" className="section container">
        <div className="about__bio">
          <p>
            Content creation came next — making things people actually wanted to
            watch or read, before &ldquo;personal brand&rdquo; was a phrase I
            used. Around the same time I taught myself web development, because
            I didn&apos;t want to just describe what I was building, I wanted to
            build it. Plant biology happened alongside all of that — I graduated
            with a degree built on a final project barcoding plant DNA for
            species identification. Sounds unrelated, but it&apos;s the same
            instinct: find the actual signal, not the noise.
          </p>
          <p className="muted">
            From there I moved into UI/UX design, and got obsessed with how
            things should <em>feel</em>, not just how they look. That&apos;s what
            led me to where I am now — strategy, business development, and
            product.
          </p>
          <p>
            If you asked me what I actually am, it isn&apos;t &ldquo;designer&rdquo;
            and it isn&apos;t &ldquo;operator.&rdquo; It&apos;s{" "}
            <strong>diagnostician and strategist</strong>. I&apos;m better at
            finding what&apos;s actually wrong with a business or a product than
            I am at making something pretty.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section container">
        <div className="section-head">
          <h2 className="section-title">Me in a nutshell</h2>
        </div>
        <div className="tag-cloud">
          {SKILLS.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section container">
        <div className="section-head">
          <h2 className="section-title">Right now</h2>
        </div>
        <div className="about__bio">
          <p>
            I co-run <strong>Parallel Lab</strong>, where I own business
            development and product. I&apos;m also pursuing a formal move into
            product management — <strong>open to PM and UX research roles</strong>.
          </p>
          <p className="muted">
            Most of what I do — the running, the reading, a daily habit of
            devotion — isn&apos;t on this site to make a point. It&apos;s just
            what the days actually look like.
          </p>
        </div>
        <div className="cta-row" style={{ marginTop: "2.2rem" }}>
          <Magnetic href="/work" className="btn btn--primary">
            See the work ↗
          </Magnetic>
          <Magnetic href="/contact" className="btn btn--ghost" strength={0.25}>
            Get in touch
          </Magnetic>
        </div>
      </Reveal>
    </main>
  );
}
