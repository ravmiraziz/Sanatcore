import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">О компании</h2>

          <div className="space-y-12">
            {/* Who We Are */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Кто мы</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Мы - продюсерская команда, которая создает визуальные проекты на стыке рекламы, культуры и общественных смыслов.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Чем занимаемся</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                San&apos;atcore работает в трёх ключевых направлениях:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>коммерческий видеопродакшн</li>
                <li>социальные и культурные проекты</li>
                <li>медийные и креативные кампании</li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Наша задача - соединить эстетику, смысл и коммуникацию. Мы создаем проекты, которые:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg mt-3">
                <li>смотрят</li>
                <li>обсуждают</li>
                <li>распространяют</li>
                <li>запоминают</li>
              </ul>
            </div>

            {/* Our Approach */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Наш подход</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Прежде чем создать конкретный продукт мы ищем ответ на вопрос - что это, для чего это, для каких целей, как это должно влиять на людей.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Мы участвуем во всем процессе:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>идея</li>
                <li>концепция</li>
                <li>сценарий</li>
                <li>продакшн</li>
                <li>постпродакшн</li>
                <li>стратегия распространения</li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Вы получаете не ролик, а готовый коммуникационный продукт либо систему продуктов и взаимодействия с аудиторией.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                href="/about"
                className="btn-primary inline-flex items-center gap-2"
              >
                Подробнее о компании
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
