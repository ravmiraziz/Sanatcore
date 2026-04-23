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
    videoUrl: "https://www.youtube.com/watch?v=SFSwJ17rK8g",
    playlist: [
      { title: "Проект ИИ", videoId: "SFSwJ17rK8g" }
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
    videoUrl: "https://www.youtube.com/watch?v=Ag4dbWRvj7U",
    playlist: [
      { title: "Yuri Park - Prayer", videoId: "Ag4dbWRvj7U" },
      { title: "Проект 1", videoId: "1o2V-_5oVfg" },
      { title: "Проект 2", videoId: "NMbmjg3bcOs" },
      { title: "Adiaz - Leto (short 2)", videoId: "KaBQn6gv-8w" },
      { title: "Adiaz - Leto (short 1)", videoId: "pAYwSDehPPo" },
      { title: "Проект ИИ", videoId: "SFSwJ17rK8g" },
      { title: "Проект 3", videoId: "xrav8w0xI0Y" }
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
    videoUrl: "https://www.youtube.com/watch?v=NMbmjg3bcOs",
    playlist: [
      { title: "Проект 1", videoId: "NMbmjg3bcOs" },
      { title: "Проект 2", videoId: "1o2V-_5oVfg" },
      { title: "Black Quail", videoId: "KXlXyj5eL7g" },
      { title: "FWT Kazakhstan 2024 (Vertical)", videoId: "ymVeaMGqp-w" },
      { title: "Coca Cola NY movie", videoId: "wE2e7TBZBuo" },
      { title: "Coca Cola NY food", videoId: "aKPZnHhSeI4" },
      { title: "Coca Cola NY music", videoId: "BkvEze7G3_o" }
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
    videoUrl: "https://www.youtube.com/watch?v=ubGTICEPlZc",
    playlist: [
      { title: "Социальный проект 1", videoId: "ubGTICEPlZc" },
      { title: "CAWEP ru no subtitles", videoId: "CctVqrKKbOc" },
      { title: "CAWEP", videoId: "1bTEEqOtU08" },
      { title: "Социальный проект 2", videoId: "NMbmjg3bcOs" },
      { title: "Социальный проект 3", videoId: "1o2V-_5oVfg" }
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
    videoUrl: "https://www.youtube.com/watch?v=1bTEEqOtU08&list=PLTN27qEolLif9bJB846Tw5JYdV2ZdZsB3",
    playlist: [
      { title: "CAWEP", videoId: "1bTEEqOtU08" },
      { title: "CAWEP ru no subtitles", videoId: "CctVqrKKbOc" },
      { title: "Skate Uzbekistan", videoId: "ZL4HH9wWMvs" },
      { title: "Проект 1", videoId: "NMbmjg3bcOs" },
      { title: "Проект 2", videoId: "1o2V-_5oVfg" }
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

const uzNews: NewsArticle[] = [
  {
    id: "1",
    title: "Jahon banki (CAWEP) uchun yaratilgan San'atcore filmi ETHOS Film Awards 2026 dasturiga kiritildi",
    date: "20 Aprel 2026",
    image: "/images/ethos-awards.jpg",
    slug: "cawep-ethos-film-awards-2026",
    tags: ["video prodakshn Markaziy Osiyo", "hujjatli film O'zbekiston", "xalqaro kinofestivallar 2026", "ETHOS Film Awards", "Jahon banki uchun video prodakshn", "CAWEP loyihasi"],
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6 font-medium">San’atcore xalqaro darajaga chiqishda davom etmoqda: Jahon bankining CAWEP dasturi doirasida yaratilgan filmimiz ETHOS Film Awards 2026 festivalida jonli namoyish etilishi uchun rasman tanlab olindi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Tadbir haqida</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">ETHOS Film Awards tashkilotchilari San’atcore loyihasining 2026-yilgi festivalning live screening (jonli namoyish) dasturida ishtirok etishini tasdiqladilar.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Bu shuni anglatadiki, film festivalning xalqaro dasturi doirasida butun dunyodan kelgan mualliflarning ishlari bilan bir qatorda katta ekranda namoyish etiladi.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">ETHOS Film Awards — bu kino, ijtimoiy mavzular va madaniy tashabbuslar kesishmasida ishlaydigan rejissyorlar, prodyuserlar va kreativ jamoalarni birlashtiruvchi xalqaro maydondir.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Film qachon namoyish etiladi?</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-2"><a href="https://docs.google.com/document/d/1IGqg0ItT6l-d7GVK4nPg_vq1dIhBNFeqwCinJl8OJEs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">FESTIVAL JADVALI</a></p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6"><a href="https://docs.google.com/document/d/1nk8FRwVIJfLvTk5h3JbGDD24HudN-RxEgSP2rTwLpqg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">JONLI NAMOYISH FILMLAR RO'YXATI</a></p>

      <h3 class="text-2xl font-bold mt-10 mb-4">CAWEP loyihasi haqida</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Film Markaziy Osiyo Suv va Energetika Dasturi (CAWEP) — Jahon bankining quyidagi tashkilotlar ko'magida amalga oshirilayotgan tashabbusi asosida yaratilgan:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>Yevropa Ittifoqi</li>
        <li>Shveytsariya</li>
        <li>Buyuk Britaniya</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Loyiha Markaziy Osiyo mamlakatlari o'rtasidagi asosiy resurs va aloqa ramzi sifatida suv mavzusiga bag'ishlangan.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Hikoyaning markazida mintaqani ming yillar davomida birlashtirib kelayotgan va dunyodagi o'zgarishlar fonida o'zgarmas qoladigan daryo turadi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Suratga olish yondashuvi</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Film ustida ishlash muhitga to'liq sho'ng'ish tamoyili asosida qurilgan.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore jamoasi 4 tunni tabiat qo'ynida, hech qanday dekoratsiya va sun'iy yoritishlarsiz o'tkazdi va tabiatning haqiqiy holatlarini yozib oldi:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>suvning harakati</li>
        <li>yorug'lik va atmosfera</li>
        <li>muhitning tabiiy o'zgarishlari</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Ushbu yondashuv nafaqat ma'lumotni, balki hissiyotni ham yetkazadigan vizual material yaratishga imkon berdi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Xalqaro e'tirof</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">ETHOS Film Awards 2026 dasturiga tanlanish San’atcore loyihalari ham vizual til, ham mazmunan xalqaro darajaga mos kelishini tasdiqlaydi.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Film festivalning jonli namoyishlari doirasida taqdim etiladi va shuningdek, tanlov dasturida ham qatnashadi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">San’atcore uchun ahamiyati</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Ushbu loyiha agentlikning quyidagilar bilan ishlash qobiliyatiga ega jamoa sifatidagi mavqeini mustahkamlaydi:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>xalqaro tashkilotlar</li>
        <li>ijtimoiy va ekologik tashabbuslar</li>
        <li>madaniy va hujjatli formatlar</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore Markaziy Osiyoda xalqaro loyihalar uchun video prodakshn yo'nalishini rivojlantirishda, vizual estetika va chuqur mazmunni uyg'unlashtirishda davom etmoqda.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Kompaniya haqida</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore — asosiy e'tiborini video prodakshnga qaratgan kreativ agentlik.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Biz brendlar, insonlar va g'oyalar haqidagi tasavvurni shakllantiradigan vizual hikoyalarni yaratamiz.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Biz kim bilan ishlaymiz:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>brendlar</li>
        <li>xalqaro tashkilotlar</li>
        <li>madaniy va ijtimoiy loyihalar</li>
      </ul>
    `
  },
  {
    id: "2",
    title: "San'atcore filmi (CAWEP) Qozog'istondagi RES 2026 ko'rgazmasida namoyish etiladi va taqdirlanadi",
    date: "21 Aprel 2026",
    image: "/images/res-2026.jpg",
    slug: "cawep-res-2026-kazakhstan",
    tags: ["video prodakshn Markaziy Osiyo", "CAWEP Jahon banki", "barqaror rivojlanish Markaziy Osiyo", "RES 2026 Qozog'iston", "xalqaro video loyihalar", "hujjatli film O'zbekiston"],
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6 font-medium">Jahon bankining CAWEP dasturi doirasida yaratilgan San’atcore loyihasi xalqaro e'tirofga sazovor bo'lishda davom etmoqda: film Qozog'istonda bo'lib o'tadigan RES 2026 tadbiri doirasida namoyish etiladi va maxsus e'tirof etiladi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">RES 2026 tadbiri haqida</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">RES 2026 — bu barqaror rivojlanish, ekologiya va mintaqaviy hamkorlik sohasidagi ekspertlar, tashkilotlar va loyihalarni birlashtiruvchi xalqaro maydondir.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Tadbir Qozog'istonda bo'lib o'tadi va o'zida Markaziy Osiyo mamlakatlari hamda xalqaro hamjamiyat vakillarini jamlaydi.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">RES 2026 dasturi doirasida quyidagi mavzulardagi loyihalar taqdim etiladi:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>barqaror rivojlanish</li>
        <li>suv resurslari</li>
        <li>energetika</li>
        <li>ekologik tashabbuslar</li>
        <li>mintaqaviy hamkorlik</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore jamoasi ham RES 2026 ko'rgazmasida ishtirok etadi. Sizni u yerda kutib qolamiz!</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6"><a href="https://res2026.kz/ru" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://res2026.kz/ru</a></p>

      <h3 class="text-2xl font-bold mt-10 mb-4">CAWEP loyihasi haqida</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore filmi Markaziy Osiyo Suv va Energetika Dasturi (CAWEP) — Jahon bankining quyidagi tashkilotlar ko'magida amalga oshirilayotgan tashabbusi asosida yaratilgan:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>Yevropa Ittifoqi</li>
        <li>Shveytsariya</li>
        <li>Buyuk Britaniya</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Loyiha Markaziy Osiyo mamlakatlari o'rtasidagi asosiy resurs va aloqa ramzi sifatida suv mavzusini ochib beradi.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Hikoyaning markazida mintaqani ming yillar davomida birlashtirib kelayotgan daryo turadi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Namoyish va taqdirlash</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">RES 2026 doirasida film:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>tadbir dasturida taqdim etiladi</li>
        <li>xalqaro CAWEP tashabbusining bir qismi sifatida maxsus e'tirof etiladi</li>
        <li>xalqaro tashkilotlar vakillari, ekspertlar va soha qatnashchilaridan iborat auditoriyaga namoyish etiladi</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Bu loyihaning nafaqat vizual til, balki uning mazmuni jihatidan ham muhimligini tasdiqlaydi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Filmni yaratishga yondashuv</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Suratga olish ishlari muhitga to'liq sho'ng'ish formatida bo'lib o'tdi:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>tabiat qo'ynida 4 tun</li>
        <li>postanovkasiz (tabiiy) ish</li>
        <li>faqat tabiiy yorug'likdan foydalanish</li>
        <li>haqiqiy tabiiy holatlarni qayd etish</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Ushbu yondashuv nafaqat ma'lumotni, balki hissiyotni ham yetkazadigan vizual material yaratishga imkon berdi.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">San’atcore uchun ahamiyati</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">RES 2026 ko'rgazmasida ishtirok etish va taqdirlanish San’atcore'ning quyidagi sohalar kesishmasida ishlaydigan jamoa sifatidagi mavqeini oshiradi:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>video prodakshn</li>
        <li>hujjatli hikoyalar (storytelling)</li>
        <li>xalqaro va ijtimoiy loyihalar</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Agentlik Markaziy Osiyodagi xalqaro tashabbuslar uchun video prodakshn yo'nalishini rivojlantirishda, his-tuyg'u va ma'no darajasida ishlaydigan kontent yaratishda davom etmoqda.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Kompaniya haqida</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore — asosiy e'tiborini video prodakshnga qaratgan kreativ agentlik.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Biz brendlar, insonlar va g'oyalar haqidagi tasavvurni shakllantiradigan vizual hikoyalarni yaratamiz.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Biz kim bilan ishlaymiz:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>xalqaro tashkilotlar</li>
        <li>brendlar</li>
        <li>madaniy va ijtimoiy loyihalar</li>
      </ul>
    `
  }
];

const enNews: NewsArticle[] = [
  {
    id: "1",
    title: "San’atcore film for the World Bank (CAWEP) selected for ETHOS Film Awards 2026",
    date: "April 20, 2026",
    image: "/images/ethos-awards.jpg",
    slug: "cawep-ethos-film-awards-2026",
    tags: ["video production Central Asia", "documentary Uzbekistan", "international film festivals 2026", "ETHOS Film Awards", "World Bank video production", "CAWEP project"],
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6 font-medium">San’atcore continues its expansion onto the international stage: our film, created as part of the World Bank's CAWEP program, has been officially selected for live screening at the ETHOS Film Awards 2026.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">About the Event</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The organizers of the ETHOS Film Awards have confirmed the participation of San’atcore's project in the live screening program of the 2026 festival.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">This means the film will be shown on the big screen as part of the festival's international program, alongside the work of authors from all over the world.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The ETHOS Film Awards is an international platform that brings together directors, producers, and creative teams working at the intersection of cinema, social issues, and cultural initiatives.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">When will the film be shown?</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-2"><a href="https://docs.google.com/document/d/1IGqg0ItT6l-d7GVK4nPg_vq1dIhBNFeqwCinJl8OJEs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">FESTIVAL SCHEDULE</a></p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6"><a href="https://docs.google.com/document/d/1nk8FRwVIJfLvTk5h3JbGDD24HudN-RxEgSP2rTwLpqg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">LIVE SCREENING FILMS INDEX</a></p>

      <h3 class="text-2xl font-bold mt-10 mb-4">About the CAWEP Project</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The film was created as part of the Central Asia Water-Energy Program (CAWEP) — a World Bank initiative implemented with the support of:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>The European Union</li>
        <li>Switzerland</li>
        <li>The United Kingdom</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The project is dedicated to the theme of water as a key resource and a symbol of connection between the countries of Central Asia.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">At the center of the story is the river, which has united the region for millennia, remaining a constant amidst global changes.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Our Filming Approach</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The production of the film was built on the principle of total immersion in the environment.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The San’atcore team spent 4 nights on location, without any sets or artificial lighting, capturing the raw state of nature:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>the movement of the water</li>
        <li>the lighting and atmosphere</li>
        <li>natural environmental changes</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">This approach allowed us to create visual material that conveys not just information, but pure feeling.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">International Recognition</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The selection for the ETHOS Film Awards 2026 program confirms that San’atcore's projects meet international standards, both in visual language and meaningful storytelling.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The film will be presented in the live screenings section of the festival and is also participating in the competitive program.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">What this means for San’atcore</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">This project strengthens the agency's position as a team capable of working with:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>international organizations</li>
        <li>social and environmental initiatives</li>
        <li>cultural and documentary formats</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore continues to develop its video production services for international projects in Central Asia, bridging visual aesthetics with profound meaning.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">About the Company</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore is a creative agency with a focus on video production.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">We create visual stories that shape how brands, people, and ideas are perceived.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">We work with:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>brands</li>
        <li>international organizations</li>
        <li>cultural and social projects</li>
      </ul>
    `
  },
  {
    id: "2",
    title: "San’atcore film (CAWEP) to be presented and awarded at RES 2026 in Kazakhstan",
    date: "April 21, 2026",
    image: "/images/res-2026.jpg",
    slug: "cawep-res-2026-kazakhstan",
    tags: ["video production Central Asia", "World Bank CAWEP", "sustainable development Central Asia", "RES 2026 Kazakhstan", "international video projects", "documentary Uzbekistan"],
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6 font-medium">The San’atcore project, created as part of the World Bank's CAWEP program, continues to receive international recognition: the film will be showcased and honored during the RES 2026 event in Kazakhstan.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">About RES 2026</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">RES 2026 is an international platform bringing together experts, organizations, and projects in the fields of sustainable development, ecology, and regional cooperation.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The event takes place in Kazakhstan and gathers participants from Central Asian countries and the broader international community.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The RES 2026 program will feature projects focused on:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>sustainable development</li>
        <li>water resources</li>
        <li>energy</li>
        <li>environmental initiatives</li>
        <li>regional collaboration</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The San’atcore team will also be attending RES 2026. We look forward to seeing you there!</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6"><a href="https://res2026.kz/ru" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://res2026.kz/ru</a></p>

      <h3 class="text-2xl font-bold mt-10 mb-4">About the CAWEP Project</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The San’atcore film was created within the framework of the Central Asia Water-Energy Program (CAWEP) — a World Bank initiative implemented with the support of:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>The European Union</li>
        <li>Switzerland</li>
        <li>The United Kingdom</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The project highlights the theme of water as a fundamental resource and a symbol of connectivity among the nations of Central Asia.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">At the center of the story is the river, which has seamlessly united the region for thousands of years.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Screening and Recognition</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">As part of RES 2026, the film will be:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>featured in the event's official program</li>
        <li>recognized as a key component of the international CAWEP initiative</li>
        <li>shown to an audience of international organization representatives, experts, and industry professionals</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">This reinforces the project's significance not only in terms of its visual language but also its underlying message.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">Our Approach to Creating the Film</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Filming took place in a state of total immersion:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>4 nights out in nature</li>
        <li>no staged scenes</li>
        <li>using strictly natural lighting</li>
        <li>capturing the genuine states of the environment</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">This approach allowed us to craft a visual story that conveys not just facts, but a deeply felt experience.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">What this means for San’atcore</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Participation and recognition at RES 2026 significantly enhance San’atcore's standing as a team working at the intersection of:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>video production</li>
        <li>documentary storytelling</li>
        <li>international and social projects</li>
      </ul>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">The agency is continuing to expand its video production services for international initiatives in Central Asia, producing content that connects on both an emotional and meaningful level.</p>

      <h3 class="text-2xl font-bold mt-10 mb-4">About the Company</h3>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">San’atcore is a creative agency focused on video production.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">We craft visual stories that influence the way brands, individuals, and ideas are understood.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">We collaborate with:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        <li>international organizations</li>
        <li>brands</li>
        <li>cultural and social projects</li>
      </ul>
    `
  }
];

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
