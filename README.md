# San'atcore Website

Современный корпоративный сайт креативного агентства San'atcore, разработанный на Next.js с интеграцией Strapi CMS.

## Особенности

- ✨ **Современный стек**: Next.js 15, React 18, TypeScript
- 🎨 **Tailwind CSS**: Быстрая и удобная разработка стилей
- 💾 **Headless CMS**: Strapi интеграция для управления контентом
- 📱 **Адаптивный дизайн**: Полная поддержка mobile/tablet/desktop
- 🚀 **Оптимизация**: SEO-friendly, быстрые страницы
- 📊 **Аналитика**: Интеграция Google Analytics и Meta Pixel
- 🌐 **Многоязычность**: Готовность к добавлению других языков

## Структура проекта

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Главная страница
│   ├── about/                   # О компании
│   ├── services/                # Услуги
│   │   └── [slug]/              # Детальная страница услуги
│   ├── projects/                # Проекты
│   │   └── [slug]/              # Детальная страница проекта
│   ├── news/                    # Новости
│   │   └── [slug]/              # Детальная статья
│   ├── contacts/                # Контакты
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Глобальные стили
├── components/
│   ├── Header.tsx               # Шапка сайта
│   ├── Footer.tsx               # Подвал сайта
│   └── sections/                # Секции главной страницы
├── lib/
│   └── strapi.ts                # Strapi API клиент
├── types/
│   └── index.ts                 # TypeScript типы
└── public/
    ├── robots.txt               # SEO оптимизация
    └── sitemap.xml              # SEO оптимизация
```

## Технологический стек

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Strapi (headless CMS)
- **API Client**: Axios
- **Icons**: react-icons
- **Linting**: ESLint

## Требования

- Node.js 18+
- npm или yarn

## Установка

### 1. Клонируйте репозиторий и установите зависимости

```bash
npm install
```

### 2. Настройте переменные окружения

Скопируйте `.env.example` в `.env.local`:

```bash
cp .env.example .env.local
```

Отредактируйте `.env.local` и добавьте необходимые параметры:

```env
# Strapi CMS Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
STRAPI_API_TOKEN=your_api_token

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXX
```

### 3. Запустите сервер разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Сборка и развертывание

### Продакшн сборка

```bash
npm run build
npm run start
```

### SEO оптимизация

Каждая страница имеет:
- `title` и `meta description`
- `H1` заголовок
- Правильную иерархию заголовков (H2, H3)
- `alt` текст для изображений

## Интеграция Strapi CMS

### Настройка Strapi

1. Установите Strapi локально или используйте облачный экземпляр
2. Создайте необходимые Content Types:
   - Projects
   - Services
   - NewsArticles
   - CompanyInfo

3. Генерируйте API Token в админ-панели Strapi

4. Обновите `NEXT_PUBLIC_STRAPI_URL` в `.env.local`

### Структура данных Strapi

#### Projects
- `title` - Название проекта
- `slug` - URL-friendly идентификатор
- `description` - Описание
- `type` - Тип проекта
- `videoUrl` - URL видео (YouTube)
- `task` - Описание задачи
- `solution` - Описание решения
- `result` - Описание результата
- `image` - Изображение обложки

#### Services
- `title` - Название услуги
- `slug` - URL-friendly идентификатор
- `description` - Краткое описание
- `content` - Полное описание

#### NewsArticles
- `title` - Заголовок
- `slug` - URL-friendly идентификатор
- `content` - Полный текст статьи
- `image` - Изображение
- `publishedAt` - Дата публикации

### API Endpoints

API клиент находится в `src/lib/strapi.ts`:

```typescript
// Получить все проекты
strapiAPI.getProjects();

// Получить проект по slug
strapiAPI.getProjectBySlug('project-slug');

// Получить услуги
strapiAPI.getServices();

// Получить новости
strapiAPI.getNewsList();

// Отправить форму контакта
strapiAPI.submitContactForm(data);
```

## Форма контакта

Форма контакта находится в компоненте `ContactFormSection` и отправляет данные через API.

Поля формы:
- Имя (обязательно)
- Компания
- Email (обязательно)
- Телефон
- Telegram
- Сообщение (обязательно)

## Аналитика

### Google Analytics

Добавьте ID вашего Google Analytics в `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

### Meta Pixel

Добавьте ID вашего Meta Pixel в `.env.local`:

```env
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXX
```

## Производительность

### Целевые показатели

- Google PageSpeed Desktop: 90+
- Google PageSpeed Mobile: 85+

### Оптимизация

- Использование Next.js Image компонента
- Lazy loading изображений
- Code splitting
- Минификация CSS и JS

## SEO Требования

Все страницы включают:
- Meta title и description
- Open Graph теги
- Robots.txt
- Sitemap.xml
- Правильную структуру заголовков

## Развертывание

### Vercel (рекомендуется для Next.js)

1. Создайте аккаунт на [Vercel](https://vercel.com)
2. Подключите ваш GitHub репозиторий
3. Добавьте переменные окружения
4. Сайт будет автоматически развернут

### Другие платформы

Сайт может быть развернут на любой платформе, которая поддерживает Node.js:
- Heroku
- Railway
- DigitalOcean
- AWS
- Google Cloud
- Azure

## Разработка

### Форматирование кода

```bash
npm run format
```

### Проверка ошибок

```bash
npm run lint
```

## Лицензия

MIT

## Контакты

- Email: info@sanatcore.ru
- Phone: +7 (999) 999-99-99
- Telegram: @sanatcore
- Instagram: @sanatcore
