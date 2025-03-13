import React from "react";
import "./MainHeader.css";
import Icon1 from "../../icons/icon1.svg";
import Girl from "../../icons/girl.jpg";

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rebeca-soares-44aa22232/",
    icon: <FaLinkedin />,
  },
  { href: "https://github.com/rbcanin", icon: <FaGithub /> },
  {
    href: "https://wa.me/5543996243203?text=Ol%C3%A1%2C%20Rebeca!",
    icon: <FaWhatsapp />,
  },
  { href: "mailto:rebeca.soares.canin@gmail.com", icon: <IoMdMail /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, x: 90, rotate: 90 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: 0,
    transition: {
      opacity: { duration: 1 },
      x: { duration: 0.01, ease: "linear" },
      rotate: { duration: 0.01, ease: "linear" },
    },
  },
};

const greetingsMsgVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.5, ease: "easeInOut" },
      scale: { type: "spring", stiffness: 300, damping: 50 },
    },
  },
};

const MainHeader = () => {
  return (
    <motion.section
      className="main-header"
      id="main-header"
      initial="hidden"
      animate="show"
      variants={containerVariants}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="greetings-msg"
        variants={greetingsMsgVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="greetings-title" variants={textVariants}>
          <h1>
            Olá! Sou <span>Rebeca</span>, seja
          </h1>
          <h1>
            <span>bem vindo</span> ao meu <span className="outline">mundo</span>
            ...
          </h1>
        </motion.div>

        <motion.p variants={textVariants}>
          Meu nome é Rebeca Soares, sou uma desenvolvedora front-end, e
          Engenheira de Software em formação. Sempre busco equilibrar diversão e
          profissionalismo em meus projetos. Aqui você pode conferir alguns dos
          trabalhos que já realizei e as habilidades que domino!
        </motion.p>

        {/* <motion.p variants={textVariants}>
          paragraph
        </motion.p> */}

        <motion.div className="media-icons" variants={containerVariants}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="media-btn"
              target="_blank"
              variants={iconVariants}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.img
        src={Girl}
        className="greetings-img"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 0.5, delay: 2 },
          scale: { type: "spring", stiffness: 50, damping: 10, delay: 2 },
        }}
      />
    </motion.section>
  );
};

export default MainHeader;
