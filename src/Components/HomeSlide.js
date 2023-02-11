import React, { useRef, useState } from "react";
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
            <img src={process.env.PUBLIC_URL + "/1.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/2.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/3.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/4.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/5.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/6.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/7.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/8.webp"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/9.webp"} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default HomeSlide;
