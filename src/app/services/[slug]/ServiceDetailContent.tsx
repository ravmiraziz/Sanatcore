'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getServiceBySlug } from '@/lib/data';
import Link from 'next/link';

export default function ServiceDetailContent({ slug, initialService }: { slug: string, initialService: any }) {
  const { isHydrated, language } = useLanguage();

  const service = isHydrated ? getServiceBySlug(slug, language) : initialService;

  if (!service) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Not Found</h1>
          <Link href="/services" className="text-black underline">Back</Link>
        </div>
      </section>
    );
  }

  function getYoutubeId(url?: string) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  const youtubeId = getYoutubeId(service.videoUrl);

  const getBackLabel = () => {
    switch (language) {
      case 'uz': return '← Xizmatlarga qaytish';
      case 'en': return '← Back to services';
      default: return '← Назад к услугам';
    }
  };

  const getIncludesLabel = () => {
    switch (language) {
      case 'uz': return 'O\'z ichiga oladi:';
      case 'en': return 'Includes:';
      default: return 'Включает в себя:';
    }
  };

  const getUsesLabel = () => {
    switch (language) {
      case 'uz': return 'Quyidagilar uchun ishlatiladi:';
      case 'en': return 'Used for:';
      default: return 'Используется для:';
    }
  };

  const getProjectLabel = () => {
    switch (language) {
      case 'uz': return 'Loyiha misoli:';
      case 'en': return 'Project example:';
      default: return 'Пример проекта:';
    }
  };

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
          {getBackLabel()}
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
              <h2 className="text-2xl font-bold mb-6">{getIncludesLabel()}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                {service.features.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {(service.uses && service.uses.length > 0) && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{getUsesLabel()}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                {service.uses.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {youtubeId && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{getProjectLabel()}</h2>
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
  );
}
