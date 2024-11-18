import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Journal from "../components/Journal";
import Footer from "../components/Footer";
import HeroImg from "../../public/img/header/022.jpg";
import WhyUs from "@/components/WhyUs";
import PhoneButton from "@/components/PhoneNumber";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Лазер 31",
            url: "https://www.laser-31.ru/",
            logo: "https://www.laser-31.ru//opengraph-image.png",
            description:
              "Лазер 31 предлагает высококачественные услуги лазерной гравировки и резки для создания уникальных персонализированных изделий. Мы поможем вам реализовать любые идеи на металле, дереве и других материалах с безупречным качеством и точностью.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ул. Дзержинского, 113, пав. 102, пав. 108",
              addressLocality: "Губкин",
              addressRegion: "Белгородская область",
              postalCode: "укажите_почтовый_индекс",
              addressCountry: "Россия",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              name: "Павел",
              telephone: "+7-995-018-09-90", // Ваш номер телефона
            },
            sameAs: [
              "https://t.me/rembrand31",
              "https://wa.me/79202011617?text=Здравствуйте,%20интересует%20услуга%20лазерной%20гравировки.",
              "https://vk.com/gubkin.lazer31",
            ],
          }),
        }}
      />
      <div className="overflow-x-hidden bg-brandDark text-white">
        <div style={{ position: "relative", height: "100vh", width: "100%" }}>
          <Image
            src={HeroImg}
            alt="Лазерная гравировка"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
          <Navbar />
          <Hero />
        </div>
        <Explore />
        <WhyUs />
        <Journal />
        <Footer />
        <PhoneButton />
      </div>
    </>
  );
}
