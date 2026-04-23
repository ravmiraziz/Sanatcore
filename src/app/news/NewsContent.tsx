'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { newsData } from '@/lib/data';

export default function NewsContent() {
  const { t, isHydrated, language } = useLanguage();

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  const langKey = (language as 'ru' | 'uz' | 'en') || 'ru';
  const articles = newsData[langKey] || newsData.ru;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-5xl font-bold mb-12">{t('news.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group cursor-pointer bg-slate-400/20 p-6 rounded-xl"
            >
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors line-clamp-3">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
