import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getServiceBySlug } from '@/lib/data';
import Link from 'next/link';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return {
    title: `${service?.title || 'Услуга'} | San\'atcore`,
    description: service?.description || 'Детальное описание услуги San\'atcore.',
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

function getYoutubeId(url?: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main>
        <Header />
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-6">Услуга не найдена</h1>
            <Link href="/services" className="text-black underline">Вернуться к списку услуг</Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const youtubeId = getYoutubeId(service.videoUrl);

  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
            &larr; Назад к услугам
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            {service.title}
          </h1>

          <div className="max-w-4xl space-y-12">
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            {(service.features && service.features.length > 0) && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Включает в себя:</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  {service.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {(service.uses && service.uses.length > 0) && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Используется для:</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  {service.uses.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {youtubeId && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Пример проекта:</h2>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
