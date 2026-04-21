import sys

with open('/Users/ravmiraziz/Desktop/Ishlarim/A Work/Sanatcore/src/lib/data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = text.split('export interface NewsArticle {')[0]

new_content = """export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  content: string;
  tags?: string[];
}

const ruNews: NewsArticle[] = [
  {
    id: "1",
    title: "Фильм San’atcore для Всемирного банка (CAWEP) вошёл в программу ETHOS Film Awards 2026",
    date: "20 Апреля 2026",
    image: "/images/ethos-awards.jpg", 
    slug: "cawep-ethos-film-awards-2026",
    tags: ["видеопродакшн Центральная Азия", "документальный фильм Узбекистан", "международные кинофестивали 2026", "ETHOS Film Awards", "видеопродакшн для Всемирного банка", "CAWEP проект"],
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6 font-medium">San’atcore продолжает выход на международный уровень: наш фильм, созданный в рамках программы Всемирного банка CAWEP, официально отобран для живого показа на ETHOS Film Awards 2026.</p>
      
      <h3 class="text-2xl font-bold mt-10 mb-4">О событии</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Организаторы ETHOS Film Awards подтвердили участие проекта San’atcore в live screening program фестиваля 2026 года.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Это означает, что фильм будет показан на большом экране в рамках международной программы фестиваля, наряду с работами авторов со всего мира.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">ETHOS Film Awards — это международная площадка, объединяющая режиссёров, продюсеров и креативные команды, работающие на стыке кино, социальных тем и культурных инициатив.</p>
      
      <h3 class="text-2xl font-bold mt-10 mb-4">Когда будет показан фильм?</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-2"><a href="https://docs.google.com/document/d/1IGqg0ItT6l-d7GVK4nPg_vq1dIhBNFeqwCinJl8OJEs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">FESTIVAL SCHEDULE</a></p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6"><a href="https://docs.google.com/document/d/1nk8FRwVIJfLvTk5h3JbGDD24HudN-RxEgSP2rTwLpqg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">LIVE SCREENING FILMS INDEX</a></p>

      <h3 class="text-2xl font-bold mt-10 mb-4">О проекте CAWEP</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Фильм был создан в рамках Central Asia Water-Energy Program (CAWEP) — инициативы Всемирного банка, реализуемой при поддержке:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>Европейского союза</li>
        <li>Швейцарии</li>
        <li>Великобритании</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Проект посвящён теме воды как ключевого ресурса и символа связи между странами Центральной Азии.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">В центре истории — река, которая на протяжении тысячелетий объединяет регион, оставаясь неизменной на фоне изменений мира.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Подход к съёмке</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Работа над фильмом строилась на принципе полного погружения в среду.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Команда San’atcore провела 4 ночи на натуре, без декораций и искусственного освещения, фиксируя реальные состояния природы:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>движение воды</li>
        <li>свет и атмосферу</li>
        <li>естественные изменения среды</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Такой подход позволил создать визуальный материал, который передаёт не только информацию, но и ощущение.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Международное признание</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Отбор в программу ETHOS Film Awards 2026 подтверждает, что проекты San’atcore соответствуют международному уровню как с точки зрения визуального языка, так и работы со смыслом.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Фильм будет представлен в рамках живых показов фестиваля, а также участвует в конкурсной программе.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Значение для San’atcore</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Этот проект усиливает позицию агентства как команды, способной работать с:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>международными организациями</li>
        <li>социальными и экологическими инициативами</li>
        <li>культурными и документальными форматами</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore продолжает развивать направление видеопродакшна для международных проектов в Центральной Азии, соединяя визуальную эстетику и содержательную глубину.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">О компании</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore — креативное агентство с фокусом на видеопродакшн.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Мы создаём визуальные истории, которые формируют восприятие брендов, людей и идей.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Работаем с:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>брендами</li>
        <li>международными организациями</li>
        <li>культурными и социальными проектами</li>
      </ul>
    `
  },
  {
    id: "2",
    title: "Фильм San’atcore (CAWEP) будет представлен и награжден на RES 2026 в Казахстане",
    date: "21 Апреля 2026",
    image: "/images/res-2026.jpg",
    slug: "cawep-res-2026-kazakhstan",
    tags: ["видеопродакшн Центральная Азия", "CAWEP Всемирный банк", "устойчивое развитие Центральная Азия", "RES 2026 Казахстан", "международные проекты видео", "документальный фильм Узбекистан"],
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6 font-medium">Проект San’atcore, созданный в рамках программы Всемирного банка CAWEP, продолжает получать международное признание: фильм будет показан и отмечен в рамках события RES 2026 в Казахстане.</p>
      
      <h3 class="text-2xl font-bold mt-10 mb-4">О событии RES 2026</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">RES 2026 — это международная площадка, объединяющая экспертов, организации и проекты в сфере устойчивого развития, экологии и регионального сотрудничества.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Мероприятие проходит в Казахстане и собирает участников из стран Центральной Азии и международного сообщества.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">В рамках программы RES 2026 будут представлены проекты, посвященные:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>устойчивому развитию</li>
        <li>водным ресурсам</li>
        <li>энергетике</li>
        <li>экологическим инициативам</li>
        <li>региональному взаимодействию</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Команда San’atcore также будет присутствовать на RES 2026. Ждем встречи с вами!</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6"><a href="https://res2026.kz/ru" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://res2026.kz/ru</a></p>

      <h3 class="text-2xl font-bold mt-10 mb-4">О проекте CAWEP</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Фильм San’atcore был создан в рамках Central Asia Water-Energy Program (CAWEP) — инициативы Всемирного банка, реализуемой при поддержке:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>Европейского союза</li>
        <li>Швейцарии</li>
        <li>Великобритании</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Проект раскрывает тему воды как ключевого ресурса и символа связи между странами Центральной Азии.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">В центре истории — река, которая на протяжении тысячелетий объединяет регион.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Показ и награждение</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">В рамках RES 2026 фильм будет:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>представлен в программе мероприятия</li>
        <li>отмечен как часть международной инициативы CAWEP</li>
        <li>показан аудитории, включающей представителей международных организаций, экспертов и участников отрасли</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Это подтверждает значимость проекта не только с точки зрения визуального языка, но и его содержания.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Подход к созданию фильма</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Съёмки проходили в формате полного погружения:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>4 ночи на натуре</li>
        <li>работа без постановки</li>
        <li>использование только естественного света</li>
        <li>фиксация реальных природных состояний</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Такой подход позволил создать визуальную историю, которая передаёт не только информацию, но и ощущение.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Значение для San’atcore</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Участие и награждение на RES 2026 усиливает позицию San’atcore как команды, работающей на стыке:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>видеопродакшна</li>
        <li>документального сторителлинга</li>
        <li>международных и социальных проектов</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Агентство продолжает развивать направление видеопродакшна для международных инициатив в Центральной Азии, создавая контент, который работает на уровне восприятия и смысла.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">О компании</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore — креативное агентство с фокусом на видеопродакшн.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Мы создаём визуальные истории, которые формируют восприятие брендов, людей и идей.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Работаем с:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>международными организациями</li>
        <li>брендами</li>
        <li>культурными и социальными проектами</li>
      </ul>
    `
  }
];

const uzNews: NewsArticle[] = ruNews.map(item => ({ ...item }));
const enNews: NewsArticle[] = ruNews.map(item => ({ ...item }));

export const newsData = {
  ru: ruNews,
  uz: uzNews,
  en: enNews,
};

export function getNewsBySlug(slug: string, language: string = "ru"): NewsArticle | undefined {
  const langKey = language as "ru" | "uz" | "en";
  return (newsData[langKey] || newsData.ru).find(article => article.slug === slug);
}

export function getServiceBySlug(slug: string, language: string = "ru"): ServiceData | undefined {
  const langKey = language as "ru" | "uz" | "en";
  return (servicesData[langKey] || servicesData.ru).find(service => service.slug === slug);
}
"""

with open('/Users/ravmiraziz/Desktop/Ishlarim/A Work/Sanatcore/src/lib/data.ts', 'w', encoding='utf-8') as f:
    f.write(prefix + new_content)

print("done")
