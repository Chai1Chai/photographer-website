"use client";

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const previewPhotos = [
  { id: 'photo_3_zyawrc', alt: 'Wedding moment' },
  { id: 'photo_1_e4o5lt', alt: ' искренние эмоции' },
  { id: 'photo_7_vbqrqd', alt: 'Portrait photography' },
  { id: 'photo_6_msswfz', alt: 'Nature and light' },
  { id: 'photo_2_wnawcu', alt: 'Black and white art' },
  { id: 'photo_5_zybmwq', alt: 'Studio work' },
  { id: 'photo_4_q5nsdw', alt: 'Портрет на террасе' },
  { id: 'main-sample', alt: 'Архитектурный портрет' },
  { id: 'photo_6_msswfz', alt: 'Вид снизу' },
];

export default function PreviewGallery() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-center text-2xl md:text-5xl font-base text-zinc-600 mb-12 uppercase tracking-[0.1em]">
          Мои работы
        </h2>

        {/* Изменено: grid-cols-2 для мобильных, md:grid-cols-3 для десктопа */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          {previewPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`relative aspect-square overflow-hidden group cursor-pointer 
                ${index === 8 ? 'hidden md:block' : ''}`} // Скрываем 9-ю картинку на мобилках, чтобы вышло 2*4
            >
              <CldImage
                src={photo.id}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw" // Изменено: 50vw для 2-х колонок
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link 
            href="/portfolio" 
            className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors text-sm md:text-lg font-light"
          >
            <span>Подробнее</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}