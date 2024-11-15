"use client";

import React, { useState } from "react";
import Img1 from "../../public/mainbot/01.jpg";
import Img2 from "../../public/mainbot/02.jpg";
import Img3 from "../../public/mainbot/03.jpg";
import Img4 from "../../public/mainbot/04.jpg";
import Img5 from "../../public/mainbot/05.jpg";
import Img6 from "../../public/mainbot/06.jpg";
import Img7 from "../../public/mainbot/07.jpg";
import Img8 from "../../public/mainbot/08.jpg";
import Img9 from "../../public/mainbot/09.jpg";
import Img10 from "../../public/mainbot/10.jpg";
import Img11 from "../../public/mainbot/11.jpg";
import Img12 from "../../public/mainbot/12.jpg";
import Img13 from "../../public/mainbot/13.jpg";
import Img14 from "../../public/mainbot/14.jpg";
import Img15 from "../../public/mainbot/15.jpg";
import Img16 from "../../public/mainbot/16.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const JournalData = [
  {
    id: 1,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img1.src,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img2.src,
    delay: 0.4,
  },
  {
    id: 3,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img3.src,
    delay: 0.6,
  },
  {
    id: 4,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img4.src,
    delay: 0.8,
  },
  {
    id: 5,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img5.src,
    delay: 1,
  },
  {
    id: 6,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img6.src,
    delay: 1.2,
  },
  {
    id: 7,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img7.src,
    delay: 1.4,
  },
  {
    id: 8,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img8.src,
    delay: 1.6,
  },
  {
    id: 9,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img9.src,
    delay: 1.8,
  },
  {
    id: 10,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img10.src,
    delay: 2,
  },
  {
    id: 11,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img11.src,
    delay: 2.2,
  },
  {
    id: 12,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img12.src,
    delay: 2.4,
  },
  {
    id: 13,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img13.src,
    delay: 2.6,
  },
  {
    id: 14,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img14.src,
    delay: 2.8,
  },
  {
    id: 15,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    date: "May 30, 2022",
    url: "#",
    image: Img15.src,
    delay: 3,
  },
  {
    id: 16,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    date: "April 30, 2021",
    url: "#",
    image: Img16.src,
    delay: 3.2,
  },
];

const Journal = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Состояние текущего слайда

  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % JournalData.length);
  };

  // Функция для перехода к предыдущему слайду
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + JournalData.length) % JournalData.length
    );
  };

  return (
    <section className="container mt-40" id="journal">
      {/* header section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="text-center md:max-w-[650px] mx-auto space-y-4"
      >
        <p className="md:text-3xl text-xl">Галерея наших работ</p>
        <p className=" text-[14px]">
          Ознакомьтесь с примерами нашей работы: от изящной персонализации
          подарков до точной гравировки сложных узоров. Каждый проект — это
          уникальный подход и высокое качество, которые мы рады предложить
          каждому клиенту.
        </p>
      </motion.div>

      {/* card section */}
      <div className="relative" id="galery">
        <motion.div
          className="overflow-hidden"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Слайдер для мобильных устройств */}
          <div className="block md:hidden">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5 }}
            >
              {JournalData.map((data, index) => (
                <motion.div
                  className="relative w-full flex-shrink-0 mt-4  "
                  key={data.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.5 }}
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={350}
                    height={150}
                    className="object-cover rounded-3xl"
                    layout="intrinsic"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Кнопки управления слайдами */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2  text-black font-bold p-2"
            onClick={prevSlide}
          >
            ←
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black font-bold p-2"
            onClick={nextSlide}
          >
            →
          </button>
        </motion.div>

        {/* Grid для больших экранов */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-14 mt-20">
          {JournalData.map((data) => {
            return (
              <motion.div
                key={data.id}
                initial="hidden"
                animate="visible"
                variants={SlideUp(data.delay)}
              >
                <div className="overflow-hidden relative w-full h-[350px]">
                  <motion.div whileTap={{ scale: 1.1 }}>
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={350}
                      height={250}
                      className="object-cover h-[250px]"
                      layout="responsive"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journal;
