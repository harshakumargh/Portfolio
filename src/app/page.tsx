import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { buildStructuredData } from "@/lib/structured-data";
import { About } from "@/sections/About";
import { AIEngineering } from "@/sections/AIEngineering";
import { Contact } from "@/sections/Contact";
import { Expertise } from "@/sections/Expertise";
import { FeaturedExperience } from "@/sections/FeaturedExperience";
import { Hero } from "@/sections/Hero";
import { Impact } from "@/sections/Impact";
import { Journey } from "@/sections/Journey";
import { Principles } from "@/sections/Principles";
import { Projects } from "@/sections/Projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Impact />
        <FeaturedExperience />
        <Expertise />
        <AIEngineering />
        <Projects />
        <Journey />
        <Principles />
        <About />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
