import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark  fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/" style={{ color: "white" }}>
            UNICO FOODS
          </Link>
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
            <ul class="navbar-nav mx-auto text-center mt-0  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link nav_items " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link nav_items" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link nav_items "
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
                <Link class="nav-link nav_items" to="/Media">
                  Media
                </Link>
              </li>{" "} */}
              <li class="nav-item">
                <Link class="nav-link nav_items" to="/Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link nav_items "
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
                <Link class="nav-link nav_items" to="/Login">
                  <i class="fa fa-user"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link nav_items" to="/Cart">
                  <i class="fa fa-shopping-cart"></i>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link nav_items" to="/Search">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
