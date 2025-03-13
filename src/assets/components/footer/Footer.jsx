import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SiteLogo from "../../icons/icon_site_light.svg";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col page-title">
            <img src={SiteLogo} width={30} />
            <h3>Rebeca.Soares</h3>
          </div>
          <div className="footer-col">
            <h4>Guia</h4>
            <ul>
              <li>
                <a href="#main-header">Sobre Mim</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#experience">Experiência</a>
              </li>
              <li>
                <a href="/CV_Rebeca_Soares.pdf" target="_blank">
                  Meu CV
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            {/* <h4>Projetos</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/RecheEduardo/blogalizando"
                  target="_blank"
                >
                  Blogalizando
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RecheEduardo/crud-showcase"
                  target="_blank"
                >
                  CRUD Showcase
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RecheEduardo/projeto-acme"
                  target="_blank"
                >
                  Projeto ACME
                </a>
              </li>
              <li>
                <a
                  href="https://multistep-reactjs-form.vercel.app/"
                  target="_blank"
                >
                  MultiStep Form
                </a>
              </li>
            </ul> */}
          </div>
          <div className="footer-col">
            <h4>Veja também</h4>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/rebeca-soares-44aa22232/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/rbcanin" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://wa.me/5543996243203?text=Ol%C3%A1%2C%20Rebeca!"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
              <a href="mailto:rebeca.soares.canin@gmail.com" target="_blank">
                <IoMdMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
