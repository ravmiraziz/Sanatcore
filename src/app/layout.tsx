import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "San'atcore - Креативное агентство видеопродакшена",
  icons: {
    icon: "/logo.png",
  },
  description:
    "Мы создаем визуальные истории, которые формируют восприятие брендов, людей и идей. Видеопродакшн, реклама, социальные кампании и многое другое.",
  keywords: "видеопродакшн, реклама, видеомаркетинг, видео агентство, креативное агентство",
  openGraph: {
    title: "San'atcore - Креативное агентство видеопродакшена",
    description: "Мы создаем визуальные истории, которые формируют восприятие брендов, людей и идей.",
    url: "https://sanatcore.uz",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
