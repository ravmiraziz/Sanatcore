'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'О компании', href: '/about' },
    { label: 'Услуги', href: '/services' },
    { label: 'Проекты', href: '/projects' },
    { label: 'Новости', href: '/news' },
    { label: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          San&apos;atcore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+79999999999" className="text-sm font-medium">
            +7 (999) 999-99-99
          </a>
          <button className="btn-primary text-sm">
            Оставить заявку
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+79999999999" className="text-sm font-medium">
              +7 (999) 999-99-99
            </a>
            <button className="btn-primary text-sm w-full">
              Оставить заявку
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
