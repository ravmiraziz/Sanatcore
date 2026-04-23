import sys

with open('/Users/ravmiraziz/Desktop/Ishlarim/A Work/Sanatcore/src/lib/data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# We want to replace everything from 'const uzNews: NewsArticle[] = ' to the EOF.
prefix = text.split('const uzNews: NewsArticle[] = ')[0]

new_content = """const uzNews: NewsArticle[] = [
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
"""

with open('/Users/ravmiraziz/Desktop/Ishlarim/A Work/Sanatcore/src/lib/data.ts', 'w', encoding='utf-8') as f:
    f.write(prefix + new_content)

print("done")
