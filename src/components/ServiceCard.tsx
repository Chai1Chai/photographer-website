"use client";

import React from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

export default function ServiceCard({ service, imageId }: { service: any, imageId: string }) {
  return (
    <div className="flex flex-col h-full bg-white border border-zinc-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Изображение */}
      <div className="relative w-full aspect-[4/3] shrink-0 bg-zinc-100">
        {imageId && (
          <CldImage
            src={imageId}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>

      <div className="flex flex-col flex-grow p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-light text-zinc-900 mb-4 leading-tight min-h-[64px] flex items-center justify-center text-center">
          {service.title}
        </h3>
        
        <div className="mb-8 min-h-[60px] flex flex-col justify-center items-center text-center border-y border-zinc-100 py-4">
          <p className="text-zinc-800 font-medium text-base mb-1">
             {service.price}
          </p>
          <p className="text-zinc-400 font-light text-xs uppercase tracking-[0.1em]">
            {service.duration}
          </p>
        </div>

        <div className="flex-grow flex justify-center">
          <ul className="text-zinc-500 font-light text-sm leading-relaxed mb-10 space-y-3 w-fit">
            {service.features?.map((item: any, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-zinc-300 mr-3">—</span>
                <span>{item.feature}</span>
              </li>
            ))}
          </ul>
        </div>
            <a href="#contacts">
                <button className="w-full bg-zinc-900 text-white py-4 px-8 uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-800 transition-colors duration-300 mt-auto">
                  Заказать
                </button>
            </a>

      </div>
    </div>
  );
}