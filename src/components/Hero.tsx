"use client";

import { useState, useEffect } from "react";
import { CldImage } from 'next-cloudinary';

const photos = [
  { id: 'photo_3_zyawrc', alt: 'Wedding moment' },
  { id: 'photo_1_e4o5lt', alt: ' искренние эмоции' },
  { id: 'photo_7_vbqrqd', alt: 'Portrait photography' },
  { id: 'photo_6_msswfz', alt: 'Nature and light' },
  { id: 'photo_2_wnawcu', alt: 'Black and white art' },
  { id: 'photo_5_zybmwq', alt: 'Studio work' },
];

const PhotoCard = ({ publicId, alt }: { publicId: string; alt: string }) => (
  // Удален h-[400px] и mt-22. Используем только ширину и пропорцию 4/5.
  <div className="w-[200px] md:w-[300px] aspect-[3/4] shrink-0 mx-2 overflow-hidden rounded-2xl relative group">
    <CldImage
      src={publicId}
      alt={alt}
      fill
      priority
      sizes="(max-width: 768px) 200px, 300px"
      className="object-cover transition-all duration-700"
    />
  </div>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="h-screen bg-white" />;

  return (
    // Добавлен pt-20, чтобы контент не залезал под навигацию
    <section className="md:mt-25 relative w-full h-screen overflow-hidden bg-white flex flex-col py-10">
      
      <div className="absolute inset-0 flex flex-col justify-center gap-4 pointer-events-none">
        
        {/* Верхний ряд */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...photos, ...photos].map((photo, i) => (
              <PhotoCard key={`row1-${i}`} publicId={photo.id} alt={photo.alt} />
            ))}
          </div>
        </div>

        {/* Нижний ряд */}
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...photos, ...photos].map((photo, i) => (
              <PhotoCard key={`row2-${i}`} publicId={photo.id} alt={photo.alt} />
            ))}
          </div>
        </div>
      </div>

      {/* Центральный блок (Текст) */}
      <div className="relative z-20 m-auto w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] flex flex-col justify-center items-center p-8 md:p-12 backdrop-blur-xl bg-black/50 rounded-xl border border-white/10 text-center shadow-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight uppercase">
          Фотограф в Красноярске
        </h1>
        <p className="mt-4 text-zinc-200 font-light text-lg md:text-xl">
          Не «улыбнитесь» — будьте собой.
        </p>
        <button className="mt-20 px-20 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all pointer-events-auto">
          Связаться
        </button>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 65s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}