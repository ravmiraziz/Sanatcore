'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';

const trophies = [
  {
    id: 'ethos-2026',
    image: '/sertifikat1.jpg',
    festival: 'Ethos Film Awards 2026',
    category: 'Audience Choice — Best Short',
    project: 'CAWEP',
    recipient: 'Nurullokh Nigmanov',
    location: 'Santa Monica, CA 90401',
    date: 'April 26, 2026',
    director: 'Anabelle D. Munro',
    downloadUrl: '/sertifikat1.jpg',
    projectLink: '/projects/cawep',
    bgColor: 'bg-[#f5f0e8]',
  },
  {
    id: 'cawep-worldbank',
    image: '/sertifikat.PNG',
    festival: 'CAWEP — World Bank Group',
    category: 'trophies.cawepCategory',
    project: 'CAWEP',
    recipient: 'San\'atcore',
    location: 'trophies.cawepLocation',
    date: '2025',
    director: 'trophies.cawepDirector',
    downloadUrl: '/sertifikat.PNG',
    projectLink: '/projects/cawep',
    bgColor: 'bg-[#e8eef5]',
  },
];

export default function TrophiesContent() {
  const { t, isHydrated } = useLanguage();

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 text-black">{t('trophies.title')}</h1>
          <p className="text-gray-500 text-lg max-w-2xl">{t('trophies.subtitle')}</p>
        </div>

        {/* Trophies Grid */}
        <div className="grid grid-cols-1 gap-10">
          {trophies.map((trophy) => (
            <div
              key={trophy.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Certificate Image */}
                <div className={`relative overflow-hidden ${trophy.bgColor}`}>
                  <div className="aspect-[16/11] lg:aspect-auto lg:h-full relative">
                    <Image
                      src={trophy.image}
                      alt={`${trophy.festival} — ${trophy.category} — ${trophy.project}`}
                      fill
                      className="object-contain p-6 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>

                {/* Trophy Details */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 w-fit">
                    <FiAward className="w-3.5 h-3.5" />
                    {t('trophies.winner')}
                  </div>

                  <h2 className="text-3xl font-bold text-black mb-3">{trophy.festival}</h2>

                  <p className="text-yellow-600 font-semibold text-lg mb-6">
                    {trophy.category.startsWith('trophies.') ? t(trophy.category) : trophy.category}
                  </p>

                  {/* Details Grid */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm min-w-[100px]">
                        {t('trophies.projectLabel')}
                      </span>
                      <span className="text-black font-medium">{trophy.project}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm min-w-[100px]">
                        {t('trophies.recipientLabel')}
                      </span>
                      <span className="text-black font-medium">{trophy.recipient}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm min-w-[100px]">
                        {t('trophies.dateLabel')}
                      </span>
                      <span className="text-black font-medium">{trophy.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm min-w-[100px]">
                        {t('trophies.locationLabel')}
                      </span>
                      <span className="text-black font-medium">
                        {trophy.location.startsWith('trophies.') ? t(trophy.location) : trophy.location}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={trophy.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors duration-300"
                    >
                      <FiDownload className="w-4 h-4" />
                      {t('trophies.download')}
                    </a>
                    <Link
                      href={trophy.projectLink}
                      className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black text-black rounded-xl font-medium text-sm hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      {t('trophies.viewProject')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
