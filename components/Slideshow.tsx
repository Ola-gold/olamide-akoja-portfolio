"use client";

import { useEffect, useState } from "react";

export default function Slideshow({
  images,
  captions,
}: {
  images: string[];
  captions?: string[];
}) {
  const [i, setI] = useState(0);
  const n = images.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % n), 4000);
    return () => clearInterval(id);
  }, [n]);

  const go = (d: number) => setI((p) => (p + d + n) % n);

  return (
    <div className="slideshow" data-cursor aria-roledescription="carousel">
      {images.map((src, idx) => (
        <div
          key={src}
          className={`slideshow__slide ${idx === i ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={idx === i ? "false" : "true"}
        />
      ))}

      {captions && <span className="slideshow__cap">{captions[i]}</span>}

      <button
        className="slideshow__btn slideshow__btn--prev"
        onClick={() => go(-1)}
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        className="slideshow__btn slideshow__btn--next"
        onClick={() => go(1)}
        aria-label="Next photo"
      >
        ›
      </button>

      <div className="slideshow__dots">
        {images.map((src, idx) => (
          <button
            key={src}
            className={`slideshow__dot ${idx === i ? "is-active" : ""}`}
            onClick={() => setI(idx)}
            aria-label={`Go to photo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
