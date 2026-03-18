import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface Project {
  id: string;
  title: string;
  type: string;
  image: string;
  slug: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Проект нейм 1',
      type: 'Рекламный ролик',
      image: 'https://via.placeholder.com/400x300?text=Project+1',
      slug: 'project-1',
    },
    {
      id: '2',
      title: 'Проект нейм 2',
      type: 'Контент для ТикТока',
      image: 'https://via.placeholder.com/400x300?text=Project+2',
      slug: 'project-2',
    },
    {
      id: '3',
      title: 'Проект нейм 3',
      type: 'Имиджевый фильм',
      image: 'https://via.placeholder.com/400x300?text=Project+3',
      slug: 'project-3',
    },
    {
      id: '4',
      title: 'Проект нейм 4',
      type: 'Документальный проект',
      image: 'https://via.placeholder.com/400x300?text=Project+4',
      slug: 'project-4',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Проекты</h2>
          <Link
            href="/projects"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Все проекты
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
