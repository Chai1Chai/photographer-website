"use client";

import { CldImage } from 'next-cloudinary';

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Текстовый блок */}
          <div className="flex-1 order-2 md:order-1">
            <span className="text-zinc-400 text-xl uppercase tracking-[0.2em] mb-4 block">
              Обо мне
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-zinc-900 mb-8 tracking-tight">
              Мария Никитина
            </h2>
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-sm md:text-base">
              <p>
                Меня зовут Мария. В моём объективе - сюжетные индивидуальные съёмки, психологические портреты людей и по-настоящему живые, яркие мероприятия.
              </p>
              <p>
                Моя задача — сохранить атмосферу и показать людей настоящими.
                Я умею улавливать настроение, создавать крутую среду и беречь ваш комфорт.
                Без постановки, без напряжения. Только живые эмоции, характер и искренность.
              </p>
              <p>
                Без сложных поз и напряжения — только живые эмоции, объятия и искренние моменты.
              </p>
            </div>
          </div>

          {/* Блок с фото */}
          <div className="flex-1 order-1 md:order-2 w-full max-w-[450px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-sm">
              <CldImage
                src="VwHiLOnU9HlwL9yDQW5_OvSCPJ_rGin_mWcsc_xtdENeUzy-OleV9MJ7ZbrErcoSTs-nPDvV2ovqVjv28gNPHSLs_ngpbgc_c_crop_ar_3_4_h9ywoz" // Замени на свой publicId из Cloudinary
                alt="Фотограф Арина Зайцева"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}