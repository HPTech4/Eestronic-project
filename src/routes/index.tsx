import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/portfolio/Navbar";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Projects } from "../components/portfolio/Projects";
import { Services } from "../components/portfolio/Services";
import { Experience } from "../components/portfolio/Experience";
import { Contact } from "../components/portfolio/Contact";
import { Marquee } from "../components/portfolio/Marquee";
import { Footer } from "../components/portfolio/Footer";
import { ScrollUtilities } from "../components/portfolio/ScrollUtilities";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Esstronics — Olaoye Blessing Immanuel · Hardware & IoT Engineer" },
      {
        name: "description",
        content:
          "Olaoye Blessing Immanuel (Esstronics) — hardware developer, embedded systems engineer, and IoT specialist building AI-powered solutions for agriculture, energy, and automation.",
      },
      { property: "og:title", content: "Esstronics — Hardware & IoT Engineer" },
      {
        property: "og:description",
        content: "Premium hardware engineering, embedded systems, and edge AI by Olaoye Blessing Immanuel.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative">
      <ScrollUtilities />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
