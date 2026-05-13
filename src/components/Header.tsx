'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledState, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const scrolled = isScrolledState || !isHome;
  const { t, isHydrated } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.trophies'), href: '/trophies' },
    { label: t('nav.news'), href: '/news' },
    { label: t('nav.contacts'), href: '/contacts' },
  ];


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm py-2'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <nav className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold flex items-center gap-2 transition-colors duration-500 ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          <img src="/logo.png" alt="logo" className="size-12" />
          San&apos;atcore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
             <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-500 ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons & Language */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+998909974888"
            className={`text-sm font-medium transition-colors duration-500 ${
              scrolled ? 'text-gray-700' : 'text-white/90'
            }`}
          >
            +998 90 997 48 88
          </a>

          <Link href="/#contact-form" className="btn-primary text-sm">
            {isHydrated ? t('nav.leaveRequest') : 'Оставить заявку'}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full border-t transition-all duration-500 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-sm border-gray-200'
              : 'bg-black/60 backdrop-blur-md border-white/10'
          }`}
        >
          <div className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:+998909974888"
              className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              +998 90 997 48 88
            </a>
            <Link
              href="/#contact-form"
              className="btn-primary text-sm w-full"
              onClick={() => setIsOpen(false)}
            >
               {isHydrated ? t('nav.leaveRequest') : 'Оставить заявку'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
