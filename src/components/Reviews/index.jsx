import React from "react";
import "./Reviews.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { languages } from "../../localization/languages";
import { useLocalization } from "../../hooks/useLocalization";
const Reviews = () => {
  const [lang, setLang] = useLocalization();
  return (
    <>
      <section className="swiper-section" id="reviews">
        <div data-aos="flip-up" className="container">
          <h2 className="Reviews-title">
          {languages[lang].Sharhlar.sharh_title}
          </h2>
          <div className="Revievs-wrapper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card-lis">
                  <h3 className="swipe-title">
                  {languages[lang].Sharhlar.sharh_subtitle}
                 </h3>
                 <h4 className="swipe-subtitle">
                 {languages[lang].Sharhlar.sharh_name}
                  </h4>
                  <p className="swipe-desc">
                  {languages[lang].Sharhlar.sharh_desc}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-lis">
                  <h3 className="swipe-title">
                  {languages[lang].Sharhlar.sharh_subtitle}
                 </h3>
                 <h4 className="swipe-subtitle">
                 {languages[lang].Sharhlar.sharh_name}
                  </h4>
                  <p className="swipe-desc">
                  {languages[lang].Sharhlar.sharh_desc}
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-lis">
                  <h3 className="swipe-title">
                  {languages[lang].Sharhlar.sharh_subtitle}
                 </h3>
                 <h4 className="swipe-subtitle">
                 {languages[lang].Sharhlar.sharh_name}
                  </h4>
                  <p className="swipe-desc">
                  {languages[lang].Sharhlar.sharh_desc}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
