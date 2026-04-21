export interface PlaylistItem {
  title: string;
  videoId: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  description: string;
  features?: string[];
  uses?: string[];
  videoUrl?: string;
  playlist?: PlaylistItem[];
}

const ruData: ServiceData[] = [
  {
    title: "Рекламные Ролики",
    slug: "advertising",
    description: "Коммерческие видеоролики для брендов.",
    uses: [
      "рекламы в интернет и тв",
      "digital-кампаний",
      "социальных сетей",
      "презентаций",
    ],
    videoUrl: "https://www.youtube.com/watch?v=A5gSxqhP4kU&list=PLTN27qEolLidsYWrVv4bNIlcqf9SkkznJ",
    playlist: [
      { title: "SAVAGE Sports Club", videoId: "A5gSxqhP4kU" },
      { title: "DEYA", videoId: "bG0ycL2zv-M" },
      { title: "GOODVEEN Цветочный магазин", videoId: "kwxJybsS7ng" },
      { title: "Westminister Tashkent (Storyline)", videoId: "SPpsKYJhhEo" },
      { title: "QAND (short)", videoId: "wxklzemb9rU" },
      { title: "OzoneFC (animatic)", videoId: "AkzFaaZhCDA" },
      { title: "XANATLAS Рекламный ролик", videoId: "no6VK7uJxEk" },
      { title: "IT HOUSE", videoId: "nWPlUB6jK0Q" },
      { title: "Eurasia Insurance", videoId: "t6G7oEWuPN8" },
      { title: "FWT Kazakhstan 2024", videoId: "wLe1_3Gqe90" },
      { title: "FWT Kazakhstan 2024 (Vertical)", videoId: "ymVeaMGqp-w" },
      { title: "Westminister Tashkent (Corporate)", videoId: "y_M9r2unfzc" },
      { title: "Golden House", videoId: "GzbaD5jZbzM" },
      { title: "GoldenHouse Обзор выставки", videoId: "7Yh2z3LJKZE" },
      { title: "QURAMAX", videoId: "qipnTz_Y7D8" },
      { title: "Black Quail", videoId: "KXlXyj5eL7g" },
      { title: "IT Park - Dreams come true", videoId: "ojswCp9cPj0" },
      { title: "QURAMAX 2", videoId: "OIQsW4iAPJE" },
      { title: "ArenMarkaz Рекламный ролик", videoId: "BtvTkAM3xvA" },
      { title: "Erkatoy StopMotion", videoId: "ys2VonTatc0" },
      { title: "Steam Bar", videoId: "-Z0QMOBx5o8" },
      { title: "Samsung Рекламный ролик", videoId: "A06XRMdcKMI" },
      { title: "Mukarnas", videoId: "Ii2WO0o5lZ0" },
      { title: "DEYA 2", videoId: "jSPR8LAIAxg" },
      { title: "LubiteLuboe Имиджевый Ролик", videoId: "8FQ9H3l48vc" },
      { title: "Ozone", videoId: "nCKVWbPNNpI" },
      { title: "ArenaMarkaz", videoId: "1as2qU_kNiU" },
      { title: "Производство ювелирных изделий", videoId: "4XTXX67lM9k" },
      { title: "OZone Fitness Centre", videoId: "EnTLkGmcZyo" },
      { title: "Nur Invest", videoId: "ZCzZXsx9WSY" },
      { title: "MyTaxi (Fast and Curious)", videoId: "lLqNoY35l2c" },
      { title: "Sam Ferre", videoId: "GTy3HpPLRTU" },
      { title: "Coca Cola NY food", videoId: "aKPZnHhSeI4" },
      { title: "Coca Cola NY movie", videoId: "wE2e7TBZBuo" },
      { title: "Coca Cola NY music", videoId: "BkvEze7G3_o" },
      { title: "Black Quail 2", videoId: "4SiA3T3apaU" },
      { title: "Fashion week 2024", videoId: "CnwBySTP4rM" },
      { title: "XProject", videoId: "cZqejqqv88w" },
    ],
  },
  {
    title: "Контент для Социальных Сетей",
    slug: "social-content",
    description: "Reels, Shorts, TikTok.",
    uses: [
      "брендов",
      "экспертов",
      "digital-кампаний",
    ],
    videoUrl: "https://www.youtube.com/watch?v=bG0ycL2zv-M&list=PLTN27qEolLifVrqhmdX9D1o775r2CAFo2",
    playlist: [
      { title: "DEYA", videoId: "bG0ycL2zv-M" },
      { title: "SAVAGE Sports Club", videoId: "A5gSxqhP4kU" },
      { title: "GOODVEEN Цветочный магазин", videoId: "kwxJybsS7ng" },
      { title: "SAVAGE Sports Club 2", videoId: "08F81i-Z1hA" },
      { title: "FWT Kazakhstan 2024", videoId: "wLe1_3Gqe90" },
      { title: "XANATLAS Рекламный ролик", videoId: "no6VK7uJxEk" },
      { title: "QAND (short)", videoId: "wxklzemb9rU" },
      { title: "QAND short (REELS)", videoId: "vdvjrBGQFhk" },
      { title: "KZ Смонтированный ролик", videoId: "5DqseQSQY9c" },
      { title: "Mukarnas", videoId: "Ii2WO0o5lZ0" },
      { title: "DEYA 2", videoId: "jSPR8LAIAxg" },
      { title: "Adiaz - Leto (short 1)", videoId: "pAYwSDehPPo" },
      { title: "Adiaz - Leto (short 2)", videoId: "KaBQn6gv-8w" },
      { title: "Adiaz (short)", videoId: "4H-BFWoxeQw" },
      { title: "MyTaxi (ComfortPro)", videoId: "KolBvFu4mOQ" },
      { title: "MyTaxi (Fast and Curious)", videoId: "lLqNoY35l2c" },
      { title: "ZOOOD BUSINESS (announce)", videoId: "4toNdoqnA9c" },
      { title: "ZOOOD Workshop announce", videoId: "yJNjmTaT_fU" },
      { title: "ZOOOD BUSSINESS (Campaign)", videoId: "P6J7SQfFsyM" },
      { title: "ZOOOD (Lockers announce)", videoId: "DB8lb3cmpPQ" },
      { title: "Black Quail", videoId: "4SiA3T3apaU" },
      { title: "Fashion week 2024", videoId: "CnwBySTP4rM" },
      { title: "XProject", videoId: "cZqejqqv88w" },
    ],
  },
  {
    title: "ИИ-контент",
    slug: "ai-content",
    description: "Контент с использованием технологий искусственного интеллекта.",
    uses: [
      "масштабирования контента",
      "создания цифровых аватаров и синтетического видео",
      "автоматизации видеопроизводства",
      "тестирования гипотез и быстрого запуска рекламных форматов",
    ],
  },
  {
    title: "Продюсирование",
    slug: "expert-production",
    description: "Мы помогаем людям и компаниям создавать медийную идентичность.",
    features: [
      "стратегия позиционирования",
      "контентная стратегия",
      "визуальный язык",
      "видеопродакшн",
      "медийное развитие",
    ],
    uses: [
      "Мы превращаем экспертов в медийные бренды.",
    ],
  },
  {
    title: "Брендинг и Ребрендинг",
    slug: "branding",
    description: "Мы помогаем людям и компаниям создавать медийную идентичность.",
    features: [
      "стратегия позиционирования",
      "контентная стратегия",
      "визуальный язык",
      "видеопродакшн",
      "медийное развитие",
    ],
    uses: [
      "Мы превращаем экспертов в медийные бренды.",
    ],
  },
  {
    title: "Организация и Съемка Мероприятий",
    slug: "events",
    description: "Комплексная организация и съемка мероприятий.",
    features: [
      "концерты",
      "форумы",
      "презентации",
      "церемонии",
    ],
  },
  {
    title: "Социальные Кампании",
    slug: "social-campaigns",
    description: "San'atcore работает с брендами на уровне смыслов. Мы создаем (либо меняем по запросу):",
    features: [
      "позиционирование",
      "визуальную айдентику",
      "коммуникационную стратегию",
      "медийный язык бренда",
    ],
  },
  {
    title: "Документальные Проекты",
    slug: "documentary",
    description: "Истории людей, культурные проекты, социальные фильмы.",
    features: [
      "Истории людей",
      "культурные проекты",
      "социальные фильмы",
    ],
    videoUrl: "https://www.youtube.com/watch?v=ZL4HH9wWMvs&list=PLTN27qEolLif1lN0n64zi8L3LM2XpXcZd",
    playlist: [
      { title: "Skate Uzbekistan", videoId: "ZL4HH9wWMvs" },
      { title: "Lukoil 30 Director Jasur Shametov", videoId: "TH0XPUdPj7w" },
      { title: "KOICA (Uzbekistan)", videoId: "btuZ0DeuG-g" },
      { title: "MAGNUM KZ (intro)", videoId: "HUn_uWxRTZY" },
      { title: "MAGNUM KZ (HR)", videoId: "xZDYwrXaMRY" },
      { title: "Завод ТЕХМАШ", videoId: "RWIEozMzMwI" },
      { title: "BON", videoId: "_HmEQFCHjuU" },
      { title: "Betomax testings commercial", videoId: "wjH-iey4ukQ" },
      { title: "Eriel Short Documentory", videoId: "2k3WrmUblPU" },
      { title: "Intro Обзорный ролик", videoId: "21ZwnGK0K6M" },
      { title: "MAKRO HR Корпоративный ролик", videoId: "eT9AZmvjCjA" },
      { title: "GoldenHouse Обзор выставки", videoId: "7Yh2z3LJKZE" },
      { title: "Sam Ferre", videoId: "GTy3HpPLRTU" },
      { title: "ERIEL", videoId: "LGnEGuexiY0" },
    ],
  },
  {
    title: "Музыкальные Клипы",
    slug: "music-videos",
    description: "для артистов и музыкальных проектов.",
    uses: [
      "продвижения треков",
      "формирования образа артиста",
      "публикации на YouTube и стриминговых платформах",
      "социальных сетей и вирусного распространения",
    ],
    videoUrl: "https://www.youtube.com/watch?v=KSPdXxtKKzo&list=PLTN27qEolLidP27_fe3fJgt3p5vIfuTSy",
    playlist: [
      { title: "YP - Prayer (music video)", videoId: "KSPdXxtKKzo" },
      { title: "QAND (short)", videoId: "wxklzemb9rU" },
      { title: "SAVAGE Sports Club", videoId: "A5gSxqhP4kU" },
      { title: "FWT Kazakhstan 2024 (Vertical)", videoId: "ymVeaMGqp-w" },
      { title: "FWT Kazakhstan 2024", videoId: "wLe1_3Gqe90" },
      { title: "Skate Uzbekistan", videoId: "ZL4HH9wWMvs" },
      { title: "Intro Обзорный ролик", videoId: "21ZwnGK0K6M" },
      { title: "Клип Сахар Ayol (пост продакшн)", videoId: "ffx5yRU7ZKE" },
      { title: "XANATLAS Рекламный ролик", videoId: "no6VK7uJxEk" },
      { title: "LubiteLuboe Имиджевый Ролик", videoId: "8FQ9H3l48vc" },
      { title: "1 Сентябрь - День Независимости Узбекистана", videoId: "lXf2FMxtBPo" },
      { title: "Samsung Рекламный ролик", videoId: "A06XRMdcKMI" },
      { title: "Steam Bar", videoId: "-Z0QMOBx5o8" },
      { title: "Stanislove - Летай со мной", videoId: "LPRLh2hGTCE" },
      { title: "Adiaz - Leto (short 1)", videoId: "pAYwSDehPPo" },
      { title: "Adiaz - Leto (short 2)", videoId: "KaBQn6gv-8w" },
      { title: "Stylo KZ", videoId: "DTawB4unx6A" },
      { title: "Ozone 3rdfloor", videoId: "yepu1257M3Y" },
      { title: "FashionTV Miss Kazakhstan", videoId: "gVw7brg0K4I" },
      { title: "Mukarnas", videoId: "Ii2WO0o5lZ0" },
      { title: "Yuri Park - Prayer", videoId: "Ag4dbWRvj7U" },
    ],
  },
  {
    title: "Имиджевые Фильмы",
    slug: "image-films",
    description: "Фильмы о бренде, компании, личности или проекте.",
    uses: [
      "позиционирования бренда",
      "презентаций",
      "PR",
      "мероприятий",
    ],
    videoUrl: "https://www.youtube.com/watch?v=btuZ0DeuG-g&list=PLTN27qEolLicxUT7uFh4hp7gkCinBvM_9",
    playlist: [
      { title: "KOICA (Uzbekistan)", videoId: "btuZ0DeuG-g" },
      { title: "MAKRO HR Корпоративный ролик", videoId: "eT9AZmvjCjA" },
      { title: "BON", videoId: "_HmEQFCHjuU" },
      { title: "Westminister Tashkent (Corporate)", videoId: "y_M9r2unfzc" },
      { title: "ZOOOD BUSINESS (E Imzo)", videoId: "fTxKolUruh8" },
      { title: "MAGNUM KZ (HR)", videoId: "xZDYwrXaMRY" },
      { title: "MAGNUM KZ (intro)", videoId: "HUn_uWxRTZY" },
      { title: "IT HOUSE", videoId: "nWPlUB6jK0Q" },
      { title: "Eurasia Insurance", videoId: "t6G7oEWuPN8" },
      { title: "TechnoTherm", videoId: "7rKyZznt1kc" },
      { title: "Golden House", videoId: "GzbaD5jZbzM" },
      { title: "GoldenHouse Обзор выставки", videoId: "7Yh2z3LJKZE" },
      { title: "Завод ТЕХМАШ", videoId: "RWIEozMzMwI" },
      { title: "Nur Invest", videoId: "ZCzZXsx9WSY" },
      { title: "Открытие GroundZero", videoId: "3WiM9oFSAPw" },
      { title: "AgroBank Rebranding", videoId: "wQloa4tging" },
      { title: "Eriel Short Documentory", videoId: "2k3WrmUblPU" },
      { title: "UZBEKINVEST КАСКО 2.0", videoId: "5kAzZ9oae_I" },
      { title: "ERIEL", videoId: "LGnEGuexiY0" },
      { title: "ZOOOD BUSINESS (announce)", videoId: "4toNdoqnA9c" },
      { title: "ZOOOD Workshop", videoId: "yJNjmTaT_fU" },
      { title: "ZOOOD BUSSINESS (Campaign)", videoId: "P6J7SQfFsyM" },
      { title: "ZOOOD (Lockers)", videoId: "DB8lb3cmpPQ" },
      { title: "MyTaxi (ComfortPro)", videoId: "KolBvFu4mOQ" },
      { title: "Ipak Yoli Bank x BS2", videoId: "2hWn9y2zBz8" },
      { title: "Lukoil 30 Director Jasur Shametov", videoId: "TH0XPUdPj7w" },
      { title: "DEYA", videoId: "bRK1VD1EPvw" },
    ],
  },
  {
    title: "Международные Проекты и Гранты",
    slug: "international-projects",
    description: "Видеопроекты для участия в международных программах, фондах и грантовых инициативах.",
    uses: [
      "подачи на гранты и международное финансирование",
      "презентации социальных и культурных инициатив",
      "работы с фондами и НКО",
      "международных кампаний и партнёрств",
    ],
    videoUrl: "https://www.youtube.com/watch?v=1bTEEqOtU08&list=PLTN27qEolLif9bJB846Tw5JYdV2ZdZsB3",
    playlist: [
      { title: "CAWEP", videoId: "1bTEEqOtU08" },
      { title: "Hi! My name is", videoId: "g0eO74UmRBs" },
      { title: "Skate Uzbekistan", videoId: "ZL4HH9wWMvs" },
    ],
  },
  {
    title: "Фильмы и Сериалы",
    slug: "films-series",
    description: "Форматы сериалов: вертикальные, телевизионные, платформенные. Форматы фильмов: короткометражные, социальные, арт-проекты, полнометражные.",
    uses: [
      "брендов",
      "медиа",
      "развлекательных платформ",
    ],
  },
];

const uzData: ServiceData[] = ruData.map(item => ({ ...item }));

uzData[0].title = "Reklama roliklari";
uzData[0].description = "Brendlar uchun tijorat videoroliklari.";
uzData[0].uses = ["Internet va TV da reklama", "Digital-kampaniyalar", "Ijtimoiy tarmoqlar", "Taqdimotlar"];

uzData[1].title = "Ijtimoiy tarmoqlar uchun kontent";
uzData[1].description = "Reels, Shorts, TikTok.";
uzData[1].uses = ["Brendlar", "Ekspertlar", "Digital-kampaniyalar"];

uzData[2].title = "Sun'iy intellekt kontenti";
uzData[2].description = "Sun'iy intellekt texnologiyalaridan foydalangan holda yaratilgan kontent.";
uzData[2].uses = ["Kontentni masshtablash", "Raqamli avatarlar va sintetik videolar yaratish", "Video ishlab chiqarishni avtomatlashtirish", "Gipotezalarni sinovdan o'tkazish"];

uzData[3].title = "Prodyuserlik";
uzData[3].description = "Biz odamlar va kompaniyalarga media identifikatsiyasini yaratishda yordam beramiz.";
uzData[3].features = ["Joylashuv strategiyasi", "Kontent strategiyasi", "Vizual til", "Video ishlab chiqarish", "Media rivojlanishi"];
uzData[3].uses = ["Biz ekspertlarni media brendlariga aylantiramiz."];

uzData[4].title = "Brending va Rebrending";
uzData[4].description = "Biz odamlar va kompaniyalarga media identifikatsiyasini yaratishda yordam beramiz.";
uzData[4].features = uzData[3].features;
uzData[4].uses = uzData[3].uses;

uzData[5].title = "Tadbirlarni tashkil etish va suratga olish";
uzData[5].description = "Tadbirlarni kompleks tashkil etish va suratga olish.";
uzData[5].features = ["Konsertlar", "Forumlar", "Taqdimotlar", "Marosimlar"];

uzData[6].title = "Ijtimoiy Kampaniyalar";
uzData[6].description = "San'atcore brendlar bilan ma'nolar darajasida ishlaydi. Biz yaratamiz:";
uzData[6].features = ["Joylashish", "Vizual identifikatsiya", "Kommunikatsiya strategiyasi", "Brendning media tili"];

uzData[7].title = "Hujjatli Loyihalar";
uzData[7].description = "Hikoyalar, madaniy loyihalar, ijtimoiy filmlar.";
uzData[7].features = ["Odamlarning hikoyalari", "Madaniy loyihalar", "Ijtimoiy filmlar"];

uzData[8].title = "Musiqiy Kliplar";
uzData[8].description = "San'atkorlar va musiqiy loyihalar uchun kliplar ishlab chiqarish.";
uzData[8].uses = ["Treklarni targ'ib qilish", "San'atkor qiyofasini shakllantirish", "YouTube va striming platformalarida", "Ijtimoiy tarmoqlar va virusli tarqatish"];

uzData[9].title = "Imij filmlari";
uzData[9].description = "Brend, kompaniya, shaxs yoki loyiha haqida filmlar.";
uzData[9].uses = ["Brendni joylashtirish", "Taqdimotlar", "PR", "Tadbirlar"];

uzData[10].title = "Xalqaro Loyihalar va Grantlar";
uzData[10].description = "Xalqaro dasturlar, fondlar va grant tashabbuslarida ishtirok etish uchun videolar.";
uzData[10].uses = ["Grantlar va xalqaro moliyalashtirishga ariza topshirish", "Ijtimoiy va madaniy tashabbuslarni taqdim etish", "Fondlar va NNTlar bilan ishlash", "Xalqaro kampaniyalar va hamkorliklar"];

uzData[11].title = "Filmlar va Seriallar";
uzData[11].description = "Serial formatlari: vertikal, televideniye, platforma. Film formatlari: qisqa metrajli, ijtimoiy, art loyihalar, to'liq metrajli.";
uzData[11].uses = ["Brendlar", "Media", "Ko'ngilochar platformalar"];

const enData: ServiceData[] = ruData.map(item => ({ ...item }));

enData[0].title = "Commercial Videos";
enData[0].description = "Commercial video clips for brands.";
enData[0].uses = ["Internet and TV advertising", "Digital campaigns", "Social networks", "Presentations"];

enData[1].title = "Social Media Content";
enData[1].description = "Reels, Shorts, TikTok.";
enData[1].uses = ["Brands", "Experts", "Digital campaigns"];

enData[2].title = "AI Content";
enData[2].description = "Content created using artificial intelligence technologies.";
enData[2].uses = ["Content scaling", "Creating digital avatars and synthetic video", "Video production automation", "Hypothesis testing and rapid launch of ad formats"];

enData[3].title = "Production";
enData[3].description = "We help people and companies create a media identity.";
enData[3].features = ["Positioning strategy", "Content strategy", "Visual language", "Video production", "Media development"];
enData[3].uses = ["We turn experts into media brands."];

enData[4].title = "Branding & Rebranding";
enData[4].description = "We help people and companies create a media identity.";
enData[4].features = enData[3].features;
enData[4].uses = enData[3].uses;

enData[5].title = "Event Organization & Filming";
enData[5].description = "Comprehensive organization and filming of events.";
enData[5].features = ["Concerts", "Forums", "Presentations", "Ceremonies"];

enData[6].title = "Social Campaigns";
enData[6].description = "San'atcore works with brands at the level of meaning. We create (or change upon request):";
enData[6].features = ["Positioning", "Visual identity", "Communication strategy", "Media language of the brand"];

enData[7].title = "Documentary Projects";
enData[7].description = "Human stories, cultural projects, social films.";
enData[7].features = ["Stories of people", "Cultural projects", "Social films"];

enData[8].title = "Music Videos";
enData[8].description = "Music video production for artists and musical projects.";
enData[8].uses = ["Track promotion", "Formation of the artist's image", "Publication on YouTube and streaming platforms", "Social media and viral distribution"];

enData[9].title = "Image Films";
enData[9].description = "Films about a brand, company, personality, or project.";
enData[9].uses = ["Brand positioning", "Presentations", "PR", "Events"];

enData[10].title = "International Projects & Grants";
enData[10].description = "Video projects for participation in international programs, funds, and grant initiatives.";
enData[10].uses = ["Applying for grants and international funding", "Presentation of social and cultural initiatives", "Working with funds and NGOs", "International campaigns and partnerships"];

enData[11].title = "Films & Series";
enData[11].description = "Series formats: vertical, television, platform. Film formats: short films, social films, art projects, feature films.";
enData[11].uses = ["Brands", "Media", "Entertainment platforms"];

export const servicesData = {
  ru: ruData,
  uz: uzData,
  en: enData,
};

export interface NewsArticle {
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
