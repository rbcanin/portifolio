import React from "react";
import "./Experience.css";
import LogoProdesp from "../../icons/icon-prodesp.png";
import LogoNtk from "../../icons/ntk-logo.png";
import Codie from "../../icons/icon-codie.jpg";
import MKD from "../../icons/icon-mkd.jpg";

import { motion } from "framer-motion";

const Experience = () => {
  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.5, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 150, damping: 8 },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -150 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.5, ease: "easeInOut" },
        x: { type: "spring", stiffness: 150, damping: 15 },
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 150 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.5, ease: "easeInOut" },
        x: { type: "spring", stiffness: 150, damping: 15 },
      },
    },
  };

  return (
    <section className="experience" id="experience">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
      >
        Minha <span className="outline-reverse">Experiência</span>
      </motion.h1>

      <motion.div
        className="experience-cards"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="card"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        >
          <div className="card-header">
            <div className="job-title">
              <img src={Codie} width={50} style={{ borderRadius: "1.25rem" }} />
              <h2>Desenvolvedor FrontEnd</h2>
            </div>
            <div className="job-time">nov. 2024 - Atual</div>
          </div>

          <div className="card-body">
            <motion.p variants={fadeInLeft}>
              Desenvolvimento da interface do usuário, criação de interfaces
              responsivas e interativas, consumir APIs e integrar dados,
              metodologias ágeis, manutenção do código e testes unitários,
              refatoração.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="card"
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        >
          <div className="card-header">
            <div className="job-title">
              <img src={Codie} width={50} style={{ borderRadius: "1.25rem" }} />
              <h2>Especialista em gestão de tráfego pago</h2>
            </div>
            <div className="job-time">abr. 2023 - out. 2024</div>
          </div>

          <div className="card-body">
            <motion.p variants={fadeInRight}>
              Gestão de tráfego pago no Facebook Ads, Google Ads e LinkedIn Ads,
              criação da estratégia completa, campanhas de geração de leads,
              reconhecimento, vendas em e-commerce, entre outros objetivos.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="card"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        >
          <div className="card-header">
            <div className="job-title">
              <img src={MKD} width={50} style={{ borderRadius: "1.25rem" }} />
              <h2>Especialista em gestão de tráfego pago</h2>
            </div>
            <div className="job-time">fev. 2022 - mar. 2023</div>
          </div>

          <div className="card-body">
            <motion.p variants={fadeInLeft}>
              Planejamento e controle de entregas, redução de prazos e
              economizando custos, aplicando metodologias ágeis que viabilizam
              várias tarefas seguirem em simultâneo, gestão de equipes e de
              recursos.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
