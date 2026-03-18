import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Услуга | San\'atcore',
  description: 'Детальное описание услуги San\'atcore.',
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-12 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>

          <div className="max-w-4xl">
            <div className="bg-gray-50 p-12 rounded-lg mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Содержимое этой услуги будет подгружено из Strapi CMS...
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Описание</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Детальное описание услуги будет добавлено позже.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Портфолио проектов</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Примеры работ в этом направлении будут выведены здесь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
