import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";
import Slideshow from "@/components/Slideshow";
import PhotoGrid from "@/components/PhotoGrid";

const EXTRAS = [
  {
    k: "Writing",
    v: "Medium",
    body: "Long-form thinking on product, building, and the in-between. Updated whenever something is actually worth saying.",
    link: "https://medium.com/@olamideibukunoluwa5",
    label: "Read on Medium",
  },
  {
    k: "Content",
    v: "@olakoja4",
    body: "Roughly halfway through a 100-week consistency challenge. TikTok is the strongest organic channel — it documents the process, not just the wins.",
    link: "https://tiktok.com/@olakoja4",
    label: "TikTok",
  },
  {
    k: "Running & training",
    v: "6am, daily",
    body: "Daily 6am runs (7am Saturdays), 3–4 running sessions and 4–5 gym sessions a week. First 23km race, finished on a birthday.",
    link: "",
    label: "",
  },
  {
    k: "Otherwise",
    v: "Reads widely",
    body: "Dancing, movies, and reading on business, marketing, and selling. The unrelated inputs are usually the ones that show up in the work.",
    link: "",
    label: "",
  },
];

export default function ExtrasPage() {
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Extras
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["Beyond the", <>resume.</>]} />
        </h1>
        <p className="page-lead">
          The part that makes the work human. Playful on purpose.
        </p>
      </section>

      <div className="container">
        <Reveal as="section" className="section">
          <div className="section-head">
            <h2 className="section-title">Photography</h2>
            <span className="case__role">@theolamideakoja</span>
          </div>
          <Slideshow
            images={[
              "/photos/pf-1.jpg",
              "/photos/pf-2.jpg",
              "/photos/pf-3.jpg",
              "/photos/pf-4.jpg",
              "/photos/pf-5.jpg",
              "/photos/pf-6.jpg",
              "/photos/pf-7.jpg",
              "/photos/pf-8.jpg",
            ]}
            captions={[
              "Documentary",
              "Street",
              "Light & form",
              "Storytelling",
              "Texture",
              "Daily life",
              "Portrait",
              "Process",
            ]}
          />
          <p className="about__bio" style={{ marginTop: "1.5rem", maxWidth: "60ch" }}>
            Documentary, storytelling style. The camera goes where the run goes.
            Full portfolio dropping on Framer soon.
          </p>
        </Reveal>

        <Reveal as="section" className="section">
          <div className="section-head">
            <h2 className="section-title">Gallery</h2>
            <span className="case__role">Selected frames</span>
          </div>
          <PhotoGrid
            images={[
              "/photos/pf-1.jpg",
              "/photos/pf-2.jpg",
              "/photos/pf-3.jpg",
              "/photos/pf-4.jpg",
              "/photos/pf-5.jpg",
              "/photos/pf-6.jpg",
              "/photos/pf-7.jpg",
              "/photos/pf-8.jpg",
              "/photos/pf-9.jpg",
              "/photos/pf-10.jpg",
              "/photos/pf-11.jpg",
              "/photos/pf-12.jpg",
              "/photos/pf-13.jpg",
              "/photos/pf-14.jpg",
            ]}
            captions={[
              "Documentary",
              "Street",
              "Light & form",
              "Storytelling",
              "Texture",
              "Daily life",
              "Portrait",
              "Process",
              "Field notes",
              "Form",
              "Contrast",
              "Quiet",
              "Movement",
              "Studio",
            ]}
          />
        </Reveal>

        {EXTRAS.map((e) => (
          <Reveal as="section" className="case" key={e.k}>
            <div className="case__head">
              <h2 className="case__title">{e.k}</h2>
              <span className="case__role">{e.v}</span>
            </div>
            <div className="case__grid">
              <div className="case__block" style={{ gridColumn: "1 / -1" }}>
                <p>{e.body}</p>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-go"
                    style={{ display: "inline-block", marginTop: "1rem" }}
                  >
                    {e.label} ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="section" className="closer">
        <h2>
          Back to the <em>work</em>?
        </h2>
        <Magnetic href="/work" className="btn btn--primary">
          See the work ↗
        </Magnetic>
      </Reveal>
    </main>
  );
}
