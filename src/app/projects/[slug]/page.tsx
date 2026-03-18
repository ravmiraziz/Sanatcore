import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Проект | San\'atcore',
  description: 'Детальная информация о проекте.',
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>

          {/* Video */}
          <div className="bg-gray-200 rounded-lg mb-12 h-96 flex items-center justify-center">
            <p className="text-gray-400">Видео проекта будет выведено здесь</p>
          </div>

          <div className="space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Описание</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Описание проекта будет загружено из Strapi CMS...
              </p>
            </div>

            {/* Task */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Задача</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Детальное описание поставленной задачи.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Решение</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Описание решения и подхода.
              </p>
            </div>

            {/* Result */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Результат</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Описание полученного результата.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
