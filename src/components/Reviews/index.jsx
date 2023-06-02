import React from "react";
import "./Reviews.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Reviews = () => {
  return (
    <>
      <section className="swiper-section" id="reviews">
        <div data-aos="flip-up" className="container">
          <h2 className="Reviews-title">
          ОТЗЫВЫ
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
                  «Это отзыв. Нажмите, чтобы отредактировать».
                 </h3>
                 <h4 className="swipe-subtitle">
                 Лидия Максимовская
                  </h4>
                  <p className="swipe-desc">
                  Наименование компании
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-lis">
                  <h3 className="swipe-title">
                  «Это отзыв. Нажмите, чтобы отредактировать».
                 </h3>
                 <h4 className="swipe-subtitle">
                 Лидия Максимовская
                  </h4>
                  <p className="swipe-desc">
                  Наименование компании
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-lis">
                  <h3 className="swipe-title">
                  «Это отзыв. Нажмите, чтобы отредактировать».
                 </h3>
                 <h4 className="swipe-subtitle">
                 Лидия Максимовская
                  </h4>
                  <p className="swipe-desc">
                  Наименование компании
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
