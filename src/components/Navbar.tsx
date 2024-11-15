"use client";
import React from "react";
import { SlideBottom } from "../utility/animation";
import { motion } from "framer-motion";
import { GiLaserPrecision } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
        <motion.a
          variants={SlideBottom(0)}
          initial="hidden"
          animate="visible"
          href="#"
        >
          Главная
        </motion.a>
        <motion.a
          variants={SlideBottom(0.2)}
          initial="hidden"
          animate="visible"
          href="#explore"
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
        >
          Галерея
        </motion.a>
        <motion.a
          variants={SlideBottom(0.8)}
          initial="hidden"
          animate="visible"
          href="#contacts"
        >
          Контакты
        </motion.a>
      </nav>
    </>
  );
};

export default Navbar;
