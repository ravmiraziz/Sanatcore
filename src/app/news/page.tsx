import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsContent from './NewsContent';

export const metadata: Metadata = {
  title: 'Новости | San\'atcore',
  description: 'Последние новости, статьи и медиа контент от San\'atcore.',
};

export default function News() {
  return (
    <main>
      <Header />
      <NewsContent />
      <Footer />
    </main>
  );
}
