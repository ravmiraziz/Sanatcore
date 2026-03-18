import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Новости | San\'atcore',
  description: 'Последние новости, статьи и медиа контент от San\'atcore.',
};

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  slug: string;
}

export default function News() {
  const articles: NewsArticle[] = [
    { id: '1', title: 'Статья первая', date: '17 марта 2024', slug: 'article-1' },
    { id: '2', title: 'Статья вторая', date: '15 марта 2024', slug: 'article-2' },
    { id: '3', title: 'Статья третья', date: '10 марта 2024', slug: 'article-3' },
    { id: '4', title: 'Статья четвертая', date: '5 марта 2024', slug: 'article-4' },
  ];

  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-12">Новости и медиа</h1>

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

      <Footer />
    </main>
  );
}
