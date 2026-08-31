import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/olamideakoja/", label: "LinkedIn" },
  { href: "https://www.instagram.com/olakoja4/", label: "Instagram" },
  { href: "https://tiktok.com/@olakoja4", label: "TikTok" },
];

export default function Contact() {
  return (
    <Reveal as="section" id="contact" className="contact">
      <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "2rem" }}>
        05 / GET IN TOUCH
      </div>
      <h2>
        Let&apos;s build something <em>structured.</em>
      </h2>
      <p style={{ color: "var(--muted)", maxWidth: "44ch", margin: "0 auto 2.5rem" }}>
        Available for Product Management, UX Research, and Parallel Lab
        collaborations.
      </p>

      <Magnetic href="mailto:hello@olamideakoja.com" className="email" strength={0.2}>
        hello@olamideakoja.com
      </Magnetic>

      <div className="socials">
        {SOCIALS.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.label}
          </a>
        ))}
      </div>

      <div className="colophon">
        © 2026 Olamide Akoja — Lagos, Nigeria
      </div>
    </Reveal>
  );
}
