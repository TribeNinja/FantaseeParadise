import React from "react";
import "./components.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div className="testimonyContainer">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Testimonial;
