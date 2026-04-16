import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'О компании | San\'atcore',
  description: 'История, манифест и философия креативного агентства San\'atcore.',
};

export default function About() {
  return (
    <main>
      <Header />
      <AboutContent />
      <Footer />
    </main>
  );
}
