'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function ProjectsContent() {
  const { t, isHydrated, language } = useLanguage();

  const projects = [
    { id: 'cawep', title: 'CAWEP x Всемирный банк', type: 'Документальный видеоролик', slug: 'cawep', image: '/project.png' },
  ];

  if (language === 'uz') {
    projects[0].type = 'Hujjatli videorolik';
  } else if (language === 'en') {
    projects[0].type = 'Documentary video';
    projects[0].title = 'CAWEP x World Bank';
  }

  const getFilters = () => {
    switch(language) {
      case 'uz': return ['Barchasi', 'Video prodyuserlik', 'Reklama', 'Ijtimoiy loyihalar'];
      case 'en': return ['All', 'Video production', 'Advertising', 'Social projects'];
      default: return ['Все', 'Видеопродакшн', 'Реклама', 'Социальные проекты'];
    }
  };
  
  const filters = getFilters();

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-5xl font-bold mb-12">{t('projects.title')}</h1>

        <div className="mb-12">
          <div className="flex gap-4 flex-wrap">
            {filters.map((f, i) => (
              <button key={i} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-black text-white' : 'border-2 border-black text-black hover:bg-black hover:text-white'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-200 rounded-lg mb-4 h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
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
