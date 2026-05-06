"use client";

import { useState, useEffect, useCallback } from "react";
import { CldImage } from 'next-cloudinary';

// Твой массив всех фотографий
const allPhotos = [
  { id: 'photo_3_zyawrc', alt: 'Wedding' },
  { id: 'photo_1_e4o5lt', alt: 'Emotions' },
  { id: 'photo_7_vbqrqd', alt: 'Portrait' },
  { id: 'photo_6_msswfz', alt: 'Nature' },
  { id: 'photo_2_wnawcu', alt: 'B&W' },
  { id: 'photo_5_zybmwq', alt: 'Studio' },
  { id: 'photo_4_q5nsdw', alt: 'Terrace' },
  { id: 'main-sample', alt: 'Architecture' },
  // Добавь сюда столько ID, сколько нужно
];

export default function FullGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Функции для листания
  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allPhotos.length);
    }
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + allPhotos.length) % allPhotos.length);
    }
  }, [selectedIndex]);

  const closeOverlay = () => setSelectedIndex(null);

  // Обработка клавиш (Esc, Стрелки)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeOverlay();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedIndex]);

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-light text-zinc-800 mb-12 uppercase tracking-widest text-center">
          Портфолио
        </h1>

        {/* Сетка галереи */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {allPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm group"
              onClick={() => setSelectedIndex(index)}
            >
              <CldImage
                src={photo.id}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10">
          
          {/* Кнопка закрыть */}
          <button 
            onClick={closeOverlay}
            className="absolute top-6 right-6 text-white text-4xl font-light z-[110] hover:text-zinc-400 transition-colors"
          >
            &times;
          </button>

          {/* Кнопка Назад */}
          <button 
            onClick={showPrev}
            className="absolute left-4 md:left-10 text-white text-5xl font-light z-[110] hover:text-zinc-400 transition-colors hidden md:block"
          >
            ‹
          </button>

          {/* Контейнер для изображения */}
          <div className="relative w-full h-full max-w-5xl flex items-center justify-center" onClick={closeOverlay}>
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <CldImage
                src={allPhotos[selectedIndex].id}
                alt="Full view"
                fill
                priority
                className="object-contain" // Сохраняет пропорции без обрезки в модальном окне
                sizes="100vw"
              />
            </div>
          </div>

          {/* Кнопка Вперед */}
          <button 
            onClick={showNext}
            className="absolute right-4 md:right-10 text-white text-5xl font-light z-[110] hover:text-zinc-400 transition-colors hidden md:block"
          >
            ›
          </button>

          {/* Индикатор количества (например, 1/20) */}
          <div className="absolute bottom-6 text-white/50 text-sm tracking-widest font-light">
            {selectedIndex + 1} / {allPhotos.length}
          </div>
        </div>
      )}
    </section>
  );
}