'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FiArrowRight } from 'react-icons/fi';

const certificates = [
  {
    id: 'ethos-2026',
    image: '/sertifikat1.jpg',
    title: 'Ethos Film Awards 2026',
    subtitle: 'Audience Choice — Best Short',
    bgColor: 'bg-[#f5f0e8]',
  },
  {
    id: 'cawep-worldbank',
    image: '/sertifikat.PNG',
    titleKey: 'trophies.cawepCategory',
    subtitle: 'CAWEP — World Bank Group',
    bgColor: 'bg-[#e8eef5]',
  },
];

export default function TrophiesSection() {
  const { t, isHydrated } = useLanguage();

  if (!isHydrated) return <div className="py-20 min-h-[40vh]"></div>;

  return (
    <section
      id="trophies"
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('trophies.title')}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('trophies.subtitle')}</p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert) => (
            <Link
              key={cert.id}
              href="/trophies"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-500 group block"
            >
              {/* Certificate Image */}
              <div className={`relative overflow-hidden ${cert.bgColor}`}>
                <div className="aspect-[16/11] relative">
                  <Image
                    src={cert.image}
                    alt={cert.title || ''}
                    fill
                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {cert.title || (cert.titleKey ? t(cert.titleKey) : '')}
                </h3>
                <p className="text-yellow-400 font-medium text-sm">
                  {cert.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/trophies"
            className="inline-flex items-center gap-2 text-white/80 hover:text-yellow-400 font-medium transition-colors duration-300"
          >
            {t('trophies.viewAll')}
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
