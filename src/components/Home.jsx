import React from "react";
import img1 from "../Assets/images/slide-3.jpg";
import img2 from "../Assets/images/slide-2.jpg";
import img3 from "../Assets/images/slide-1.jpg";
import "../style.css/slider.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container ">
          <Link class="navbar-brand" href="/"></Link>{" "}
          <div className="container nav_in_phone_mode ">
            <div className="logo-2">
              <Link className="logolink" to="/">
                UNICO FOODS
              </Link>
            </div>
            <div className="icons">
              <li class="nav-item">
                <Link class="nav-link icon_s" to="/Search">
                  <i class="fa fa-user"></i>
                </Link>
              </li>
              <li class="nav-item" style={{ marginLeft: "-10px" }}>
                <Link class="nav-link icon_s" to="/Cart">
                  <i class="fa fa-shopping-cart"></i>
                </Link>
              </li>

              <li class="nav-item" style={{ marginLeft: "-15px" }}>
                <Link class="nav-link" to="/Search">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
            </div>
            <div className="menubtn">
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler "
                data-target="#navbarSupportedContent"
                data-toggle="collapse"
                type="button"
                style={{
                  marginTop: "4px",
                  marginLeft: "5px",
                  marginRight: "-5px",
                }}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="logo">
              <Link className="logolink" to="/">
                UNICO FOODS
              </Link>
            </div>
            <ul class="navbar-nav ml-auto my_navbar">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Media">
                  Media
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Profile">
                  Corporate Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">
                  Sign Up
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <div className="icon_in_lg_mode">
                <li class="nav-item">
                  <Link class="nav-link" to="/Search">
                    <i class="fa fa-user"></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Cart">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/Search">
                    <i class="fa fa-search"></i>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol class="carousel-indicators">
          <li
            class="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src={img3} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="home_title">#WeLoveSnak</h1>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={img2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="home_title">#MeakingFoodHelthy</h1>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img src={img1} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="home_title">#FormToFork</h1>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </>
  );
}
