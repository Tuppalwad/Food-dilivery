import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from './slide-1.jpg'
import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {

  return (
    <>
      <div className="container">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="img">
                <img src={img} alt="" /><div className="info"><h1>hello</h1></div>
            </div>
        </SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
        <SwiperSlide><div  className=" img">
                <img src={img} alt="" />
                <div className="info"><h1>hello</h1></div>
            </div></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
