import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            San&apos;atcore
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Креативное агентство с упором на видеопродакшн.
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Мы создаем визуальные истории, которые формируют восприятие брендов, людей и идей.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center gap-2 justify-center"
            >
              Посмотреть проекты
              <FiArrowRight />
            </Link>
            <button className="btn-secondary inline-flex items-center gap-2 justify-center">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
