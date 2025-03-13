import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

// Imagem dos Projetos
import BlogalizandoIMG from "../../icons/projects-icons/banner_blogalizando.png";
import ReactQuizIMG from "../../icons/projects-icons/banner_reactquiz.png";
import ProjetoAcmeIMG from "../../icons/projects-icons/banner_projetoacme.png";
import CrudShowcaseIMG from "../../icons/projects-icons/banner_crudshowcase.png";
import MultistepFormIMG from "../../icons/projects-icons/banner_multistepform.png";
import OthersProjects from "../../icons/projects-icons/others.png";

import { motion } from "framer-motion";

const Projects = () => {
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

  const Cards = [
    { title: "Blogalizando", url: "", image: BlogalizandoIMG },
    { title: "Multistep Form", url: "", image: MultistepFormIMG },
    { title: "CRUD Showcase", url: "", image: CrudShowcaseIMG },
    { title: "Projeto ACME", url: "", image: ProjetoAcmeIMG },
    { title: "React Quiz", url: "", image: ReactQuizIMG },
    { url: "", image: OthersProjects },
  ];

  return (
    <section className="projects" id="projects">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
      >
        Meus <span>Projetos</span>
      </motion.h1>

      <div className="cards-slider">
        {Cards.map((project, index) => (
          <ProjectCard
            key={index}
            projectTitle={project.title}
            projectURL={project.url}
            projectImage={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
