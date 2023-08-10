import React from "react";
import CountUp, { useCountUp } from "react-countup";
import "./Facts.css";
import { useLocalization } from '../../hooks/useLocalization'
import { languages } from '../../localization/languages'
const Facts = () => {
  const [lang] = useLocalization();
  useCountUp({
    ref: "counter",

    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <section className="Facts-section">
        <div data-aos="zoom-in" className="container">
          <h2 className="Facts-section-title">{ languages[lang].fakts.fakts_title}</h2>
          <ul className="Facts-section-list">
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
                <CountUp end={1.5} enableScrollSpy />
              </h3>
              <p className="Facts-section-item-subtitle">{ languages[lang].fakts.fakts_item_title1}</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
              <CountUp end={6} enableScrollSpy />
              </h3>
              <p className="Facts-section-item-subtitle">{ languages[lang].fakts.fakts_item_title2}</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
              <CountUp end={36} enableScrollSpy />
              </h3>
              <p className="Facts-section-item-subtitle">{ languages[lang].fakts.fakts_item_title3}</p>
            </li>
            <li className="Facts-section-item">
              <h3 className="Facts-section-item-title">
                $
              <CountUp end={6.5} enableScrollSpy />
              mln
              </h3>
              <p className="Facts-section-item-subtitle">{ languages[lang].fakts.fakts_item_title4}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Facts;
