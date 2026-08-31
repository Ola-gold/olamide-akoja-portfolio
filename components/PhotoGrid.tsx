import { CSSProperties } from "react";

export default function PhotoGrid({
  images,
  captions,
}: {
  images: string[];
  captions?: string[];
}) {
  return (
    <div className="photo-grid" data-cursor>
      {images.map((src, i) => (
        <figure className="photo-grid__item" key={src}>
          <img
            src={src}
            alt={captions?.[i] ?? "Photography by Olamide Akoja"}
            loading="lazy"
            style={{ aspectRatio: "auto" } as CSSProperties}
          />
          {captions?.[i] && <figcaption className="photo-grid__cap">{captions[i]}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
