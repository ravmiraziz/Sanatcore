'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t, isHydrated } = useLanguage();

  if (!isHydrated) return <div className="py-20 min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('about.title')}</h2>

          <div className="space-y-12">
            {/* Who We Are */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">{t('about.whoTitle')}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('about.whoP1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('about.whoP2')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {t('about.whoP3')}
              </p>
              <p className="text-gray-700 text-lg font-semibold">
                {t('about.marketTime')}
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">{t('about.whatTitle')}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('about.whatIntro')}
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>{t('about.whatList1')}</li>
                <li>{t('about.whatList2')}</li>
                <li>{t('about.whatList3')}</li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                {t('about.whatOutro')}
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg mt-3">
                <li>{t('about.whatTask1')}</li>
                <li>{t('about.whatTask2')}</li>
                <li>{t('about.whatTask3')}</li>
                <li>{t('about.whatTask4')}</li>
              </ul>
            </div>

            {/* Our Approach */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">{t('about.approachTitle')}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('about.approachP1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('about.approachP2')}
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>{t('about.approachStep1')}</li>
                <li>{t('about.approachStep2')}</li>
                <li>{t('about.approachStep3')}</li>
                <li>{t('about.approachStep4')}</li>
                <li>{t('about.approachStep5')}</li>
                <li>{t('about.approachStep6')}</li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                {t('about.approachOutro')}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                href="/about"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t('about.moreAbout')}
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
