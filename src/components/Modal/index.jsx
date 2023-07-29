import React, { useState, useEffect } from "react";
import "./Modal.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
import InputMask from "react-input-mask";
const Modal = ({ isOpenModal, closeModal }) => {
  const [lang, setLang] = useLocalization();
  const [firstName, setFirstName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const handleSendMessage = () => {
    const bot = {
      TOKEN: "5804908423:AAH5Pg79BuEHjxnjPTsmZyIfJmE8EeGXkvA",
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
    </>
  );
};

export default Modal;
