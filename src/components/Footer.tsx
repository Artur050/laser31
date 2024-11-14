// "use client";

// import React from "react";
// import FooterImg from "../../public/img/header/pexels-optlasers-7254413.jpg";
// import { motion } from "framer-motion";

// const bgImg = {
//   backgroundImage: `url(${FooterImg.src})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
// };
// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5, delay: 0.2 }}
//       style={bgImg}
//       className="mt-16 h-[500px] bg-brandDark relative flex justify-center items-end"
//     >
//       {/* radial overlay */}
//       <div
//         className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
//         }}
//       ></div>
//       <p className="relative z-20 mb-6">
//         © 2024. All rights reserved | Arthur Patalakha
//       </p>
//     </motion.footer>
//   );
// };

// export default Footer;
"use client";

import React, { useEffect, useState } from "react";
import FooterImg from "../../public/footer2.jpg";
import { motion } from "framer-motion";
import { FaTelegram, FaWhatsapp, FaVk } from "react-icons/fa";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      style={{
        ...bgImg,
        backgroundPosition: isMobile ? "center" : "20% 20%",
      }}
      className="mt-16 h-[500px] bg-brandDark relative flex justify-center items-end text-white"
    >
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
          <p>г. Белгород, ул. Примерная, д. 10</p>
          <p>Телефон: +7 (995) 018-09-90, +7 (920) 201-16-17</p>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-4 text-2xl md:text-4xl">
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="hover:text-cyan-500" />
          </a>
          <a
            href="https://wa.me/yourwhatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-500" />
          </a>
          <a
            href="https://vk.com/yourvk"
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
