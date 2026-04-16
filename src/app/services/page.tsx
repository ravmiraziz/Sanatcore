import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги | San\'atcore',
  description: 'Полный спектр услуг креативного агентства San\'atcore: видеопродакшн, реклама, брендинг и многое другое.',
};

export default function Services() {
  return (
    <main>
      <Header />
      <ServicesContent />
      <Footer />
    </main>
  );
}
