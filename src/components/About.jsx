import React, { useState } from "react";
import { Link } from "react-router-dom";
import About2 from "../Assets/images/about.png";
import "../style/about.css";
import About1 from "../Assets/images/about1.jpeg";
import Imgs from "../Assets/images/smallleaf.webp";
import Imgs1 from "../Assets/images/about1.jpeg";
import Footer from "./Footer";

export default function About() {
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
              <Link class="nav-link" to="/Login">
                <i class="fa fa-user nav_itemss"></i>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Cart">
                <i class="fa fa-shopping-cart nav_itemss"></i>
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/Search">
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
              {/* <li class="nav-item">
                <Link class="nav-link" to="/Media">
                  Media
                </Link>
              </li>{" "} */}
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
                <Link class="nav-link" to="/Login">
                  <i class="fa fa-user nav_itemss"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Cart">
                  <i class="fa fa-shopping-cart nav_itemss"></i>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Search">
                  <i class="fa fa-search nav_itemss"></i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid  text-light text-wrap  text-center about_bg">
        <div className=" container-sm row mx-auto">
          <div className="col-md-6  mx-auto">
            <img src={About2} alt="about" className="my-5" />
          </div>
          <div className="col-md-6 text-wrap ">
            <h1 className="text-center ">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem
              voluptatibus quos quia quas voluptate. Quisquam, quibusdam
            </p>
          </div>
        </div>
      </div>
      <div className="container text-wrap my-5">
        <h2 className="text-center ">About Millet</h2>
        <img src={Imgs} className="mx-auto img_about" alt="" />
        <p className="text-center my-3">
          Although millets have been consumed by humans for about 7,000 years,
          little has been known about them. In today’s world, where there are
          abundant amounts of fast-food chains serving foods on-the-go, and with
          the humans being very busy working and living stressful lives, the old
          tradition of eating millets has vanished. Although it is very true
          that the same people have started becoming more health-conscious,
          thanks to their prudence.
        </p>
      </div>
      <div className="container-fluid text-wrap millets_lab_bg  my-4">
        <div className="container text-wrap  text-light ">
          <h2 className="text-center millets_heading ">Millets Library</h2>
          <p className="text-center text-wrap my-2">
            Welcome to Millet Library, To answer all your questions about
            Millets.
          </p>
          <div className="row my-5">
            <div className="col-md-6 ">
              <h3>What Are Millets?</h3>

              <p className="text-wrap">
                Millets are a group of small-seeded grasses, widely grown around
                the world as cereal crops or grains for fodder and human food.
                Millets are important crops in the semiarid tropics of Asia and
                Africa where they are grown on marginal lands.
              </p>
              <h3>What crops are classified as Millets?</h3>
              <p className="text-wrap">
                Millets are a group of small-seeded grasses, widely grown around
                the world as cereal crops or grains for fodder and human food.
                Millets are important crops in the semiarid tropics of Asia and
                Africa where they are grown on marginal lands.
              </p>
            </div>
            <div className="col-md-6">
              <h3>What Are Millets?</h3>
              <p className="text-wrap">
                Millets are a group of small-seeded grasses, widely grown around
                the world as cereal crops or grains for fodder and human food.
                Millets are important crops in the semiarid tropics of Asia and
                Africa where they are grown on marginal lands.
              </p>
              <h3>What crops are classified as Millets?</h3>
              <p className="text-wrap">
                Millets are a group of small-seeded grasses, widely grown around
                the world as cereal crops or grains for fodder and human food.
                Millets are important crops in the semiarid tropics of Asia and
                Africa where they are grown on marginal lands.
              </p>
            </div>
          </div>
          <div className="container text-wrap">
            <h4 className="text-center text-wrap">
              This is where TruMillets become your best friend and bring you
              Ready to Eat Tasty Millet food
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid text-wrap">
        <div className="container my-5">
          <div className="row ">
            <div className="col-md-6">
              <img src={Imgs1} alt="" />
            </div>
            <div className="col-md-6" text-wrap>
              <h2>Healthy Beginning</h2>
              <p className="my-4 text-wrap">
                Popularly termed as Super grains, millets are not only rich in
                nutrition, but also carry a rich history dating back to the
                Indian Bronze Age (4500 BC). Sadly, as years passed, their
                importance reduced to being meagre birdseed. Only to realise
                that it’s the need of the hour.
              </p>
              <p className="text-wrap">
                Millets are a group of small-seeded grasses, widely grown around
                the world as cereal crops or grains for fodder and human food.
                Millets are important crops in the semiarid tropics of Asia and
                Africa where they are grown on marginal lands.
              </p>

              <p className="text-wrap">
                Considering the lifestyle that we lead, especially our eating
                habits, where today’s generation is obsessed with street foods &
                other mouth-watering food items that are heavily induced with
                trans fat, bad carbohydrates, fats & high-cholesterol, eating
                healthy has now become a matter of need more than choice.
              </p>
              <p className="text-wrap">
                What better way to start this healthy eating journey than by
                reconnecting with our roots through millets? An array of grains
                varying in shapes, sizes and colour, millets are gluten-free and
                non- allergenic. Additionally, they are rich in minerals,
                vitamins & fibre.
              </p>
              <p className="text-wrap">
                Millets are an excellent choice to replace your regular food as
                they are not only delicious & high in nutrition, they have less
                calorie count, improve immunity, curb hunger, reduce
                sugar-levels & aid in curing heart problems. Plus, they are
                available in the markets at all times, and throughout the year,
                as they are climate-friendly.
              </p>
              <p className="text-wrap">
                Knowing the ample benefits that these millets provide you with,
                don’t you think we are making a mistake to miss out on such
                healthy food?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5">
        {/* button for read more  */}
        <button
          type="button"
          class="btn my-button mx-auto text-center btn-success rounded-pill"
        >
          Read More
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}
