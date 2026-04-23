'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getNewsBySlug } from '@/lib/data';
import Link from 'next/link';

export default function NewsDetailContent({ slug }: { slug: string }) {
  const { isHydrated, language } = useLanguage();

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  const article = getNewsBySlug(slug, language as 'ru' | 'uz' | 'en');

  if (!article) {
    return (
      <section className="py-20 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Статья не найдена</h1>
          <Link href="/news" className="text-blue-600 hover:underline">
            Вернуться к новостям
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

        <p className="text-gray-500 mb-6">{article.date}</p>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {article.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <article
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Social Share */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600 mb-4">Поделиться статьей:</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              YouTube
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
