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
            <p>
              <em>The Practice of Everyday Life</em> — de Certeau. A paragraph on tactics vs. strategies has been sitting with me for weeks: how users make systems their own.
            </p>
          </Reveal>
          <Reveal as="section" className="now-block">
            <h4>Listening</h4>
            <p>Lo-fi and Alt-J on repeat in the studio — plus SwitchOn with Adaora Lumina when I need to think bigger.</p>
          </Reveal>
          <Reveal as="section" className="now-block">
            <h4>Obsessing over</h4>
            <p>A tiny detail: the way Playbook’s pills use a hairline border + muted mono to make dense information feel calm. Trying to steal that calm.</p>
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
