import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'О компании | San\'atcore',
  description: 'История, манифест и философия креативного агентства San\'atcore.',
};

export default function About() {
  return (
    <main>
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-12">О компании</h1>
          
          <div className="max-w-4xl space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">История</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Содержимое будет добавлено позже...
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Манифест</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Содержимое будет добавлено позже...
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Философия</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Содержимое будет добавлено позже...
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Наш подход</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Содержимое будет добавлено позже...
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Сильные стороны</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Содержимое будет добавлено позже...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
