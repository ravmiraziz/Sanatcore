import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getServiceBySlug } from '@/lib/data';
import ServiceDetailContent from './ServiceDetailContent';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug, 'ru');
  return {
    title: `${service?.title || 'Услуга'} | San\'atcore`,
    description: service?.description || 'Детальное описание услуги San\'atcore.',
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug, 'ru');

  return (
    <main>
      <Header />
      <ServiceDetailContent slug={slug} initialService={service} />
      <Footer />
    </main>
  );
}
