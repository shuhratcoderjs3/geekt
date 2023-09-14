import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/header-logo.svg";
import Modal from "../Modal";
import "./Header.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import useScroll from "../../hooks/useScroll";
const Header = () => {
  const [lang, setLang] = useLocalization();
  const [scrollNumber] = useScroll()

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      handleCloseMenu();
    }
  };

  const [activeItem, setActiveItem] = useState("Главная");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };



  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header-wrapper">
            <a className="site-header-link" href="/">
              <img
                className="site-header-logo"
                src={Logo}
                alt="logo"
                width={100}
                height={70}
              />
              <h2 className="site-header-logo-title">Consulting</h2>
            </a>
            <nav className="site-nav">
              <ul className="site-nav-list">
                <li className={`site-nav-item`}>
                  <a
                    className={`site-nav-link ${
                      scrollNumber >= 0 && scrollNumber < 413 ? "actives" : ""
                    }`}
                    href="#"
                    onClick={() => handleClick("Главная")}
                  >
                    {languages[lang].header.nav.navItem1}
                  </a>
                </li>
                <li className={`site-nav-item `}>
                  <a
                    className={`site-nav-link ${
                      scrollNumber >= 413 && scrollNumber < 1563
                        ? "actives"
                        : ""
                    }`}
                    href="#services"
                    onClick={() => handleClick("Услуги")}
                  >
                    {languages[lang].header.nav.navItem2}
                  </a>
                </li>
                <li className={`site-nav-item `}>
                  <a
                    className={`site-nav-link ${
                      scrollNumber >= 1563 && scrollNumber < 2199
                        ? "actives"
                        : ""
                    }`}
                    href="#aboutus"
                    onClick={() => handleClick("О нас")}
                  >
                    {languages[lang].header.nav.navItem3}
                  </a>
                </li>
                <li className={`site-nav-item `}>
                  <a
                    className={`site-nav-link ${
                      scrollNumber >= 2199 && scrollNumber < 2619
                        ? "actives"
                        : ""
                    }`}
                    href="#reviews"
                    onClick={() => handleClick("Отзывы")}
                  >
                    {languages[lang].header.nav.navItem4}
                  </a>
                </li>
                <li className={`site-nav-item`}>
                  <a
                    className={`site-nav-link ${
                      scrollNumber >= 2619 && scrollNumber < 3398
                        ? "actives"
                        : ""
                    }`}
                    href="#clients"
                    onClick={() => handleClick("Клиенты")}
                  >
                    {languages[lang].header.nav.navItem5}
                  </a>
                </li>
                <li className={`site-nav-item`}>
                  <a
                    className={`site-nav-link ${
                      scrollNumber >= 3398 && scrollNumber < 10000
                        ? "actives"
                        : ""
                    }`}
                    href="#contact"
                    onClick={() => handleClick("Контакты")}
                  >
                    {languages[lang].header.nav.navItem6}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="btn-box">
              <select
                className="header-select"
                name="language"
                value={lang}
                onChange={(evt) => setLang(evt.target.value)}
              >
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>
              <div>
                <button  className="site-header-btn">
                 <a href="tel:+998770090894">+998 77 009 08 94 </a>
                </button>
               
              </div>
              <button className="burger-btn" onClick={handleOpenMenu}>
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.125 13.375H16.875M1.125 7.375H16.875M1.125 1.375H16.875"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        onClick={handleOverlayClick}
        className={`menu ${isOpen ? "active" : ""}`}
      >
        <div className="container">
          <div className="close-box">
            <span className="close-title">frfe</span>
            <button className="close-btn" onClick={handleCloseMenu}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_104_120)">
                  <path
                    d="M9.74729 10.691L4.70563 5.65764L5.88896 4.4743L10.9223 9.51597L15.9556 4.4743L17.139 5.65764L12.0973 10.691L17.139 15.7243L15.9556 16.9076L10.9223 11.866L5.88896 16.9076L4.70563 15.7243L9.74729 10.691Z"
                    fill="#0F1419"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_120">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.922302 0.690979)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <nav className="site-nav-burger">
            <ul className="site-nav-list-burger">
              <li className="site-nav-item-burger">
                <a className="site-nav-link-burger" href="#">
                  {languages[lang].header.nav.navItem1}
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link-burger" href="#services">
                  {languages[lang].header.nav.navItem2}
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link-burger" href="#aboutus">
                  {languages[lang].header.nav.navItem3}
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link-burger" href="#reviews">
                  {languages[lang].header.nav.navItem4}
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link-burger" href="#clients">
                  {languages[lang].header.nav.navItem5}
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link-burger" href="#contact">
                  {languages[lang].header.nav.navItem6} 
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
