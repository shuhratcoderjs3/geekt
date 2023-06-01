import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/header-logo.svg"
import "./Header.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

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

  const [activeItem, setActiveItem] = useState("Главная"); // Ba'zi boshlang'ich holatni belgilash

  const handleClick = (item) => {
    setActiveItem(item);
  };

 
  return (
    <>
      <header className={`site-header  ${isScrolled ? "header-scroll" : ""}`}>
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
            </a>
            <nav className="site-nav">
              <ul className="site-nav-list">
                <li
                  className={`site-nav-item ${
                    activeItem === "Главная" ? "actives" : ""
                  }`}
                >
                  <a
                    className={`site-nav-link ${
                      activeItem === "Главная" ? "actives" : ""
                    }`}
                    href="#"
                    onClick={() => handleClick("Главная")}
                  >
                    Главная
                  </a>
                </li>
                <li
                  className={`site-nav-item ${
                    activeItem === "Услуги" ? "actives" : ""
                  }`}
                >
                  <a
                     className={`site-nav-link ${
                      activeItem === "Услуги" ? "actives" : ""
                    }`}
                    href="#services"
                    onClick={() => handleClick("Услуги")}
                  >
                    Услуги
                  </a>
                </li>
                <li
                  className={`site-nav-item ${
                    activeItem === "О нас" ? "actives" : ""
                  }`}
                >
                  <a
                    className={`site-nav-link ${
                      activeItem === "О нас" ? "actives" : ""
                    }`}
                    href="#aboutus"
                    onClick={() => handleClick("О нас")}
                  >
                    О нас
                  </a>
                </li>
                <li
                  className={`site-nav-item ${
                    activeItem === "Отзывы" ? "actives" : ""
                  }`}
                >
                  <a
                    className={`site-nav-link ${
                      activeItem === "Отзывы" ? "actives" : ""
                    }`}
                    href="#reviews"
                    onClick={() => handleClick("Отзывы")}
                  >
                    Отзывы
                  </a>
                </li>
                <li
                  className={`site-nav-item ${
                    activeItem === "Клиенты" ? "actives" : ""
                  }`}
                >
                  <a
                   className={`site-nav-link ${
                    activeItem === "Клиенты" ? "actives" : ""
                  }`}
                    href="#clients"
                    onClick={() => handleClick("Клиенты")}
                  >
                    Клиенты
                  </a>
                </li>
                <li
                  className={`site-nav-item ${
                    activeItem === "Контакты" ? "actives" : ""
                  }`}
                >
                  <a
                   className={`site-nav-link ${
                    activeItem === "Контакты" ? "actives" : ""
                  }`}
                    href="#contact"
                    onClick={() => handleClick("Контакты")}
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>

            <div className="btn-box">
              <button className="site-header-btn">Позвонить</button>
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
                    stroke="black"
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
                <a className="site-nav-link" href="#">
                  Главная
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#services">
                  Услуги
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  О нас
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  Отзывы
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  Клиенты
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  Контакты
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
