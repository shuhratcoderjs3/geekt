import "./Hero.css";
import { useLocalization } from "../../hooks/useLocalization";
import { languages } from "../../localization/languages";
import Modal from "../Modal";
import React, { useState } from "react";
const Hero = () => {
  const [lang] = useLocalization();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div data-aos="fade-up" className="hero-section-box">
            <h1 className="hero-section-title">
              {languages[lang].hero.hero_title}
            </h1>
            <p className="hero-section-subtitle">
              {languages[lang].hero.hero_subtitle}
            </p>
            <a href="#contact" className="site-hero-btn" >
              {languages[lang].hero.hero_btn}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
