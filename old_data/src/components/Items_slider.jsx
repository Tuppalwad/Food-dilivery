import React from "react";
import Img1 from "../Assets/images/slide-1.jpg";
// import Img2 from "../images/2.jpg";
// import Img3 from "../images/3.jpg";
import "../style/p_items.css";
export default function Itemslider() {
  return (
    <>
      {/* heding 1 for product  */}
      <div class="container my-3" style={{ marginTop: "70px" }}>
        <div class="row">
          <div class="col-md-12 my-3">
            <div class="heading mx-auto text-center my-3">
              <h2>Our Products</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide item_slider "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item  active">
            <img src={Img1} class="d-block  w-100 product_img " alt="..." />
          </div>
          <div class="carousel-item ">
            <img src={Img1} class="d-block w-100 product_img " alt="..." />
          </div>
          <div class="carousel-item ">
            <img src={Img1} class="d-block w-100 product_img" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev h-100"
          type="button "
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next h-100"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
