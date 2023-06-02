import React from "react";
import CountUp, { useCountUp } from "react-countup";
import "./Facts.css";
const Facts = () => {
  useCountUp({
    ref: "counter",

    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <section className="Facts-section">
        <div data-aos="zoom-in" className="container">
          <h2 className="Facts-section-title">Наша компания: цифры и факты</h2>
          <ul className="Facts-section-list">
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
                <CountUp end={31} enableScrollSpy />
              </h3>
              <p className="Facts-section-item-subtitle">лет опыта</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
              <CountUp end={36} enableScrollSpy />
              </h3>
              <p className="Facts-section-item-subtitle">экспертов</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
              <CountUp end={120} enableScrollSpy />
              </h3>
              <p className="Facts-section-item-subtitle">клиентов ежегодно</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
              <CountUp end={9} enableScrollSpy />
              </h3>
              <p className="Facts-section-item-subtitle">партнеров</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Facts;
