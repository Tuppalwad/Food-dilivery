import React, { useState, useEffect } from "react";
import img1 from "../Assets/images/slide-3.jpg";
import img2 from "../Assets/images/slide-2.jpg";
import img3 from "../Assets/images/slide-1.jpg";
import "../style/home.css";
import { Link } from "react-router-dom";
import Itemslider from "./Items_slider";
import TopClassItems from "./TopClassItems";
import CardSlider from "./Slider";
import Footer from "./Footer";
import Newsitem from "./Newsitem";
import Slider_of_company from "./slider_of_company";
// import Navbar from "./Navbar";
export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        class={
          navbar
            ? "navbar navbar-expand-lg navbar-light bg-dark  fixed-top"
            : "navbar navbar-expand-lg navbar-light  fixed-top"
        }
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/" style={{ color: "white" }}>
            UNICO FOODS
          </Link>
          <div className=" phone_mode_iconss">
            <li class="nav-item ">
              <Link class="nav-link icon_navbar" to="/Login">
                <i class="fa fa-user nav_itemss"></i>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link icon_navbar" to="/Cart">
                <i class="fa fa-shopping-cart nav_itemss"></i>
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link icon_navbar" to="/Search">
                <i class="fa fa-search nav_itemss"></i>
              </Link>
            </li>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto text-center my-0  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link "
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/Millet">
                      Millet
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Flakes">
                      Flakes
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Muesli">
                      Muesli
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Cookies">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link "
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/">
                      Gallary
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Healty living
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Media">
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Blog reviews
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className=" phone_mode">
              <li class="nav-item ">
                <Link class="nav-link  " to="/Login">
                  <i class="fa fa-user nav_itemss"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  " to="/Cart">
                  <i class="fa fa-shopping-cart nav_itemss"></i>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link  " to="/Search">
                  <i class="fa fa-search nav_itemss"></i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div
        class=" carousel slide"
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
            <div class="carousel-item active" data-bs-interval="5000">
              <img src={img3} class="d-block w-100" alt="..." />
              <div class="carousel-caption   d-md-block">
                {/* <h1 className="home_title">#WeLoveSnack</h1> */}
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src={img2} class="d-block w-100" alt="..." />
              <div class="carousel-caption  d-md-block">
                <h1 className="home_title demo">#MeakingFoodHelthy</h1>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img src={img1} class="d-block w-100" alt="..." />
              <div class="carousel-caption  d-md-block">
                {/* <h1 className="home_title">#FormToFork</h1> */}
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
      <CardSlider></CardSlider>
      <Itemslider></Itemslider>
      <TopClassItems></TopClassItems>
      <Newsitem></Newsitem>
      <Slider_of_company></Slider_of_company>
      <Footer />
    </>
  );
}
