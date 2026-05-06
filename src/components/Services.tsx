import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import ServiceCard from './ServiceCard'; // Импортируем новый компонент


export const revalidate = 3600;

export default async function Services() {
  const payload = await getPayload({ config: configPromise });

  const { docs: services } = await payload.find({
    collection: 'services',
    depth: 1,
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <h2 className="text-center text-2xl md:text-5xl font-base text-zinc-600 mb-12 uppercase tracking-[0.1em]">
          Услуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-stretch">
          {services.map((service: any) => {
            const imageId = service.image?.cloudinary?.public_id || service.image?.filename;
            
            return (
              <ServiceCard 
                key={service.id} 
                service={service} 
                imageId={imageId} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}