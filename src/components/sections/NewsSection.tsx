'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import { newsData } from '@/lib/data';

export default function NewsSection() {
  const { t, isHydrated, language } = useLanguage();

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  const langKey = (language as 'ru' | 'uz' | 'en') || 'ru';
  // Show up to 3 news articles on the homepage
  const news = (newsData[langKey] || newsData.ru).slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{t('news.title')}</h2>
          <Link href="/news" className="btn-secondary inline-flex items-center gap-2">
            {t('news.allNews')}
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="group cursor-pointer">
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
