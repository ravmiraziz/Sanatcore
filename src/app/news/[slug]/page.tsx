import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Статья | San\'atcore',
  description: 'Статья на портале San\'atcore.',
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>

          <p className="text-gray-500 mb-12">17 марта 2024</p>

          {/* Featured Image */}
          <div className="bg-gray-200 rounded-lg mb-12 h-96 flex items-center justify-center">
            <p className="text-gray-400">Изображение статьи</p>
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-full">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Основной контент статьи будет загружен из Strapi CMS...
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>

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

      <Footer />
    </main>
  );
}
