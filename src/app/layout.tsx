import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const font = Montserrat({ subsets: ["latin"] });

const APP_NAME = "Лазер 31";
const APP_DEFAULT_TITLE = "Лазерная гравировка | Лазер 31";
const APP_DESCRIPTION =
  "Лазер 31 предлагает высококачественные услуги лазерной гравировки и резки для создания уникальных персонализированных изделий. Мы поможем вам реализовать любые идеи на металле, дереве и других материалах с безупречным качеством и точностью.";
export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  metadataBase: new URL("https://www.laser-31.ru/"),
  keywords:
    "лазерная гравировка, гравировка металла, гравировка пластика, гравировка ювелирных изделий, гравировка ножей, персонализированные подарки, уникальные дизайны, гравировка город Губкин, гравировка Старый Оскол, гравировка Белгород",
  authors: [{ name: "Артур", url: "https://www.laser-31.ru/" }],
  openGraph: {
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    url: "https://www.laser-31.ru/",
    siteName: APP_NAME,
    images: [
      {
        url: "/opengraph-image.png",
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
      <head>
        {/* Скрипт Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive" // Скрипт загружается после рендеринга контента
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WQBG6JXX');`}
        </Script>
      </head>
      <body className={font.className}>
        {" "}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQBG6JXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>{" "}
    </html>
  );
}
