"use client";

import React from "react";
import Img1 from "../../public/main/07.jpg";
import Img2 from "../../public/main/02.jpg";
import Img3 from "../../public/main/06.jpg";
import Img4 from "../../public/main/05.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ExploreData = [
  {
    id: 1,
    title: "гравировка ювелирных изделий",
    place: "",
    url: "#",
    image: Img1.src,
    delay: 0.2,
  },
  {
    id: 2,
    title: "гравировка кожаных изделий",
    place: "",
    url: "#",
    image: Img2.src,
    delay: 0.4,
  },
  {
    id: 3,
    title: "гравировка всех видов металла",
    place: "",
    url: "#",
    image: Img3.src,
    delay: 0.6,
  },
  {
    id: 4,
    title: "гравировка по пластику и резине",
    place: "",
    url: "#",
    image: Img4.src,
    delay: 0.8,
  },
];

const Explore = () => {
  return (
    <>
      <section className=" container" id="explore">
        {/* header section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4 "
        >
          <p className="text-3xl">Лазерная гравировка от Лазер 31</p>
          <p className=" mt-3 mb-5">
            Вы хотите добавить индивидуальность и уникальность своим предметам?
            Представляем вам возможность лазерной гравировки - современный
            способ придать вашим изделиям неповторимый стиль и оставить
            незабываемые впечатления. Мы предоставляем полный спектр услуг по
            лазерной гравировке: наносим тексты и изображения любой сложности на
            различные предметы и материалы. Мы предлагаем качественную лазерную
            гравировку по доступной цене.
          </p>
        </motion.div>
        {/* card section */}
        <div className=" mt-20 md:flex grid-cols-2 gap-x-3 gap-6 place-items-center">
          {ExploreData.map((data) => {
            const { ref, inView } = useInView({
              threshold: 0.1, // Анимация сработает, когда 10% элемента будут видимы
              triggerOnce: true, // Анимация сработает только один раз
            });
            return (
              <motion.div
                ref={ref}
                variants={SlideUp(data.delay)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                key={data.id}
                className="relative mb-3 h-auto"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  width={350}
                  height={500}
                  className="object-cover h-[500px] "
                />
                <div className=" absolute w-full mb-5 bottom-0 inset-0 bg-brandDark/15">
                  <div className=" h-full space-y-1 py-6 flex flex-col justify-center text-center items-center">
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className=" uppercase">{data.place}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Explore;
