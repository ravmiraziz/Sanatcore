'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { FiAward, FiDownload } from 'react-icons/fi';

export default function TrophiesSection() {
  const { t, isHydrated } = useLanguage();

  if (!isHydrated) return <div className="py-20 min-h-[60vh]"></div>;

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

        {/* Trophy Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-500 group">
            {/* Certificate Image */}
            <div className="relative overflow-hidden">
              <div className="aspect-[16/11] relative">
                <Image
                  src="/sertifikat1.jpg"
                  alt="Ethos Film Awards 2026 — Audience Choice, Best Short — CAWEP"
                  fill
                  className="object-contain bg-[#f5f0e8] p-4 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
              {/* Glowing border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/20 rounded-t-2xl transition-all duration-500 pointer-events-none" />
            </div>

            {/* Info */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {t('trophies.awardTitle')}
                  </h3>
                  <p className="text-yellow-400 font-medium text-sm md:text-base mb-1">
                    {t('trophies.category')}
                  </p>
                  <p className="text-gray-400 text-sm">{t('trophies.details')}</p>
                </div>
                <a
                  href="/sertifikat1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded-xl font-medium text-sm transition-all duration-300 whitespace-nowrap"
                >
                  <FiDownload className="w-4 h-4" />
                  {t('trophies.download')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
