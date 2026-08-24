import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Framework from "@/components/Framework";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="container">
        <Hero />
        <Work />
        <About />
        <Framework />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
