import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Destinations from "@/components/sections/Destinations";
import Tours from "@/components/sections/Tours";
import Experiences from "@/components/sections/Experiences";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <Stats />
        <Destinations />
        <Tours />
        <Experiences />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
