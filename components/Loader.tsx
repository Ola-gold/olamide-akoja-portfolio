"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    const t1 = setTimeout(() => setDone(true), 1000);
    const t2 = setTimeout(() => setGone(true), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${done ? "loader--done" : ""}`} aria-hidden="true">
      <span className="loader__mark">OA</span>
    </div>
  );
}
