"use client";

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const previewPhotos = [
  { id: 'photoMasha_4_xudt4y', alt: 'Wedding moment' },
  { id: 'photoMasha_10_dqtwtx', alt: ' искренние эмоции' },
  { id: 'photoMasha_6_utxynt', alt: 'Portrait photography' },
  { id: 'photoMasha_7_pzelt0', alt: 'Nature and light' },
  { id: 'photoMasha_3_uj1phz', alt: 'Black and white art' },
  { id: 'photoMasha_14_wwod9h', alt: 'Studio work' },
  { id: 'photoMasha_18_h6aakt', alt: 'Портрет на террасе' },
  { id: 'photoMasha_9_vygixn', alt: 'Архитектурный портрет' },
  { id: 'photoMasha (15)', alt: 'Вид снизу' },
];

export default function PreviewGallery() {
  return (
    <section className="py-10">
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