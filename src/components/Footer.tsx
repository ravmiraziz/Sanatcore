'use client';

import Link from 'next/link';
import { FiInstagram, FiYoutube, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiTelegram } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, isHydrated } = useLanguage();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">San&apos;atcore</h3>
            <p className="text-gray-400 text-sm">
              {isHydrated ? t('footer.description') : 'Креативное агентство с упором на видеопродакшн. Мы создаём визуальные истории, которые формируют восприятие брендов.'}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{isHydrated ? t('footer.fastLinks') : 'Навигация'}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {isHydrated ? t('nav.about') : 'О компании'}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {isHydrated ? t('nav.services') : 'Услуги'}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  {isHydrated ? t('nav.projects') : 'Проекты'}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  {isHydrated ? t('nav.news') : 'Новости'}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors">
                  {isHydrated ? t('nav.contacts') : 'Контакты'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{isHydrated ? t('footer.contacts') : 'Контакты'}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:sanatcoreuz@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <FiMail size={16} />
                  sanatcoreuz@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+998909974888" className="hover:text-white transition-colors">
                  +998 90 997 48 88
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Социальные сети</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/sanatcore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@sanatcore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FiYoutube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/sanatcore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://t.me/nsanatcore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <SiTelegram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-400 text-center">
            <p>{isHydrated ? t('footer.rights') : '© 2024 San\'atcore. Все права защищены.'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
