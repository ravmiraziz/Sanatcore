'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AboutContent() {
  const { t, isHydrated } = useLanguage();

  if (!isHydrated) return <div className="py-20 bg-white min-h-screen"></div>;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-5xl font-bold mb-12">{t('aboutPage.title')}</h1>
        
        <div className="max-w-4xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('aboutPage.title')}</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p><strong>San&apos;atcore</strong> {t('aboutPage.historyIntroP1').replace('San\'atcore ', '')}</p>
              <p>{t('aboutPage.historyIntroP2')}</p>
              <p>{t('aboutPage.historyIntroP3')}</p>
              <p>{t('aboutPage.historyIntroP4')}</p>
              <p className="font-bold text-black border-l-4 border-black pl-4 py-2 bg-gray-50">{t('aboutPage.historyIntroP5')}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">{t('aboutPage.achievementsTitle')}</h2>
            
            <div className="space-y-10">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">{t('aboutPage.socialCampaignsTitle')}</h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  <li>{t('aboutPage.socialCampaignsL1')}</li>
                  <li>{t('aboutPage.socialCampaignsL2')}</li>
                  <li>{t('aboutPage.socialCampaignsL3')}</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">{t('aboutPage.internationalTitle')}</h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  <li>{t('aboutPage.internationalL1')}</li>
                  <li>{t('aboutPage.internationalL2')}</li>
                  <li>{t('aboutPage.internationalL3')}</li>
                  <li>{t('aboutPage.internationalL4')}</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">{t('aboutPage.culturalTitle')}</h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  <li>{t('aboutPage.culturalL1')}</li>
                  <li>{t('aboutPage.culturalL2')}</li>
                  <li>{t('aboutPage.culturalL3')}</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">{t('aboutPage.brandTitle')}</h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                  <li>{t('aboutPage.brandL1')}</li>
                  <li>{t('aboutPage.brandL2')}</li>
                  <li>{t('aboutPage.brandL3')}</li>
                  <li>{t('aboutPage.brandL4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
