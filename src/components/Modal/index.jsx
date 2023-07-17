import React, { useState, useEffect } from "react";
import "./Modal.css";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";

const Modal = ({ isOpenModal, closeModal }) => {
  const [lang, setLang] = useLocalization();
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

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (event) => {
    let input = event.target.value;
  
    // Raqamni shaklga kiritish
    if (input.length === 0 && event.target === document.activeElement) {
      input = "+998 ";
      setPhoneNumber(input);
      return;
    } else if (input.length > 0 && input[0] !== "+") {
      input = "+998 " + input;
    } else if (input.length > 0 && input[0] === "+") {
      input = "+" + input.slice(1, input.length);
    }
  
    // Olib tashlash kerak bo'lmagan belgilarni chiqarish
    input = input.replace(/[^+\d]/g, "");
  
    // Raqamni shaklga kiritish davomida chizg'ichlar qo'shish
    if (input.length > 4) {
      input = input.slice(0, 4) + " " + input.slice(4);
    }
    if (input.length > 7) {
      input = input.slice(0, 7) + "-" + input.slice(7);
    }
    if (input.length > 11) {
      input = input.slice(0, 11) + "-" + input.slice(11);
    }
    if (input.length > 14) {
      input = input.slice(0, 14) + "-" + input.slice(14);
    }
  
    // Restrict maximum length to 17 characters
    if (input.length <= 17) {
      setPhoneNumber(input);
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
            <form className="modal-form">
              <input
                className="modal-input"
                type="text"
                placeholder={languages[lang].modal.input_name}
              />
              <input
                className="modal-input"
                type="tel"
                placeholder={languages[lang].modal.input_tel}
                onChange={handlePhoneNumberChange}
                value={phoneNumber} 
              />
              <button className="modal-form-btn">
                {languages[lang].modal.modal_btn}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
