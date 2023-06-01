import React from "react";
import './Contact.css'
const Contact = () => {
  
  return (
    <>
      <section className="Contact-section" id="contact">
        <div className="container">
          <div data-aos="fade-up" className="contact-wrapper">
            <div className="contact-start">
              <h2 className="contact-title">КОНТАКТЫ</h2>
              <h3 className="contact-subtitle">Мы ждем вас</h3>
              <address className="contact-address">
                ул. Арбат, 1а, Москва, 119019, Россия
              </address>
              <div className="contact-linkbox">
                <a className="contact-mailto" href="mailto: info@mysite.ru">
                  info@mysite.ru
                </a>
                <a className="contact-mailto" href="tel: +71234567890">
                  т. +7 123 456-78-90
                </a>
              </div>
              <ul className="contact-social-list">
                <li className="contact-socila-item">
                  <a href="#" className="contact-socila-link">
                    <img
                      src="https://static.wixstatic.com/media/c75715fd5e2f4f788c067a22b53f2277.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c75715fd5e2f4f788c067a22b53f2277.png"
                      alt="wix"
                    />
                  </a>
                </li>
                <li className="contact-socila-item">
                  <a href="#" className="contact-socila-link">
                    <img
                      src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li className="contact-socila-item">
                  <a href="#" className="contact-socila-link">
                    <img
                      src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png"
                      alt="twitter"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <form
              className="contact-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
            >
              <div className="form-box">
                <div className="input-box">
                  <p className="placeholder-title">Имя</p>
                  <input className="contact-input" type="text" name="firstName" required />
                </div>
                <div className="input-box">
                  <p className="placeholder-title">Фамилия</p>
                  <input className="contact-input" type="text" name="lastName" required />
                </div>
              </div>
              <div className="form-box-end">
                <div className="input-box-end">
                  <p className="placeholder-title">Эл. почта *</p>
                  <input
                    className="email-input"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="input-box-end">
                  <p className="placeholder-title">Текст сообщения...</p>
                  <textarea className="textArea" name="comment"></textarea>
                </div>
              </div>
              <button className="contact-btn" type="submit">
              Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
