import React from "react";
import "./components.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const HomeSlide = () => {
  return (
    <div className="homeSlide" data-aos="fade-in">
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/1.webp"}
              height="80%"
              width="100%"
              alt="img1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/10.webp"}
              height="80%"
              width="100%"
              alt="img9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/11.webp"}
              height="80%"
              width="100%"
              alt="img9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/12.webp"}
              height="80%"
              width="100%"
              alt="img9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/13.webp"}
              height="80%"
              width="100%"
              alt="img9"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/2.webp"}
              height="80%"
              width="100%"
              alt="img2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/3.webp"}
              height="80%"
              width="100%"
              alt="img3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/4.webp"}
              height="80%"
              width="100%"
              alt="img4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/5.webp"}
              height="80%"
              width="100%"
              alt="img5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/6.webp"}
              height="80%"
              width="100%"
              alt="img6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/7.webp"}
              height="80%"
              width="100%"
              alt="img7"
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/8.webp"}
              height="80%"
              width="100%"
              alt="img8"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              src={process.env.PUBLIC_URL + "/9.webp"}
              height="80%"
              width="100%"
              alt="img9"
            />
          </SwiperSlide> */}
        </Swiper>
      </>
    </div>
  );
};

export default HomeSlide;
