import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Услуги | San\'atcore',
  description: 'Полный спектр услуг креативного агентства San\'atcore: видеопродакшн, реклама, брендинг и многое другое.',
};

interface Service {
  title: string;
  slug: string;
  description: string;
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Рекламные ролики',
      slug: 'advertising',
      description: 'Создание высокопрофессиональных рекламных видео для различных платформ.',
    },
    {
      title: 'Контент для социальных сетей',
      slug: 'social-content',
      description: 'Короткие, яркие видео и посты специально оптимизированные для соцсетей.',
    },
    {
      title: 'Продюсирование экспертов',
      slug: 'expert-production',
      description: 'Развитие личного бренда экспертов и публичных фигур.',
    },
    {
      title: 'Брендинг и ребрендинг',
      slug: 'branding',
      description: 'Создание или переоформление визуальной идентичности бренда.',
    },
    {
      title: 'Организация и съемка мероприятий',
      slug: 'events',
      description: 'Полное сопровождение событий: от концепции до финального видео.',
    },
    {
      title: 'Социальные кампании',
      slug: 'social-campaigns',
      description: 'Креативные кампании для общественно значимых инициатив.',
    },
    {
      title: 'Документальные проекты',
      slug: 'documentary',
      description: 'Глубокие, захватывающие документальные работы.',
    },
    {
      title: 'Музыкальные клипы',
      slug: 'music-videos',
      description: 'Создание качественного видеоконтента для музыкантов.',
    },
    {
      title: 'Имиджевые фильмы',
      slug: 'image-films',
      description: 'Корпоративные видео, презентующие компанию в лучшем свете.',
    },
    {
      title: 'Фильмы и сериалы',
      slug: 'films-series',
      description: 'Полнометражные художественные проекты.',
    },
    {
      title: 'Вертикальные сериалы',
      slug: 'vertical-series',
      description: 'Сериалы в формате 9:16 для мобильных платформ.',
    },
  ];

  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-12">Услуги</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 bg-gray-50 hover:bg-black transition-colors rounded-lg cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-300 transition-colors mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-black group-hover:text-white transition-colors">
                  <span className="text-sm font-semibold">Подробнее</span>
                  <FiArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
