import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Проекты | San\'atcore',
  description: 'Портфолио и галерея работ креативного агентства San\'atcore.',
};

interface Project {
  id: string;
  title: string;
  type: string;
}

export default function Projects() {
  const projects: Project[] = [
    { id: '1', title: 'Проект нейм 1', type: 'Рекламный ролик' },
    { id: '2', title: 'Проект нейм 2', type: 'Контент для ТикТока' },
    { id: '3', title: 'Проект нейм 3', type: 'Имиджевый фильм' },
    { id: '4', title: 'Проект нейм 4', type: 'Документальный проект' },
    { id: '5', title: 'Проект нейм 5', type: 'Музыкальный клип' },
    { id: '6', title: 'Проект нейм 6', type: 'Социальная кампания' },
  ];

  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-12">Проекты</h1>

          <div className="mb-12">
            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium">
                Все
              </button>
              <button className="px-6 py-2 border-2 border-black text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Видеопродакшн
              </button>
              <button className="px-6 py-2 border-2 border-black text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Реклама
              </button>
              <button className="px-6 py-2 border-2 border-black text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Социальные проекты
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-200 rounded-lg mb-4 h-64">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-400">Изображение проекта</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
