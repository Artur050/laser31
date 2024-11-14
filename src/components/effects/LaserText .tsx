"use client";
// "use client";
// import { motion } from "framer-motion";

// const letterAnimation = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2, // задержка для последовательного появления букв
//       duration: 0.5,
//       ease: [0.2, 0.65, 0.3, 0.9], // кривая для плавного эффекта
//     },
//   }),
// };

// const LaserText = ({ text }) => {
//   return (
//     <div className="space-x-2">
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           custom={index}
//           initial="hidden"
//           animate="visible"
//           variants={letterAnimation}
//           className="glow-effect"
//         >
//           {char}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// export default LaserText;

import { motion } from "framer-motion";
interface LaserTextProps {
  text: string;
}

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // задержка для последовательного появления букв
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9], // кривая для плавного эффекта
    },
  }),
};

const LaserText: React.FC<LaserTextProps> = ({ text }) => {
  const letters = text.split("");

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // задержка между появлением каждой буквы
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 }, // Начальная позиция (влево)
    visible: { opacity: 1, x: 0 }, // Конечная позиция
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LaserText;
