import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

const APP_NAME = "Лазер 31";
const APP_DEFAULT_TITLE = "Лазерная гравировка | Лазер 31";
const APP_DESCRIPTION =
  "Лазер 31 предлагает высококачественные услуги лазерной гравировки и резки для создания уникальных персонализированных изделий. Мы поможем вам реализовать любые идеи на металле, дереве и других материалах с безупречным качеством и точностью.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  metadataBase: new URL("https://laser-31.ru/"),
  keywords:
    "лазерная гравировка, гравировка металла, гравировка пластика, гравировка ювелирных изделий, гравировка ножей, персонализированные подарки, уникальные дизайны, гравировка город Губкин, гравировка Старый Оскол, гравировка Белгород",
  authors: [{ name: "Артур", url: "https://laser-31.ru/" }],
  openGraph: {
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    url: "https://laser31.vercel.app/",
    siteName: APP_NAME,
    images: [
      {
        url: "/opengraph-image.png", // Путь к изображению
        width: 1200,
        height: 630,
        alt: "Лазерная гравировка",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  );
}
