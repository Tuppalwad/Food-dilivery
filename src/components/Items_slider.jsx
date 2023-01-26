import React from "react";
import Img1 from "../Assets/images/slide-1.jpg";
// import Img2 from "../images/2.jpg";
// import Img3 from "../images/3.jpg";
import "../style/p_items.css";
export default function Itemslider() {
  return (
    <>
      {/* heding 1 for product  */}
      <div className="container text-center my-5">
        <h1>Our Product</h1>
      </div>
      <div className="container-fluid">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner s-hight">
            <div class="carousel-item  active" style={{ height: "200px" }}>
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
