import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";

export default function NowPage() {
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Now
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["What I'm up", <>to now.</>]} />
        </h1>
        <p className="page-lead">
          A living page — updated as things change. No need for constant
          “content” to show I&apos;m active.
        </p>
        <p className="case__role">Last updated: February 2026</p>
      </section>

      <div className="container">
        <div className="now-grid">
          <Reveal as="section" className="now-block">
            <h4>Working on</h4>
            <p>Product at Parallel Lab — Studio OS V2, client delivery, and the push into Product Management roles.</p>
          </Reveal>
          <Reveal as="section" className="now-block">
            <h4>Learning</h4>
            <p>Building with AI — automation, tiny tools, and figuring out what actually ships vs. what demos well.</p>
          </Reveal>
          <Reveal as="section" className="now-block">
            <h4>Reading</h4>
            <p>Re-reading on systems and storytelling. Photography books for seeing, not just shooting.</p>
          </Reveal>
          <Reveal as="section" className="now-block">
            <h4>Thinking about</h4>
            <p>The difference between making something clear and making it simple. And how to show curiosity without performing it.</p>
          </Reveal>
          <Reveal as="section" className="now-block">
            <h4>Outside work</h4>
            <p>Running, photography, writing, devotion — the daily habits that make the rest make sense.</p>
          </Reveal>
          <Reveal as="section" className="now-block">
            <h4>Recently</h4>
            <ul>
              <li>
                <a href="/work/ai-intake">Shipped AI Client-Intake Automation</a> — 6-tool system in 4 weeks, zero budget
              </li>
              <li>
                <a href="/lab">Lab</a> — started documenting experiments
              </li>
              <li>
                <a href="/fieldwork">Fieldwork</a> — curating visual stories
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal as="section" className="closer">
          <h2>
            If something here <em>resonates</em>, say hello.
          </h2>
          <Magnetic href="/contact" className="btn btn--primary">
            Get in touch ↗
          </Magnetic>
        </Reveal>
      </div>
    </main>
  );
}
