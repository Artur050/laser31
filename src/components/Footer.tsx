"use client";

import React, { useEffect, useState } from "react";
import FooterImg from "../../public/footer2.jpg";
import { motion } from "framer-motion";
import { FaTelegram, FaWhatsapp, FaVk } from "react-icons/fa";
import Image from "next/image";

const bgImg = {
  backgroundImage: `url(${FooterImg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.footer
      id="contacts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="mt-16 h-[500px] bg-brandDark relative flex justify-center items-end text-white"
    >
      <div className="absolute inset-0">
        <Image
          src={FooterImg}
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          objectPosition={isMobile ? "center" : "20% 20%"}
        />
      </div>
      {/* Radial overlay */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
        }}
      ></div>

      {/* Company information */}
      <div className="relative z-20 mb-6 text-center">
        {/* <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">ЛАЗЕР 31</h2>
          <p className="text-sm md:text-xl mt-1 font-bold">
            Профессиональная лазерная гравировка на металле, дереве, стекле и
            других материалах.
          </p>
        </div> */}
        <div className="text-sm md:text-xl mb-4 font-bold">
          <p>
            Белгородская область г.Губкин ул.Дзержинского 113 ,пав.102 , пав.108
          </p>
          <p>Телефон: +7 (995) 018-09-90, +7 (920) 201-16-17</p>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-4 text-2xl md:text-4xl">
          <a
            href="https://t.me/rembrand31"
            title="telegram Лазер 31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="hover:text-cyan-500" />
          </a>
          <a
            href="https://wa.me/79202011617?text=Здравствуйте,%20интересует%20услуга%20лазерной%20гравировки."
            title="whatsapp Лазер 31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-500" />
          </a>
          <a
            href="https://vk.com/gubkin.lazer31"
            title="vk Лазер 31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVk className="hover:text-blue-500" />
          </a>
        </div>
        <p className="mt-6">© 2024. All rights reserved | Arthur Patalakha</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
