export interface ServiceData {
  title: string;
  slug: string;
  description: string;
  features?: string[];
  uses?: string[];
  videoUrl?: string;
}

const ruData: ServiceData[] = [
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

const uzData: ServiceData[] = [
  ...ruData.map(item => ({...item}))
];
uzData[0].title = 'Reklama roliklari'; uzData[0].description = 'Brendlar uchun tijorat videoroliklarlari.'; uzData[0].uses = ['Iternet va TV da reklama', 'Digital-kampaniyalar', 'Ijtimoiy tarmoqlar', 'Taqdimotlar'];
uzData[1].title = 'Ijtimoiy tarmoqlar uchun kontent'; uzData[1].description = 'Reels, Shorts, TikTok.'; uzData[1].uses = ['Brendlar', 'Ekspertlar', 'Digital-kampaniyalar'];
uzData[2].title = 'Sun\'iy intellekt kontenti'; uzData[2].description = 'Sun\'iy intellekt texnologiyalaridan foydalangan holda yaratilgan kontent.'; uzData[2].uses = ['Kontentni masshtablash', 'Raqamli avatarlar va sintetik videolar yaratish', 'Video ishlab chiqarishni avtomatlashtirish', 'Gipotezalarni sinovdan o\'tkazish va reklama formatlarini tezkor ishga tushirish'];
uzData[3].title = 'Prodyuserlik'; uzData[3].description = 'Biz odamlar va kompaniyalarga media identifikatsiyasini yaratishda yordam beramiz.'; uzData[3].features = ['Joylashuv strategiyasi', 'Kontent strategiyasi', 'Vizual til', 'Video ishlab chiqarish', 'Media rivojlanishi']; uzData[3].uses = ['Biz ekspertlarni media brendlariga aylantiramiz.'];
uzData[4].title = 'Brending va Rebrending'; uzData[4].description = 'Biz odamlar va kompaniyalarga media identifikatsiyasini yaratishda yordam beramiz.'; uzData[4].features = uzData[3].features; uzData[4].uses = uzData[3].uses;
uzData[5].title = 'Tadbirlarni tashkil etish va suratga olish'; uzData[5].description = 'Tadbirlarni kompleks tashkil etish va suratga olish.'; uzData[5].features = ['Konsertlar', 'Forumlar', 'Taqdimotlar', 'Marosimlar'];
uzData[6].title = 'Ijtimoiy Kampaniyalar'; uzData[6].description = 'San\'atcore brendlar bilan ma\'nolar darajasida ishlaydi. Biz yaratamiz (yoki so\'rov bo\'yicha o\'zgartiramiz):'; uzData[6].features = ['Joylashish', 'Vizual identifikatsiya', 'Kommunikatsiya strategiyasi', 'Brendning media tili'];
uzData[7].title = 'Hujjatli Loyihalar'; uzData[7].description = 'Hikoya qiluvchi hujjatli filmlar.'; uzData[7].features = ['Odamlarning hikoyalari', 'Madaniy loyihalar', 'Ijtimoiy filmlar'];
uzData[8].title = 'Musiqiy Kliplar'; uzData[8].description = 'San\'atkorlar va musiqiy loyihalar uchun kliplar ishlab chiqarish.'; uzData[8].uses = ['Treklarni targ\'ib qilish', 'San\'atkor qiyofasini shakllantirish', 'YouTube va striming platformalarida e\'lon qilish', 'Ijtimoiy tarmoqlar va virusli tarqatish'];
uzData[9].title = 'Imij filmlari'; uzData[9].description = 'Brend, kompaniya, shaxs yoki loyiha haqida filmlar.'; uzData[9].uses = ['Brendni joylashtirish', 'Taqdimotlar', 'PR', 'Tadbirlar'];
uzData[10].title = 'Xalqaro Loyihalar va Grantlar'; uzData[10].description = 'Xalqaro dasturlar, fondlar va grant tashabbuslarida ishtirok etish uchun videolar.'; uzData[10].uses = ['Grantlar va xalqaro moliyalashtirishga ariza topshirish', 'Ijtimoiy va madaniy tashabbuslarni taqdim etish', 'Fondlar va NNTlar bilan ishlash', 'Xalqaro kampaniyalar va hamkorliklar'];
uzData[11].title = 'Filmlar va Seriallar'; uzData[11].description = 'Serial formatlari: vertikal, televideniye, platforma. Film formatlari: qisqa metrajli filmlar, ijtimoiy filmlar, art loyihalar, to\'liq metrajli filmlar.'; uzData[11].uses = ['Brendlar', 'Media', 'Ko\'ngilochar platformalar'];

const enData: ServiceData[] = [
  ...ruData.map(item => ({...item}))
];
enData[0].title = 'Commercial Videos'; enData[0].description = 'Commercial video clips for brands.'; enData[0].uses = ['Internet and TV advertising', 'Digital campaigns', 'Social networks', 'Presentations'];
enData[1].title = 'Social Media Content'; enData[1].description = 'Reels, Shorts, TikTok.'; enData[1].uses = ['Brands', 'Experts', 'Digital campaigns'];
enData[2].title = 'AI Content'; enData[2].description = 'Content strictly created using artificial intelligence technologies.'; enData[2].uses = ['Content scaling', 'Creating digital avatars and synthetic video', 'Video production automation', 'Hypothesis testing and rapid launch of ad formats'];
enData[3].title = 'Production'; enData[3].description = 'We help people and companies create a media identity.'; enData[3].features = ['Positioning strategy', 'Content strategy', 'Visual language', 'Video production', 'Media development']; enData[3].uses = ['We turn experts into media brands.'];
enData[4].title = 'Branding & Rebranding'; enData[4].description = 'We help people and companies create a media identity.'; enData[4].features = enData[3].features; enData[4].uses = enData[3].uses;
enData[5].title = 'Event Organization & Filming'; enData[5].description = 'Comprehensive organization and filming of events.'; enData[5].features = ['Concerts', 'Forums', 'Presentations', 'Ceremonies'];
enData[6].title = 'Social Campaigns'; enData[6].description = 'San\'atcore works with brands at the level of meaning. We create (or change upon request):'; enData[6].features = ['Positioning', 'Visual identity', 'Communication strategy', 'Media language of the brand'];
enData[7].title = 'Documentary Projects'; enData[7].description = 'Documentary films that tell stories.'; enData[7].features = ['Stories of people', 'Cultural projects', 'Social films'];
enData[8].title = 'Music Videos'; enData[8].description = 'Music video production for artists and musical projects.'; enData[8].uses = ['Track promotion', 'Formation of the artist\'s image', 'Publication on YouTube and streaming platforms', 'Social media and viral distribution'];
enData[9].title = 'Image Films'; enData[9].description = 'Films about a brand, company, personality, or project.'; enData[9].uses = ['Brand positioning', 'Presentations', 'PR', 'Events'];
enData[10].title = 'International Projects & Grants'; enData[10].description = 'Video projects for participation in international programs, funds, and grant initiatives.'; enData[10].uses = ['Applying for grants and international funding', 'Presentation of social and cultural initiatives', 'Working with funds and NGOs', 'International campaigns and partnerships'];
enData[11].title = 'Films & Series'; enData[11].description = 'Series formats: vertical, television, platform. Film formats: short films, social films, art projects, feature films.'; enData[11].uses = ['Brands', 'Media', 'Entertainment platforms'];

export const servicesData = {
  ru: ruData,
  uz: uzData,
  en: enData
};

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const ruNews: NewsArticle[] = [
  { id: '1', title: 'Статья первая', date: '17 марта 2024', image: 'https://via.placeholder.com/400x250?text=News+1', slug: 'news-1' },
  { id: '2', title: 'Статья вторая', date: '15 марта 2024', image: 'https://via.placeholder.com/400x250?text=News+2', slug: 'news-2' },
  { id: '3', title: 'Статья третья', date: '10 марта 2024', image: 'https://via.placeholder.com/400x250?text=News+3', slug: 'news-3' },
];

const uzNews: NewsArticle[] = [
  { id: '1', title: 'Birinchi maqola', date: '17-mart 2024', image: 'https://via.placeholder.com/400x250?text=News+1', slug: 'news-1' },
  { id: '2', title: 'Ikkinchi maqola', date: '15-mart 2024', image: 'https://via.placeholder.com/400x250?text=News+2', slug: 'news-2' },
  { id: '3', title: 'Uchinchi maqola', date: '10-mart 2024', image: 'https://via.placeholder.com/400x250?text=News+3', slug: 'news-3' },
];

const enNews: NewsArticle[] = [
  { id: '1', title: 'First article', date: 'March 17, 2024', image: 'https://via.placeholder.com/400x250?text=News+1', slug: 'news-1' },
  { id: '2', title: 'Second article', date: 'March 15, 2024', image: 'https://via.placeholder.com/400x250?text=News+2', slug: 'news-2' },
  { id: '3', title: 'Third article', date: 'March 10, 2024', image: 'https://via.placeholder.com/400x250?text=News+3', slug: 'news-3' },
];

export const newsData = {
  ru: ruNews,
  uz: uzNews,
  en: enNews,
};

export function getNewsBySlug(slug: string, language: string = 'ru'): NewsArticle | undefined {
  const langKey = language as 'ru' | 'uz' | 'en';
  return (newsData[langKey] || newsData.ru).find(article => article.slug === slug);
}

export function getServiceBySlug(slug: string, language: string = 'ru'): ServiceData | undefined {
  const langKey = language as 'ru' | 'uz' | 'en';
  return (servicesData[langKey] || servicesData.ru).find(service => service.slug === slug);
}
