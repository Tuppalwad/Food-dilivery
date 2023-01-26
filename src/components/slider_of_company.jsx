import React from "react";
import Bg from "../Assets/images/slide-1.jpg";
import { Link } from "react-router-dom";
import "../style/c_style.css";
import Imgs from "../Assets/images/smallleaf.webp";

function Slider_of_company() {
  return (
    <>
      <div className="container text-center my-2">
        <h1>Also Find Us On</h1>
        <img src={Imgs} className="mx-auto img_about" alt="" />
      </div>

      <div className="container">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner  ">
            <div
              class="carousel-item active img_hight"
              data-bs-interval="10000"
            >
              <div className="row align_item_2">
                <div className="col-lg-2  ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>

                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
              </div>
            </div>
            <div class="carousel-item img_hight" data-bs-interval="2000">
              <div className="row align_item_2">
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>

                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-2 ">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block c_img w-100" alt="..." />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div class="carousel-item">
            <img src={Bg} class="d-block c_img w-100" alt="..." />
          </div> */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
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

export default Slider_of_company;
