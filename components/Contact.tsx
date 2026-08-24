import Reveal from "@/components/Reveal";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/olamideakoja/", label: "LinkedIn" },
  { href: "https://www.instagram.com/olakoja4/", label: "Instagram" },
  { href: "https://tiktok.com/@olakoja4", label: "TikTok" },
];

export default function Contact() {
  return (
    <Reveal as="section" id="contact" className="footer-cta">
      <span className="section-num">05 / GET IN TOUCH</span>
      <h2>Let&apos;s build something structured.</h2>
      <p style={{ marginBottom: "2rem", color: "var(--text-muted)" }}>
        Available for Product Management, UX Research, and Parallel Lab
        collaborations.
      </p>

      <a href="mailto:hello@olamideakoja.com" className="email-link">
        hello@olamideakoja.com
      </a>

      <div className="social-bar">
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

      <div className="copyright">
        &copy; 2026 Olamide Akoja. Based in Lagos, Nigeria.
      </div>
    </Reveal>
  );
}
