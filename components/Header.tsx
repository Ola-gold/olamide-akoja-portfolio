"use client";

import { useState } from "react";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/extras", label: "Extras" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="brand" aria-label="Olamide Akoja home">
          <span className="dot" aria-hidden="true" />
          OLAMIDE AKOJA
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
      </div>
    </header>
  );
}
