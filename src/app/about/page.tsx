import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'О компании | San\'atcore',
  description: 'История, манифест и философия креативного агентства San\'atcore.',
};

export default function About() {
  return (
    <main>
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-12">О компании</h1>
          
          <div className="max-w-4xl space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p><strong>San&apos;atcore</strong> - это креативное агентство с упором на видеопродакшн.</p>
                <p>Мы - продюсерская команда, которая создает мультимедиа контент любого формата и под любой запрос.</p>
                <p>Мы раскроем ваш бренд с любой стороны.</p>
                <p>Мы любим превращать сложные задачи в простой, понятный и запоминающийся для зрителя визуальный продукт.</p>
                <p className="font-bold text-black border-l-4 border-black pl-4 py-2 bg-gray-50">Мы на рынке более 12 лет.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">В 2025 мы реализовали:</h2>
              
              <div className="space-y-10">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">Социальные Кампании</h3>
                  <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                    <li>Проект об инклюзии с трансляцией на экранах всего Ташкента</li>
                    <li>Благотворительные ивенты и ярмарки</li>
                    <li>Создание серии короткометражных видеофильмов для поднятия имиджа лиц с инвалидностью</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">Международные Инициативы</h3>
                  <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                    <li>Проект &quot;Hi! My name is&quot;</li>
                    <li>Грант от всемирного банка о трансграничных водах Центральной Азии</li>
                    <li>Разработка сценария для полнометражного фильма в сотрудничестве с Азербайджаном</li>
                    <li>Участие в ряде международных фестивалях</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">Культурные Проекты</h3>
                  <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                    <li>Концерты (первый лайв концерт в Узбекистане где была проведена коммутация современных камер (не телевизионных) к ПТС на концерте Севары Назархан)</li>
                    <li>Арт-мероприятия</li>
                    <li>Культурные события</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-black border-b border-gray-200 pb-2">Бренд-проекты</h3>
                  <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                    <li>Имиджевые ролики и коммерческая реклама</li>
                    <li>Digital-кампании</li>
                    <li>Музыкальные клипы</li>
                    <li>Документальные и имиджевые фильмы о компаниях и заводах</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
