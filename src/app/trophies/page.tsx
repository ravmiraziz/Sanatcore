import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrophiesContent from './TrophiesContent';

export const metadata: Metadata = {
  title: 'Трофеи | San\'atcore',
  description: 'Награды и признание креативного агентства San\'atcore на международных кинофестивалях и конкурсах.',
};

export default function Trophies() {
  return (
    <main>
      <Header />
      <TrophiesContent />
      <Footer />
    </main>
  );
}
