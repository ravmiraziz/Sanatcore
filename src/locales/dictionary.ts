export type Language = 'ru' | 'uz' | 'en';

export const dictionaries = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О компании',
      services: 'Услуги',
      projects: 'Проекты',
      news: 'Новости',
      contacts: 'Контакты',
      leaveRequest: 'Оставить заявку'
    },
    common: {
      all: 'Все',
      loading: 'Загрузка...',
      readMore: 'Читать далее',
      share: 'Поделиться статьей:',
    },
    hero: {
      subtitle: 'Креативное агентство с упором на видеопродакшн.',
      description: 'Мы создаем визуальные истории, которые формируют восприятие брендов, людей и идей.',
      viewProjects: 'Посмотреть проекты',
      mute: 'Выключить звук',
      unmute: 'Включить звук'
    },
    about: {
      title: 'О компании',
      whoTitle: 'Кто мы',
      whoP1: 'San\'atcore - это креативное агентство с упором на видеопродакшн.',
      whoP2: 'Мы - продюсерская команда, которая создает мультимедиа контент любого формата и под любой запрос. Мы раскроем ваш бренд с любой стороны.',
      whoP3: 'Мы любим превращать сложные задачи в простой, понятный и запоминающийся для зрителя визуальный продукт.',
      marketTime: 'Мы на рынке более 12 лет',
      whatTitle: 'Чем занимаемся',
      whatIntro: 'San\'atcore работает в трёх ключевых направлениях:',
      whatList1: 'коммерческий видеопродакшн',
      whatList2: 'социальные и культурные проекты',
      whatList3: 'медийные и креативные кампании',
      whatOutro: 'Наша задача - соединить эстетику, смысл и коммуникацию. Мы создаем проекты, которые:',
      whatTask1: 'смотрят',
      whatTask2: 'обсуждают',
      whatTask3: 'распространяют',
      whatTask4: 'запоминают',
      approachTitle: 'Наш подход',
      approachP1: 'Прежде чем создать конкретный продукт мы ищем ответ на вопрос - что это, для чего это, для каких целей, как это должно влиять на людей.',
      approachP2: 'Мы участвуем во всем процессе:',
      approachStep1: 'идея',
      approachStep2: 'концепция',
      approachStep3: 'сценарий',
      approachStep4: 'продакшн',
      approachStep5: 'постпродакшн',
      approachStep6: 'стратегия распространения',
      approachOutro: 'Вы получаете не ролик, а готовый коммуникационный продукт либо систему продуктов и взаимодействия с аудиторией.',
      moreAbout: 'Подробнее о компании'
    },
    aboutPage: {
      title: 'О компании',
      historyIntroP1: 'San\'atcore - это креативное агентство с упором на видеопродакшн.',
      historyIntroP2: 'Мы - продюсерская команда, которая создает мультимедиа контент любого формата и под любой запрос.',
      historyIntroP3: 'Мы раскроем ваш бренд с любой стороны.',
      historyIntroP4: 'Мы любим превращать сложные задачи в простой, понятный и запоминающийся для зрителя визуальный продукт.',
      historyIntroP5: 'Мы на рынке более 12 лет.',
      achievementsTitle: 'В 2025 мы реализовали:',
      socialCampaignsTitle: 'Социальные Кампании',
      socialCampaignsL1: 'Проект об инклюзии с трансляцией на экранах всего Ташкента',
      socialCampaignsL2: 'Благотворительные ивенты и ярмарки',
      socialCampaignsL3: 'Создание серии короткометражных видеофильмов для поднятия имиджа лиц с инвалидностью',
      internationalTitle: 'Международные Инициативы',
      internationalL1: 'Проект "Hi! My name is"',
      internationalL2: 'Грант от всемирного банка о трансграничных водах Центральной Азии',
      internationalL3: 'Разработка сценария для полнометражного фильма в сотрудничестве с Азербайджаном',
      internationalL4: 'Участие в ряде международных фестивалях',
      culturalTitle: 'Культурные Проекты',
      culturalL1: 'Концерты (первый лайв концерт в Узбекистане где была проведена коммутация современных камер (не телевизионных) к ПТС на концерте Севары Назархан)',
      culturalL2: 'Арт-мероприятия',
      culturalL3: 'Культурные события',
      brandTitle: 'Бренд-проекты',
      brandL1: 'Имиджевые ролики и коммерческая реклама',
      brandL2: 'Digital-кампании',
      brandL3: 'Музыкальные клипы',
      brandL4: 'Документальные и имиджевые фильмы о компаниях и заводах'
    },
    services: {
      title: 'Услуги',
    },
    projects: {
      title: 'Проекты',
      allProjects: 'Все проекты',
    },
    clients: {
      ourClients: 'Наши клиенты',
      partners: 'Партнеры',
    },
    news: {
      title: 'Новости и медиа',
      allNews: 'Все новости',
    },
    contact: {
      title: 'Оставить заявку',
      subtitle: 'Расскажите нам о вашем проекте, и мы свяжемся с вами в ближайшее время.',
      name: 'Имя *',
      namePlaceholder: 'Ваше имя',
      company: 'Компания',
      companyPlaceholder: 'Название компании',
      email: 'Email *',
      emailPlaceholder: 'your@email.com',
      phone: 'Телефон',
      phonePlaceholder: '+998 90 997 48 88',
      telegram: 'Телеграм',
      telegramPlaceholder: '@your_username',
      message: 'Сообщение *',
      messagePlaceholder: 'Расскажите о вашем проекте...',
      success: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.',
      error: 'Произошла ошибка при отправке заявки:',
      submit: 'Отправить заявку',
      submitting: 'Отправляется...'
    },
    footer: {
      description: 'Креативное продакшн-агентство полного цикла. Мы создаем смыслы и воплощаем их в визуальных формах.',
      address: 'Узбекистан, Ташкент, ул. Примерная, 123',
      rights: '© 2024 San\'atcore. Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      fastLinks: 'Быстрые ссылки',
      services: 'Услуги',
      contacts: 'Контакты'
    },
    cawep: {
      title: 'CAWEP x Всемирный банк',
      subtitle: 'Как San\'atcore передал смысл воды в Центральной Азии',
      clientKey: 'Клиент:',
      clientValue: 'Всемирный банк (программа CAWEP)',
      regionKey: 'Регион:',
      regionValue: 'Центральная Азия',
      productionKey: 'Продакшн:',
      productionValue: 'San\'atcore',
      formatKey: 'Формат:',
      formatValue: 'документальный видеоролик',
      
      aboutTitle: 'О проекте',
      aboutP1: 'San\'atcore был выбран для создания визуальной истории в рамках Центральноазиатской водно-энергетической программы (CAWEP) — инициативы Всемирного банка при поддержке Европейского союза, Швейцарии и Великобритании.',
      aboutP2: 'Задача заключалась не просто в создании видео, а в том, чтобы перевести сложную международную повестку в понятный, эмоциональный и визуально точный образ.',
      
      watchVideo: 'Смотреть видео',

      ideaTitle: 'Идея',
      ideaP1: 'Мы подошли к проекту не как к институциональному ролику, а как к наблюдению за водой как живой силой.',
      ideaP2: 'В центре истории — река.',
      ideaP3: 'Река, которая течет через Центральную Азия тысячи лет. Река, которая видела смену эпох, границ и людей.',
      ideaP4: 'Мир меняется. Река остается. И через нее — остаемся связаны и мы.',

      processTitle: 'Процесс съемки',
      processP1: 'Чтобы сохранить подлинность, мы выбрали формат полного погружения. На протяжении четырех ночей команда жила на локациях — спала под открытым небом и работала в естественной среде.',
      processP2: 'Мы следовали за природой:',
      processList: [
        'рассветы у воды',
        'движение течения',
        'ветер, свет и тишина',
        'нетронутые пространства'
      ],
      processP3: 'Без декораций. Без искусственного света. Без постановки. Только реальность.',
      processP4: 'Это позволило создать визуал, который ощущается живым и честным.',

      challengesTitle: 'Сложности',
      challengesP1: 'Работа в таких условиях требовала постоянной адаптации:',
      challengesList: [
        'непредсказуемая погода',
        'ограниченные технические возможности',
        'физическая нагрузка',
        'удаленные локации'
      ],
      challengesP2: 'Мы не пытались контролировать среду — мы встроились в нее. И это стало частью результата.',

      whyMattersTitle: 'Почему это важно',
      whyMattersP1: 'Вода в Центральной Азии — это не просто ресурс. Это основа жизни, экономики и взаимодействия стран региона.',
      whyMattersP2: 'Проект затрагивает:',
      whyMattersList: [
        'изменение климата',
        'трансграничное сотрудничество',
        'водно-энергетический баланс',
        'устойчивое развитие'
      ],
      whyMattersP3: 'Это история о том, что объединяет людей сильнее, чем границы.',

      recognitionTitle: 'Признание',
      recognitionP1: 'Проект получил отклик со стороны Всемирного банка и партнеров:',
      recognitionQuote: '«Молодые видеографы из Узбекистана представили свое видение того, что значит вода для каждого из нас. Их ролик — это вдохновляющая история о реке, которая тысячелетиями течет через Центральную Азию. Это напоминание о том, что мир меняется, а реки остаются — они питают жизнь и соединяют людей.»',
      recognitionP2: 'Проект реализован в рамках программы CAWEP при участии:',
      recognitionList: [
        'Всемирного банка',
        'Европейского союза',
        'Швейцарии',
        'Великобритании'
      ],

      impactTitle: 'Результат и значение',
      impactP1: 'Этот проект показывает, как видеопродакшн для международных инициатив в Центральной Азии может работать не только на уровне информации, но и на уровне восприятия. Контент, который:',
      impactList: [
        'вызывает эмоцию',
        'понятен разным аудиториям',
        'работает в разных культурных контекстах',
        'усиливает смысл проекта'
      ],

      clientsTitle: 'Что это значит для клиентов',
      clientsP1: 'В San\'atcore мы не просто снимаем видео. Мы создаем коммуникационные продукты, которые формируют восприятие.',
      clientsP2: 'Работаем с:',
      clientsList: [
        'международными организациями',
        'социальными и экологическими инициативами',
        'культурными проектами',
        'брендами'
      ],
      clientsP3: 'Если задача — не просто рассказать, а быть понятым и запомненным, мы знаем, как это сделать.',

      collabTitle: 'Готовы к сотрудничеству',
      collabP1: 'Если вы работаете с:',
      collabList: [
        'международными проектами',
        'социальными или экологическими программами',
        'грантами и НКО',
        'брендами с идеей'
      ],
      collabP2: 'давайте обсудим.',
      collabP3: 'San\'atcore — визуальный язык, который работает со смыслом.'
    }
  },
  uz: {
    nav: {
      home: 'Asosiy',
      about: 'Kompaniya haqida',
      services: 'Xizmatlar',
      projects: 'Loyihalar',
      news: 'Yangiliklar',
      contacts: 'Aloqa',
      leaveRequest: 'Ariza qoldirish'
    },
    common: {
      all: 'Barchasi',
      loading: 'Yuklanmoqda...',
      readMore: 'Batafsil o\'qish',
      share: 'Maqolani ulashish:',
    },
    hero: {
      subtitle: 'Asosan video prodyuserlikka yo\'naltirilgan kreativ agentlik.',
      description: 'Biz brendlar, insonlar va g\'oyalarni shakllantiruvchi vizual hikoyalar yaratamiz.',
      viewProjects: 'Loyihalarni ko\'rish',
      mute: 'Ovozni o\'chirish',
      unmute: 'Ovozni yoqish'
    },
    about: {
      title: 'Kompaniya haqida',
      whoTitle: 'Biz kimmiz',
      whoP1: 'San\'atcore - bu asosan video prodyuserlikka ixtisoslashgan kreativ agentlik.',
      whoP2: 'Biz har qanday formatdagi va har qanday so\'rov bo\'yicha multimedia kontentini yaratuvchi prodyuserlik jamoasimiz. Biz sizning brendingizni har tomondan ochib beramiz.',
      whoP3: 'Biz murakkab vazifalarni tomoshabin uchun oddiy, tushunarli va esda qolarli vizual mahsulotga aylantirishni yaxshi ko\'ramiz.',
      marketTime: 'Biz bozorda 12 yildan ortiqmiz',
      whatTitle: 'Nima bilan shug\'ullanamiz',
      whatIntro: 'San\'atcore uchta asosiy yo\'nalishda ishlaydi:',
      whatList1: 'Tijorat video prodyuserligi',
      whatList2: 'Ijtimoiy va madaniy loyihalar',
      whatList3: 'Media va kreativ kampaniyalar',
      whatOutro: 'Bizning vazifamiz — estetika, ma\'no va kommunikatsiyani birlashtirish. Biz shunday loyihalar yaratamizki, ularni:',
      whatTask1: 'tomosha qilishadi',
      whatTask2: 'muhokama qilishadi',
      whatTask3: 'tarqatishadi',
      whatTask4: 'eslab qolishadi',
      approachTitle: 'Bizning yondashuvimiz',
      approachP1: 'Muayyan mahsulotni yaratishdan oldin biz savolga javob izlaymiz: bu nima, nima uchun, qanday maqsadlarda, u odamlarga qanday ta\'sir qilishi kerak.',
      approachP2: 'Biz butun jarayonda ishtirok etamiz:',
      approachStep1: 'g\'oya',
      approachStep2: 'konsepsiya',
      approachStep3: 'ssenariy',
      approachStep4: 'prodyuserlik',
      approachStep5: 'post-prodyuserlik',
      approachStep6: 'tarqatish strategiyasi',
      approachOutro: 'Siz faqat videorolikni emas, balki tayyor kommunikatsion mahsulotni yoki mahsulotlar tizimi va auditoriya bilan o\'zaro aloqani olasiz.',
      moreAbout: 'Kompaniya haqida batafsil'
    },
    aboutPage: {
      title: 'Kompaniya haqida',
      historyIntroP1: 'San\'atcore - bu asosan video prodyuserlikka ixtisoslashgan kreativ agentlik.',
      historyIntroP2: 'Biz har qanday formatdagi va har qanday so\'rov bo\'yicha multimedia kontentini yaratuvchi prodyuserlik jamoasimiz.',
      historyIntroP3: 'Biz sizning brendingizni har tomondan ochib beramiz.',
      historyIntroP4: 'Biz murakkab vazifalarni tomoshabin uchun oddiy, tushunarli va esda qolarli vizual mahsulotga aylantirishni yaxshi ko\'ramiz.',
      historyIntroP5: 'Biz bozorda 12 yildan ortiqmiz.',
      achievementsTitle: '2025 yilda amalga oshirdik:',
      socialCampaignsTitle: 'Ijtimoiy Kampaniyalar',
      socialCampaignsL1: 'Toshkentning barcha ekranlarida translatsiya qilingan inklyuziya loyihasi',
      socialCampaignsL2: 'Xayriya tadbirlari va yarmarkalar',
      socialCampaignsL3: 'Nogironligi bo\'lgan shaxslar imijini ko\'tarish uchun qisqa metrajli videolar seriyasini yaratish',
      internationalTitle: 'Xalqaro Tashabbuslar',
      internationalL1: '"Hi! My name is" loyihasi',
      internationalL2: 'Jahon banki tomonidan Markaziy Osiyo transchegaraviy suvlari bo\'yicha grant',
      internationalL3: 'Ozarbayjon bilan hamkorlikda to\'liq metrajli film uchun ssenariy ishlab chiqish',
      internationalL4: 'Bir qator xalqaro festivallarda ishtirok etish',
      culturalTitle: 'Madaniy Loyihalar',
      culturalL1: 'Konsertlar (O\'zbekistondagi birinchi jonli konsert, unda Sevara Nazarxon konsertida zamonaviy kameralar PTSga ulangan)',
      culturalL2: 'Art-tadbirlar',
      culturalL3: 'Madaniy voqealar',
      brandTitle: 'Brend-loyihalari',
      brandL1: 'Imij videolari va tijoriy reklama',
      brandL2: 'Digital-kampaniyalar',
      brandL3: 'Musiqiy kliplar',
      brandL4: 'Kompaniyalar va zavodlar haqida hujjatli va imij filmlari'
    },
    services: {
      title: 'Xizmatlar',
    },
    projects: {
      title: 'Loyihalar',
      allProjects: 'Barcha loyihalar',
    },
    clients: {
      ourClients: 'Bizning mijozlar',
      partners: 'Hamkorlar',
    },
    news: {
      title: 'Yangiliklar va media',
      allNews: 'Barcha yangiliklar',
    },
    contact: {
      title: 'Ariza qoldirish',
      subtitle: 'Bizga loyihangiz haqida gapirib bering, biz tez orada siz bilan bog\'lanamiz.',
      name: 'Ism *',
      namePlaceholder: 'Ismingiz',
      company: 'Kompaniya',
      companyPlaceholder: 'Kompaniya nomi',
      email: 'Email *',
      emailPlaceholder: 'your@email.com',
      phone: 'Telefon',
      phonePlaceholder: '+998 90 997 48 88',
      telegram: 'Telegram',
      telegramPlaceholder: '@your_username',
      message: 'Xabar *',
      messagePlaceholder: 'Loyihangiz haqida gapirib bering...',
      success: 'Rahmat! Arizangiz yuborildi. Biz tez orada siz bilan bog\'lanamiz.',
      error: 'Arizani yuborishda xatolik yuz berdi:',
      submit: 'Arizani yuborish',
      submitting: 'Yuborilmoqda...'
    },
    footer: {
      description: 'To\'liq siklli kreativ prodyuserlik agentligi. Biz ma\'nolarni yaratamiz va ularni vizual shakllarda ifodalaymiz.',
      address: 'O\'zbekiston, Toshkent, Namunali ko\'chasi, 123',
      rights: '© 2024 San\'atcore. Barcha huquqlar himoyalangan.',
      privacy: 'Maxfiylik siyosati',
      terms: 'Foydalanish shartlari',
      fastLinks: 'Tezkor havolalar',
      services: 'Xizmatlar',
      contacts: 'Aloqa'
    },
    cawep: {
      title: 'CAWEP x Jahon Banki',
      subtitle: 'San\'atcore Markaziy Osiyodagi suvning ma\'nosini qanday aks ettirganligi',
      clientKey: 'Mijoz:',
      clientValue: 'Jahon Banki (CAWEP dasturi)',
      regionKey: 'Mintaqa:',
      regionValue: 'Markaziy Osiyo',
      productionKey: 'Prodyuserlik:',
      productionValue: 'San\'atcore',
      formatKey: 'Format:',
      formatValue: 'hujjatli videorolik',

      aboutTitle: 'Loyiha haqida',
      aboutP1: 'San\'atcore Markaziy Osiyo suv-energetika dasturi (CAWEP) – Yevropa Ittifoqi, Shveytsariya va Buyuk Britaniya ko\'magida Jahon Banki tashabbusi doirasida vizual hikoya yaratish uchun tanlangan.',
      aboutP2: 'Vazifa nafaqat video yaratish, balki murakkab xalqaro mavzuni tushunarli, hissiy va vizual jihatdan aniq tasvirga aylantirish edi.',

      watchVideo: 'Videoni tomosha qilish',

      ideaTitle: 'G\'oya',
      ideaP1: 'Biz loyihaga korporativ video sifatida emas, balki suvni jonli kuch sifatida kuzatish nuqtai nazaridan yondashdik.',
      ideaP2: 'Hikoyaning markazida — daryo.',
      ideaP3: 'Markaziy Osiyo bo\'ylab ming yillar davomida oqib kelayotgan daryo. Davrlar, chegaralar va odamlarning o\'zgarishiga guvoh bo\'lgan daryo.',
      ideaP4: 'Dunyo o\'zgarmoqda. Daryo esa qoladi. Va u orqali biz ham bog\'langanmiz.',

      processTitle: 'Tasvirga olish jarayoni',
      processP1: 'Asllikni saqlab qolish uchun biz to\'liq sho\'ng\'ish formatini tanladik. Jamoa to\'rt kecha davomida lokatsiyalarda yashadi — ochiq osmon ostida uxladi va tabiiy muhitda ishladi.',
      processP2: 'Biz tabiatga ergashdik:',
      processList: [
        'suv bo\'yidagi tonglar',
        'oqimning harakati',
        'shamol, yorug\'lik va sukunat',
        'qoloq hududlar'
      ],
      processP3: 'Dekoratsiyalarsiz. Sun\'iy yorug\'liksiz. Sahnalashtirishsiz. Faqat haqiqat.',
      processP4: 'Bu jonli va samimiy his qilinadigan vizual ta\'sir yaratishga imkon berdi.',

      challengesTitle: 'Qiyinchiliklar',
      challengesP1: 'Bunday sharoitda ishlash doimiy moslashuvni talab qildi:',
      challengesList: [
        'oldindan aytib bo\'lmaydigan ob-havo',
        'cheklangan texnik imkoniyatlar',
        'jismoniy zo\'riqish',
        'uzoq lokatsiyalar'
      ],
      challengesP2: 'Biz muhitni nazorat qilishga urinmadik — biz unga moslashdik. Va bu natijaning bir qismiga aylandi.',

      whyMattersTitle: 'Bu nima uchun muhim',
      whyMattersP1: 'Markaziy Osiyoda suv — shunchaki resurs emas. U hayot, iqtisodiyot va mintaqa mamlakatlari hamkorligining asosi.',
      whyMattersP2: 'Loyiha quyidagilarni o\'z ichiga oladi:',
      whyMattersList: [
        'iqlim o\'zgarishi',
        'transchegaraviy hamkorlik',
        'suv-energetika balansi',
        'barqaror rivojlanish'
      ],
      whyMattersP3: 'Bu odamlarni chegaralardan ko\'ra kuchliroq birlashtiradigan narsa haqidagi hikoya.',

      recognitionTitle: 'E\'tirof',
      recognitionP1: 'Loyiha Jahon Banki va hamkorlar tomonidan e\'tirof etildi:',
      recognitionQuote: '«O\'zbekistonlik yosh videograflar suv har birimiz uchun nima ekanligi borasidagi qarashlarini taqdim etishdi. Ularning roligi — Markaziy Osiyo bo\'ylab ming yillar davomida oqib kelayotgan daryo haqida ilhomlantiruvchi hikoya. Bu dunyo o\'zgarishini, lekin daryolar doim qolib, hayotni oziqlantirishini va odamlarni bog\'lashini eslatib turadi.»',
      recognitionP2: 'Loyiha CAWEP dasturi doirasida quyidagilar ishtirokida amalga oshirildi:',
      recognitionList: [
        'Jahon banki',
        'Yevropa Ittifoqi',
        'Shveytsariya',
        'Buyuk Britaniya'
      ],

      impactTitle: 'Natija va ahamiyati',
      impactP1: 'Ushbu loyiha Markaziy Osiyodagi xalqaro tashabbuslar uchun video prodyuserlik nafaqat ma\'lumot berish darajasida, balki his-tuyg\'u darajasida qanday ishlashi mumkinligini ko\'rsatadi. Kontent:',
      impactList: [
        'hissiyot uyg\'otadi',
        'turli auditoriyalarga tushunarli',
        'turli madaniy kontekstlarda ishlaydi',
        'loyihaning ma\'nosini kuchaytiradi'
      ],

      clientsTitle: 'Bu mijozlar uchun nima anglatadi',
      clientsP1: 'San\'atcore-da biz shunchaki video suratga olmaymiz. Biz tushunchalarni shakllantiruvchi kommunikatsion mahsulotlar yaratamiz.',
      clientsP2: 'Biz faoliyat yuritamiz:',
      clientsList: [
        'xalqaro tashkilotlar bilan',
        'ijtimoiy va ekologik tashabbuslar bilan',
        'madaniy loyihalar bilan',
        'brendlar bilan'
      ],
      clientsP3: 'Agar vazifa shunchaki gapirib berish emas, balki tushunilish va esda qolish bo\'lsa, biz buni qanday qilishni bilamiz.',

      collabTitle: 'Hamkorlikka tayyormiz',
      collabP1: 'Agar siz quyidagilar bilan ishlasangiz:',
      collabList: [
        'xalqaro loyihalar',
        'ijtimoiy yoki ekologik dasturlar',
        'grantlar va NNTlar',
        'g\'oyaga ega brendlar'
      ],
      collabP2: 'Keling, muhokama qilamiz.',
      collabP3: 'San\'atcore — mazmun bilan ishlaydigan vizual til.'
    },
    newsPage: {
      backToNews: '← Yangiliklarga qaytish',
      share: 'Maqolani ulashish:',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      news: 'News',
      contacts: 'Contacts',
      leaveRequest: 'Leave a Request'
    },
    common: {
      all: 'All',
      loading: 'Loading...',
      readMore: 'Read More',
      share: 'Share article:',
    },
    hero: {
      subtitle: 'Creative agency focused on video production.',
      description: 'We create visual stories that shape the perception of brands, people, and ideas.',
      viewProjects: 'View Projects',
      mute: 'Mute',
      unmute: 'Unmute'
    },
    about: {
      title: 'About the Company',
      whoTitle: 'Who We Are',
      whoP1: 'San\'atcore is a creative agency with a specific focus on video production.',
      whoP2: 'We are a production team that creates multimedia content of any format and for any request. We will reveal your brand from every angle.',
      whoP3: 'We love turning complex tasks into a simple, understandable, and memorable visual product for the viewer.',
      marketTime: 'We have been on the market for over 12 years',
      whatTitle: 'What We Do',
      whatIntro: 'San\'atcore works in three key areas:',
      whatList1: 'commercial video production',
      whatList2: 'social and cultural projects',
      whatList3: 'media and creative campaigns',
      whatOutro: 'Our goal is to combine aesthetics, meaning, and communication. We create projects that people:',
      whatTask1: 'watch',
      whatTask2: 'discuss',
      whatTask3: 'distribute',
      whatTask4: 'remember',
      approachTitle: 'Our Approach',
      approachP1: 'Before creating a specific product, we look for an answer to the question: what is this, what is it for, for what purposes, and how should it affect people.',
      approachP2: 'We participate in the entire process:',
      approachStep1: 'idea',
      approachStep2: 'concept',
      approachStep3: 'script',
      approachStep4: 'production',
      approachStep5: 'post-production',
      approachStep6: 'distribution strategy',
      approachOutro: 'You receive not just a video, but a ready-made communication product or a system of products and interaction with the audience.',
      moreAbout: 'More about the company'
    },
    aboutPage: {
      title: 'About the Company',
      historyIntroP1: 'San\'atcore is a creative agency with a specific focus on video production.',
      historyIntroP2: 'We are a production team that creates multimedia content of any format and for any request.',
      historyIntroP3: 'We will reveal your brand from every angle.',
      historyIntroP4: 'We love turning complex tasks into a simple, understandable, and memorable visual product for the viewer.',
      historyIntroP5: 'We have been on the market for over 12 years.',
      achievementsTitle: 'In 2025 we achieved:',
      socialCampaignsTitle: 'Social Campaigns',
      socialCampaignsL1: 'An inclusion project broadcasted on screens throughout Tashkent',
      socialCampaignsL2: 'Charity events and fairs',
      socialCampaignsL3: 'Creation of a series of short videos to raise the image of persons with disabilities',
      internationalTitle: 'International Initiatives',
      internationalL1: '"Hi! My name is" project',
      internationalL2: 'A grant from the World Bank on transboundary waters of Central Asia',
      internationalL3: 'Development of a script for a feature film in collaboration with Azerbaijan',
      internationalL4: 'Participation in a number of international festivals',
      culturalTitle: 'Cultural Projects',
      culturalL1: 'Concerts (the first live concert in Uzbekistan where modern cameras were connected to an OB van at Sevara Nazarkhan\'s concert)',
      culturalL2: 'Art events',
      culturalL3: 'Cultural events',
      brandTitle: 'Brand Projects',
      brandL1: 'Image videos and commercial advertising',
      brandL2: 'Digital campaigns',
      brandL3: 'Music videos',
      brandL4: 'Documentary and image films about companies and factories'
    },
    services: {
      title: 'Services',
    },
    projects: {
      title: 'Projects',
      allProjects: 'All Projects',
    },
    clients: {
      ourClients: 'Our Clients',
      partners: 'Partners',
    },
    news: {
      title: 'News & Media',
      allNews: 'All News',
    },
    contact: {
      title: 'Leave a Request',
      subtitle: 'Tell us about your project, and we will contact you shortly.',
      name: 'Name *',
      namePlaceholder: 'Your name',
      company: 'Company',
      companyPlaceholder: 'Company name',
      email: 'Email *',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '+998 90 997 48 88',
      telegram: 'Telegram',
      telegramPlaceholder: '@your_username',
      message: 'Message *',
      messagePlaceholder: 'Tell us about your project...',
      success: 'Thank you! Your request has been sent. We will contact you shortly.',
      error: 'An error occurred while sending the request:',
      submit: 'Submit Request',
      submitting: 'Submitting...'
    },
    footer: {
      description: 'A full-cycle creative production agency. We create meaning and manifest it in visual forms.',
      address: '123 Example Street, Tashkent, Uzbekistan',
      rights: '© 2024 San\'atcore. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      fastLinks: 'Quick Links',
      services: 'Services',
      contacts: 'Contacts'
    },
    cawep: {
      title: 'CAWEP x World Bank Project',
      subtitle: 'How San\'atcore Captured the Meaning of Water in Central Asia',
      clientKey: 'Client:',
      clientValue: 'World Bank (CAWEP Program)',
      regionKey: 'Region:',
      regionValue: 'Central Asia',
      productionKey: 'Production:',
      productionValue: 'San\'atcore',
      formatKey: 'Format:',
      formatValue: 'Documentary-style short film',

      aboutTitle: 'About the Project',
      aboutP1: 'San\'atcore was selected to produce a visual story within the framework of the Central Asia Water-Energy Program (CAWEP) — a regional initiative led by the World Bank in partnership with the European Union, Switzerland, and the United Kingdom.',
      aboutP2: 'The goal was not simply to create a video, but to translate a complex international initiative into a clear, emotional, and visually compelling story.',

      watchVideo: 'Watch the Film',

      ideaTitle: 'The Idea',
      ideaP1: 'We approached this project not as a traditional institutional video, but as a cinematic reflection on water as a living force.',
      ideaP2: 'At the center of the story — a river.',
      ideaP3: 'A river that has flowed through Central Asia for thousands of years. A river that has witnessed civilizations, borders, and change.',
      ideaP4: 'The world changes. The river remains. And through it — we remain connected.',

      processTitle: 'Production Process',
      processP1: 'To capture the authenticity of this story, we chose an immersive production approach. For four nights, our team lived in natural locations — sleeping under the open sky and working in real environmental conditions.',
      processP2: 'We followed the rhythm of nature:',
      processList: [
        'sunrise over water',
        'movement of currents',
        'wind, light, and silence',
        'untouched landscapes'
      ],
      processP3: 'There were no artificial setups. No constructed scenes. Only real environments, real light, and real moments.',
      processP4: 'This approach allowed us to create visuals that feel alive, raw, and honest.',

      challengesTitle: 'Challenges',
      challengesP1: 'Working in natural conditions required constant adaptation:',
      challengesList: [
        'unpredictable weather',
        'limited technical setup',
        'physical fatigue',
        'remote locations'
      ],
      challengesP2: 'Instead of controlling the environment, we built the process around it. This became a key part of the film’s authenticity.',

      whyMattersTitle: 'Why This Project Matters',
      whyMattersP1: 'Water in Central Asia is not just a resource — it is a strategic and cultural foundation.',
      whyMattersP2: 'This project exists at the intersection of:',
      whyMattersList: [
        'climate change',
        'regional cooperation',
        'water-energy balance',
        'sustainable development'
      ],
      whyMattersP3: 'It reflects the importance of cross-border collaboration and long-term thinking in the region.',

      recognitionTitle: 'Recognition',
      recognitionP1: 'The project was recognized by the World Bank and its partners:',
      recognitionQuote: '“Young videographers from Uzbekistan presented their vision of what water means to each of us. Their film is an inspiring story about a river that has flowed through Central Asia for thousands of years. It is a reminder that while the world changes, rivers remain — nourishing life and connecting people.”',
      recognitionP2: 'The film was created within the CAWEP program, a partnership between:',
      recognitionList: [
        'The World Bank',
        'The European Union',
        'Switzerland',
        'The United Kingdom'
      ],

      impactTitle: 'Impact',
      impactP1: 'This project demonstrates how international video production for development programs in Central Asia can translate complex topics into content that:',
      impactList: [
        'resonates emotionally',
        'communicates clearly',
        'works across cultures',
        'engages both institutional and public audiences'
      ],

      clientsTitle: 'What This Means for Our Clients',
      clientsP1: 'At San\'atcore, we don’t just produce videos. We create communication systems that carry meaning and influence perception.',
      clientsP2: 'We work with brands, organizations, and institutions that aim not just to communicate — but to shape how they are understood. This includes:',
      clientsList: [
        'international organizations',
        'social impact initiatives',
        'cultural and documentary projects',
        'brand storytelling'
      ],
      clientsP3: '',

      collabTitle: 'Looking for a Creative Partner?',
      collabP1: 'If you are working on:',
      collabList: [
        'international initiatives',
        'social or environmental programs',
        'NGO or development projects',
        'brand storytelling',
        'documentary or impact-driven content'
      ],
      collabP2: 'We are ready to collaborate.',
      collabP3: 'San\'atcore — shaping perception through visual storytelling.'
    },
    newsPage: {
      backToNews: '← Back to news',
      share: 'Share article:',
    }
  }
};
