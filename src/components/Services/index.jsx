import React from "react";
import "./services.css";
import { useLocalization } from "../../hooks/useLocalization";
import { languages } from "../../localization/languages";
const Services = () => {
  const [lang] = useLocalization();
  return (
    <>
      <section className="services-section" id="services">
        <div className="container">
          <div data-aos="fade-down" className="services-section-box">
            <h2 className="services-section-title">
              {languages[lang].hizmatlar.services_title}
            </h2>
            <p className="services-section-subtitle">
              {languages[lang].hizmatlar.services_subtitle}
            </p>
          </div>
          <ul className="services-section-list">
            <li data-aos="fade-up" className="services-section-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                ariaHidden="true"
                ariaLabelledby="svgcid-bg4vslbz0lc0"
                data-bbox="26.5 23.75 147 152.5"
                data-type="color"
                viewBox="26.5 23.75 147 152.5"
              >
                <defs>
                  <style>#comp-kq5dfsen svg</style>
                </defs>
                <g fillRule="evenodd" clipRule="evenodd">
                  <path
                    fill="#16163F"
                    d="M42 170.25a6 6 0 11-12 0 6 6 0 0112 0z"
                    data-color="1"
                  ></path>
                  <path
                    fill="#FFE497"
                    d="M173.5 103.75c0 31.48-25.52 57-57 57s-57-25.52-57-57 25.52-57 57-57 57 25.52 57 57z"
                    data-color="2"
                  ></path>
                  <path
                    fill="#FFCA2F"
                    d="M116.5 68.75c0 24.853-20.147 45-45 45s-45-20.147-45-45 20.147-45 45-45 45 20.147 45 45z"
                    data-color="3"
                  ></path>
                </g>
              </svg>
              <h3 className="services-section-item-title">
                {languages[lang].hizmatlar.services_item_title1}
              </h3>
              <p className="services-section-item-subtitle">
                {languages[lang].hizmatlar.services_item_subtitle1}
              </p>
            </li>

            <li data-aos="fade-up" className="services-section-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                ariaHidden="true"
                ariaLabelledby="svgcid-jk4aukv1lt1t"
                data-bbox="20 34.606 159.999 126.634"
                data-type="color"
                viewBox="20 34.606 159.999 126.634"
              >
                <defs>
                  <style>#comp-kq9ag33l svg</style>
                </defs>
                <g fillRule="evenodd" clipRule="evenodd">
                  <path
                    d="M60.163 40.369a5.763 5.763 0 11-11.526 0 5.763 5.763 0 0111.526 0z"
                    data-color="1"
                  ></path>
                  <path
                    fill="#FFE497"
                    d="M37.029 103.69l40.464 40.531a9.606 9.606 0 010 13.572l-.627.628a9.604 9.604 0 01-13.583.011l-.011-.011-40.465-40.531a9.606 9.606 0 010-13.572l.627-.628a9.604 9.604 0 0113.583-.011c.005.003.008.007.012.011z"
                    data-color="2"
                  ></path>
                  <path
                    fill="#FFCA2F"
                    d="M62.556 144.076L162.971 43.492a9.604 9.604 0 0113.583-.011l.011.011.627.628a9.606 9.606 0 010 13.572L76.777 158.276a9.604 9.604 0 01-13.583.011l-.011-.011-.627-.628a9.604 9.604 0 010-13.572z"
                    data-color="3"
                  ></path>
                </g>
              </svg>
              <h3 className="services-section-item-title">
                {languages[lang].hizmatlar.services_item_title2}
              </h3>
              <p className="services-section-item-subtitle">
                {languages[lang].hizmatlar.services_item_subtitle2}
              </p>
            </li>

            <li data-aos="fade-up" className="services-section-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                ariaHidden="true"
                ariaLabelledby="svgcid-d30onx-rpuifd"
                data-bbox="26.982 26 146.037 148"
                data-type="color"
                viewBox="26.982 26 146.037 148"
              >
                <defs>
                  <style>#comp-kq5dfsf71 svg</style>
                </defs>
                <g fillRule="evenodd" clipRule="evenodd">
                  <path
                    fill="#16163F"
                    d="M173.019 168.11a5.89 5.89 0 11-11.78 0 5.89 5.89 0 0111.78 0z"
                    data-color="1"
                  ></path>
                  <path
                    fill="#16163F"
                    d="M173.019 168.11a5.89 5.89 0 11-11.78 0 5.89 5.89 0 0111.78 0z"
                    data-color="1"
                  ></path>
                  <path
                    fill="#FFE497"
                    d="M153.608 59.374v93.252H60.356V59.374h93.252z"
                    data-color="2"
                  ></path>
                  <path
                    fill="#FFCA2F"
                    d="M92.749 26v65.767H26.982V26h65.767z"
                    data-color="3"
                  ></path>
                </g>
              </svg>
              <h3 className="services-section-item-title">
                {languages[lang].hizmatlar.services_item_title3}
              </h3>
              <p className="services-section-item-subtitle">
                {languages[lang].hizmatlar.services_item_subtitle3}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
