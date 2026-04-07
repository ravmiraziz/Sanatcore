export interface ServiceData {
  title: string;
  slug: string;
  description: string;
  features?: string[];
  uses?: string[];
  videoUrl?: string;
}

export const servicesData: ServiceData[] = [
  {
    title: 'Рекламные Ролики',
    slug: 'advertising',
    description: 'Коммерческие видеоролики для брендов.',
    uses: [
      'рекламы в интернет и тв',
      'digital-кампаний',
      'социальных сетей',
      'презентаций',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=A5gSxqhP4kU&list=PLTN27qEolLidsYWrVv4bNIlcqf9SkkznJ',
  },
  {
    title: 'Контент для Социальных Сетей',
    slug: 'social-content',
    description: 'Reels, Shorts, TikTok.',
    uses: [
      'брендов',
      'экспертов',
      'digital-кампаний',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=bG0ycL2zv-M&list=PLTN27qEolLifVrqhmdX9D1o775r2CAFo2',
  },
  {
    title: 'ИИ-контент',
    slug: 'ai-content',
    description: 'Контент с использованием технологий искусственного интеллекта.',
    uses: [
      'масштабирования контента',
      'создания цифровых аватаров и синтетического видео',
      'автоматизации видеопроизводства',
      'тестирования гипотез и быстрого запуска рекламных форматов',
    ]
  },
  {
    title: 'Продюсирование',
    slug: 'expert-production',
    description: 'Мы помогаем людям и компаниям создавать медийную идентичность.',
    features: [
      'стратегию позиционирования',
      'контентную стратегию',
      'визуальный язык',
      'видеопродакшн',
      'медийное развитие',
    ],
    uses: [
      'Мы превращаем экспертов в медийные бренды.',
    ]
  },
  {
    title: 'Брендинг и Ребрендинг',
    slug: 'branding',
    description: 'Мы помогаем людям и компаниям создавать медийную идентичность.',
    features: [
      'стратегию позиционирования',
      'контентную стратегию',
      'визуальный язык',
      'видеопродакшн',
      'медийное развитие',
    ],
    uses: [
      'Мы превращаем экспертов в медийные бренды.',
    ]
  },
  {
    title: 'Организация и Съемка Мероприятий',
    slug: 'events',
    description: 'Комплексная организация и съемка мероприятий.',
    features: [
      'концерты',
      'форумы',
      'презентации',
      'церемонии',
    ]
  },
  {
    title: 'Социальные Кампании',
    slug: 'social-campaigns',
    description: 'San’atcore работает с брендами на уровне смыслов. Мы создаем (либо меняем по запросу):',
    features: [
      'позиционирование',
      'визуальную айдентику',
      'коммуникационную стратегию',
      'медийный язык бренда',
    ]
  },
  {
    title: 'Документальные Проекты',
    slug: 'documentary',
    description: 'Документальные фильмы, рассказывающие истории.',
    features: [
      'Истории людей',
      'культурные проекты',
      'социальные фильмы',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=ZL4HH9wWMvs&list=PLTN27qEolLif1lN0n64zi8L3LM2XpXcZd',
  },
  {
    title: 'Музыкальные Клипы',
    slug: 'music-videos',
    description: 'Производство музыкальных клипов для артистов и музыкальных проектов.',
    uses: [
      'продвижения треков',
      'формирования образа артиста',
      'публикации на YouTube и стриминговых платформах',
      'социальных сетей и вирусного распространения',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=KSPdXxtKKzo&list=PLTN27qEolLidP27_fe3fJgt3p5vIfuTSy',
  },
  {
    title: 'Имиджевые Фильмы',
    slug: 'image-films',
    description: 'Фильмы о бренде, компании, личности или проекте.',
    uses: [
      'позиционирования бренда',
      'презентаций',
      'PR',
      'мероприятий',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=btuZ0DeuG-g&list=PLTN27qEolLicxUT7uFh4hp7gkCinBvM_9',
  },
  {
    title: 'Международные Проекты и Гранты',
    slug: 'international-projects',
    description: 'Видеопроекты для участия в международных программах, фондах и грантовых инициативах.',
    uses: [
      'подачи на гранты и международное финансирование',
      'презентации социальных и культурных инициатив',
      'работы с фондами и НКО',
      'международных кампаний и партнёрств',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=1bTEEqOtU08&list=PLTN27qEolLif9bJB846Tw5JYdV2ZdZsB3',
  },
  {
    title: 'Фильмы и Сериалы',
    slug: 'films-series',
    description: 'Форматы сериалов: вертикальные, телевизионные, платформенные. Форматы фильмов: короткометражные фильмы, социальные фильмы, арт-проекты, полнометражные фильмы.',
    uses: [
      'брендов',
      'медиа',
      'развлекательных платформ',
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}
