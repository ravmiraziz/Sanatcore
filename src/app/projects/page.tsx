import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Проекты | San\'atcore',
  description: 'Портфолио и галерея работ креативного агентства San\'atcore.',
};

export default function Projects() {
  return (
    <main>
      <Header />
      <ProjectsContent />
      <Footer />
    </main>
  );
}
