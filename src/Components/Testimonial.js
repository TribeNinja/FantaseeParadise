import React from "react";
import "./components.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className="testimonyContainer">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // freeMode={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
