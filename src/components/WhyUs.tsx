"use client";

import React from "react";
import FooterImg from "../../public/img/header/laser311.jpg";
import { motion } from "framer-motion";
import Img1 from "../../public/main_center/Certificate.png";
import Img2 from "../../public/main_center/HandCoins.png";
import Img3 from "../../public/main_center/Package.png";
import Img4 from "../../public/main_center/rub.png";
import Image from "next/image";

// const bgImg = {
//   backgroundImage: `url(${FooterImg.src})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
// };
const Footer = () => {
  return (
    <>
      <div>
        <div className=" mt-10 text-center md:max-w-[650px] mx-auto text-3xl ">
          Почему мы?
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mt-16 h-[400px] md:h-[500px] bg-brandDark relative flex justify-center items-end"
        >
          <div className="grid grid-cols-2 gap-6 place-items-center text-center ">
            <div>
              <Image
                src={Img1.src}
                alt="Высокое качество лазерной гравировки"
                height={0}
                width={150}
                className="w-[150px] md:w-[250px]"
                style={{ objectFit: "contain" }}
              />
              <p className="text-white font-bold">Высокое качество</p>
            </div>
            <div>
              <Image
                src={Img2.src}
                alt="Доступные цены лазерной гравировки"
                height={0}
                width={150}
                style={{ objectFit: "contain" }}
                className="w-[150px] md:w-[250px]"
              />
              <p className="text-white font-bold">Доступные цены</p>
            </div>
            <div>
              <Image
                src={Img3.src}
                alt="Скидки постоянным покупателям услуг лазерной гравировки"
                height={0}
                width={150}
                style={{ objectFit: "contain" }}
                className="w-[150px] md:w-[250px]"
              />
              <p className="text-white font-bold">
                Скидки постоянным покупателям
              </p>
            </div>
            <div>
              <Image
                src={Img4.src}
                alt="Доставка по всей России"
                height={0}
                width={150}
                style={{ objectFit: "contain" }}
                className="w-[150px] md:w-[250px]"
              />
              <p className="text-white font-bold">Доставка по всей России</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
