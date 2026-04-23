import re

with open('/Users/ravmiraziz/Desktop/Ishlarim/A Work/Sanatcore/src/lib/data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# ai-content
text = text.replace("""  {
    title: "ИИ-контент",
    slug: "ai-content",
    description: "Контент с использованием технологий искусственного интеллекта.",
    uses: [
      "масштабирования контента",
      "создания цифровых аватаров и синтетического видео",
      "автоматизации видеопроизводства",
      "тестирования гипотез и быстрого запуска рекламных форматов",
    ],
  },""", """  {
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
  },""")


# expert-production
text = text.replace("""  {
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
  },""", """  {
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
  },""")


# branding
text = text.replace("""  {
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
  },""", """  {
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
  },""")

# social-campaigns
text = text.replace("""  {
    title: "Социальные Кампании",
    slug: "social-campaigns",
    description: "San'atcore работает с брендами на уровне смыслов. Мы создаем (либо меняем по запросу):",
    features: [
      "позиционирование",
      "визуальную айдентику",
      "коммуникационную стратегию",
      "медийный язык бренда",
    ],
  },""", """  {
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
  },""")

# films-series
text = text.replace("""  {
    title: "Фильмы и Сериалы",
    slug: "films-series",
    description: "Форматы сериалов: вертикальные, телевизионные, платформенные. Форматы фильмов: короткометражные, социальные, арт-проекты, полнометражные.",
    uses: [
      "брендов",
      "медиа",
      "развлекательных платформ",
    ],
  },""", """  {
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
  },""")


with open('/Users/ravmiraziz/Desktop/Ishlarim/A Work/Sanatcore/src/lib/data.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("success")
