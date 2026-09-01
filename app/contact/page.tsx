import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero container page-hero--center">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Contact
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["Let's make", <>something thoughtful together.</>]} />
        </h1>
        <p className="page-lead">
          Whether you’re hiring, collaborating, or just exploring — the next
          step is a conversation.
        </p>
      </section>

      <Reveal as="section" className="section container">
        <div className="about__bio" style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto" }}>
          <p>
            <strong>Looking for a collaborator or team member?</strong> If you’re
            building products that value clarity, strong systems, and quiet
            detail — let’s talk shop. Dive into my{" "}
            <a href="https://drive.google.com/file/d/1dUYDI5hTnBki905gM6nHlCYcubDafH2N/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>{" "}
            or start a conversation via{" "}
            <a href="mailto:olamideibukunoluwa5@gmail.com">Email</a>.
          </p>
          <p className="muted">
            <strong>Just exploring or want to talk design?</strong> Whether you
            found a note you resonated with or just want to swap
            recommendations on books, photography, or studio workflows — my
            inbox is always open.
          </p>
        </div>

        <div className="skills skills--center" style={{ marginTop: "var(--space-8)" }}>
          <div className="skill-col">
            <h4>Email</h4>
            <Magnetic
              href="mailto:olamideibukunoluwa5@gmail.com"
              className="email"
              strength={0.18}
            >
              olamideibukunoluwa5@gmail.com
            </Magnetic>
          </div>
          <div className="skill-col">
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/olamideakoja/"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              /in/olamideakoja
            </a>
          </div>
          <div className="skill-col">
            <h4>Resume</h4>
            <a
              href="https://drive.google.com/file/d/1dUYDI5hTnBki905gM6nHlCYcubDafH2N/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              View CV ↗
            </a>
          </div>
          <div className="skill-col">
            <h4>Location</h4>
            <span className="email" style={{ borderBottom: "none" }}>
              Lagos, Nigeria
            </span>
          </div>
          <div className="skill-col">
            <h4>Studio</h4>
            <a
              href="https://parallellab.co"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              parallellab.co ↗
            </a>
          </div>
        </div>

        <p className="about__bio" style={{ marginTop: "var(--space-7)", maxWidth: "60ch", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          Currently open to <strong>Product Manager</strong>,{" "}
          <strong>Associate PM</strong>, <strong>Product Operations</strong>, and{" "}
          <strong>Project Manager</strong> roles — remote or Lagos-based.
        </p>

        <div className="social-row social-row--center">
          <a
            href="https://www.instagram.com/olamide_akoja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href="https://twitter.com/olakoja4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter / X ↗
          </a>
          <a
            href="https://www.behance.net/olamideakoja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance ↗
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className="closer">
        <h2>
          The next step is <em>one email</em> away.
        </h2>
        <Magnetic
          href="mailto:olamideibukunoluwa5@gmail.com"
          className="btn btn--primary"
        >
          Say hello ↗
        </Magnetic>
      </Reveal>
    </main>
  );
}
