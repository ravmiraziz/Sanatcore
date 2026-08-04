'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FiMail, FiPhone } from 'react-icons/fi';
import { SiTelegram } from 'react-icons/si';

export default function ContactsContent() {
  const { t, isHydrated, language } = useLanguage();

  const getTitle = () => {
    switch (language) {
      case 'uz':
        return 'Aloqa';
      case 'en':
        return 'Contacts';
      default:
        return 'Контакты';
    }
  };

  const getContactUs = () => {
    switch (language) {
      case 'uz':
        return "Biz bilan bog'lanish";
      case 'en':
        return 'Contact us';
      default:
        return 'Свяжитесь с нами';
    }
  };

  const getPhone = () => {
    switch (language) {
      case 'uz':
        return 'Telefon';
      case 'en':
        return 'Phone';
      default:
        return 'Телефон';
    }
  };

  const getAddressTitle = () => {
    switch (language) {
      case 'uz':
        return 'Manzil';
      case 'en':
        return 'Address';
      default:
        return 'Адрес';
    }
  };

  const getAddress = () => {
    switch (language) {
      case 'uz':
        return '1-y proezd Muxtor Ashrafi, 67A';
      case 'en':
        return '1-y street Muhtor Ashrafiy, 67A';
      default:
        return '1-й проезд Мухтара Ашрафи, 67А';
    }
  };

  const getSocialMedia = () => {
    switch (language) {
      case 'uz':
        return 'Ijtimoiy tarmoqlar';
      case 'en':
        return 'Social Media';
      default:
        return 'Социальные сети';
    }
  };

  const getOrWriteUs = () => {
    switch (language) {
      case 'uz':
        return 'Yoki bizga yozing';
      case 'en':
        return 'Or write to us';
      default:
        return 'Или напишите нам';
    }
  };

  const getFormDesc = () => {
    switch (language) {
      case 'uz':
        return "Quyidagi shaklni to'ldiring va biz siz bilan tez orada bog'lanamiz.";
      case 'en':
        return 'Fill out the form below and we will contact you as soon as possible.';
      default:
        return 'Заполните форму ниже и мы свяжемся с вами как можно скорее.';
    }
  };

  const getOpenFormBtn = () => {
    switch (language) {
      case 'uz':
        return 'Ariza shaklini ochish';
      case 'en':
        return 'Open request form';
      default:
        return 'Открыть форму заявки';
    }
  };

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-5xl font-bold mb-12">{getTitle()}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">{getContactUs()}</h2>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FiMail className="text-2xl text-black" />
                  <h3 className="text-lg font-semibold">Email</h3>
                </div>
                <a
                  href="mailto:sanatcoreuz@gmail.com"
                  className="text-gray-700 hover:text-black transition-colors text-lg"
                >
                  sanatcoreuz@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FiPhone className="text-2xl text-black" />
                  <h3 className="text-lg font-semibold">{getPhone()}</h3>
                </div>
                <a
                  href="tel:+998909974888"
                  className="text-gray-700 hover:text-black transition-colors text-lg"
                >
                  +998 90 997 48 88
                </a>
              </div>

              {/* Telegram */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SiTelegram className="text-2xl text-black" />
                  <h3 className="text-lg font-semibold">Telegram</h3>
                </div>
                <a
                  href="https://t.me/nsanatcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors text-lg"
                >
                  @sanatcore
                </a>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold mb-3">{getAddressTitle()}</h3>
                <p className="text-gray-700 text-lg">{getAddress()}</p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{getSocialMedia()}</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/sanatcore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors font-semibold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@sanatcore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors font-semibold"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sanatcore/"
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
            <h2 className="text-2xl font-bold mb-8">{getOrWriteUs()}</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-6">{getFormDesc()}</p>
              <Link href="/#contact-form" className="btn-primary w-full">
                {getOpenFormBtn()}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
