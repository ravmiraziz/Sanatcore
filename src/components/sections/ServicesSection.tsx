import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface Service {
  title: string;
  slug: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    { title: 'Рекламные ролики', slug: 'advertising' },
    { title: 'Контент для социальных сетей', slug: 'social-content' },
    { title: 'Продюсирование экспертов', slug: 'expert-production' },
    { title: 'Брендинг и ребрендинг', slug: 'branding' },
    { title: 'Организация и съемка мероприятий', slug: 'events' },
    { title: 'Социальные кампании', slug: 'social-campaigns' },
    { title: 'Документальные проекты', slug: 'documentary' },
    { title: 'Музыкальные клипы', slug: 'music-videos' },
    { title: 'Имиджевые фильмы', slug: 'image-films' },
    { title: 'Фильмы и сериалы', slug: 'films-series' },
    { title: 'Вертикальные сериалы', slug: 'vertical-series' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center max-w-3xl mx-auto">
          Услуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-black mb-4 group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Узнать больше</span>
                <FiArrowRight className="text-gray-400 group-hover:text-black transition-colors transform group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
