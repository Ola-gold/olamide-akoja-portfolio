import Reveal from "@/components/Reveal";
import MaskLines from "@/components/MaskLines";
import Magnetic from "@/components/Magnetic";
import PhotoGrid from "@/components/PhotoGrid";
import Slideshow from "@/components/Slideshow";

export default function FieldworkPage() {
  return (
    <main id="main">
      <section className="page-hero container">
        <Reveal as="div" className="eyebrow page-hero__eyebrow">
          Fieldwork
        </Reveal>
        <h1 className="page-hero__title">
          <MaskLines lines={["I photograph", <>people, places, moments.</>]} />
        </h1>
        <p className="page-lead">
          People, places and moments that make me pay attention. Let the
          photographs breathe — writing stays sparse.
        </p>
      </section>

      <div className="container">
        <Reveal as="section" className="section">
          <div className="section-head">
            <h2 className="section-title">Selected frames</h2>
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
        </Reveal>

        <Reveal as="section" className="section">
          <div className="section-head">
            <h2 className="section-title">Gallery</h2>
            <span className="case__role">Chronological / stories</span>
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
          <p className="about__bio" style={{ marginTop: "2rem", maxWidth: "60ch" }}>
            Full portfolio at{" "}
            <a href="https://theolamideakoja.framer.website" target="_blank" rel="noopener noreferrer" className="email">
              theolamideakoja.framer.website ↗
            </a>
            . Collections — People, Places, Stories, Everyday — coming as the work is curated.
          </p>
        </Reveal>

        <Reveal as="section" className="empty-state">
          <h2>Visual stories</h2>
          <p>
            Individual stories (title, date/place, short paragraph + images)
            will live here once the strongest series are selected.
          </p>
        </Reveal>
      </div>

      <Reveal as="section" className="closer">
        <h2>
          Fieldwork is <em>observation</em>.
        </h2>
        <Magnetic href="/lab" className="btn btn--ghost">
          See Lab →
        </Magnetic>
      </Reveal>
    </main>
  );
}
