import React from "react";
import Bg from "../Assets/images/slide-1.jpg";
import "../style/slider.css";
import { Link } from "react-router-dom";
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
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
                <div className="col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
              </div>
            </div>
            <div class="carousel-item img_hight">
              <div className="row align_item">
                <div className=" col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
                <div className=" col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
                <div className=" col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
              </div>
            </div>
            <div class="carousel-item img_hight">
              <div className="row align_item">
                <div className=" col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
                <div className=" col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
                </div>
                <div className=" col-lg-3 img_product">
                  <Link to="/CardDetails">
                    <img src={Bg} class="d-block  w-100" alt="..." />
                  </Link>
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
