"use client";

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

export default function Contacts() {
  return (
    <section id='contacts' className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Левая часть: Фото */}
          <div className="w-full md:w-1/2 max-w-[500px]">
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-sm">
              <CldImage
                src="photo_3_zyawrc" // Твой ID из Cloudinary
                alt="Связаться с фотографом"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Правая часть: Контент */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 mb-6 tracking-tight">
              Контакты
            </h2>
            
            <p className="text-zinc-600 font-light leading-relaxed mb-10 max-w-md">
              Свяжитесь со мной удобным для вас способом — отвечаю быстро и с радостью помогу обсудить съёмку
            </p>

            {/* Группа кнопок */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://vk.com/m.ahachkala" 
                target="_blank"
                className="px-8 py-4 bg-zinc-900 text-white text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-md min-w-[140px] text-center"
              >
                VK
              </Link>
              
              <Link 
                href="https://t.me/mahachkala28" 
                target="_blank"
                className="px-8 py-4 bg-zinc-900 text-white text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-md min-w-[140px] text-center"
              >
                Telegram
              </Link>

              <Link 
                href="https://max.ru/u/f9LHodD0cOIa7JRbwSbZfSWsb79qsKXZTbFi_p6W0KVpQKEnm6AW5l_GP_0" 
                target="_blank"
                className="px-8 py-4 bg-zinc-900 text-white text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-md min-w-[140px] text-center"
              >
                MAX
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}