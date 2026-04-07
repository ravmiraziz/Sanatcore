import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiArrowRight } from 'react-icons/fi';
import { servicesData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Услуги | San\'atcore',
  description: 'Полный спектр услуг креативного агентства San\'atcore: видеопродакшн, реклама, брендинг и многое другое.',
};

export default function Services() {
  const services = servicesData;

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
