"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-100 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Навигация в футере */}
          <nav className="flex gap-8 text-xs uppercase tracking-widest text-zinc-500">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Главная
            </Link>
            <Link href="/portfolio" className="hover:text-zinc-900 transition-colors">
              Портфолио
            </Link>
            <Link href="/services" className="hover:text-zinc-900 transition-colors">
              Услуги
            </Link>
          </nav>

          {/* Копирайт */}
          <div className="text-[10px] uppercase tracking-widest text-zinc-400">
            © {currentYear} Все права защищены
          </div>
          
        </div>

        {/* Дополнительная тонкая деталь — можно указать город или специализацию */}
        <div className="mt-12 text-center border-t border-zinc-50 pt-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-300">
            Photography & Visual Art
          </p>
        </div>
      </div>
    </footer>
  );
}