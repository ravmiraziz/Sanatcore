'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/locales/dictionary';
import { FiGlobe, FiChevronUp } from 'react-icons/fi';

export default function LanguageSwitcher() {
  const { language, changeLanguage, isHydrated } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'Русский' },
    { code: 'uz', label: 'O\'zbek' },
    { code: 'en', label: 'English' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (!isHydrated) return null;

  const currentLangLabel = languages.find(l => l.code === language)?.label || 'Русский';

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto" ref={dropdownRef}>
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-full mb-3 right-0 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden flex flex-col w-36 origin-bottom right-0 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 text-sm font-medium transition-colors text-left hover:bg-gray-100 ${
                  language === lang.code ? 'text-black bg-gray-50' : 'text-gray-600'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-900 transition-colors shadow-2xl px-5 py-3.5 rounded-full font-medium"
        >
          <FiGlobe className="text-xl" />
          <span className="hidden sm:inline">{currentLangLabel}</span>
          <span className="sm:hidden">{language.toUpperCase()}</span>
          <FiChevronUp className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
}
