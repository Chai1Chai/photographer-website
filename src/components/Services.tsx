"use client";

import { CldImage } from 'next-cloudinary';

const services = [
  {
    id: 'service-1',
    title: 'Ретушь фотографий',
    price: 'от 200-500₽/фото',
    duration: '1-3 дня',
    features: [
      'Удаление дефектов кожи (акне, морщины, синяки)',
      'Цветокоррекция и тонирование',
      'Художественная обработка без потери естественности'
    ],
    image: 'photo_1_e4o5lt' 
  },
  {
    id: 'service-2',
    title: 'Индивидуальная фотосессия',
    price: '1500₽–2000₽',
    duration: '1—2 часа',
    features: [
      '20—30 обработанных фото — Помощь с позированием и идеями',
      'Срок готовности: до 10 дней'
    ],
    image: 'photo_2_wnawcu'
  },
  {
    id: 'service-3',
    title: 'Съёмка мероприятий',
    price: 'от 4000₽',
    duration: 'от 2 часов',
    features: [
      'Репортажная съёмка (вечеринки, концерты)',
      'Все удачные кадры с базовой обработкой',
      'Срок готовности: 7–14 дней'
    ],
    image: 'photo_3_zyawrc'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <h2 className="text-center text-3xl md:text-5xl font-light text-zinc-800 mb-16 tracking-wide">
          Услуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center h-full">
              
              {/* Изображение услуги */}
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm shrink-0">
                <CldImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Обертка для контента с flex-grow */}
              <div className="flex flex-col items-center flex-grow w-full">
                <h3 className="text-2xl md:text-3xl font-light text-zinc-900 mb-4 leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {service.title}
                </h3>
                
                <div className="space-y-1 mb-6">
                  <p className="text-zinc-600 font-light text-sm">
                    Цена: {service.price}
                  </p>
                  <p className="text-zinc-600 font-light text-sm">
                    Длительность: {service.duration}
                  </p>
                </div>

                {/* Список особенностей */}
                <ul className="text-zinc-500 font-light text-sm leading-relaxed mb-10 space-y-2 flex-grow">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start justify-center">
                      <span className="mr-2">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопка заказа — теперь всегда в самом низу */}
              <button className="w-full max-w-[280px] bg-zinc-900 text-white py-4 px-8 uppercase text-xs tracking-[0.2em] hover:bg-zinc-800 transition-colors duration-300 rounded-md mt-auto">
                Заказать
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}