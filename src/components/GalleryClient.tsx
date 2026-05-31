"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { CldImage } from 'next-cloudinary';

interface Photo {
  id: string;
  alt: string;
}

export default function GalleryClient({ allPhotos }: { allPhotos: Photo[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      resetZoom();
      setSelectedIndex((selectedIndex + 1) % allPhotos.length);
    }
  }, [selectedIndex, allPhotos.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      resetZoom();
      setSelectedIndex((selectedIndex - 1 + allPhotos.length) % allPhotos.length);
    }
  }, [selectedIndex, allPhotos.length]);

  const handleWheel = (e: React.WheelEvent) => {
    if (selectedIndex === null) return;

    const zoomSpeed = 0.15;
    const minScale = 1;
    const maxScale = 4;

    const delta = -e.deltaY;
    const newScale = Math.min(Math.max(scale + (delta > 0 ? zoomSpeed : -zoomSpeed), minScale), maxScale);

    if (newScale !== scale) {
      const rect = e.currentTarget.getBoundingClientRect();
      // Вычисляем смещение относительно центра, куда указывает мышь
      const x = (e.clientX - rect.left - rect.width / 2) / scale;
      const y = (e.clientY - rect.top - rect.height / 2) / scale;

      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      } else {
        setPosition({
          x: position.x - x * (newScale - scale),
          y: position.y - y * (newScale - scale),
        });
      }
      setScale(newScale);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "unset";
  }, [selectedIndex]);

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-light text-zinc-800 mb-12 uppercase tracking-widest text-center">
          Портфолио
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {allPhotos.map((photo, index) => (
            <div
              key={`${photo.id}-${index}`}
              className="relative aspect-[4/5] cursor-pointer overflow-hidden group"
              onClick={() => {
                resetZoom();
                setSelectedIndex(index);
              }}
            >
              <CldImage
                src={photo.id}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onWheel={handleWheel}
        >
          {/* КНОПКА ЗАКРЫТИЯ */}
          <button 
            onClick={() => setSelectedIndex(null)} 
            className="absolute top-6 right-8 text-white text-4xl font-light z-[120] hover:text-zinc-400 transition-colors p-2"
          >
            &times;
          </button>

          {/* СТРЕЛКИ НАВИГАЦИИ */}
          <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-4 md:left-10 text-white text-5xl font-light z-[110] hover:text-zinc-400 hidden md:block">‹</button>

          {/* КОНТЕЙНЕР КАРТИНКИ */}
          <div 
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onClick={() => scale === 1 && setSelectedIndex(null)}
          >
            <div 
              className="relative w-[90%] h-[90%] transition-transform duration-200 ease-out"
              style={{ 
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                cursor: 'default' // Обычный курсор вместо "крестика"
              }}
            >
              <CldImage
                src={allPhotos[selectedIndex].id}
                alt="Full view"
                fill
                priority
                className="object-contain select-none"
                sizes="100vw"
              />
            </div>
          </div>

          <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-4 md:right-10 text-white text-5xl font-light z-[110] hover:text-zinc-400 hidden md:block">›</button>

          {/* СЧЕТЧИК */}
          <div className="absolute bottom-6 text-white/50 text-sm tracking-widest font-light">
            {selectedIndex + 1} / {allPhotos.length}
          </div>
        </div>
      )}
    </section>
  );
}