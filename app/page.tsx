import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";

const PROOF = [
  { idx: "01", name: "Studio OS", role: "Product · Parallel Lab" },
  { idx: "02", name: "Mind2Muscle", role: "Product Manager" },
  { idx: "03", name: "SquaredLAB Advisory", role: "Web + Advisory" },
  { idx: "04", name: "Heirs Technologies (Redapp)", role: "UX Research" },
  { idx: "05", name: "AI Client-Intake Automation", role: "Self-Initiated · No-code" },
];

const TEASERS = [
  {
    href: "/about",
    title: "About",
    img: "/photos/pf-1.jpg",
    body: "How a writer and self-taught builder ended up running strategy and product — and why plant biology is in the story, not leading it.",
    cta: "Read the path →",
  },
  {
    href: "/work",
    title: "Work",
    img: "/photos/pf-2.jpg",
    body: "Studio OS, a UX research deep-dive, and the rest of what I've shipped — proof, not a pile of adjectives.",
    cta: "See the proof →",
  },
  {
    href: "/extras",
    title: "Extras",
    img: "/photos/pf-3.jpg",
    body: "Photography, a 100-week content challenge, and a running log. The part that makes the resume human.",
    cta: "Beyond work →",
  },
];

const METRICS = [
  { stat: "8wk → 6wk", label: "Studio OS delivery, compressed across 3 sprints" },
  { stat: "₦2.55M", label: "SquaredLAB Advisory closed — ₦1.75M + ₦800K expansion" },
  { stat: "102", label: "Redapp survey responses, plus 8 interviews & 3 field studies" },
  { stat: "6 tools", label: "AI intake automation built & shipped in 4 wks, zero budget" },
  { stat: "0", label: "Scope creep on Mind2Muscle, delivered in 6 wks" },
];

const TESTIMONIALS = [
  {
    quote:
      "Olamide displays high mastery in interpreting and executing design briefs with speed. She's easy to work with and asks a lot of questions.",
    name: "Kanayo Uzo",
    role: "Founder, OnVisualMatters",
  },
  {
    quote:
      "Working in the same team as Olamide has been an inspiring journey because of her profound design skills, organisation, timeliness and effectiveness.",
    name: "Oleh Chinenye",
    role: "Virtual Assistant",
  },
  {
    quote:
      "@olakoja4 is a brilliant designer. Her communication skills are top notch and she always gets the job done.",
    name: "Appipiah Deola",
    role: "Founder, OnVisualMatters",
  },
];

export default function Home() {
  return (
    <main id="main">
      <Hero />

      <Reveal as="section" className="section container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Selected proof
            </div>
            <h2 className="section-title">Four projects that show how I think.</h2>
          </div>
          <span className="idx">01 / WORK</span>
        </div>

        <div className="proof">
          {PROOF.map((p) => (
            <a key={p.name} href="/work" className="proof-row">
              <span className="p-idx">{p.idx}</span>
              <span className="p-name">{p.name}</span>
              <span className="p-role">{p.role}</span>
              <span className="p-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Metrics &amp; impact
            </div>
            <h2 className="section-title">The numbers behind the work.</h2>
          </div>
          <span className="idx">01b / PROOF</span>
        </div>
        <div className="metrics">
          {METRICS.map((m) => (
            <div className="metric" key={m.label}>
              <span className="metric__stat">{m.stat}</span>
              <span className="metric__label">{m.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Where to go next
            </div>
            <h2 className="section-title">Pick a thread.</h2>
          </div>
          <span className="idx">02 / SITE</span>
        </div>

        <div className="teasers">
          {TEASERS.map((t) => (
            <a key={t.href} href={t.href} className="teaser">
              <div
                className="teaser__media"
                style={{ backgroundImage: `url(${t.img})` }}
                aria-hidden="true"
              />
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
              <span className="t-go">{t.cta}</span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Word of mouth
            </div>
            <h2 className="section-title">Hear what others say.</h2>
          </div>
          <span className="idx">03 / PROOF</span>
        </div>
        <div className="quotes">
          {TESTIMONIALS.map((t) => (
            <figure className="quote" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <b>{t.name}</b>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <Marquee text="Product Management" />

      <Reveal as="section" className="closer container">
        <h2>
          Open to <em>product</em> &amp; UX research roles.
        </h2>
        <Magnetic href="/contact" className="btn btn--primary">
          Get in touch ↗
        </Magnetic>
      </Reveal>
    </main>
  );
}
