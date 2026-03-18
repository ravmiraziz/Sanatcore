import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiMail, FiPhone } from 'react-icons/fi';
import { SiTelegram } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Контакты | San\'atcore',
  description: 'Контактная информация San\'atcore. Свяжитесь с нами по телефону, email или в социальных сетях.',
};

export default function Contacts() {
  return (
    <main>
      <Header />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-12">Контакты</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Свяжитесь с нами</h2>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FiMail className="text-2xl text-black" />
                    <h3 className="text-lg font-semibold">Email</h3>
                  </div>
                  <a
                    href="mailto:info@sanatcore.ru"
                    className="text-gray-700 hover:text-black transition-colors text-lg"
                  >
                    info@sanatcore.ru
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FiPhone className="text-2xl text-black" />
                    <h3 className="text-lg font-semibold">Телефон</h3>
                  </div>
                  <a
                    href="tel:+79999999999"
                    className="text-gray-700 hover:text-black transition-colors text-lg"
                  >
                    +7 (999) 999-99-99
                  </a>
                </div>

                {/* Telegram */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <SiTelegram className="text-2xl text-black" />
                    <h3 className="text-lg font-semibold">Telegram</h3>
                  </div>
                  <a
                    href="https://t.me/sanatcore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors text-lg"
                  >
                    @sanatcore
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Адрес</h3>
                  <p className="text-gray-700 text-lg">
                    Санкт-Петербург, Россия
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors font-semibold"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors font-semibold"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors font-semibold"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Или напишите нам</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-600 mb-6">
                  Заполните форму ниже и мы свяжемся с вами как можно скорее.
                </p>
                <button className="btn-primary w-full">
                  Открыть форму заявки
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
