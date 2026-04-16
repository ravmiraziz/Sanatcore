'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { dictionaries, Language } from '@/locales/dictionary';

// Helper to get nested object property by string path
function resolvePath(object: any, path: string, defaultValue: string = '') {
  return path.split('.').reduce((o, p) => (o ? o[p] : defaultValue), object) || defaultValue;
}

type LanguageContextType = {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => any;
  isHydrated: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru'); // default to ru
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ru', 'uz', 'en'].includes(savedLang)) {
      setLanguage(savedLang);
    }
    setIsHydrated(true);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    // If not hydrated yet, we can choose to return the ru default to match SSR, 
    // but React hydration mismatch might still happen if we return something different than SSR.
    // Actually, SSR will use 'ru' because the state initializes with 'ru'.
    const dict = dictionaries[language] || dictionaries.ru;
    return resolvePath(dict, key, key);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
