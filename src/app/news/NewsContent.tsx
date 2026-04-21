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
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-200 rounded-lg mb-4 h-64">
                {article.image && article.image.startsWith('/') ? (
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-400">Изображение статьи</p>
                  </div>
                )}
              </div>
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
