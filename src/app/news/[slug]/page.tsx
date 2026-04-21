import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsDetailContent from './NewsDetailContent';
import { getNewsBySlug } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug, 'ru');
  
  if (article) {
    return {
      title: `${article.title} | San'atcore`,
      description: article.title,
    };
  }

  return {
    title: 'Статья | San\'atcore',
    description: 'Статья на портале San\'atcore.',
  };
}

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <Header />
      <NewsDetailContent slug={slug} />
      <Footer />
    </main>
  );
}
