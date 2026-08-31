"use client";

import { useEffect, useRef, useState } from "react";

export default function MaskLines({
  lines,
  className = "",
  baseDelay = 0,
  as: Tag = "span",
}: {
  lines: React.ReactNode[];
  className?: string;
  baseDelay?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          ob.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`mask ${on ? "mask--on" : ""} ${className}`}>
      {lines.map((line, i) => (
        <span className="mask__line" key={i}>
          <span
            className="mask__inner"
            style={{ transitionDelay: `${baseDelay + i * 0.09}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
