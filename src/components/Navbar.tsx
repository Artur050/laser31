"use client";
import React from "react";
import { SlideBottom } from "../utility/animation";
import { motion } from "framer-motion";
import { GiLaserPrecision } from "react-icons/gi";
import { useCallback } from "react";

const Navbar = () => {
  const handleSmoothScroll = useCallback((e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  return (
    <>
      <nav className="container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
        <motion.a
          variants={SlideBottom(0)}
          initial="hidden"
          animate="visible"
          href="#"
          onClick={handleSmoothScroll}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Главная
        </motion.a>
        <motion.a
          variants={SlideBottom(0.2)}
          initial="hidden"
          animate="visible"
          href="#explore"
          onClick={handleSmoothScroll}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Услуги
        </motion.a>
        <motion.a
          variants={SlideBottom(0.4)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          <GiLaserPrecision className="text-3xl text-white drop-shadow-sm cursor-pointer" />{" "}
        </motion.a>
        <motion.a
          variants={SlideBottom(0.6)}
          initial="hidden"
          animate="visible"
          href="#galery"
          onClick={handleSmoothScroll}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Галерея
        </motion.a>
        <motion.a
          variants={SlideBottom(0.8)}
          initial="hidden"
          animate="visible"
          href="#contacts"
          onClick={handleSmoothScroll}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Контакты
        </motion.a>
      </nav>
    </>
  );
};

export default Navbar;
