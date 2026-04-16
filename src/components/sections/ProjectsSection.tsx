'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

interface Project {
  id: string;
  title: string;
  type: string;
  image: string;
  slug: string;
}

export default function ProjectsSection() {
  const { t, isHydrated, language } = useLanguage();

  const projects: Project[] = [
    {
      id: 'cawep',
      title: language === 'en' ? 'CAWEP x World Bank' : 'CAWEP x Всемирный банк',
      type: language === 'uz' ? 'Hujjatli videorolik' : (language === 'en' ? 'Documentary video' : 'Документальный видеоролик'),
      image: '/project.png',
      slug: 'cawep',
    }
  ];

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{t('projects.title')}</h2>
          <Link
            href="/projects"
            className="btn-secondary inline-flex items-center gap-2"
          >
            {t('projects.allProjects')}
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.type}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
