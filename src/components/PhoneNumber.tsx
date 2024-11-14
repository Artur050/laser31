"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa"; // Убедитесь, что вы установили react-icons

const PhoneButton = () => {
  return (
    <motion.a
      href="tel:+1234567890" // Замените на нужный номер телефона
      className="fixed z-50 bottom-10 right-4 bg-brandBlue text-white rounded-full p-4 shadow-md"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaPhone size={20} />
    </motion.a>
  );
};

export default PhoneButton;
