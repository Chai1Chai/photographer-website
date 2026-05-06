// src/app/portfolio/page.tsx
import Navbar from "../../../components/Navbar";
import { Suspense } from 'react'
import FullGallery from "../../../components/FullGallery";
import Footer from "../../../components/Footer";
export const revalidate = 60; 
export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center py-20 uppercase tracking-widest animate-pulse">Загрузка галереи...</div>}></Suspense>
      <FullGallery />
      <Footer />
    </>
  );
}