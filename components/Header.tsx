"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/notes", label: "Notes" },
  { href: "/fieldwork", label: "Fieldwork" },
  { href: "/lab", label: "Lab" },
  { href: "/now", label: "Now" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="brand" aria-label="Olamide Akoja home">
          <span className="dot" aria-hidden="true" />
          OLAMIDE
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="primary-nav" aria-label="Primary">
          <ul className={`nav-items ${open ? "open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a href="/contact" className="header-cta">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
