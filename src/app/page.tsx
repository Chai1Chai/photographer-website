// src/app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import PreviewGallery from "../components/PreviewGallery";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PreviewGallery />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}