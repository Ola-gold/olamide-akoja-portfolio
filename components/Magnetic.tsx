"use client";

import { useRef } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
  external?: boolean;
};

export default function Magnetic({
  href,
  children,
  className = "",
  strength = 0.35,
  external = false,
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{ transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </a>
  );
}
