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
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          // style={bgImg}
          className="mt-16 h-[400px] md:h-[500px] bg-brandDark relative flex justify-center items-end"
        >
          {/* radial overlay */}
          {/* <div
            className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
            // style={{
            //   background:
            //     "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
            // }}
          ></div> */}
          <div className="grid grid-cols-2 gap-6 place-items-center text-center ">
            <div>
              <Image
                src={Img1.src}
                alt=""
                height={0}
                width={150}
                layout="intrinsic"
                className="w-[150px] md:w-[250px]"
              />
              <p className="text-white font-bold">Высокое качество</p>
            </div>
            <div>
              <Image
                src={Img2.src}
                alt=""
                height={0}
                width={150}
                layout="intrinsic"
                className="w-[150px] md:w-[250px]"
              />
              <p className="text-white font-bold">Доступные цены</p>
            </div>
            <div>
              <Image
                src={Img3.src}
                alt=""
                height={0}
                width={150}
                layout="intrinsic"
                className="w-[150px] md:w-[250px]"
              />
              <p className="text-white font-bold">
                Скидки постоянным покупателям
              </p>
            </div>
            <div>
              <Image
                src={Img4.src}
                alt=""
                height={0}
                width={150}
                layout="intrinsic"
                className="w-[150px] md:w-[250px]"
              />
              <p className="text-white font-bold">Доставка по всей России</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
};

export default Footer;
