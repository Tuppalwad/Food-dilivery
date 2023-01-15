import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
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
            <ul class="navbar-nav mx-auto text-center  fs-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
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
                <Link class="nav-link" to="/Media">
                  Media
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link class="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
              {/* <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Millet
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Flakes
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Muesli
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li class="nav-item">
                <Link
                  class="nav-link "
                  to="/Blog"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div className="d-flex phone_mode">
              <li class="nav-item ">
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
          </div>
        </div>
      </nav>
    </div>
  );
}
