import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsContent from './ContactsContent';

export const metadata: Metadata = {
  title: "Контакты | San'atcore",
  description:
    "Контактная информация San'atcore. Свяжитесь с нами по телефону, email или в социальных сетях.",
};

export default function Contacts() {
  return (
    <main>
      <Header />
      <ContactsContent />
      <Footer />
    </main>
  );
}
