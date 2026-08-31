export default function Marquee({
  text,
  repeat = 6,
}: {
  text: string;
  repeat?: number;
}) {
  const group = (
    <span className="marquee__group" aria-hidden="true">
      {Array.from({ length: repeat }).map((_, i) => (
        <span className="marquee__item" key={i}>
          {text}
          <span className="marquee__dot">✳</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  );
}
