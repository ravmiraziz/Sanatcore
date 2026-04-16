'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function NewsContent() {
  const { t, isHydrated, language } = useLanguage();

  const articles = [
    { id: '1', title: 'Статья первая', date: '17 марта 2024', slug: 'article-1' },
    { id: '2', title: 'Статья вторая', date: '15 марта 2024', slug: 'article-2' },
    { id: '3', title: 'Статья третья', date: '10 марта 2024', slug: 'article-3' },
    { id: '4', title: 'Статья четвертая', date: '5 марта 2024', slug: 'article-4' },
  ];

  if (language === 'uz') {
    articles[0].title = 'Birinchi maqola'; articles[0].date = '17-mart 2024';
    articles[1].title = 'Ikkinchi maqola'; articles[1].date = '15-mart 2024';
    articles[2].title = 'Uchinchi maqola'; articles[2].date = '10-mart 2024';
    articles[3].title = 'To\'rtinchi maqola'; articles[3].date = '5-mart 2024';
  } else if (language === 'en') {
    articles[0].title = 'First article'; articles[0].date = 'March 17, 2024';
    articles[1].title = 'Second article'; articles[1].date = 'March 15, 2024';
    articles[2].title = 'Third article'; articles[2].date = 'March 10, 2024';
    articles[3].title = 'Fourth article'; articles[3].date = 'March 5, 2024';
  }

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

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
              <div className="relative overflow-hidden bg-gray-200 rounded-lg mb-4 h-48">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">Изображение статьи</p>
                </div>
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
