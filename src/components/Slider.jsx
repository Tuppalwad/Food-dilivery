// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import img from "../Assets/images/slide-1.jpg";
// import "../style/slider.css";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// export default function App() {
//   return (
//     <>
//       <div className="container text-center my-4">
//         <h1>Product </h1>
//       </div>
//       <div className="container my_slider">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           slidesPerGroup={3}
//           // loop={true}
//           loopFillGroupWithBlank={true}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div className="img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" img">
//               <img src={img} alt="" />
//               <div className="info">
//                 <h1>hello</h1>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// }
import React from "react";
import Bg from "../Assets/images/slide-1.jpg";
import "../style/slider.css";
function Slider() {
  return (
    <>
      <div className="container text-center my-4">
        <h1>Product </h1>
      </div>
      <div className="container-md">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item img_hight active">
              <div className="row align_item">
                <div className="col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
                <div className="col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
                <div className="col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
              </div>
            </div>
            <div class="carousel-item img_hight">
              <div className="row align_item">
                <div className=" col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
                <div className=" col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
                <div className=" col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
              </div>
            </div>
            <div class="carousel-item img_hight">
              <div className="row align_item">
                <div className=" col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
                <div className=" col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
                <div className=" col-lg-3 img_product">
                  <img src={Bg} class="d-block  w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style={{
              backgroundColor: "black",
              width: "30px",
              height: "77px",
              top: "35%",
            }}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style={{
              backgroundColor: "black",
              width: "30px",
              height: "77px",
              top: "35%",
            }}
          >
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
