// src/app/portfolio/page.tsx
import Navbar from "../../components/Navbar";
import FullGallery from "@/components/FullGallery";
import Footer from "../../components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <FullGallery />
      <Footer />
    </>
  );
}