'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

export default function NewsSection() {
  const { t, isHydrated } = useLanguage();

  const news: NewsArticle[] = [
    {
      id: '1',
      title: 'Статья первая',
      date: '17 марта 2024',
      image: 'https://via.placeholder.com/400x250?text=News+1',
      slug: 'news-1',
    },
    {
      id: '2',
      title: 'Статья вторая',
      date: '15 марта 2024',
      image: 'https://via.placeholder.com/400x250?text=News+2',
      slug: 'news-2',
    },
    {
      id: '3',
      title: 'Статья третья',
      date: '10 марта 2024',
      image: 'https://via.placeholder.com/400x250?text=News+3',
      slug: 'news-3',
    },
  ];

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{t('news.title')}</h2>
          <Link
            href="/news"
            className="btn-secondary inline-flex items-center gap-2"
          >
            {t('news.allNews')}
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
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
