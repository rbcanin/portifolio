import React from "react";
import "./SkillsSlider.css";
/* Importando Logos para o Slider */
import {
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaGitAlt,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaSass,
  FaReact,
} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiRubyonrails, SiSqlite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import SkillBadge from "./SkillBadge";

import { motion } from "framer-motion";
import { FcNext } from "react-icons/fc";
import { RiNextjsLine } from "react-icons/ri";

const SkillsSlider = () => {
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.5, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 150, damping: 15 },
      },
    },
  };

  const topSlider = [
    { icon: <FaHtml5 />, name: "HTML", position: 1 },
    { icon: <FaJsSquare />, name: "JavaScript", position: 2 },
    { icon: <RiNextjsLine />, name: "Next.Js", position: 3 },
    { icon: <FaGitAlt />, name: "Git", position: 4 },
    { icon: <BiLogoTypescript />, name: "TypeScript", position: 5 },
    { icon: <FaBootstrap />, name: "Bootstrap", position: 6 },
    { icon: <FaReact />, name: "React.Js", position: 7 },
  ];

  return (
    <div className="sliders">
      <motion.div
        className="slider-left"
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: "-30% 0px -30% 0px",
        }}
      >
        <div className="list">
          {topSlider.map((badge, index) => (
            <SkillBadge
              key={index}
              skillIcon={badge.icon}
              skillName={badge.name}
              position={badge.position}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSlider;
