import React, { useState, useEffect } from "react";
import "./Modal.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import InputMask from "react-input-mask";
const Modal = ({ isOpenModal, closeModal }) => {
  const [lang, setLang] = useLocalization();
  const [firstName, setFirstName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false); // Modalı kapat
      }, 3000);

      // Temizleme işlevi: Modal kapatıldığında zamanlayıcıyı temizle
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleSendMessage = () => {
    const bot = {
      TOKEN: "5804908423:AAH5Pg79BuEHjxnjPTsmZyIfJmE8EeGXkvA111",
      chatID: "-1001855468600",
      message: `Full Name: ${firstName},
Phone Number: ${telNumber}`,
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
        setTelNumber("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
    closeModal();
    setShowModal(true);
  };
  const handleOverlayClick = () => {
    closeModal();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenModal]);

  const handleLastNameKeyPress = (e) => {
    const charCode = e.which || e.keyCode;
    // Check if the entered character is a letter or a space
    if (
      !(charCode >= 65 && charCode <= 90) &&
      !(charCode >= 97 && charCode <= 122) &&
      charCode !== 32
    ) {
      e.preventDefault(); // Prevent the input of non-letter characters
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {isOpenModal && (
        <div
          className={`overlayModal ${isOpenModal ? "open" : ""}`}
          onClick={handleOverlayClick}
        >
          <div
            className={`modal ${isOpenModal ? "open" : ""}`}
            onClick={handleModalClick}
          >
            <button className="close-modal-btn" onClick={closeModal}>
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
            <h2>{languages[lang].modal.modal_title}</h2>
            <div className="modal-form">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="modal-input"
                type="text"
                placeholder={languages[lang].modal.input_name}
                onKeyPress={handleLastNameKeyPress}
              />
              <InputMask
                mask="+\9\9\8\ (99) 999-99-99"
                maskChar=" "
                required={true}
                className="modal-input"
                type="tel"
                placeholder={languages[lang].modal.input_tel}
                onChange={(e) => setTelNumber(e.target.value)}
                value={telNumber}
              />
              <button onClick={handleSendMessage} className="modal-form-btn">
                {languages[lang].modal.modal_btn}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="contact-modal">
          <div className="conatact-modal-box">
            <div className="contact-modal-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="96px"
                height="96px"
              >
                <linearGradient
                  id="I9GV0SozQFknxHSR6DCx5a"
                  x1="9.858"
                  x2="38.142"
                  y1="9.858"
                  y2="38.142"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#21ad64" />
                  <stop offset="1" stop-color="#088242" />
                </linearGradient>
                <path
                  fill="url(#I9GV0SozQFknxHSR6DCx5a)"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                />
                <path
                  d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z"
                  opacity=".05"
                />
                <path
                  d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z"
                  opacity=".07"
                />
                <path
                  fill="#fff"
                  d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"
                />
              </svg>
            </div>
            <h3 className="conatact-modal-title">
              {languages[lang].Contact.contact_form_modal_title}
            </h3>
            <p>{languages[lang].Contact.contact_form_modal_subtitle}</p>
            <button className="contact-modal-btn" onClick={handleCloseModal}>
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
