import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpenModal, closeModal }) => {
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
            <h2>Ro'yhatdan o'ting</h2>
            <form className="modal-form">
              <input className="modal-input" type="text" placeholder="Ism" />
              <input
                className="modal-input"
                type="text"
                placeholder="Familiya"
              />
              <input
                className="modal-input"
                type="number"
                placeholder="Tel nomer*"
              />
              <button className="modal-form-btn">submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
