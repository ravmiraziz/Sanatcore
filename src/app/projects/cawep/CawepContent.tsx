'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function CawepContent() {
  const { t, isHydrated, language } = useLanguage();

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

  if (!isHydrated) return <div className="py-20 min-h-screen"></div>;

  return (
    <section className="py-32 bg-white text-black">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('cawep.title')}</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-12">{t('cawep.subtitle')}</h2>

        <img
          src="/project.png"
          alt="CAWEP Project Cover"
          className="w-full h-auto object-cover rounded-xl mb-12 shadow-md"
        />

        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-16 p-6 bg-gray-50 rounded-xl">
          <div>
            <p className="text-sm text-gray-500">{t('cawep.clientKey')}</p>
            <p className="font-medium text-lg">{t('cawep.clientValue')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{t('cawep.regionKey')}</p>
            <p className="font-medium text-lg">{t('cawep.regionValue')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{t('cawep.productionKey')}</p>
            <p className="font-medium text-lg">{t('cawep.productionValue')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{t('cawep.formatKey')}</p>
            <p className="font-medium text-lg">{t('cawep.formatValue')}</p>
          </div>
        </div>

        <article className="prose prose-lg max-w-none text-gray-800 space-y-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{t('cawep.aboutTitle')}</h3>
            <p>{t('cawep.aboutP1')}</p>
            <p>{t('cawep.aboutP2')}</p>
          </div>

          {/* Watch Video */}
          <div className="my-16">
            <h3 className="text-2xl font-semibold mb-6 text-black">{t('cawep.watchVideo')}</h3>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/1bTEEqOtU08"
                title="CAWEP x World Bank Project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[500px] rounded-xl shadow-lg border-none"
              ></iframe>
            </div>
          </div>

          {/* Idea */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{t('cawep.ideaTitle')}</h3>
            <p>{t('cawep.ideaP1')}</p>
            <p className="font-medium text-black text-xl italic my-4">{t('cawep.ideaP2')}</p>
            <p>{t('cawep.ideaP3')}</p>
            <p>{t('cawep.ideaP4')}</p>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{t('cawep.processTitle')}</h3>
            <p>{t('cawep.processP1')}</p>
            <p>{t('cawep.processP2')}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {t('cawep.processList').map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t('cawep.processP3')}</p>
            <p>{t('cawep.processP4')}</p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{t('cawep.challengesTitle')}</h3>
            <p>{t('cawep.challengesP1')}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {t('cawep.challengesList').map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t('cawep.challengesP2')}</p>
          </div>

          {/* Why Matters */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{t('cawep.whyMattersTitle')}</h3>
            <p>{t('cawep.whyMattersP1')}</p>
            <p>{t('cawep.whyMattersP2')}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {t('cawep.whyMattersList').map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="font-semibold text-black">{t('cawep.whyMattersP3')}</p>
          </div>

          {/* Recognition */}
          <div className="bg-gray-100 p-8 rounded-xl border-l-4 border-black">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              {t('cawep.recognitionTitle')}
            </h3>
            <p className="mb-4">{t('cawep.recognitionP1')}</p>
            <blockquote className="italic text-lg text-gray-700 mb-6">
              {t('cawep.recognitionQuote')}
            </blockquote>
            <p className="mb-2">{t('cawep.recognitionP2')}</p>
            <ul className="list-disc pl-6 space-y-1">
              {t('cawep.recognitionList').map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{t('cawep.impactTitle')}</h3>
            <p>{t('cawep.impactP1')}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {t('cawep.impactList').map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Clients */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">{t('cawep.clientsTitle')}</h3>
            <p>{t('cawep.clientsP1')}</p>
            <p>{t('cawep.clientsP2')}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {t('cawep.clientsList').map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="font-medium text-black">{t('cawep.clientsP3')}</p>
          </div>

          {/* Collab */}
          <div className="flex flex-col justify-center items-center bg-black text-white p-10 rounded-2xl text-center mt-12">
            <h3 className="text-3xl font-bold mb-6">{t('cawep.collabTitle')}</h3>
            <Link href="/#contact-form" className="btn-primary w-2/4">
              {getOpenFormBtn()}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
