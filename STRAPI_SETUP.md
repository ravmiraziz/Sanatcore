# Strapi CMS Setup Guide

Это руководство поможет вам установить и настроить Strapi CMS для работы с сайтом San'atcore.

## Варианты установки

### Вариант 1: Локальная установка (для разработки)

#### Требования
- Node.js 18+
- npm или yarn
- PostgreSQL или SQLite

#### Шаги установки

1. Создайте новый проект Strapi в соседней папке:

```bash
cd ..
npx create-strapi-app@latest sanatcore-cms --quickstart
```

2. Когда Strapi запустится, войдите в админ-панель (http://localhost:1337/admin) и создайте аккаунт.

3. Создайте Content Types согласно структуре ниже.

### Вариант 2: Облачная установка (для продакшена)

1. Создайте аккаунт на [Strapi Cloud](https://cloud.strapi.io/)
2. Следуйте инструкциям для создания проекта
3. Используйте предоставленный URL вместо localhost

## Создание Content Types

После входа в админ-панель Strapi, создайте следующие Content Types:

### 1. Project (Проект)

Поля:
- `title` (String) - Название проекта
- `slug` (String) - URL-friendly идентификатор (уникальный)
- `description` (Text) - Краткое описание
- `type` (String) - Тип проекта
- `videoUrl` (String) - URL видео с YouTube
- `task` (RichText) - Описание задачи
- `solution` (RichText) - Описание решения
- `result` (RichText) - Описание результата
- `image` (Media) - Обложка проекта
- `publishedAt` (DateTime) - Дата публикации

### 2. Service (Услуга)

Поля:
- `title` (String) - Название услуги
- `slug` (String) - URL-friendly идентификатор (уникальный)
- `description` (Text) - Краткое описание
- `content` (RichText) - Полное описание
- `icon` (String) - Иконка (опционально)
- `publishedAt` (DateTime) - Дата публикации

### 3. NewsArticle (Статья новости)

Поля:
- `title` (String) - Заголовок
- `slug` (String) - URL-friendly идентификатор (уникальный)
- `content` (RichText) - Полный текст статьи
- `excerpt` (Text) - Краткое описание
- `image` (Media) - Изображение статьи
- `author` (String) - Автор
- `publishedAt` (DateTime) - Дата публикации

### 4. CompanyInfo (Информация о компании)

Поля:
- `name` (String) - Название компании
- `description` (Text) - Описание
- `phone` (String) - Телефон
- `email` (String) - Email
- `address` (Text) - Адрес
- `logo` (Media) - Логотип
- `socialMedia` (JSON) - Социальные сети

Пример JSON для socialMedia:
```json
{
  "instagram": "https://instagram.com/sanatcore",
  "youtube": "https://youtube.com/sanatcore",
  "linkedin": "https://linkedin.com/company/sanatcore",
  "telegram": "https://t.me/sanatcore"
}
```

### 5. ContactSubmission (Отправки контактной формы)

Поля:
- `name` (String) - Имя
- `company` (String) - Компания
- `email` (Email) - Email
- `phone` (String) - Телефон  
- `telegram` (String) - Telegram
- `message` (Text) - Сообщение
- `status` (Enumeration) - Статус [new, read, processed]
- `submittedAt` (DateTime) - Дата отправки

## Настройка API Permissions

1. Перейдите в Settings → Roles & Permissions
2. Найдите роль "Public"
3. Дайте разрешения на чтение для:
   - Projects (find, findOne)
   - Services (find, findOne)
   - NewsArticles (find, findOne)
   - CompanyInfo (find)
4. Дайте разрешение на создание для ContactSubmission (create)

## Генерирование API Token

1. Перейдите в Settings → API Tokens
2. Нажмите "Create new API token"
3. Установите параметры:
   - Name: "Frontend Token"
   - Description: "Token for San'atcore Frontend"
   - Type: "Full access" (для разработки) или выберите конкретные разрешения
4. Скопируйте токен в `.env.local`:

```env
STRAPI_API_TOKEN=your_token_here
```

## Структурирование данных в Strapi

### Примеры добавления контента

#### Добавление проекта

1. Перейдите в Projects → Create new entry
2. Заполните поля:
   - Title: "Рекламная кампания для Компании X"
   - Slug: "advertising-campaign-company-x"
   - Description: "Создание полной рекламной кампании..."
   - Type: "Рекламный ролик"
   - VideoUrl: "https://youtube.com/watch?v=xxxxx"
   - Task: Описание задачи
   - Solution: Описание решения
   - Result: Описание результата
   - Image: Загрузите обложку
3. Нажмите "Save" и затем "Publish"

#### Добавление услуги

1. Перейдите в Services → Create new entry
2. Заполните поля согласно структуре
3. Сохраните и опубликуйте

## Подключение к Next.js фронтенду

После настройки Strapi, фронтенд автоматически будет подключаться к API.

1. Убедитесь, что `.env.local` содержит правильный URL:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
```

2. Запустите фронтенд:
```bash
npm run dev
```

3. Данные должны загружаться с Strapi

## Полезные ссылки

- [Документация Strapi](https://docs.strapi.io/)
- [Strapi Content Types](https://docs.strapi.io/dev-docs/backend/content-types)
- [Strapi API Documentation](https://docs.strapi.io/dev-docs/api/rest)
- [Strapi Cloud](https://cloud.strapi.io/)

## Troubleshooting

### Ошибка CORS

Если получаете ошибку CORS, отредактируйте `./config/middlewares.js` в Strapi:

```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'your-domain.com'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  // ...
];
```

### API не возвращает данные

1. Проверьте, опубликованы ли записи в Strapi
2. Убедитесь, что API permissions правильно установлены
3. Проверьте URL в `.env.local`
4. Посмотрите консоль браузера на предмет ошибок

## Weitere помощь

Для дополнительной помощи обратитесь к [документации Strapi](https://docs.strapi.io/) или создайте issue в репозитории проекта.
