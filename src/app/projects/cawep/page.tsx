import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CawepContent from './CawepContent';

export const metadata: Metadata = {
  title: 'CAWEP x World Bank Project | San\'atcore',
  description: 'Как San’atcore передал смысл воды в Центральной Азии. Документальный видеоролик для Всемирного банка.',
  keywords: "видеопродакшн Центральная Азия, документальный видеопродакшн Узбекистан, видеопродакшн для международных проектов, социальные видеопроекты, креативное агентство Ташкент, видеопродакшн для НКО и грантов, video production Central Asia, documentary production Uzbekistan, World Bank video production, CAWEP Central Asia project, social impact video production",
  openGraph: {
    title: 'CAWEP x World Bank Project | San\'atcore',
    description: 'Как San’atcore передал смысл воды в Центральной Азии. Документальный видеоролик для Всемирного банка.',
    images: [{ url: '/project.png' }],
  }
};

export default function CawepPage() {
  return (
    <main>
      <Header />
      <CawepContent />
      <Footer />
    </main>
  );
}
