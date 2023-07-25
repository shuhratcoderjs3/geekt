import React, { useState } from "react";
import "./Contact.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import InputMask from "react-input-mask";
const Contact = () => {
  const [lang, setLang] = useLocalization();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSendMessage = () => {
    const bot = {
      TOKEN: "5804908423:AAH5Pg79BuEHjxnjPTsmZyIfJmE8EeGXkvA",
      chatID: "-1001855468600",
      message: `First Name: ${firstName},
Last Name: ${lastName},
Phone Number: ${phoneNumber.replace(/[\(\)]/g, "")}`,
    };

    const apiUrl = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage`;

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: bot.chatID,
        text: bot.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message sent:", data);
        // Clear the input fields after successfully sending the message
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  const handleLastNameKeyPress = (e) => {
    const charCode = e.which || e.keyCode;
    // Check if the entered character is a letter or a space
    if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && charCode !== 32) {
      e.preventDefault(); // Prevent the input of non-letter characters
    }
  };

  const handleFormValidation = () => {
    if (!firstName.trim() || !lastName.trim() || !phoneNumber.trim()) {
      alert("Please fill in all required fields.");
      return false;
    }
  };
  

  return (
    <>
      <section className="Contact-section" id="contact">
        <div className="container">
          <div data-aos="fade-up" className="contact-wrapper">
            <div className="contact-start">
              <h2 className="contact-title">
                {" "}
                {languages[lang].Contact.contact_title}
              </h2>
              <h3 className="contact-subtitle">
                {languages[lang].Contact.contact_subtitle}
              </h3>
              <address className="contact-address">
                {languages[lang].Contact.contact_address}
              </address>
              <div className="contact-linkbox">
                <a className="contact-mailto" href="mailto: info@mysite.ru">
                  {languages[lang].Contact.contact_email}
                </a>
                <a className="contact-mailto" href="tel: +998770090894">
                  +998 77 009 08 94
                </a>
                <a className="contact-mailto" href="tel: +998555000094">
                  +998 55 500 00 94
                </a>
              </div>
              <ul className="contact-social-list">
                <li className="contact-socila-item">
                  <a href="#" className="contact-socila-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        class="st0"
                        d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="contact-socila-item">
                  <a href="#" className="contact-socila-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      {" "}
                      <path
                        d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="contact-socila-item">
                  <a href="#" className="contact-socila-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      {" "}
                      <path
                        d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <div className="input-box-end">
                <p className="placeholder-title">
                  {languages[lang].Contact.contact_form_name}
                </p>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  // onChange={handleFirstNameChange}
                  className="email-input"
                  type="text"
                  required
                  onKeyPress={handleLastNameKeyPress} // Add the onKeyPress event handler
                />
              </div>
              <div className="input-box-end">
                <p className="placeholder-title">
                  {languages[lang].Contact.contact_form_lastname}
                </p>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="email-input"
                  type="text"
                  required
                  onKeyPress={handleLastNameKeyPress} // Add the onKeyPress event handler
                />
              </div>
              <div className="input-box-end">
                <p className="placeholder-title">Phone Number</p>
                <InputMask
                  mask="+\9\9\8\ (99) 999-99-99"
                  maskChar=" "
                  required={true}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="email-input"
                  type="tel"
                />
              </div>
              <button
              onClick={() => {
                handleFormValidation();
                handleSendMessage();
              }}
                className="contact-btn"
                type="submit"
              >
                {languages[lang].modal.modal_btn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
