"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "Портфолио", href: "/portfolio" },
    { title: "Услуги", href: "/#services" },
    { title: "Контакты", href: "/#contacts" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FFFDF6] border-b border-zinc-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-center relative">
        
        {/* Десктопная навигация */}
        <ul className="hidden md:flex gap-12">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-base transition-colors duration-300 uppercase tracking-[0.15em] ${
                    isActive ? "text-black" : "text-zinc-400 hover:text-black"
                  }`}
                >
                  {item.title}
                </Link>
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Бургер-кнопка */}
        <button
          className="md:hidden absolute right-6 z-50 w-10 h-10 flex items-center justify-center focus:outline-none bg-[#FFFDF6]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-black transform transition duration-500 ease-in-out top-2 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-black transform transition duration-500 ease-in-out top-4 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>


        <div
          className={`fixed inset-0 bg-white transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <ul className={`flex flex-col gap-10 items-center justify-center h-full transition-transform duration-700 ${
            isOpen ? "translate-y-0" : "translate-y-10"
          }`}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-light uppercase tracking-[0.25em] text-black hover:text-zinc-400 transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}